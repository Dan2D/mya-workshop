import React from 'react'
import { Home, Authentication, Workshop, Verification } from '../views'

export const routes = [
  {
    path: '/',
    exact: true,
    private: false,
    component: Home
  },
  {
    path: '/login',
    exact: false,
    private: false,
    component: Authentication
  },
  {
    path: '/register',
    exact: false,
    private: false,
    component: (props) => (<Authentication registering={true} {...props} />)
  },
  {
    path: '/workshop',
    exact: false,
    private: true,
    component: Workshop
  },
  {
    path: '/verify',
    exact: false,
    private: false,
    component: Verification
  }
]
