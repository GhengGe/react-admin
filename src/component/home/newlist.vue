<template>
    <div>
        <h1>newlist</h1>
        <ul class="mui-table-view">
            
            <li class="mui-table-view-cell mui-media" v-for="item in newlist" :key="item.id">
                <router-link to="#">
                <a href="javascript:;" class="">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{ item.title }}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{ item.add_time }}</span>
                            <span>点击：{{item.click}}次</span>
                        </p>
                    </div>
                </a>
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
            newlist: []
        }
    },
    created(){
        this.getlist()
    },
    methods: {
        getlist(){
            this.$http.get('/api/getnewslist').then(res => {
                console.log(res);
                if(res.status === 0 ){
                    this.newlist = res.message
                }else {
                    Toast('响应数据失败')
                }
                
            })
        }
    }
}
</script>

<style lang="scss" scoped>

.mui-table-view-cell {
    
    h1 {
        font-size: 13px;
    }
}
.mui-table-view-cell>a:not(.mui-btn).mui-active {
        background-color: #fff;
        
    }
</style>
