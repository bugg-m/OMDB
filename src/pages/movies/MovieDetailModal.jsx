import React from "react";
import { CgClose } from "react-icons/cg";
const MovieDetailModal = (props) => {
  const {
    Poster,
    Title,
    Type,
    Year,
    Actors,
    Rating,
    Plot,
    Director,
    Rated,
    setShowMovieDetails,
  } = props;

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-4/5 rounded-xl cursor-pointer p-10 bg-white relative">
      <CgClose
        className="right-10 top-10 absolute text-2xl"
        onClick={() => setShowMovieDetails(false)}
      />
      <div className="w-11/12 h-full flex cursor-pointer justify-start p-5 gap-10 items-center">
        <img className="w-1/4" src={Poster} alt="Movie Poster" />
        <div className="flex flex-col gap-3 justify-between leading-normal">
          <h5 className="font-bold text-5xl tracking-tight text-gray-900">
            {Title}
          </h5>
          <p className="text-xl text-gray-700">
            <span className="font-bold">Actors: </span> {Actors}
          </p>
          <p className="text-xl text-gray-700">
            <span className="font-bold">Director: </span> {Director}
          </p>
          <p className="text-xl text-gray-700">
            <span className="font-bold">Type: </span>
            {Type}
          </p>

          <p className="text-xl text-gray-700 ">
            <span className="font-bold">Rating: </span>
            {Rating}
          </p>
          <p className="text-xl text-gray-700">
            <span className="font-bold">Rated: </span> {Rated}
          </p>

          <p className="text-xl text-gray-700">
            <span className="font-bold">Year: </span>
            {Year}
          </p>
        </div>
      </div>
      <div className="text-lg p-5 text-gray-700 font-normal">{Plot}</div>
    </div>
  );
};

export default MovieDetailModal;
