import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Event from './components/Event.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/index/taro',
    },
    {
      path: '/index/:name',
      name: 'index',
      component: HelloWorld,
      props: true,
    },
    {
      path: '/event/:name',
      name: 'event',
      component: Event,
      props: true,
    },
  ]
})
