<template>
	 <div class="index-wrap">
	    <div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide"><img src="@/assets/imgs/14882888_192654240000_2.jpg"></div>
		        <div class="swiper-slide"><img src="@/assets/imgs/b21bb051f8198618478a4b5040ed2e738ad4e611.jpg"></div>
		        <div class="swiper-slide"><img src="@/assets/imgs/14882888_192654240000_2.jpg"></div>
		    </div>
		    <div class="swiper-pagination"></div>
		</div>
		<div class="brand-cont">
			<h2>主营品牌</h2>
			<div class="brand-detai">
				<div class="brand-inner">
					<div><img src="@/assets/imgs/beiqi.png"></div>
					<div>北京汽车</div>
				</div>
				<div class="brand-inner">
					<div><img src="@/assets/imgs/beiqi.png"></div>
					<div>北京汽车</div>
				</div>
				<div class="brand-inner">
					<div><img src="@/assets/imgs/beiqi.png"></div>
					<div>北京汽车</div>
				</div>
				<div class="brand-inner">
					<div><img src="@/assets/imgs/beiqi.png"></div>
					<div>北京汽车</div>
				</div>
			</div>
		</div>
		<div class="new-cars-w">
			<h2 >最新款车</h2>
			<div class="loading-div" v-loading.lock="fullscreenLoading"></div>
			<div class="new-car-inner" v-show="dataFlag">
				<div class="new-car-item" @click="openDetail()" v-for="v in carData">
					<div class="new-car-img">
						<div class="new-car-img-w"><img :src="v.image"></div>
						<div class="for-disc" @click.stop="writeInfo()">报名优惠</div>
					</div>
					<div class="i-car-name">{{v.name}}</div>
				</div>
			</div>
		</div>
 	</div>
</template>

<script>
	import '@/plugins/swiper.min.js'
	import request from '@/utils/request' 
	export default {
		data(){
			return {
				carData:[],
				dataFlag:false,
				fullscreenLoading:true 
			}
		},
		beforeCreate(){
			request({
				url:'/api/carmodels',
				 method: 'get',
				 data:{}
			}).then((res)=>{
				this.carData = res.data
				console.log(res.data)
				this.fullscreenLoading = false;
				this.dataFlag = true;
			}).catch((e)=>{
				this.fullscreenLoading = false;
				// console.log(e)
			})
		},
		created(){

		},
		methods:{
			openDetail(){
				this.$router.push({name:'detail'})
			},
			writeInfo(){
				this.$router.push({name:'join'})
			}
		},
		mounted(){
			var mySwiper = new Swiper('.swiper-container', {
			    loop: true,
			    pagination: '.swiper-pagination',
  			}) 
		}
	}
</script>

<style lang="scss">
	@import'../../plugins/swiper.min.css';
	.index-wrap {
		background-color: #F8F8FF;
	}
 	h2 {
		font-size: 16px;
		border-left: 2px solid #FF4500;
		padding-left: 5px ;
	}
	.brand-inner,.new-car-item {
 		font-family: 'Microsoft Yahei';
	}
    .swiper-container {
    	height: 230px;
        .swiper-slide img {
	    	width: 100%;
	    	height: 100%;
   		}
    }
 	.brand-cont {
 		padding: 8px 5px;
 		background-color: #fff;
 		.brand-detai {
 			display: flex;
 			flex-wrap:wrap;
 			width: 100%;
 		}
 		.brand-inner {
 			text-align: center;
 			width: 25%;
 			img {
 				width: 70px;
 				height: 70px;
 			}
 		}
 	}
 	.new-cars-w {
 		padding: 8px 5px;
 		background-color: #fff;
 		position: relative;
 		.loading-div {
 			position: absolute;
 			top: 100px;
 			left: 40%;
 		}
		.new-car-inner {
			display: flex;
 			flex-wrap:wrap;
 			width: 100%;
 			justify-content:space-between;
 			.new-car-item {
				text-align: center;
				width: 49%;
				margin-bottom: 5px;
				.new-car-img {
					position: relative;
					.new-car-img-w{
						height: 130px;
						img {
							width: 100%;
							height: 100%;
						}
					}
					.for-disc {
						background-color: #FF4500;
						position: absolute;
						bottom: 4px;
						right: 0;
						padding: 2px 5px;
						color: #fff;
						font-size: 15px;
					}
					.i-car-name {
						font-size:14px;
					}
				}	
 			}
		}
 	}
   

</style>