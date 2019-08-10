<template>
  <div class="password">
    <LoginHeader>
      <el-form :rules='rules' slot='container' label-position='left' label-width='80px'>
        <h3>找回密码</h3>
        <el-form-item label="用户名:" prop="username" class='password-form'>
          <el-input v-model="rulesForm.username" placeholder='请输入用户名'></el-input>
        </el-form-item>
        <el-form-item label="邮箱:" prop="email">
          <el-input v-model="rulesForm.email" placeholder='请输入邮箱'></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">登录</el-button>
        </el-form-item>
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
export default class Password extends Vue {
  data () {
    return {
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ]
      }
    }
  }
  // 装饰器对 rulesForm进行装饰
  @Provide() rulesForm: {
    username: string,
    email: string
  } = {
    username: '',
    email: ''
  }
}
</script>

<style>
.password-form {
  margin-top: 20px;
}
</style>
