<template>
  <div id="register">
    <form>
      <img class="logo" src="@/assets/car-logo.svg" />
      <h1 class="text-center">REGISTER</h1>
      <div class="form-group-lg has-feedback has-feedback-left">
        <input
          v-model="login"
          type="text"
          class="form-control"
          placeholder="Personal name"
        />
        <i class="glyphicon glyphicon-user has-feedback"></i>
      </div>
      <div class="form-group-lg has-feedback has-feedback-left">
        <input
          v-model="email"
          type="text"
          class="form-control"
          placeholder="Email"
        />
      </div>
      <div class="form-group-lg">
        <input
          v-model="password"
          type="password"
          class="form-control"
          placeholder="Password"
        />
      </div>
      <div class=" btn-group">
        <input
          type="submit"
          @click="auth()"
          class="btn btn-submit"
          value="Register"
        />
      </div>
      <div id="register-link" class="text-center align-self-end">
        <a href="#" class="text-info" @click="redirectLogin()"
          >Already registered? Sign in</a
        >
      </div>
    </form>
  </div>
</template>
<script>
export default {
  beforeCreate: () => {
    document.body.className = "auth";
    if (
      localStorage.permissions === "admin" ||
      localStorage.permissions === "driver"
    ) {
      localStorage.premissions == "";
      console.log("wylogowano");
    }
  },
  data() {
    return {
      login: "",
      email: "",
      password: ""
    };
  },
  methods: {
    auth() {
      console.log("logowanie");
      console.log(this.register + " : " + this.password);
      console.log(localStorage.premissions);
      if (this.register === "admin" && this.password === "admin") {
        localStorage.premissions = "admin";
        console.log("zalogowano admin");
        this.$router.push("/home");
      }
      if (this.register === "driver" && this.password === "driver") {
        localStorage.premissions = "driver";
        console.log("zalogowano driver");
        this.$router.push("/home");
      }
    },
    redirectLogin() {
      this.$router.push("/login");
    }
  },
  name: "Register"
};
</script>

<style scoped>
#register
  .container
  #register-row
  #register-column
  #register-box
  #register-form {
  padding: 20px;
}
#register {
  background: white;
  min-height: 80vh;
  min-width: 30vw;
  box-shadow: 5px 5px;
  border-radius: 21px;
  padding: 20px 15px 20px 15px;
}
.logo {
  width: 80px;
}
#register-form {
  height: 100%;
}
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
input[type="text"],
input[type="password"] {
  border: none;
  background: #e2e2e2;
  width: 100%;
  height: 100%;
}
.btn-group {
  height: 80px !important;
  width: 100%;
  padding: 10px;
  margin-top: 40px;
  /* margin-bottom: 30%; */
}
.btn-submit {
  border: none;
  background: rgb(255, 156, 81);
  background: linear-gradient(
    0deg,
    rgba(255, 156, 81, 1) 0%,
    rgba(239, 104, 72, 1) 100%
  );
  background-repeat: no-repeat;
  color: white;
  font-size: 30px;
}

input[type="text"]::-webkit-input-placeholder {
  size: 20px;
}
.form-group-lg {
  height: 40px;
  margin: 10px;
}
</style>
