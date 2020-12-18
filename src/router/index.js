import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import PageNotFound from "../components/PageNotFound.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/:catchAll(.*)",
    component: PageNotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (isAuthenticated()) {
    console.log("Zalogowany");
    next();
  }
  console.log("Nie Zalogowany");
  if (to.fullPath !== "/login" && to.fullPath !== "/register") {
    next("/login");
  } else next();
});

function isAuthenticated() {
  return (
    localStorage.permissions === "admin" ||
    localStorage.permissions === "driver"
  );
}

export default router;
