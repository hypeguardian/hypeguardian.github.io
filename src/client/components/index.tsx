import * as React from 'react'
import {RouteComponentProps} from 'react-router'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Async from './async'

const landingPage = () => import(/* webpackChunkName:'landing' */ './landing-page')
const notFoundPage = () => import(/* webpackChunkName:'404-page' */ './404-page')

const Router:React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`/`} render={(routeComponentProps:RouteComponentProps<any>) =>
          <Async module={landingPage} props={routeComponentProps}/>
        }/>
        <Route path='*' render={(routeComponentProps:RouteComponentProps<any>) =>
          <Async module={notFoundPage} props={routeComponentProps}/>
        }/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router