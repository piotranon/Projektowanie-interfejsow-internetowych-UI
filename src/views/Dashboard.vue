<template>
  <dashboardAdmin v-if="isAdmin" />
  <dashboardDriver v-if="!isAdmin" />
</template>
<script>
import dashboardAdmin from "@/views/Admin/DashboardAdmin.vue";
import dashboardDriver from "@/views/Driver/DashboardDriver.vue";

export default {
  name: "Dashboard View",
  components: {
    dashboardAdmin,
    dashboardDriver
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
