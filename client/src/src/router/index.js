import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta:{
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
    meta:{
      requiresGuest: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/addcar',
    name: 'addcar',
    component: () => import('../views/AddCar.vue'),
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/cars',
    name: 'cars',
    component: () => import('../views/Cars.vue'),
    meta:{
      requiresAuth: true
    }
  },
  
  {
    path: '/addrental',
    name: 'addrental',
    component: () => import('../views/AddRental.vue'),
    meta:{
      requiresAuth: true
    }
}
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!store.getters.isLoggedIn){
      // Redirect to the login page
      next('/login');
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)){
    if(store.getters.isLoggedIn){
      // Redirect to the login page
      next('/profile');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
