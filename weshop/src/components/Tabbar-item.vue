<template>
	<a class="tabbar-item" :class="{'is-active':isActive}"  @click='goRouter()'>
		<span v-show="isActive"><img src="../assets/imgs/ic_cb_weixin_checked.png" alt=""></span>	
		<span v-show="!isActive"><img src="../assets/imgs/ic_cb_weixin_unchecked.png" alt=""></span>	
		<span>首页</span>
	</a>
</template>

<script>
	export default {
		props:['flag'], 
		computed: {
           	isActive(){
           		if(this.$parent.value==this.flag) {
           			return true
           		}
           	}
        },
		methods:{
			goRouter() {
				console.log(this.flag)
				this.$parent.$emit('input',this.flag)
				this.$router.replace({name:this.flag})
			}
		}
	}
</script>

<style lang='scss' scoped>
	.tabbar-item {
		display: flex;
		flex-grow:1;
		flex-direction:column;
		span {
			text-align: center;
			font-size: 12px;
		}
		img {
			width: 36px;
		}
	}
	.is-active span {
		color: #5aba5a;
	}
	
</style>