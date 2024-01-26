const MovieItems = ({ data }: any) => {
  const { Poster, Title, Type, Year } = data;

  return (
    <div className="w-full border-b-2 gap-4 h-8 flex items-center cursor-pointer">
      <img className="w-5 h-5 rounded-full" src={Poster} alt="Movie Poster" />
      <div className="flex gap-3 justify-between leading-normal">
        <h5 className="font-semibold tracking-tight text-gray-800">
          {Title.length > 25 ? `${Title.slice(0, 40)}...` : Title}
        </h5>
        <p className="font-normal text-gray-700 ">{Type}</p>
        <p className="font-normal text-gray-700">{Year}</p>
      </div>
    </div>
  );
};

export default MovieItems;
