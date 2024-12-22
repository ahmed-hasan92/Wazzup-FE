import { jwtDecode } from 'jwt-decode';
import { instance } from '.';

const register = async ({ firstName, lastName, email, password }) => {
  const response = await instance.post('/user/register', {
    firstName,
    lastName,
    email,
    password,
  });
  storeToken(response.data?.token);
  return response.data;
};

const login = async ({ email, password }) => {
  const response = await instance.post('/user/login', {
    email,
    password,
  });

  storeToken(response.data?.token);
  return response.data;
};

const storeToken = (token) => {
  localStorage.setItem('token', token);
};

const checkToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    const decode = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decode.exp < currentTime) {
      return null;
    }
    return decode;
  }
  return null;
};

export { checkToken, register, login };
