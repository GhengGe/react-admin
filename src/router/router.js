import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomeContainer from '../component/tabbar/HomeContainer.vue';
import MemberContainer from '../component/tabbar/MemberContainer.vue';
import SearchContainer from '../component/tabbar/SearchContainer.vue';
import ShopcarContainer from '../component/tabbar/ShopcarContainer.vue';
import newlist from '../component/home/newlist.vue';

var router = new VueRouter({
    routes : [
        { path: '/' , redirect : '/Home' },
        { path: '/Home' , component : HomeContainer},
        { path: '/Member' , component : MemberContainer },
        { path: '/Search' , component : SearchContainer },
        { path: '/Shopcar' , component : ShopcarContainer },
        { path: '/Home/newlist' , component : newlist }
    ],
    linkActiveClass: 'mui-active'
})

export default router;