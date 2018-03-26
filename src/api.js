import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

Vue.prototype.$axios = axios
const HOST = 'http://image2.artup.com/'
const HOSTDC = 'http://www.wincloudsoft.com/'
axios.defaults.retry = 0;
axios.defaults.retryDelay = 1000;
axios.defaults.timeout = 500000;
var loadinginstace
axios.interceptors.request.use(config => {
  let userTocken = sessionStorage.getItem('token') || '';
  console.log("2:"+userTocken);
  config.headers.Authorization ='Bearer '+ userTocken;
  config.headers.cache = false;
  return config
}, error => {
  // Message.error({
  //   message: '加载超时'
  // })
  console.log("加载超时")
  return Promise.reject(error)
});

// axios.interceptors.request.use(config => {
//   var token = sessionStorage.getItem('token') || ''
//   config.headers['Authorization'] = 'Bearer ' + token
//   console.log(config)
//   return config
// })


axios.interceptors.response.use(function (data) {
  return data
}, function axiosRetryInterceptor(err) {
  var config = err.config;
  // Message.error({
  //   message: '加载超时'
  // })
  console.log("加载超时")
  // 设置变量以跟踪重试计数 如果配置不存在，或者重试选项没有设置，则拒绝
  if (!config || !config.retry) return Promise.reject(err);

  // 或者重试选项没有设置，则拒绝
  config.__retryCount = config.__retryCount || 0;

  // 检查我们是否已经完成了重试的总数
  if (config.__retryCount >= config.retry) {

    return Promise.reject(err);
  }

  // 增加重试计数
  config.__retryCount += 1;

  // 创造新的承诺来处理指数回退
  var backoff = new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, config.retryDelay || 1);
  });

  // 返回让axios重新尝试请求的承诺
  return backoff.then(function () {
    return axios(config);
  });
});

const getToken = `${HOSTDC}oauth/token?username=admin&password=admin&grant_type=password&scope=read&client_id=rajithapp&client_secret=secret`
const api = {
  userList: {
    test: (jsons) => {
      console.log("1");
      return axios.post('oudsoft.com/base/getMenuList', {params: jsons})
    },
    test2: (jsons) => {
      // return axios.post(TEST2, {params: jsons})
      return axios.post(TEST2, qs.stringify(jsons))
    }
  },
  Token: {
    getToken: () => {
      return axios.post(getToken)
    }
  }
}
export default api
