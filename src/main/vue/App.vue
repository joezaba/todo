<template>
  <div id="app" class="container">
    <Login v-if="!isAuthenticated" />
    <Todos v-if="isAuthenticated" />
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import Login from "./components/Login.vue";
import { mapGetters, mapActions } from 'vuex';
//import { mapGetters } from 'vuex';

export default {
  name: "App",
  components: {
    Todos,
    Login
  },
  methods: {
    ...mapActions(["authFromStoredToken"])
  },
  computed: mapGetters(["isAuthenticated"]),
  created() {
    this.authFromStoredToken()
  }
};
</script>

<style></style>
