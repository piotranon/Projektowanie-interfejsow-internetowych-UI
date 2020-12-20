<template>
  <adminNavbar v-if="isAdmin" />
  <driverNavbar v-if="!isAdmin" />
</template>
<script>
import adminNavbar from "@/components/Admin/Navbar.vue";
import driverNavbar from "@/components/Driver/Navbar.vue";
export default {
  name: "Navbar",
  components: {
    adminNavbar,
    driverNavbar
  },
  data() {
    return {
      isAdmin: false
    };
  },
  mounted() {
    if (localStorage.permissions === "admin") this.isAdmin = true;
  }
};
</script>
<style scoped>
.bg-dark {
  background: #ef6848 !important;
}
.list-group li {
  list-style-type: none;
}
.search-form button {
  width: 40px;
  margin-left: -48px;
  border-radius: 30px;
  background: orange;
}
</style>
