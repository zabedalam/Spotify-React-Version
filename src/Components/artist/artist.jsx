import React, { useEffect, useState } from 'react';
import { useDataLayerValue } from '../datalayer/datalayer';
import './artist.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SongRow from '../songRow/songRow';

export default function Artist({ spotify }) {
  const [{ artistId, playing }, dispatch] = useDataLayerValue();
  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const [select, setSelect] = useState(null);
  const [albumHover, setAlbumHover] = useState(null);

  useEffect(() => {
    spotify.getArtist(artistId)
      .then(res => setArtist(res))
      .catch(err => console.log(err));

    spotify.getArtistAlbums(artistId)
      .then(res => setAlbums(res.items))
      .catch(err => console.log(err));

    spotify.getArtistTopTracks(artistId, "US")
      .then(res => {
        setTopTracks(res.tracks);
        // convert playlist.tracks to playlist.tracks.items.track
        // because that's how we extract each track in the footer player
        let playlist = res;
        let items = res.tracks;
        items = items.map(item => ({'track': item}));
        playlist.tracks = {};
        playlist.tracks.items = items;

        dispatch({
          type: 'SET_PLAYLIST',
          playlist: playlist
        });

        dispatch({
          type: 'SET_INDEX',
          index: 0
        });
      })
      .catch(err => console.log(err));

  }, [])

  // for visual select purpose only
  const handleSelect = (id) => {
    if(select) setSelect(null);
    else setSelect(id);
  }

  const playSong = (trackId, index) => {
    dispatch({
      type: 'SET_ITEM',
      item: topTracks[index]
    });

    dispatch({
      type: 'SET_INDEX',
      index: index
    });

    dispatch({
      type: 'SET_PLAYING',
      playing: trackId
    });

    dispatch({
      type: 'SET_PAUSE',
      paused: false
    })
  };

  const getAlbumTracks = (albumId, imageURL) => {
    spotify.getAlbumTracks(albumId)
      .then(res => {
        // format the playlist in the way we will extract the data later
        let items = res.items;
        items = items.map(item => ({'track': item}));
        let playlist = { tracks: {} };
        playlist.tracks.items = items;
        playlist.images = [{url: imageURL}];

        dispatch({
          type: 'SET_PLAYLIST',
          playlist: playlist
        });

        dispatch({
          type: 'SET_INDEX',
          index: 0
        });

        dispatch({
          type: 'SET_TAB',
          tab: null
        });

      })
      .catch(err => console.log(err));
  }

  return (
    <div className="artist">
      <div className="artist__top">

        <img src={artist?.images[0].url} alt={artist?.name}/>

        <div className="artist__info">
          <h1>{artist?.name}</h1>
          <p>{`Genres: `}<span>{artist?.genres.join(', ')}</span></p>
          <p>{`Popularity: `}<span>{artist?.popularity}</span></p>
          <p>{`Followers: `}<span>{artist?.followers.total.toLocaleString()}</span></p>
          <button>Follow</button>
        </div>
      </div>

      <div className="artist__topTracks">
        <h2>Popular</h2>
        <div className="artist__popular">
          {
            topTracks.map((track, i) => (
              <SongRow
                key={i}
                track={track}
                num={i+1}
                play={playSong}
                playingId={playing}
                onSelect={() => handleSelect(track.id)}
                select={select}
              />
            ))
          }
        </div>
      </div>

      <div className="artist__bottom">
        <h2>Albums</h2>
        <div className="artist__albums">
          {
            albums.map((album, i) => (
              <div className="artist__album"
                key={i}
                onClick={() => getAlbumTracks(album.id, album.images[0].url)}
                onMouseEnter={() => setAlbumHover(album.id)}
                onMouseLeave={() => setAlbumHover(null)}
              >
                { albumHover === album.id && <PlayArrowIcon /> }
                <img src={album.images[0].url} alt={album.name} style={{ width: '160px', height: '160px'}}/>
                <p>{album.name}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
