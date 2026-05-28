import { PageLayout } from '../components/layouts';
import { RegisterForm } from '../components/auth'; 

import jumboBg from '../assets/images/backgrounds/bg-movies.jpg';

function RegisterPage() {
  return (
    <PageLayout
      jumbotron={{
        backgroundImage: jumboBg,
        title: 'Join the World of Endless Cinema',
        subtitle: 'Track your favorite films and never miss a new release'
      }}
    >
      <RegisterForm />
    </PageLayout>
  )
}

export default RegisterPage;