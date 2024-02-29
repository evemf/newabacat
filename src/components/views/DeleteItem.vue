<template>
    <div class="delete">
      <h1 class="delete__title">Delete User</h1>
      <p class="delete__message">Are you sure you want to delete this user?</p>
      <div class="delete__button-container">
        <button class="delete__button delete__button--confirm" @click="deleteUser">Confirm</button>
        <button class="delete__button delete__button--cancel">Cancel</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      deleteUser() {
        // Implement delete user functionality
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .delete {
    text-align: center;
    padding: 20px;
  
    &__title {
      font-size: 2rem;
      margin-bottom: 20px;
    }
  
    &__message {
      font-size: 1.2rem;
      margin-bottom: 20px;
    }
  
    &__button-container {
      display: flex;
      justify-content: center;
  
      & .delete__button {
        padding: 10px 20px;
        margin: 0 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
  
        &--confirm {
          background-color: #dc3545;
          color: #fff;
        }
  
        &--cancel {
          background-color: #6c757d;
          color: #fff;
        }
  
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
  </style>
  