import { createRouter, createWebHistory } from 'vue-router'
import auth from '@/firebase'
const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main', auth: true, title: 'profile' },
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    meta: { layout: 'empty' },
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    meta: { layout: 'empty' },
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/Tiket',
    name: 'Tiket',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/TiketView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const user = auth.currentUser
  const requireAuth = to.matched.some(Record => Record.meta.auth)
  if (requireAuth && !user) {
    next('/Login')
    this.$com('войдите в ситему')
  } else {
    next()
  }
})

export default router
