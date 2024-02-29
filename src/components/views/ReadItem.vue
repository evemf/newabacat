<template>
    <div class="read">
      <h1 class="read__title">User Information</h1>
      <div class="read__info-container">
        <div class="read__info">
          <p><strong>Name:</strong> {{ user.name }}</p>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>ID:</strong> {{ user.id }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          id: '',
          name: '',
          email: ''
        }
      };
    },
    created() {
      // Fetch user information from API and populate 'user' object
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .read {
    text-align: center;
    padding: 20px;
  
    &__title {
      font-size: 2rem;
      margin-bottom: 20px;
    }
  
    &__info-container {
      max-width: 400px;
      margin: 0 auto;
  
      &__info {
        padding: 20px;
        background-color: #f8f9fa;
        border: 1px solid #ccc;
        border-radius: 5px;
  
        & > p {
          margin-bottom: 10px;
        }
      }
    }
  }
  </style>
  