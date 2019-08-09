<template>
  <div class="password">
    <LoginHeader>
      <el-form slot='container'>
        <h3>找回密码</h3>
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
  @Provide() rulesForm: {
    
  } = {

  }
}
</script>

<style>

</style>
