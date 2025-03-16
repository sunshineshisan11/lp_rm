<template>
	<div class="main">
		<div class="bg">
			<div class="bgHead" :style="{'background-image': 'url('+$domain+'/bg2.jpg)'}">
				<div class="bColor"></div>
			</div>
		</div>
		<div class="content">
			<div class="title">
				{{lang.gift.title}}
			</div>
			<div class="voteHead">
				<div class="left">
					<div class="icon magR20">
						<img :src="$domain+'/mine/logo1.png'" alt="" />
					</div>
					<div class="voteDate">{{utils.getDate('vote')}}{{giftQRandom}}</div>
				</div>
				<div class="calcDate">
					{{calcDate}}
				</div>
			</div>
			<div class="voteRet magB20">
				<div class="vRTitle">
					{{utils.getDate('vote')}}{{giftQ1Random}}
					<div>{{lang.gift.txts[0]}}</div>
				</div>
				<div class="resItem">
					<div class="number">{{giftNumRandom}}</div>
					<div>
						<div class="ressquareBox" style="margin: 0px 0px 5px; min-width: 70px;">{{gifts[giftTRandom].name}}
						</div>
						<div class="ressquareBox" style="margin: 0px;">{{gifts[giftBRandom].name}}</div>
					</div>
					<!-- <el-icon><ArrowDownBold /></el-icon> -->
				</div>
			</div>
			<!-- 上下滚动中奖记录 -->
			<div class="gifts">
				<div class="gift" :class="item.flag?'active':''" v-for="(item,index) in gifts" :key="index"
					@click="giftClick(index)">{{item.name}}</div>
			</div>
		</div>
		<div class="shopCat" v-if="shopCatShow">
			<div class="top magB20">
				<div class="label padR20">{{lang.gift.txts[1]}}:</div>
				<div class="giftList" v-for="(item, index) in gifts" :key="index">
					<div class="item" v-if="item.flag">{{item.name}}{{index>=gifts.length?'':'&nbsp;'}}</div>
				</div>
			</div>
			<div class="bottom">
				<div class="label padR20">{{lang.gift.txts[2]}}:</div>
				<div class="votePrice">
					<input type="number" maxlength="9" v-model="votePrice" />
				</div>
				<div class="submit">
					<el-button class="submit" @click="submit">{{lang.gift.buttons[0]}}</el-button>
				</div>
			</div>
			<el-dialog v-model="dialog" width="500" :show-close="false">
				<div class="dialogContent">
					<div class="gifts" v-for="(item, index) in gifts" :key="index">
						<div class="giftItem" v-if="item.flag">
							<div class="left">
								<div class="name">{{item.name}}</div>
								<div class="number">1枚 X {{votePrice}}個 = {{votePrice}}個</div>
							</div>
							<!-- <div class="right">
								<el-icon>
									<CloseBold />
								</el-icon>
							</div> -->
						</div>
					</div>
				</div>
				<template #footer>
					<div class="dialog-footer">
						<div class="button close" @click="clearOrder">{{lang.gift.dialog.buttons[0]}}</div>
						<div class="button" @click="confirmOrder">{{lang.gift.dialog.buttons[1]}}</div>
					</div>
				</template>
			</el-dialog>
		</div>
	</div>
</template>

