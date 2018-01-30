<template>
  <div id="addressList">
    <mt-header title="我的收获地址">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button  slot="right">删除</mt-button>
    </mt-header>
    <div class="address">
      <ul>
        <li class="li_active">
          <div class="select_ok">
             <b>
               <img src="../goods/image/select02.png" alt="">
             </b>
          </div>
          <div class="address_main">
            <span>彭进</span><span>18301232813</span>
            <p>北京市顺义区北京雅昌艺术中心北京市顺义区北京雅昌艺术中心</p>
          </div>
          <div class="edit_address">
            <i class="iconfont">&#xe639;</i>
          </div>
        </li>
        <li class="li_active">
          <div class="select_ok">
            <b>
              <img src="../goods/image/select02.png" alt="">
            </b>
          </div>
          <div class="address_main">
            <span>彭进</span><span>18301232813</span>
            <p>北京市顺义区北京雅昌艺术中心</p>
          </div>
          <div class="edit_address">
            <i class="iconfont">&#xe639;</i>
          </div>
        </li>
        <li class="li_active">
          <div class="select_ok">
            <b>
              <img src="../goods/image/select02.png" alt="">
            </b>
          </div>
          <div class="address_main">
            <span>彭进</span><span>18301232813</span>
            <p>北京市顺义区北京雅昌艺术中心</p>
          </div>
          <div class="edit_address">
            <i class="iconfont">&#xe639;</i>
          </div>
        </li>
      </ul>
    </div>
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
  #addressList {
    font-family: Arial;
    background: #f3f3f3;
    width: 100%;
    min-height: 100%;
    .address{
      background: #fff;
      ul{
        .li_active{
          .select_ok{
            >b{
              border: none;
              >img{
                display: block;
              }
            }
          }
        }
        li{
          border-top:1px dashed #ddd;
          min-height: 3.84375rem;
          overflow: hidden;
          position: relative;
          .edit_address{
            width: 2.5625rem;
            min-height: 3.84375rem;
            position: absolute;
            top:0;
            right: 0;
            >i{
              line-height: 3.84375rem;
              text-align: center;
              display: block;
              color: #adadad ;
              font-size: 1rem;
            }
          }
          .select_ok{
            float: left;
            min-height: 3.84375rem;
             position: relative;
              width: 2.5rem;
            >b{
              width: 0.9375rem;
              height: 0.9375rem;
              box-sizing: border-box;
              border: 1px solid #9f9f9f;
              display: block;
              border-radius: 50%;
              position: absolute;
              margin: auto auto;
              left: 0;
              top:0;
              right: 0;
              bottom: 0;
              max-height: 100%;
              max-width: 100%;
              >img{
                display: none;
                width: 100%;
                height: 100%;
              }
            }
          }
          .address_main{
            float: left;
            width:14.53125rem;
            min-height: 3.84375rem;
            span{
              line-height: 1.71875rem;
               font-size: 0.71875rem;
              color: #333;
              width: 5.625rem;
              display: inline-block;
              padding-top: 0.32rem;
            }
            p{
              line-height: 1.34375rem;font-size: 0.71875rem; color: #333;
            }
          }
        }
      }
    }
  }

</style>
