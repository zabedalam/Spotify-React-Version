import React, { useState } from 'react';
import './playlist.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import { useDataLayerValue } from '../datalayer/datalayer';
import SongRow from '../songRow/songRow';

export default function Playlist() {
  const [select, setSelect] = useState(null);
  const [{ user, playlist, playing }, dispatch] = useDataLayerValue();

  const playSong = (id, index) => {
    dispatch({
      type: 'SET_ITEM',
      item: playlist.tracks.items[index].track
    });

    dispatch({
      type: 'SET_INDEX',
      index: index
    });

    dispatch({
      type: 'SET_PLAYING',
      playing: id
    });

    dispatch({
      type: 'SET_PAUSE',
      paused: false
    })
  };

  const handleSelect = (id) => {
    if(select) setSelect(null);
    else setSelect(id);
  }

  return (
    <>
      <div className="playlist__info">
        {
          (playlist?.images?.[0]) ?
          <img
            src={playlist?.images[0]?.url}
            alt={playlist?.name}
          /> :
          <img
            src='https://png.pngtree.com/png-vector/20190329/ourlarge/pngtree-vector-music-note-icon-png-image_889465.jpg'
            alt='No Album Art'
            style={{ opacity: '0.6'}}
          />
        }
        <div className="playlist__infoText">
          <strong>PLAYLIST</strong>
          <h2>{playlist?.name}</h2>
          <p>{playlist?.description || user?.display_name}</p>
        </div>
      </div>

      <div className="playlist__songs">
        <div className="playlist__icons">
          <PlayCircleFilledIcon className="playlist__play" />
          <FavoriteIcon fontSize="large" className="playlist__fav"/>
          <MoreHorizIcon  className="playlist__more"/>
        </div>
        <SongRow key={999} num={'#'} Icon={AccessTimeOutlinedIcon} />
        {
          playlist?.tracks.items.map((item, i) => (
            <SongRow
              key={i}
              track={item.track}
              num={i+1}
              play={playSong}
              playingId={playing}
              onSelect={() => handleSelect(item.track.id)}
              select={select}
            />
          ))
        }
      </div>
    </>
  );
}
