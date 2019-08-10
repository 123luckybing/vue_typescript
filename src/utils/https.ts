import axios, { AxiosRequestConfig, AxiosResponse} from 'axios'
import { Message } from 'element-ui'

// 创建axios实例
const server = axios.create({
  timeout: 3000
})

// 请求拦截
server.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
}, (err: any) => {
  return Promise.reject(err)
})

// 响应拦截
server.interceptors.response.use((res: AxiosResponse) => {
  return res
}, (err: any) => {
  let errMsg = ''
  if (err && err.response.status) {
    switch(err.response.status) {
      case 401:
        errMsg = '登录状态失败，请重新登录'
        break
      case 403:
        errMsg = '拒绝访问'
        break
      case 408:
        errMsg = '请求超时'
        break
      case 500:
        errMsg = '服务器错误'
        break               
    }
  } else {
    errMsg = err
  }
  Message.error(errMsg)
  return Promise.reject(err)
})

export default server