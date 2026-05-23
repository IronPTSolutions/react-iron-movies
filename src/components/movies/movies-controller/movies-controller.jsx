import { useEffect, useState } from "react";
import MoviesList from "../movies-list/movies-list";
import * as TMDBService from "../../../services/tmdb-service";


function MoviesController({ genre, limit }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      async function fetchMovies() {
        try {
          const movies = await TMDBService.listMovies({ genre, limit });
          console.log(movies.length);
          setMovies(movies);
        } catch(error) {
          console.error(error);
        }
      }
  
      fetchMovies();
    }, [genre, limit]);

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id))
  } 

  return (
    <MoviesList movies={movies} onDeleteMovie={handleDeleteMovie} />
  );
}

export default MoviesController;