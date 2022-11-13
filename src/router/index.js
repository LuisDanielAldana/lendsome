import Vue from "vue";
import VueRouter from "vue-router";
// import HomeComp from "../components/HomeComponent.vue";
import ChatView from "../views/ChatView"
import HomeView from "@/views/HomeView";
import LoginView from "@/views/LoginView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
    // children: [
    //   {
    //     path: "chat",
    //     name: "ChatView",
    //     component: ChatView
    //   },
    // ],
  },
  {
    path: "/home",
    name: "home",
    component: HomeView
  },
  {
    path: "/chat",
    name: "ChatView",
    component: ChatView
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
