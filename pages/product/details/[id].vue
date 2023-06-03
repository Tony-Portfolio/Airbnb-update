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
                            <h3 class="font-[15px] font-[500]">Rp. {{ dataProduct.price }}.00 <span
                                    class="text-[13px] font-[400]">malam</span></h3>
                            <p class="text-[11px] font-[500] text-black/[0.8] underline">1 ulasan</p>
                        </div>
                        <NuxtLink :to="'/product/cart/' + $route.params.id">
                            <button
                                class="bg-gradient-to-r from-[#E92153] to-[#DE105E] w-full p-3 px-6 rounded-md text-white text-center text-[15px] font-bold">Pesan</button>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="items-center justify-between absolute top-0 left-0 w-full p-4 md:hidden flex z-[20]">
            <div class="">
                <NuxtLink to="/">
                    <div
                        class="w-[35px] h-[35px] shadow-md flex items-center justify-center rounded-full bg-white border-[1px] border-black/[0.1]">
                        <i class="fa-solid fa-chevron-left"></i>
                    </div>
                </NuxtLink>
            </div>
            <div class="flex items-center gap-4">
                <div class="w-[35px] h-[35px] shadow-md flex items-center justify-center rounded-full bg-white border-[1px] border-black/[0.1]"
                    @click="share">
                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                </div>
                <div
                    class="w-[35px] h-[35px] shadow-md flex items-center justify-center rounded-full bg-white border-[1px] border-black/[0.1]">
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
        </div>
        <DetailsNavSearch />
        <main class="w-full max-w-[1100px] md:mx-auto mx-0" v-if="dataProduct" :key="dataProduct.id">
            <section class="md:my-0 md:mx-4 md:p-4 md:p-0">
                <div class="flex items-center gap-4 md:flex hidden w-full justify-between p-4">
                    <div class="flex items-start flex-col">
                        <h3 class="font-bold text-3xl flex flex-col">
                            {{ dataProduct.title }}
                        </h3>
                        <div class="flex items-center gap-2">
                            <div class="">
                                <span class="text-[14px] font-[400] underline flex items-center gap-1"><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    {{ dataProduct.rating }}</span>
                            </div>
                            <i class="fa-solid fa-circle text-[3px]"></i>
                            <div class="flex items-center text-[14px] font-[500] gap-2" @click="share">
                                <p class="underline">Ulasan</p>
                            </div>
                            <i class="fa-solid fa-circle text-[3px]"></i>
                            <div class="flex items-center text-[14px] font-[500] gap-2" @click="share">
                                <p class="underline">{{ dataProduct.brand }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="flex items-center text-[14px] font-[500] gap-2" @click="share">
                            <i class="fa-solid fa-arrow-up-from-bracket"></i>
                            <p class="underline">Bagikan</p>
                        </div>
                        <div class="flex items-center text-[14px] font-[500] gap-2">
                            <i class="fa-regular fa-heart"></i>
                            <p class="underline">Simpan</p>
                        </div>
                    </div>
                </div>
                <div class="grid gap-10 w-full grid-cols-1" style="place-content:center;">
                    <div class="">
                        <div class="md:hidden block">
                            <Swiper class="groupSwiper"
                                :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination, SwiperNavigation]"
                                :slides-per-view="1" :loop="false" :effect="'creative'" :navigation="true" :hashNavigation="{
                                    watchState: true,
                                }" :pagination="{ clickable: true }" :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-100%', 0, -1],
    },
    next: {
        translate: ['100%', 0, 0],
    },
}">
                                <SwiperSlide v-for="image in dataProduct.images">
                                    <NuxtLink :to="'/product/details/' + dataProduct.id">
                                        <img :src="image" alt=""
                                            class="w-full h-[450px] duration-1000 rounded-lg object-cover object-top"
                                            loading="lazy">
                                    </NuxtLink>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div class="hidden md:flex gap-2">
                            <img :src="mainImg" alt=""
                                class="w-fit block m-auto md:w-full aspect-auto object-cover object-top"
                                id="img-variant-show">
                            <div class="md:grid-cols-2 grid-row-3 gap-2 grid-cols-5 grid p-2 md:p-0">
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
                    </div>
                    <div class="ml-2 mr-4 p-2">
                        <h3 class="font-bold text-3xl flex flex-col md:hidden">
                            {{ dataProduct.title }}
                            <span class="text-[14px] font-[400] underline flex items-center gap-1"><svg
                                    xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                                {{ dataProduct.rating }}</span>
                        </h3>
                        <p class="my-2 my-4 text-lg font-[500]">
                            {{ dataProduct.description }}
                        </p>
                        <p class="text-base flex gap-2 my-2">
                            Brand :
                            {{ dataProduct.brand }}
                        </p>
                        <p class="text-base flex gap-2 my-2">
                            Categori :
                            <NuxtLink :to="'/product/category/' + dataProduct.category" class="text-[#FF385C] underline">
                                {{ dataProduct.category }}
                            </NuxtLink>
                        </p>
                        <p class="text-base flex gap-2 my-2">
                            Minimal pembelian : 1
                        </p>
                        <p class="text-base mt-2">Stok Tersedia :
                            {{ dataProduct.stock }}
                        </p>
                        <p class="text-2xl my-8"><span class="text-lg">$</span>
                            {{ (dataProduct.price * 1).toLocaleString() }}.00
                        </p>
                        <!-- <p>Category : </p> -->
                        <!-- <p>Brands : </p> -->
                        <hr class="my-8">
                        <div class="">
                            <div class="rounded font-bold">
                                <div class="flex items-center justify-between">
                                    <label for="quantity">Jumlah</label>
                                </div>
                                <div class="flex items-center justify-start my-4 gap-2">
                                    <p class="text-xl font-bold text-[#FF385C] cursor-pointer w-[40px] text-center bg-slate-800/[0.015] p-2 rounded"
                                        @click="updateQuantity(-1)">-</p>
                                    <input type="number" min="1" :max="dataProduct.stock"
                                        class="text-center w-full md:w-[200px] border-2 border-black/[0.1] rounded p-2"
                                        v-model="quantity" @input="calculatePrice" />
                                    <p class="text-xl font-bold text-[#FF385C] cursor-pointer w-[40px] text-center bg-slate-800/[0.015] p-2 rounded"
                                        @click="updateQuantity(1)">+</p>
                                </div>
                                <div class="flex items-center flex-row">
                                    <p class="text-xl">Total : $
                                        <span id="total">
                                            {{ totalPrice.toLocaleString() }}.00
                                        </span>
                                    </p>
                                </div>
                                <div class="flex md:flex-row items-center justify-center gap-2 mt-8 flex-nowrap flex-col">
                                    <button
                                        class="sm:text-base text-sm sm:p-4 p-0 text-[#FF385C] py-[13.5px] border-2 border-[#FF385C] w-full p-2 hover:bg-[#FF385C] hover:text-white transition duration-300 ease-in-out"
                                        @click="cartData"><i class="fa-solid fa-cart-shopping mx-2"></i> Tambah ke
                                        keranjang</button>
                                    <NuxtLink :to="'/product/cart/' + dataProduct.id" class="w-full"><button
                                            class="sm:text-base text-sm sm:p-4 p-0 text-white py-4 bg-[#FF385C] w-full p-2">
                                            Bayar
                                            Sekarang
                                        </button>
                                    </NuxtLink>
                                    <button
                                        class="sm:text-base text-sm sm:p-4 p-0 text-white py-4 bg-pink-500 p-2 md:block hidden md:w-[120px]">
                                        <i class="fa-regular fa-lg fa-heart mx-1"></i></button>
                                    <!-- <button @click="removestorage">Remove Storage</button> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <hr class = "my-4">
                    <div class="">
                    <div class = "flex items-center gap-2">
                        
                            <span class="text-[14px] font-[500] text-xl flex items-center gap-1"><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="#FF385C" viewBox="0 0 24 24"
                                        stroke-width="1.5" class="w-8 h-8">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    {{ dataProduct.rating }}</span>
                                    <i class="fa-solid fa-circle text-[3px]"></i>
                        <h2 class = "my-4 font-bold text-xl flex items-center gap-2">Ulasan</h2>            
                                    </div>
                        <div class="my-4 flex flex-col gap-8">
                            <div class="flex flex-col gap-4">
                                <div class = "flex gap-4">
                                    <div class="">
                                        <img src = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" class = "w-[40px] bg-gray-500/[0.2] p-1 rounded-full">
                                    </div>
                                    <div class="">
                                        <h3 class = "font-bold text-[15px]">Nama user</h3>
                                        <p class = "font-[500] text-[13px]">Mei 2023</p>
                                    </div>
                                </div>
                                <div class = "">
                                    <p>lorem ipsum dolor si amet</p>
                                </div>
                            </div>
                            <div class="flex flex-col gap-4">
                                <div class = "flex gap-4">
                                    <div class="">
                                        <img src = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" class = "w-[40px] bg-gray-500/[0.2] p-1 rounded-full">
                                    </div>
                                    <div class="">
                                        <h3 class = "font-bold text-[15px]">Nama user</h3>
                                        <p class = "font-[500] text-[13px]">Mei 2023</p>
                                    </div>
                                </div>
                                <div class = "">
                                    <p>lorem ipsum dolor si amet</p>
                                </div>
                            </div>
                            <div class="flex flex-col gap-4">
                                <div class = "flex gap-4">
                                    <div class="">
                                        <img src = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" class = "w-[40px] bg-gray-500/[0.2] p-1 rounded-full">
                                    </div>
                                    <div class="">
                                        <h3 class = "font-bold text-[15px]">Nama user</h3>
                                        <p class = "font-[500] text-[13px]">Mei 2023</p>
                                    </div>
                                </div>
                                <div class = "">
                                    <p>lorem ipsum dolor si amet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <NuxtLayout :name="layouts.footer"></NuxtLayout>
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
            totalPrice: 0,
            cart: [],
            totalQuantity: 0,
            totalPrice: 0,
            totalProducts: 0
        }
    },

    async created() {
        this.getProductData();
    },
    mounted() {
        window.addEventListener("scroll", this.handlescroll);
    },
    methods: {
        async cartData() {
            alert('Produk ditambahkan kedalam keranjang')
            if (!localStorage.getItem('products')) {
                const products = [
                    {
                        id: this.dataProduct.id,
                        quantity: this.quantity
                    }
                ];

                const jsonProduct = JSON.stringify(products);
                localStorage.setItem('products', jsonProduct)
            }
            else {
                const products_decode = JSON.parse(localStorage.getItem('products'));

                const productExists = products_decode.find(product => product.id === this.dataProduct.id);
                if (productExists) {
                    products_decode.forEach((product) => {
                        if (product.id === this.dataProduct.id) {
                            product.quantity += this.quantity
                            console.log(product.id)
                            console.log(this.dataProduct.id)
                        }
                    })
                }
                else {
                    const id = this.dataProduct.id;
                    const quantity = this.quantity;
                    products_decode.push({ id, quantity })
                }
                console.log(products_decode)
                const jsonProduct = JSON.stringify(products_decode);
                localStorage.setItem('products', jsonProduct)
            }
        },
        async getProductData() {
            const route = useRoute();
            const id = route.params.id;
            try {
                const res = await axios.get("https://dummyjson.com/products/" + id);
                this.dataProduct = await res.data;
                this.initstore()
                this.calculatePrice();
            } catch (error) {
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
        share() {
            const url = window.location.href;
            navigator.clipboard.writeText(url);
            alert("Link Copied")
        },
        // removestorage(){
        //     localStorage.removeItem('products')
        // }
    },
    mounted() {

    },
}
</script>
<style>
.swiper-button-next {
    @apply flex items-center justify-center text-sm text-rose-500 hover:translate-x-1 duration-300;
    display: none;
}

.swiper-button-prev {
    @apply flex items-center justify-center text-sm text-rose-500 hover:translate-x-1 duration-300;
    display: none;
}

.swiper-button-disabled {
    display: none;
}


.groupSwiper:hover .swiper-button-prev {
    display: block;
}

.groupSwiper:hover .swiper-button-next {
    display: block;
}

.swiper-pagination-bullet {
    @apply bg-rose-400;
    width: 6px;
    height: 6px;
    opacity: 0.5;
}

.swiper-pagination-bullet-active {
    opacity: 1;
}
</style>