<template>
    <main>
      <h1 class="text-3xl font-bold underline">
      </h1>
      
      <button @click="selectedCategory = 'web'"> WEB </button>
      <br>
      <button @click="selectedCategory = 'logo'"> LOGO </button>
      <br>
      <button @click="selectedCategory = 'poster'"> POSTERS </button>
      <br>
      <button @click="selectedCategory = 'ux'"> UX DESIGN </button>
      <br>
      <button @click="selectedCategory = 'illustration'"> ILLUSTRATIONS </button>
      
      <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem" class="card">
        <router-link :to="`/portfoliodetail/${portfolioItem.id}`">
            Show more 
        </router-link>
        <h2>{{ portfolioItem.title }}</h2>
        <p>{{ portfolioItem.description }}</p>
        <p>{{ portfolioItem.id }}</p>
        <p :class="portfolioItem.category">{{ portfolioItem.category }}</p>
  
        <img :src="portfolioItem.image" alt="">
        <div v-if="portfolioItem.link">
          <a :href="portfolioItem.link">Link</a>
        </div>
        <div v-else>
  
        </div>
      </div>
    
    </main>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import getPortfolio from '@/modules/getPortfolio'
  const { portfolioItems } = getPortfolio()
  
  let selectedCategory = ref('')
  
  const filteredPortfolioItems = computed(() => {
    if (selectedCategory.value == '') {
      return portfolioItems.value
    }
    else {
      return portfolioItems.value.filter(item => item.category == selectedCategory.value)
    }
  })
  
  //SECOND + ternary operator
  // const filteredPortfolioItems = computed(() => {
  //   const categoryFilter = selectedCategory.value;
  
  //   if (!categoryFilter) {
  //     return portfolioItems.value; // If no category selected, return all items
  //   } else {
  //     return portfolioItems.value.filter(item => item.category === categoryFilter);
  //   }
  
  //   // ternary operator instead of if/else
  //   // return categoryFilter ? portfolioItems.value.filter(item => item.category === categoryFilter) : portfolioItems.value;
  // });
  </script>
  
  <style lang="scss">
  .card {
    color:#452c12;
    background-color: #fbf9d9;
    // padding: 1rem;
    // margin: 1rem auto;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 800px;
    justify-content: end;
    align-items: end;
  }

  button{
  background: rgb(69,44,18);
  background: linear-gradient(180deg, rgba(69,44,18,1) 0%, rgba(174,110,41,1) 100%);
  color: #b3d573;
  margin: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 10%;
}
  
  .web {
    background-color: #af7012;
  }
  .photo {
    background-color: #f256e2;
  }
  </style>