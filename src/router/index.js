import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/views/HomePage.vue';
import Login from '../components/views/LoginForm.vue';
import Register from '../components/views/RegisterForm.vue';
import Create from '../components/views/CreateItem.vue';
import Read from '../components/views/ReadItem.vue';
import Update from '../components/views/UpdateItem.vue';
import Delete from '../components/views/DeleteItem.vue';

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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
