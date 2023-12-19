import Header from "../common/Header";
import MoviesWrapper from "./bottomContainer/MoviesWrapper";
import MovieContainer from "./topContainer/MovieContainer";
import useNowPlayingMovies from "../../customHooks/useNowPlayingMovies";
import usePopularMovies from "../../customHooks/usePopularMovies";
import useTopRatedMovies from "../../customHooks/useTopRatedMovies";
import useUpcomingMovies from "../../customHooks/useUpcomingMovies";
import GptSearchPage from "./gptSearch/GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const getGptSearch = useSelector((store) => store.gpt.toggleGptSearch);
  // calling Movies and dispatch to redux store
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {getGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MovieContainer />
          <MoviesWrapper />
        </>
      )}

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
