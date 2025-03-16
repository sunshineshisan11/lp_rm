import {
	createApp
} from 'vue'
import App from './App.vue'
import axios from 'axios';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router';
import jp from './locales/jp.js';
import Antd from 'ant-design-vue';
import {
	createPinia
} from 'pinia'; //状态仓库
import icon from './components/icon.vue'

const pinia = createPinia()
const app = createApp(App)
app.config.globalProperties.$axios = axios;
// app.config.globalProperties.$domain = 'https://www.lovepartya.com'
//正式
// app.config.globalProperties.$domain = 'https://lovepartya.com:168'
//测试
app.config.globalProperties.$domain = 'http://lovepartya.com:3333'
app.config.globalProperties.$language = 'jp'
app.config.globalProperties.$appHeight = window.screen.availHeight

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}
import en from './locales/en.js';
import zh from './locales/zh.js';
import jp1 from './locales/jp.js';
import ko from './locales/ko.js';
import vi from './locales/vi.js';
const lang = {
	en,
	zh,
	jp1,
	ko,
	vi
}
app.component('icon', icon);
app.use(ElementPlus)
app.use(Antd);
app.use(router);
app.use(pinia);
console.log(app)
app.mount('#app')