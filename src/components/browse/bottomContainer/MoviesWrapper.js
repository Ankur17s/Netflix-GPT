import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MoviesWrapper = () => {
  const moviesList = useSelector((store) => store.movies);

  return (
    moviesList.nowPlayingMovies && (
      <div className="bg-black ">
        <div className="-mt-72">
          <MovieList
            title="Now Playing"
            moviesList={moviesList.nowPlayingMovies}
          />
          <MovieList
            title="Popular Movies"
            moviesList={moviesList.popularMovies}
          />
          <MovieList title="Top Rated" moviesList={moviesList.topRatedMovies} />
          <MovieList
            title="Upcoming Movies"
            moviesList={moviesList.upcomingMovies}
          />
          <MovieList title="Comedy" moviesList={moviesList.nowPlayingMovies} />

          {/* 
        MoviesList = "Trending"
            - MovieCard * n
        MoviesList = "Now Playing"
            - MovieCard * n
        MoviesList = "Recently Added"
            - MovieCard * n
      */}
        </div>
      </div>
    )
  );
};

export default MoviesWrapper;
