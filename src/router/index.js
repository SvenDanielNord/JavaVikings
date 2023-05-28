import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FightView from '../views/FightView.vue'
import GearView from '../views/GearView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/fight',
      name: 'fight',
      component: FightView
    },
    {
     path: '/gear',
     name: 'gear',
     component: GearView
    },
  ]
})

router.beforeEach((to, from, next) => {
 $(".modal-backdrop").remove();
 next();
});

export default router