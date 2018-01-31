<template>
	<div id="address">
		<div class="myinfo">
			<mt-field ref="username" state="success" label="" placeholder="收货人" v-model="username"></mt-field>
			<mt-field label="联系方式" placeholder="联系方式" type="tel" v-model="phone"></mt-field>
			<mt-field class="bor-b" label="收货地址" type="text" readonly="readonly" v-model="city">
				<i class="iconfont" @click="getAreaList">&#xe63f;</i>
			</mt-field>
			<mt-field label="详细地址" placeholder="详细地址" type="textarea" rows="4" v-model="introduction"></mt-field>
			<mt-popup position="bottom" v-model="popupVisible">
				<mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
			</mt-popup>
			<div class="setDefaul" @click="setDefauladdress">
				<label for="">设置为默认</label>
				<span :class="{'actions':defauladdress}">
					<i><img src="../goods/image/select02.png" alt=""></i>
				</span>
			</div>
		</div>

		<div class="addNewaddress">添加新地址</div>
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
				username: '',
				phone: '',
				city: '',
				introduction: '',
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
				this.city = values;
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
		padding: 0.8125rem 0;
		box-sizing: border-box;
		font-size: 0.625rem;
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