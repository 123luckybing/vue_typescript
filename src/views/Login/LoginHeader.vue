<template>
  <div class="login-header">
    <div class="title">welcome to me ~</div>
    <div class="container">
      <slot name='container'></slot>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({})
export default class LoginHeader extends Vue {}
</script>

<style>
.login-header {
  width: 300px;
  margin: 100px auto;
  text-align: center;
}

.container {
  padding-top: 20px;
}
</style>
