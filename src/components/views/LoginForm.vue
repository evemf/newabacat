<template>
  <div class="login">
    <h1 class="login__title">Login</h1>
    <form class="login__form" @submit.prevent="loginUser">
      <input type="email" v-model="credentials.email" class="login__form-input" placeholder="Email" required>
      <input type="password" v-model="credentials.password" class="login__form-input" placeholder="Password" required>
      <button type="submit" class="login__form-button">Login</button>
    </form>
    <p>Don't have an account? <router-link to="/register" class="login__link">Register here</router-link></p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    ...mapActions(['login']), // Map the login action from the Vuex store
    loginUser() {
      // Dispatch the login action with the entered credentials
      this.login(this.credentials)
        .then(() => {
          // Login successful, user is redirected to the dashboard page automatically
          this.$router.push({ name: 'DashboardPage' });
        })
        .catch(error => {
          // Display error message for invalid credentials
          console.error('Error logging in:', error);
        });
    }
  }
};
</script>

  
  <style lang="scss" scoped>
  .login {
    text-align: center;
    padding: 20px;
  
    &__title {
      font-size: 2rem;
      margin-bottom: 20px;
    }
  
    &__form {
      max-width: 400px;
      margin: 0 auto;
  
      &-input {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
      }
  
      &-button {
        width: 100%;
        padding: 10px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  
    &__link {
      display: inline-block;
      margin-top: 20px;
      color: #007bff;
      text-decoration: none;
      transition: color 0.3s ease;
  
      &:hover {
        color: #0056b3;
      }
    }
  }
  </style>
  