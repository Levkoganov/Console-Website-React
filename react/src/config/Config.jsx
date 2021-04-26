import axios from 'axios';

// DEFAULT URL
export const setUrl = () => {
  axios.defaults.baseURL = process.env.REACT_APP_BASE;
};

// SET TOKEN IN HEADERS
export const setToken = (token) => {
  axios.defaults.headers.common['token'] = token;
};
