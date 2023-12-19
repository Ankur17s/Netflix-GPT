import MovieCard from "./MovieCard";

const MovieList = ({ title, moviesList }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {moviesList?.map((movie) => (
            <MovieCard key={movie.id} moviesList={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
