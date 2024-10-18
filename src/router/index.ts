import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/Footer.vue'
import Footer from '../views/Footer.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'Login'
  },
  {
    path: '/Profile',
    name: "Profile",
    component: () => import('@/views/Profile/index.vue')
  },
  {
    path: '/Login',
    name: "Login",
    component: () => import('@/views/Login/index.vue')
  },
 
  {
    path: '/tabs/',
    component: Footer,
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue')
      },
  
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
