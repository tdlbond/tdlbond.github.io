<template>
  <div>
    <p>user</p>
    <p><button @click="setCount(1)">increase</button> {{ count }}</p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const store = useUserStore()
const { count } = storeToRefs(store)
const { setCount } = store
</script>