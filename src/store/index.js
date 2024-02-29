import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    isLoggedIn: false,
    user: null
  },
  mutations: {
    login(state, user) {
      state.isLoggedIn = true;
      state.user = user;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    }
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        // Make API request to authenticate user
        // If successful, commit mutation to set user as logged in
        const response = await axios.post('API_ENDPOINT/login', credentials);
        commit('login', response.data.user);
      } catch (error) {
        console.error('Error logging in:', error);
        throw error;
      }
    },
    logout({ commit }) {
      // Simply commit mutation to logout user
      commit('logout');
    }
  }
});
