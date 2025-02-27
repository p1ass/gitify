import axios, { AxiosPromise, Method } from 'axios';

export function apiRequest(
  url: string,
  method: Method,
  data = {},
): AxiosPromise {
  axios.defaults.headers.common['Accept'] = 'application/json';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Cache-Control'] = 'no-cache';
  return axios({ method, url, data });
}

export function apiRequestAuth(
  url: string,
  method: Method,
  token: string,
  data = {},
): AxiosPromise {
  axios.defaults.headers.common['Accept'] = 'application/json';
  axios.defaults.headers.common['Authorization'] = `token ${token}`;
  axios.defaults.headers.common['Cache-Control'] = 'no-cache';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  return axios({ method, url, data });
}
