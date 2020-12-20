<template>
  <!-- d-* hiddens the Sidebar in smaller devices. Its itens can be kept on the Navbar 'Menu' -->
  <!-- Bootstrap List Group -->
  <ul class="list-group sticky-top sticky-offset">
    <!-- Separator with title -->
    <!-- /END Separator -->
    <!-- Menu with submenu -->
    <a
      href="#submenu1"
      data-toggle="collapse"
      aria-expanded="false"
      class="bg-dark list-group-item list-group-item-action flex-column align-items-start"
    >
      <div class="d-flex  justify-content-start align-items-center">
        <span class="fa fa-dashboard fa-fw"></span>
      </div>
    </a>
    <a
      href="#submenu2"
      data-toggle="collapse"
      aria-expanded="false"
      class="bg-dark list-group-item list-group-item-action flex-column align-items-start"
    >
      <div class="d-flex  justify-content-start align-items-center">
        <span class="fa fa-user fa-fw "></span>
        <span class="submenu-icon ml-auto"></span>
      </div>
    </a>
    <!-- Submenu content
    <div id="submenu2" class="collapse sidebar-submenu">
      <a
        href="#"
        class="list-group-item list-group-item-action bg-dark text-white"
      >
      </a>
      <a
        href="#"
        class="list-group-item list-group-item-action bg-dark text-white"
      >
      </a>
    </div> -->
    <a href="#" class="bg-dark list-group-item list-group-item-action">
      <div class="d-flex  justify-content-start align-items-center">
        <span class="fa fa-tasks fa-fw "></span>
      </div>
    </a>
    <!-- Separator with title -->
    <!-- /END Separator -->
    <a href="#" class="bg-dark list-group-item list-group-item-action">
      <div class="d-flex  justify-content-start align-items-center">
        <span class="fa fa-calendar fa-fw "></span>
      </div>
    </a>
    <a href="#" class="bg-dark list-group-item list-group-item-action">
      <div class="d-flex  justify-content-start align-items-center">
        <span class="fa fa-envelope-o fa-fw "></span>
      </div>
    </a>
    <a href="#" class="bg-dark list-group-item list-group-item-action">
      <div class="d-flex  justify-content-start align-items-center">
        <span class="fa fa-question fa-fw "></span>
      </div>
    </a>
    <a
      href="#"
      data-toggle="sidebar-colapse"
      class="bg-dark list-group-item list-group-item-action d-flex align-items-center"
    >
      <div class="d-flex  justify-content-start align-items-center">
        <span id="collapse-icon" class="fa fa-2x "></span>
      </div>
    </a>
  </ul>
  <!-- List Group END-->
</template>
<script>
export default {
  name: "sidebar"
};
</script>

<style scoped>
.list-group {
  width: 10vw;
}
a > div {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
div span {
  margin: 0;
  color: white;
  font-size: 40px;
}
ul {
  border-radius: 0;
}

ul > a {
  background: #161f28 !important;
  width: 6vw;
}
ul > a:focus {
  background: lightgray !important;
}
@media (max-width: 700px) {
  ul > a {
    background: #161f28 !important;
    width: 10vw;
  }
  a {
    height: 10vh;
  }
}
</style>
