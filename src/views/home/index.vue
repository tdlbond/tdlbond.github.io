<template>
  <el-button @click="handleGoto">home</el-button>
</template>

<script setup lang="ts">
import useLink from '@/hooks/useLink'

const { routerPush } = useLink()
const handleGoto = () => {
  routerPush('/user')
}
</script>