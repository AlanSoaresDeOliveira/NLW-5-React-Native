import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.117:3333',
});

export default api;


// json-server ./src/service/server.json --host 192.168.0.117 --port 3333
