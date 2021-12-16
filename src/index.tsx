import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import '@/styles/index.less'
import App from './App'
import { BrowserRouter, Switch } from 'react-router-dom'
import Provider from './store'

ReactDOM.render(
  <ConfigProvider>
    <BrowserRouter basename="/">
      <Provider>
        <Switch>
          <App />
        </Switch>
      </Provider>
    </BrowserRouter>
  </ConfigProvider>,
  document.getElementById('root')
)
