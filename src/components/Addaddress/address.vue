<template>
  <div id="address">
    <mt-header title="我的地址">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="myinfo">
      <div class="add_form">
        <div><label>姓名</label>
          <input type="text" placeholder="请输入姓名" v-model="addData.username" name="username" @blur="handleBlur" ref="username" />
          <span class="hiden" ref="username_span">请输入收货人姓名</span>
        </div>
        <div><label>联系方式</label>
          <input type="tel" placeholder="请输入联系方式" v-model="addData.phone" name="phone" @blur="handleBlur" ref="phone" />
          <span class="hiden" ref="phone_span">请输入联系方式</span>
        </div>

        <div @click="getAreaList"><label>收货地址</label>
          <input type="text" @click="onMyAddressChange" readonly="readonly" placeholder="请选择收货地址" v-model="addData.city" name="city" ref="city" class="test" ><i class="iconfont">&#xe63f;</i></input>
          <span class="hiden" ref="city_span">请选择收货地址</span>
        </div>
        <div><label>详细地址</label>
          <textarea placeholder="请输入详细地址" v-model="addData.introduction" name="introduction" @blur="handleBlur" ref="introduction"></textarea>
          <span class="hiden" ref="introduction_span">请输入详细地址</span>
        </div>
      </div>
      <mt-popup position="bottom" v-model="popupVisible">
        <mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
      </mt-popup>
      <!--<mt-field @bluer.native="test" ref="username" label="" placeholder="收货人" v-model="addData.username"></mt-field>
            <mt-field label="联系方式" placeholder="联系方式" type="tel" v-model="addData.phone"></mt-field>
            <mt-field class="bor-b" label="收货地址" type="text" readonly="readonly" v-model="addData.city">
                <i class="iconfont" @click="getAreaList">&#xe63f;</i>
            </mt-field>
            <mt-field label="详细地址" placeholder="详细地址" type="textarea" rows="4" v-model="introduction"></mt-field>
            <mt-popup position="bottom" v-model="addData.popupVisible">
                <mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
            </mt-popup>
            <div class="setDefaul" @click="setDefauladdress">
                <label for="">设置为默认</label>
                <span :class="{'actions':defauladdress}">
                    <i><img src="../goods/image/select02.png" alt=""></i>
                </span>
            </div>-->
    </div>

    <div class="addNewaddress" @click="addNewaddress">添加新地址</div>
  </div>
</template>

