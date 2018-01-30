import Vue from 'vue'


Vue.filter('json', function (value) {   // 全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
  return JSON.stringify(value)
})

Vue.filter('time', function (value) {
  let date = new Date(value)
  let Y = date.getFullYear()
  let m = date.getMonth() + 1
  let d = date.getDate()
  let H = date.getHours()
  let i = date.getMinutes()
  let s = date.getSeconds()
  if (m < 10) {
    m = '0' + m
  }
  if (d < 10) {
    d = '0' + d
  }
  if (H < 10) {
    H = '0' + H
  }
  if (i < 10) {
    i = '0' + i
  }
  if (s < 10) {
    s = '0' + s
  }
  return [Y, '-', m, '-', d, ' ', H, ':', i, ':' + s].join('')
})
//计算价格保留两位小数
Vue.filter('toFixedTwo', function (value) {
  if (value) {
    return parseFloat(value.toFixed(2))
  }
})
//截取第一个字符
Vue.filter('firstCode', function (value) {
  if (value) {
    return value.substr(0, 1)
  }
})

Vue.filter('phonePrivacy', (val) => {
  return val && /^\d{11}$/.test(val) ? val.replace(/\d{3}\d{4}\d{4}/, '$1****$2') : ''
})

