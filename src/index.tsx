import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import '@/styles/index.less'
import App from './App'

ReactDOM.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
)
