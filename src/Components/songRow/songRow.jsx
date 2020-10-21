import React from 'react';

export default function SongRow({track,playSong}) {
    console.log(track)
  return (
    <>
    {/* <h1>I am song Row</h1> */}
    <div className="songRow">
        <img className="songRow__album" src={track.album.images[0]} alt=""/>
        <div className="songRow__info">
  <h1>{track.name}</h1>
  <p>
    {track.artists.map((artist)=>artist.name).join(", ")} - {" "}
    {track.album.name} 
  </p>
        </div>
    </div>
    </>
  );
}
