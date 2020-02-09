import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Main from '../views/Main.vue'
import Header from '../components/Header.vue'
import Message from '../views/Message.vue'
import Page from '../views/Page.vue'
import About from '../views/About.vue'
import Singblog from '../views/Singblog.vue'
import Footer from '../components/Footer.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/index'
  },
  {
    path: '/index',
    name: 'index',
    components:{
      header:Header,
      main:Home,
      footer:Footer
    }
  },
  {
    path: '/about',
    name: 'about',
    components:{
      header:Header,
      main:About
    }
  },
  {
    path: '/message',
    name: 'message',
    components:{
      header:Header,
      main:Message
    }
  },
  {
    path: '/page',
    name: 'page',
    components:{
      header:Header,
      main:Page
    }
  },
  {
    path:'/page/:id',
    components:{
      header:Header,
      main:Singblog
    },
    props:true
  }
// {
// path: '/about',
// name: 'about',
//   //   // route level code-splitting
//   //   // this generates a separate chunk (about.[hash].js) for this route
//   //   // which is lazy-loaded when the route is visited.
// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//  }
]

const router = new VueRouter({
  routes
})

export default router
