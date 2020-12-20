<template
  ><div
    class="d-flex align-items-center"
    style="background:#58B0E0;"
    v-if="isInfoOpen"
  >
    <h1 class="text-white ml-2 my-auto py-2 font-weight-bold display-4">
      Dashboard
    </h1>
  </div>
  <h1>Dashboard driver</h1>
</template>
<script>
export default {
  name: "Dashboard Admin",
  methods: {},
  data() {
    return {
      isInfoOpen: false
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 992) {
        this.isInfoOpen = false;
      } else {
        this.isInfoOpen = true;
      }
    });
    if (window.innerWidth <= 992) {
      this.isInfoOpen = false;
    } else {
      this.isInfoOpen = true;
    }
  }
};
</script>
