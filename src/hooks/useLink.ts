import { getCurrentInstance } from 'vue'

export default function useLink () {
  const { proxy }: any = getCurrentInstance()
  const backHome = () => {
    proxy.$router.push({ name: 'home' })
  }
  const routerPush = (path: string, query?: object) => {
    proxy.$router.push({ path, query })
  }

  return {
    backHome,
    routerPush
  }
}