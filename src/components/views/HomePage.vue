<template>
  <div class="home">
    <h1 class="home__title">My Abacat</h1>
    <img src="../../assets/logo.png" alt="My Abacat Logo" class="home__logo">
    <div class="home__form-container">
      <!-- Display either login or registration form based on isRegistered value -->
      <LoginForm v-if="!isRegistered" @toggleRegistration="toggleRegistration" />
      <RegisterForm v-else @toggleRegistration="toggleRegistration" />
    </div>
  </div>
</template>

<script>
// Import LoginForm and RegisterForm components
import LoginForm from './LoginForm.vue';
import RegisterForm from './RegisterForm.vue';

export default {
  components: {
    LoginForm,
    RegisterForm
  },
  data() {
    return {
      isRegistered: false
    };
  },
  methods: {
    // Toggle between login and registration forms
    toggleRegistration() {
      this.isRegistered = !this.isRegistered;
    }
  }
};
</script>


<style lang="scss" scoped>
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    &__logo {
      max-width: 120px;
      margin-bottom: 20px;
    }
  
    &__title {
      font-size: 2rem;
      margin-bottom: 20px;
    }
  
    &__form-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 400px;
      margin: 0 auto;
    }
  
    &__form {
      width: 100%;
      margin-bottom: 20px;
      text-align: center;
  
      &-title {
        font-size: 1.5rem;
        margin-bottom: 10px;
      }
  
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
  
      &-text {
        margin-top: 10px;
  
        & .home__form-link {
          color: #007bff;
          text-decoration: none;
          cursor: pointer;
  
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>
  