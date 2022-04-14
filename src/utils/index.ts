export function formatDate(date: Date | number | string, fmt = 'yyyy-MM-dd hh:mm:ss') {
  if (!!date == false) {
    return ''
  }
  date = date.toString().replace(/-+/g, '/')
  const newDate = new Date(date)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  const o: { [key: string]: number } = {
    'M+': newDate.getMonth() + 1,
    'd+': newDate.getDate(),
    'h+': newDate.getHours(),
    'm+': newDate.getMinutes(),
    's+': newDate.getSeconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str: string) {
  return ('00' + str).substr(str.length)
}