// router.ts
import { createRouter, createWebHashHistory } from "vue-router";
import DatabaseView from "./components/DatabaseView.vue"; // Assuming you have a DatabaseView
import Contributions from "./components/Contributions.vue"; // Assuming you have a Contributions.vue component

const routes = [
  { path: "/", component: DatabaseView },
  { path: "/contributions", component: Contributions },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
