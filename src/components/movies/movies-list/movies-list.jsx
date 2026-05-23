import { useEffect, useState } from "react";
import MoviesItem from "../movies-item/movies-item";

function MoviesList({ movies, className = '', onDeleteMovie = () => {} }) {
  return (
    <div className={`d-flex flex-wrap gap-2 mt-2 ${className}`}>
      {movies.map((movie) => (
        <MoviesItem key={movie.id} movie={movie} onDelete={() => onDeleteMovie(movie.id)} />
      ))}
    </div>
  );
}

export default MoviesList;
