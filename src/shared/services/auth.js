import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/api',
});

export const signup = data => {
  return authInstance.post('/users/signup', data);
};

export const login = data => {
  return authInstance.post('/users/login', data);
};
