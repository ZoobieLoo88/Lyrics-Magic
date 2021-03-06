import React from "react";
import "./Lyrics.css";

export default function Lyrics(props) {
  return (
    <div className="field">
      <div>
        <header className="title">
          <h1 className="mainTitle">Lyrics Magic</h1>
          <h3>
            Find your favorite lyrics by entering the artist and the name of the
            song below
          </h3>
        </header>
      </div>
      <br></br>
      <br></br>
      <input
        type="text"
        className="artistName"
        placeholder="Artist Name"
        name="artist"
        onChange={props.handleChange}
      />
      <br></br>
      <br></br>
      <input
        type="text"
        className="songTitle"
        placeholder="Song Title"
        name="song"
        onChange={props.handleChange}
      />
      <br></br>
      <br></br>
      <button className="button" onClick={props.handleClick}>
        Submit
      </button>
    </div>
  );
}
