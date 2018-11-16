<template>
	<div class="goods-out-w">
		<div @click="$router.go(-1)" class="goods-back-icon"><i class="el-icon-arrow-left"></i></div>
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide"><img src="@/assets/imgs/14882888_192654240000_2.jpg"></div>
		        <div class="swiper-slide"><img src="@/assets/imgs/b21bb051f8198618478a4b5040ed2e738ad4e611.jpg"></div>
		        <div class="swiper-slide"><img src="@/assets/imgs/14882888_192654240000_2.jpg"></div>
		    </div>
		    <div class="swiper-pagination"></div>
		</div>
		<div class="goods-inf-w">
			<div class="goods-tit">历史课定界符开始的减肥</div>
			<div class="goods-pri">指导价<span>￥129999</span></div>
		</div>
		<div class="goods-desc-w">
			<el-tabs v-model="activeName" @tab-click="handleClick" >
			    <el-tab-pane  label="商品详情" name="first">
			    	<div v-html="shopContent"></div>
			    </el-tab-pane>
			    <el-tab-pane  label="配置参数" name="second">配置管理</el-tab-pane>
			    <el-tab-pane label="充电说明" name="third">角色管理</el-tab-pane>
		  	</el-tabs>
		  	<div class="loading-div-2" v-loading.lock="fullscreenLoading"></div>
		</div>
	</div>
</template>

<script>
	import '@/plugins/swiper.min.js'
	import request from '@/utils/request'
	export default {
		data(){
			return {
				activeName:'first',
				shopContent:'',
				cid:'',
				carData:[],
				fullscreenLoading:true
			}
		},
		created(){
			request({
				url:'/api/carattrs/pullone',
				 method: 'get',
				 params:{id:this.$route.params.cid}
			}).then((res)=>{
				this.shopContent = res.data[0].exhibition
				console.log(res.data)
				this.fullscreenLoading = false;
			}).catch((e)=>{
				this.fullscreenLoading = false;
				// console.log(e)
			})
		},
		methods: {
	      handleClick(tab, event) {
	        console.log(tab, event);
	      }
    	},
		mounted(){
				console.log(this.$route.params)
			var mySwiper = new Swiper('.swiper-container', {
			    loop: true,
			    pagination: '.swiper-pagination',
  			}) 
		}
	}
</script>

<style lang='scss'>
	@import'../../plugins/swiper.min.css';
	.goods-out-w {
		font-family: 'Microsoft Yahei';
		background-color: #F8F8FF;
		.goods-back-icon {
			position: fixed;
			z-index: 999;
			font-size: 30px;
			color: #444;
		}
	}
	.swiper-container {
    	height: 230px;
        .swiper-slide img {
	    	width: 100%;
	    	height: 100%;
   		}
    }
    .goods-inf-w {
    	padding: 5px;
    	background-color: #fff;
    	margin-top: 8px;
    	.goods-tit {
			font-size: 18px;
			padding-bottom: 5px;
    	}
    	.goods-pri {
    		color: #666;
    		span {
    			color: #FF4500;
    		}
    	}
    }
    .goods-desc-w{
    	padding: 5px;
    	background-color: #fff;
    	margin-top: 8px;
    	position: relative;
    }
    .loading-div-2 {
    	position: absolute;
    	top:100px;
    	left: 40%;
    }

</style>