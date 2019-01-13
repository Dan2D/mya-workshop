import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import { routes } from './lib/routes'
import { PrivateRoute } from './components'
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <CssBaseline />
          <Switch>
            {routes.map((route, index) => {
              return route.private
                ? <PrivateRoute key={index} path={route.path} exact={route.exact} component={route.component} />
                : <Route key={index} path={route.path} exact={route.exact} component={route.component} />
            })}
            { /* Catch all route */ }
            <Route component={() => <Redirect to='/' />} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
