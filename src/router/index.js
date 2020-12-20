import { createRouter, createWebHistory } from "vue-router";

import Vehicles from "../views/Vehicles.vue";
import Drivers from "../views/Drivers.vue";
import Settings from "../views/Settings.vue";
import Dashboard from "../views/Dashboard.vue";

import Login from "../components/Login.vue";
import LoginError from "../components/LoginError.vue";

import Register from "../components/Register.vue";
import RegisterSuccess from "../components/RegisterSuccess.vue";

import PageNotFound from "../components/PageNotFound.vue";

const routes = [
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
    path: "/login/error",
    name: "loginError",
    component: LoginError
  },
  {
    path: "/register/success",
    name: "registerSuccess",
    component: RegisterSuccess
  },
  {
    path: "/vehicles",
    name: "Vehicles",
    component: Vehicles
  },
  {
    path: "/drivers",
    name: "Drivers",
    component: Drivers
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
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
  if (!isAuthenticated()) {
    console.log("Nie Zalogowany");
    if (!to.fullPath.includes("/login") && !to.fullPath.includes("/register")) {
      next("/login");
    }
  } else {
    console.log("Zalogowany");
  }

  next();
});

function isAuthenticated() {
  return (
    localStorage.permissions === "admin" ||
    localStorage.permissions === "driver"
  );
}

export default router;
