<script setup lang="ts">
import useLink from '../hooks/useLink'

const { backHome } = useLink()
</script>


<template>
  <div class="layout-404">
    <p>404</p>
    <p>您访问的页面不存在，<span @click="backHome">返回首页</span></p>
  </div>
</template>

<style lang="scss" scoped>
.layout-404 {
  text-align: center;
  > p:first-child {
    font-size: 50px;
    line-height: 100px;
  }
}
</style>
