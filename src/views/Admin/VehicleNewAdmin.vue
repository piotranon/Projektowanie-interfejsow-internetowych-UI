<template>
  <div
    class="d-flex align-items-center"
    style="background:#58B0E0;"
    v-if="isInfoOpen"
  >
    <h1 class="text-white ml-2 my-auto py-2 font-weight-bold display-4">
      Vehicles / New
    </h1>
  </div>
  <h2 class="pt-4">Create new Vehicle</h2>
  <form class="g-3 needs-validation" novalidate>
    <div class="row w-75 mx-auto">
      <div class="col-md-4">
        <h5 class="text-left">Plate No</h5>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          required
        />
        <div class="valid-feedback">
          Looks good!
        </div>
        <div class="invalid-feedback">
          Invalid input.
        </div>
      </div>
    </div>
    <div class="row w-75 mx-auto mt-3">
      <div class="col-md-8">
        <h5 class="text-left">Make and Model</h5>
        <div class="input-group mb-3">
          <select class="custom-select" id="inputGroupSelect02">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="invalid-feedback">
          Please select a valid state.
        </div>
      </div>

      <div class="col-md-4">
        <h5 class="text-left">Plate No</h5>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          value="RZ 45673"
        />
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
    </div>
    <div class="row w-75 mx-auto mt-3">
      <div class="col-md-4">
        <h5 class="text-left">Chasis No</h5>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          value="RZ 45673"
        />
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4">
        <h5 class="text-left">Engine No</h5>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          value="RZ 45673"
        />
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
    </div>
    <div class="row w-75 mx-auto mt-3">
      <div class="col-md-4">
        <h5 class="text-left">Engine Capacity</h5>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          value="RZ 45673"
        />
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
    </div>
    <div class="row w-75 mx-auto mt-3">
      <div class="col-md-4">
        <h5 class="text-left">KMs</h5>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          value="RZ 45673"
        />
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4">
        <h5 class="text-left">Interior Color</h5>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          value="RZ 45673"
        />
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4">
        <h5 class="text-left">Exterior Color</h5>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          value="RZ 45673"
        />
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
    </div>
    <div class="row w-75 mx-auto mt-3">
      <div class="col-md-4">
        <h5 class="text-left">Fuel Tank Capacity</h5>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          value="RZ 45673"
        />
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4">
        <h5 class="text-left">e-Tag</h5>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          value="RZ 45673"
        />
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
    </div>
    <div class="row w-75 mx-auto mt-3">
      <div class="col-md-4">
        <h5 class="text-left">Vehicle Type</h5>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          value="RZ 45673"
        />
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
    </div>
    <div class="row w-75 mx-auto mt-3">
      <div class="col-md-4">
        <h5 class="text-left">Vehicle Type</h5>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          value="RZ 45673"
        />
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
    </div>
    <div class="row w-75 mx-auto mt-3">
      <div class="col-md-4">
        <h5 class="text-left">Purchase Date</h5>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          value="RZ 45673"
        />
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4">
        <h5 class="text-left">Registration Date</h5>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          value="RZ 45673"
        />
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4">
        <h5 class="text-left">Next Registration Date</h5>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          value="RZ 45673"
        />
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
    </div>
    <div class="row w-75 mx-auto mt-3">
      <div class="col-md-4">
        <h5 class="text-left">Insurance Date</h5>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          value="RZ 45673"
        />
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4">
        <h5 class="text-left">Next Insurance Date</h5>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          value="RZ 45673"
        />
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-4">
        <h5 class="text-left">Insurance Policy Number</h5>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          value="RZ 45673"
        />
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
    </div>
    <div class="row w-75 mx-auto mt-3">
      <div class="col-md-12">
        <h5 class="text-left">Notes</h5>
        <div class="form-group">
          <textarea
            class="form-control w-100"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="row w-75 mx-auto my-3">
      <div class="col-md-4 offset-md-4">
        <button
          class="btn btn-secondary mr-2"
          @click="
            this.$root.$router.push({
              path: '/Vehicles'
            })
          "
        >
          <!-- this.$router.push(((path: '/Vehicles'), (query: { created: true }))) -->
          Cancel
        </button>
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-success w-75 ml-2"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Create
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Create New Vehicle
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                Are you sure that data is correct and you want to create a
                vehicle? (wystarczy wpisać Plate No)
              </div>
              <div class="modal-footer">
                <div class="row w-100">
                  <div class="col-6">
                    <button
                      type="button"
                      class="btn btn-warning text-white"
                      data-dismiss="modal"
                      id="abort-button"
                    >
                      Abort
                    </button>
                  </div>
                  <div class="col-6">
                    <button @click="create()" class="btn btn-success">
                      Create
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
export default {
  name: "Dashboard Admin",
  methods: {
    create() {
      var forms = document.querySelectorAll(".needs-validation");
      var form = forms[0];
      if (!form.checkValidity()) {
        event.stopPropagation();
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "error",
          title: "Invalid Data\nCheck inputed data some things aren't right.",
          showConfirmButton: false,
          timer: 9000
        });
      } else {
        this.$root.$router.push({
          path: "/Vehicles",
          query: { created: true }
        });
      }
      form.classList.add("was-validated");

      event.preventDefault();

      document.querySelector("#abort-button").click();
    }
  },
  data() {
    return {
      isInfoOpen: false,
      car: {
        id: 1,
        status: "In use",
        total_distance: "13 213",
        today_distance: "0.2"
      }
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
