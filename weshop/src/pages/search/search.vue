<template>
	<div class="search-w">
		<div class="search-inp">
			<div @click="$router.go(-1)" class="back-icon"><i class="el-icon-arrow-left"></i></div>
			<div class="s-inp"><input v-model="keyword" type="text"></div>
			<div class="s-text" @click="searchs('')">搜索</div>
		</div>
		<div class='search-hot' v-show="isShow">
			<div class="hot-er">大家在搜</div>
			<div class="hot-tab">
				<div>拉克丝的拉克丝的</div>
				<div>拉克丝的</div>
				<div>拉克丝的</div>
				<div>拉克丝的</div>
				<div>拉克丝的</div>
				<div>拉克丝的</div>
			</div>
		</div>
		<div class="search-his" v-show="isShow"> 
			<div class="search-item">
				<div><i style="margin-right:5px" class="el-icon-time"></i>胜利大街水电费</div>
				<div><i class="el-icon-close"></i></div>
			</div>
			<div class="search-item">
				<div><i style="margin-right:5px" class="el-icon-time"></i>胜利大街水电费</div>
				<div><i class="el-icon-close"></i></div>
			</div>
			<div class="search-item">
				<div><i style="margin-right:5px" class="el-icon-time"></i>胜利大街水电费</div>
				<div><i class="el-icon-close"></i></div>
			</div>
				<div class="search-item">
				<div><i style="margin-right:5px" class="el-icon-time"></i>胜利大街水电费</div>
				<div><i class="el-icon-close"></i></div>
			</div>
				<div class="search-item">
				<div><i style="margin-right:5px" class="el-icon-time"></i>胜利大街水电费</div>
				<div><i class="el-icon-close"></i></div>
			</div>
		</div>
		<div v-show="isShow" class='clear-his'>清空搜索记录</div>
		<div class="s-res-list" v-show="!isShow">
			<div class="res-list-item" v-for="v in searchRes"  @click="carDetail(v.id)">
				<div>{{v.name}}</div>
				<div @click.stop="bindWrite(v.name)"><i class="el-icon-upload2"></i></div>
			</div>
			<div v-show="notTip" class="not-tip">无相关车辆信息</div>
		</div>
	</div>
</template>

<script>
	import request from '@/utils/request' 
	export default {
		data() {
			return {
				keyword:'',
				searchRes:[],
				isShow:true,
				notTip:false
			}
		},
		methods:{
			bindWrite(val){
				this.keyword = val
			},
			searchs(){
				this.isShow = false;	
				if(this.keyword==''){this.isShow=true;return;}
				request({
					url:'/api/carmodels/search',
					 method: 'post',
					 params:{keyword:this.keyword}
				}).then((res)=>{
					console.log(res.data)
					if(res.data.length==0) {
						this.notTip = true;
					}else {
						this.notTip = false;
					}
					this.searchRes = res.data
				})
			},
			carDetail(cid){
				this.$router.push({name:'detail',params:{cid:cid}})
			}
		},
		watch:{
			keyword(){
				this.searchs()
			}
		}
	}
</script>

<style lang="scss">
	.search-w {
		background-color: #F8F8FF;
		font-family: 'Microsoft Yahei';
	}
	.search-inp {
		display: flex;
		padding: 5px 0;
		.back-icon {
			width: 10%;
			padding: 5px;
		}
		.s-inp {
			width: 70%;
			input {
				padding: 3px;
				width: 100%;
				border: none;
				outline: none;
				margin-top: 3px;
			}
		}
		.s-text {
			padding: 5px;
			width: 20%;
			margin-left: 8px;
		}
	}
	.search-hot {
		background-color: #fff;
		color: #444;
		padding: 6px 5px 5px 5px;
		.hot-er {
			font-size: 16px;
			padding-bottom: 8px;
		}
		.hot-tab {
			display: flex;
			flex-wrap:wrap;
			div {
				text-align: center;
				border-radius: 10px;
				padding: 0px 8px;
				margin:5px 0 3px 5px;
				border: 1px solid #ccc;
				font-size: 14px;
			}
		}
	}
	.search-his {
		padding: 10px 5px 5px 5px;
		background-color: #fff;
		.search-item {
			display: flex;
			justify-content:space-between;
			color:#444;
			padding: 8px 0;
			border-top: 1px solid #eee;
			font-size: 16px;
		}	
	}
	.clear-his {
		font-size: 14px;
		color: #436EEE;
		text-align: center;
		background-color: #fff;
		border-top: 1px solid #eee;
		padding-top: 15px;
	}
	.s-res-list {
		padding: 5px;
		background-color: #fff;
		.res-list-item {
			display: flex;
			justify-content:space-between;
			padding: 10px 0;
			border-bottom: 1px solid #eee;
			color: #444;
		}
		.not-tip {
			font-size: 15px;
			color: #444;
			text-align: center;
			margin-top: 10px;
		}

	}
</style>