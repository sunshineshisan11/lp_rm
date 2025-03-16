<script setup>
	// This starter template is using Vue 3 <script setup> SFCs
	// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
	import Login from './login.vue'
	import TabBar from './components/TabBar.vue';
	import {
		ref,
		onBeforeMount
	} from 'vue';
	import {
		useRoute,
		RouterLink,
		RouterView,
		useRouter
	} from 'vue-router';
	import mainVue from './views/main.vue';

	const route = useRoute();
	const router = useRouter();
	const isLoginPage = ref(false);
	router.push('/main')
	onBeforeMount(() => {
		if (route.name === 'login') {
			isLoginPage.value = true;
		}
	});

	let deviceW = window.screen.availWidth
	if (deviceW > 768) {

	}
</script>

<template>
	<div>
		<RouterView />
		<TabBar v-if="!isLoginPage" />
	</div>
</template>

<style>
	@import url(css/common.css);
	@import url(css/components.css);

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		/* margin-top: 60px; */
		color: white;
		font-weight: bold;
	}

	body {
		margin: 0;
	}

	/* 底部tab隐藏 */
	#app.hide-tab-bar .tab-bar {
		display: none;
	}

	.main {
		background-color: #f2f2f5;
		/* padding: 20px 20px 60px; */
		box-sizing: border-box;
		position: relative;
		z-index: 1;
		/* margin-bottom: 80px; */
		color: #fff !important;
	}
</style>