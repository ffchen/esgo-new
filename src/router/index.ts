import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    component: () => import("@/views/Home.vue"),
    name: "Index",
  },
  {
    path: "/score",
    component: () => import("@/views/Score.vue"),
    name: "Score",
  },
  {
    path: "/match",
    component: () => import("@/views/Match.vue"),
    name: "Match",
  },
  {
    path: "/recommend",
    component: () => import("@/views/Recommend.vue"),
    name: "Recommend",
  },
  {
    path: "/discount",
    component: () => import("@/views/Discount.vue"),
    name: "Discount",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
