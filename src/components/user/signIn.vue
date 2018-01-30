<template>
  <div id="Signin">
    <mt-header title="登录注册">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="userHead">
      <img src="./iamge/logo_hander.png" alt="">
      <span>未登陆</span>
    </div>
    <div class="signin">
      登陆/注册
    </div>
    <navFooter></navFooter>
  </div>
</template>
<script>
  import navFooter from '@/components/component/footer/footer.vue'
  export default {
    data() {
      return {}
    },
    components: { //引入组件
      navFooter
    },
    methods: { //执行的方法函数

    },
    created() { //只执行一次

    },
    mounted() { //全部渲染完毕

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  #Signin {
    .signin{
      width: 14.9375rem;
      height: 2.4375rem;
      line-height: 2.4375rem;
      background: #20272e;
      font-size: 0.93rem;
      text-align: center;
      margin: 8.3125rem auto 2rem;
      color: #fff;
    }
    background: #fff;
    width: 100%;
    min-height: 100%;
    .userHead {
      width: 100%;
      height: 10rem;
      background: #910a0a;
      overflow: hidden;
      position: relative;
      > img {
        display: block;
        margin: 1.59375rem auto 0;
        width: 5.3125rem;
        height: 5.3125rem;
        border: 0.0625rem #910a0a;
        border-radius: 50%;
      }
      > span {
        display: block;
        text-align: center;
        color: #fff;
        font-size: 0.84375rem;
        line-height: 2.40625rem;
      }

    }
  }

</style>
