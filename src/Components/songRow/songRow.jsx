import React, { useState } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { useDataLayerValue } from "../datalayer/datalayer";
import "./songRow.css";

// convert ms to 00:00 format
const getTime = (time) => {
  const totalSecs = Math.floor(time / 1000);
  const minutes = Math.floor(totalSecs / 60);
  const secs = totalSecs % 60;

  let part2;
  if (secs < 10) part2 = `0${secs}`;
  else if (secs === 0) part2 = "00";
  else part2 = `${secs}`;

  return `${minutes}:` + part2;
};

const songState = (track, id, hover, paused, num) => {
  if (track.id === id) {
    if (!track.preview_url) return <ErrorOutlineIcon />;
    if (paused) return <PlayArrowIcon />;
    if (hover) return <PauseIcon />;

    // return loading gif
    return (
      <img
        style={{ height: "20px", width: "20px" }}
        src="https://open.scdn.co/cdn/images/equaliser-animated-green.73b73928.gif"
        alt="loading"
      />
    );
  }

  if (hover) return <PlayArrowIcon />;
  return num;
};

export default function SongRow({
  track,
  num,
  Icon,
  play,
  playingId,
  onSelect,
  select,
}) {
  const [hoverOver, setHoverOver] = useState(false);
  const [{ playing, paused, playlist }, dispatch] = useDataLayerValue();

  const handlePause = (id) => {
    // switch to another song
    if (id !== playing) {
      dispatch({
        type: "SET_PLAYING",
        playing: id,
      });

      dispatch({
        type: "SET_INDEX",
        index: num - 1,
      });

      dispatch({
        type: "SET_PAUSE",
        paused: false,
      });

      dispatch({
        type: "SET_ITEM",
        item: track,
      });
      return;
    }

    dispatch({
      type: "SET_PAUSE",
      paused: !paused,
    });
  };

  const handleEnter = () => {
    setHoverOver(true);
  };

  const handleLeave = () => {
    setHoverOver(false);
  };

  return num !== "#" ? (
    <div
      className="songRow"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onDoubleClick={() => play(track.id, num - 1)}
      onClick={onSelect}
      style={
        select === track.id
          ? { backgroundColor: "#707070", color: "white" }
          : {}
      }
    >
      <div className="songRow__left">
        <p className="songRow__order" onClick={() => handlePause(track.id)}>
          {songState(track, playingId, hoverOver, paused, num)}
        </p>
        <img
          className="songRow__album"
          src={track.album?.images[0]?.url || playlist.images?.[0]?.url}
          alt=""
        />
        <div className="songRow__info">
          <h4 style={playing === track.id ? { color: "#1ed15e" } : {}}>
            {track.name}
          </h4>
          <p style={select === track.id ? { color: "inherit" } : {}}>
            {track.artists.map((artist) => artist.name).join(", ")}
          </p>
        </div>
      </div>

      <p
        className="songRow__albumName"
        style={select === track.id ? { color: "inherit" } : {}}
      >
        {track.album?.name}
      </p>
      <p
        className="songRow__time"
        style={select === track.id ? { color: "inherit" } : {}}
      >
        {getTime(track.duration_ms)}
      </p>
    </div>
  ) : (
    <div className="songRow songRow__underline">
      <div className="songRow__left">
        <p className="songRow__order">{num}</p>
        <div className="songRow__info">
          <h4 style={{ fontWeight: "400" }}>{"TITLE"}</h4>
        </div>
      </div>

      <p className="songRow__albumName">{"ALBUM"}</p>
      <p className="songRow__time">
        <Icon />
      </p>
    </div>
  );
}
