<template>
    <div class="app-container" >
        <mt-header fixed title="固定在顶部"></mt-header>

		<template>
			<router-view></router-view>
		</template>

		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/Home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Search">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Shopcar">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

    </div>
</template>
<script>
export default {
    data(){
        return {
            title: '好好学习'
        }
    }
}
</script>
