import axios from 'axios'
import qs from 'qs'
// Vue.prototype.$http = axios
const HOST = 'http://image2.artup.com/'
// const VueHttp = new Vue()
// var HTTP = axios.create({
//   baseURL: 'https://some-domain.com/api/',
//   timeout: 5000,
//   headers: {'X-Custom-Header': 'foobar'},
//   params: {
//     ID: 12345
//   }
// });
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = "1232332232112";
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 测试
const TEST = `${HOST}artup-build/builder/cors/car/queryByPage.do?format=json&ignore=true&status=1&pageNum=0&pageSize=1&sort=createdDt&order=desc&userDbId=2a585f8c5c664c6ab555cffa71a815ce`
const TEST2 = `${HOST}/asssd/sdsds`

const api = {
  userList: {
    test: (jsons) => {
      return axios.get(TEST, {params: jsons})
    },
    test2: (jsons) => {
      // return axios.post(TEST2, {params: jsons})
      return axios.post(TEST2,qs.stringify(jsons))
    }
  }
}
export default api
