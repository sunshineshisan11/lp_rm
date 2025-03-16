import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router';
import main from '../views/main.vue';
import mine from '../views/mine.vue';
import PL from '../views/PL.vue';
import login from '../login.vue';

const routes = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main',
    name: 'main',
    component: main
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/mine',
    name: 'mine',
    component: () => import('../views/mine.vue')
  }, {
    path: '/gift',
    name: 'gift',
    component: () => import('../views/gift.vue')
  }, {
    path: '/PL',
    name: 'PL',
    component: () => import('../views/PL.vue')
  }, {
    path: '/PDetail',
    name: 'PDetail',
    component: () => import('../components/PDetail.vue')
  }, {
    path: '/systemEdit',
    name: 'systemEdit',
    component: () => import('../components/systemEdit.vue')
  }, {
    path: '/videoAuto',
    name: 'videoAuto',
    component: () => import('../components/videoAuto.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  // 获取根组件实例
  const app = document.getElementById('app');
  if (to.name === 'login') {
    // 进入登录页面，隐藏底部 Tab 栏
    app.classList.add('hide-tab-bar');
  } else {
    // 离开登录页面，显示底部 Tab 栏
    app.classList.remove('hide-tab-bar');
  }
  next();
});

export default router;
