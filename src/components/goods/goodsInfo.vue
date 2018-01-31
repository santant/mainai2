<template>
  <div id="goods">
    <mt-header title="商品详情">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="swipe_xy">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="./image/banner02.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./image/banner02.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./image/banner02.jpg" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="goodsMsg">
      <span>高钙鲜牛奶</span> <span>200ml/瓶</span>
      <p><i class="iconfont">&#xe652;</i>6.60</p>
    </div>
    <div class="goodsNumber">
      <span>每天数量</span>
      <div class="numberBox">
        <ol>
          <li><i class="icon iconfont">&#xe66a;</i></li>
          <li>1</li>
          <li><i class="icon iconfont">&#xe613;</i></li>
        </ol>
      </div>
    </div>
    <!--送奶时间和日历-->
    <div class="box_time">
      <dl>
        <dd @click="popupVisie">
          <span>送奶时间:</span>
          <span class="today">{{today}}</span>
          <i class="iconfont">&#xe636;</i>
        </dd>
        <dt>
        <ol>
          <li :class="{'li_hide':indexImg==1}" @click="toDaySong(1)">每天送 <i><img src="./image/select02.png" alt=""></i>
          </li>
          <li :class="{'li_hide':indexImg==2}" @click="toDaySong(2)">工作日送 <i><img src="./image/select02.png" alt=""></i></li>
          <li :class="{'li_hide':indexImg==3}" @click="toDaySong(3)">六日送 <i><img src="./image/select02.png" alt=""></i></li>
        </ol>
        </dt>
      </dl>
      <div class="data_assembly">
        <div class="data_title">
          <i @click="prevMouth" class="prev">&lt;&lt;</i> <span><b class="year">{{dataJson.year}}</b>年<b class="mouth">{{dataJson.mouth}}</b>月</span>
          <i
            @click="nextMouth" class="next">&gt;&gt;</i>
        </div>
        <ul>
          <li>日</li>
          <li>一</li>
          <li>二</li>
          <li>三</li>
          <li>四</li>
          <li>五</li>
          <li>六</li>
        </ul>
        <ol class="data_number">
          <!--<li :class="{'visibility':index<dataJson.weekData.week}"  class="week"  v-for="(item,index) in dataJson.weekData.data"><span-->
          <!--&gt;{{index}}</span></li>-->
        </ol>
      </div>
    </div>
    <div class="hmodal" @click="popupVisible=false" v-if="popupVisible" @touchmove.prevent>
      <div class="" style="height: 180px;position: absolute;width: 100%;bottom: 0;">
        <mt-picker value-key="key" position="" :slots="slots" @change="onValuesChange"></mt-picker>
      </div>
    </div>
    <div class="goodsNumber">
      <span :class="{'nx_show':dataJson.nai_show%2==1}" @click="++dataJson.nai_show">是否有奶箱 <b><img src="./image/select01.png" alt=""></b></span>
      <span :class="{'nx_show':dataJson.fd_show%2==1}" @click="++dataJson.fd_show">送亲友 <b><img src="./image/select01.png" alt=""></b></span>
    </div>
    <div class="goodsInfo">
      <span class="title">商品详情</span>
      <span class="text_mian">
          <b>规格：</b>950ml
        </span>
      <span class="text_mian">
        <b>保质期：</b>8天
      </span>
      <span class="text_mian">
        <b>贮存条件：</b>2℃-6℃冷藏，开启后请尽快饮用完毕2℃-6℃冷藏，开启后请尽快饮用完毕，开启后请尽快饮用完毕2℃-6℃冷藏，开启后请尽快饮用完毕开启后请尽快饮用完毕2℃-6℃冷藏，开启后请尽快饮用完毕开启后请尽快饮用完毕2℃-6℃冷藏，开启后请尽快饮用完毕
      </span>
    </div>
    <i style="height: 2.55rem;display: block;width: 100%;"></i>
    <!--结算-->
    <div class="payOrder">
      <span><b>合计：</b><i class="iconfont">&#xe652;</i><b class="price">66.00</b></span>
      <span @click="goOrder">结算</span>
    </div>
  </div>
