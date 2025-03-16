<template>
	<div class="main">
		<!-- 轮播 -->
		<div class="carousel">
			<Carousel autoplay :autoplaySpeed='3000'>
				<!-- <template v-for="(item,index) in 28" :key="index">
					<template v-if="index>12">
						<img :src="$domain+'/mine/'+index+'.jpg'" alt="" />
					</template>
				</template> --><!-- store.PLplay -->
				<video style="width: 100%;height: 300px;" ref="playCtrl" playsinline :autoplay="store.PLplay" muted
					@click="togglePlay">
					<source :src="$domain+'/PL/IMG_0330.MP4'" type="video/mp4">
				</video>
			</Carousel>
		</div>
		<!-- 派对 -->
		<!-- 社区 -->
		<div class="PLdata">
			<!-- <div class="gender">
				<a-image :preview="false" :width="100" :height="120" src="http://154.39.81.208/img/mine/man.png" />
				<a-image :preview="false" :width="100" :height="120" src="http://154.39.81.208/img/mine/gril.png" />
			</div> -->
			<el-tabs type="border-card" @tab-click="tabChange" ref="tabs">
				<el-tab-pane :label="lang.PL.tabs[0]">
					<ul v-infinite-scroll="load" infinite-scroll-immediate :infinite-scroll-disabled="hasMore0" class="infinite-list" style="overflow: auto">
						<li v-for="(item, index) in PLdata0" :key="index" class="infinite-list-item">
							<div v-if="item.gender == 0" class="modelItem flex" @click="detail(item)">
								<div class="left">
									<svg class="icon"
										style="width: 2em;height: 2.5em;vertical-align: middle;fill: currentColor;overflow: hidden;"
										viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
										p-id="2284">
										<path
											d="M917.9 375.9L716.5 140.7a35.35 35.35 0 0 0-26.8-12.3H333.9c-10.4 0-20.2 4.5-26.9 12.4L107.2 376c-10.8 12.7-11.2 31.4-1 44.5l377.7 485.3c6.7 8.6 16.9 13.6 27.8 13.6 10.9 0 21.1-4.9 27.8-13.6l379.3-485.3c10.4-13.1 9.9-31.9-0.9-44.6zM495.4 696.8l-169-281.4c-3.6-6-10.1-9.7-17.1-9.7h-32.7c-11 0-20-9-20-20v-24.4c0-11 9-20 20-20h96.1c7.2 0 13.8 3.9 17.4 10.1l123.1 217c7.5 13.1 26.2 13.6 34.3 0.8l138.4-218.7c3.7-5.8 10-9.3 16.9-9.3h45.9c11 0 20 9 20 20v24.4c0 11-9 20-20 20H716c-7 0-13.5 3.7-17.1 9.7L529.7 696.8c-7.7 12.9-26.5 12.9-34.3 0z m399.8-294.7L527.7 872.3l311.5-459.1c5.2-6.7 5-16.2-0.5-22.6L661.4 226.9c-3.4-4-8.3-6.2-13.6-6.2H334.7c-5.2 0-10.2 2.3-13.6 6.3l-168 141.4 176.8-208.2c1-1.2 2.5-1.9 4-1.9h355.8c1.5 0 3 0.7 4 1.8l201.4 235.3c1.6 2 1.7 4.8 0.1 6.7z"
											fill="#2680F0" p-id="2285"></path>
										<path
											d="M698.8 415.4c3.6-6 10.1-9.7 17.1-9.7h32.7c11 0 20-9 20-20v-24.4c0-11-9-20-20-20h-45.9c-6.9 0-13.2 3.5-16.9 9.3L547.4 569.3c-8.1 12.8-26.8 12.3-34.3-0.8L390 351.4c-3.6-6.3-10.2-10.1-17.4-10.1h-96.1c-11 0-20 9-20 20v24.4c0 11 9 20 20 20h32.7c7 0 13.5 3.7 17.1 9.7l169.1 281.4c7.8 12.9 26.5 12.9 34.3 0l169.1-281.4z"
											fill="#FFFFFF" p-id="2286"></path>
									</svg>
									<a-image :preview="false" :width="100" :height="120"
										:src="$domain+'/'+item.avatar" />
									<div class="infos">
										<div class="name"><strong>{{item.name}}</strong></div>
										<div class="city"><small>{{item.city}}</small></div>
										<!-- <div class="tags">
										<template v-for="(item, index) in item.tags" :key="index">
											<a-tag :color="PLtagsColor[index]">{{item}}</a-tag>
										</template>
									</div> -->
										<div class="info">
											<span>{{lang.PL.job}}:{{item.job}}</span>
											<span>{{lang.PL.height}}:{{item.height}}</span>
											<span>{{lang.PL.weight}}:{{item.weight}}kg</span>
											<span>{{lang.PL.xw}}:{{item.xw}}</span>
										</div>
										<!-- <div class="remake">{{item.remake}}</div> -->
									</div>
								</div>
								<div class="right">
									<div class="reseve">
										<div class="yy" @click.stop="yy">{{lang.PL.button}}</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</el-tab-pane>
				<el-tab-pane :label="lang.PL.tabs[1]">
					<ul v-infinite-scroll="load" infinite-scroll-immediate :infinite-scroll-disabled="hasMore1" class="infinite-list" style="overflow: auto">
						<li v-for="(item, index) in PLdata1" :key="index" class="infinite-list-item">
							<div v-if="item.gender == 1" class="modelItem flex" @click="detail(item)">
								<div class="left">
									<svg class="icon"
										style="width: 2em;height: 2.5em;vertical-align: middle;fill: currentColor;overflow: hidden;"
										viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
										p-id="2284">
										<path
											d="M917.9 375.9L716.5 140.7a35.35 35.35 0 0 0-26.8-12.3H333.9c-10.4 0-20.2 4.5-26.9 12.4L107.2 376c-10.8 12.7-11.2 31.4-1 44.5l377.7 485.3c6.7 8.6 16.9 13.6 27.8 13.6 10.9 0 21.1-4.9 27.8-13.6l379.3-485.3c10.4-13.1 9.9-31.9-0.9-44.6zM495.4 696.8l-169-281.4c-3.6-6-10.1-9.7-17.1-9.7h-32.7c-11 0-20-9-20-20v-24.4c0-11 9-20 20-20h96.1c7.2 0 13.8 3.9 17.4 10.1l123.1 217c7.5 13.1 26.2 13.6 34.3 0.8l138.4-218.7c3.7-5.8 10-9.3 16.9-9.3h45.9c11 0 20 9 20 20v24.4c0 11-9 20-20 20H716c-7 0-13.5 3.7-17.1 9.7L529.7 696.8c-7.7 12.9-26.5 12.9-34.3 0z m399.8-294.7L527.7 872.3l311.5-459.1c5.2-6.7 5-16.2-0.5-22.6L661.4 226.9c-3.4-4-8.3-6.2-13.6-6.2H334.7c-5.2 0-10.2 2.3-13.6 6.3l-168 141.4 176.8-208.2c1-1.2 2.5-1.9 4-1.9h355.8c1.5 0 3 0.7 4 1.8l201.4 235.3c1.6 2 1.7 4.8 0.1 6.7z"
											fill="#2680F0" p-id="2285"></path>
										<path
											d="M698.8 415.4c3.6-6 10.1-9.7 17.1-9.7h32.7c11 0 20-9 20-20v-24.4c0-11-9-20-20-20h-45.9c-6.9 0-13.2 3.5-16.9 9.3L547.4 569.3c-8.1 12.8-26.8 12.3-34.3-0.8L390 351.4c-3.6-6.3-10.2-10.1-17.4-10.1h-96.1c-11 0-20 9-20 20v24.4c0 11 9 20 20 20h32.7c7 0 13.5 3.7 17.1 9.7l169.1 281.4c7.8 12.9 26.5 12.9 34.3 0l169.1-281.4z"
											fill="#FFFFFF" p-id="2286"></path>
									</svg>
									<a-image :preview="false" :width="100" :height="120"
										:src="$domain+'/'+item.avatar" />
									<div class="infos">
										<div class="name"><strong>{{item.name}}</strong></div>
										<div class="city"><small>{{item.city}}</small></div>
										<!-- <div class="tags">
										<template v-for="(item, index) in item.tags" :key="index">
											<a-tag :color="PLtagsColor[index]">{{item}}</a-tag>
										</template>
									</div> -->
										<div class="info">
											<span>{{lang.PL.job}}:{{item.job}}</span>
											<span>{{lang.PL.height}}:{{item.height}}</span>
											<span>{{lang.PL.weight}}:{{item.weight}}kg</span>
											<!-- <span>{{lang.PL.xw}}:{{item.xw}}</span> -->
										</div>
										<!-- <div class="remake">{{item.remake}}</div> -->
									</div>
								</div>
								<div class="right">
									<div class="reseve">
										<div class="yy" @click.stop="yy">{{lang.PL.button}}</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</el-tab-pane>
				<el-tab-pane label="PARTY">
					<ul v-infinite-scroll="load" infinite-scroll-immediate class="infinite-list" style="overflow: auto">
						<li class="infinite-list-item">
							<div class="partyItem flex" @click="party(1)">
								{{lang.PL.party[0]}}
							</div>
						</li>
						<li class="infinite-list-item">
							<div class="partyItem flex" @click="party(2)">
								{{lang.PL.party[1]}}
							</div>
						</li>
						<li class="infinite-list-item">
							<div class="partyItem flex" @click="party(3)">
								{{lang.PL.party[2]}}
							</div>
						</li>
						<li class="infinite-list-item">
							<div class="partyItem flex" @click="party(4)">
								{{lang.PL.party[3]}}
							</div>
						</li>
					</ul>
				</el-tab-pane>
			</el-tabs>

		</div>
	</div>
