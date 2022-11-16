import React from "react";
import "./MovieCard.css";

const MovieCard = ({ title, vote_average, poster_path, overview }) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";
  const defaultImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk2qjpN6GW0ewy_0IjTrYo6sDMG_bN_v_Geg&usqp=CAU";

  return (
    <div className="card">
      <div className="poster">
        <img src={poster_path ? API_IMG + poster_path : defaultImage} alt="" />
      </div>
      <div className="info">
        <p className="title">{title}</p>
        <p className="vote">{vote_average}</p>
      </div>

      <div className="overview">
        <h2 className="title_overview">Overview</h2>
        <h3 className="overview_info">{overview}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
