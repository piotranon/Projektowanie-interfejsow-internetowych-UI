<template>
  <div id="login">
    <form>
      <img class="logo" src="@/assets/car-logo.svg" />
      <h1 class="text-center">LOGIN</h1>
      <div class="form-group-lg has-feedback has-feedback-left">
        <input
          v-model="login"
          type="text"
          class="form-control"
          placeholder="Username"
        />
        <i class="glyphicon glyphicon-user has-feedback"></i>
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
          value="LOGIN"
        />
      </div>
      <div id="register-link" class="text-center align-self-end">
        <a href="#" class="text-info" @click="redirectRegister()"
          >Not a member? Sign Up</a
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
      localStorage.clear();
      console.log("wylogowano");
    }
  },
  data() {
    return {
      login: "",
      password: ""
    };
  },
  methods: {
    auth() {
      console.log("logowanie");
      console.log(this.login + " : " + this.password);
      console.log(localStorage.permissions);
      if (this.login === "admin" && this.password === "admin") {
        localStorage.permissions = "admin";
        console.log("zalogowano admin");
        document.body.classList.remove("auth");
        this.$router.push("/Dashboard");

        // window.loca
      } else if (this.login === "driver" && this.password === "driver") {
        localStorage.permissions = "driver";
        console.log("zalogowano driver");
        document.body.classList.remove("auth");
        this.$router.push("/Dashboard");
      } else {
        console.log("invalid login data");
        this.$router.push("/login/error");
      }
    },
    redirectRegister() {
      this.$router.push("/register");
    }
  },
  name: "Login"
};
</script>

<style scoped>
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login {
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
#login-form {
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
