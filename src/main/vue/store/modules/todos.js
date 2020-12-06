import axios from 'axios';
import user from './user';

const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      '/api/todos/user/' + user.state.id,
      {
        headers: {
          Authorization: 'Bearer ' + user.state.jwt
        }
      }
    );

    commit('setTodos', response.data);
  },
  async addTodo({ commit }, task) {
    const response = await axios.post(
      '/api/todos/add',
      { task, completed: false, userId : user.state.id },
      {
        headers: {
          Authorization: 'Bearer ' + user.state.jwt
        }
      }
    );

    commit('newTodo', response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`/api/todos/${id}`,
      {
        headers: {
          Authorization: 'Bearer ' + user.state.jwt
        }
      }
    );

    commit('removeTodo', id);
  },
  async updateTodo({ commit }, updTodo) {
    const response = await axios.put(
      `/api/todos/${updTodo.id}`,
      updTodo,
      {
        headers: {
          Authorization: 'Bearer ' + user.state.jwt
        }
      }
    );

    commit('updateTodo', response.data);
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.push(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  updateTodo: (state, updTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};