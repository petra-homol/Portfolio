<template>
  <main>
    
    <div class="hero flex flex-col md:flex-row justify-center items-center">

      <div class="absolute top-14  w-full">
        <img src="@/assets/frame-top.svg" alt="">
      </div>
      
      <div class="md:w-1/3 flex justify-center items-center">
       
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="auto" height="300" viewBox="0 0 415.126 547.077">
          <defs>
            <clipPath id="clip-path">
              <rect id="Rectangle_33" data-name="Rectangle 33" width="264.971" height="485.746" fill="none" stroke="#707070" stroke-width="10"/>
            </clipPath>
          </defs>
          <g id="Group_14" data-name="Group 14" transform="matrix(0.94, 0.342, -0.342, 0.94, 166.135, 0)">
            <g id="Group_13" data-name="Group 13" transform="translate(0 0)" clip-path="url(#clip-path)">
              <path id="Path_122" class="path" data-name="Path 122" d="M74.1,5.136s44.4,387.391-39.272,364.759c-88.695-23.984,25.053-134.42,25.053-134.42l86.735-94.227a132.152,132.152,0,0,0,25.729-32c17-29.79,43.7-85.42,17.308-102.714-18.333-12.007-32.545-2.525-42.183,9.957-9.772,12.645-14.709,28.372-15.415,44.336L122.664,273.21l.631,206.014,2.532-187.057S170.393,167.222,233.256,217.6c56.024,44.893-33.5,167.462-79.621,127.648s-27.808-53.083-27.808-53.083" transform="translate(6.425 6.424)" fill="none" stroke="#452c12" stroke-linecap="round" stroke-miterlimit="10" stroke-width="10"/>
            </g>
          </g>
        </svg>
      </div>
      
      <div class="md:w-1/2 justify-center items-center">
        <h2>MULTIMEDIA DESIGNER</h2>
        <h1>Petra Homolová</h1>
      </div>

      <div class="absolute bottom-0 left-0 w-full">
        <img src="@/assets/frame-bottom.svg" alt="">
      </div>
    
    </div>
          
    <div class="row-projects">
      <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem" class="card-home">
        <h2>{{ portfolioItem.title }}</h2>

        <div class="category">
          <p :class="portfolioItem.category">{{ portfolioItem.category }}</p>
        </div>        

        <div class="flex justify-center items-center m-3">
          <img :src="portfolioItem.image" alt="">
        </div>
        
        <button class="but-card">
          <router-link class="button" :to="`/portfoliodetail/${portfolioItem.id}`">
              Show more 
          </router-link>
        </button>

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

</script>

<style lang="scss">

.hero{
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #fbf9d9;
  margin-bottom: 1rem;
}

.hp{
  height: 30vh;
  width: auto;
}

.path {
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  animation: dash 3s linear forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

.row-projects{
  background-color: #b3d573;
  padding: 5rem;
}

.card-home {
  color:#452c12;
  background-color: #fbf9d9;
  padding: 1rem;
  margin: auto;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 650px;
  height: 500px;
  position: sticky;
  margin-bottom: 70px;
  top: 100px;
  animation: fade-in linear;
  animation-timeline: view();
  animation-range-start: cover;
  animation-range-end: cover;
}

// @keyframes fade-in 
// {
//   0% { 
//     opacity: 0;
//     transform: scale(0.5);
//   }
  
//   70% { 
//     opacity: 1;
//     transform: scale(1); 

//   }
  
//   100% { 
//     opacity: 1;
//     transform: scale(1);
//   }
// }

.but-card{
  position: absolute;
  bottom: 10px; 
  left: 10px; 
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