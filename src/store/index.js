import { createStore } from 'vuex'

export default createStore({
  state: {
    authenticated: false,
    usermail: "",
    access_token: ''
  },
  mutations: {

    setAuthentication(state, status){
      state.authenticated = status;
    },
    setUseremail(state, email){
      state.usermail = email;
    },
    setAccessToken(state, token){
      state.access_token = token;
    }

  },
  actions: {
  },
  modules: {
  }
})
