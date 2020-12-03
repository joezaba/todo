<template>
  <div class="todoList">
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
  computed: mapGetters(["allTodos"]),
  methods: {
    ...mapActions(["fetchTodos"]),
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
