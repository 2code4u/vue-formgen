import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import FirstForm from '@/components/examples/FirstForm.vue'
import SecondForm from '@/components/examples/SecondForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
      children: [
        {
          path: '/first',
          name: 'First',
          component: FirstForm,
        },
        {
          path: '/second',
          name: 'Second',
          component: SecondForm,
        },
      ]
    },
  ],
})

export default router
