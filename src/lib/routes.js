import React from 'react'
import { Home, Authentication, Workshop } from '../views'

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
    component: () => (<Authentication registering={true} />)
  },
  {
    path: '/workshop',
    exact: false,
    private: true,
    component: Workshop
  }
]
