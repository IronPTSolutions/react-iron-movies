import { PageLayout } from '../components/layouts';
import { LoginForm } from '../components/auth'; 

import jumboBg from '../assets/images/backgrounds/bg-movies.jpg';

function LoginPage() {
  return (
    <PageLayout
      jumbotron={{
        backgroundImage: jumboBg,
        title: 'Join the World of Endless Cinema',
        subtitle: 'Track your favorite films and never miss a new release'
      }}
    >
      <LoginForm />
    </PageLayout>
  )
}

export default LoginPage;