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
      <button
        type="button"
        class="btn bg-transparent"
        @click="this.$router.push('/Vehicles/new')"
      >
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
      <span class="d-none d-md-block">
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
  <div
    class="modal fade bd-example-modal-sm"
    tabindex="-1"
    role="dialog"
    aria-labelledby="mySmallModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Delete Vehicle</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i class="fas fa-times fa-lg"></i>
          </button>
        </div>
        <div class="modal-body">
          Are you sure that you want to delete this vehicle?
        </div>
        <div class="modal-footer">
          <div class="col">
            <button
              type="button w-100"
              class="btn btn-warning mr-auto text-white font-weight-bold"
            >
              Abort
            </button>
          </div>
          <div class="col">
            <button
              type="button w-100"
              class="btn btn-danger text-white font-weight-bold"
              data-dismiss="modal"
              @click="deletedSuccesfull()"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row mx-2 mx-md-4">
    <div class="col">
      <div class="card my-2" v-for="car in cars" :model="car" :key="car">
        <div class="card-body py-md-2">
          <div class="row align-items-center">
            <div class="col">{{ car.id }} <i class="fas fa-car-side"></i></div>
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
            <div class="col d-md-none align-self-center">
              <i class="fas fa-info fa-lg my-auto mr-1"></i>
              <i class="fas fa-cog fa-lg my-auto mr-1"></i>
              <i class="fas fa-times fa-lg text-danger my-auto mr-1"></i>
            </div>
            <div class="col-1 text-center d-none d-md-block">
              <button
                type="button"
                class="btn bg-transparent"
                @click="this.$router.push('/Vehicles/index')"
              >
                <i class="fas fa-info fa-lg"></i>
              </button>
            </div>
            <div class="col-1 text-center d-none d-md-block">
              <i class="fas fa-cog fa-lg"></i>
            </div>
            <div class="col-1 text-center d-none d-md-block">
              <button
                type="button"
                class="btn bg-transparent px-0 py-0 mx-0 my-0"
                data-toggle="modal"
                data-target=".bd-example-modal-sm"
              >
                <i class="fas fa-times fa-lg text-danger"></i>
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
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
export default {
  name: "Dashboard Admin",
  methods: {
    deletedSuccesfull() {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Vehicle Deleted Succesfully.",
        showConfirmButton: false,
        timer: 9000
      });
    }
  },
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

    if (this.$route.query.created !== undefined) {
      console.log(this.$route.query.created + " = value");
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Vehicle Created Succesfully.",
        showConfirmButton: false,
        timer: 9000
      });
    }
  }
};
</script>
