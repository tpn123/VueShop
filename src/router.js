import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
//admin routes
import Admin from "./views/Admin.vue";
import Orders from "./views/orders.vue";
import Overview from "./views/overview.vue";
import {fb} from './firebase';
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
      {
          path: "/home",name: "Homepage",component: Home
      },
      {
          path: "/product",name: "product",component: () =>import(/* webpackChunkName: "about" */ "./views/Productpage.vue")
      },
      {path: "/admin",name: "Admin",component:Admin,meta:{requiresAuth:true},children:[
              {path: "/admin/overview",name: "Overview",component:Overview},
              {path: "/admin/orders",name: "Orders",component:Orders},
              {path: "/admin/product",name: "Productdetails",component:Orders}
          ]},

  ]
});
router.beforeEach((to, from, next) => {

    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = fb.auth().currentUser

    if (requiresAuth && !currentUser) {
        next('/')
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
})

export default router;
