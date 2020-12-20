<template>
  <settingsAdmin v-if="isAdmin" />
  <pageNotFound v-if="!isAdmin" />
</template>
<script>
import settingsAdmin from "@/views/Admin/SettingsAdmin.vue";
import pageNotFound from "@/components/PageNotFound.vue";

export default {
  name: "Settings View",
  components: {
    settingsAdmin,
    pageNotFound
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
