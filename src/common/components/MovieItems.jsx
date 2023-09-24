import React from "react";

const MovieItems = (props) => {
  const { Poster, Title, Type, Year } = props;

  return (
    <div className="w-full border-b-2 gap-4 h-8 flex items-center cursor-pointer">
      <img className="w-5 h-5" src={Poster} alt="Movie Poster" />
      <div className="flex gap-3 justify-between leading-normal">
        <h5 className="font-semibold tracking-tight text-gray-800">
          {Title.slice(0, 40)}...
        </h5>
        <p className="font-normal text-gray-700 ">{Type}</p>
        <p className="font-normal text-gray-700">{Year}</p>
      </div>
    </div>
  );
};

export default MovieItems;
