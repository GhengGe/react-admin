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

// 使用axios , 导入axios的包
import axios from 'axios';
axios.defaults.baseURL = 'http://www.liulongbin.top:3005';
// 修改vue的原型
Vue.prototype.$http = axios;

// 设置拦截器   ,  请求拦截器 ,  所有请求发送出去都要经过这里
axios.interceptors.request.use(function(res){
    console.log('所有发送出去之前 --- 请求 ---- 成功' , res);
    return res;
},function(err){
    console.log('所有发送出去之前 --- 请求 ---- 失败' , err);
    return Promise.reject(err);
})
// 服务器响应拦截器 , 所有数据返回之前, 都要经过这里
axios.interceptors.response.use(function(res){
    console.log('所有响应之前 --- 请求 ---- 成功' , res);
    return res.data;
},function(err){
    console.log('所有响应之前 --- 请求 ---- 失败' , err);
    return Promise.reject(err);
})


import app from './app.vue';
// 需要加载根组件到ID 等于app的div ,使用render 方法
var vm = new Vue({
    el: '#app',
    render : c => c(app),
    router
})