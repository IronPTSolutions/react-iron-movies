import { PageLayout } from '../components/layouts';
import { MoviesFinder, MoviesList } from '../components/movies';
import jumboBg from '../assets/images/backgrounds/bg-movies.jpg';
import { useEffect, useState } from 'react';
import * as TMDBService from '../services/tmdb-service';
import { useSearchParams } from 'react-router';

function SearchMoviePage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');

  useEffect(() => {
    async function fetchMovies() {
      const movies = await TMDBService.searchMovie({ name });
      setMovies(movies);
    }

    fetchMovies();
  }, [name]);

  return (
    <PageLayout
      jumbotron={{
        backgroundImage: jumboBg,
        title: 'Where Movie Nights Begin',
        subtitle: "Discover, stream, and explore the world's greatest movies all in one place."
      }}
    >

      <MoviesFinder />
      <MoviesList className="mt-2" movies={movies} />

    </PageLayout>
  );
}

export default SearchMoviePage;