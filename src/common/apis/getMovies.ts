import axios from "axios";

export const getMovies = async function (search: string) {
  return await axios
    .get(`http://www.omdbapi.com/?s=${search}&apikey=d0b35cd7`)
    .then((respons) => {
      return respons;
    });
};

export const getMoviesDetails = async function (selectedImdbId: number) {
  return await axios
    .get(`http://www.omdbapi.com/?i=${selectedImdbId}&apikey=d0b35cd7`)
    .then((respons) => {
      return respons;
    });
};
