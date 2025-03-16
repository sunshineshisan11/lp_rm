<script setup>
	import {
		onMounted,
		reactive,
		ref,
		watch,
		getCurrentInstance
	} from 'vue'
	import {
		useRouter
	} from 'vue-router';
	import loginApi from './api/login.js'
	import {
		ElMessage
	} from 'element-plus'

	import en from './locales/en.js';
	import zh from './locales/zh.js';
	import jp from './locales/jp.js';
	import ko from './locales/ko.js';
	import vi from './locales/vi.js';
	const lang = {
		en,
		zh,
		jp,
		ko,
		vi
	}
	let language = ref()
	if (!localStorage.getItem('language')) {
		localStorage.setItem('language', instance.appContext.config.globalProperties.$language)
	}
	language.value = lang[localStorage.getItem('language')]
	console.log(language.value)
	let account = ref('')
	let passowrd = ref('')
	let inviteCode = ref('')
	let type = ref(0) //操作类型  0登录  1注册
	import {
		useIntersectionObserver
	} from '@vueuse/core';

	// const currentImage = ref(bgList[0].src);
	let currentIndex = 0;
	const isImageLoaded = ref(false);
	const imageRef = ref(null);
	const domain = ref()
	// 获取当前组件实例
	const instance = getCurrentInstance();
	if (instance) {
		// 通过实例的 appContext.config.globalProperties 访问全局属性
		domain.value = instance.appContext.config.globalProperties.$domain;
	}
	// 预加载图片
	// bgList.forEach(url => {
	// 	const img = new Image();
	// 	img.src = domain.value + '/img/' + url.src;
	// });

	const typeClick = () => {
		type.value = type.value == 0 ? 1 : 0
	}
	let message = ref();
	const check = () => {
		if (account.value == "" || passowrd.value == "") {
			message.value = language.value.login.message[0] //用户名或密码不能为空
			ElMessage.error(message.value)
			return false
		}
		if (type.value == 1) {
			if(account.value.length<6||passowrd.value.length<6) {
				message.value = language.value.login.message[9] //用戶名或密碼不能少于6位字符
				ElMessage.error(message.value)
				return false
			}
			if (inviteCode.value == '') {
				message.value = language.value.login.message[1] //"请输入邀请码"
				ElMessage.error(message.value)
				return false
			}
		}
		return true
	}
	const router = useRouter();
	console.log(router.options.routes)
	const login = () => {
		if (!check()) {
			return
		}
		if (type.value == 1) {
			if (inviteCode.value != 1208) {
				ElMessage.error(language.value.login.message[2]) //'邀请码错误'
				return
			}
		}
		loginApi.login({
			account: account.value,
			pwd: passowrd.value,
			inviteCode: inviteCode.value,
			gender: gender.value,
			type: type.value
		}).then(res => {
			if (res.code == 0) {
				const user = {
					account: account.value,
					gender: gender.value
				}
				localStorage.setItem('user', JSON.stringify(user))
				console.log(language.value)
				if (type.value == 0) {
					message.value = language.value.login.message[3] //"登录成功"
				} else {
					message.value = language.value.login.message[4] //"注册成功"
				}
				ElMessage.success(message.value)
				router.push('/mine');
			} else {
				if (type.value == 0) {
					if(res.msg == '你还没有注册') {
						message.value = language.value.login.message[5] //"登录失败"
					} else if(res.msg == '密码错误') {
						message.value = language.value.login.message[6] //"登录失败"
					} else {
						message.value = language.value.login.message[7] //"登录失败"
					}
				} else {
					if (res.msg == "该账号已注册")
						message.value = language.value.login.message[8] //"该账号已注册"
				}
				ElMessage.error(message.value)
			}
		})
	}
	//语言dialog
	const visible = ref(false)
	import {
		useCounterStore
	} from './store/index';
	const store = useCounterStore();
	const zh_change = (arg) => {
		console.log(arg)
		console.log(visible.value)
		visible.value = false
		if (instance) {
			switch (arg) {
				case 'en':
					language.value = en
					localStorage.setItem('language', 'en')
					store.lang = 'en'
					break
				case 'zh':
					language.value = zh
					localStorage.setItem('language', 'zh')
					store.lang = 'zh'
					break
				case 'jp':
					language.value = jp
					localStorage.setItem('language', 'jp')
					store.lang = 'jp'
					break
				case 'ko':
					/* 韩语 */
					language.value = ko
					localStorage.setItem('language', 'ko')
					store.lang = 'ko'
					break
				case 'vi':
					/* 越南语 */
					language.value = vi
					localStorage.setItem('language', 'vi')
					store.lang = 'vi'
					break
			}
		}
		console.log(store.lang)
	}
	const gender = ref('男');
</script>

