import { Home, Login, Register, Workshop } from '../views'

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
    component: Login
  },
  {
    path: '/register',
    exact: false,
    private: false,
    component: Register
  },
  {
    path: '/workshop',
    exact: false,
    private: true,
    component: Workshop
  }
]
