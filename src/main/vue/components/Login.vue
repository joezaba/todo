<template>
  <div class="container mt-3">
    <div class="text-right font-weight-bold" v-on:click="toggleRegistration()">
      <a type="button" class="pull-right"><span v-if="!registration">Register</span><span v-if="registration">Login</span></a>
    </div>
    <h1>Todo <span v-if="registration">Registration</span><span v-if="!registration">Login</span></h1>
    <form v-on:submit="onSubmit">
      <div class="form-group">
        <label for="InputUsername">Username</label>
        <input
          type="text"
          class="form-control"
          id="InputUsername"
          aria-describedby="emailHelp"
          v-model="userIn.username"
        />
      </div>
      <div class="form-group">
        <label for="InputPassword">Password</label>
        <input
          type="password"
          class="form-control"
          id="InputPassword"
          v-model="userIn.password"
        />
      </div>
      <!--
    <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    -->
      <button v-if="!registration" type="submit" class="btn btn-primary">Login</button>
      <button v-if="registration" @click="registerUser()" type="button" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data: () => {
    return {
      registration: false,
      userIn: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["authenticateUser", "register"]),
    onSubmit(e) {
      e.preventDefault();
      this.authenticateUser(this.userIn);
    },
    registerUser(){
      this.register(this.userIn);
      this.registration = false;
    },
    toggleRegistration(){
        this.registration = !this.registration;
    }
  },
  created() {},
};
</script>

<style scoped>
</style>