import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import { routes } from './lib/routes'
import { PrivateRoute, TopNav } from './components'
import { mainStyle } from './styles/materialStyles'
import CssBaseline from '@material-ui/core/CssBaseline'
import withStyles from '@material-ui/core/styles/withStyles'
import './App.css'

class App extends Component {
  render () {
    const { classes } = this.props
    return (
      <Router>
        <div className="App">
          <CssBaseline />
          <TopNav />
          <main className={classes.main}>
            <div className={classes.content}>
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
          </main>
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(mainStyle)(App)
