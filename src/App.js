import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import { routes } from './lib/routes'
import { PrivateRoute, TopNav, SideNav } from './components'
import CssBaseline from '@material-ui/core/CssBaseline'
import withStyles from '@material-ui/core/styles/withStyles'
import './App.css'

const styles = theme => ({
  main: {
    height: 'calc(100% - 88px)',
    display: 'flex'
  },
  content: {
    flex: '1 1 auto',
    overflow: 'hidden'
  }
})

class App extends Component {
  render () {
    const { classes } = this.props
    return (
      <Router>
        <div className="App">
          <CssBaseline />
          <TopNav />
          <main className={classes.main}>
            <SideNav />
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

export default withStyles(styles)(App)
