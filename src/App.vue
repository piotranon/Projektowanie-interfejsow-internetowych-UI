<template>
  <header v-if="isLoggedIn">
    <Navbar :key="$route.path" />
    <Sidebar :key="$route.path" />
  </header>

  <div class="wrapper">
    <div :class="{ main: checkLogin() }">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navigation/Navbar.vue";
import Sidebar from "@/components/Navigation/Sidebar.vue";
export default {
  components: { Navbar, Sidebar },
  data() {
    return {
      isLoggedIn: false,
    };
  },
  mounted() {
    this.checkLogin();
  },
  watch: {
    $route(to) {
      // clearing permissions if going to login page
      if (to.fullPath === "/login") localStorage.permissions = null;
      this.checkLogin();
    },
  },
  methods: {
    checkLogin() {
      if (
        localStorage.permissions == "admin" ||
        localStorage.permissions == "driver"
      )
        this.isLoggedIn = true;
      else this.isLoggedIn = false;
      return this.isLoggedIn;
    },
  },
};
</script>
<style>
@media only screen and (min-width: 991px) {
  .main {
    width: calc(100% - 75px);
    position: absolute;
    left: 75px;
  }
}
.wrapper:before {
  height: 55px;
  content: "";
  display: block;
}
#app {
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body.auth {
  height: 100vh;
  background: rgb(255, 156, 81);
  background: linear-gradient(
    0deg,
    rgba(255, 156, 81, 1) 0%,
    rgba(239, 104, 72, 1) 100%
  );
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
