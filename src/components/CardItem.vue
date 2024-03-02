<!-- CardItem.vue -->
<template>
    <div class="card">
      <img :src="imageUrl" :alt="title" class="card__image">
      <div class="card__content">
        <h3 class="card__title">{{ title }}</h3>
        <p class="card__text">{{ text }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      imageUrl: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped lang="scss">
  .card {
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  
  .card__image {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .card__title {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .card__text {
    font-size: 14px;
    color: #666;
  }
  </style>
  