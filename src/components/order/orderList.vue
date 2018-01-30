<template>
  <div id="order">
    <mt-header title="我的订单">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="orderStatus">
      <ol>
        <li>全部</li>
        <li>待支付</li>
        <li>待付款</li>
      </ol>
      <div class="orderlist">
        <div class="order_number order_line">
            <span>订单号</span>
            <span>212322212</span>
            <i class="iconfont">&#xe61c;</i>
        </div>
        <div class="order_info">
          <div class="good_img">
            <!--<img src="../home/image/banner01.jpg" alt="">-->
          </div>
          <div class="order_main">
            <span class="order_titme">冰岛式酸奶巴氏杀冰岛式酸奶巴氏杀菌热处理风味酸奶菌热处理风味酸奶</span>
            <p class="order_pay"><i class="iconfont">&#xe652;</i>88.00</p>
            <span class="order_number_info">容量：200g*12盒/箱   <b>x1</b></span>
          </div>
        </div>
        <div class="order_time order_line">
          <span>2017-06-09  13:32</span>
          <span class="pay_mun">共1件商品  合计：<i class="iconfont">&#xe652;88.00</i></span>
        </div>
        <div class="order_pay order_line">
          <span class="pay_status">待付款</span>
          <span class="pay_cancel">取消订单</span>
          <span class="pay_pay">立即支付</span>
        </div>
      </div>
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
  #order {
    .orderlist{
      padding:  0 0.8125rem;
      background: #fff;
      .order_line{
        line-height: 2.4375;
        height: 2.4375rem;
        color: #666;
      }
      .order_info{
        overflow: hidden;
        border-bottom: 1px solid #f5f5f5;
        .good_img{

        }
        .order_main{
          width:12.875rem;
          min-height: 4.875rem;
          overflow: hidden;
          float: right;
          .order_titme{
            font-size: 0.78125rem;
            line-height: 1rem;
            padding: 0.5rem 0;
            display: block;
          }
        }
        .order_pay{
          font-size: 0.84375rem;
          color: #f84845;
          line-height: 1rem;
        }
        .order_number_info{
          color: #999;
          font-size: 0.625rem;
          width: 100%;
          display: block;
          position: relative;
          line-height: 1.2rem;
          >b{
            position: absolute;
            right: 0;
            color: #333;
            font-size: 0.71875rem;
            font-weight: 500;
          }
        }
      }
      .order_number{
        font-size: 0.6875rem;
        border-bottom: 1px solid #f5f5f5;
        span:nth-child(1){
          width: 5.625rem;
          display: inline-block;        line-height: 2.4375;

        }
        span:nth-child(2){
          width: 10.3125rem;
          display: inline-block;line-height: 2.4375;color: #666;
        }
        >i{
          position: relative;
          right: 0;
          line-height: 2.4375;
          font-size: 1rem;
        }
      }
      .order_time{
        position: relative;
        border-bottom: 1px solid #f5f5f5;
        span{
          font-size: 0.625rem;
          display:block;
          height: 2.4375rem;
          line-height: 2.4375rem;
        }
        .pay_mun{
          position: absolute;
          right: 0;
          top:0;
          font-size: 0.6875rem;
          font-weight: 400;
          color: #333;
          i{
            color: #f84845;
          }
        }
      }
      .order_pay{
        position: relative;
        span{
          display: inline-block;
        }
        .pay_status{
          font-size: 0.6875rem;
          color: #333;
          width: 7.3125rem;
        }
        .pay_cancel ,.pay_pay{
          font-size: 0.71875rem;
          width: 4.6875rem;
          height: 1.65625rem;
          line-height: 1.65625rem;
          text-align: center;
          color: #fff;
        }
        .pay_cancel{
          background: #999;
          position: absolute;
          right: 5.375rem;
          top:0.4rem;
        }
        .pay_pay{
          background: #20272e;
          position: absolute;
          right: 0;
          top:0.4rem;
        }
      }
    }

    font-family: Arial;
    background: #f3f3f3;
    width: 100%;
    min-height: 100%;
    .orderStatus{
      ol{
        display: flex;
        border-bottom: 1px solid #e5e5e5;
        li{
          flex: 1;
          text-align: center;
          font-size: 0.9375rem;
          height: 2.9375rem;
          line-height: 2.9375rem;
          color: #999;
        }
      }
    }
  }

</style>
