import { useEffect, useState } from "react";
import * as TMDBService  from "../../../services/tmdb-service";
import MoviesItem from "../movies-item/movies-item";


function MoviesList({ genre }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await TMDBService.listMovies(genre);
        console.log(movies);
        setMovies(movies);
      } catch(error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, [genre]);

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id))
  } 

  console.log('Redering movies list....')
  return (
    <>
      <div className="d-flex flex-wrap gap-2">
        {movies.map((movie) => (
          <MoviesItem key={movie.id} movie={movie} onDelete={() => handleDeleteMovie(movie.id)} />
        ))}
      </div>
    </>
  );
}

export default MoviesList;
