import Vue from 'vue'
import Router from 'vue-router'
import CreateContact from './views/CreateContact.vue'

Vue.use(Router)
// eslint-disable-next-line to ignore the next line.
/* eslint-disable */
export default new Router({
  routes: [
  {
     path:'/',
     component:CreateContact
  },
  {
    path:'/createContact',
    component:CreateContact
 }
  ]
})