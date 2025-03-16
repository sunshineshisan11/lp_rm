<template>
	<div class="main">
		<div class="bg">
			<div class="head" :style="{'background-image': 'url('+$domain+'/bg1.jpg)'}">
				<div class="bColor"></div>
			</div>
			<!-- <img style="width: 100vw; height: 100vh;" src="http://154.39.81.208/img/mine/3.jpg" alt="" /> -->
		</div>
		<div class="head">
			<!-- <div class="vipTitle"></div> -->
		</div>
		<div class="vipCardCtrl">
			<!-- 状态 0未申请 1申请中注册提交照片 2会员卡制作中 3制作完成未激活 -->
			<div class="vipCard" :style="{'background-image': 'url('+$domain+'/mine/vipCard.jpg)'}">
				<div class="vipContent">
					<!-- 未申请时不显示 -->
					<div class="left" style="display: flex;flex-direction: column;" @click="visible=true">
						<img v-if="userInfo.avatar"
							:src="user.avatar?user.avatar:$domain+'/'+userInfo.avatar" class="avatar"
							alt="Avatar" />
						<img v-else src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
							class="avatar" alt="Avatar" />
					</div>
					<div class="vipTitle flex height100" style="flex-direction: column;justify-content: space-between;">
						<div class="top">
							<div class="vipStatus">
								<div class="vip">
									<svg class="icon"
										style="width: 2.85546875em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
										viewBox="0 0 2924 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
										p-id="16983">
										<path
											d="M1185.225953 53.447503a259.416926 259.416926 0 0 0-44.743469 9.519887 485.038252 485.038252 0 0 0-49.979408 20.467757 209.913512 209.913512 0 0 0-55.215346 36.651566 376.511538 376.511538 0 0 0-47.599436 57.119323c-24.275712 36.175571-54.739351 81.87103-90.914922 137.56237s-84.251001 130.422454-142.798308 222.765359-118.046601 181.829845-167.07402 258.464937l-147.082257 228.001298h-142.798307c-37.12756-210.389507-68.543188-387.459408-95.198872-529.781721S157.078138 244.32124 142.798308 172.446092a150.890212 150.890212 0 0 0-21.895741-56.167334 142.798308 142.798308 0 0 0-38.079549-34.271594A186.589789 186.589789 0 0 0 47.599436 62.96739a261.320903 261.320903 0 0 0-47.599436-9.519887L12.375853 1.088123h536.445643l-12.851848 52.35938a693.999775 693.999775 0 0 0-86.630973 13.327842 182.305839 182.305839 0 0 0-42.363498 13.803836c-8.567898 4.283949-13.327842 9.043893-13.803837 14.755825v14.755825a247.517067 247.517067 0 0 0 0.951989 33.7956c0 10.471876 4.283949 25.703695 7.139915 44.267475 9.043893 56.167334 22.847729 131.374443 40.459521 226.573315s39.983526 216.577433 65.687221 365.087673c61.879267-98.054838 119.950578-190.397743 172.309958-274.648745s103.290776-166.122031 151.366206-244.185106c20.467757-33.319605 38.079549-64.259238 53.311369-92.8189a172.309958 172.309958 0 0 0 22.371734-59.0233q0-21.419746-37.12756-35.699577a365.087673 365.087673 0 0 0-105.670747-18.56378L776.822793 1.088123h421.255008l-12.851848 52.35938z m-129.470465 958.652638H1618.38082l11.899859-52.359379a362.707701 362.707701 0 0 1-102.338787-20.467758 47.599436 47.599436 0 0 1-32.843611-47.599436v-16.183808c0-7.139915 2.855966-14.755825 4.759943-22.847729L1663.124289 143.886431a129.94646 129.94646 0 0 1 19.515769-43.791481 86.154979 86.154979 0 0 1 43.315487-29.035656 499.318082 499.318082 0 0 1 53.311368-10.94787c23.799718-3.331961 42.839492-5.711932 58.547306-6.663921l11.899859-52.35938H1288.992723l-12.375853 52.35938a352.71182 352.71182 0 0 1 103.76677 26.655684 51.407391 51.407391 0 0 1 33.319605 47.599436v15.231819c0 6.663921-2.855966 14.755825-5.235938 24.751707l-166.598025 705.423639a112.334669 112.334669 0 0 1-20.467758 43.791481 85.678985 85.678985 0 0 1-42.363497 27.607673 294.164514 294.164514 0 0 1-54.739352 10.471876c-23.799718 2.855966-42.363498 4.283949-56.167334 4.759944l-12.375853 52.359379z m1865.897886-798.718534a310.348322 310.348322 0 0 1-39.983526 157.554133 333.196051 333.196051 0 0 1-115.666629 116.618618 577.857151 577.857151 0 0 1-167.07402 67.591199 868.689705 868.689705 0 0 1-203.249592 22.371735h-102.338787l-63.307249 273.220761c0 8.567898-3.331961 15.707814-4.759944 22.84773v16.659802a47.599436 47.599436 0 0 0 26.17969 47.599436 298.924457 298.924457 0 0 0 103.290776 22.847729l-11.899859 52.35938H1791.642766l12.375854-52.35938c11.423865 0 29.51165-2.379972 52.835373-5.235938a319.392215 319.392215 0 0 0 52.35938-10.471876 86.630973 86.630973 0 0 0 42.363498-28.083667 102.338787 102.338787 0 0 0 20.467757-42.839492l162.790071-707.327617c0-9.995882 4.283949-18.56378 5.235938-24.751707v-15.231819a51.407391 51.407391 0 0 0-30.463639-47.599436 312.728294 312.728294 0 0 0-98.530832-26.655684L2024.404008 1.088123H2570.369537a523.593795 523.593795 0 0 1 263.22488 51.883385 174.68993 174.68993 0 0 1 86.154979 160.410099zM2624.632894 334.284174a417.923047 417.923047 0 0 0 15.707814-117.570606 148.986234 148.986234 0 0 0-41.411509-115.190635 193.729704 193.729704 0 0 0-134.706404-38.079549h-51.883385l-104.718759 452.194641h47.599436a347.951876 347.951876 0 0 0 132.326432-23.323724 227.525303 227.525303 0 0 0 89.486939-64.735232 256.560959 256.560959 0 0 0 47.599436-95.198872z"
											fill="#C49F67" p-id="16984"></path>
									</svg>
									<!-- <svg class="icon" style="width: 2.37890625em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 2436 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12295"><path d="M377.74684 979.870696C347.738914 932.211048 0 47.859801 0 16.086702c0-10.591033 54.720337-15.886549 144.744116-12.356205l142.978944 5.295517 107.675502 285.957888c60.015853 158.865494 111.205845 287.72306 116.501362 287.72306s91.788952-130.622739 192.403764-291.253404L887.881592 0.200153h298.314093l-40.59896 67.076542c-125.327223 201.229625-571.915777 882.586075-603.688875 917.889518-49.42482 52.955165-127.092395 51.189992-164.16101-5.295517zM1094.406733 1020.469656c0-3.530344 31.773099-227.707207 70.606886-499.543719 38.833787-270.071339 70.606886-499.543719 70.606886-506.604407s63.546197-14.121377 141.213772-14.121377c137.683428 0 141.213772 1.765172 134.153084 38.833787-5.295516 22.947238-38.833787 252.419617-74.137231 513.665096l-65.311369 471.300964h-139.4486c-75.902402 0-137.683428-1.765172-137.683428-3.530344zM1502.1615 967.514491c0-31.773099 14.121377-153.569977 31.773099-270.071339l30.007926-211.820658 238.29824-3.530344c264.775823-5.295516 301.844438-10.591033 340.678225-51.189992 33.538271-31.773099 37.068615-114.73619 7.060689-144.744117-14.121377-14.121377-104.145157-21.182066-284.192716-21.182066H1601.01114l12.356205-107.675501c19.416894-169.456526-7.060689-157.100321 331.852365-157.100321 328.32202 0 361.860291 8.825861 444.823381 105.910329 40.598959 49.42482 45.894476 70.606886 45.894476 194.168936 0 75.902402-8.825861 160.630666-19.416893 188.87342-22.947238 65.31137-111.205845 155.335149-208.290314 218.881347-72.372058 47.659648-93.554124 51.189992-241.828585 51.189992h-162.395837l-12.356206 75.902403c-5.295516 40.598959-15.886549 100.614813-21.182065 132.387911l-8.825861 56.485509H1500.396328l1.765172-56.485509z" fill="#BD1978" p-id="12296"></path></svg> -->
								</div>
								<div class="name" style="font-size: 14px;">{{userInfo.name||store.user.name}}</div>
								<!-- 0制作中  1未激活 2激活中 3已激活 -->
								<template v-if="userInfo.vipStatus == '0'">
									{{lang.mine.vipStatus[0]}}
								</template>
								<template v-if="userInfo.vipStatus == '1'">
									{{lang.mine.vipStatus[1]}}
								</template>
								<template v-if="userInfo.vipStatus == '2'">
									{{lang.mine.vipStatus[2]}}
								</template>
								<template v-if="userInfo.vipStatus == '3'">
									{{lang.mine.vipStatus[3]}}
								</template>
							</div>
							<img class="logo" :src="$domain+'/mine/logo1.png'" />
						</div>
						<div class="bottom">
							<div class="vipCode" v-if="openFlag == true">ID:&nbsp;
								<template v-if="userInfo.vipStatus == '0'">{{lang.mine.vipStatus[4]}}</template>
								<template
									v-if="userInfo.vipStatus == '1'">{{userInfo.vipCode.substr(1,3)}}.……</template>
								<template v-if="userInfo.vipStatus == '2'">{{userInfo.vipCode.substr(1,3)}}…</template>
								<template v-if="userInfo.vipStatus == '3'">{{userInfo.vipCode}}</template>
							</div>
						</div>
					</div>
				</div><!--   -->
				<div v-show="openFlag == false" class="tc">
					<div class="tcBtn" @click="visible=true">{{lang.mine.buttons[0]}}</div>
				</div>
				<el-dialog v-model="visible" :show-close="false" :style="{'background-image': 'url('+$domain+'/mine/vip2.jpg)'}"
					style="background-size: cover; margin-top: 40px;margin-left: auto; display: flex;flex-direction: column;justify-content: space-around;">
					<template #header="{ close, titleId, titleClass }">
						<div class="my-header flex center" style="">
							<div class="avatar flex" style="">
								<el-upload class="avatar-uploader" action="https://www.lovepartya.com:168/upload"
									:show-file-list="false" :before-upload="beforeUpload" :on-success="handleSuccess"
									:on-error="handleError">
									<img v-if="user.avatar" :src="user.avatar" class="avatarEdit" alt="Avatar" />
									<el-avatar v-else :size="100"
										:src="userInfo.avatar?$domain+'/'+userInfo.avatar:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'" />
								</el-upload>
							</div>
						</div>
						<div class="name flex center">
							<template v-if="userInfo.name">
								<a-input type="text" v-model:value="userInfo.name" :placeholder="lang.mine.dialog.input"
									style="width: 50vw;" />
							</template>
							<template v-else>
								<a-input type="text" v-model:value="user.name" :placeholder="lang.mine.dialog.input"
									style="width: 50vw;" />
							</template>
						</div>
						<div class="btnGroup magT20">
							<a-button @click="visible=false">{{lang.mine.dialog.buttons[0]}}</a-button>
							<a-button @click="ok">{{lang.mine.dialog.buttons[1]}}</a-button>
						</div>
					</template>
				</el-dialog>
			</div>
		</div>
		<div class="accountInfo magT20">
			<div class="money">
				<div class="title" v-if="order">
					<del v-if="userInfo.dataError == 1">
						{{lang.mine.account}}：{{userInfo.money}}
					</del>
					<template v-else>
						{{lang.mine.account}}：{{userInfo.money||0}}
					</template>
				</div>
				<small v-if="userInfo.dataError==1" style="color: red;">{{lang.mine.txts[0]}}</small>
			</div>

			<div class="btnGroup">
				<!-- 充值0 提现1 -->
				<el-button v-if="userInfo.dataError!=1" style="color: #000; font-weight: bold;"
					@click="orderOpen(1)">{{lang.mine.buttons[1]}}</el-button>
				<el-button v-else style="font-weight: bold;" disabled>{{lang.mine.buttons[1]}}</el-button>
				<el-button style="color: #000;font-weight: bold;"
					@click="orderOpen(0)">{{lang.mine.buttons[2]}}</el-button>
				<a-modal v-model:open="open" :title="lang.mine.model.titles[0]" @ok="orderOk">
					<div class="getMoney">
						<div class="top magB20">
							<label for=""></label>
							<a-input v-model:value="user.makeMoney"></a-input>
						</div>
						<div class="bottom magB20">
							<div><strong>{{lang.mine.model.titles[1]}}:&nbsp;{{userInfo.money}}</strong></div>
						</div>
					</div>
					<div><strong>{{lang.mine.model.titles[2]}}</strong></div>
					<div class="orderList flex" style="">
						<template v-for="(item, index) in order">
							<div class="order flex">
								<label for="">{{item.date}}</label>
								<div class="money">
									<strong>
										<!-- 状态0审核中 1审核通过 2拒绝-->
										<template v-if="item.status != 0">
											<!-- 账单类型0充值 1提现 -->
											<template v-if="item.type == 0">
												+
											</template>
											<template v-if="item.type == 1">
												-
											</template>
										</template>
										<template v-else>
											<el-icon>
												<Clock />
											</el-icon>
										</template>
										{{item.makeMoney}}
									</strong>
								</div>
							</div>
						</template>
					</div>
				</a-modal>
			</div>
		</div>
		<!-- <div class="letters magT20">
			<a-carousel effect="fade" autoplay :autoplaySpeed='5000' :dots="false">
				<template v-for="(item,index) in letter" :key="index">
					<div class="letter">
						<img class="letterBg" :src="'http://154.39.81.208/img/mine/gx1.jpg'" alt="" />
						<h3>{{item.title}}</h3>
						<article>
							{{item.content}}
							<div class="remark">
								<div class="name">{{item.name}}</div>
								<div class="date">{{item.date}}</div>
							</div>
						</article>
					</div>
				</template>
			</a-carousel>
		</div> -->
		<a-modal v-model:open="updatePWDFlag" :title="lang.mine.model.titles[0]" @ok="updatePWDok">
			<div class="updatePWDmodel">
				<div class="flex gap-4 mb-4">
					<div>{{lang.mine.model.titles[3]}}</div>
					<el-input v-model="oldPassword" style="width: 240px" placeholder="" />
				</div>
				<div class="flex gap-4">
					<div>{{lang.mine.model.titles[4]}}</div>
					<el-input v-model="newPassword" style="width: 240px" placeholder="" />
				</div>
				<div class="flex gap-4">
					<div>{{lang.mine.model.titles[5]}}</div>
					<el-input v-model="validPassword" style="width: 240px" placeholder="" />
				</div>
			</div>
			<template #footer>
				<a-button key="back" @click="updatePWDFlag = false">{{lang.mine.dialog.buttons[0]}}</a-button>
				<a-button key="submit" type="primary" :loading="loading"
					@click="updatePWDok">{{lang.mine.dialog.buttons[1]}}</a-button>
			</template>
		</a-modal>
		<div class="system">
			<div class="" @click="updatePWDFlag = true">{{lang.mine.buttons[3]}}</div>
			<div class="" @click="systemClick(1)">{{lang.mine.buttons[4]}}</div>
			<div class="" @click="systemClick(2)">{{lang.mine.buttons[5]}}</div>
			<div class="" @click="systemClick(3)">{{lang.mine.buttons[6]}}</div>
		</div>
		<div class="outLogin button" @click="outLogin">
			{{lang.mine.buttons[7]}}
		</div>
		<el-message v-if="messageEL" :message="messageEL" :type="messageType" />
	</div>
