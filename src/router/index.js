import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../views/HomePage.vue";
import SearchVue from "../views/Search.vue";
import PostPage from "../views/PostsPage.vue";
import CallbackPage from "../views/CallbackPage.vue";
import AvtarColor from "@/views/AvtarColors.vue";
import BubbleGraph from "@/views/BubbleGraph.vue";
import SvgComp from "@/views/SvgComp.vue";
import TestPage from "@/views/TestPage.vue"
const routes = [
  {
    name: "HomePage",
    path: "/",
    component: HomePage,
  },
  {
    name: "SearchPage",
    path: "/search",
    component: SearchVue,
  },
  {
    name: "PostPage",
    path: "/posts",
    component: PostPage,
  },
  {
    name: "CallbackPage",
    path: "/callback",
    component: CallbackPage,
  },
  {
    name: "AvatarPage",
    path: "/avatar-color",
    component: AvtarColor,
  },
  {
    name: "BubbleGraph",
    path: "/bubble",
    component: BubbleGraph,
  },
  {
    name: "SvgPage",
    path: "/svg",
    component: SvgComp,
  },
  {
    name: "TestPage",
    path: "/test",
    component:TestPage,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
