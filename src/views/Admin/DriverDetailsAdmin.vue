<template>
  <div
    class="d-flex align-items-center"
    style="background: #58b0e0"
    v-if="isInfoOpen"
  >
    <h1 class="text-white ml-2 my-auto font-weight-bold display-4">
      <a @click="this.$root.$router.push({ path: '/Drivers' })">Drivers</a> / 1
    </h1>
  </div>
  <div class="row">
    <div class="tabs pr-0 py-sm-1 col-2">
      <h3>Jan Kowalski</h3>
      <a
        v-on:click="activetab = 1"
        v-bind:class="[activetab === 1 ? 'active' : '']"
        ><h4>Information</h4></a
      ><br />
      <a
        v-on:click="activetab = 2"
        v-bind:class="[activetab === 2 ? 'active' : '']"
        ><h4>Routes</h4></a
      ><br />
    </div>
    <div class="content align-items-center col-10">
      <!-- Information tab -->
      <div v-if="activetab === 1" class="tabcontent">
        <div class="row">
          <div class="col-md-6">
            <div
              class="d-flex flex-column align-items-center text-center p-3 py-5"
            >
              <img src="@/assets/driverPhoto.png" class="img-fluid" />
            </div>
          </div>
          <div class="col-md-5">
            <div class="p-3 py-5 font-weight-bold text-center mx-auto">
              <div class="col-md-12 p-3"><h5>Name: Jan Kowalski</h5></div>
              <div class="col-md-12 p-3"><h5>Phone: 123456789</h5></div>
              <div class="col-md-12 p-3"><h5>E-mail: email1@gmail.com</h5></div>
              <div class="col-md-12 p-3">
                <h5>Driving license: B00000047</h5>
              </div>
              <div class="col-md-12 p-3"><h5>Categories: B, C1</h5></div>
            </div>
          </div>
        </div>
        <div class="row cells border border-dark">
          <div class="col-10 text-left font-weight-bold p-3">
            <h4>Assignement:</h4>
          </div>
          <!-- Choose view -->
          <div
            class="modal fade bd-example-modal-lg"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    Add an assignment
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="row mx-2 mx-md-4 mt-4 align-items-center">
                    <div class="col font-weight-bold">Car Number</div>
                    <div class="col font-weight-bold">Model</div>
                    <div class="col font-weight-bold d-none d-sm-block">
                      Type
                    </div>
                    <div class="col font-weight-bold d-none d-md-block">
                      Year
                    </div>
                    <div class="col font-weight-bold">Choose</div>
                  </div>
                  <div class="row mx-2 mx-md-4">
                    <div class="col">
                      <div
                        class="card my-2"
                        v-for="car in cars"
                        :model="car"
                        :key="car"
                      >
                        <div class="card-body py-md-2">
                          <div class="row align-items-center">
                            <div class="col-d col font-weight-bold">
                              {{ car.id }}
                            </div>
                            <div class="col">
                              {{ car.model }}
                            </div>
                            <div class="col d-none d-md-block">
                              {{ car.type }}
                            </div>
                            <div class="col d-none d-md-block">
                              {{ car.year }}
                            </div>
                            <div class="col">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="defaultCheck1"
                                />
                                <label
                                  class="form-check-label"
                                  for="defaultCheck1"
                                >
                                </label>
                              </div>
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
                        <li class="page-item px-2">
                          <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item px-2">
                          <a class="page-link" href="#">...</a>
                        </li>
                        <li class="page-item px-2">
                          <a class="page-link" href="#">10</a>
                        </li>

                        <li class="page-item px-2">
                          <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div class="modal-footer">
                  <div class="col">
                    <button
                      type="button w-100"
                      class="btn btn-warning mr-auto font-weight-bold"
                      data-dismiss="modal"
                    >
                      Abort
                    </button>
                  </div>
                  <div class="col">
                    <button
                      type="button w-100"
                      class="btn btn-primary text-white font-weight-bold"
                      data-dismiss="modal"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End of Choose View -->
          <div class="col-2 font-weight-bold p-3 text-right">
            <button
              type="button"
              class="btn bg-transparent px-0 py-0 mx-0 my-0"
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
            >
              <h5>Add <i class="fas fa-pencil-alt"></i></h5>
            </button>
          </div>
          <div class="col-2 p-3 align-items-center">
            <span
              class="bg-warning px-1 py-1 px-md-3 py-md-2 rounded-pill text-white font-weight-bold"
              >12</span
            >
          </div>
          <div class="col-8 text-left font-weight-bold p-3">
            <h3>Polonoez 1500 LE</h3>
          </div>
          <!-- Delete view -->
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
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    Delete Assignment
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                </div>
                <div class="modal-body">
                  Are you sure you want to delete an assignment to this car?
                </div>
                <div class="modal-footer">
                  <div class="col">
                    <button
                      type="button w-100"
                      class="btn btn-warning mr-auto font-weight-bold"
                      data-dismiss="modal"
                    >
                      Abort
                    </button>
                  </div>
                  <div class="col">
                    <button
                      type="button w-100"
                      class="btn btn-danger text-white font-weight-bold"
                      data-dismiss="modal"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End of Delete View -->
          <div class="col-2 font-weight-bold text-right py-3 pl-0 pr-3">
            <button
              type="button"
              class="btn bg-transparent px-0 py-0 mx-0 my-0"
              data-toggle="modal"
              data-target=".bd-example-modal-sm"
            >
              <h5>Delete <i class="fas fa-times"> </i></h5>
            </button>
          </div>
        </div>
        <br />
        <br />
        <div class="row cells border border-dark py-3">
          <div class="col-6 text-center font-weight-bold p-3 text-primary">
            <h5>1980 km Total Distance</h5>
          </div>
          <div class="col-6 font-weight-bold p-3 text-center text-success">
            <h5>99 Total Routes</h5>
          </div>
          <div class="col-12">
            <div
              class="d-flex flex-column align-items-center text-center p-3 py-5"
            >
              <img src="@/assets/chart.png" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <!-- Route tab -->
      <div v-if="activetab === 2" class="tabcontent">
        <br />
        <div class="d-flex">
          <div class="mr-auto my-auto w-75">
            <div
              class="input-group mb-4 border rounded-pill ml-md-5 ml-2 my-auto"
            >
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
        <div class="row mx-2 mx-md-4 mt-4 align-items-center">
          <div class="col font-weight-bold">Route Number</div>
          <div class="col font-weight-bold d-none d-md-block">Start Date</div>
          <div class="col font-weight-bold">End Date</div>
          <div class="col font-weight-bold d-none d-md-block">Distance</div>
          <div class="col font-weight-bold d-none d-md-block">
            Begin Address
          </div>
          <div class="col font-weight-bold">
            <span> Destination Location </span>
          </div>
        </div>
        <div class="row mx-2 mx-md-4">
          <div class="col">
            <div
              class="card my-2"
              v-for="route in routes"
              :model="route"
              :key="route"
            >
              <button type="button" class="btn" @click="toggleImage()">
                <div class="card-body py-md-2">
                  <div class="row align-items-center">
                    <div class="col col font-weight-bold">
                      {{ route.id }}
                    </div>
                    <div class="col d-none d-md-block">
                      {{ route.start_date }}
                    </div>
                    <div class="col">{{ route.end_date }}</div>
                    <div class="col d-none d-md-block">
                      {{ route.distance }} km
                    </div>
                    <div class="col d-none d-md-block">
                      {{ route.begin_address }}
                    </div>
                    <div class="col">
                      {{ route.end_address }}
                    </div>
                  </div>
                </div>
              </button>
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
              <li class="page-item px-2">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item px-2">
                <a class="page-link" href="#">...</a>
              </li>
              <li class="page-item px-2">
                <a class="page-link" href="#">10</a>
              </li>

              <li class="page-item px-2">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <br />
        <img src="@/assets/map.png" class="img-fluid" v-if="showImage" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dashboard Admin",
  el: "#tabs",
  data() {
    return {
      activetab: 1,
      showImage: false,
      isInfoOpen: false,
      cars: [
        {
          id: 12,
          model: "Polonez 1500 LE",
          type: "Sedan",
          year: 2020
        },
        {
          id: 12,
          model: "Polonez 1500 LE",
          type: "Sedan",
          year: 2020
        },
        {
          id: 12,
          model: "Polonez 1500 LE",
          type: "Sedan",
          year: 2020
        },
        {
          id: 12,
          model: "Polonez 1500 LE",
          type: "Sedan",
          year: 2020
        },
        {
          id: 12,
          model: "Polonez 1500 LE",
          type: "Sedan",
          year: 2020
        },
        {
          id: 12,
          model: "Polonez 1500 LE",
          type: "Sedan",
          year: 2020
        },
      ],
      routes: [
        {
          id: 99,
          start_date: "12.12.2012 12:19",
          end_date: "12.12.2012 14:32",
          distance: 60,
          begin_address: "Zbożowa 4/20 35-055 Rzeszów",
          end_address: "Spokojna 30 12-345 Mielec",
          map: "map.png"
        },
        {
          id: 98,
          start_date: "12.12.2012 12:19",
          end_date: "12.12.2012 14:32",
          distance: 60,
          begin_address: "Zbożowa 4/20 35-055 Rzeszów",
          end_address: "Spokojna 30 12-345 Mielec"
        },
        {
          id: 97,
          start_date: "12.12.2012 12:19",
          end_date: "12.12.2012 14:32",
          distance: 60,
          begin_address: "Zbożowa 4/20 35-055 Rzeszów",
          end_address: "Spokojna 30 12-345 Mielec"
        },
        {
          id: 96,
          start_date: "12.12.2012 12:19",
          end_date: "12.12.2012 14:32",
          distance: 60,
          begin_address: "Zbożowa 4/20 35-055 Rzeszów",
          end_address: "Spokojna 30 12-345 Mielec"
        },
        {
          id: 95,
          start_date: "12.12.2012 12:19",
          end_date: "12.12.2012 14:32",
          distance: 60,
          begin_address: "Zbożowa 4/20 35-055 Rzeszów",
          end_address: "Spokojna 30 12-345 Mielec"
        },
        {
          id: 94,
          start_date: "12.12.2012 12:19",
          end_date: "12.12.2012 14:32",
          distance: 60,
          begin_address: "Zbożowa 4/20 35-055 Rzeszów",
          end_address: "Spokojna 30 12-345 Mielec"
        },
        {
          id: 93,
          start_date: "12.12.2012 12:19",
          end_date: "12.12.2012 14:32",
          distance: 60,
          begin_address: "Zbożowa 4/20 35-055 Rzeszów",
          end_address: "Spokojna 30 12-345 Mielec"
        },
      ],
    };
  },
  methods: {
    toggleImage() {
      this.showImage = !this.showImage;
    },
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
  },
};
</script>
<style scoped>
.tabs {
  background: rgb(237, 235, 235);
  text-align: left;
}
.content {
  float: left;
  text-align: center;
  width: 100%;
}
.tabs a {
  width: 100%;
  color: black;
  float: left;
  cursor: pointer;
  transition: background-color 0.2s;
  border: 1px solid #ccc;
  font-size: 20px;
}
.tabs a:hover {
  background-color: #aaa;
  color: black;
}
.tabs a.active {
  background-color: #fff;
  border-bottom: 2px solid #fff;
  cursor: default;
}
.cells {
  margin-left: 10%;
  margin-right: 10%;
}

@media only screen and (max-width: 780px) {
  h4 {
    font-size: 2.9vw;
  }
  h3 {
    font-size: 3.5vw;
  }
  h5 {
    font-size: 2.5vw;
  }
}
</style>
