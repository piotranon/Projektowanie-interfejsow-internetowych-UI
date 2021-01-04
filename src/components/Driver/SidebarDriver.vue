<template>
  <div class="d-none d-lg-block">
    <!-- <transition name="slide"> -->
    <div class="sidebar" style="top:55px;">
      <button
        class="btn w-100 py-3"
        :class="{ current: isCurrent('Dashboard') }"
        @click="redirectView('Dashboard')"
      >
        <img src="@/assets/dashboard.svg" class="w-100" />
      </button>

      <button
        class="btn w-100 py-3"
        :class="{ current: isCurrent('Vehicles') }"
        @click="redirectView('Vehicles')"
      >
        <img src="@/assets/car.svg" class="w-100" />
      </button>

      <button
        class="btn w-100 py-3"
        :class="{ current: isCurrent('Drivers') }"
        @click="redirectView('Drivers')"
      >
        <img src="@/assets/wheel.svg" class="w-100" />
      </button>
    </div>
    <!-- </transition> -->
  </div>
  <div class="d-lg-none">
    <!-- <transition name="slide"> -->
    <div v-if="isOpen" class="sidebar">
      <button
        @click="hideSidebar()"
        class="btn w-100 my-auto"
        style="max-height:55px"
      >
        <i class="fas fa-times fa-3x text-danger"></i>
      </button>

      <button
        class="btn w-100 py-3"
        :class="{ current: isCurrent('Dashboard') }"
        @click="redirectView('Dashboard')"
      >
        <img src="@/assets/dashboard.svg" class="w-100" />
      </button>

      <button
        class="btn w-100 py-3"
        :class="{ current: isCurrent('Vehicles') }"
        @click="redirectView('Vehicles')"
      >
        <img src="@/assets/car.svg" class="w-100" />
      </button>

      <button
        class="btn w-100 py-3"
        :class="{ current: isCurrent('Drivers') }"
        @click="redirectView('Drivers')"
      >
        <img src="@/assets/wheel.svg" class="w-100" />
      </button>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: "Sidebar Driver",
  methods: {
    hideSidebar() {
      this.isOpen = false;
    },
    redirectView(url) {
      this.$router.push("/" + url);
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  mounted() {
    window.addEventListener("toggleSideMenu", () => {
      this.isOpen = localStorage.isSideMenuOpen;
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 992) {
        //hide sideMenu
        console.log("mobile: hide SideMenu");
        this.isOpen = false;
      } else {
        console.log("desktop: default show sideMenu");
        this.isOpen = true;
      }
    });
    console.log(this.$router.currentRoute._value.name);
  },
  computed: {
    isCurrent() {
      return text =>
        text === this.$router.currentRoute._value.name ? true : false;
    }
  }
};
</script>
<style scoped>
.current {
  background: #4e5a65;
}
.sidebar {
  width: 75px;
  height: 100vh;
  background: #161f28;
  position: fixed;
  top: 0px;
  z-index: 10000;
  transition: all 1s;
}
button {
  border-radius: 0;
}
button:hover,
button:focus {
  background: #6f767d !important;
  outline: none !important;
  box-shadow: none;
}
.slide-enter-active {
  transition: all 0.3s ease-out;
}

.slide-leave-active {
  transition: all 0.3s ease-in;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-200px);
  opacity: 1;
}
</style>
