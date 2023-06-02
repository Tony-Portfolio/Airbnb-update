<template>
    <nav class="w-full max-w-[1100px] mx-auto flex flex-col gap-4 md:block hidden">
        <div class="flex items-center justify-between py-4 md:mx-9">
            <div class="">
                <NuxtLink to="/">
                    <img src="/images/airbnb-logo.png" alt="" class="w-[100px]">
                </NuxtLink>
            </div>
            <div class="flex-1 md:flex-none relative">
                <div class="w-full">
                    <div class="relative">
                        <input type="text" placeholder="cari barang"
                            class="flex border-2 border-black/[0.1] shadow-lg py-3 px-4 pr-14 rounded-full text-[14px] font-[500] block md:w-[350px] w-full lg:focus:w-[450px]"
                            style="transition: width 0.5s;outline:rgba(0,0,0,0.5);" v-model="search" @keyup="searchData">
                        <div
                            class="w-[35px] h-[35px] text-white rounded-full bg-[#FF385C] flex items-center justify-center p-2 absolute top-[50%] right-[10px] translate-y-[-50%]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-12 h-12">
                                <path fill-rule="evenodd"
                                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="absolute top-[100%] left-[50%] translate-x-[-50%] w-full bg-white shadow-lg rounded-lg">
                    <div>
                        <div class="flex gap-2 p-2" v-for="items in dataProduct" :key="items.id">
                            <NuxtLink :to="'/product/details/' + items.id" class="flex gap-2 shadow-sm w-full">
                                <div class="">
                                    <img :src="items.thumbnail" alt="" class="w-[80px] h-[80px] object-cover">
                                </div>
                                <div class="flex flex-col">
                                    <h3 class="font-[500] text-[14px]">{{ items.title }}</h3>
                                    <div class="">
                                        <p class="text-black/[0.6] font-[500] text-[13px]">{{ items.brand }} - {{
                                            items.category }}</p>
                                    </div>
                                    <p class="text-[15px] font-[500]">$.{{ items.price }}</p>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-4">
                <p>Jadikan rumah anda airbnb</p>
                <div class="flex items-center p-1 border-[1px] border-black/[0.1] rounded-full gap-1 relative">
                    <div class="flex items-center gap-1" @click="dropdownmenu = !dropdownmenu">
                        <div class="mx-2">
                            <i class="fa-solid fa-bars"></i>
                        </div>
                        <div
                            class="bg-black/[0.6] w-[15px] h-[15px] rounded-full flex items-center justify-center p-4 text-white">
                            <i class="fa-solid fa-user"></i>
                        </div>
                    </div>
                    <div class="absolute bg-white top-[100%] left-[-215%] py-2 w-[240px] z-[200] shadow-lg rounded-lg flex flex-col gap-3"
                        v-show="dropdownmenu" @click="dropdownmenu = !dropdownmenu">
                        <div class="">
                            <p class="hover:bg-black/[0.03] py-3 text-[15px] px-4 cursor-pointer">Daftar</p>
                            <p class="hover:bg-black/[0.03] py-3 text-[15px] px-4 cursor-pointer">Masuk</p>
                        </div>
                        <hr>
                        <div class="">
                            <p class="hover:bg-black/[0.03] py-3 text-[15px] px-4 cursor-pointer">Jadikan rumah Anda
                                Airbnb</p>
                            <p class="hover:bg-black/[0.03] py-3 text-[15px] px-4 cursor-pointer">Bantuan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            layouts: {
                header: "header",
                footer: "footer"
            },
            dropdownmenu: false,
            search: "",
            dataProduct: []
        }
    },
    methods: {
        

        fixData() {
            if (this.search.length == 0) {
                this.dataProduct = []
            }
        },
        dataExist() {
            if (this.dataProduct.length > 0) {
                return ' flex';
            }
            else {
                return ' hidden';
            }
        },
        async searchData() {
            const query = "https://dummyjson.com/products/search?q=" + this.search + "&limit=5";
            try {
                const res = await axios.get(query);
                this.dataProduct = await res.data.products;
                this.fixData();
                this.dataExist();
            } catch (error) {
                console.log(res);
                console.log(error);
            }
        },
    },
    mounted() {
        this.dataExist();
    }
}
</script>