<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark w-100">
    <a class="logo" href=""><img src="@/assets/car-logo.svg" alt=""/></a>

    <form class="form-inline my-2 my-lg-0 search-form">
      <input
        class="form-control mr-sm-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn" type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
          />
          <path
            fill-rule="evenodd"
            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
          />
        </svg>
      </button>
    </form>
    <form class="form-inline user-panel">
      <a><b>Admin</b></a>
      <a class="user-logo"><img src="@/assets/car-logo.svg" alt=""/></a>
      <button type="button" class="btn btn-outline-light" @click="logout()">
        Logout
      </button>
    </form>
  </nav>
</template>
<script>
export default {
  name: "topNavbar",
  methods: {
    logout() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.logo {
  width: 50px;
}
.user-logo {
  color: white;
  width: 50px;
  margin: 0 20px 0 20px;
}
.user-panel {
  color: white;
}
.bg-dark {
  background: #ef6848 !important;
}
.search-form {
  margin: 0 auto;
}

.search-form input {
  border-radius: 30px;
}

.search-form button {
  width: 40px;
  margin-left: -48px;
  border-radius: 30px;
  background: orange;
}
</style>
