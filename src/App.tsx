import { Route } from 'react-router-dom'
import Header from '@/components/header'
import NotFound from '@/pages/not-found'
import Home from './pages/home'

function App() {
  return (
    <>
      <Header />
      <Route path="/404" exact component={NotFound} />
      <Route path="/" component={Home} />
    </>
  )
}

export default App
