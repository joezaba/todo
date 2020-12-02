<template>
  <div>
    <ul id="todos" class="list-group list-group-flush">
      <Todo text="brush teeth" :isComplete="true" />
      <Todo text="Eat Breakfast" :isComplete="false" />
    </ul>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
export default {
  name: "Todos",
  components: {
    Todo,
  },
};
</script>

<style>
</style>
