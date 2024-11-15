import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
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
    path: '/Index',
    name: "Index",
    component: () => import('@/views/Index/index.vue')
  },
  {
    path: '/Card',
    name: "Card",
    component: () => import('@/views/Card/index.vue')
  },
  {
    path: '/Modal',
    name: "Modal",
    component: () => import('@/views/Modal/Example.vue')
  },
  {
    path: '/Reorder',
    name: "Reorder",
    component: () => import('@/views/Reorder/index.vue')
  },
  {
    path: '/Float',
    name: "Float",
    component: () => import('@/views/Float/float.vue')
  },
  {
    path: '/swiper',
    name: "swiper",
    component: () => import('@/views/swiper/index.vue')
  },
  {
    path: '/swiper-loop',
    name: "swiper-loop",
    component: () => import('@/views/swiper-loop/index.vue')
  },
  {
    path: '/localstorage',
    name: "localstorage",
    component: () => import('@/views/localstorage/index.vue')
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
  },
  {
    path: '/tabs1/',
    component: Footer,
    children: [
      {
        path: '/Card',
        component: () => import('@/views/Card/index.vue')
      },
  
    ]
  },
  {
    path: '/tabs/',
    component: Footer,
    children: [
      {
        path: '/Modal',
        component: () => import('@/views/Modal/Example.vue')
      },
  
    ]
  },
  {
    path: '/tabs/',
    component: Footer,
    children: [
      {
        path: '/Reorder',
        component: () => import('@/views/Reorder/index.vue')
      },
  
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
