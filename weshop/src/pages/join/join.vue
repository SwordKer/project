<template>
	<div class="user-info-w">
		<div class="form-out-w">
			<div class="form-item">
				<div class="item-name">姓名</div>
				<div class="item-inp"><input placeholder="请输入您的真实姓名" type="text"></div>
			</div>
			<div class="form-item">
				<div class="item-name">电话</div>
				<div class="item-inp"><input placeholder="请输入您的电话" type="text"></div>
			</div>
			<div class="form-item">
				<div class="item-name">性别</div>
				<div class="item-inp" style="padding-top:5px"> 
				 	<el-radio v-model="radio" label="1">男士</el-radio>
				  	<el-radio v-model="radio" label="2">女士</el-radio>
				</div>
			</div>
			<div class="form-item-t"> 
				<div class="buy-t">预计购车时间</div>
				<div class="buy-tab">
					<el-radio-group fill="red" text-color="red" v-model="radio9" size="small">
						<el-radio fill="#ccc" label="1" border>未来1个月</el-radio>
	    				<el-radio label="2" border>未来3个月</el-radio>
	    				<el-radio label="3" border>3个月后</el-radio>
    				</el-radio-group>
				</div>
			</div>
			<div style="margin-top:20px">
				 <el-button style="width:100%;" type="primary">提交</el-button>
			</div>
			<div  class="statement">提交即同意<span>《用户个人信息保护声明》</span></div>
		</div>
	</div>
</template>

<script> 
	export default {
		data(){
			return {
				radio: '1',
				radio9: '1'
			}
		}
	}
</script>

<style lang='scss'>
	.user-info-w {
		font-family: 'Microsoft Yahei';
		padding: 5px;
	}
	.form-out-w {
		.form-item {
			display: flex;
			padding: 5px 0;
			color: #444;
			font-size: 18px;
			border-bottom: 1px solid #eee;
			.item-name {
				width: 15%;
				padding: 6px;
			}
			.item-inp {
				width: 80%;
				input {
					outline: none;
					border: none;
					width: 100%;
					padding: 6px;
					margin-top: 5px;
				}
			}
		}
		.form-item-t {
			padding: 8px 5px;
			.buy-t {
				color: #444;
				margin-bottom: 10px;
			}
		}
		.statement {
			font-size: 14px;
			color: #666;
			text-align: center;
			margin-top: 10px;
			span {
				color: #FF8247 !important;
			}
		}
	}
</style>