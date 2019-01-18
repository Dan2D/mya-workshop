import React from 'react'
import { Home, About, Authentication, Workshop, Verification } from '../views'
import ErrorBoundary from '../components/ErrorBoundary'

export const routes = [
  {
    path: '/',
    exact: true,
    private: false,
    component: props => <ErrorBoundary><Home {...props}/></ErrorBoundary>
  },
  {
    path: '/about',
    exact: false,
    private: false,
    component: props => <ErrorBoundary><About {...props}/></ErrorBoundary>
  },
  {
    path: '/login',
    exact: false,
    private: false,
    component: props => <ErrorBoundary><Authentication {...props}/></ErrorBoundary>
  },
  {
    path: '/register',
    exact: false,
    private: false,
    component: props => <Authentication registering={true} {...props} />
  },
  {
    path: '/workshop',
    exact: false,
    private: true,
    component: props => <ErrorBoundary><Workshop {...props}/></ErrorBoundary>
  },
  {
    path: '/verify',
    exact: false,
    private: false,
    component: props => <ErrorBoundary><Verification {...props}/></ErrorBoundary>
  }
]
