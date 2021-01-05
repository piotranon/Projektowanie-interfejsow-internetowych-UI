<template>
  <div
    class="d-none d-md-block text-left sticky-top"
    style="background:#58B0E0;top:55px;"
    v-if="isInfoOpen"
  >
    <h1 class="text-white ml-2 my-auto py-2 font-weight-bold display-4">
      <a @click="this.$root.$router.push({ path: '/Vehicles' })">Vehicles</a> /
      Index
    </h1>
  </div>
  <div class="row mx-auto mt-3">
    <div class="col-lg-4 col-md-6 col-12">
      <div class="div">
        <img
          src="@/assets/car.jpg"
          class="rounded float-right w-100 img-thumbnail x-0"
          alt="car image"
        />
      </div>
    </div>
    <div class="col-md-4 col-12">
      <div class="card text-left py-0 mt-2" style="border:none;">
        <div class="div">
          <span
            class="card-title ml-2 mt-2 font-weight-bold"
            style="font-size:1.5rem"
          >
            Status </span
          ><span
            class="ml-4 bg-success px-1 py-1 px-md-3 py-md-2 rounded-pill text-white"
            >In use</span
          >
        </div>
      </div>
      <div class="card text-left py-0 mt-0" style="border:none;">
        <span
          class="card-title ml-2 mt-2 font-weight-bold py-0 mb-0"
          style="font-size:1.5rem"
        >
          Make
        </span>
        <span class="card-body ml-4 py-0 px-0" style="font-size:1.25rem">
          Chevrolet
        </span>
      </div>
      <div class="card text-left py-0 mt-0" style="border:none;">
        <span
          class="card-title ml-2 mt-2 font-weight-bold py-0 mb-0"
          style="font-size:1.5rem"
        >
          Model
        </span>
        <span class="card-body ml-4 py-0 px-0" style="font-size:1.25rem">
          Camaro
        </span>
      </div>
      <div class="card text-left py-0 mt-0" style="border:none;">
        <span
          class="card-title ml-2 mt-2 font-weight-bold py-0 mb-0"
          style="font-size:1.5rem"
        >
          Year
        </span>
        <span class="card-body ml-4 py-0 px-0" style="font-size:1.25rem">
          2020
        </span>
      </div>
      <div class="card text-left py-0 mt-0" style="border:none;">
        <span
          class="card-title ml-2 mt-2 font-weight-bold py-0 mb-0"
          style="font-size:1.5rem"
        >
          License Plate
        </span>
        <span class="card-body ml-4 py-0 px-0" style="font-size:1.25rem">
          RZ 45673
        </span>
      </div>
      <div class="card text-left py-0 mt-0" style="border:none;">
        <span
          class="card-title ml-2 mt-2 font-weight-bold py-0 mb-0"
          style="font-size:1.5rem"
        >
          Type
        </span>
        <span class="card-body ml-4 py-0 px-0" style="font-size:1.25rem">
          Coupe
        </span>
      </div>
    </div>
    <div class="col-lg-4  col-md-6 col-12">
      <div class="card text-left py-0 mt-0" style="border:none;">
        <span
          class="card-title ml-2 mt-2 font-weight-bold py-0 mb-0"
          style="font-size:1.5rem"
        >
          Chasis Number
        </span>
        <span class="card-body ml-4 py-0 px-0" style="font-size:1.25rem">
          XYZ
        </span>
      </div>
      <div class="card text-left py-0 mt-0" style="border:none;">
        <span
          class="card-title ml-2 mt-2 font-weight-bold py-0 mb-0"
          style="font-size:1.5rem"
        >
          Engine Number
        </span>
        <span class="card-body ml-4 py-0 px-0" style="font-size:1.25rem">
          12321321
        </span>
      </div>

      <div class="card text-left py-0 mt-0" style="border:none;">
        <span
          class="card-title ml-2 mt-2 font-weight-bold py-0 mb-0"
          style="font-size:1.5rem"
        >
          Engine Capacity
        </span>
        <span class="card-body ml-4 py-0 px-0" style="font-size:1.25rem">
          6.2
        </span>
      </div>
      <div class="card text-left py-0 mt-0" style="border:none;">
        <span
          class="card-title ml-2 mt-2 font-weight-bold py-0 mb-0"
          style="font-size:1.5rem"
        >
          Fuel Tank Capacity
        </span>
        <span class="card-body ml-4 py-0 px-0" style="font-size:1.25rem">
          50 L
        </span>
      </div>
    </div>
    <div class="col-lg-4  col-md-6 col-12">
      <div class="card text-left py-0 mt-0" style="border:none;">
        <span
          class="card-title ml-2 mt-2 font-weight-bold py-0 mb-0"
          style="font-size:1.5rem"
        >
          Purchase Date
        </span>
        <span class="card-body ml-4 py-0 px-0" style="font-size:1.25rem">
          1.1.2020
        </span>
      </div>
      <div class="card text-left py-0 mt-0" style="border:none;">
        <span
          class="card-title ml-2 mt-2 font-weight-bold py-0 mb-0"
          style="font-size:1.5rem"
        >
          Registration Date
        </span>
        <span class="card-body ml-4 py-0 px-0" style="font-size:1.25rem">
          2.1.2020
        </span>
      </div>

      <div class="card text-left py-0 mt-0" style="border:none;">
        <span
          class="card-title ml-2 mt-2 font-weight-bold py-0 mb-0"
          style="font-size:1.5rem"
        >
          Next Registration Date
        </span>
        <span class="card-body ml-4 py-0 px-0" style="font-size:1.25rem">
          2.1.2021
        </span>
      </div>
    </div>
    <div class="col-lg-4  col-md-6 col-12">
      <div class="card text-left py-0 mt-0" style="border:none;">
        <span
          class="card-title ml-2 mt-2 font-weight-bold py-0 mb-0"
          style="font-size:1.5rem"
        >
          Insurance Date
        </span>
        <span class="card-body ml-4 py-0 px-0" style="font-size:1.25rem">
          1.1.2020
        </span>
      </div>
      <div class="card text-left py-0 mt-0" style="border:none;">
        <span
          class="card-title ml-2 mt-2 font-weight-bold py-0 mb-0"
          style="font-size:1.5rem"
        >
          Next Insurance Date
        </span>
        <span class="card-body ml-4 py-0 px-0" style="font-size:1.25rem">
          2.1.2020
        </span>
      </div>

      <div class="card text-left py-0 mt-0" style="border:none;">
        <span
          class="card-title ml-2 mt-2 font-weight-bold py-0 mb-0"
          style="font-size:1.5rem"
        >
          Insurance Policy Number
        </span>
        <span class="card-body ml-4 py-0 px-0" style="font-size:1.25rem">
          231321321321
        </span>
      </div>
    </div>
    <div class="col-lg-4  col-md-6 col-12">
      <div class="card text-left py-0 mt-0" style="border:none;">
        <span
          class="card-title ml-2 mt-2 font-weight-bold py-0 mb-0"
          style="font-size:1.5rem"
        >
          Notes
        </span>
        <span class="card-body ml-4 py-0 px-0" style="font-size:1.25rem">
          No notes avaible.
        </span>
      </div>
    </div>

    <div class="col-12 mt-4">
      <ul class="nav nav-tabs row" id="tab">
        <li class="nav-item col-6">
          <a
            class="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            >Current Location</a
          >
        </li>
        <li class="nav-item col-6">
          <a
            class="nav-link"
            id="messages-tab"
            data-toggle="tab"
            href="#messages"
            >Last Routes</a
          >
        </li>
      </ul>
      <div class="tab-content mb-5">
        <div class="tab-pane active" id="home">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9736.209035452754!2d16.91301569703676!3d52.40572908487453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b32f665e707%3A0x9eeed0bd55c0f364!2sGrupa%20MTP!5e0!3m2!1spl!2spl!4v1609781378160!5m2!1spl!2spl"
            class="w-100 mt-3"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <div class="tab-pane" id="messages">
          <!-- last routes -->
          <div class="card my-2" style="border:none;">
            <div class="card-body py-md-2">
              <div class="row align-items-center">
                <div class="col  font-weight-bold">
                  From where
                </div>
                <div class="col px-0 font-weight-bold">
                  To where
                </div>
                <div class="col d-none d-sm-block font-weight-bold">
                  Route Start
                </div>
                <div class="col d-none d-md-block font-weight-bold">
                  Route End
                </div>
              </div>
            </div>
          </div>
          <div
            class="card my-2"
            v-for="route in routes"
            :model="route"
            :key="route"
          >
            <div class="card-body py-md-2">
              <div class="row align-items-center">
                <div class="col">
                  {{ route.fromWhere }}
                </div>
                <div class="col px-0">
                  {{ route.toWhere }}
                </div>
                <div class="col d-none d-sm-block">
                  {{ route.routeStart }}
                </div>
                <div class="col d-none d-md-block">
                  {{ route.routeEnd }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- </div> -->
</template>
<script>
export default {
  name: "Dashboard Admin Vehicle View",
  data() {
    return {
      isInfoOpen: true,
      drivers: [
        {
          name: "Andrzej",
          surname: "Rączy",
          sinceWhen: "11.10.2020",
          toWhen: "-"
        },
        {
          name: "Tomasz",
          surname: "Działowy",
          sinceWhen: "11.9.2020",
          toWhen: "10.10.2020"
        },
        {
          name: "Norbert",
          surname: "Gierczak",
          sinceWhen: "11.8.2020",
          toWhen: "10.9.2020"
        },
        {
          name: "Andrzej",
          surname: "Śmieszek",
          sinceWhen: "11.10.2020",
          toWhen: "-"
        }
      ],
      routes: [
        {
          fromWhere: "London",
          toWhere: "Rzeszów",
          routeStart: "11.10.2020",
          routeEnd: "12.10.2020"
        },
        {
          fromWhere: "Rzeszów",
          toWhere: "London",
          routeStart: "7.10.2020",
          routeEnd: "10.10.2020"
        },
        {
          fromWhere: "London",
          toWhere: "Rzeszów",
          routeStart: "2.5.2020",
          routeEnd: "6.10.2020"
        },
        {
          fromWhere: "London",
          toWhere: "Rzeszów",
          routeStart: "1.10.2020",
          routeEnd: "2.10.2020"
        }
      ]
    };
  },
  methods: {
    deletedSuccesfull() {
      this.$root.$router.push({ path: "/Vehicles", query: { deleted: true } });
    },
    updated() {
      console.log("updated");
    }
  },
  mounted() {
    console.log(this.isInfoOpen);
    console.log("mounted view");
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
