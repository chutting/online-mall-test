import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFound from '@/pages/not-found'
import Home from './pages/home'
import Provider from './store'

function App() {
  return (
    <BrowserRouter basename="/">
      <Provider>
        <Switch>
          <Route path="/404" exact component={NotFound} />
          <Route path="/" component={Home} />
        </Switch>
      </Provider>
    </BrowserRouter>
  )
}

export default App
