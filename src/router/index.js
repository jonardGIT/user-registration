import { createRouter, createWebHashHistory } from 'vue-router'
import Contact  from '../views/Contact.vue'
import Registration  from '../views/Registration.vue'
import Verification  from '../views/Verification.vue'
import Login  from '../views/Login.vue'
import Success  from '../views/Success.vue'

const routes = [
  {
    path: '/',
    name: "Registration Page",
    component: Registration
  },
  {
    path: '/verification',
    name: "Verification Page",
    component: Verification
  },
  {
    path: '/login',
    name: "Login Page",
    component: Login
  },
  {
    path: '/success',
    name: "Success page",
    component: Success
  },
  {
    path: "/contact",
    name: "Contact",
    component:  Contact
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
