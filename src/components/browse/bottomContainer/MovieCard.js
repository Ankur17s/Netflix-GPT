import React from "react";
import { IMG_CDN_URL } from "../../../utils/constants";

const MovieCard = ({ moviesList }) => {
  const { poster_path } = moviesList;
  return (
    <div className="w-48 px-1">
      <img className="rounded-lg" alt="logo" src={IMG_CDN_URL + poster_path} />
    </div>
  );
};

export default MovieCard;
