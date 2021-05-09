import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID d3bc9b3053a3d29829796177f5c5641eedcd9a8e340bc3ec9fc83f72331d16e6`,
  },
});
