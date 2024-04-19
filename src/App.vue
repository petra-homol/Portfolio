<template>

  <div class="font-quicksand">
    <div>

      <header>
      
        <nav>
          <RouterLink to="/about" active-class="active-link">ABOUT ME</RouterLink>
          <RouterLink to="/">
              <img class="hp" active-class="active-link" src="@/assets/hp_logo.svg" alt="">
          </RouterLink>        
          <RouterLink to="/portfolio" active-class="active-link">PROJECTS</RouterLink>
        </nav>

      </header>

      <div class="content">
        <transition name="slide-fade">
          <RouterView />
        </transition>
      </div>

      <div class="row-footer grid md:grid-cols-3 flex flex-col md:flex-row justify-center items-center">
        
        <a href="mailto:petra.homolova26@gmail.com">
          <div class="col-span-1 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32.802" height="15" viewBox="0 0 32.802 25.896">
              <path id="email" d="M7.179,5H29.622A5.172,5.172,0,0,1,34.8,10.179V25.717A5.172,5.172,0,0,1,29.622,30.9H7.179A5.172,5.172,0,0,1,2,25.717V10.179A5.172,5.172,0,0,1,7.179,5m0,1.726a3.284,3.284,0,0,0-2.21.811L18.4,16.222,31.832,7.538a3.284,3.284,0,0,0-2.21-.811H7.179M18.4,18.311,3.951,8.936a3.691,3.691,0,0,0-.224,1.243V25.717A3.463,3.463,0,0,0,7.179,29.17H29.622a3.463,3.463,0,0,0,3.453-3.453V10.179a3.691,3.691,0,0,0-.224-1.243Z" transform="translate(-2 -5)" fill="#452c12"/>
            </svg>
            <p>petra.homolova26@gmail.com</p>
          </div>
        </a>
        
        <a href="tel:+4550216575">
          <div class="col-span-1 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24.221" height="15" viewBox="0 0 24.221 24.221">
              <path id="phone_2_" data-name="phone (2)" d="M24.309,27.221a1.91,1.91,0,0,0,1.912-1.912V20.847a1.91,1.91,0,0,0-1.912-1.912,13.635,13.635,0,0,1-4.36-.7,1.925,1.925,0,0,0-1.938.472l-1.836,1.836a18.832,18.832,0,0,1-7.509-7.509L10.49,11.21a1.868,1.868,0,0,0,.484-1.95,13.848,13.848,0,0,1-.688-4.347A1.91,1.91,0,0,0,8.374,3H3.912A1.91,1.91,0,0,0,2,4.912,22.333,22.333,0,0,0,24.309,27.221M3.912,4.275H8.374a.631.631,0,0,1,.637.637,15.193,15.193,0,0,0,.752,4.742.606.606,0,0,1-.153.637L7.1,12.79a20.949,20.949,0,0,0,9.319,9.332L18.9,19.611a.653.653,0,0,1,.65-.166,14.976,14.976,0,0,0,4.755.765.631.631,0,0,1,.637.637v4.462a.631.631,0,0,1-.637.637A21.055,21.055,0,0,1,3.275,4.912.631.631,0,0,1,3.912,4.275Z" transform="translate(-2 -3)" fill="#452c12"/>
            </svg>
            <p>+45 5021 6575</p>
          </div>
        </a>
        
        <a href="https://www.linkedin.com/in/petrahomolova/">
          <div class="col-span-1 flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 49 49">
              <g id="Rectangle_20" data-name="Rectangle 20" fill="none" stroke="#452c12" stroke-width="1">
                <rect width="49" height="49" rx="15" stroke="none"/>
                <rect x="0.5" y="0.5" width="48" height="48" rx="14.5" fill="none"/>
              </g>
              <text id="in" transform="translate(16 33)" fill="#452c12" stroke="#452c12" stroke-width="1" font-size="22" font-family="Quicksand-Regular, Quicksand"><tspan x="0" y="0">in</tspan></text>
            </svg>
            <p>/petrahomolova</p>
          </div>
        </a>
        
      
      </div>

    </div> 
      
  </div>  

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
export default {
  name: 'MyComponent',
}
</script>


<style scoped>

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
  transform:translateY( 20px)
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.font-quicksand {
  font-family: 'quicksand';
}

header {
  position: fixed;
  height: 8vh;
  width: 100%;
  background: rgb(126,178,66);
  z-index: 100;
}

nav {
  position: fixed;
  width: 100%;
  font-size: 12px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

.active-link {
  font-weight: bold;
}

.hp{
  width: auto;
  height: 3vh;
}

.row-footer{
  background-color: #7eb242;
  height: 20vh;
  width: 100%;
}

@media (max-width: 770px) {
    .row-footer {
      padding: 10px 0 0 0;
      margin: 0;
      gap: 0;
      height: fit-content;
    }
}

</style>
