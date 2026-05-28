import { http, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser';

const baseMockDomain = 'https://api.ironmovies.mock.org';

const LS_USERS_KEY = 'users';
const users = self.localStorage.getItem(LS_USERS_KEY) ? 
  JSON.parse(self.localStorage.getItem(LS_USERS_KEY)) : 
  [];

const handleUserRegister = http.post(`${baseMockDomain}/users`, async (data) => {
  const user = await data.request.json();
  console.log('mock user received', user);

  const isAlreadyRegistered = users.some((registeredUser) => registeredUser.username === user.username);
  if (isAlreadyRegistered) {
    return HttpResponse.json(
      {
        message: 'Invalid user register',
        errors: {
          username: 'Username already registered'
        }
      },
      { status: 400 }
    )
  } else {
    user.id = self.crypto.randomUUID();
    users.push(user);
    self.localStorage.setItem(LS_USERS_KEY, JSON.stringify(users));
    return HttpResponse.json(user, { status: 201 });
  }
})

const worker = setupWorker(
  handleUserRegister,
);

export default worker;