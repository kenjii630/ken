// crud.js

import axios from '@/axios';
const API_URL = 'https://jsonplaceholder.typicode.com';

// CRUD methods for a specific module
export const cardService = {
  get(url, config = {}) {
    return axios.get(`${API_URL}/${url}`, config);
  },
  getById(url, id, config = {}) {
    return axios.get(`${API_URL}/${url}/${id}`, config);
  },
  post(url, data, config = {}) {
    return axios.post(`${API_URL}/${url}`, data, config);
  },
  put(url, data, config = {}) {
    return axios.put(`${API_URL}/${url}`, data, config);
  },
  del(url, config = {}) {
    return axios.delete(`${API_URL}/${url}`, config);
  }
};
