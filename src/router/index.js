import { createRouter, createWebHashHistory } from 'vue-router'
import Contact  from '../views/Contact.vue'
import Registration  from '../views/Registration.vue'
import Verification  from '../views/Verification.vue'
import Login  from '../views/Login.vue'
import Success  from '../views/Success.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: "Registration Page",
    component: Registration
  },
  {
    path: '/verification',
    name: "Verification Page",
    component: Verification,
    beforeEnter: (to, from, next) =>  {
      if(store.state.access_token == ''){
        next('/');
      } else {
        next();
      }
    }

  },
  {
    path: '/login',
    name: "Login",
    component: Login
  },
  {
    path: '/success',
    name: "Success page",
    component: Success,
    beforeEnter: (to, from, next) =>  {
      if(store.state.authenticated == false){
        next({ name: 'Login' });
      } else {
        next();
      }
    }
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
