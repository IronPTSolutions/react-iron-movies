import { PageLayout } from "../components/layouts";

import jumboBg from '../assets/images/backgrounds/bg-movies.jpg';
import { MoviesController } from "../components/movies";

function HomePage({ spotGenres = ['Action', 'Drama', 'Horror'] }) {
  return (
    <PageLayout
      jumbotron={{
        backgroundImage: jumboBg,
        title: 'Where Movie Nights Begin',
        subtitle: 'Discover, stream, and explore the world’s greatest movies all in one place.'
      }}
    >

      {spotGenres.map((genre) => (
        <div key={genre} className="mb-2">
          <h3 className="fw-light">Best of {genre}</h3>
          <MoviesController genre={genre} limit={6} />
        </div>
      ))}
      
    </PageLayout>
  );
}

export default HomePage;