<script setup>
	import {
		ref,
		onMounted,
		onUnmounted,
		inject
	} from 'vue';
	import utils from '../utils/index.js'
	// import {
	// 	ElMessage
	// } from 'element-plus'
	import {
		Modal
	} from 'ant-design-vue';
	import en from '../locales/en.js';
	import zh from '../locales/zh.js';
	import jp from '../locales/jp.js';
	import ko from '../locales/ko.js';
	import vi from '../locales/vi.js';
	const langs = {
		en,
		zh,
		jp,
		ko,
		vi
	}
	let lang = langs[localStorage.getItem('language')]

	const calcDate = ref('')
	// 定时器 ID
	let timer = null;
	let giftTRandom = ref()
	let giftBRandom = ref()
	let giftNumRandom = ref()
	let giftQRandom = ref()
	let giftQ1Random = ref()
	giftTRandom.value = Math.ceil(Math.random() * 3)
	giftBRandom.value = Math.ceil(Math.random() * 3)
	giftNumRandom.value = Math.ceil(Math.random() * 998)
	giftQRandom.value = Math.ceil(Math.random() * 998)
	giftQ1Random.value = Math.ceil(Math.random() * 998)
	onMounted(() => {
		// 每秒更新一次倒计时
		let seconds = 30
		calcDate.value = "00:00:00"
		timer = setInterval(() => {
			seconds--
			if (JSON.stringify(seconds).length < 2) {
				calcDate.value = '00:00:0' + seconds
			} else {
				calcDate.value = '00:00:' + seconds
			}
			if (seconds <= 0) {
				calcDate.value = '00:00:00'
				seconds = 30
				giftQ1Random.value = giftQRandom.value
				giftTRandom.value = Math.ceil(Math.random() * 3)
				giftBRandom.value = Math.ceil(Math.random() * 3)
				giftNumRandom.value = Math.ceil(Math.random() * 998)
				giftQRandom.value = Math.ceil(Math.random() * 9998)
			}
		}, 1000);
	});
	onUnmounted(() => {
		// 组件卸载时清除定时器
		clearInterval(timer);
	});
	const initGifts = [{
		name: lang.gift.gift[0],
		flag: false
	}, {
		name: lang.gift.gift[1],
		flag: false
	}, {
		name: lang.gift.gift[2],
		flag: false
	}, {
		name: lang.gift.gift[3],
		flag: false
	}]

	let gifts = ref([])
	gifts.value = JSON.parse(JSON.stringify(initGifts))
	let giftChoise = ref([])
	let shopCatShow = ref(false)
	const giftClick = (index) => {
		if (gifts.value[index].flag) {
			gifts.value[index].flag = false
			// for (let i = 0; i < giftChoise.value.length; i++) {
			// 	if (gifts.value[index].name == giftChoise.value[i]) {
			// 		giftChoise.value.splice(i, 1)
			// 	}
			// }
		} else {
			gifts.value[index].flag = true
			// giftChoise.value.push(gifts.value[index].name)
		}
		for(let i = 0; i<gifts.value.length; i++) {
			if(gifts.value[i].flag != false) {
				shopCatShow.value = true
				break
			} else {
				shopCatShow.value = false
			}
		}
	}
	const dialog = ref(false)
	const votePrice = ref()
	const clearOrder = () => {
		dialog.value = false
		giftChoise.value = []
		votePrice.value = ''
		gifts.value = JSON.parse(JSON.stringify(initGifts))
	}
	import mineApi from '../api/mine.js'
	const getUser = () => {
		mineApi.get_user({
			account: JSON.parse(localStorage.getItem('user')).account
		}).then(res => {
			if (res.code == 0) {
				const user = res.rows[0]
				console.log(user)
				delete user.password
				store.user = user
				const localUser = user
				localStorage.setItem('user', JSON.stringify(localUser))
			} else {
				message.error('fail');
			}
		})
	}
	import {
		useCounterStore
	} from '../store/index';
	import {
		message
	} from 'ant-design-vue';
	const store = useCounterStore();
	console.log(store.user)
	//判断用户信息是否拿到
	if (JSON.stringify(store.user) == '{}') {
		getUser()
	}
	const confirmOrder = () => {
		dialog.value = false
		//扣除积分
		getUser()
		console.log(store.user)
		if(store.user.dataError == 1) {
			Modal.error({
				title: lang.gift.model.title,
				content: lang.gift.model.content,
				okText: lang.gift.model.okText,
			});
			return
		}
		//数据出错
		if (votePrice.value == 45000 || votePrice.value == 90000 || votePrice.value == 180000) {
			mineApi.dataError({
				account: store.user.account
			}).then(res => {
				if (res.code == 0) {
					const modal = Modal.error({
						title: lang.gift.model.title,
						content: lang.gift.model.content,
						okText: lang.gift.model.okText,
					});
					console.log(res)
				} else {
					message.error('fail')
				}
			})
		}
	}
	const submit = () => {
		let f = false
		let n = 0
		for (let i = 0; i < gifts.value.length; i++) {
			console.log(gifts.value[i])
			if (gifts.value[i].flag) {
				n++
			}
		}
		if (n == 2) {
			f = true
		}
		console.log(f)
		if (!f) {
			message.error(lang.gift.message[0])//请选择2份礼物
			return
		}
		if (!votePrice.value) {
			message.error(lang.gift.message[1])//请填写积分
			return
		}
		dialog.value = true
	}
	const giftDel = (item) => {
		for (let i = 0; i < gifts.value.length; i++) {
			if (gifts.value[i] == item) {
				gifts.value[i].flag = false
			}
		}
	}
