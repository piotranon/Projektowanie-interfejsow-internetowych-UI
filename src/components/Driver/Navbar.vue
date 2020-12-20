<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end">
    <a class="navbar-brand" href=""
      ><i class="fas fa-car fa-2x" style="color:black"></i
    ></a>
    <div class="mx-auto d-none d-md-block">
      <input type="text" class="form-control" placeholder="Search ..." />
    </div>
    <div class="ml-auto">
      <ul class="my-auto list-group list-group-horizontal">
        <li class="list-item my-auto">
          <h3 class="my-auto text-white">{{ $route.url }}</h3>
        </li>
        <li class="list-item my-auto">
          <button class="btn bg-transparent">
            <i class="fas fa-user-circle fa-2x" style="color:black"></i>
          </button>
        </li>
        <li class="list-item my-auto d-none d-md-block">
          <button type="button" class="btn btn-outline-light" @click="logout()">
            Logout
          </button>
        </li>
        <li class="list-item my-auto d-md-none">
          <button class="btn bg-transparent">
            <i class="fas fa-sign-out-alt fa-2x" style="color:black"></i>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar Driver",
  methods: {
    logout() {
      this.$router.push("/login");
    }
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
.search-form button {
  width: 40px;
  margin-left: -48px;
  border-radius: 30px;
  background: orange;
}
</style>
