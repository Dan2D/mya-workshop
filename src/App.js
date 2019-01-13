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
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <CssBaseline />
          <AppBar position="fixed" color="default">
            <Toolbar>
              <Typography variant="h6" color="secondary">
                Photos
              </Typography>
            </Toolbar>
          </AppBar>
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
