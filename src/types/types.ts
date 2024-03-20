import { Dispatch } from "react";

export type MovieDetails = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  Actors?: string;
  Rating?: string;
  Plot?: string;
  Director?: string;
  imdbID?: number;
  Rated?: string;
  loading?: boolean;
  setShowMovieDetails?: Dispatch<React.SetStateAction<boolean>>;
};
