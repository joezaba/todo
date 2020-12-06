<template>
  <div class="container mt-3 todoList">
    <div class="text-right font-weight-bold">
      <span>Signed in as {{currentUser.username}}  | </span>
      <a @click="logout" type="button" class="pull-right">Logout</a>
    </div>
    
    <h1>My Tasks</h1>
    <ul id="todos" class="list-group list-group-flush">
      <Todo v-for="todo in allTodos" :key="todo.id" :id="todo.id" />
      <AddTodoFAB />
      <AddTodoModal />
    </ul>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
import AddTodoFAB from "./AddTodoFAB.vue";
import AddTodoModal from "./AddTodoModal.vue";

import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  components: {
    Todo,
    AddTodoFAB,
    AddTodoModal,
  },
  computed: mapGetters(["allTodos", "currentUser"]),
  methods: {
    ...mapActions(["fetchTodos", "logout"]),
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.todoList {
  margin-bottom: 120px;
}
</style>
