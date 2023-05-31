<template>
    <div class="mt-0">
        <NuxtLayout :name="layouts.header">

        </NuxtLayout>
        <div class="w-11/12 mx-auto">
            <section class="my-2">
                <div
                    class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] grid-rows-[repeat(auto,550px)] gap-y-8 gap-6 my-4">
                    <div v-for="item in dataProduct" :key="item.id">
                        <productCard :data="item"></productCard>
                    </div>
                </div>
            </section>
        </div>
        <NuxtLayout :name="layouts.footer">

        </NuxtLayout>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            layouts: {
                header: "header",
                footer: "footer"
            },
            dataProduct: [],
        }
    },
    async created(){
        this.getProductData();
    },
    methods: {
        async getProductData() {
            try {
                const res = await axios.get("https://dummyjson.com/products?limit=50");
                this.dataProduct = await res.data.products;
            } catch (error) {
                console.log(error);
            }
        },
    }
}
</script>