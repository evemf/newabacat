import { createStore } from 'vuex';

// Retrieve isLoggedIn state from sessionStorage if available
const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

export default createStore({
  state: {
    isLoggedIn: isLoggedIn,
    user: null
  },
  mutations: {
    login(state, user) {
      state.isLoggedIn = true;
      state.user = user;
      // Store isLoggedIn state in sessionStorage
      sessionStorage.setItem('isLoggedIn', 'true');
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      // Remove isLoggedIn state from sessionStorage
      sessionStorage.removeItem('isLoggedIn');
    }
  },
  actions: {
    async login({ commit }, credentials) {
      // Simulate authentication with fake credentials
      if (credentials.email === 'evemolina7@gmail.com' && credentials.password === '1234') {
        // If credentials are valid, commit the login mutation
        commit('login', { email: credentials.email }); // Use a fake user object for now
      } else {
        // If credentials are invalid, throw an error
        throw new Error('Invalid email or password');
      }
    },
    logout({ commit }) {
      commit('logout');
    }
  }
});
