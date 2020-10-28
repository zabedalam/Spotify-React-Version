import React, { useState, useEffect } from 'react';
import { useDataLayerValue } from '../datalayer/datalayer';
import './browse.css';
import Category from '../category/category';

export default function Browse({ spotify }) {
  const [{}, dispatch] = useDataLayerValue();
  const [categories, setCategories] = useState([]);
  const [topArtists, setTopArtists] = useState([]);

  useEffect(() => {
    spotify.getCategories({ limit: 50, country: 'US'})
      .then(res => {
        setCategories(res.categories.items);
      })
      .catch(err => console.log(err));

      spotify.getMyTopArtists({ limit: 20 })
        .then(res => {
          setTopArtists(res.items);
        })
        .catch(err => console.log(err));
  }, []);

  const getPlaylist = (category_id) => {
    // get a list of playsts for the given category id
    spotify.getCategoryPlaylists(category_id, { limite: 1 })
      .then(res => {
        const pid = res.playlists.items[0].id;
        // get only the first playlist for this category
        spotify.getPlaylist(pid)
          .then(data => {
            dispatch({
              type: 'SET_PLAYLIST',
              playlist: data
            });

            dispatch({
              type: 'SET_TAB',
              tab: null
            });
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  const getArtistInfo = (id) => {
    dispatch({
      type: 'SET_ARTIST',
      artistId: id
    });

    dispatch({
      type: 'SET_TAB',
      tab: 'Artist'
    });
  }

  return (
    <div className="browse">
      <div className="browse__top">
        <h2>Your top artists</h2>
        <div className="browse__topGenres">
          {
            topArtists.map((artist, i) => (
              <Category
                key={i}
                url={artist.images?.[0]?.url}
                name={artist.name}
                type={artist.type}
                handleClick={() => getArtistInfo(artist.id)}
              />
            ))
          }
        </div>
      </div>

      <div className="browse__bottom">
        <h2>Browse all</h2>
        <div className="browse__bottomCategories">
          {
            categories.map((category, i) => (
              <Category
                key={i}
                url={category.icons?.[0]?.url}
                name={category.name}
                handleClick={() => getPlaylist(category.id)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}
