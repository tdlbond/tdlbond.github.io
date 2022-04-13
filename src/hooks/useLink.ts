import { getCurrentInstance } from 'vue'

export default function useLink () {
  const { proxy }: any = getCurrentInstance()
  const backHome = () => {
    proxy.$router.push({ name: 'home' })
  }

  return {
    backHome
  }
}