<template>
	<div class="main" :style="{height:$appHeight+'px'}">
		<div class="bg" :style="{width:'100%',height:'100%'}">
			<img :src="$domain+'/bg3.jpg'" alt="" key="image-key" />
			<!-- <img :src="$domain+':8888/bg4.jpg'" alt="" key="image-key" /> -->
			<!-- <img :src="$domain+':8888/bg4.jpg'" alt="" key="image-key" v-if="!isImageLoaded" /> -->
			<!-- <Transition name="fade">
				<img :src="$domain+'/img'+currentImage" alt="" key="image-key" v-if="isImageLoaded" />
			</Transition> -->
			<!-- <video
		     	      ref="videoRef"
		     	      width="640"
		     	      height="360"
		     	      :autoplay="true"
		     		  :loop="true"
		     	      muted
		     	      :controls="false"
		     		  :style="{width: '100%', height:'100%'}"
		     	    >
		     	      <source :src="$domain+'/bg1.mp4'" type="video/mp4" />
		     	      您的浏览器不支持视频播放。
		     	    </video> -->
		</div>
		<div class="type btn" @click="typeClick">
			{{language.login.type}}
		</div>
		<div class="zh_flag">
			<div class="btn" @click="visible = true">{{language.login.buttons[0]}}</div>
			<el-dialog v-model="visible" :show-close="false" width="500">
				<template #header="{ close, titleId, titleClass }">
					<div class="my-header" style="display: flex; justify-content: center;">
						<h4 :id="titleId" :class="titleClass">{{language.login.languageDialog.title}}</h4>
						<!-- <el-button type="danger" @click="close">
			          <el-icon class="el-icon--left u-error"></el-icon>
			          X
			        </el-button> -->
					</div>
				</template>
				<ul class="zh_">
					<li @click="zh_change('jp')">日本語></li>
					<li @click="zh_change('zh')">繁体中文></li>
					<li @click="zh_change('en')">English></li>
					<li @click="zh_change('ko')">한국인></li>
					<li @click="zh_change('vi')">Việt Nam</li>
				</ul>
			</el-dialog>

		</div>
		<div class="content">
			<!-- <div class="title">
				<h2>{{language.login.title}}</h2>
			</div> -->
			<div class="logo">
				<img style="width: 60vw; height: auto;" :src="$domain+'/mine/logo1.png'" alt="">
			</div>
			<div class="form_group">
				<div class="input sex" v-if="type == 1">
					<el-radio-group v-model="gender">
						<el-radio-button value="男">{{language.login.gender[0]}}</el-radio-button>
						<el-radio-button value="女">{{language.login.gender[1]}}</el-radio-button>
					</el-radio-group>
				</div>
				<div class="register" v-if="type==1">
					<div class="input account">
						<input type="text" maxlength="13" v-model="account" :placeholder="language.login.inputs[0]" />
					</div>
					<div class="input pwd">
						<input type="password" maxlength="13" v-model="passowrd"
							:placeholder="language.login.inputs[1]" />
					</div>
					<div class="input inviteCode">
						<input type="text" maxlength="6" v-model="inviteCode" :placeholder="language.login.inputs[2]" />
					</div>
				</div>
				<div class="login" v-if="type==0">
					<div class="input account">
						<input type="text" maxlength="13" v-model="account" :placeholder="language.login.inputs[0]" />
					</div>
					<div class="input pwd">
						<input type="password" maxlength="13" v-model="passowrd"
							:placeholder="language.login.inputs[1]" />
					</div>
				</div>
			</div>
			<div class="btn_group">
				<div class="loginBtn button" @click="login">
					{{type == 0?language.login.buttons[1]:language.login.buttons[2]}}
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.example-showcase .el-dropdown-link {
		cursor: pointer;
		color: var(--el-color-primary);
		display: flex;
		align-items: center;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 1s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}

	.main {
		overflow: hidden;
		position: relative;
		bottom: 0;
	}

	.bg {
		position: absolute;
		top: 0%;
		left: 0;
		background-color: #333;
		background-size: cover;
		background-position: center;
		transition: all 1s ease-in;
	}

	.bg img {
		object-fit: cover;
	}

	.title {
		font-weight: bold;
		margin-bottom: 60px;
		margin-top: 30px;
	}

	.form_group {
		position: relative;
		margin-top: -50px;
	}

	.login,
	.register {
		display: flex;
		flex-direction: column;
	}

	.input {
		flex: 1;
		padding: 20px 60px;
	}

	input {
		width: 100%;
		border-radius: 30px;
		border: none;
		height: 20px;
		padding: 14px 0;
		text-indent: 20px;
		color: #323233;
		font-size: 16px;
	}

	input::placeholder {
		color: #bdcadc;
		font-weight: normal;
	}

	input:focus {
		outline: none;
	}

	.zh_flag {
		position: absolute;
		right: 20px;
		top: 10px;
		z-index: 9;
	}

	.zh_ {
		list-style: none;
		padding: 0;
	}

	.zh_ li {
		padding: 10px 0;
	}

	.zh_ li:hover {
		cursor: pointer;
	}

	.btn_group {
		position: relative;
		display: flex;
		justify-content: space-around;
		padding: 20px 60px;
	}

	.content {
		position: relative;
		padding-top: 30px;
	}

	.type {
		position: relative;
		display: flex;
		justify-content: left;
		position: absolute;
		left: 20px;
		top: 10px;
		z-index: 9;
	}

	.btn {
		background-color: #ffffff;
		box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
		padding: 8px 15px;
		border-radius: var(--el-border-radius-base);
		font-size: var(--el-font-size-base);
		color: #323233;
	}
</style>