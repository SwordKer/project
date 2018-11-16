<template>
	<div class='login-wrap'>
		<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="login-Form">
		  <el-form-item label="用户名" prop="username">
		    <el-input type="password" v-model="ruleForm2.username" autocomplete="off"></el-input>
		  </el-form-item>
		  <el-form-item label="密码" prop="checkPass">
		    <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
		    <el-button @click="resetForm('ruleForm2')">重置</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>
<script>
  export default {
    data() {
      var username = (rule,value,callback)=> {
      	if(!value) {
      		return callback(new Error('请输入账号'))
      	}else {
      		callback();
      	}
      };
       var checkPass = (rule,value,callback)=> {
      	if(!value) {
      		return callback(new Error('请输入密码'))
      	}else {
      		callback();
      	}
      };
      return {
        ruleForm2: {
          username: '',
          checkPass: '',
        },
        rules2: {
          username: [
            { validator: username, trigger: 'blur' }
          ],
          checkPass: [
            { validator: checkPass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
	.login-wrap {
		width: 100%;
		height: 100%;
		display: flex;
    justify-content:center;
    align-items:center;
	}
	.login-Form {
	  width: 90%;
    border: 1px solid #eee;
    padding: 20px 20px 20px 0;
	}
</style>