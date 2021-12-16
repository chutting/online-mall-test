import { Redirect, Route, Switch } from 'react-router-dom'
import { routerConfig } from '@/routes'

const Home = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/commodity/1" />
      </Route>
      {routerConfig.map((route) => {
        return <Route exact path={route.path} key={route.name} component={route.component} />
      })}
      <Redirect to="/404" />
    </Switch>
  )
}

export default Home
