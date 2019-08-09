<template>
  <div>h</div>
</template>

<script lang='ts'>
// 从vue 装饰器里面拿到 Component 和 Vue
import { Component, Vue } from 'vue-property-decorator'
// 使用装饰器 ({}) 里面包裹对象
@Component({
  // 子组件引入
  components: {
    
  }
})

export default class Home extends Vue {}
</script>

<style>

</style>


