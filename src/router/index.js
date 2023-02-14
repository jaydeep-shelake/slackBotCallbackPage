import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../views/HomePage.vue";
import SearchVue from "../views/Search.vue";
import PostPage from "../views/Posts.vue";
import CallbackPage from "../views/CallbackPage.vue";
import AvtarColor from "@/views/AvtarColors.vue";
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
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
