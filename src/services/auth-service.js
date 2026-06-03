import axios from "axios";

const http = axios.create({
  baseURL: 'https://api.ironmovies.mock.org'
});


export async function register(user) {
  const { data } = await http.post('/users', user);
  return data;
}

export async function login(user) {
  const { data } = await http.post('/sessions', user);
  return data;
}