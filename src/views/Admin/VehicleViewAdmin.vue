<template>
  <div
    class="d-flex align-items-center"
    style="background:#58B0E0;"
    v-if="isInfoOpen"
  >
    <h1 class="text-white ml-2 my-auto py-2 font-weight-bold display-4">
      Vehicles / 12
    </h1>
  </div>
  <h1>Index</h1>
</template>
<script>
// import Swal from "sweetalert2";
// import "sweetalert2/dist/sweetalert2.min.css";
export default {
  name: "Dashboard Admin",
  methods: {
    data() {
      return {
        isInfoOpen: false
      };
    },
    mounted() {
      window.addEventListener("resize", () => {
        if (window.innerWidth <= 769) {
          this.isInfoOpen = false;
        } else {
          this.isInfoOpen = true;
        }
      });
      if (window.innerWidth <= 769) {
        this.isInfoOpen = false;
      } else {
        this.isInfoOpen = true;
      }
    }
  }
};
</script>
