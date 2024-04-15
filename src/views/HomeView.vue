<template>
  <main>
    
    <div class="hero flex flex-col md:flex-row justify-center items-center">

      <div class="absolute top-14  w-full">
        <img src="@/assets/frame-top.svg" alt="">
      </div>
      
      <div class="hp md:w-1/2 flex justify-center items-center">
        <img src="@/assets/hp-logo.png" alt="logo">
      </div>
      
      <div class="md:w-1/2 justify-center items-center">
        <h3>PORTFOLIO</h3>
        <h1>Petra Homolova</h1>
      </div>

      <div class="absolute bottom-0 left-0 w-full">
        <img src="@/assets/frame-bottom.svg" alt="">
      </div>
    
    </div>
     
    <!-- <button @click="selectedCategory = 'web'"> WEB </button>
    <button @click="selectedCategory = 'photo'"> PHOTO </button>
    <button @click="selectedCategory = 'video'"> VIdeo </button>
    <button @click="selectedCategory = ''"> ALL </button> -->
      
    <div class="row-projects">
      <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem" class="card">
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

.hero{
  display: flex;
  width: 100%;
  height: 92vh;
  background-color: #fbf9d9;
}

.row-projects{
  background-color: #b3d573;
}

.card {
  color:#452c12;
  background-color: #fbf9d9;
  padding: 1rem;
  margin: 1rem auto;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 800px;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.web {
  background-color: #af7012;
}
.photo {
  background-color: #f256e2;
}
</style>