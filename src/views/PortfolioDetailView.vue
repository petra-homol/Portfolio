<template>

    <div class="container projects flex flex-col justify-center items-center">
        <div class="md:w-2/3 flex flex-col justify-center items-center">

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
    height: fit-content;
    min-height: 100vh;
    padding: 50px 0;
}

.text{
    margin: 50px;
}

img{
    margin: 10px 10px;
}

h2{
    padding-bottom: 5px;
}

@media (max-width: 768px) {
    .image {
        display: flex;
        flex-direction: column; /* Stack items vertically */
        align-items: center;
    }

    h2{
        font-weight: 500;
    }
}

</style>