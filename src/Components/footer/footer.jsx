import React, { useRef, useState } from "react";
import ReactPlayer from "react-player/lazy";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import LoopIcon from "@material-ui/icons/Loop";

import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeUpOutlinedIcon from "@material-ui/icons/VolumeUpOutlined";

import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
import "./footer.css";
import { useDataLayerValue } from "../datalayer/datalayer";

const getTime = (secs) => {
  let minutes = 0;
  let seconds = 0;
  minutes += Math.floor(secs / 60);
  seconds += Math.floor(secs) % 60;
  seconds = seconds === 0 ? `00` : seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:` + seconds;
};

export default function Footer({ spotify }) {
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playedFraction, setPlayedFraction] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(30); // all songs are 30s preview only
  const [
    { item, playing, paused, playlist, index },
    dispatch,
  ] = useDataLayerValue();
  const ref = useRef();

  const handlePause = () => {
    dispatch({
      type: "SET_PAUSE",
      paused: !paused,
    });
  };

  const handleProgress = (progress) => {
    setPlayedFraction(progress.played === 1 ? 0 : progress.played);
    setPlayedSeconds(progress.played === 1 ? 0 : progress.playedSeconds);
  };

  const handleNext = () => {
    handleEnd();
  };

  const handlePrev = () => {
    dispatch({
      type: "SET_PAUSE",
      paused: false,
    });

    if (index - 1 >= 0) {
      let pos = index - 1;
      let prevTrack = playlist?.tracks?.items?.[pos]?.track;
      while (prevTrack && !prevTrack.preview_url) {
        pos--;
        prevTrack = playlist?.tracks?.items?.[pos]?.track;
      }

      if (!prevTrack) return;

      dispatch({
        type: "SET_INDEX",
        index: pos,
      });

      dispatch({
        type: "SET_ITEM",
        item: prevTrack,
      });

      dispatch({
        type: "SET_PLAYING",
        playing: prevTrack.id,
      });
    } else {
      dispatch({
        type: "SET_PLAYING",
        playing: null,
      });
    }
  };

  const handleShuffle = () => {
    if (playlist?.tracks?.items?.length > 0) {
      const max = playlist.tracks.items.length;
      const min = 0;
      let pos = Math.floor(Math.random() * (max - min) + min);
      let res = playlist?.tracks?.items?.[pos]?.track;
      while (res && !res.preview_url) {
        pos = Math.floor(Math.random() * (max - min) + min);
        res = playlist?.tracks?.items?.[pos]?.track;
      }

      dispatch({
        type: "SET_INDEX",
        index: pos,
      });

      dispatch({
        type: "SET_ITEM",
        item: res,
      });

      dispatch({
        type: "SET_PLAYING",
        playing: res.id,
      });
    }
  };

  const handlePlayerChange = (v) => {
    setPlayedFraction(v); // update slider position
    setPlayedSeconds(totalSeconds * v);
    ref.current && ref.current.seekTo(v, "fraction"); // update player played time
  };

  const handleEnd = () => {
    dispatch({
      type: "SET_PAUSE",
      paused: false,
    });

    if (shuffle) {
      handleShuffle();
      return;
    }

    // automatically play next song if there is one
    if (index + 1 < playlist?.tracks?.items?.length) {
      let pos = index + 1;
      let nextTrack = playlist?.tracks?.items?.[pos]?.track;
      while (nextTrack && !nextTrack.preview_url) {
        pos++;
        nextTrack = playlist?.tracks?.items?.[pos]?.track;
      }

      if (!nextTrack) return;

      dispatch({
        type: "SET_INDEX",
        index: pos,
      });

      dispatch({
        type: "SET_ITEM",
        item: nextTrack,
      });

      dispatch({
        type: "SET_PLAYING",
        playing: nextTrack.id,
      });
    } else {
      dispatch({
        type: "SET_PLAYING",
        playing: null,
      });
    }
  };

  // safari bowser have this error, first click on the song wont play
  // pause it and let users click again
  const handleError = () => {
    dispatch({
      type: "SET_PAUSE",
      paused: true,
    });
  };

  return (
    <>
      <div className="footer">
        <div className="footer__left">
          {item && (
            <img
              className="footer__albumLogo"
              src={item.album?.images?.[0]?.url || playlist.images?.[0]?.url}
              alt={item.name}
            />
          )}
          <div className="footer__songInfo">
            <h4>{item && item.name}</h4>
            <p>
              {item && item.artists.map((artist) => artist.name).join(", ")}
            </p>
          </div>
        </div>

        <div className="footer__center">
          <div className="footer__centerTop">
            <ShuffleIcon
              className={`footer__toggle ${shuffle && "footer__green"}`}
              onClick={() => setShuffle((shuffle) => !shuffle)}
            />
            <SkipPreviousIcon className="footer__icon" onClick={handlePrev} />
            {paused ? (
              <PlayCircleOutlineIcon
                fontSize="large"
                className="footer__icon"
                onClick={handlePause}
              />
            ) : (
              <PauseCircleOutlineIcon
                fontSize="large"
                className="footer__icon"
                onClick={handlePause}
              />
            )}
            <SkipNextIcon className="footer__icon" onClick={handleNext} />
            <LoopIcon
              className={`footer__toggle ${repeat && "footer__green"}`}
              onClick={() => setRepeat((repeat) => !repeat)}
            />
          </div>
          <div className="footer__centerBottom">
            <p style={{ marginRight: "5px" }}>{getTime(playedSeconds)}</p>
            <Slider
              aria-labelledby="continuous-slider"
              min={0}
              max={1}
              step={0.00000001}
              value={playedFraction}
              onChange={(e, v) => handlePlayerChange(v)}
            />
            <p style={{ marginLeft: "5px" }}>{getTime(totalSeconds)}</p>
          </div>
        </div>

        <div className="footer__right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <VolumeUpOutlinedIcon />
            </Grid>
            <Grid item xs>
              <Slider
                aria-labelledby="continuous-slider"
                defaultValue={1}
                min={0}
                max={1}
                step={0.001}
                onChange={(e, v) => setVolume(v)}
              />
            </Grid>
          </Grid>
        </div>
      </div>
      {
        //the ref pointing to the ReactPlayer will be used to call seekTo
        item && (
          <ReactPlayer
            ref={ref}
            url={item.preview_url}
            width={0}
            height={0}
            playing={!paused}
            volume={volume}
            loop={repeat}
            onEnded={handleEnd}
            onError={handleError}
            onProgress={(progress) => handleProgress(progress)}
          />
        )
      }
    </>
  );
}
