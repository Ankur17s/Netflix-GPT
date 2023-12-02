import { useDispatch } from "react-redux";
import { addMovieBackground } from "../redux/moviesSlice";
import { useEffect } from "react";
import { API_HEADER } from "../utils/constants";

const useBackgroundVideo = (movieId) => {
  const dispatch = useDispatch();
  const getVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_HEADER
    );
    const json = await data.json();
    const filterTrailer = json?.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
    dispatch(addMovieBackground(trailer));
  };

  useEffect(() => {
    getVideo();
  }, []);
};

export default useBackgroundVideo;
