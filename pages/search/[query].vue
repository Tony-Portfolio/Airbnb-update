<template>
    <div>

        <NuxtLayout :name="layouts.header"></NuxtLayout>

        <NuxtLayout :name="layouts.container">
            <section class="my-2 min-h-screen">
                <div class="grid grid-rows-[repeat(auto,550px)] gap-y-8 gap-6 my-4" :class="fixGridDataInit">
                    <div v-for="item in data" :key="item.id">
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
            data:[]
        }
    },
    computed: {
        fixGridDataInit(){
            if(this.data.length > 3){
                return 'grid-cols-[repeat(auto-fit,minmax(280px,1fr))]';
            }
            else{
                return 'grid-cols-[repeat(auto-fit,minmax(280px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(280px,300px))]';
            }
        }
    },
    async created() {
        this.getData();
    },
    methods: {
        async getData() {
            const route = useRoute();
            const query = route.params.query;
            
            try {
                const res = await axios.get("https://dummyjson.com/products/search?q=" + query);
                this.data = await res.data.products;
            } catch (error) {
                console.log(error);
            }
        },
    },
    
}
</script>