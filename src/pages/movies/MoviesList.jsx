import React, { useEffect, useState } from "react";
import MovieItems from "../../common/components/MovieItems";
import SearchBar from "../../common/components/SearchBar";
import { getMovies, getMoviesDetails } from "../../common/apis/getMovies";
import MovieDetailModal from "./MovieDetailModal";

const MoviesList = () => {
  const [search, setSearch] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [selectedImdbId, setSelectedImdbId] = useState(null);
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    getMoviesList();
    getMovieDetail();
  }, [search, selectedImdbId]);

  const handleSelectMovie = (data) => {
    setShowMovieDetails(true);
    setSelectedImdbId(data.imdbID);
  };
  const getMoviesList = () => {
    try {
      getMovies(search)
        .then((res) => {
          const response = res;
          if (response.data.Search) {
            console.log(response.data.Search);
            setMovieList(response.data.Search);
            setLoading(false);
          } else {
            setMovieList([]);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const getMovieDetail = () => {
    try {
      getMoviesDetails(selectedImdbId)
        .then((res) => {
          const response = res;
          if (response) {
            setMovieDetail(response.data);
            setLoading(false);
          } else {
            setMovieDetail([]);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="flex w-full min-h-screen justify-center p-10 items-center flex-col relative">
      <div className="text-9xl font-serif font-extrabold m-2">
        <span className="text-red-600">S</span>
        <span className="text-yellow-400">E</span>
        <span className="text-green-600">A</span>
        <span className="text-blue-600">R</span>
        <span className="text-red-600">C</span>
        <span className="text-blue-600">H</span>
      </div>
      {loading ? (
        "Loading..."
      ) : (
        <div className="home w-2/5 p-3 border rounded-3xl border-gray-600 flex flex-col justify-center items-center">
          <SearchBar setSearch={setSearch} search={search} />

          {movieList.map((data, index) => {
            return (
              <div
                onClick={() => {
                  handleSelectMovie(data);
                }}
                className="w-full pl-2 m-1"
                key={index}
              >
                <MovieItems
                  Poster={data.Poster}
                  Title={data.Title}
                  Type={data.Type}
                  Year={data.Year}
                />
              </div>
            );
          })}
        </div>
      )}

      {showMovieDetails && (
        <div
          onClick={() => {
            setShowMovieDetails(false);
            setSelectedImdbId(null);
          }}
          className="absolute w-full h-screen place-content-center bg-zinc-900/90 flex justify-center, items-center"
        >
          <MovieDetailModal
            Poster={movieDetail.Poster}
            Title={movieDetail.Title}
            Type={movieDetail.Type}
            Year={movieDetail.Year}
            Actors={movieDetail.Actors}
            Rating={movieDetail.imdbRating}
            Plot={movieDetail.Plot}
            Director={movieDetail.Director}
            Genre={movieDetail.Genre}
            Rated={movieDetail.Rated}
            setShowMovieDetails={setShowMovieDetails}
          />
        </div>
      )}
    </div>
  );
};

export default MoviesList;