</template>

<script setup>
	import {
		nextTick,
		reactive,
		ref,
		getCurrentInstance,
		watchEffect
	} from 'vue';
	import {
		Plus
	} from '@element-plus/icons-vue';
	import {
		Carousel
	} from 'ant-design-vue';
	import axios from 'axios';
	import {
		useRouter
	} from 'vue-router';
	import mineApi from '../api/mine.js'
	import {
		message
	} from 'ant-design-vue';
	import en from '../locales/en.js';
	import zh from '../locales/zh.js';
	import jp from '../locales/jp.js';
	import ko from '../locales/ko.js';
	import vi from '../locales/vi.js';
	const router = useRouter();

	const outLogin = () => {
		router.push('/login');
		localStorage.removeItem('user')
	}
	const langs = {
		en,
		zh,
		jp,
		ko,
		vi
	}
	let lang = langs[localStorage.getItem('language')]
	const visible = ref(false)
	const open = ref(false)
	const openFlag = ref(false)
	const updatePWDFlag = ref(false)
	const oldPassword = ref('')
	const newPassword = ref('')
	const validPassword = ref('')
	const loading = ref(false)
	const user = reactive({
		name: '',
		avatar: '',
		makeMoney: ''
	})
	let userInfo = ref({})
	import {
		useCounterStore
	} from '../store/index';
	const store = useCounterStore();
	if (!localStorage.getItem('user')) {
		router.replace('/login');
	}
	const updatePWDok = () => {
		console.log(oldPassword.value)
		if (oldPassword.value == '') {
			message.error(lang.mine.message[0])
			return
		}
		if (newPassword.value == '') {
			message.error(lang.mine.message[1])
			return
		}
		if (newPassword.value.length < 6) {
			message.error(lang.mine.message[2])
			return
		}
		if (validPassword.value != newPassword.value) {
			message.error(lang.mine.message[3])
			return
		}
		loading.value = true;
		mineApi.update_pwd({
			id: store.user.id,
			oldPassword: oldPassword.value,
			newPassword: newPassword.value
		}).then(res => {
			console.log(res)
			if (res.code == 0) {
				message.success(lang.mine.message[4])
				loading.value = false;
				updatePWDFlag.value = false
			} else {
				if (res.msg == '密码错误') {
					message.error(lang.mine.message[5])
				} else {
					message.error('fail')
				}
			}
		})
	}
	const systemClick = (type) => {
		switch (type) {
			case 1:
				router.push({
					path: '/systemEdit',
					query: {
						'type': type
					}
				});
				break
			case 2:
				router.push({
					path: '/systemEdit',
					query: {
						'type': type
					}
				});
				break
			case 3:
				router.push({
					path: '/systemEdit',
					query: {
						'type': type
					}
				});
				break
		}
	}
	let account = ''
	if (localStorage.getItem('user')) {
		account = JSON.parse(localStorage.getItem('user')).account
	}
	const getUser = () => {
		mineApi.get_user({
			account: account
		}).then(res => {
			if (res.code == 0) {
				const user = res.rows[0]
				console.log(user)
				delete user.password
				userInfo.value = user
				store.user = user
				console.log(store.user)
				const localUser = user
				localStorage.setItem('user', JSON.stringify(localUser))
				if (user.vipGrade != '') {
					openFlag.value = true
				}
			} else {
				message.error('fail');
			}
		})
	}
	const letter = ref()
	const order = ref()
	const getLetter = () => {
		mineApi.get_letter().then(res => {
			if (res.code == 0) {
				console.log(res)
				letter.value = res.rows
			} else {
				message.error('fail')
			}
		})
	}
	//获取用户信息
	getUser()
	//获取信
	// getLetter()
	// watchEffect(() => {
	// 	// console.log(`当前标题是: ${JSON.stringify(store)}`);
	// });
	//获取账单
	const getOrder = () => {
		mineApi.get_order({
			account: account
		}).then(res => {
			console.log(res)
			if (res.code == 0) {
				order.value = res.rows
				order.value.reverse()
			} else {
				message.error('fail')
			}
		})
	}
	const updateMoney = (type) => {
		mineApi.update_money({
			account: account,
			makeMoney: user.makeMoney,
			type: type
		}).then(res => {
			if (res.code == 0) {} else {
				message.error('fail')
			}
		})
	}
	//获取用户订单
	getOrder()
	import {
		Modal
	} from 'ant-design-vue';
	let orderType = 0
	const orderOpen = (type) => {
		open.value = true
		orderType = type
	}
	const orderOk = () => {
		if (user.makeMoney == '') {
			message.error(lang.mine.model.message[0])
			return
		}
		open.value = false;
		for (let i = 0; i < order.value.length; i++) {
			console.log(order.value[i].status)
			if (order.value[i].status == 0) {
				Modal.warning({
					title: lang.mine.model.message[1].title,
					content: lang.mine.model.message[1].content,
					okText: lang.mine.model.message[1].okText,
				});
				return
			}
		}
		// updateMoney(orderType)
		mineApi.set_order({
			account: store.user.account,
			makeMoney: user.makeMoney,
			type: orderType
		}).then(res => {
			if (res.code == 0) {
				getOrder()
				user.makeMoney = ''
				message.success(lang.mine.model.message[2])
			} else {
				message.error('fail')
			}
		})
	};

	const ok = () => {
		console.log(user.name)
		if (user.avatar == '' && !userInfo.value.avatar) {
			message.error(lang.mine.model.message[3]); //请上传头像
			return
		} else if (user.name == "" && !userInfo.value.name) {
			message.error(lang.mine.model.message[4]); //请输入姓名
			return
		}
		mineApi.set_user({
			account: JSON.parse(localStorage.getItem('user')).account,
			name: user.name || userInfo.value.name,
			vipStatus: userInfo.value.vipStatus
		}).then(res => {
			console.log(res)
			if (res.code == 0) {
				//更新用户信息
				getUser()
				message.success('ok')
			} else {
				message.error('fail')
			}
		})
		visible.value = false
		openFlag.value = true
	}
	const showModal = () => {
		open.value = true;
	};

	// 存储头像图片的 URL
	const imageUrl = ref('');
	// 存储提示消息
	const messageEL = ref('');
	// 存储消息类型
	const messageType = ref('');
	// 上传前的处理函数
	const beforeUpload = async (file) => {
		const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
		if (!isJpgOrPng) {
			messageEL.value = lang.mine.model.message[5]; //'只能上传 JPG/PNG 格式的图片！'
			messageType.value = 'error';
			return false;
		}
		const isLt2M = file.size / 1024 / 1024 < 2;
		if (!isLt2M) {
			messageEL.value = lang.mine.model.message[6]; //'图片大小不能超过 2MB！'
			messageType.value = 'error';
			return false;
		}
		const reader = new FileReader();
		reader.onload = (e) => {
			imageUrl.value = e.target.result;
			user.avatar = imageUrl.value
		};
		reader.readAsDataURL(file);
		return true;
	};
	// const internalInstance = getCurrentInstance();
	// const $this = internalInstance.appContext.config.globalProperties.$store;
	// console.log($this)

	// 上传成功的处理函数
	const handleSuccess = (response) => {
		//记录图片名
		console.log(response.file)
		if (response.code == 0) {
			mineApi.set_user({
				avatar: response.file,
				account: JSON.parse(localStorage.getItem('user')).account
			}).then(res => {
				console.log(res)
			})
		}
		// message.value = '头像上传成功！';
		// messageType.value = 'success';
		// 这里可以根据服务器返回的结果更新 imageUrl
		// 例如：imageUrl.value = response.data.url;
		console.log(response)
		// const formData = new FormData();
		// formData.append('file', file);
		// console.log(file)
		// console.log(formData)
		// setTimeout(()=>{
		//element框架已经在upload组件里做了这一步，所以不用再调用
		// 	mineApi.upload({
		// 		file: formData,
		// 		shisan:'shisan'
		// 	}).then(res => {
		// 		console.log(res)
		// 	})
		// }, 300)
	};

	// 上传失败的处理函数
	const handleError = () => {
		messageEL.value = lang.mine.model.message[7]; //'头像上传失败，请稍后重试！'
		messageType.value = 'error';
	};
