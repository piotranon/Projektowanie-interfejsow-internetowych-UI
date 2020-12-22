<template>
  <div
    class="d-flex align-items-center"
    style="background:#58B0E0;"
    v-if="isInfoOpen"
  >
    <h1 class="text-white ml-2 my-auto py-2 font-weight-bold display-4">
      Vehicles
    </h1>
  </div>
  <h1>Vehicles ADMIN</h1>
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
          placeholder="What're you searching for?"
          aria-describedby="button-addon4"
          class="form-control bg-none border-0"
        />
      </div>
    </div>
    <div class="my-auto mx-2 mx-md-4">
      <button type="button" class="btn bg-transparent">
        <i class="fas fa-plus fa-3x text-success"></i>
      </button>
    </div>
  </div>
  <div class="row mx-2 mx-md-4 mt-4 align-items-center">
    <div class="col font-weight-bold">
      Car number <i class="fas fa-angle-down"></i>
    </div>
    <div class="col font-weight-bold">
      Car status <i class="fas fa-angle-down"></i>
    </div>
    <div class="col font-weight-bold d-none d-sm-block">
      Total distance <i class="fas fa-angle-down"></i>
    </div>
    <div class="col font-weight-bold d-none d-md-block">
      <span> Today distance <i class="fas fa-angle-down"></i> </span>
    </div>
    <div class="col-1 font-weight-bold">
      <span class=" d-none d-md-block">
        Details <i class="fas fa-angle-down"></i>
      </span>
    </div>
    <div class="col-1 font-weight-bold">
      <span class=" d-none d-md-block">
        Edit <i class="fas fa-angle-down"></i>
      </span>
    </div>
    <div class="col-1 font-weight-bold">
      <span class=" d-none d-md-block">
        Delete <i class="fas fa-angle-down"></i>
      </span>
    </div>
  </div>
  <div class="row mx-2 mx-md-4">
    <div class="col">
      <div class="card my-2" v-for="car in cars" :model="car" :key="car">
        <div class="card-body py-md-2">
          <div class="row align-items-center">
            <div class="col col">
              {{ car.id }} <i class="fas fa-car-side"></i>
            </div>
            <div class="col px-0">
              <span
                class="bg-success px-1 py-1 px-md-3 py-md-2 rounded-pill text-white"
                v-if="car.status === 'In use'"
                >{{ car.status }}</span
              ><span
                class="bg-primary px-1 py-1 px-md-3 py-md-2 rounded-pill text-white"
                v-if="car.status === 'Avaible'"
                >{{ car.status }}</span
              >
              <span
                class="bg-warning px-1 py-1 px-md-3 py-md-2 rounded-pill text-white"
                v-if="car.status === 'In repair'"
                >{{ car.status }}</span
              >
              <span
                class="bg-danger px-1 py-1 px-md-3 py-md-2 rounded-pill text-white"
                v-if="car.status === 'Broken'"
                >{{ car.status }}</span
              >
            </div>
            <div class="col d-none d-sm-block">{{ car.total_distance }} km</div>
            <div class="col d-none d-md-block">{{ car.today_distance }} km</div>
            <div class="col-1 text-center">
              <i class="fas fa-info fa-lg"></i>
            </div>
            <div class="col-1 text-center">
              <i class="fas fa-cog fa-lg"></i>
            </div>
            <div class="col-1 text-center">
              <i class="fas fa-times fa-lg text-danger"></i>
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
        <li class="page-item px-2"><a class="page-link" href="#">2</a></li>
        <li class="page-item px-2"><a class="page-link" href="#">...</a></li>
        <li class="page-item px-2"><a class="page-link" href="#">9</a></li>
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
      cars: [
        {
          id: 1,
          status: "In use",
          total_distance: "13 213",
          today_distance: "0.2"
        },
        {
          id: 1,
          status: "In use",
          total_distance: "13 213",
          today_distance: "0.2"
        },
        {
          id: 1,
          status: "Avaible",
          total_distance: "13 213",
          today_distance: "0.2"
        },
        {
          id: 1,
          status: "In repair",
          total_distance: "13 213",
          today_distance: "0.2"
        },
        {
          id: 1,
          status: "Broken",
          total_distance: "13 213",
          today_distance: "0.2"
        },
        {
          id: 1,
          status: "In use",
          total_distance: "13 213",
          today_distance: "0.2"
        },
        {
          id: 1,
          status: "In use",
          total_distance: "13 213",
          today_distance: "0.2"
        },
        {
          id: 1,
          status: "In use",
          total_distance: "13 213",
          today_distance: "0.2"
        },
        {
          id: 1,
          status: "Avaible",
          total_distance: "13 213",
          today_distance: "0.2"
        },
        {
          id: 1,
          status: "In repair",
          total_distance: "13 213",
          today_distance: "0.2"
        },
        {
          id: 1,
          status: "Broken",
          total_distance: "13 213",
          today_distance: "0.2"
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
