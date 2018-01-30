<template>
  <div id="user">
    <mt-header title="用户中心">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="userHead">
      <img src="../../assets/image/banner01.jpg" alt="">
      <span>可爱的小胖子。</span>
      <b>忘记密码  ?</b>
    </div>
    <!--用户金额-->
    <div class="pay_user">
      <ul>
        <li>
          <span><i class="iconfont">&#xe652;</i>88.00</span>
          <p>账户余额（元）</p>
          <i class="iconfont">&#xe636;</i>
        </li>
        <li>
          <b>充值</b>
        </li>
      </ul>
    </div>
    <!--菜单功能-->
    <div class="userMenu">
      <ol>
        <li>
          <div>
            <i class="iconfont">&#xe653;</i>
          </div>
          <span>我的订单</span>
        </li>
        <li>
          <div>
            <i class="iconfont">&#xe610;</i>
          </div>
          <span>我的卷码</span>
        </li>
        <li>
          <div>
            <i class="iconfont">&#xe68b;</i>
          </div>
          <span>领券中心</span>
        </li>
        <li>
          <div>
            <i class="iconfont">&#xe61f;</i>
          </div>
          <span>我的兑换卷</span>
        </li>
        <li>
          <div>
            <i class="iconfont">&#xe60d;</i>
          </div>
          <span>我的地址</span>
        </li>
        <li>
          <div>
            <i class="iconfont">&#xe607;</i>
          </div>
          <span>兑换商城</span>
        </li>
      </ol>
    </div>
    <navFooter></navFooter>
  </div>
</template>
<script>
  import navFooter from '@/components/component/footer/footer.vue'
  import {DomHeight} from '@/directive.js'
  import {Swipe, SwipeItem} from 'mint-ui';

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
  #user {
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
        border: 0.0625rem solid #fff;
        border-radius: 50%;
      }
      > span {
        display: block;
        text-align: center;
        color: #fff;
        font-size: 0.84375rem;
        line-height: 2.40625rem;
      }
      > b {
        position: absolute;
        right: 0.8125rem;
        color: #fff;
        font-size: 0.84375rem;
        line-height: 2.40625rem;
        font-weight: 400;
        top: 6.9375rem;
      }
    }

    .userMenu {
      width: 100%;
      padding: 0.65625rem 0;
      ol {
        overflow: hidden;
        li {
          &:nth-child(1) > div{background: #89bef9}
          &:nth-child(2) > div{background: #9cf2d9}
          &:nth-child(3) > div{background: #d2b4ed}
          &:nth-child(4) > div{background: #f98999}
          &:nth-child(5) > div{background: #9ca0f2}
          &:nth-child(6) > div{background: #d4edb4}
          float: left;
          width: 33.33%;
          margin-top: 1rem;
          > div {
            width: 3.21875rem;
            height: 3.21875rem;
            border-radius: 50%;
            margin: 0 auto;
            >i{
              line-height: 3.21875rem;
              text-align: center;
              display: block;
              font-size: 1.875rem;
              color: #fff;
            }
          }
          > span {
            display: block;
            text-align: center;
            font-size: 0.71875rem;
            color: #666;
            line-height: 1.875rem;
          }
        }
      }
    }
    .pay_user {
      ul {
        margin: 0.8125rem;
        margin-bottom: 0;
        padding-bottom: 1.125rem;
        border-bottom: 0.25rem solid #f3f3f3;
        display: flex;
        > li:nth-child(1) :after {
          position: absolute;
          width: 1px;
          content: '';
          right: 0;
          top: 0.32rem;
          background: #e1e1e1;
          height: 1.875rem;
        }
        > li {

          position: relative;
          flex: 1;
          span {
            color: #da2b2b;
          }
          p {
            font-size: 0.71875rem;
            color: #999;
          }
          > i {
            font-size: 0.8rem;
            position: absolute;
            top: 1rem;
            right: 1.125rem;
            color: #999;
            &:after {
              background: none !important;
            }
          }
          span, p {
            margin-left: 0.46875rem;
            line-height: 1.21875rem;
            height: 1.21875rem;
            font-size: 0.84375rem;
            letter-spacing: 1px;
          }
          > b {
            font-size: 0.71875rem;
            background: #910a0a;
            color: #fff;
            display: block;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            margin: auto auto;
            width: 4.21875rem;
            height: 1.5625rem;
            line-height: 1.5625rem;
            text-align: center;
            letter-spacing: 3px;
          }
        }
      }
    }
  }

</style>
