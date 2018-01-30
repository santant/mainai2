<template>
  <div id="home">
    <mt-header title="主页">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="swipe_xy">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="./image/banner01.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./image/banner01.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./image/banner01.jpg" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!--特卖-->
    <div class="dl_box">
      <dl>
        <dd>
          <span>品牌特卖</span>
        </dd>
      </dl>
      <div class="goodsList">
        <ul v-DomHeight>
          <li>
            <div class="img_box">
              <img src="./image/listImg01.png" alt="">
            </div>
            <span>原味酸奶</span>
          </li>
          <li>
            <div class="img_box">
              <img src="./image/listImg02.png" alt="">
            </div>
            <span>发酵酸奶发酵酸奶</span>
          </li>
          <li>
            <div class="img_box">
              <img src="./image/listImg01.png" alt="">
            </div>
            <span>原味酸奶</span>
          </li>
          <li>
            <div class="img_box">
              <img src="./image/listImg02.png" alt="">
            </div>
            <span>发酵酸奶</span>
          </li>
          <li>
            <div class="img_box">
              <img src="./image/listImg01.png" alt="">
            </div>
            <span>原味酸奶</span>
          </li>
          <li>
            <div class="img_box">
              <img src="./image/listImg02.png" alt="">
            </div>
            <span>发酵酸奶</span>
          </li>
        </ul>
      </div>
    </div>
    <!--商品list-->
    <div class="list_goods">
      <ul>
        <li @click="goInfo">
          <div class="box_l">
            <img src="./image/mainlist01.png" alt="">
          </div>
          <div class="box_r">
            <span>高钙鲜牛奶</span>
            <b><i class="iconfont">&#xe652;</i>6.60</b>
            <p>容量：200g*12盒/箱</p>
          </div>
        </li>
        <li>
          <div class="box_l">
            <img src="./image/mainlist02.png" alt="">
          </div>
          <div class="box_r">
            <span>冰岛式酸奶巴氏杀菌热处理风味酸奶（原味）</span>
            <b><i class="iconfont">&#xe652;</i>77.60</b>
            <p>容量：200g*12盒/箱</p>
          </div>
        </li>
      </ul>
    </div>
    <navFooter></navFooter>
  </div>
</template>
<script>
  import $ from 'jquery'
  import api from '@/api'
  import navFooter from '@/components/component/footer/footer.vue'
  import {DomHeight} from '@/directive.js'
  import {Swipe, SwipeItem} from 'mint-ui';
  export default {
    data() {
      return {
        goods: {
          page: 1  //开始默认开始的页数
        },
        goddsList: [] // 商品列表
      }
    },
    components: { //引入组件
      navFooter
    },
    methods: { //执行的方法函数
      goInfo(){ // 去详情页
        this.$router.push({path: "/goods/goodsInfo", query: {"select": 1}})
      }
    },
    created() { //只执行一次

    },
    mounted() { //全部渲染完毕
      api.userList.test({'1':'2'}).then(res=>{
       console.log(res)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  /*#home {*/
    /*background: #f3f3f3;*/
    /*min-height: 100%;*/
    /*.list_goods {*/
      /*padding-bottom: 1.5rem;*/
      /*background: #fff;*/
      /*ul {*/
        /*padding: 0 0.5625rem;*/
        /*li {*/
          /*width: 100%;*/
          /*min-height: 5.9375rem;*/
          /*position: relative;*/
          /*.box_l {*/
            /*width: 5.9375rem;*/
            /*height: 5.9375rem;*/
            /*float: left;*/
            /*position: relative;*/
            /*>img{*/
              /*position: absolute;left: 0;right: 0;bottom: 0;top: 0;margin: auto auto; max-width: 100%;max-height: 100%;*/
            /*}*/
          /*}*/
          /*.box_r {*/
            /*width: 11.75rem;*/
            /*height: 5.9375rem;*/
            /*border-bottom: 1px solid #efefef;*/
            /*float: right;*/
            /*span{*/
              /*line-height: 1.1875rem;*/
              /*height: 2.375rem;*/
              /*font-size: 0.78125rem;*/
              /*display: block;*/
              /*overflow: hidden;*/
              /*margin-top: 0.59375rem;*/
            /*}*/
            /*b{*/
              /*line-height: 1.28125rem;*/
              /*height: 1.28125rem;*/
              /*font-size: 0.84375rem;*/
              /*color: #da2b2b;*/
              /*font-family: Arial;*/
            /*}*/
            /*p{*/
              /*font-size: 0.625rem;*/
              /*color: #999;*/
              /*line-height: 1.0625rem;*/
              /*font-family: Arial;*/
            /*}*/
          /*}*/
        /*}*/
      /*}*/
    /*}*/
    /*.dl_box {*/
      /*overflow: hidden;*/
      /*margin-bottom: 0.3125rem;*/
      /*.goodsList {*/
        /*padding-left: 1rem;*/
        /*height: 6.625rem;*/
        /*width: 19.21875rem;*/
        /*overflow-x: auto;*/
        /*padding-bottom: 0.8125rem;*/
        /*-webkit-overflow-scrolling: touch; !* ios5+ *!*/
        /*ul {*/
          /*li {*/
            /*width: 5.375rem;*/
            /*height: 6.625rem;*/
            /*margin-right: 0.5625rem;*/
            /*float: left;*/
            /*> span {*/
              /*display: block;*/
              /*text-align: center;*/
              /*font-size: 0.71875rem;*/
              /*color: #666;*/
              /*overflow: hidden;*/
              /*text-overflow: ellipsis;*/
              /*white-space: nowrap;*/
              /*width: 96%;*/
              /*line-height: 1.25rem;*/
              /*height: 1.25rem;*/
            /*}*/
            /*.img_box {*/
              /*width: 100%;*/
              /*height: 5.375rem;*/
              /*position: relative;*/
              /*background: #f3f3f3;*/
              /*border-radius: 5px;*/
              /*> img {*/
                /*position: absolute;*/
                /*left: 0;*/
                /*right: 0;*/
                /*bottom: 0;*/
                /*top: 0;*/
                /*margin: auto auto;*/
                /*max-height: 100%;*/
                /*max-width: 100%;*/
              /*}*/
            /*}*/
          /*}*/
        /*}*/
      /*}*/
      /*background: #fff;*/
      /*padding-top: 0.21875rem;*/
      /*dl {*/
        /*padding: 0 1rem;*/
        /*dd {*/
          /*height: 2.5rem;*/
          /*line-height: 2.5rem;*/
          /*position: relative;*/
          /*&:after {*/
            /*content: '';*/
            /*position: absolute;*/
            /*top: 1.23rem;*/
            /*right: 0;*/
            /*height: 1px;*/
            /*width: 6.59375rem;*/
            /*background: #c6c6c6;*/
          /*}*/
          /*&:before {*/
            /*content: '';*/
            /*position: absolute;*/
            /*top: 1.23rem;*/
            /*left: 0;*/
            /*height: 1px;*/
            /*width: 6.59375rem;*/
            /*background: #c6c6c6;*/
          /*}*/
          /*span {*/
            /*display: block;*/
            /*text-align: center;*/
            /*font-size: 0.84375rem;*/
            /*color: #333;*/
          /*}*/
        /*}*/
      /*}*/
    /*}*/
  /*}*/
  /*.swipe_xy {*/
    /*height: 9.9rem;*/
    /*img {*/
      /*width: 100%;*/
      /*height: 10rem;*/
    /*}*/
  /*}*/
</style>
