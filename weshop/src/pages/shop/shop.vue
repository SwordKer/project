<template>
	 <div>
		<div class="list-top-wrap">
			<div @click="toSearch" class="search-tit"><div><i style="padding-right:3px" class="iconfont icon-sousuo"></i>搜索搜索</div></div>
			<div class='sort-bar'>
				<div>默认</div>
				<div class="sort-pric-t" @click='priceChange()'>价格
					<div class="icon-wrap">
						<div><i :class="{'priceStatus':priceStatus}" class="iconfont icon-zelvxuanzefeiyongzhengsanjiaoxingzhichi"></i></div>
						<div><i :class="{'priceStatus':!priceStatus}" class="iconfont icon-zelvxuanzefeiyongdaosanjiaoxingfandui"></i></div>
					</div>
				</div>
				<div>最新</div>
			</div>
		</div>
		<div class="list-wrap">
			<div class="list-item" v-for="v in carData">
				<div class="list-item-l"><img :src="v.image"></div>
				<div class="list-item-r">
					<div class="item-tit">{{v.name}}</div>
					<div class="item-pri">${{v.price}}</div>
				</div>
			</div>

					<div class="list-item">
				<div class="list-item-l"><img src="@/assets/imgs/14882888_192654240000_2.jpg"></div>
				<div class="list-item-r">
					<div class="item-tit">北汽德生科技地方</div>
					<div class="item-pri">$129999</div>
				</div>
			</div>
			
		</div>
		<div v-loading.fullscreen.lock="fullscreenLoading"></div>
 	</div>
</template>

<script>
	import request from '@/utils/request' 
	export default {
		data(){
			return {
				priceFlag:true,
				carData:[],
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
		methods:{
			priceChange(){
				!this.priceFlag ? this.priceFlag = true : this.priceFlag =false
				console.log(this.priceFlag)
			},
			toSearch(){
				this.$router.push({name:'search'})
			}
		},
		computed:{
			priceStatus(){
				if(this.priceFlag) {
					return true;
				}
			}
		}
	}
</script>

<style lang="scss">
	@import '../../plugins/iconfont.css';
	.list-top-wrap {
		position: fixed;
		width: 100%;
		background-color: #FCFCFC;
		top:0;
		left: 0;
		z-index: 99;
	}
	.search-tit {
		text-align: center;
		font-size: 14px;
		padding: 0px 20px;
		div {
			background-color: #F5F5F5;
			padding: 3px 0;
		}
	}
	.sort-bar {
		display: flex;
		font-family: 'Microsoft Yahei';
		font-size: 18px;
		padding: 5px 0;
		box-shadow: 1px 1px 2px #888888;
		&>div {
			flex-grow:1;
			text-align: center;
		}
		.sort-pric-t {
			position: relative;
			.icon-wrap {
				top: 0px;
				right: 40px;
				position: absolute;
				div {
					position: absolute;
					font-size:12px;
					color: #666;
					&:nth-child(2) {
						top: 10px;
					}
				}
			}
		}
	}
	.list-wrap {
		font-family: 'Microsoft Yahei';
		margin-top: 60px;
		padding: 0 5px 60px 5px;
		.list-item {
			display: flex;
			margin-bottom: 5px;
			.list-item-l {
				width: 30%;
				height: 90px;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.list-item-r {
				width: 70%;
				position: relative;
				padding-left: 8px;
				.item-tit {
					font-size: 16px;
				}
				.item-pri {
					position: absolute;;
					bottom: 12px;
					color: #FF4040;
				}
			}
		}
	}
	.priceStatus {
		color: red;
	}
</style>