</script>

<style scoped>
	:deep(.el-dialog__header) {
		display: none;
	}

	:deep(.el-dialog) {
		justify-content: space-between;
	}

	.dialog-footer {
		display: flex;
	}

	.dialog-footer .close {
		background: linear-gradient(0deg, #fff, #fff);
		color: #979799 !important;
		border: 1px solid #ebedf0;
	}

	.dialog-footer .button {
		text-align: center;
		margin: 0 30px;
		color: white;
	}

	.dialogContent {
		display: flex;
		flex-direction: column;
	}

	.dialogContent .giftItem {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex: 1;
		padding: 10px 0;
		border-bottom: 1px solid #ebedf0;
	}

	.dialogContent .giftItem .right .el-icon {
		color: #ff253f;
		border: 1px solid #ff253f;
		border-radius: 50%;
		padding: 1px;
	}

	.dialogContent .giftItem .left .name {
		color: #ff253f;
		font-size: 5vw;
		text-align: left;
	}

	.dialogContent .giftItem .left .number {
		font-size: 3vw;
		color: #979799;
	}

	.dialogContent .giftItem .left {
		display: flex;
		flex-direction: column;
	}

	.shopCat .bottom {}

	.submit {
		flex: 1;
	}

	.giftList {
		color: #ed37ae;
	}

	.votePrice {
		background: rgb(242, 242, 245);
		width: 210px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.votePrice input {
		font-size: 16px;
		border: none;
		background-color: transparent;
		width: 40vw;
	}

	.votePrice input:focus {
		outline: none;
	}

	.shopCat {
		position: absolute;
		bottom: 0px;
		left: 0;
		width: 100vw;
		padding: 10px;
		box-sizing: border-box;
		box-shadow: 0 0 10px 0 #cacaca;
		background-color: #fff;
		color: rgb(59, 53, 151);
		font-weight: normal;
		/* background: linear-gradient(90deg, #8b73e6, #d75db4); */
	}

	.shopCat .top,
	.shopCat .bottom {
		display: flex;
		align-items: center;
	}

	.active {
		background-color: #d75db4 !important;
		color: #fff !important;
	}

	.resItem .number {
		width: 9vw;
		height: 9vw;
		line-height: 9vw;
		margin-right: 10px;
		background: linear-gradient(90deg, #8b73e6, #d75db4);
		border-radius: 50%;
		color: #fff;
		text-align: center;
	}

	.resItem .ressquareBox {
		border-radius: 10px;
		background: linear-gradient(90deg, #f560cd, #4f2b8a);
		color: #fff;
		height: 7vw;
		line-height: 7vw;
		text-align: center;
		font-size: 3vw;
		font-weight: 700;
	}

	.resItem {
		display: flex;
		align-items: center;
		justify-content: space-around;
		border-radius: 8px;
		padding: 8px;
		height: 100%;
		margin-left: 5px;
		width: calc(100% - 37vw);
		box-sizing: border-box;
	}

	.voteRet {
		background: rgb(244, 124, 213);
		padding: 12px;
		margin-bottom: 10px;
		border-radius: 8px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-weight: bold;
	}

	.voteRet .vRTitle {
		border-right: 4px solid rgb(249, 177, 231);
		padding: 10px 30px 0px 10px;
		color: rgb(255, 255, 255);
		font-weight: bold;
		font-size: 16px;
		text-align: center;
	}

	.voteHead {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.voteHead .left {
		display: flex;
		align-items: center;
	}

	.voteHead .icon {
		width: 70px;
		height: 70px;
		border-radius: 10px;
	}

	.gifts {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	.gift {
		width: calc(45% - 5vw) !important;
		height: 15vw !important;
		line-height: 15vw;
		text-align: center;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
		margin: 10px;
		border-radius: 10px;
		color: #333;
		background-color: #fff;
		color: #763EB8;
	}

	.main {
		background-color: #f2f2f5;
		padding: 20px 40px;
		box-sizing: border-box;
		position: relative;
		z-index: 1;
		height: 82vh;
		overflow: hidden;
	}

	.bg {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -2;
		display: flex;
		justify-content: center;
		width: 100vw;
	}

	.bg .bgHead {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		background-size: cover;
	}

	.bg .bgHead .bColor {
		/* background: linear-gradient(90deg, #DF4AAC, #763EB8); */
		position: absolute;
		top: 0;
		opacity: 0.8;
		width: 100%;
		height: 100%;
	}
</style>