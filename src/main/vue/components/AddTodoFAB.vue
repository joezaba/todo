<template>
  <div class="fab" data-toggle="modal" data-target="#exampleModalCenter">
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 1.75 16 16"
      class="bi bi-plus"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "AddTodoFAB",
};
</script>

<style scoped>
.fab {
  background: green;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  text-align: center;
  color: #fff;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5), 3px 3px 3px rgba(0, 0, 0, 0.25);
  position: fixed;
  bottom: 50px;
  right: 50px;
  font-size: 2.6667em;
  display: inline-block;
  cursor: pointer;
}
</style>