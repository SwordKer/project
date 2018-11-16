<template>
	<div class="contact-out-w" :class="{'is-show':isShowFlag}">
		<div class="contact-inner-w" :class="{'for-block':isBlock}">
			<h2>联系人<i @click="closeConta()" v-show="isBlock" class="el-icon-close"></i></h2>
			<div class="contact-item">
				<div class="contact-left">
					<div class="c-img"><img src="@/assets/logo.png"></div>
					<div class="c-info">
						<div class="c-name">李小明</div>
						<div class="c-text">销售顾问</div>
					</div> 
				</div>
				<div class="contact-right">
					<div class="c-phone">
						<div><i class="iconfont icon-dianhua"></i></div>
						<div>电话</div>
					</div>
					<div class="c-wechat">
						<div><i class="iconfont icon-icon"></i></div>
						<div>微信</div>
					</div>
				</div>
			</div>

					<div class="contact-item">
				<div class="contact-left">
					<div class="c-img"><img src="@/assets/logo.png"></div>
					<div class="c-info">
						<div class="c-name">李小明</div>
						<div class="c-text">销售顾问</div>
					</div>
				</div>
				<div class="contact-right">
					<div class="c-phone">
						<div><i class="iconfont icon-dianhua"></i></div>
						<div>电话</div>
					</div>
					<div class="c-wechat">
						<div><i class="iconfont icon-icon"></i></div>
						<div>微信</div>
					</div>
				</div>
			</div>
					<div class="contact-item">
				<div class="contact-left">
					<div class="c-img"><img src="@/assets/logo.png"></div>
					<div class="c-info">
						<div class="c-name">李小明</div>
						<div class="c-text">销售顾问</div>
					</div>
				</div>
				<div class="contact-right">
					<div class="c-phone">
						<div><i class="iconfont icon-dianhua"></i></div>
						<div>电话</div>
					</div>
					<div class="c-wechat">
						<div><i class="iconfont icon-icon"></i></div>
						<div>微信</div>
					</div>
				</div>
			</div>

				<div class="contact-item">
				<div class="contact-left">
					<div class="c-img"><img src="@/assets/logo.png"></div>
					<div class="c-info">
						<div class="c-name">李小明</div>
						<div class="c-text">销售顾问</div>
					</div>
				</div>
				<div class="contact-right">
					<div class="c-phone">
						<div><i class="iconfont icon-dianhua"></i></div>
						<div>电话</div>
					</div>
					<div class="c-wechat">
						<div><i class="iconfont icon-icon"></i></div>
						<div>微信</div>
					</div>
				</div>
			</div>
		</div>
		<div ref="mask" class="mask-wrap" v-show="isBlock"></div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				isShow:false,
				forBlock:false
			}
		},
		mounted(){
			var masks = this.$refs.mask.style
			masks.width = document.body.clientWidth + 'px'
			masks.height = document.body.clientHeight + 'px'
		},
		computed:{
			isShowFlag(){
				if(this.isShow) {
					return true
				}
			},
			isBlock(){
				if(this.forBlock) {
					return true
				}
			}
		},
		methods:{
			closeConta(){
				!this.isShow ? this.isShow = true : this.isShow = false
				console.log(this.isShow)
			}
		}
	}
</script>

<style lang='scss'>
	@import '../plugins/iconfont.css';
	.contact-out-w {	
		margin-top: 8px;	
		.contact-inner-w {
			background-color: #fff;
			padding: 5px;
		}
		h2 {
			font-size: 16px;
			border-left: 2px solid #FF4500;
			padding-left: 5px ;
			display: flex;
			justify-content:space-between;
			font-family:'Avenir' !important;
			i {
				padding-right: 10px;
				font-size: 23px;
			}
		}
		.contact-item {
			font-family: 'Microsoft Yahei';
			display: flex;
			justify-content:space-between;
			margin-top: 5px;
			border-top: 2px solid #F2F2F2;
			.contact-left {
				display: flex;
				.c-name {
					font-size: 19px;
				}
				.c-info {
					padding: 3px 0 0 5px;
					color: #444;
				}
				img {
					width: 80px;
					height: 80px;
				}
				.c-text {
					margin-top: 8px;
					font-size: 14px;
				}
			}
			.contact-right {
				display: flex;
				div  {
					text-align: center;
					i {
						font-size: 30px;
					}
					.icon-dianhua {
						color: #EE0000;
					}
					.icon-icon{
						color: #228B22;
					}
				}
				.c-phone,.c-wechat {
					padding:15px 10px;
					color: #444;
				}
			}
		}
	}
	.is-show {
		display: none;
	}
	.mask-wrap {
		position: fixed;
		top: 0;
		left: 0;
		background-color: #333;
		opacity: 0.3;
	}
	.for-block {
		z-index: 999;
		padding:0 5px;	
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
	}
</style>