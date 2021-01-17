<template>
  <div
    class="d-flex align-items-center"
    style="background:#58B0E0;"
    v-if="isInfoOpen"
  >
    <h1 class="text-white ml-2 my-auto py-2 font-weight-bold display-4">
      Drivers
    </h1>
  </div>
  <br />
  <div class="d-flex">
    <div class="mr-auto my-auto w-75">
      <div class="input-group mb-4 border rounded-pill ml-md-5 ml-2 my-auto">
        <div class="input-group-prepend border-0">
          <button
            id="button-addon4"
            type="button"
            class="btn btn-link text-info"
          >
            <i class="fa fa-search"></i>
          </button>
        </div>
        <input
          type="search"
          placeholder="Search..."
          aria-describedby="button-addon4"
          class="form-control bg-none border-0"
        />
      </div>
    </div>
  </div>
  <div class="row ml-22 mx-md-4 mt-4">
    <div class="col font-weight-bold">
      Driver Number
    </div>
    <div class="col  font-weight-bold">
      Name
    </div>
    <div class="col font-weight-bold d-none d-sm-block">
      E-mail
    </div>
    <div class="col font-weight-bold d-none d-sm-block">
      Phone
    </div>
    <div class="col font-weight-bold">
      <span>
        Car Number
      </span>
    </div>
    <div class="col font-weight-bold">
        Details
    </div>
  </div>
  <div class="row mx-2 mx-md-4">
    <div class="col">
      <div
        class="card my-2"
        v-for="driver in drivers"
        :model="driver"
        :key="driver"
      >
        <div class="card-body py-md-2">
          <div class="row align-items-center">
            <div class="col font-weight-bold">
              {{ driver.id }}
            </div>
            <div class="col">{{ driver.name }}</div>
            <div class="col d-none d-sm-block">{{ driver.email }}</div>
            <div class="col d-none d-sm-block">{{ driver.phone }}</div>
            <div class="col px-0">
              <span
                class="bg-warning px-1 py-1 px-md-3 py-md-2 rounded-pill text-white"
                >{{ driver.car_number }}</span
              >
            </div>
            <div class="col align-items-center">
              <button class="btn" @click="this.$router.push('/Drivers/index')"
>
                <i class="fas fa-info fa-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center pt-3">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item px-2">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item px-2"><a class="page-link" href="#">1</a></li>
        <li class="page-item px-2"><a class="page-link" href="#">...</a></li>
        <li class="page-item px-2"><a class="page-link" href="#">10</a></li>

        <li class="page-item px-2">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Dashboard Admin",
  methods: {},
  data() {
    return {
      isInfoOpen: false,
      drivers: [
        {
          id: 1,
          name: "Jan Kowalski",
          email: "email1@gmail.com",
          phone: "123456789",
          car_number: "12"
        },
        {
          id: 1,
          name: "Jan Kowalski",
          email: "email1@gmail.com",
          phone: "123456789",
          car_number: "12"
        },
        {
          id: 1,
          name: "Jan Kowalski",
          email: "email1@gmail.com",
          phone: "123456789",
          car_number: "12"
        },
        {
          id: 1,
          name: "Jan Kowalski",
          email: "email1@gmail.com",
          phone: "123456789",
          car_number: "12"
        },
        {
          id: 1,
          name: "Jan Kowalski",
          email: "email1@gmail.com",
          phone: "123456789",
          car_number: "12"
        },
        {
          id: 1,
          name: "Jan Kowalski",
          email: "email1@gmail.com",
          phone: "123456789",
          car_number: "12"
        },
        {
          id: 1,
          name: "Jan Kowalski",
          email: "email1@gmail.com",
          phone: "123456789",
          car_number: "12"
        },
        {
          id: 1,
          name: "Jan Kowalski",
          email: "email1@gmail.com",
          phone: "123456789",
          car_number: "12"
        },
        {
          id: 1,
          name: "Jan Kowalski",
          email: "email1@gmail.com",
          phone: "123456789",
          car_number: "12"
        },
        {
          id: 1,
          name: "Jan Kowalski",
          email: "email1@gmail.com",
          phone: "123456789",
          car_number: "12"
        }
      ]
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
};
</script>
