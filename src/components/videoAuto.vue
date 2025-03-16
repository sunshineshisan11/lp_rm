<template>
	<div id="app">
		<el-icon class="back" size="40" @click="router.back()">
			<ArrowLeftBold />
		</el-icon>
		<div class="video-container" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
			<div v-for="(video, index) in visibleVideos" :key="index" class="video-item">
				<!-- 视频加载时显示封面图片 -->
				<img v-if="!videoLoaded[index]" :src="$domain+'/'+video.cover" alt="Video Cover" class="video-cover">
				<video ref="videoRefs[index]" :src="$domain+'/'+video.url" playsinline autoplay muted
					@loadeddata="onVideoLoaded(index)"></video>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {
		ref,
		onMounted,
		watchEffect
	} from 'vue';
	import {
		useRouter,
		useRoute
	} from 'vue-router';
	// 模拟视频数据，包含视频链接和封面图链接
	const videoList = [
		[{
				url: 'yc1.MP4',
				cover: 'yc1.jpg'
			},
			{
				url: 'yc2.MP4',
				cover: 'yc2.jpg'
			},
			{
				url: 'yc3.MP4',
				cover: 'yc3.jpg'
			}
		],
		[{
				url: 'yt1.MP4',
				cover: 'yt1.jpg'
			},
			{
				url: 'yt2.MP4',
				cover: 'yt2.jpg'
			},
			{
				url: 'yt3.MP4',
				cover: 'yt3.jpg'
			},
			{
				url: 'yt4.MP4',
				cover: 'yt4.jpg'
			},
			{
				url: 'yt5.MP4',
				cover: 'yt5.jpg'
			},
		],
		[{
			url: 'bs1.MP4',
			cover: 'bs1.jpg'
		},{
			url: 'bs2.MP4',
			cover: 'bs2.jpg'
		}]
	]
	const router = useRouter()
	let type = ref(0)
	const route = useRoute();
	type.value = route.query.type
	console.log(type.value)
	const videos = videoList[type.value]
	console.log(videos)
	// 当前视频索引
	const currentIndex = ref(0);
	// 可见视频列表
	const visibleVideos = ref([videos[currentIndex.value]]);
	// 视频元素引用数组
	const videoRefs = ref([]);
	// 记录每个视频是否加载完成
	const videoLoaded = ref(videos.map(() => false));

	// 触摸事件相关变量
	let startY = 0;
	let isSwiping = false;

	const onTouchStart = (event) => {
		startY = event.touches[0].clientY;
		isSwiping = true;
	};

	const onTouchMove = (event) => {
		if (!isSwiping) return;
		const currentY = event.touches[0].clientY;
		const deltaY = currentY - startY;
		// 这里可以添加滑动动画效果
	};

	const onTouchEnd = (event) => {
		if (!isSwiping) return;
		const currentY = event.changedTouches[0].clientY;
		const deltaY = currentY - startY;
		if (deltaY < -50) {
			// 向上滑动，切换到下一个视频
			if (currentIndex.value < videos.length - 1) {
				currentIndex.value++;
				visibleVideos.value = [videos[currentIndex.value]];
				videoLoaded.value = videos.map(() => false);
				preloadNextVideo();
			}
		} else if (deltaY > 50) {
			// 向下滑动，切换到上一个视频
			if (currentIndex.value > 0) {
				currentIndex.value--;
				visibleVideos.value = [videos[currentIndex.value]];
				videoLoaded.value = videos.map(() => false);
			}
		}
		isSwiping = false;
	};

	const preloadNextVideo = () => {
		if (currentIndex.value < videos.length - 1) {
			const nextVideoIndex = currentIndex.value + 1;
			const nextVideo = new Audio(videos[nextVideoIndex].url);
			nextVideo.preload = 'auto';
		}
	};

	const onVideoLoaded = (index) => {
		videoLoaded.value[index] = true;
	};

	onMounted(() => {
		preloadNextVideo();
		watchEffect(() => {
			const video = videoRefs.value[currentIndex.value];
			if (video) {
				video.load();
				video.play();
			}
		});
	});
</script>

<style scoped>
	.back {
		position: absolute;
		left: 10px;
		top: 10px;
		z-index: 9;
	}
	.video-container {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #000;
		overflow: hidden;
	}

	.video-item {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.video-cover {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}

	video {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: relative;
		z-index: 2;
	}
</style>