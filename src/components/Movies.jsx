import React from "react";
import { Movie } from "./Movie";

export function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className="page__movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h2>Sorry, the movies has not found</h2>
      )}
    </div>
  );
}
