<template>
    <div class="create">
      <h1 class="create__title">Create New User</h1>
      <form class="create__form" @submit.prevent="createUser">
        <input type="text" v-model="user.name" class="create__form-input" placeholder="Name" required>
        <input type="email" v-model="user.email" class="create__form-input" placeholder="Email" required>
        <input type="password" v-model="user.password" class="create__form-input" placeholder="Password" required>
        <button type="submit" class="create__form-button">Create User</button>
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
    methods: {
      createUser() {
        // Implement create user functionality
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .create {
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
        background-color: #28a745;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
  </style>
  