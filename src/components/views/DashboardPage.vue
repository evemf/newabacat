<template>
  <div class="dashboard">
    <!-- Toggle button for sidebar on mobile -->
    <button class="dashboard__toggle-button" @click="toggleSidebar" v-if="isMobileView">
      <span>Toggle<br>Sidebar</span>
    </button>

    <!-- Sidebar -->
    <SidebarLeft :sidebarOpen="sidebarOpen" />

    <!-- Main Content Area -->
    <div class="dashboard__main-content">
      <!-- Cards Grid -->
      <CardsGrid :cards="cards" />

      <!-- UsersList -->
      <!-- <UsersList /> -->
    </div>
  </div>
</template>

<script>
import SidebarLeft from './SidebarLeft.vue';
import CardsGrid from './CardsGrid.vue';

export default {
  components: {
    SidebarLeft,
    CardsGrid,
  },
  data() {
    return {
      sidebarOpen: false,
      cards: [
        { title: 'Card 1', text: 'Lorem ipsum dolor sit amet', image: 'https://placehold.co/200' },
        { title: 'Card 2', text: 'Consectetur adipiscing elit', image: 'https://placehold.co/200' },
        { title: 'Card 3', text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', image: 'https://placehold.co/200' },
        { title: 'Card 4', text: 'Ut enim ad minim veniam', image: 'https://placehold.co/200' },
        { title: 'Card 5', text: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', image: 'https://placehold.co/200' },
        { title: 'Card 6', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur', image: 'https://placehold.co/200' },
        { title: 'Card 7', text: 'Excepteur sint occaecat cupidatat non proident', image: 'https://placehold.co/200' },
        { title: 'Card 8', text: 'Sunt in culpa qui officia deserunt mollit anim id est laborum', image: 'https://placehold.co/200' },
      ]
    };
  },
  computed: {
    isMobileView() {
      return window.innerWidth <= 768;
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  width: 100%;
}

.dashboard__toggle-button {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 999;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.dashboard__toggle-button:hover {
  background-color: #0056b3;
}

.dashboard__toggle-button:active {
  animation: button-click-animation 0.1s linear;
}

@keyframes button-click-animation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

.dashboard__main-content {
  flex-grow: 1;
  background: linear-gradient(45deg, blue, white);
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
}

@media screen and (min-width: 0px) and (max-width: 768px) {
  .dashboard__toggle-button {
    display: block;
  }
}

@media screen and (min-width: 769px) {
  .dashboard__toggle-button {
    display: none;
  }
}
</style>
