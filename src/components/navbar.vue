<template>
  <adminNavbar v-if="isAdmin" />
  <driverNavbar v-if="!isAdmin" />
</template>
<script>
import adminNavbar from "@/components/Admin/NavbarAdmin.vue";
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
