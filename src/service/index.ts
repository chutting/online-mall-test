import axios from 'axios'
import { message } from 'antd'

const request = axios.create({
  baseURL: '/online-mall/api',
})

request.interceptors.request.use(
  (config: any) => {
    return {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...config.headers,
      },
      timeout: 100000,
    }
  },
  (e) => Promise.reject(e)
)

request.interceptors.response.use(
  (response) => {
    const { status, data = {} } = response
    return { status, data }
  },
  (e) => {
    if (e.response) {
      const { status, data = {} } = e.response

      return Promise.reject({
        status,
        ...data,
      })
    }

    message.error('网络错误，请稍后重试')
    return Promise.reject(e)
  }
)

export default request
