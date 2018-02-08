<template>
  <div id="order">
    <mt-header title="确认订单">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="orderStatus">
      <div class="orderlist">
        <div class="order_number order_line">
            <div class="address_main">
              <span>彭进</span>
              <span>18301232813</span>
              <p>北京市顺义区北京北京市顺义区北艺术北京中心</p>
            </div>
          <i @click="editaddress" class="iconfont">&#xe639;</i>
        </div>
        <div class="order_info">
          <div class="good_img">
            <img src="../home/image/mainlist01.png" alt="">
          </div>
          <div class="order_main">
            <span class="order_titme">冰岛式酸奶巴氏杀冰岛式酸奶巴氏杀菌热处理风味酸奶菌热处理风味酸奶</span>
            <p class="order_pay"><i class="iconfont">&#xe652;</i>88.00</p>
            <span class="order_number_info">容量：200g*12盒/箱   <b>x1</b></span>
          </div>
        </div>

        <div class="order_line">
          <span class="span_title">支付方式</span>
          <b class="span_msg"><i class="iconfont">&#xe7e5;</i>微信支付</b>
        </div>
        <div class="order_line">
          <span class="span_title">商品金额</span>
          <b class="span_msg span_color">¥ 88.00</b>
        </div>
        <div @click="goCoupon" class="order_line">
          <span class="span_title">优惠券</span>
          <!--<b class="span_msg">无可用优惠券 <i class="iconfont">&#xe636;</i></b>-->
          <b class="span_msg"><span>优惠：40元<i class="iconfont">&#xe636;</i></span> </b>
        </div>
        <div class="order_line">
          <span class="span_title">运费</span>
          <b class="span_msg">免运费</b>
        </div>
      </div>
    </div>
    <!--确认订单-->
    <div class="payOrder"><span><b>合计：</b><i class="iconfont"></i><b class="price">66.00</b></span> <span>确认订单</span>
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
      //到优惠劵
      goCoupon(){
        this.$router.push({path: "/goods/coupon"})
      },
      editaddress(){ //编辑地址
        this.$router.push({path: "/goods/address"})
      }
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
    .payOrder {
      width: 100%;
      height: 2.90625rem;
      line-height: 2.90625rem;
      background: #fff;
      position: fixed;
      bottom: 0;
      overflow: hidden;
      span {
        line-height: 2.90625rem;
        height: 2.90625rem;
        float: left;
        font-size: 0.78125rem;
        letter-spacing: 2px;
        .price {
          font-family: Arial;
          color: #d33c3c;
        }
        &:nth-child(1) {
          width: 13.125rem;
          font-weight: 400;
          color: #333;
          > i {

            color: #d33c3c;
            font-weight: 600;
          }
          > b:nth-child(1) {

            padding-left: 1.34375rem;
          }

        }
        &:nth-child(2) {
          width: 6.875rem;
          background: #d33c3c;
          display: block;
          text-align: center;
          letter-spacing: 2px;
          color: #fff;
        }
      }
    }
    .orderlist {
      padding: 0 0.8125rem;
      background: #fff;
      margin-bottom: 0.3125rem;
      .order_line {
        line-height: 2.4375;
        height: 2.4375rem;
        color: #666;
        position: relative;
        border-bottom: 1px solid #f5f5f5;
        .span_title {
          width: 3.75rem;
          font-size: 0.71875rem;
          color: #666;
          text-align: justify;
          text-align-last: justify;
          vertical-align: middle;
          display: block;
          float: left;
          height: 2.4375rem;
          line-height: 2.4375rem;

        }
        .span_msg {
          font-size: 0.71875rem;
          color: #666;
          float: right;
          height: 2.4375rem;
          line-height: 2.4375rem;
          font-weight: 400;
          > i {
            color: #45bb42;
            padding-right: 0.2rem;
            position: relative;
            top: 1px;
          }
          > span {
            color: #f84845;
            i {
              padding-left: 0.5rem;
              font-size: 0.7rem;
            }
          }
        }
        .span_color {
          color: #f84845 !important;
        }
      }
      .order_info {
        overflow: hidden;
        border-bottom: 1px solid #f5f5f5;
        .good_img {
          width: 4.875rem;
          min-height: 4.875rem;
          float: left;
          position: relative;
          > img {
            margin: auto auto;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            right: 0;
            max-width: 100%;
            max-height: 100%;
          }
        }
        .order_main {
          width: 12.875rem;
          min-height: 4.875rem;
          overflow: hidden;
          float: right;
          .order_titme {
            font-size: 0.78125rem;
            line-height: 1rem;
            padding: 0.5rem 0;
            display: block;
            color: #333;
          }
        }
        .order_pay {
          font-size: 0.84375rem;
          color: #f84845;
          line-height: 1rem;
        }
        .order_number_info {
          color: #999;
          font-size: 0.625rem;
          width: 100%;
          display: block;
          position: relative;
          line-height: 1.2rem;
          > b {
            position: absolute;
            right: 0;
            color: #333;
            font-size: 0.71875rem;
            font-weight: 500;
          }
        }
      }
      .order_number {
        font-size: 0.6875rem;
        min-height: 3.4125rem;
        padding-bottom: 0.4rem;
        .address_main{
          width: 17.1875rem;
          span{
            width: 5.21875rem;
            display: inline-block;
          }
          p{
            line-height: 1rem;
            /*margin-top: 0.3rem;*/
          }
        }
        > i {
          position: absolute;
          right: 0;
          line-height: 3.4375;
          font-size: 1rem;
          top:0;
        }
      }
    }
    font-family: Arial;
    background: #f3f3f3;
    width: 100%;
    min-height: 100%;
    .orderStatus {
      ol {
        display: flex;
        border-bottom: 1px solid #e5e5e5;
        .li_active {
          > i {
            display: block;
          }
        }
        li {
          position: relative;
          flex: 1;
          text-align: center;
          font-size: 0.9375rem;
          height: 2.9375rem;
          line-height: 2.9375rem;
          color: #999;
          > i {
            position: absolute;
            width: 100%;
            height: 2px;
            background: #910a0a;
            left: 0;
            bottom: 0;
            display: none;
          }
        }
      }
    }
  }

</style>
