<template>
    <div class="">
        <div class="border-b-[1px] border-black/[0.1] fixed top-0 left-0 w-full bg-white md:block hidden"
            v-show="scrolltop">
            <div class="w-full max-w-[1100px] mx-auto py-4 flex items-center justify-between">
                <div class="md:mx-9 flex items-center justify-between ">
                    <ul class="flex gap-7 text-[14px] font-[500]">
                        <li>Foto</li>
                        <li>Fasilitas</li>
                        <li>Ulasan</li>
                        <li>Lokasi</li>
                    </ul>
                    <div class="flex items-center gap-4 whitespace-nowrap opacity-0">
                        <div class="flex flex-col">
                            <h3 class="font-[15px] font-[500]">Rp. {{ dataProduct.price }} <span
                                    class="text-[13px] font-[400]">malam</span></h3>
                            <p class="text-[11px] font-[500] text-black/[0.8] underline">1 ulasan</p>
                        </div>
                        <NuxtLink :to="'/product/book/' + $route.params.id">
                            <button
                                class="bg-gradient-to-r from-[#E92153] to-[#DE105E] w-full p-3 px-6 rounded-md text-white text-center text-[15px] font-bold">Pesan</button>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="items-center justify-between absolute top-0 left-0 w-full p-4 md:hidden flex">
            <div class="">
                <NuxtLink to="/">
                    <div
                        class="w-[35px] h-[35px] shadow-md flex items-center justify-center rounded-full bg-white border-[1px] border-black/[0.1]">
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                </NuxtLink>
            </div>
            <div class="flex items-center gap-4">
                <div
                    class="w-[35px] h-[35px] shadow-md flex items-center justify-center rounded-full bg-white border-[1px] border-black/[0.1]">
                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                </div>
                <div
                    class="w-[35px] h-[35px] shadow-md flex items-center justify-center rounded-full bg-white border-[1px] border-black/[0.1]">
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
        </div>
        <div class="w-full max-w-[1100px] mx-auto flex flex-col gap-4 md:block hidden">
            <div class="flex items-center justify-between py-4 md:mx-9">
                <div class="">
                    <NuxtLink to="/">
                        <img src="/images/airbnb-logo.png" alt="" class="w-[100px]">
                    </NuxtLink>
                </div>
                <div class="">
                    <div class="mx-2">
                        <ul
                            class="flex border-2 border-black/[0.1] shadow-lg gap-4 py-2 px-3 rounded-full text-[14px] font-[500] items-center w-[300px]">
                            <li class="pl-4 flex items-center gap-2 justify-between flex-grow">Mulai pencarian Anda <div
                                    class="w-[35px] h-[35px] text-white rounded-full bg-[#FF385C] flex items-center justify-center p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="w-12 h-12">
                                        <path fill-rule="evenodd"
                                            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </li>
                        </ul>
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
        </div>
        <main class="w-full max-w-[1100px] md:mx-auto mx-0" v-if="dataProduct" :key="dataProduct.id">
            <section class="md:my-10 mx-4 p-4 md:p-0">
                <div class="grid gap-10 w-full grid-cols-1 md:grid-cols-[300px_1fr]" style="place-content:center;">
                    <div class="">
                        <img :src="mainImg" alt=""
                            class="w-fit block m-auto md:w-full aspect-square object-cover object-top"
                            id="img-variant-show">
                        <div class="grid-cols-2 grid-row-3 gap-2 md:grid hidden my-2">
                            <img :src="dataProduct.thumbnail" alt=""
                                class="border-[1px] border-black/[0.2] w-full h-full object-cover rounded-lg aspect-video cursor-pointer"
                                @click="handleImg(dataProduct.thumbnail)">
                            <div class="w-full h-full" v-for=" img  in  dataProduct.images " :key="img.id">
                                <img :src="img" alt=""
                                    class="border-[1px] border-black/[0.2] w-full h-full object-cover rounded-lg aspect-video cursor-pointer"
                                    @click="handleImg(img)">
                            </div>
                        </div>
                    </div>
                    <div class="ml-2 mr-4">
                        <h3 class="font-bold text-3xl">
                            {{ dataProduct.title }}
                        </h3>
                        <p class="my-2 text-sm my-4">
                            {{ dataProduct.description }}
                        </p>
                        <p class="text-base flex gap-2 my-2">
                            Brand :
                            {{ dataProduct.brand }}
                        </p>
                        <p class="text-sm flex gap-2 my-2">
                            Category :
                            <NuxtLink :to="'/product/category/' + dataProduct.category" class="text-[#FF385C] underline">
                                {{ dataProduct.category }}
                            </NuxtLink>
                        </p>
                        <p class="text-2xl my-8"><span class="text-lg">$</span>
                            {{ dataProduct.price }}
                        </p>
                        <p class="text-sm mt-2">Stock Left :
                            {{ dataProduct.stock }}
                        </p>
                        <!-- <p>Category : </p> -->
                        <!-- <p>Brands : </p> -->
                        <hr class="my-8">
                        <div class="">
                            <form :action="'/product/book/' + dataProduct.id" class="rounded font-bold">
                                <div class="flex items-center justify-between">
                                    <label for="quantity">Quantity</label>
                                </div>
                                <div class="flex items-center justify-start my-4 gap-2">
                                    <p class="text-xl font-bold text-[#FF385C] cursor-pointer w-[40px] text-center bg-slate-800/[0.015] p-2 rounded"
                                        @click="updateQuantity(-1)">-</p>
                                    <input type="number" min="1" :max="dataProduct.stock"
                                        class="text-center w-[200px] border-2 border-black/[0.1] rounded p-2"
                                        v-model="quantity" @input="calculatePrice" />
                                    <p class="text-xl font-bold text-[#FF385C] cursor-pointer w-[40px] text-center bg-slate-800/[0.015] p-2 rounded"
                                        @click="updateQuantity(1)">+</p>
                                </div>
                                <div class="flex items-center flex-row">
                                    <p class="text-xl">Total : $
                                        <span id="total">
                                            {{ totalPrice.toLocaleString() }}
                                        </span>
                                    </p>
                                </div>
                                <div class="flex flex-row items-center justify-center gap-2 mt-8 flex-nowrap">
                                    <button
                                        class="sm:text-base text-sm sm:p-4 p-0 text-[#FF385C] py-[13.5px] border-2 border-[#FF385C] w-full p-2 hover:bg-[#FF385C] hover:text-white transition duration-300 ease-in-out"><i
                                            class="fa-solid fa-cart-shopping mx-2"></i> Add to Cart</button>
                                    <button
                                        class="sm:text-base text-sm sm:p-4 p-0 text-white py-4 bg-[#FF385C] w-full p-2">Buy
                                        Now</button>
                                    <button
                                        class="sm:text-base text-sm sm:p-4 p-0 text-white py-4 bg-pink-500 p-2 w-[120px]">
                                        <i class="fa-regular fa-lg fa-heart mx-1"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
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
            dataProduct: [],
            dropdownmenu: false,
            scrolltop: false,
            mainImg: "",
            quantity: 1,
            stock: 0,
            price: 0,
            totalPrice: 0
        }
    },

    async created() {
        this.getProductData();
    },
    mounted() {
        window.addEventListener("scroll", this.handlescroll);
    },
    methods: {
        async getProductData() {
            const route = useRoute();
            const id = route.params.id;
            try {
                const res = await axios.get("https://dummyjson.com/products/" + id);
                this.dataProduct = await res.data;
                this.initstore()
            } catch (error) {
                console.log(res);
                console.log(error);
            }
        },
        initstore() {
            this.mainImg = this.dataProduct.thumbnail;
            this.stock = this.dataProduct.stock;
            this.price = this.dataProduct.price;
        },
        handlescroll() {
            const scrollpositionY = window.scrollY || window.pageYOffset;
            var scrollshow = document.getElementById("img").scrollTop;
            this.scrolltop = scrollpositionY > 550
        },
        handleImg(img) {
            this.mainImg = img
        },
        updateQuantity(num) {
            let qSum = this.quantity + num;
            if (qSum < 1) {
                qSum = 1;
            } else if (qSum > this.stock) {
                qSum = this.stock;
            }
            this.quantity = qSum;
            this.calculatePrice();
        },
        calculatePrice() {
            if (isNaN(this.quantity) || this.quantity === null) {
                this.quantity = 1;
            }
            if (this.quantity > this.stock) {
                this.quantity = this.stock;
            }
            this.totalPrice = this.quantity * this.price;
        },
    },
    mounted() {
        this.calculatePrice();
    },
}
</script>