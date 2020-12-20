<template>
  <div class="row">
    <div class="col-12">
      <topNavbar v-if="loggedIn" />
    </div>
  </div>
  <div class="row">
    <div class="col-1">
      <sidebar v-if="loggedIn" />
    </div>
    <div class="col-11">
      <main role="main" class="container">
        <h1>Hello</h1>
      </main>
    </div>
  </div>
</template>

<script>
import topNavbar from "@/components/topNavbar.vue";
import sidebar from "@/components/sidebar.vue";
export default {
  components: {
    topNavbar,
    sidebar
  },
  data() {
    return {
      loggedIn:
        localStorage.permissions == "admin" ||
        localStorage.permissions == "driver"
    };
  },
  name: "Home",
  props: {
    msg: String
  }
};
</script>
