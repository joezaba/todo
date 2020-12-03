<template>
  <div
    class="modal"
    id="exampleModalCenter"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">New Todo</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="todoInput">Todo Name</label>
              <input
                type="text"
                class="form-control"
                id="todoInput"
                autofocus="autofocus"
                autocomplete="off"
                v-model="newTodoInput"
              />
            </div>
            <div class="modal-footer">
              <input
                type="submit"
                class="btn btn-primary"
                data-dismiss="modal"
                value="Submit"
                v-on:click="onSubmit()"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodoModal",
  data() {
    return {
      newTodoInput: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit() {
      this.addTodo(this.newTodoInput);
      this.newTodoInput = "";
    },
  },
};
</script>

<style scoped>
</style>