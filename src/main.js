import Vue from 'vue';

// 引入 minui 的库
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

import './assets/mui/css/mui.min.css';
import './assets/mui/css/icons-extra.css';
import './assets/mui/fonts/mui-icons-extra.ttf'

// 自己的引入scss
import './scss/app.scss'

// 自己写的路由导出模块
import router from './router/router.js';

import app from './app.vue';
// 需要加载根组件到ID 等于app的div ,使用render 方法
var vm = new Vue({
    el: '#app',
    render : c => c(app),
    router
})