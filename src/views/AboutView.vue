<template>
  <div class="conteiner flex flex-col justify-center items-center">

    <div class="about flex flex-col md:flex-row justify-center items-center">
      
      <div class="md:w-2/3 flex flex-col justify-center items-center">
        <h2 class>ABOUT ME</h2>
        <p>I am a motivated multimedia designer with a passion for specialty coffee. A creative person seeking new experiences for professional and personal growth. Known for productivity, honesty, and good organizational skills. Ready to contribute positively to innovative projects.</p>
        
        <div class="flex">
          <a href="https://youtu.be/Nbr_VCcyHzM">
            <button>VIDEO CV</button>
          </a>
          <a href="https://indd.adobe.com/view/c96f69b3-5c14-43f5-8a11-fed7882e53ed">
            <button>PDF CV</button>
          </a>
        </div>  

        <div class="flex flex-col justify-end items-center p-10">
          <p class="p-5"> GET IN TOUCH</p>
          <svg class="fade-in-down" xmlns="http://www.w3.org/2000/svg" width="auto" height="30" viewBox="0 0 187.233 268.617">
            <line id="Line_1" data-name="Line 1" y2="265" transform="translate(92.115 1.5)" fill="none" stroke="#452c12" stroke-linecap="round" stroke-width="7"/>
            <line id="Line_2" data-name="Line 2" x2="90" y2="105" transform="translate(2.115 161.5)" fill="none" stroke="#452c12" stroke-linecap="round" stroke-width="7"/>
            <line id="Line_3" data-name="Line 3" x1="93" y2="105" transform="translate(92.115 161.5)" fill="none" stroke="#452c12" stroke-linecap="round" stroke-width="7"/>
          </svg>
        </div>
        
      </div>
    
    </div>
  
  </div>
  
</template>

<script setup>

</script>

<style>

.about{
  width: 100%;
  height: 92vh;
  background-color: #fbf9d9;
  padding: 0px;
}

button{
  border: 2px solid #452c12;
  box-shadow: 0 4px 6px #b3d573; 
  color: #452c12;
  margin: 10px;
  padding: 5px 15px;
  border-radius: 20px;
  width: fit-content;
}

p{
  text-align: justify;
  text-justify: inter-word;
}

.fade-in-down {
  margin-top: 10px;
  animation: fade-in-down 2s ease infinite;
}
@keyframes fade-in-down {
  0% {
    opacity: 0.5;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}


</style>
