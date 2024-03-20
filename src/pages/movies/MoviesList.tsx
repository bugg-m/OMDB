import { useState } from "react";
import MovieDetailModal from "./MovieDetailModal";
import SearchBar from "../../common/components/SearchBar";
import MovieItems from "../../common/components/MovieItems";
import { MovieDetails } from "../../types/types";
import useMovies from "../../common/apis/useMovies";

const MoviesList = () => {
  const [search, setSearch] = useState("");
  const [showMovieDetails, setShowMovieDetails] = useState<boolean>(false);
  const [selectedImdbId, setSelectedImdbId] = useState<number>();
  const { loading, movieList, movieDetails } = useMovies({
    search,
    selectedImdbId,
  });

  const handleSelectMovie = (movieDetail: MovieDetails) => {
    setShowMovieDetails(true);
    setSelectedImdbId(movieDetail?.imdbID);
  };

  return (
    <div className="flex w-full min-h-screen justify-start items-center flex-col relative">
      <div className="text-9xl font-serif font-extrabold m-10">
        <span className="text-red-600">S</span>
        <span className="text-yellow-400">E</span>
        <span className="text-green-600">A</span>
        <span className="text-blue-600">R</span>
        <span className="text-red-600">C</span>
        <span className="text-blue-600">H</span>
      </div>

      <div className="home w-2/5 p-3 border rounded-3xl border-gray-600 flex flex-col justify-center items-center">
        <SearchBar setSearch={setSearch} search={search} />
        {movieList?.map((movieDetail: MovieDetails, index) => {
          return (
            <div
              onClick={() => {
                handleSelectMovie(movieDetail);
              }}
              className="w-full pl-2 m-1"
              key={index}
            >
              <MovieItems
                Poster={movieDetail?.Poster}
                Year={movieDetail?.Year}
                Title={movieDetail?.Title}
                Type={movieDetail?.Type}
              />
            </div>
          );
        })}
      </div>

      {showMovieDetails && (
        <div
          onClick={() => {
            setShowMovieDetails(false);
            setSelectedImdbId(0);
          }}
          className="absolute w-full h-screen place-content-center bg-zinc-900/90 flex justify-center, items-center"
        >
          <MovieDetailModal
            loading={loading}
            movieDetails={movieDetails}
            setShowMovieDetails={setShowMovieDetails}
          />
        </div>
      )}
    </div>
  );
};

export default MoviesList;
