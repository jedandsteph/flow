import { createRouter, createWebHashHistory } from 'vue-router'

// Lazy-load ang views para mabilis ang unang load.
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeRomantic.vue'),
  },
  {
    path: '/packages',
    name: 'packages',
    component: () => import('@/views/PackagesView.vue'),
  },
  // --- Live Demos ---
  {
    path: '/demo/wedding',
    name: 'demo-wedding',
    component: () => import('@/views/demos/WeddingDemo.vue'),
  },
  {
    path: '/demo/debut',
    name: 'demo-debut',
    component: () => import('@/views/demos/DebutDemo.vue'),
  },
  {
    path: '/demo/birthday',
    name: 'demo-birthday',
    component: () => import('@/views/demos/BirthdayDemo.vue'),
  },
  // Dynamic invitation slug: #/invite/maria-at-juan
  {
    path: '/invite/:slug',
    name: 'invite',
    component: () => import('@/views/InviteView.vue'),
    props: true,
  },
  // Catch-all → 404 page (hindi server error)
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
