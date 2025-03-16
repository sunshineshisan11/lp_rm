<template>
	<div class="main">
		<!-- 轮播 -->
		<div class="carousel">
			<Carousel autoplay :autoplaySpeed='3000'>
				<template v-for="(item,index) in 12" :key="index">
					<template v-if="index>0">
						<img :src="$domain+'/main/lunbo/'+index+'.jpg'" alt="" />
					</template>
				</template>
			</Carousel>
		</div>
		<!-- 公告 -->
		<div v-if="datingList.length>0" class="dating" ref="dating">
			<!-- <div class="txt" style="color:red;font-size: 12px;">感谢会员的照片</div> -->
			<Carousel autoplay :autoplaySpeed='800' :dotPosition='"left"' :dots="false" :afterChange = "datingChange">
				<template v-for="(item,index) in datingList" :key="index">
					<div class="content">
						<icon :status="item.vipGrade"></icon>
						{{item.name}}{{item.type==1?lang.main.dating.txts[0]:lang.main.dating.txts[0]}}{{item.money}}
					</div>
				</template>
			</Carousel>
		</div>
		<!-- 社区 -->
		<div class="square">
			<div class="bg">
				<div class="bgHead" :style="{'background-color':'url('+$domain+'/main/bg3.jpg)'}">
					<div class="bColor"></div>
				</div>
			</div>
			<ul ref="scrollContainer" v-infinite-scroll="load" infinite-scroll-disabled infinite-scroll-immediate class="infinite-list"
				style="overflow: auto"><!-- infinite-scroll-disabled="busy" -->
				<li v-for="(item, index) in squareList" :key="index" class="infinite-list-item">
					<div class="userItem flex">
						<div class="iHead flex">
							<img :src="$domain+'/'+item.avatar" alt="" />
							<div class="userInfo">
								<div class="title">{{item.title}}</div>
								<div class="iType flex center">
									<icon :status="item.vipGrade"></icon>&nbsp;{{item.name}}
								</div>
								<div class="date">{{item.date}}</div>
							</div>
						</div>
						<div class="iSection">
							<div class="title">{{item.content}}</div>
							<template
								v-if="item.source.substring(item.source.indexOf('.')+1).toLocaleLowerCase()!='mp4'">
								<el-image style="width: 100vw; height: auto"
									:src="$domain+'/'+item.source" />
							</template>
							<template v-else>
								<video ref="playCtrl" autoplay muted @click="togglePlay" loop>
									<source :src="$domain+'/'+item.source" type="video/mp4">
								</video>
							</template>
						</div>
						<div class="iFoot flex center">
							<div @click="starClick(item.id,userInfo.likeSquare.indexOf(item.id)!=-1)">
								<!-- <strong>{{lang.main.square.buttons[0]}}</strong> -->
								<el-badge v-if="userInfo.likeSquare" :value="userInfo.likeSquare.indexOf(item.id)!=-1?JSON.stringify(Number(item.likes)+1):item.likes" class="item">
									<el-icon size="25" :color="userInfo.likeSquare.indexOf(item.id)!=-1?'red':''">
										<StarFilled />
									</el-icon>
								</el-badge>
								<!-- <el-badge v-else :value="item.likes" class="item">
									<el-icon size="25">
										<StarFilled />
									</el-icon>
								</el-badge> -->
							</div>
							<div @click="vipClick">
								<!-- <strong>{{lang.main.square.buttons[1]}}</strong> -->
								<el-badge :value="item.comment" class="item">
									<el-icon size="25">
										<Comment />
									</el-icon>
								</el-badge>
							</div>
							<div @click="vipClick">
								<el-badge :value="item.share" class="item">
									<!-- <strong>{{lang.main.square.buttons[2]}}</strong> -->
									<el-icon size="25">
										<Share />
									</el-icon>
								</el-badge>
								
							</div>
						</div>
						<el-divider />
					</div>
				</li>
			</ul>
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
		onBeforeMount,
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
	import {
		useCounterStore
	} from '../store/index';
	import mineApi from '../api/mine.js'
	import 'plyr/dist/plyr.css';
	import Plyr from 'plyr';
	import {
		Modal
	} from 'ant-design-vue';

	const store = useCounterStore();
	const userInfo = ref({})
	const user = JSON.parse(localStorage.getItem('user'))
	console.log(user)
	const getUser = () => {
		mineApi.get_user({
			account: user.account
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
	if (!user) {
		router.replace('/login');
	} else {
		//初始化用户信息
		getUser()
	}
	//点赞
	const starClick = (id, flag) => {
		mainApi.likeSquare({
			account: user.account,
			likeSquare: id,
			flag: flag
		}).then(res => {
			if (res.code == 0) {
				getUser()
			} else {
				message.error('fail')
			}
		})
	}
	const pageIndex = ref(0)
	//社区数组
	let squareList = ref([])
	//声明变量不要用系统关键字
	let datingList = ref([])
	let datingIndex = 0
	const pageCount = 5
	const getDating = async ()=> {
		await mainApi.get_dating({
			pageIndex: datingIndex,
			pageCount: pageCount
		}).then(res => {
			if (res.code == 0) {
				datingList.value = res.rows
				console.log(datingList.value)
				if(res.rows.length>=pageCount) {
					datingIndex ++
				} else {
					datingIndex = 0
				}
			} else {
				msg.error('fail')
			}
		})
	}
	const getSquare = async () => {
		await mainApi.get_square({
			pageIndex: pageIndex.value,
			pageCount: pageCount
		}).then(res => {
			if (res.code == 0) {
				if(pageIndex.value == 0) {
					localStorage.setItem('squareList',JSON.stringify(res.rows))
				} else {
					squareList.value = squareList.value.concat(res.rows)
				}
				if(res.rows.length>0) {
					pageIndex.value += 1
				} else {
					Modal.warning({
						title: lang.message.title,
						content: lang.message.msg,
						okText: lang.mine.model.message[1].okText,
					});
				}
			} else {
				msg.error('fail')
			}
		})
	}
	//分页加载
	const load = () => {
		getSquare()
	}
	const datingChange = (current) => {
		if(current== pageCount-1) {
			getDating()
		}
	}
	const vipClick = () => {
		console.log(lang.main)
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
	onMounted(async () => {
		console.log(router)
		//初始化弹幕
		getDating()
		//初始化社区数据
		// getSquare()
		if(localStorage.getItem('squareList')) {
			squareList.value = JSON.parse(localStorage.getItem('squareList'))
		} else {
			getSquare()
		}
		//初始化播放器
		player.value = new Plyr(playCtrl.value);
	});

	const togglePlay = () => {
		// 	console.log(player.value)
		//   if (player.value.paused) {
		//     player.value.play(); // 暂停则播放
		//   } else {
		//     player.value.pause(); // 播放则暂停
		//   }
	};
</script>

<style scoped>
	.userItem {
		flex-direction: column;
		align-items: flex-start;
		margin: 10px 0;
	}

	.userItem .iType,
	.userItem .date {
		font-size: 12px;
		text-align: left;
	}

	.iHead img {
		width: 50px;
		height: 50px;
		border-radius: 10px;
	}

	.iHead .userInfo {
		padding: 5px 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	.userItem .iHead {
		justify-content: flex-start;
		align-items: flex-start;
		padding: 0 10px 10px;
	}

	.userItem .iSection {
		display: flex;
		flex-direction: column;
	}

	.userItem .iSection .title {
		padding: 0 10px 10px;
		text-align: left;
	}

	.square .iSection img,.square .iSection video {
		border-radius: 5px;
		width: 100vw;
	}

	.square .iFoot div i {
	}

	.square .iFoot {
		width: 100vw;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 20px;
		box-sizing: border-box;
		font-size: 16px;
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

	.square .infinite-list {
		height: 75vh;
	}

	.slick-track {
		height: 50vh !important;
	}

	.dating .slick-list {
		height: 15vh !important;
		font-size: 12px;
		position: absolute;
		right: 0;
		overflow: auto !important;
		text-align: left;
		color: blue;
	}

	.dating {
		width: 100vw;
		height: 5vh !important;
		text-align: left;
		position: absolute;
		right: 0;
		transform: translateY(-4.4vh);
		overflow: hidden;
		background-color: rgba(225, 225, 225, 0.5);
		box-shadow: 0 0 10px 5px rgba(225, 225, 225, 0.6);
	}

	/* 轮播标注不显示 */
	.slick-dots {
		display: none !important;
	}

	.carousel {
		height: 25vh;
		overflow: hidden;
		position: relative;
	}

	.carousel .txt {
		position: absolute;
		top: 0;
		display: flex;
	}

	.carousel img {
		object-fit: cover;
	}

	.main {
		padding: 0;
		color: black;
	}

	.infinite-list {
		height: 450px;
		padding: 0;
		margin: 0;
		list-style: none;
	}

	.infinite-list .infinite-list-item {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		height: auto;
		background-color: rgba(255, 255, 255, 0.7);
		padding: 5px 0 0;
		color: #aa55ff;
	}

	.infinite-list .infinite-list-item+.list-item {}
</style>