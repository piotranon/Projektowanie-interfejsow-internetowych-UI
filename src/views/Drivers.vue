<template>
  <driversAdmin v-if="isAdmin" />
  <driverDriver v-if="!isAdmin" />
</template>
<script>
import driversAdmin from "@/views/Admin/DriversAdmin.vue";
import driverDriver from "@/views/Driver/DriverDriver.vue";

export default {
  name: "Drivers View",
  components: {
    driversAdmin,
    driverDriver
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
