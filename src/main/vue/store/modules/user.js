import axios from 'axios';

const state = {
  jwt : "",
  id : -1,
  username : "",
  authenticated: false
};

const getters = {
    currentUser: state => state,
    isAuthenticated: state => state.authenticated
};

const actions = {
    async authenticateUser( {commit}, userIn ){

        const body = {
            "username" : userIn.username,
            "password" : userIn.password
        }

        const response = await axios.post(
            '/api/users/authenticate',
            body
          );
      
          commit('setUser', response.data);
    },

    async authFromStoredToken( {commit} ){
        const lsToken = await localStorage.getItem('jwt');

        await axios.get(
            '/api/users/jwt',
            {
                headers: {
                  Authorization: 'Bearer ' + lsToken
                }
              }
          )
              .then(
                  (response) => commit('setUser', {user: response.data, jwt: lsToken}),
                  () => commit('removeUser')
              )
    },

    logout({commit}){
        localStorage.removeItem('jwt');
        commit('removeUser')
    }
};

const mutations = {
    setUser( state, response ){
        state.jwt = response.jwt
        state.id = response.user.id
        state.username = response.user.username
        state.authenticated = true
        localStorage.setItem('jwt', response.jwt)
    },
    removeUser(state){
        state.jwt = ""
        state.id = -1
        state.username = ""
        state.jwt = ""
        state.authenticated = false
    }
};

export default {
  state,
  getters,
  actions,
  mutations
};