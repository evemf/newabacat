import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/views/HomePage.vue';
import Login from '../components/views/LoginForm.vue';
import Register from '../components/views/RegisterForm.vue';
import Create from '../components/views/CreateItem.vue';
import Read from '../components/views/ReadItem.vue';
import Update from '../components/views/UpdateItem.vue';
import Delete from '../components/views/DeleteItem.vue';
import DashboardPage from '../components/views/DashboardPage.vue';
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/read',
    name: 'Read',
    component: Read
  },
  {
    path: '/update',
    name: 'Update',
    component: Update
  },
  {
    path: '/delete',
    name: 'Delete',
    component: Delete
  },
  {
    path: '/dashboard',
    name: 'DashboardPage',
    component: DashboardPage,
    meta: { requiresAuth: true } 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation guard to check if user is authenticated before entering protected routes
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.isLoggedIn || sessionStorage.getItem('isLoggedIn') === 'true';

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); // Redirect to login page if authentication is required but user is not authenticated
  } else {
    next(); // Proceed to the next route
  }
});

// Add event listener for popstate to display confirmation alert when leaving the page
window.addEventListener('popstate', (event) => {
  const isLoggedIn = store.state.isLoggedIn || sessionStorage.getItem('isLoggedIn') === 'true';

  if (isLoggedIn && event.state !== null) { // Only trigger alert for backward navigation
    // Display confirmation alert
    const confirmed = window.confirm('Are you sure you want to leave the page?');
    if (!confirmed) {
      // Prevent the default action of the popstate event
      event.stopImmediatePropagation();
      event.preventDefault();
    } else {
      // User accepted the alert, logout and redirect to homepage
      store.commit('logout');
      router.push('/');
    }
  }
});

export default router;
