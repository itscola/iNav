import { createRouter, createWebHashHistory} from 'vue-router'
import MainPageVue from '../pages/MainPage.vue';
import LoginPageVue from '@/pages/LoginPage.vue';


const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPageVue
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPageVue
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router