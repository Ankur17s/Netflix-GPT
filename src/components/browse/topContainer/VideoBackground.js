import { useSelector } from "react-redux";
import useBackgroundVideo from "../../../customHooks/useBackgroundVideo";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.trailerBackground);

  // fetch video backgound trailer
  useBackgroundVideo(movieId);

  return (
    <div className="">
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
