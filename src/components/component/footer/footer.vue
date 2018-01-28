<template>
  <div id="footer">
    <i style="height: 2.625rem;display: block;width: 100%;"></i>
    <div class="footer_xy">
      <ul>
        <li>
          <a href="/" class="active_li">
            <i class="iconfont">&#xe62e;</i>
            <p>首页</p>
          </a>
        </li>
        <!--<li>-->
          <!--<router-link to="/goods/release">-->
            <!--<i class="iconfont">&#xe620;</i>-->
            <!--<p>发帖</p>-->
          <!--</router-link>-->
        <!--</li>-->
        <li @click="goUser">
          <!--<a href="">-->
          <i class="iconfont">&#xe657;</i>
          <p>我的</p>
          <!--</a>-->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      goUser() {
        if (localStorage['userDbId'] && localStorage['id']) {
          this.$router.push({path: "/user/userinfo", query: {"": ''}})
        } else {
          this.$router.push({path: "/user/login", query: {"": ''}})
        }
      }
    },
    mounted() {

    },
    watch: {}
  }
</script>

<style lang="less">
  #footer {
    .footer_xy {
      width: 100%;
      height: 2.625rem;
      /*border-top: 1px solid #fbfbfb;*/
      position: fixed;
      bottom: -1px;
      left: 0;
      z-index: 99;
      ul {
        display: flex;
        background: #f3f3f3;
        li {
          flex: 1;
          text-align: center;
          color: #a7a7a7;
          .active_li {
            color: #941111;
          }
          a {
            color: #5d6164;
          }
          i {
            font-size: 1.53125rem;
            line-height:1.53125rem;
            height:1.53125rem;
            margin-top: 0.15rem;
            display: block;
          }
          p {
            font-size: 0.625rem;
          }
        }

      }
    }
  }
</style>

<!--<template>-->
<!--<div id="footer" style="height: 2.625rem;width: 100%;position: fixed;left: 0;bottom: 0;">-->
<!--<i style="height: 2.625rem;display: block;width: 100%;"></i>-->
<!--<div class="footer_xy">-->
<!--<ul>-->
<!--<li>-->
<!--<a href="" class="active_li">-->
<!--<i style="font-size: 1rem;margin-top: 0.2rem;" class="iconfont">&#xe619;</i>-->
<!--<p>主页</p>-->
<!--</a>-->
<!--</li>-->
<!--<li>-->
<!--<i class="iconfont">&#xe620;</i>-->
<!--<p>发帖</p>-->
<!--</li>-->
<!--<li  @click.native="goUser">-->
<!--<i class="iconfont">&#xe677;</i>-->
<!--<p>我的</p>-->
<!--</li>-->
<!--</ul>-->
<!--</div>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--data() {-->
<!--return {}-->
<!--},-->
<!--methods: {-->
<!--gosUser() {-->
<!--alert('1')-->
<!--//        if (localStorage['userDbId'] && localStorage['id']) {-->
<!--//          this.$router.push({path: "/user/userinfo", query: {"": ''}})-->
<!--//        } else {-->
<!--//          this.$router.push({path: "/user/login", query: {"": ''}})-->
<!--//        }-->
<!--}-->
<!--},-->
<!--mounted() {-->
<!--},-->
<!--watch: {}-->
<!--}-->
<!--</script>-->

<!--<style lang="less">-->
<!--#footer {-->
<!--.footer_xy {-->
<!--width: 100%;-->
<!--height: 2.625rem;-->
<!--border-top: 1px solid #fbfbfb;-->
<!--position: fixed;-->
<!--bottom: -1px;-->
<!--left: 0;-->
<!--z-index: 99;-->
<!--ul {-->
<!--display: flex;-->
<!--background: #f5f5f5;-->
<!--li {-->
<!--flex: 1;-->
<!--text-align: center;-->
<!--.active_li {-->
<!--color: #28c0fb;-->
<!--}-->
<!--a {-->
<!--color: #5d6164;-->
<!--}-->
<!--i {-->
<!--font-size: 1.3125rem;-->

<!--}-->
<!--p {-->
<!--font-size: 0.625rem;-->
<!--}-->
<!--}-->

<!--}-->
<!--}-->
<!--}-->
<!--</style>-->
