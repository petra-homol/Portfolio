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

        <div class="card-container">

          <div class="flex justify-center items-center">
            <div class="row">
              <div v-for="portfolioItem in firstRow" :key="portfolioItem" class="card md:w-1/2 justify-center items-center">
                
                <h3>{{ portfolioItem.title }}</h3>
              
                <div class="category">
                  <p :class="portfolioItem.category">{{ portfolioItem.category }}</p>
                </div> 

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

            <div class="row justify-center items-center">
              <div v-for="portfolioItem in secondRow" :key="portfolioItem" class="card md:w-1/2 justify-center items-center">
                
                <h3>{{ portfolioItem.title }}</h3>
              
                <div class="category">
                  <p :class="portfolioItem.category">{{ portfolioItem.category }}</p>
                </div>
                    
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

  const firstRow = computed(() => filteredPortfolioItems.value.slice(0, 4))
  const secondRow = computed(() => filteredPortfolioItems.value.slice(4, 8))
  
  </script>
  
  <style lang="scss">

  .row-all{
    background-color: #b3d573;
    height: auto;
    min-height: 100vh;
    width: 100%;
  }

  .card-container {
  margin-top: 100px; 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around; 
  padding: 20px;
}

  .card {
    color:#452c12;
    background-color: #fbf9d9;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 500px;
    height: fit-content;
    margin: 50px 20px 20px 20px;
  }

  button{
    border: 2px solid #452c12;
    box-shadow: 0 4px 6px #b3d573; 
    color: #452c12;
    margin: 0px 10px 10px 10px;
    padding: 5px 15px;
    border-radius: 20px;
    width: fit-content;
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


  .category{
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px;
    text-decoration: underline #b3d573 5px;
    font-weight: bold;
  }
  
  
  </style>