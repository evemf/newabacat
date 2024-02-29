<template>
    <div class="update">
      <h1 class="update__title">Update User Information</h1>
      <form class="update__form" @submit.prevent="updateUser">
        <input type="text" v-model="user.name" class="update__form-input" placeholder="Name" required>
        <input type="email" v-model="user.email" class="update__form-input" placeholder="Email" required>
        <input type="password" v-model="user.password" class="update__form-input" placeholder="Password" required>
        <button type="submit" class="update__form-button">Update User</button>
      </form>
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
    created() {
      // Fetch user information from API and populate 'user' object
    },
    methods: {
      updateUser() {
        // Implement update user functionality
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .update {
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
  }
  </style>
  