import axios from 'axios';
import genres from '../data/genres.json';

const http = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
  } 
});

const imagesBaseUrl = 'https://image.tmdb.org/t/p/original';


function parseMovie(movie) {

  function toGenre(id) {
    const [genre,] = Object.entries(genres)
      .find(([name, genreId]) => id === genreId) ?? [];
    return genre;
  }

  return {
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    poster: `${imagesBaseUrl}${movie.poster_path}`,
    backdrop: `${imagesBaseUrl}${movie.backdrop_path}`,
    releaseDate: movie.release_date,
    rating: movie.vote_average,
    genres: movie.genre_ids.map((id) => toGenre(id)).filter((genre) => genre)
  }
}


export async function listMovies({ genre, limit } = {}) {
  const params = {}
  if (genre) {
    params.with_genres = genres[genre];
  }
  const { data } = await http.get('/discover/movie', { params });
  return data.results?.map((movie) => parseMovie(movie)).slice(0, limit) ?? [];
}

export async function searchMovie({ name }) {
  const { data } = await http.get('/search/movie', { params: { query: name }})
  return data.results?.map((movie) => parseMovie(movie)) ?? [];
}
