import axios from 'axios';

const axiosInstance = axios.create({
   baseURL: "https://api.elearning.alpha.logidots.com/api",
});

// Change request data/error here
axiosInstance.interceptors.request.use(
   config => {
      let token;

      if (typeof window !== 'undefined') {
         token = localStorage.getItem('bearer_token');
      }

      config.headers = {
         ...config.headers,
         Authorization: `Bearer ${token ? token : ''}`,
         Accept: "application/json",
         'X-App-Type': 'learner',
      };
      return config;
   },
   error => {
      console.log(error, 'the error');
      return Promise.reject(error);
   }
);
export default axiosInstance 