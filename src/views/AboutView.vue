<template>
  <div class="conteiner flex flex-col justify-center items-center">

    <div class="about flex flex-col md:flex-row justify-center items-center">
      
      <div class="md:w-2/3 flex flex-col justify-center">
        <h2 class>ABOUT ME</h2>
        <p>I am a motivated multimedia designer with a passion for specialty coffee. A creative person seeking new experiences for professional and personal growth. Known for productivity, honesty, and good organizational skills. Ready to contribute positively to innovative projects.</p>
        <button>VIDEO CV</button>
        <button>PDF CV</button>
        <!-- <button @click="selectedCategory = 'video'"> VIDEO CV </button>
        <button @click="selectedCategory = 'pdf'"> PDF CV </button> -->
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
  background: rgb(69,44,18);
  background: linear-gradient(180deg, rgba(69,44,18,1) 0%, rgba(174,110,41,1) 100%);
  color: #b3d573;
  margin: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 10%;
  width: 100px;
}

p{
  text-align: justify;
  text-justify: inter-word;
}

</style>
