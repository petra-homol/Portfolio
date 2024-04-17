<template>
    <div class="projects flex flex-col md:flex-row justify-center items-center">

        <div v-if="!specificPortfolioItem">
            no projects
        </div>
        <div v-else>                
            
            <div class="text justify-center items-center">
                <h2>{{ specificPortfolioItem.title }}</h2>
                <p>{{ specificPortfolioItem.description }}</p>
                <p>{{ specificPortfolioItem.author }}</p>
                <p>{{ specificPortfolioItem.skills }}</p>
            
                <div v-if="specificPortfolioItem.link">
                    <a :href="specificPortfolioItem.link">
                    <button>VISIT WEBSITE</button>
                    </a>
                </div>
                <div v-else>
                    
                </div>
            </div>

            <div class="image flex justify-center items-center">

                <img :src="specificPortfolioItem.image" alt="">
                <img v-if="specificPortfolioItem.picture" :src="specificPortfolioItem.picture" alt="">

            </div>

        </div>       
    
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import {useRoute} from 'vue-router'
    import getPortfolio from '@/modules/getPortfolio'

    const {portfolioItems} = getPortfolio()
    const route = useRoute()
    const id = ref(route.params.id)

    const specificPortfolioItem = portfolioItems.value.find(item => item.id == id.value)
    console.log(specificPortfolioItem)
    
</script>

<style lang="scss" scoped>

.projects{
    background-color: #FBF9D9;
    height: 100vh;
}

.text{
    margin: 50px;
}

img{
    margin: 0 10px;
}


// @media (min-width: 768px) {
//     .image {
//         float: right;
//     }
// }

</style>