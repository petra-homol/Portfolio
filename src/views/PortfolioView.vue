<template>
    <main>
      <div class="row-all flex flex-row justify-center">

        <div class="click flex justify-start items-center">
          <button class="btn-category" @click="showAllCards"> ALL </button>
          <button class="btn-category" @click="selectedCategory = 'WEB'"> WEB </button>        
          <button class="btn-category" @click="selectedCategory = 'LOGO'"> LOGO </button>
          <button class="btn-category" @click="selectedCategory = 'POSTER'"> POSTER </button>
          <button class="btn-category" @click="selectedCategory = 'UX'"> UX PROJECT </button>
          <button class="btn-category" @click="selectedCategory = 'ILLUSTRATION'"> DRAWING </button>
        </div>      

        <div class="cards grid justify-center grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
            
              <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem" class="card md:w-1/2 justify-center items-center">
                
                <div class="label">
                  <p :class="portfolioItem.category">{{ portfolioItem.category }}</p>
                </div>

                <h3>{{ portfolioItem.title }}</h3>
              
                 

                <div class="flex justify-center items-center">
                  <img :src="portfolioItem.image" alt="">
                </div> 
                
                <button>            
                  <router-link :to="`/portfoliodetail/${portfolioItem.id}`">
                      Show more 
                  </router-link>
                </button>
              
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

  const showAllCards = () => {
  selectedCategory.value = '' 
  }
  
  const filteredPortfolioItems = computed(() => {
    if (selectedCategory.value == '') {
      return portfolioItems.value
    }
    else {
      return portfolioItems.value.filter(item => item.category == selectedCategory.value)
    }
  })
  
  </script>
  
  <style lang="scss">

  .row-all{
    background-color: #b3d573;
    height: auto;
    min-height: 80vh;
    width: 100%;
  }

  .cards{
    margin-top: 150px;
    width: 100%;
    margin-bottom: 20px;
  }

  .card {
    color:#452c12;
    background-color: #fbf9d9;
    border-radius: 5px;
    padding: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 450px;
    height: auto;
    margin: 15px;
  }

  button{
    border: 2px solid #452c12;
    box-shadow: 0 4px 6px #b3d573; 
    color: #452c12;
    margin: 0px 10px 10px 10px;
    padding: 5px 15px;
    border-radius: 20px;
    width: fit-content;
    margin-top: 10px;
  }
  
  .btn-category{
    box-shadow: 0 4px 6px #fbf9d9; 
  }

  .btn-category:hover {
    scale: 1.1;
    font-weight: bolder;
  }

  .click{
    display: flex;
    position: absolute;
    margin-top: 70px;
    justify-content: center;
    justify-self: center;
  }
  
  .label{
    position: relative;
    border-left: 5px solid #b3d573;
    padding-left: 5px;
    font-weight: bold;
  }

  @media screen and (max-width: 768px){
    .card {
      position: relative;
      color:#452c12;
      background-color: #fbf9d9;
      padding: 1rem;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      width: 90%;
      height: fit-content;
      top: 40px;  
    }
    
    .category{
      display: none;
    }

    .click {
    display: block;
  }

} 
  
  </style>