<template>
    <div class="main-content__cards">
      <div v-for="(card, index) in cards" :key="index" class="card">
        <img :src="card.image" :alt="card.title + ' Image'" class="card__image">
        <div class="card__content">
          <h3 class="card__title">{{ card.title }}</h3>
          <p class="card__text">{{ card.text }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      cards: Array,
    },
  };
  </script>
  
  <style scoped>
  .main-content__cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
  
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
  