import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.getcardbase.com/api/web/v1/',
});

export * from 'axios';
