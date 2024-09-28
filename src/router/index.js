import { createRouter, createWebHistory } from 'vue-router'
import CheckinQR from '@/views/CheckinQR.vue'
import CheckinFace from '@/views/CheckinFace.vue'
import CheckinEmail from '@/views/CheckinEmail.vue'
import Dashboard from '@/views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/checkin-qr',
      name: 'checkin-qr',
      component: CheckinQR,
    },
    {
      path: '/checkin-face',
      name: 'checkin-face',
      component: CheckinFace,
    },
    {
      path: '/checkin-phone',
      name: 'checkin-phone',
      component: CheckinEmail,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
  ]
})

export default router
