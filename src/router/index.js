import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index.vue";
import presale from "../views/presale/index.vue";
import airdrop from "../views/airdrop/index.vue";
import promo from "../views/promo/index.vue";
import pledge from "../views/pledge/index.vue";
import whiteBook from "../views/whiteBook/index.vue";




Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/presale",
    name: "Presale",
    component: presale,
  },
  {
    path: "/airdrop",
    name: "Airdrop",
    component: airdrop,
  },
  {
    path: "/promo",
    name: "Promo",
    component: promo,
  },
  {
    path: "/pledge",
    name: "Pledge",
    component: pledge,
  },
  // {
  //   path: "/whiteBook",
  //   name: "whiteBook",
  //   component: whiteBook,
  // }
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
