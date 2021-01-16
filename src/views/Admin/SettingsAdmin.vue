<template>
  <div
    class="d-flex align-items-center"
    style="background:#58B0E0;"
    v-if="isInfoOpen"
  >
    <h1 class="text-white ml-2 my-auto py-2 font-weight-bold display-4">
      Settings
    </h1>
  </div>
  <div class="d-flex align-items-center" v-if="isInfoOpen">
    <h1 class="ml-2 my-auto mx-auto py-2 font-weight-bold display-4">
      Hi Jessie
    </h1>
  </div>
  <div class="container-fluid custom-container">
    <div class="row mr-5 ml-5">
      <div class="col-lg-8 mt-5">
        <form>
          <h3 class="float-left">Username</h3>
          <div class="input-group mb-3 custom-padding">
            <input
              type="text"
              class="form-control"
              placeholder="Jessie13863"
              readonly
            />
          </div>
          <h3 class="float-left">Password</h3>
          <div class="input-group mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Enter password"
              value="********"
            />
            <div class="input-group-append">
              <button class="btn btn-orange" type="button">
                <i class="text-white fas fa-pen ml-3 mr-3"></i>
              </button>
            </div>
          </div>
          <h3 class="float-left">Email</h3>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Enter email"
              value="jessie@gmail.com"
            />
            <div class="input-group-append">
              <button class="btn btn-orange" type="button">
                <i class="text-white fas fa-pen ml-3 mr-3"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-lg-4">
        <div class="item h-100">
          <a href="#">
            <span class="notify-badge rounded-circle"
              ><i class="fas fa-pen-square icon-margin"></i
            ></span>
          </a>
          <img class="h-100" src="@/assets/admin-logo.svg" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dashboard Admin",
  methods: {},
  data() {
    return {
      isInfoOpen: false,
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
  },
};
</script>

<style>
.custom-padding {
  padding-right: 80%;
}
.item {
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
  display: inline-block;
}
.notify-badge {
  position: absolute;
  right: -10px;
  bottom: 10px;
  background: orange;
  text-align: center;
  color: white;
  padding: 20px 10px;
  font-size: 25px;
}
.icon-margin {
  margin-left: 20px;
  margin-right: 20px;
}
.btn-orange {
  background: orange !important;
}

@media (max-width: 576px) {
  .icon-margin {
    margin: 0;
    position: absolute;
    top: 11px;
    right: 11px;
  }
  .custom-padding {
    padding-right: 0%;
  }
  .notify-badge {
    font-size: 20px;
    height: 20px;
    width: 40px;
  }
}

@media (min-width: 768px) {
}
</style>
