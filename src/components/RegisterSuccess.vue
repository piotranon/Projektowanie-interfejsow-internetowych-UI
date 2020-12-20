<template>
  <div id="error">
    <form>
      <img class="logo" src="@/assets/success.svg" />
      <h1 class="text-center">Thank you,</h1>
      <div class="form-group-lg">
        <p>
          You have successfully registered!
        </p>
      </div>
      <div class="form-group-lg">
        <p>
          You will be automatically redirected to a Login page in 5 seconds, or
          you can click Login below.
        </p>
      </div>
      <div class="btn-group">
        <input
          type="submit"
          class="btn btn-submit"
          value="LOGIN"
          @click="redirectLogin()"
        />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "Login",
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
      error: "",
      password: ""
    };
  },
  created() {
    setTimeout(() => this.$router.push("/login"), 5000);
  },
  methods: {
    redirectLogin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
#error .container #error-row #error-column #error-box #error-form {
  padding: 20px;
}
#error {
  background: white;
  min-height: 50vh;
  min-width: 30vw;
  box-shadow: 5px 5px;
  border-radius: 21px;
  padding: 20px 15px 20px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 80px;
  fill: rgb(239, 104, 72);
}
#error-form {
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
h1 {
  color: #ffb650;
}

input[type="text"]::-webkit-input-placeholder {
  size: 20px;
}
.form-group-lg {
  height: 40px;
  margin: 10px;
}
</style>
