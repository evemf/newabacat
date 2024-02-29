<template>
    <div class="register">
      <h1 class="register__title">Register</h1>
      <form class="register__form" @submit.prevent="registerUser">
        <input type="text" v-model="user.name" class="register__form-input" placeholder="Name" required>
        <input type="email" v-model="user.email" class="register__form-input" placeholder="Email" required>
        <input type="password" v-model="user.password" class="register__form-input" placeholder="Password" required>
        <button type="submit" class="register__form-button">Register</button>
      </form>
      <p>Already have an account?
        <router-link to="/login" class="register__link">Login here</router-link>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: '',
          email: '',
          password: ''
        }
      };
    },
    methods: {
      registerUser() {
        // Implement register functionality
      }
    }
  };
  </script>
  
<style lang="scss" scoped>
  .register {
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
        background-color: #28a745;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  
    &__link {
      display: inline-block;
      margin-top: 20px;
      color: #28a745;
      text-decoration: none;
      transition: color 0.3s ease;
  
      &:hover {
        color: #218838;
      }
    }
  }
</style>
  