<script>
  import navFooter from '@/components/component/footer/footer.vue'
  import { Picker } from 'mint-ui';
  import myaddress from './address.json'

  //文本框校验正则
  let rejson = {
    username: /\S/,
    phone: /^([0-9]{3,4}-)?[0-9]{7,8}$/,
    city: /\S/,
    introduction: /\S/
  };

  //手机号码校验
  let isMob = /^((\+?86)|(\+86))?(17[012356789][0-9]{8}|13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;

  export default {
    data() {
      return {
        addData: {
          username: '',
          phone: '',
          city: '',
          introduction: ''
        },

        defauladdress: false,
        popupVisible: false,
        areaPicker: '',
        myAddressSlots: [{
          flex: 1,
          defaultIndex: 1,
          values: Object.keys(myaddress), //省份数组
          className: 'slot1',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: [],
          className: 'slot3',
          textAlign: 'center'
        },
          {
            divider: true,
            content: '-',
            className: 'slot4'
          },
          {
            flex: 1,
            values: [],
            className: 'slot5',
            textAlign: 'center'
          }
        ],

        myAddressProvince: '省',
        myAddressCity: '市',
        myAddresscounty: '区/县',
        defaultRegion: ['湖北省', '十堰市', '丹江口市'],
      }
    },
    components: { //引入组件
      navFooter
    },
    watch: {
      'addressXian': {
        handler(val, oval) {
          let street = this.xianObj[this.addressXian]
          this.streetSlots[0].values = street
        }
      }
    },
    methods: { //执行的方法函数
      handleBlur(event) {
        let currentEl = event.target.name;
        if(rejson[currentEl]) {
          if(currentEl == 'tel') {
            if(rejson[currentEl].test(event.target.value) || isMob.test(event.target.value)) {
              this.$refs[currentEl + '_span'].className = 'hiden';
            } else {
              this.$refs[currentEl + '_span'].className = 'errShow';
            }
          } else {
            if(rejson[currentEl].test(event.target.value)) {
              this.$refs[currentEl + '_span'].className = 'hiden';
            } else {
              this.$refs[currentEl + '_span'].className = 'errShow';
            }
          }
        }
      },
      addNewaddress() {
        let bOk = true;
        for(let name in rejson) {
          if(name == 'phone') {
            if(rejson[name].test(this.addData[name]) || isMob.test(this.addData[name])) {
              this.$refs[name + '_span'].className = 'hiden';
            } else {
              this.$refs[name + '_span'].className = 'errShow';
              bOk = false;
            }
          } else {
            if(!rejson[name].test(this.addData[name])) {
              this.$refs[name + '_span'].className = 'hiden';
              bOk = false;
            } else {
              this.$refs[name + '_span'].className = 'hiden';
            }
          }

        }
      },
      //是否设置为默认地址切换
      setDefauladdress() {
        this.defauladdress = !this.defauladdress;
      },

      //显示地址选择
      getAreaList() {
        this.popupVisible = true;
      },

      //地区选择监听事件
      onMyAddressChange(picker, values) {
        this.addData.city = values;
        this.areaPicker = picker
        if(myaddress[values[0]]) {
          picker.setSlotValues(1, Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
          picker.setSlotValues(2, myaddress[values[0]][values[1]]);
          this.myAddressProvince = values[0];
          this.myAddressCity = values[1];
          this.myAddresscounty = values[2];
        }
      },

      //编辑时设置地址
      setcurrentProvince() {
        let self = this;
        let province = self.defaultRegion[0]; //默认的省
        let provinceArr = Object.keys(myaddress); //全国所有的省份数组
        let city = self.defaultRegion[1]; //默认的市
        let cityArr = Object.keys(myaddress[province]); //通过省份获取当前省份下面的所有市数组
        let cityJson = myaddress[province]; //通过省份获取当前省份下面的所有市
        let county = self.defaultRegion[2]; //默认的县
        if(province) {
          if(provinceArr && provinceArr.length > 0) {
            self.myAddressSlots[2].values = cityArr;
            self.myAddressSlots[4].values = cityJson[city];
            this.areaPicker.setSlotValue(0, province);
            this.areaPicker.setSlotValue(1, city);
            this.areaPicker.setSlotValue(2, county)
          }
        }
      }

    },
    created() { //只执行一次

    },
    mounted() { //全部渲染完毕
      this.$nextTick(() => {
        this.setcurrentProvince();
      });
    }
  }
</script>

<style type="text/css" lang="less" scoped>
  #address {
    width: 100%;
    box-sizing: border-box;
    font-size: 0.625rem;
    min-height: 100%;
    .myinfo {
      margin-bottom: 50px;
    }
    .setDefaul {
      width: 100%;
      height: 1.34375rem;
      min-height: 48px;
      display: block;
      overflow: hidden;
      line-height: 1.34375rem;
      font-size: 0.6875rem;
      color: #666;
      padding: 0 10px;
      box-sizing: border-box;
      border-bottom: 1px solid #f4f4f4;
      >label {
        float: left;
        line-height: 2.4rem;
        font-size: 0.6875rem;
        color: #666;
      }
      span {
        height: 2.4rem;
        line-height: 2.4rem;
        width: 50%;
        float: right;
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
          top: 0.3rem;
          >img {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            display: none;
          }
        }
      }
      .actions {
        img {
          display: block
        }
        i {
          border: 1px solid #4ecd31;
        }
      }
    }
    .addNewaddress {
      width: 8.125rem;
      height: 2rem;
      display: block;
      background: #666;
      margin: 0 auto;
      border-radius: 5px;
      text-align: center;
      font-size: 0.6875rem;
      line-height: 2rem;
      margin-top: 18px;
      color: #fff;
    }
    .add_form {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      padding: 0.6875rem 0;
      box-sizing: border-box;
      display: block;
      background: #fff;
      >div {
        width: 100%;
        display: block;
        border-bottom: 1px solid #e8e8e8;
        font-size: 0.6875rem;
        color: #666;
        padding: 0.43rem 0;
        >label {
          position: relative;
          width: 5rem;
          height: 1.875rem;
          line-height: 1.875rem;
          padding-left: 0.6875rem;
          box-sizing: border-box;
          display: inline-block;
          >i {
            position: absolute;
            top: 0.9rem;
            left: 50%;
            width: 100%;
            font-size: 0.5rem;
            line-height: 1.875rem;
            transform: translate(-50%, 0);
            display: block;
            text-align: center !important;
          }
        }
        >i {
          padding-right: 1rem;
          vertical-align: middle;
          text-align: right;
        }
        >input[type="text"],
        >input[type="tel"],
        >input[type="email"],
        >input[type="number"] {
          width: 13.5rem;
          height: 1.875rem;
          font-size: 0.6875rem;
          color: #666;
          border: none;
          display: inline-block;
          outline: none;
        }
        >input[type="date"] {
          height: 1rem !important;
          line-height: 1rem !important;
          background: rgba(0, 0, 0, 0) !important;
          box-shadow: none !important;
        }
        .test{
          width: 12.9rem !important;
        }
        >textarea {
          padding: 0.3125rem 0;
          box-sizing: border-box;
          width: 13.5rem;
          height: 2.875rem;
          font-size: 0.6875rem;
          color: #666;
          border: none;
          display: inline-block;
          vertical-align: top;
          outline: none;
        }
        span {
          display: none;
        }
        .errShow {
          width: 100%;
          height: 0.4375rem;
          line-height: 0.4375rem;
          display: block;
          color: red;
          padding-left: 5rem;
          box-sizing: border-box;
        }
        .input_div {
          a {
            color: #666;
          }
          padding: 0.3125rem;
          box-sizing: border-box;
          width: 13.5rem;
          height: 2.6rem;
          line-height: 2.2rem;
          border: none;
          //              vertical-align: top;
          display: inline-block;
          font-size: 0.6875rem;
          color: #666;
          position: relative;
          >input {
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            opacity: 0;
            outline: none;
          }
        }
      }
    }
  }

  .mint-field {
    border-bottom: 1px solid #f4f4f4;
    line-height: 1.34375rem;
    font-size: 0.6875rem;
    color: #666;
  }

  .mint-popup {
    width: 100%;
  }
</style>
