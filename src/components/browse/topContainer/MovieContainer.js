import React from "react";
import MovieTitle from "./MovieTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MovieContainer = () => {
  const movie = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movie) return;

  const mainMovie = movie[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <MovieTitle original_title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MovieContainer;
