import axios from 'axios'

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
      const { status, data = {}, message } = e.response

      message.error(message)
      return Promise.reject({
        status,
        ...data,
      })
    }

    return Promise.reject(e)
  }
)

export default request
