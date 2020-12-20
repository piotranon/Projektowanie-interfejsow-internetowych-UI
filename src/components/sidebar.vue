<template>
  <adminSidebar v-if="isAdmin" />
  <!-- <driverSidebar v-if="!isAdmin" /> -->
</template>
<script>
import adminSidebar from "@/components/Admin/SidebarAdmin.vue";
// import driverSidebar from "@/components/Driver/Navbar.vue";
export default {
  name: "Navbar",
  components: {
    adminSidebar
    // driverSidebar
  },
  data() {
    return {
      isAdmin: false
    };
  },
  mounted() {
    if (window.localStorage.permissions === "admin") this.isAdmin = true;
  }
};
</script>
