import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { MovieDetails } from "../../types/types";

const useMovies = ({
  search,
  selectedImdbId,
}: {
  search: string;
  selectedImdbId: number;
}) => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState<MovieDetails[]>();

  const getMoviesList = useCallback(() => {
    async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?s=${search}&apikey=d0b35cd7`
        );
        if (response.data.Search) {
          console.log(response.data.Search);
          setMovieList(response.data.Search);
          setLoading(false);
        } else {
          setMovieList([]);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
  }, [search]);

  const getMovieDetail = useCallback(() => {
    async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?i=${selectedImdbId}&apikey=d0b35cd7`
        );
        if (response) {
          setMovieDetails(response?.data);
          setLoading(false);
        } else {
          setMovieDetails([]);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
  }, [selectedImdbId]);

  useEffect(() => {
    getMoviesList();
    getMovieDetail();
  }, [getMovieDetail, getMoviesList, search, selectedImdbId]);

  return {
    loading,
    movieList,
    movieDetails,
    setMovieList,
    setMovieDetails,
  };
};

export default useMovies;
