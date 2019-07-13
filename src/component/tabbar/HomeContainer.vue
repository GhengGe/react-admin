<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotulist" :key="item.img">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <h1>首页</h1>
        <router-view></router-view>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4  ">
                <router-link to="/Home/newlist">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4  ">
                <router-link to="#">
                    <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4  ">
                <router-link to="#">
                    <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4  ">
                <router-link to="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4  ">
                <router-link to="#">
                    <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4  ">
                <router-link to="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
    data(){
        return {
            lunbotulist: []
        }
    },
    created() {
        // 调用方法
        this.getlunbotu()
    },
    methods: {
        getlunbotu(){
            // 获取轮播图数据
            this.$http.get('/api/getlunbo').then(res => {
                console.log(res);
                if(res.status === 0){
                    this.lunbotulist = res.message;
                }else {
                    // 失败的
                    Toast("加载轮播图失败。。。");
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.mint-swipe {
    height: 200px;
    .mint-swipe-item {
        &:nth-child(1) {
            background-color: pink;
        };
         &:nth-child(2) {
            background-color: skyblue;
        };
         &:nth-child(3) {
            background-color: yellowgreen;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
}


.mui-table-view {
    background-color: #fff;
    border:0;
    img {
        width: 60px;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border:0;
}
</style>
