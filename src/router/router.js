import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomeContainer from '../component/tabbar/HomeContainer.vue';
import MemberContainer from '../component/tabbar/MemberContainer.vue';
import SearchContainer from '../component/tabbar/SearchContainer.vue';
import ShopcarContainer from '../component/tabbar/ShopcarContainer.vue';

var router = new VueRouter({
    routes : [
        { path: '/Home' , component : HomeContainer },
        { path: '/Member' , component : MemberContainer },
        { path: '/Search' , component : SearchContainer },
        { path: '/Shopcar' , component : ShopcarContainer }
    ],
    linkActiveClass: 'mui-active'
})

export default router;