</template>

<script setup>
	import {
		useRouter
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
	console.log(lang)
	const router = useRouter();
	const user = JSON.parse(localStorage.getItem('user'))
	if (!user) {
		router.replace('/login');
	}
	import {
		useCounterStore
	} from '../store/index';
	import mineApi from '../api/mine.js'
	import PLApi from '../api/PL.js'
	import 'plyr/dist/plyr.css';
	import Plyr from 'plyr';
	import {
		Modal
	} from 'ant-design-vue';
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
	const party = (index) => {
		router.push({
			path:'/videoAuto',
			query: {
				type: index - 1
			}
		})
	}
	let PLtagsColor = ['#f50', '#2db7f5', '#87d068', '#108ee9']
	//预约
	const yy = () => {
		ElNotification({
			title: lang.message.title,
			message: lang.message.msg,
			type: 'warning',
		})
	}
	const detail = (item) => {
		router.push({
			path: '/PDetail',
			query: {
				'item': JSON.stringify(item)
			}
		});
	}
	const pageIndex = ref(0)
	const pageCount = ref(5)
	let tabIndex = 0
	// localStorage.removeItem('PLdata1')
	//社区数组
	let PLdata0 = ref([])
	let PLdata1 = ref([])
	let hasMore0 = ref(false)
	let hasMore1 = ref(false)
	const getPLdata = async(gender) => {
		console.log(gender)
		await PLApi.get_PL({
			pageIndex: pageIndex.value,
			pageCount: pageCount.value,
			gender: gender || 0
		}).then(res => {
			if (res.code == 0) {
				if(res.rows.length<1) {
					if(tabIndex == 0) {
						hasMore0.value = true
					} else if(tabIndex == 1) {
						hasMore1.value = true
					}
				}
				if(tabIndex == 0) {
					if(pageIndex.value == 0) {
						if(!localStorage.getItem('PLdata0')) {
							PLdata0.value = res.rows
						}
						localStorage.setItem('PLdata0',JSON.stringify(res.rows))
					} else {
						PLdata0.value = PLdata0.value.concat(res.rows)
					}
				} else if(tabIndex == 1){
					if(pageIndex.value == 0) {
						if(!localStorage.getItem('PLdata1')) {
							PLdata1.value = res.rows
						}
						console.log(PLdata1.value)
						localStorage.setItem('PLdata1',JSON.stringify(res.rows))
					} else{
						PLdata1.value = PLdata1.value.concat(res.rows)
					}
				}
				if (res.rows.length > 0) {
					pageIndex.value += 1
				} else {
					Modal.warning({
						title: lang.message.title,
						content: lang.message.msg,
						okText: lang.mine.model.message[1].okText,
					});
					return
				}
			} else {
				msg.error('fail')
			}
		})
	}
	//分页加载
	const load = () => {
		setTimeout(()=>{
			getPLdata(tabIndex)
		},500)
	}
	//初始化社区数据
	// localStorage.removeItem("PLdata0")
	// localStorage.removeItem("PLdata1")
	const initSquare = () => {
		if(tabIndex == 0) {
			console.log(tabIndex)
			if(localStorage.getItem('PLdata0')) {
				PLdata0.value = JSON.parse(localStorage.getItem('PLdata0'))
			} else {
				getPLdata(0)
			}
		} else if(tabIndex == 1){
			if(localStorage.getItem('PLdata1')){
				PLdata1.value = JSON.parse(localStorage.getItem('PLdata1'))
				console.log(PLdata1.value)
			} else {
				getPLdata(1)
			}
		}
	}
	const tabChange = (tab, event) => {
		tabIndex = tab.paneName
		pageIndex.value = 0
		hasMore1.value = false
		hasMore0.value = false
		initSquare()
		// if (tabIndex == 1) {
		// 	if(!PLdata1.value) {
		// 		getPLdata(tab.paneName)
		// 	}
		// }
	};
	const vipClick = () => {
		ElNotification({
			title: lang.message.title,
			message: lang.message.msg,
			type: 'warning',
		})
	}

	onBeforeMount(() => {
		//第一次加载
	})
	// //视频播放常量
	const playCtrl = ref(null);
	const player = ref(null);


	const togglePlay = () => {
		// 	console.log(player.value)
		//   if (player.value.paused) {
		//     player.value.play(); // 暂停则播放
		//   } else {
		//     player.value.pause(); // 播放则暂停
		//   }
	};
	onMounted(async () => {
		initSquare()
		//初始化播放器
		player.value = new Plyr(playCtrl.value);
		player.value.play()
	});
</script>

<style scoped>
	.partyItem {
		background-color: rgba(0, 3, 217, 0.6);
		border: 3px solid #ffcc00;
		padding: 20px;
		box-shadow: 0px 0px 50px 10px #FB50D6;
		font-size: 20px;
		border-radius: 50px;
		color: #ffcc00;
		margin: 10px 20px 10px;
		justify-content: center;
	}

	:deep(.is-active) {}

	:deep(.el-tabs__nav-scroll) {
		border: none;
		/* background-color: #7c63e3 !important; */
	}

	:deep(.el-tabs__content) {
		padding: 5px;
		/* background-color: #0B0E32 !important; */
	}

	.el-tabs--border-card {
		border: none;
	}

	.modelItem .right .reseve .yy {
		width: 30vw;
		height: 20px;
		border: 1px solid #ccc;
		border-radius: 30px;
		padding: 10px 5px;
		background-color: #FB50D6;
		color: white;
		font-weight: bold;
		font-size: 16px;
		position: absolute;
		bottom: 0px;
		right: 0px;
	}

	.modelItem .right .reseve .city {
		text-align: right;
	}

	.modelItem .right .reseve {
		display: flex;
		flex-direction: column;
		align-items: end;
		justify-content: space-between;
		height: 80%;
		position: relative;
	}

	.modelItem .left .info span {
		text-wrap: nowrap;
	}

	.modelItem .left .remake {
		font-size: 12px;
		color: #666;
	}

	.modelItem .left .info {
		display: flex;
		flex-direction: column;
		font-size: 12px;
	}

	.modelItem .right .tags {
		display: flex;
		justify-content: space-around;
		font-size: 14px;
	}

	.modelItem .right .name {
		font-size: 18px;
	}

	.modelItem .right .reseve {}

	.modelItem .left .infos .info {}

	.modelItem .left .infos .info {
		text-align: left;
		padding-bottom: 15px;
	}

	.modelItem .left .infos {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: flex-start;
		margin-left: 7px;
		height: 100%;
	}

	.modelItem .left img {
		border-radius: 10px;
	}

	.modelItem .left .icon {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
	}

	.modelItem .left {
		display: flex;
		align-items: center;
		position: relative;
	}

	.modelItem {
		display: flex;
		background: linear-gradient(to right, #7A71F1, #5B2EE3);
		color: white;
		border-radius: 8px;
		justify-content: space-between;
		padding: 0 10px;
		/* border: 2px solid #aa55ff; */
		box-sizing: border-box;
	}

	.modelItem .right {
		display: flex;
		align-items: center;
		height: 20vh;
		justify-content: space-between;
	}

	.PLdata .gender {
		width: 100%;
		position: absolute;
		top: 10vh;
		display: flex;
		justify-content: space-around;
	}

	.PLdata .infinite-list {
		height: 62vh;
		padding-bottom: 7vh;
		box-sizing: border-box;
		background-color: #aaaaff;
		margin: 0;
	}

	/* slick-track {
		height: 50vh !important;
	} */
	/* 轮播标注不显示 */
	/* .slick-dots {
		display: none !important;
	} */
	.carousel {
		height: 25vh;
		overflow: hidden;
		position: relative;
	}

	.main {
		padding: 0;
		color: black;
		background-color: #0B0E32;
	}

	.infinite-list {
		/* height: 450px;
		padding: 0;
		margin: 0;
		list-style: none; */
	}

	.infinite-list .infinite-list-item {
		padding: 5px 5px 0;
		color: black;
		box-sizing: border-box;
		/* border: 3px solid #f9b004; */
		border-radius: 10px;
		/* background-color: #aa55ff; */
		/* display: flex;
		align-items: center;
		justify-content: flex-start;
		height: auto;
		background-color: rgba(255, 255, 255, 0.7);
		padding: 5px 0 0;
		color: #aa55ff; */
	}
</style>