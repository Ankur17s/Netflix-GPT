const MovieTitle = ({ original_title, overview }) => {
  return (
    <div className="absolute text-white pt-[17%] pl-20 aspect-video ">
      <h1 className="font-bold text-4xl">{original_title}</h1>
      <p className="w-2/5 pt-5">{overview}</p>
      <div className="pt-5 flex gap-3">
        <button className="bg-white text-black py-3 px-6 rounded-md flex gap-2">
          <span>▶️</span>
          Play
        </button>
        <button className="bg-black text-white bg-opacity-80 py-3 px-7 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default MovieTitle;
