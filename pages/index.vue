<template>
    <div>

        <NuxtLayout :name="layouts.header"></NuxtLayout>

        <NuxtLayout :name="layouts.container">
            <section class="my-2">
                <div
                    class="grid grid-rows-[repeat(auto,550px)] gap-y-8 gap-6 my-4" :class="fixGridDataInit">
                    <div v-for="item in dataProduct" :key="item.id">
                        <productCard :data="item"></productCard>
                    </div>
                </div>
            </section>
        </NuxtLayout>

        <NuxtLayout :name="layouts.footer"></NuxtLayout>
    </div>
</template>

<script>

import axios from 'axios';


export default {
    data() {
        return {
            layouts: {
                header: "header",
                container: "container",
                footer: "footer"
            },
            dataProduct: [],
            displayedInput:""
        }
    },
    computed: {
        query() {
            // Access the search variable from nav-search.vue
            return 'https://dummyjson.com/products/search?q=' + encodeURIComponent(this.displayedInput)
        },
        fixGridDataInit(){
            if(this.dataProduct.length > 3){
                return 'grid-cols-[repeat(auto-fit,minmax(280px,1fr))]';
            }
            else{
                return 'grid-cols-[repeat(auto-fit,minmax(280px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(280px,300px))]';
            }
        }
    },
    methods: {
        fixGridDataLoaded(){
            if(this.dataProduct.length > 3){
                return 'grid-cols-[repeat(auto-fit,minmax(280px,1fr))]';
            }
            else{
                return 'grid-cols-[repeat(auto-fit,minmax(280px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(280px,300px))]';
            }
        },
        async getProductData() {
            try {
                const res = await axios.get(this.query);
                this.dataProduct = await res.data.products;
                this.fixGridDataLoaded();
            } catch (error) {
                console.log(error);
            }
        },
    },
    async created() {
        this.getProductData();
    },
}
</script>
