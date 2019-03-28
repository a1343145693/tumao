import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '../pages/index'
import register from '../pages/register'
import login from '../pages/login.vue'
import category from '../pages/category.vue'
import busy from '../pages/Busy.vue'
import buusstu from '../pages/buusstu.vue'
import axios from 'axios'
import demo from '../pages/demobuys.vue'
import busy_new from '../pages/busy_new.vue'
import user from '../pages/user.vue'
import product from '../pages/product.vue'

/*import api from '../../config/api.config.js'
*/
/*axios.defaults.baseURL = api.baseUrl;*/
Vue.prototype.axios = axios;
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
    	path:'/index',
    	name:'index',
    	component:index
    },{
    	path:'/register',
    	name:"register",
    	component:register
    },{
    	path:'/login',
    	name:'login',
    	component:login
    },{
    	path:'/category',
    	name:'category',
    	component:category
    },{
    	path:'/busy',
    	name:'busy',
    	component:busy
    },{
    	path:'/buusstu',
    	name:'buusstu',
    	component:buusstu
    },{
    	path:'/demo',
    	name:'demo',
    	component:demo
    },{
    	path:'/busy_new',
    	name:'busy_new',
    	component:busy_new
    },{
    	path:'/user',
    	name:'user',
    	component:user
    },{
    	path:'/product',
    	name:'product',
    	component:product
    }
  ]
})
