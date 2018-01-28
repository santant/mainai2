export default {
  install(Vue, options) {
    // addToSession 循环url，存入session
    Vue.prototype.addToSession = function () {
      console.log(this.$route.query.userDbId)
      if (this.$route.query.userDbId) {
        localStorage.setItem('userDbId', this.$route.query.userDbId)
      }
      var obj = JSON.parse(sessionStorage.getItem("urlQuery"))
      if (obj) {
      } else {
        obj = {}
      }
      for (var key in this.$route.query) {
        if (this.$route.query[key]) {
          obj[key] = this.$route.query[key]
        }
      }
      sessionStorage.setItem("urlQuery", JSON.stringify(obj))
    }

    // 获取我需要对session
    Vue.prototype.getFromSession = function (sessionName) {
      var obj = JSON.parse(sessionStorage.getItem("urlQuery"))
      if (sessionName) {
        if (obj[sessionName]) {
          return obj[sessionName]
        }
        return ''
      }
    }
    // 路由返回上一页
    Vue.prototype.vurRouterGo = function () {

      this.$router.go(-1)
    }
  }
}
