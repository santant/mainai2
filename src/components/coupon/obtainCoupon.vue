<template>
  <div id="coupon">
    <mt-header title="领劵中心">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="couponList">
      <ol>
        <li>
          <div class="div_left">
            <span>现金卷</span>
            <i class="iconfont">&#xe652;20</i>
            <p>有效期：2018.01.01--2018.03.01</p>
          </div>
          <div class="div_right">
            <span>领劵</span>
            <p>纤果汇果汁果汁</p>
            <p>酸牛奶专用专用</p>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
  import {Swipe, SwipeItem} from 'mint-ui';
  export default {
    data() {
      return {}
    },
    components: { //引入组件
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
  #coupon{
    font-family: Arial;
    background: #f3f3f3;
    width: 100%;
    min-height: 100%;
    .couponList{
      padding:  0 0.78125rem;
      ol{
        li{
          height: 6.9375rem;
          background: url("../../assets/image/coupon_bg.png") no-repeat;
          background-size: 100%;
          margin: 0.5625rem 0;
          overflow: hidden;
          .div_left{
            width: 11.9375rem;
            height: 100%;
            float: left;
            position: relative;
            span{
              height: 1.3125rem;
              line-height: 1.3125rem;
              display: block;
              text-align: center;
              font-size: 0.6875rem;
              color: #910a0a;
              margin-top: 1.25rem;
            }
            i{
              display: block;
              text-align: center;
              font-size: 1.59375rem;
              color: #910a0a;
            }
            p{
              text-align: center;
              font-size: 0.625rem;
              height: 1.3125rem;
              line-height: 1.3125rem;
              bottom: 0;
              color: #999;
              margin-top: 0.8rem;
            }
          }
          .div_right{
            width: 6.46875rem;
            height: 100%;
            float: right;
            span{
              line-height: 2.53125rem;
              height: 2.53125rem;
              display: block;
              text-align: center;
              font-size: 0.9375rem;
              color: #333;
              padding-top: 2.1875rem;
            }
            p{
              line-height: 1.125rem;
              height: 1.125rem;
              text-align: center;
              font-size: 0.625rem;
              color: #999;
            }
          }
        }
      }
    }
  }
</style>
