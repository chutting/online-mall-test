import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFound from '@/pages/not-found'
import Home from './pages/home'

function App() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/404" exact component={NotFound} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
