import useNowPlayingMovies from "../../customHooks/useNowPlayingMovies";
import Header from "../common/Header";
import MovieContainer from "./topContainer/MovieContainer";

const Browse = () => {
  // calling getNowPlayingMovies
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MovieContainer />
      {/* 
        MainContainer
          - VideoBackground
          - VideoTitle
        SecondaryContainer
          - MoviesLists * n
            - MovieCards * n
      */}
    </div>
  );
};

export default Browse;
