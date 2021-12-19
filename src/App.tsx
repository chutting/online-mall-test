import { Redirect, Route, Switch } from 'react-router-dom'
import NotFound from '@/pages/not-found'
import BasicLayout from '@/components/basicLayout'
import { routerConfig } from './routes'

function App() {
  return (
    <BasicLayout>
      <Route path="/404" exact component={NotFound} />
      <Switch>
        {routerConfig.map((route) => {
          return <Route exact path={route.path} key={route.name} component={route.component} />
        })}
        <Redirect to="/404" />
      </Switch>
    </BasicLayout>
  )
}

export default App
