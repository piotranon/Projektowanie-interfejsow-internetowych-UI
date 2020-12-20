<template>
  <vehiclesAdmin v-if="isAdmin" />
  <vehicleDriver v-if="!isAdmin" />
</template>
<script>
import vehiclesAdmin from "@/views/Admin/VehiclesAdmin.vue";
import vehicleDriver from "@/views/Driver/VehicleDriver.vue";

export default {
  name: "Vehicles View",
  components: {
    vehiclesAdmin,
    vehicleDriver
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
