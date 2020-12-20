<template>
  <router-view />
</template>
<script>
export default {
  data() {
    return {
      loggedIn:
        localStorage.permissions == "admin" ||
        localStorage.permissions == "driver"
    };
  }
};
var a =
  localStorage.permissions == "admin" || localStorage.permissions == "driver";
console.log(a);
console.log(localStorage.premissions == "admin");
console.log(localStorage.permissions == "driver");
</script>
<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
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
