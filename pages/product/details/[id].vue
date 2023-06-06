<template>
    <div class="">
        <div :key="updateComponents">
            <NavMidHeader />
        </div>

        <main class="w-full max-w-[1200px] md:mx-auto mx-0" v-if="dataProduct" :key="dataProduct.id">
            <section class="md:my-0 md:mx-4 md:p-4 md:p-0">
                <div class="flex items-center gap-4 md:flex hidden w-full justify-between py-4">
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
                            <div class="flex items-center text-[14px] font-[500] gap-2">
                                <p class="underline">Ulasan</p>
                            </div>
                            <i class="fa-solid fa-circle text-[3px]"></i>
                            <div class="flex items-center text-[14px] font-[500] gap-2">
                                <p class="underline">{{ dataProduct.brand }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="flex items-center text-[14px] font-[500] gap-2 cursor-pointer" @click="share">
                            <i class="fa-solid fa-arrow-up-from-bracket"></i>
                            <p class="underline">Bagikan</p>
                        </div>
                        <div class="flex items-center text-[14px] font-[500] gap-2">
                            <i class="fa-regular fa-heart"></i>
                            <p class="underline">Simpan</p>
                        </div>
                    </div>
                </div>
                <div class="md:hidden block">
                    <swiper direction="horizontal" :slides-per-view="1" navigation :pagination="{ clickable: false }"
                        @swiper="onSwiper" @slideChange="onSlideChange" :modules="modules"
                        class="md:hidden flex max-md:overflow-x-auto">
                        <swiper-slide class="md:w-1/2 md:pr-1 md:hidden">
                            <img :src="dataProduct?.thumbnail" alt=""
                                class="w-full md:aspect-video aspect-square max-md:h-full object-cover h-[300px]" />
                        </swiper-slide>
                        <swiper-slide v-if="dataProduct?.images?.lentgh != 0" v-for="image in dataProduct?.images"
                            class="md:w-1/2 md:pl-1 md:grid md:gap-2 grid-cols-2 max-md:flex md:hidden">
                            <img :src="image" alt=""
                                class="w-full md:aspect-video aspect-square max-md:h-full object-cover h-[300px] " />
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="grid gap-5 md:gap-10 w-full grid-cols-1" style="place-content:center;">
                    <div class="">
                        <!-- <div class="md:hidden block">
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
                                    <img :src="image" alt="" class="w-full h-[450px] duration-1000 object-cover object-top"
                                        loading="lazy">
                                </SwiperSlide>
                            </Swiper>
                        </div> -->
                        <div class="md:flex gap-2 md:flex-row flex-col hidden">
                            <img :src="mainImg" alt=""
                                class="w-fit block m-auto w-full md:aspect-auto object-cover object-top"
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
                    <div class="flex items-start md:justify-between md:gap-8 flex-col md:flex-row flex-grow p-4 md:p-0">
                        <div class="md:p-0 p-0">
                            <h3 class="font-bold text-3xl flex flex-col md:hidden">
                                {{ dataProduct.title }}
                                <span class="text-[14px] font-[400] underline flex items-center gap-1"><svg
                                        xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    {{ dataProduct.rating }}</span>
                            </h3>
                            <h3 class="font-[600] text-3xl md:block hidden">{{ dataProduct.title }}</h3>
                            <p class="my-2 my-4 text-lg font-[500]">
                                {{ dataProduct.description }}
                            </p>
                            <p class="text-base flex gap-2 my-2">
                                Kondisi : Baru
                            </p>
                            <p class="text-base flex gap-2 my-2">
                                Brand :
                                {{ dataProduct.brand }}
                            </p>
                            <p class="text-base flex gap-2 my-2">
                                Kategori :
                                <NuxtLink :to="'/product/category/' + dataProduct.category"
                                    class="text-[#FF385C] underline">
                                    {{ dataProduct.category }}
                                </NuxtLink>
                            </p>
                            <p class="text-base flex gap-2 my-2">
                                Minimal pembelian : 1
                            </p>
                            <p class="text-base mt-2">Stok Tersedia :
                                {{ dataProduct.stock }}
                            </p>
                            <!-- <p>Category : </p> -->
                            <!-- <p>Brands : </p> -->
                        </div>
                        <hr class="my-8 w-full md:hidden block">
                        <div
                            class="md:shadow-lg md:p-4 p-0 md:border-[1px] md:border-black/[0.1] rounded w-full md:w-[400px] shrink-0">
                            <div class="rounded font-bold flex flex-col gap-4 md:gap-0">
                                <div class="md:p-2 flex flex-col gap-2">
                                    <div class="flex items-center gap-2">
                                        <h3 class="text-[18px]">{{ dataProduct.title }}</h3>
                                        <span class="text-[14px] font-[400] underline flex items-center gap-1"><svg
                                                xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                            {{ dataProduct.rating }}</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <p class="font-[500] text-black/[0.8] text-[16px]">${{ dataProduct.price }}.00 / pcs
                                        </p>
                                        <p class="font-[500] text-black/[0.8] text-[16px]">Stok : {{ dataProduct.stock }}
                                            pcs</p>
                                    </div>
                                </div>
                                <hr class="my-4 md:block hidden">
                                <div class="flex flex-col gap-2">
                                    <label for="quantity" class="text-[14px] font-[500] text-black/[0.8]">Quantity</label>
                                    <div class="flex items-center w-full md:w-auto">
                                        <p class="text-xl font-bold text-[#FF385C] cursor-pointer w-[40px] text-center bg-slate-800/[0.015] p-2 rounded"
                                            @click="updateQuantity(-1)">-</p>
                                        <input type="number" min="1" :max="dataProduct.stock"
                                            class="text-center w-full border-2 border-black/[0.1] rounded p-2"
                                            v-model="quantity" @input="calculatePrice" />
                                        <p class="text-xl font-bold text-[#FF385C] cursor-pointer w-[40px] text-center bg-slate-800/[0.015] p-2 rounded"
                                            @click="updateQuantity(1)">+</p>
                                    </div>
                                </div>
                                <hr class="my-4 md:block hidden">
                                <div class="flex items-center justify-between flex-row p-2">
                                    <p class="font-[500] text-black/[0.8] text-[16px]">${{ dataProduct.price }}.00 x {{
                                        quantity }}
                                    </p>
                                    <p class="font-[500] text-black/[0.8] text-[16px]">${{ totalPrice.toLocaleString() }}.00
                                    </p>
                                </div>
                                <div class="flex items-center flex-row my-2 p-2">
                                    <p class="text-xl">Total : $
                                        <span id="total">
                                            {{ totalPrice.toLocaleString() }}.00
                                        </span>
                                    </p>
                                </div>
                                <div class="flex items-center justify-center gap-2 flex-nowrap flex-col">
                                    <button
                                        class="sm:text-base text-sm sm:p-3 p-0 text-[#FF385C] py-[13.5px] border-2 border-[#FF385C] w-full p-2 hover:bg-[#FF385C] hover:text-white transition duration-300 ease-in-out"
                                        @click="cartData"><i class="fa-solid fa-cart-shopping mx-2"></i> Tambah ke
                                        keranjang</button>
                                    <button
                                        class="sm:text-base text-sm sm:p-3 p-0 text-white bg-[#FF385C] py-[13.5px] border-2 border-[#FF385C] w-full p-2 hover:bg-[#FF385C] hover:text-white transition duration-300 ease-in-out"
                                        @click="checkoutData">Beli Sekarang</button>
                                    <!-- <NuxtLink to="/product/cart/" class="w-full"><button
                                            class="sm:text-base text-sm sm:p-4 p-0 text-white py-4 bg-[#FF385C] w-full p-2" @click="cartData"> Bayar Sekarang </button>
                                    </NuxtLink> -->
                                    <!-- <button @click="removestorage">Remove Storage</button> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="md:p-0 p-4">
                    <hr class="my-4">
                    <div class="">
                        <div class="flex items-center gap-2">

                            <span class="text-[14px] font-[500] text-xl flex items-center gap-1"><svg
                                    xmlns="http://www.w3.org/2000/svg" fill="#FF385C" viewBox="0 0 24 24" stroke-width="1.5"
                                    class="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                                {{ dataProduct.rating }}</span>
                            <i class="fa-solid fa-circle text-[3px]"></i>
                            <h2 class="my-4 font-bold text-xl flex items-center gap-2">Ulasan</h2>
                        </div>
                        <div class="my-4 flex flex-col gap-8">
                            <div class="flex flex-col gap-4">
                                <div class="flex gap-4">
                                    <div class="">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                                            class="w-[40px] bg-gray-500/[0.2] p-1 rounded-full">
                                    </div>
                                    <div class="">
                                        <h3 class="font-bold text-[15px]">jessica_23</h3>
                                        <p class="font-[500] text-[13px]">Mei 2022</p>
                                    </div>
                                </div>
                                <div class="">
                                    <p>Pengiriman nya cepat</p>
                                </div>
                            </div>
                            <div class="flex flex-col gap-4">
                                <div class="flex gap-4">
                                    <div class="">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                                            class="w-[40px] bg-gray-500/[0.2] p-1 rounded-full">
                                    </div>
                                    <div class="">
                                        <h3 class="font-bold text-[15px]">Friska8</h3>
                                        <p class="font-[500] text-[13px]">June 2022</p>
                                    </div>
                                </div>
                                <div class="">
                                    <p>Produknya berkualitas dan sesuai dengan yang difoto</p>
                                </div>
                            </div>
                            <div class="flex flex-col gap-4">
                                <div class="flex gap-4">
                                    <div class="">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                                            class="w-[40px] bg-gray-500/[0.2] p-1 rounded-full">
                                    </div>
                                    <div class="">
                                        <h3 class="font-bold text-[15px]">Agus77</h3>
                                        <p class="font-[500] text-[13px]">Feb 2022</p>
                                    </div>
                                </div>
                                <div class="">
                                    <p>Murah dan pengiriman cepat!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <div class="fixed top-0 left-0 w-screen h-screen z-[30] ease-in-out"
            :class="{ 'opacity-0': !cartNotif, 'top-[100%]': !cartNotif }" style="transition: opacity 0.5s;">
            <div class="relative w-full h-full flex items-center justify-center">
                <div class="absolute top-0 left-0 w-full h-full bg-black/[0.4] z-[31]" @click="closeCartPopUp"></div>
                <div class="bg-white p-4 rounded-lg z-[32] w-[300px]">
                    <img src="/add.gif" alt="" class="mx-auto">
                    <h4 class="font-[500] text-base text-center my-4">Produk berhasil ditambahkan kedalam <NuxtLink
                            to="/product/cart/"><span class="text-[#FF385C] underline">keranjang</span></NuxtLink>
                    </h4>
                </div>
            </div>
        </div>
        <NuxtLayout :name="layouts.footer"></NuxtLayout>
        <div class="fixed top-0 left-0 w-screen h-screen z-[30] ease-in-out" :class="{ 'hidden': isUserLogin }">
            <div class="relative w-full h-full flex items-center justify-center">
                <div class="absolute top-0 left-0 w-full h-full bg-black/[0.8] z-[31]"></div>
                <div class="bg-white p-4 rounded-lg z-[32] w-[350px] mx-4">
                    <img src="/access.gif" alt="" class="mx-auto">
                    <h4 class="font-[500] text-base text-center my-4">Akses ditolak. Harap masuk ke akun anda <NuxtLink
                            to="/login"><span class="text-[#FF385C] underline">Masuk</span></NuxtLink>
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import axios from 'axios'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
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
            totalProducts: 0,
            cartNotif: false,
            isUserLogin: true,
            updateComponents: 0
        }
    },

    async created() {
        this.getProductData();
    },
    mounted() {
        window.addEventListener("scroll", this.handlescroll);
    },
    methods: {
        refreshComponents() {
            this.updateComponents++;
        },
        isUserLog() {
            const isUserLogin = JSON.parse(localStorage.getItem("login"))
            this.isUserLogin = isUserLogin
            console.log(this.isUserLogin)
            if (!isUserLogin) {
                return false
            }
            else {
                return true;
            }
        },
        closeCartPopUp() {
            this.cartNotif = !this.cartNotif
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
        checkoutData() {
            console.log(this.isUserLog());
            if (this.isUserLog()) {
                const product = [{
                    id: this.dataProduct.id,
                    quantity: this.quantity
                }];
                localStorage.removeItem('checkOut');
                localStorage.removeItem('checkout');
                localStorage.setItem('checkOut', JSON.stringify(product));
                window.location.href = "/checkout/";
            }
        },
        async cartData() {
            this.refreshComponents();
            this.isUserLog();
            this.closeCartPopUp();
            const isUserLogin = JSON.parse(localStorage.getItem("login"));

            const userLoginName = isUserLogin[0].username;
            let userCart = JSON.parse(localStorage.getItem(userLoginName));

            if (!userCart || !userCart[0].products) {
                userCart = { products: [] };
            }

            if (userCart[0].products.length === 0) {
                const product = {
                    id: this.dataProduct.id,
                    quantity: this.quantity
                };

                userCart[0].products.push(product);
            } else {
                const products_decode = userCart[0].products;

                const productExists = products_decode.find(product => product.id === this.dataProduct.id);

                if (productExists) {
                    products_decode.forEach((product) => {
                        if (product.id === this.dataProduct.id) {
                            product.quantity += this.quantity;
                        }
                    });
                } else {
                    const product = {
                        id: this.dataProduct.id,
                        quantity: this.quantity
                    };
                    products_decode.push(product);
                }
            }

            const jsonCart = JSON.stringify(userCart);
            localStorage.setItem(userLoginName, jsonCart);
            console.log(localStorage.getItem(userLoginName))
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
    },
    mounted() {
    },
    setup() {
        const onSwiper = (swiper) => {
            // console.log(swiper);
        };
        const onSlideChange = () => {
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination]
        };
    },
}
</script>