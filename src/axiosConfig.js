import axios from 'axios';

const instance = axios.create({
  baseURL : 'http://110.76.77.23:8080/',
  withCredentials : true
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

instance.interceptors.request.use(
  config => {
    if (!config.headers.Authorization) {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  error => Promise.reject(error)
);

export default instance;