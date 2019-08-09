<template>
  <div class="login">
    <LoginHeader>
      <!-- 插槽 -->
      <el-form slot='container'>
        <h3>登录</h3>
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
  // Provide 装饰器的作用： 以前我们都会把值存到 data里面
  @Provide() rulesform: {
    username: string,
    pwd: string,
    autoLogin: boolean
  } = {
    username: '',
    pwd: '',
    autoLogin: true
  }
}
</script>

<style>

</style>
