<template>
    <div :class="{ 'dashboard__sidebar': true, 'sidebar--open': sidebarOpen }">
      <!-- Profile Information -->
      <div class="sidebar__profile">
        <h2 class="info__name">Fake User</h2>
        <img src="https://placehold.co/200" alt="Profile Image" class="profile__image">
        <div class="profile__info">
          <p class="info__details">Basic Information</p>
        </div>
      </div>
      <!-- Logout Button -->
      <button class="sidebar__logout" @click="logoutUser">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      sidebarOpen: Boolean,
    },
    methods: {
      logoutUser() {
        // Logic to logout user
        this.$store.dispatch('logout'); // Dispatch the logout action from the store
        this.$router.push('/'); // Redirect the user to the HomePage
      },
    },
  };
  </script>
  
  <style scoped>
  .dashboard__sidebar {
    width: 22%;
    min-height: 100vh;
    background: linear-gradient(45deg, orange, yellow);
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s;
  }
  @media screen and (max-width: 768px) {
    .dashboard__sidebar {
      width: 0;
      transform: translateX(-100%);
      display: none;
    }
    .sidebar--open {
      width: 100%;
      transform: translateX(0%);
      display: flex;
    }
  }
  
  .sidebar__profile {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .profile__image {
    border-radius: 50%;
    margin-bottom: 20px;
    width: 100%;
    max-width: 200px;
  }
  
  .profile__info {
    .info__name {
      margin: 0;
      font-size: 20px;
    }
    .info__details {
      margin: 5px 0 0;
      font-size: 16px;
      color: #000;
    }
  }
  
  .sidebar__logout {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    .sidebar__logout {
      position: absolute;
      bottom: 20px;
    }
  }
  </style>
  