import axios from "axios";

export const getMovies = (search) => {
  return axios
    .get(`http://www.omdbapi.com/?s=${search}&apikey=b8e495b3`)
    .then((respons) => {
      return respons;
    });
};

export const getMoviesDetails = (selectedImdbId) => {
  return axios
    .get(`http://www.omdbapi.com/?i=${selectedImdbId}&apikey=b8e495b3`)
    .then((respons) => {
      return respons;
    });
};
