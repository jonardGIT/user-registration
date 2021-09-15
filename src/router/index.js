import { createRouter, createWebHashHistory } from 'vue-router'
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
    //Prevent Access if the token is not present generated when a user registers
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
    //Prevent Access if the  user is not  authenticated
    beforeEnter: (to, from, next) =>  {
      if(store.state.authenticated == false){
        next({ name: 'Login' });
      } else {
        next();
      }
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
