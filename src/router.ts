// router.ts
import { createRouter, createWebHistory } from 'vue-router'
import DatabaseView from './components/DatabaseView.vue'  // Assuming you have a DatabaseView
import Contributions from './components/Contributions.vue'  // Assuming you have a Contributions.vue component

const routes = [
  { path: '/', component: DatabaseView },
  { path: '/contributions', component: Contributions }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
