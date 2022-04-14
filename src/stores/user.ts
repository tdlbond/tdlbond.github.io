import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const count = ref(0)
  const doubleCount = () => count.value * 2
  const setCount = (value: number) => {
    count.value += value
  }

  return {
    count,
    doubleCount,
    setCount
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}