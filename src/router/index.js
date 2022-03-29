import Vue from 'vue'
import VueRouter from 'vue-router'
import NutritionTop from '@/pages/NutritionTop.vue'
import NutritionSearch from '@/pages/NutritionSearch.vue'
import NutritionList from '@/pages/NutritionList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'NutritionTop',
    component: NutritionTop,
    props: route => ({
      totalCalolie:  route.params.totalCalolie,
      totalFat:  route.params.totalFat,
      totalProtein:  route.params.totalProtein,
      totalCarbon:  route.params.totalCarbon
    })
  },
  {
    path: '/search',
    name: 'NutritionSearch',
    component: NutritionSearch
  },
  {
    path: '/list',
    name: 'NutritionList',
    component: NutritionList
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
