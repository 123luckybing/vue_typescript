<template>
  <div class="login">
    <LoginHeader>
      <!-- 插槽 -->
      <el-form
        ref="ruleForm"
        slot='container'
        :model='rulesform'
        label-position='left'
        label-width='80px'
        :rules="rules"
      >
        <h3>登录</h3>
        <el-form-item label="用户名:" prop="username">
          <el-input v-model="rulesform.username" placeholder='请输入用户名'></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="pwd">
          <el-input v-model="rulesform.pwd" placeholder='请输入密码'></el-input>
        </el-form-item>
        <div class='tip'>
          <el-checkbox v-model="rulesform.autoLogin">7天自动登录</el-checkbox>
          <el-button type="text">忘记密码</el-button>
        </div>
        <el-button :loading='isLoading' type="primary" @click='submit'>登录</el-button>
      </el-form>
    </LoginHeader>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Provide } from 'vue-property-decorator'
import LoginHeader from '@/views/Login/LoginHeader.vue'
@Component({
  components: {
    LoginHeader
  }
})
export default class Login extends Vue {
  data() {
    return {
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  }
  // Provide 定义 loading
  @Provide() isLoading:boolean = false
  // Provide 装饰器的作用： 以前我们都会把值存到 data里面
  @Provide() rulesform: {
    username: string;
    pwd: string;
    autoLogin: boolean
  } = {
    username: '',
    pwd: '',
    autoLogin: true
  }

  // 登录方法 函数传参数的话 制定类型
  submit():void {
      (this.$refs['ruleForm'] as any).validate((valid:boolean) => {
      if (valid) {
        this.isLoading = true;
        (this as any).$axios.post('/api/users/login',this.rulesform).then((res: any) => {
          localStorage.setItem('tsToken', res.data.token) // 设置token
          this.isLoading = false;
        }).catch( (err: any) => {
          this.isLoading = false;
          console.log(err)
        })
      } else {
        console.log('error submit!!');
        return false;
      }
    })
  }
}
</script>

<style>
h3 {
  color: #333;
  margin: 10px;
}

.tip {
  display: flex;
  justify-content: space-between;
}

.el-checkbox {
  margin-top: 13px;
}
</style>
