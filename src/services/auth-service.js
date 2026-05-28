import axios from "axios";

const http = axios.create({
  baseURL: 'https://api.ironmovies.mock.org'
});


export async function register(user) {
  const { data } = await http.post('/users', user);
  return data;
}