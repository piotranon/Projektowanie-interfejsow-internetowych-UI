<template>
  <!-- ADMIN -->
  <!-- First version -->
  <!-- <nav
    class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end fixed-top d-flex justify-content-between"
  >
    <div>
      <button class="btn bg-transparent navbar-brand d-none d-lg-block">
        <i class="fas fa-car fa-2x" style="color:black;"></i>
      </button>
      <button
        class="btn bg-transparent navbar-brand d-lg-none mr-0"
        @click="openMenu()"
      >
        <i class="fas fa-bars fa-2x"></i>
      </button>
    </div>
    <div>
      <div class="d-none d-md-block">
        <input
          type="text"
          class="form-control text-white"
          placeholder="Search ..."
        />
      </div>
      <div class="d-md-none">
        <h3 class="my-auto text-white">{{ currentRoute }}</h3>
      </div>
    </div>
    <div>
      <div>
        <ul class="my-auto list-group list-group-horizontal">
          <li class="list-item my-auto d-none d-md-block">
            <h3 class="my-auto text-white">Admin</h3>
          </li>
          <li class="list-item my-auto">
            <button class="btn bg-transparent">
              <i class="fas fa-user-circle fa-2x" style="color:black"></i>
            </button>
          </li>
          <li class="list-item my-auto d-none d-md-block">
            <button
              type="button"
              class="btn btn-outline-light font-weight-bold"
              @click="logout()"
            >
              Logout
            </button>
          </li>
          <li class="list-item my-auto d-md-none">
            <button class="btn bg-transparent">
              <i class="fas fa-sign-out-alt fa-2x" style="color:black;"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
  <!-- Second version -->
  <!-- <nav class="bg-dark navbar-dark fixed-top">
    <div class="row" style="height:63px;">
      <div class="col my-auto d-flex justify-content-start">
        <button
          class="btn bg-transparent navbar-brand d-none d-lg-block my-auto"
        >
          <img src="@/assets/car-logo.svg" style="height:49px;width:49px" />
        </button>
        <button
          class="btn bg-transparent navbar-brand d-lg-none mr-0"
          @click="openMenu()"
        >
          <i class="fas fa-bars fa-2x"></i>
        </button>
      </div>
      <div class="col my-auto d-flex justify-content-center">
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
      <div class="col my-auto mr-2 d-flex justify-content-end">
        <ul class="my-auto list-group list-group-horizontal">
          <li class="list-item my-auto d-none d-md-block">
            <h3 class="my-auto text-white mr-2">Admin</h3>
          </li>
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
            <button class="btn bg-transparent px-0 ">
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
  </nav> -->
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
          <li class="list-item my-auto d-none d-md-block">
            <h3 class="my-auto text-white mr-2">Admin</h3>
          </li>
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
  name: "Navbar Admin",
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
