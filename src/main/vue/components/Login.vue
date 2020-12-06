<template>
  <div class="container mt-5">
      <h1>Todo Login</h1>
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
        <input type="password" class="form-control" id="InputPassword" v-model="userIn.password" />
      </div>
      <!--
    <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    -->
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data: () => {
    return {
        userIn : {
            username : "",
            password : ""
        }
    };
  },
  methods: {
      ...mapActions(["authenticateUser"]),
      onSubmit(e) {
          e.preventDefault()
          this.authenticateUser(this.userIn);
      }
  },
  created() {},
};
</script>

<style scoped>
</style>