</script>

<style scoped>
	.updatePWDmodel {
		margin: 30px 0;
	}

	.updatePWDmodel .gap-4 {
		display: flex;
		justify-content: space-between;
		margin: 10px;
	}

	.updatePWDmodel .gap-4 .el-input {
		flex: 2.5;
	}

	.updatePWDmodel .gap-4 div:nth-child(1) {
		text-align: left;
		flex: 1.5;
	}

	.system div {
		margin: 5px 20px 0;
		background-color: #ffffff;
		color: #fff;
		padding: 5px 0;
		border-radius: 20px;
		border: 2px solid #fff;
	}

	.system div:nth-child(1) {
		background-color: #407AFC;
	}

	.system div:nth-child(2) {
		background-color: #FB5650;
	}

	.system div:nth-child(3) {
		background-color: #0DC857;
	}

	.system div:nth-child(4) {
		background-color: #161A1D;
	}

	.outLogin {
		margin: 20px 20px 0;
	}

	.btnGroup button {
		margin: 10px 20px;
	}

	.orderList {
		flex-direction: column;
		padding: 10px 0;
		font-weight: bold;
	}

	.order .money strong {
		display: flex;
		align-items: center;
	}

	.order .money strong i {
		margin-right: 5px;
	}

	.orderList .order {
		display: flex;
		justify-content: space-between;
		padding: 2px 0;
		border-bottom: 1px solid #6b6b6b;
	}

	:deep(.slick-slide) {
		text-align: center;
		height: auto;
		overflow: hidden;
	}

	.letterBg {
		position: absolute;
		z-index: 1;
		/* object-fit: cover; */
		width: 100%;
	}

	.letter article {
		position: relative;
		z-index: 2;
		padding: 100px 70px;
	}

	.letter article .remark {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	.letter {
		/* background: rgba(255, 215, 215, 0.5); */
		border-radius: 15px;
		color: #000;
		font-size: 14px;
		background-size: 100% 100%;
		background-position: 40% 0;
		text-align: left;
		position: relative;
	}

	.accountInfo .btnGroup {
		display: flex;
		flex-direction: column;
	}

	.accountInfo {
		padding: 10px 0px 10px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* background: linear-gradient(90deg, #dbcbf4, #e868bd); */
		background: #fff;
		margin: 0 20px;
		border-radius: 15px;
		color: #333;
	}

	.vipCardCtrl {
		display: flex;
		justify-content: center;
	}

	.vipCard .left {
		height: 80%;
		align-items: center;
		padding: 10px 0;
	}

	.vipCard {
		border-radius: 15px;
		box-shadow: 1px 1.5px 1px 0px #e4e4e7;
		background-color: white;
		color: #fff;
		padding: 0px 10px;
		font-size: 14px;
		display: flex;
		justify-content: space-between;
		/* margin-top: 5vh; */
		margin: 10px 10px;
		width: 350px;
		height: 180px;
		background-size: cover;
		background-position: 0 30%;

		/* ----- */
		position: relative;
	}

	.vipCard .tc {
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 15px;
		width: 100%;
		height: 100%;
		background-color: rgba(86, 86, 86, 0.9);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.vipCard .el-dialog {
		justify-content: flex-start;
	}

	.vipCard .my-header .avatar label,
	.vipCard .my-header .name label {
		width: 60px;
		height: 20px;
		color: #333;
		background-color: #fcfcff;
	}

	.vipCard .my-header .avatar,
	.vipCard .my-header .name {
		justify-content: center;
		align-items: center;
		margin-top: 10px;
	}

	.vipCard .my-header .name input {
		border: none;
		border-radius: 10px;
		text-indent: 10px;
		padding: 5px 0;
	}

	.vipCard .tc .tcBtn {
		padding: 10px;
		background-color: #000;
		border-radius: 20px;
		font-size: 14px;
	}

	.vipCard .center {
		transform: translateX(20px);
	}

	.vipCard .vipCode {
		text-align: right;
		position: absolute;
		right: 5px;
		bottom: 5px;
	}

	.vipCard .avatar {
		object-fit: cover;
		width: 120px;
		border-radius: 5px;
	}

	.vipContent {
		display: flex;
		flex: 1;
		justify-content: space-between;
		align-items: center;
	}

	.vipTitle {
		flex: 1;
	}

	.vipTitle .top {
		display: flex;
		position: relative;
	}

	.vipTitle .top .vipStatus {
		align-self: self-end;
		width: 150px;
	}

	.vipStatus .vip {
		padding-bottom: 50px;
		font-size: 20px;
	}

	.vipTitle .top img {
		width: 100px;
		height: auto;
		transform: translate(20px, -20px);
		position: absolute;
		right: 0;
	}

	.vipTitle .name {
		margin-bottom: 15px;
	}

	.vipTitle .bottom {
		display: flex;
		justify-content: space-between;
	}

	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409eff;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatarEdit {
		width: 108px;
		height: 100%;
		border-radius: 5px;
	}

	.bg {
		/* position: absolute;
		top: 0;
		left: 0;
		z-index: -2;
		width: 100vw;
		display: block; */

		position: absolute;
		top: 0;
		left: 0;
		z-index: -2;
		display: flex;
		justify-content: center;
		width: 100vw;
	}

	.bg img {
		object-fit: cover;
	}

	.bg .head {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		background-size: cover;
	}

	.bg .head .bColor {
		/* background: linear-gradient(90deg, #dbcbf4, #e868bd); */
		/* border-bottom-left-radius: 50%;
		border-bottom-right-radius: 50%; */
		position: absolute;
		top: 0;
		opacity: 0.8;
		width: 100%;
		height: 100%;
	}

	.main {
		/* padding: 20px !important; */
		position: relative;
		z-index: 2;
		height: 82vh;
		overflow: hidden;
		box-sizing: border-box;
	}
</style>