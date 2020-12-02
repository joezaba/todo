<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span style="cursor: pointer">
      <svg
        v-if="!isComplete"
        v-on:click="toggleComplete()"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 16 16"
        class="bi bi-circle mr-2"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
      </svg>
      <svg
        v-if="isComplete"
        v-on:click="toggleComplete()"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 16 16"
        class="bi bi-check-circle mr-2"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path
          fill-rule="evenodd"
          d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
        />
      </svg>

      <span v-bind:class="{ todo_text_is_complete: isComplete }">{{
        text
      }}</span>
    </span>
    <span id="delete-x" style="cursor: pointer">
      <svg
        width="2em"
        height="2em"
        viewBox="0 0 16 16"
        class="bi bi-x"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </span>
  </li>
</template>

<script>
export default {
  name: "Todo",
  props: ["text", "isComplete"],
  data: () => {
    return {};
  },
  methods: {
    toggleComplete() {
      this.isComplete = !this.isComplete;
    },
  },
};
</script>

<style scoped>
.todo_text_is_complete {
  text-decoration: line-through;
}
</style>