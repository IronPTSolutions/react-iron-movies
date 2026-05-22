import { PageLayout } from "../components/layouts";

import jumboBg from '../assets/images/backgrounds/bg-movies.jpg';
import { MoviesList } from "../components/movies";

function HomePage() {
  return (
    <PageLayout
      jumbotron={{
        backgroundImage: jumboBg,
        title: 'Where Movie Nights Begin',
        subtitle: 'Discover, stream, and explore the world’s greatest movies all in one place.'
      }}
    >
      
      <MoviesList genre="Horror" />

    </PageLayout>
  );
}

export default HomePage;