</template>
<script>
  // import api from '../../api.js'
  import navFooter from '@/components/component/footer/footer.vue'
  import {DomHeight} from '@/directive.js'
  import {Swipe, SwipeItem, DatetimePicker, Picker, Popup, Toast} from 'mint-ui';
  export default {
    data() {
      return {
        dataJson: { //日历初始化参数
          year: new Date().getFullYear(), //年
          mouth: new Date().getMonth() + 1 < 10 ? +'0' + new Date().getMonth() + 1 : new Date().getMonth() + 1, //月
          day: new Date().getDate(), //日
          dataM: new Date(), //当前的时间对象
          daymm: 24 * 60 * 60 * 1000, //每天有多少毫秒
          lastDayNumber: 0, //距离顺延时间的毫秒
          toDay: 30,//往后顺延多少天
          everyDay: 0,//默认为0，不参与计算,1=每天送,2工作日送,3=周末送
          lastTime: '',
          weekData: {
            data: 0,
            week: 0
          },
          nai_show:0, //是否有奶箱
          fd_show:0,  //是否送亲友
          defaultIndex: 2
        },
        indexImg: -1,
        popupVisible: false,
        today: '30天',
        slots: [
          {
            flex: 1,
            values: [{'key': '1天', 'index': 0}, {'key': '7天', 'index': 1}, {'key': '30天', 'index': 2}, {
              'key': '90天',
              'index': 3
            }, {'key': '180天', 'index': 4}, {'key': '365天', 'index': 5}],
            className: 'slot1',
            defaultIndex: 0
          }
        ],
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
      goOrder(){ //结算
        this.$router.push({path: "/goods/confirmOrder"})
      },
      prevMouth() {
        this.putYm(--this.dataJson.mouth)
      },
      nextMouth() {
        this.putYm(++this.dataJson.mouth)
      },
      signTime(dataJson) {
        var _this = this;
        var day = this.getdate(new Date(), 1) //当天日期对应的天数
        var week = this.getWeek(dataJson.year + '-' + dataJson.mouth + '-01', 1)
        var arrDay = []
        //根据年月生成一个数组
        for (var i = 1; i <= week.days; i++) {
          var currentNum = _this.toDou(i);
          var o = dataJson.year + '-' + _this.toDou(dataJson.mouth) + '-' + currentNum
          var obj = {}
          obj.time = o  //日历时间
          obj.week = _this.getWeek(o) == 0 ? 7 : _this.getWeek(o) //星期几
          arrDay.push(obj)
        }
        console.log(arrDay)
        var weekDom = document.querySelectorAll(".data_assembly > ol .week");
        for (var i = 0; i < arrDay.length; i++) {
          weekDom[i].classList.remove('red')
          if (new Date(arrDay[i].time).getTime() <= dataJson.lastDayNumber && new Date(arrDay[i].time).getTime() > new Date().getTime()) {
            if (dataJson.everyDay == 1) { //每日送
              weekDom[i].classList.add("red")
            }
            if (dataJson.everyDay == 2 && arrDay[i].week < 6) { //工作日送
              weekDom[i].classList.add("red")
            }
            if (dataJson.everyDay == 3 && arrDay[i].week > 5) {//休息日送
              weekDom[i].classList.add("red")
            }
          }
        }
      },
      //根据天数算出当前后面的时间增加色值赛选出工作日和周末
      toDayTime(dataJson) {
        if (dataJson.everyDay == 0) {
          Toast('请选择配送类型!')
          return false;
        }
        var _this = this
        var day = _this.getdate(new Date(), 1).split('-')[2] //当天日期对应的天数
        //当前时间毫秒
        var od1 = new Date(_this.getdate(new Date(), 1)).getTime()
        //距离后期希望顺延预约的天数毫秒
        var od2 = dataJson.daymm * dataJson.toDay + od1
        var newTime = new Date(od2);
        dataJson.lastTime = _this.getdate(newTime, 1)
        dataJson.lastDayNumber = od2
        _this.signTime(dataJson)

      },
      //默认执行函数
      _init_(dataJson) {
        //获取当前时间搓
        var timestamp = this.dataJson.dataM.getTime()
        //获取时间字符串
        var strdata = this.getdate(dataJson.dataM, 1) //2018-3-10
        var week = this.getWeek(strdata, 1) //根据年月每月1号获取当前1日是星期几,和当前月多少天
        this.setDataDom(week) //渲染dom的初次操作
      },
      //根据  {week: 1, days: 31} 对象来随机生成日历
      setDataDom(week) {
        var data = parseInt(week.days) + parseInt(week.week)
        this.dataJson.weekData = {
          data: data,
          week: week.week
        }
        //填写日历
        var str = ''
        for (var i = 0; i < data; i++) {
          str += "<li class='week'><span>" + (i + 1 - week.week) + "</span></li>"
        }
        document.querySelector(".data_assembly .data_number").innerHTML = str
        var oLi = document.querySelectorAll(".data_assembly > ol > li")
        for (var i = 0; i < week.week; i++) {
          oLi[i].classList.remove('week')
          oLi[i].style.visibility = 'hidden'
        }
      },
      putYm(mouth) {
        var _this = this
        if (mouth <= 0) {
          --_this.dataJson.year
          _this.dataJson.mouth = 12
          console.log(_this.dataJson)
        }
        if (mouth > 12) {
          ++_this.dataJson.year
          _this.dataJson.mouth = 1
        }
        if (_this.dataJson.mouth < 10) {
          _this.dataJson.mouth = '0' + _this.dataJson.mouth
        }
        var strdata = _this.dataJson.year + '-' + _this.dataJson.mouth + '-01'
        var week = _this.getWeek(strdata, 1) //根据年月每月1号获取当前1日是星期几,和当前月多少天
        _this.setDataDom(week) //刷新dom操作
        _this.signTime(_this.dataJson)
      },
      //now data对象,是一个占位符号，有就是2018-01-25 没有就有秒
      getdate(now, s) {
        var y = now.getFullYear()
        var m = now.getMonth() + 1
        var d = now.getDate()
        if (s) {
          return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d);
        } else {
          return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
        }
      },
      //根据//2013-3-10 字符串获取每月1日是星期几,和当前根据当前年月，返回当前月应该多少天
      getWeek(strweek, numbers) { //strweek  2018-1-2 ,numbers标识符，获取每月从1开始的字符串
        var strweeks = strweek.split('-') //数组
        //获取年份
        var year = strweeks[0];
        //获取月份
        var mouth = strweeks[1];
        //定义当月的天数；
        var days;
        //当月份为二月时，根据闰年还是非闰年判断天数
        if (mouth == 2) {
          days = year % 4 == 0 ? 29 : 28;
        } else if (mouth == 1 || mouth == 3 || mouth == 5 || mouth == 7 || mouth == 8 || mouth == 10 || mouth == 12) {////月份为：1,3,5,7,8,10,12 时，为大月.则天数为31
          days = 31;
        } else {//其他月份，天数为：30.
          days = 30;
        }
        if (numbers) {
          strweeks[2] = "01"
          return {
            week: new Date(strweeks.join('-')).getDay(),//返回星期几
            days: days //返回多少天
          }
        }
        return new Date(strweek).getDay() //反正不是1月的星期几
      },
      toDou(num) { //根据最终毫秒倍数计算出标记的时间内
        return num >= 10 ? '' + num : '0' + parseInt(num)
      },
      onValuesChange(picker, values) {
        this.today = values[0].key
        this.dataJson.toDay = parseInt(this.today)
        this.toDayTime(this.dataJson)
        this.dataJson.defaultIndex = values[0].index
      }
      ,
      toDaySong(index) {
        this.indexImg = index
        this.dataJson.everyDay = index
        this.toDayTime(this.dataJson)
      },
      popupVisie() {
        this.slots[0].defaultIndex = (this.dataJson.defaultIndex - 0)
        this.popupVisible = true
      }
    },
    created() { //只执行一次

    }
    ,
    mounted() { //全部渲染完毕
      var _this = this
//      console.log(this.dataJson)
      _this._init_(this.dataJson);//初始化操作
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  #goods {
    .swipe_xy {
      height: 16rem;
      box-shadow: 1px 10px 20px #ccc;
      /*overflow: hidden;*/
      img {
        width: 100%;
        height: 16.0625rem;
      }
    }
    font-family: Arial;
    .payOrder {
      width: 100%;
      height: 2.90625rem;
      line-height: 2.90625rem;
      background: #f3f3f3;
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
    .goodsInfo {
      padding: 0.34375rem 1.5625rem 1rem;
      background: #fff;
      margin-top: 0.3125rem;
      .title {
        line-height: 2.59375rem;
        display: block;
        text-align: center;
        font-size: 0.9375rem;
        letter-spacing: 2px;
        color: #333;
      }
      .text_mian {
        display: block;
        line-height: 1.34375rem;
        font-size: 0.6875rem;
        color: #666;
        font-weight: 400;

        > b {
          display: inline-block;
          width: 4.21875rem;
          font-weight: 400;
          text-align: justify;
          text-align-last: justify;
        }
      }
    }
    .hmodal {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 2000;
      .slot1 {
        background: #fff;
        /*position: absolute;*/
        /*bottom: 0;*/
        /*left: 0;*/
      }
    }
    /*日历插件css*/
    .data_assembly {

      width: 100%;
      color: #666;
      .visibility {
        visibility: hidden;
      }
    }
    .data_assembly .red {
      position: relative;
      span {
        background: #d33c3c;
        border-radius: 50%;
        color: #fff;
        font-size: 0.8rem;
        width: 1.59375rem;
        height: 1.59375rem;
        line-height: 1.59375rem;
        margin: 0 auto;
        display: block;
        /*margin: auto auto;*/
        /*position: absolute;*/
        /*left: 0;*/
        /*top:0;*/
        /*bottom:0;*/
        /*right: 0;*/
        /*max-height: 100%;*/
        /*max-width: 100%;*/
      }
    }
    .data_assembly .data_title {
      width: 300px;
      margin: 0 auto;
      position: relative;
      font-size: 0.9rem;
      color: #333;
      letter-spacing: 5px;
      b {
        font-weight: 500;
      }
    }
    .data_assembly .data_title i:first-child {
      line-height: 30px;
      position: absolute;
      left: 10px;
      top: 0;
    }
    .data_assembly .data_title span {
      text-align: center;
      display: block;
      line-height: 30px;
    }
    .data_assembly .data_title i:last-child {
      line-height: 30px;
      position: absolute;
      right: 10px;
      top: 0;
    }
    .data_assembly > ul {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }
    .data_assembly > ul > li {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      text-align: center;
      line-height: 40px;
      color: #666;
      font-size: 0.9rem;
    }
    .data_assembly > ol {
      overflow: hidden;
      width: 100%;
      padding-bottom: 0.5rem;
    }
    .data_assembly > ol > li {
      text-align: center;
      line-height: 1.59375rem;
      height: 1.59375rem;
      width: 14.285%;
      float: left;
      font-size: 0.9rem;
      color: #666;
      margin-bottom: 0.1rem;
    }
    background: #f3f3f3;
    min-height: 100%;
    .slot1 {
      width: 32rem;

    }
    .mint-popup {
      top: auto;
      height: 15rem;
    }
    .goodsMsg {
      /*height: 4.625rem;*/
      background: #fff;
      padding: 0.9375rem 0 0.625rem 0;
      > span {
        font-size: 0.78125rem;
        color: #333;
      }
      > p {
        font-size: 0.84375rem;
        color: #da2b2b;
        font-family: Arial;
      }
      > span, p {
        line-height: 1.5625rem;
        height: 1.5625rem;
        padding-left: 0.8125rem;
      }
    }
    .box_time {
      background: #fff;
      margin-top: 0.3125rem;
      dl {
        padding: 0 0.625rem;
        dd {
          height: 2.4375rem;
          position: relative;
          box-sizing: border-box;
          border-bottom: 1px solid #f3f3f3;
          > i {
            position: absolute;
            line-height: 2.4375rem;
            right: 0;
            top: 0;
            color: #9a9a9a;
          }
          span {
            line-height: 2.4375rem;
            font-size: 0.78125rem;
            color: #333;
          }
          .today {
            position: absolute;
            left: 5.5rem;
            font-family: Arial;
          }
        }
        dt {
          width: 12.8125rem;
          margin-left: 5.45rem;
          height: 4.3125rem;
          ol {
            padding: 0.375rem 0;
            .li_hide {
              img {
                display: block
              }
              i {
                border: 1px solid #4ecd31;
              }
            }
            li {
              line-height: 1.78125rem;
              width: 50%;
              float: left;
              font-size: 0.78125rem;
              color: #999;
              i {
                width: 0.96875rem;
                height: 0.96875rem;
                border-radius: 50%;
                border: 1px solid #999;
                display: block;
                float: right;
                margin-right: 1rem;
                margin-top: 0.4375rem;
                position: relative;
                > img {
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  left: 0;
                  top: 0;
                  display: none;
                }
              }
            }
          }
        }
      }
    }
    .goodsNumber {
      height: 2.4375rem;
      background: #fff;
      margin-top: 0.3125rem;
      position: relative;
      .nx_show{
        b{
          border: 1px solid #4ecd31;
        }
        img{
          display: block;
        }
      }
      > span {
        line-height: 2.4375rem;
        padding-left: 0.625rem;
        font-size: 0.78125rem;
        color: #333;
        b {
          width: 0.9375rem;
          height: 0.9375rem;
          border: 1px solid #999;
          position: relative;
          display: inline-block;
          vertical-align: middle;
          border-radius: 5px;
          margin-left: 1.2rem;
          img {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            display: none;
          }
        }
        &:nth-child(2) {
          padding-left: 1rem;
        }
      }
      .numberBox {
        width: 5rem;
        position: absolute;
        height: 1.3125rem;
        top: 0.53125rem;
        right: 8.96875rem;
        ol {
          border: 1px solid #e4e4e4;
          box-sizing: border-box;
          border-radius: 4px;
          overflow: hidden;
          > li {
            width: 1.59375rem;
            height: 1.3125rem;
            float: left;
            text-align: center;
            font-size: 0.625rem;
            line-height: 1.3125rem;
            &:nth-of-type(2) {
              border-left: 1px solid #e4e4e4;
              border-right: 1px solid #e4e4e4;
            }
          }
        }
      }
    }
  }


</style>
