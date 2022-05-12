import axios from 'axios';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const instance = axios.create({
      // 요청을 보낼 Api Server Ip
      baseURL: "http://localhost:5000"
});
// 'http://192.168.210.128:8080'
export default instance;