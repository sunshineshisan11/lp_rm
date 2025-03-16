<template>
	<div class="main">
		<el-icon class="back" size="40" @click="router.back()"><ArrowLeftBold /></el-icon>
		<video v-if="PLdata.video.substr(PLdata.video.indexOf('.')+1).toLowerCase()=='mp4'" style="width: 100%;" ref="playCtrl" playsinline>
			<source :src="$domain+'/'+PLdata.video" type="video/mp4">
		</video>
		<img v-if="PLdata.video.substr(PLdata.video.indexOf('.')+1).toLowerCase()=='png'||
		PLdata.video.substr(PLdata.video.indexOf('.')+1).toLowerCase()=='jpg'||
		PLdata.video.substr(PLdata.video.indexOf('.')+1).toLowerCase()=='jpeg'||
		PLdata.video.substr(PLdata.video.indexOf('.')+1).toLowerCase()=='gif'||
		PLdata.video.substr(PLdata.video.indexOf('.')+1).toLowerCase()=='webp'"
		 :src="$domain+'/'+PLdata.video" alt="" />
		<!-- <div class="infos"> -->
			<!-- <div class="name">{{PLdata.name}}</div> -->
			<!-- <div class="tags">
					<template v-for="(item, index) in item.tags" :key="index">
						<a-tag :color="PLtagsColor[index]">{{item}}</a-tag>
					</template>
				</div> -->
			<!-- <h3>简介:</h3> -->
			<!-- <div class="remake"> -->
				<!-- {{PLdata.jj}} -->
				<!-- <span>身高:{{PLdata.height}}</span>
				<span>体重:{{PLdata.weight}}</span>
				<span>胸围:{{PLdata.xw}}</span>
				<span>职业:{{PLdata.job}}</span> -->
			<!-- </div> -->
			<!-- <div class="remake">{{item.remake}}</div> -->
		<!-- </div> -->
	</div>
</template>

<script setup>
	import {
		useRouter,
		useRoute
	} from 'vue-router';
	import {
		ref,
		onMounted,
		onUnmounted,
		reactive,
		onBeforeMount
	} from 'vue';
	import {
		Carousel
	} from 'ant-design-vue';
	import mainApi from '../api/main.js'
	import {
		ElNotification
	} from 'element-plus'
	import {
		message
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
	const router = useRouter();
	const route = useRoute();
	const user = JSON.parse(localStorage.getItem('user'))
	if (!user) {
		router.replace('/login');
	}
	import {
		useCounterStore
	} from '../store/index';
	import mineApi from '../api/mine.js'
	import 'plyr/dist/plyr.css';
	import Plyr from 'plyr';

	const store = useCounterStore();
	const userInfo = ref({})
	const getUser = () => {
		mineApi.get_user({
			account: JSON.parse(localStorage.getItem('user')).account
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
			} else {
				message.error('fail');
			}
		})
	}
	//初始化用户信息
	getUser()
	let PLdata = ref({
		avatar: '',
		name: '',
		tags: [1, 2, 3],
		info: {
			a: '18',
			h: '172',
			x: '140',
			w: '110',
			adr: '',
			j: '',
		},
		remake: '',

	})
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	console.log(route.query.item)
	onBeforeMount(() => {
		PLdata.value = JSON.parse(route.query.item)
	})
	const playCtrl = ref(null);
	const player = ref(null);
	onMounted(async () => {
		//初始化播放器
		if(playCtrl) {
			player.value = new Plyr(playCtrl.value);
			player.value.play()
		}
	});
</script>

<style scoped>
	.back {
		position: absolute;
		left: 10px;
		top: 10px;
		z-index: 1;
	}
	.infos {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: flex-start;
		margin-left: 7px;
		padding: 20px 0;
	}

	.main {
		background: linear-gradient(to right, #7A71F1, #5B2EE3);
		height: 90vh;
		overflow: scroll;
	}
</style>