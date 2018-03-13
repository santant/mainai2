<template>
  <transition :name="transitionName">
    <router-view class="child-view"></router-view>
  </transition>
</template>
<script>
import rem from '../static/js/rem.js'

export default {
    data() {
      return {
        transitionName: 'slide-left'
      }
    },
    components: { //引入组件
    },
    methods: { //执行的方法函数

    },
    watch: {
      '$route'(to, from,next) {
//        console.log(from.name)
//        console.log(to.name)
//        if(from.name=='goodsInfo' && to.name=='Home'){
//            return false
//        }
        if (to.path == '/') {
          this.transitionName = 'slide-right';
        } else {
          this.transitionName = 'slide-left';
        }
      }
    },
    created() { //只执行一次

    }
  }
</script>

<style lang="less">
// @import '../../../static/foot/iconfont.css'
// @import '../../../static/config/const.less';
@import './assets/less/style';
//公共的
body,html{
    width: 100%;
    height: 100%;
  .mint-header{
    background: #910a0a;
    border: none;
    .mint-header-title{
      font-size: 0.9375rem;
    }
  }
}
h1, h2 {
  font-weight: normal;
}

*{margin: 0;padding: 0;}
li{list-style: none;}
a {text-decoration: none;}
#app {
     font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
/*切换路由的动画*/
//.fade-enter-active,
//.fade-leave-active {
//    transition: all 0.6s ease;
//}
///*.fade-enter,*/
//.fade-leave-active {
//    opacity: 0;
//    transform: translateX(100%);
//}
//.fade-enter{
//    opacity: 0;
//    transform: translateX(-100%);
//}
#app{
    width: 100%;
    height: 100%;
}

//绝对剧中
.positionBs{
    position: absolute;left: 0;right: 0;bottom: 0;top: 0;margin: auto auto;
}
.child-view {
  position: absolute;
  width: 100%;
  transition: all .3s cubic-bezier(0.42,0,1,1);
}

.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
  transition-delay: 0.3s;
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
  transition-delay: 0.3s;
}

</style>
