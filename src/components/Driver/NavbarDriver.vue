<template>
  <!-- DRIVER -->
  <!-- Third version -->
  <nav class="bg-dark navbar-dark fixed-top" style="max-height:55px">
    <div
      class="d-flex justify-content-between align-items-center h-100"
      style="max-height:55px"
    >
      <div class="">
        <button
          class="btn bg-transparent navbar-brand d-none d-lg-block my-auto"
        >
          <img src="@/assets/car-logo.svg" style="height:49px;width:49px" />
        </button>
        <button
          class="btn bg-transparent navbar-brand d-lg-none ml-2"
          @click="openMenu()"
        >
          <i class="fas fa-bars fa-2x"></i>
        </button>
      </div>
      <div>
        <div class="d-none d-md-block">
          <input
            type="text"
            class="form-control text-dark"
            placeholder="Search ..."
          />
        </div>
        <div class="d-md-none">
          <h3 class="my-auto text-white">{{ currentRoute }}</h3>
        </div>
      </div>
      <div class="mr-2">
        <ul class="my-auto list-group list-group-horizontal">
          <li class="list-item my-auto">
            <button class="btn bg-transparent px-0">
              <img
                class="user-logo h-100 d-inline-block mr-2"
                src="@/assets/admin-logo.svg"
              />
            </button>
          </li>
          <li class="list-item my-auto d-none d-md-block">
            <button
              type="button"
              class="btn bg-transparent px-0"
              @click="logout()"
            >
              <h3 class="my-auto text-white font-weight-light">Logout</h3>
            </button>
          </li>
          <li class="list-item my-auto d-md-none">
            <button class="btn bg-transparent px-0" @click="logout()">
              <img
                class="user-logo h-100 d-inline-block mr-2"
                src="@/assets/logout.svg"
                alt=""
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar Driver",
  methods: {
    logout() {
      this.$router.push("/login");
    },
    openMenu() {
      localStorage.isSideMenuOpen = true;
      window.dispatchEvent(
        new CustomEvent("toggleSideMenu", {
          data: localStorage.isSideMenuOpen
        })
      );
      console.log("sended event");
    }
  },
  data() {
    return {
      currentRoute: ""
    };
  },
  mounted() {
    this.currentRoute = this.$router.currentRoute._value.name;
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
input {
  border-radius: 45px;
}
input:focus,
input:hover,
input:active {
  outline: none !important;
  box-shadow: none;
}
button:focus,
button:hover,
input:active {
  outline: none !important;
  box-shadow: none;
}
.user-logo {
  max-height: 40px;
}
</style>
