import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/Login.vue') // 按需加载
    }, {
      path: '/password',
      name: 'password',
      component: () => import('@/views/Login/Password.vue')
    }
  ]
});
