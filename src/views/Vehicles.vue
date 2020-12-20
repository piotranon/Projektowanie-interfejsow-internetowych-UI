<template>
  <header>
    <Navbar :key="$route.path" />
  </header>

  <div class="wrapper">
    <main>
      <!-- <router-view></router-view> -->
      <div>
        <h1>Vehicles View</h1>
      </div>
    </main>
    <nav>
      <sidebar></sidebar>
    </nav>
  </div>
</template>
<script>
import Navbar from "@/components/navbar.vue";
export default {
  components: { Navbar }
};
</script>
