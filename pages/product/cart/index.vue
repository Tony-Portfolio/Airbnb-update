<template>
    <NavMidHeader />
    <div class="w-full max-w-[1200px] mx-auto my-4 min-h-screen"
        :class="{ 'overflow-hidden': !isUserLogin, 'h-[400px]': !isUserLogin }">
        <div class="md:mx-auto md:my-4 md:my-14 flex flex-col md:gap-16 w-full px-4 md:px-14 md:px-0 min-h-screen">
            <div
                class="w-full flex items-center justify-center text-center md:relative sticky top-0 left-0 w-full bg-white p-4 md:bg-transparent md:p-0 z-[20]">
                <h4
                    class="font-[500] text-lg md:text-2xl flex justify-center md:justify-start items-center gap-2 relative md:text-left text-center w-full block">
                    Keranjang Anda
                    <NuxtLink :to="'/'">
                        <span class="absolute top-[50%] translate-y-[-50%] left-[10px] md:left-[-40px] z-[40]"><svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </span>
                    </NuxtLink>
                </h4>
            </div>
            <div class="flex gap-4 md:gap-20 items-start justify-start md:flex-row flex-col-reverse my-4">
                <div
                    class="md:p-6 md:border-[1px] md:border-black/[0.1] rounded-lg flex flex-col gap-6 w-full mx-auto md:sticky top-[20px]">
                    <div class="flex flex-col gap-6">
                        <h4 class="font-[600] text-xl text-black/[0.8] text-left">Detail pemesanan & Perincian harga</h4>
                        <div class=" flex items-end justify-between relative" v-for="items in cart.products"
                            :key="items.id">
                            <div class="flex gap-2">
                                <div class="mx-4">
                                    <input type="checkbox" class="scale-[1.4] " v-model="checkBoxes" :value="items.id"
                                        @click="test">
                                </div>
                                <div class="">
                                    <img :src="getImg(items.id)" alt="" class="w-[100px] h-[90px] object-cover object-top">
                                </div>
                                <div class="flex flex-col justify-between">
                                    <h4 class="font-bold text-[16px]">{{ items.title }}</h4>
                                    <p class="font-[500] text-[15px]">$.{{ (items.price * 1).toLocaleString() }}.00 x {{
                                        items.quantity }}</p>
                                </div>
                            </div>
                            <p class="absolute top-0 right-[0px] font-[500] text-[16px] underline text-red-500 cursor-pointer"
                                @click="deletePopUp(items.id)">
                                Hapus</p>
                            <p class="font-[500] text-[15px] whitespace-nowrap">$. {{ (items.total * 1).toLocaleString()
                            }}.00</p>
                        </div>
                    </div>
                    <hr>
                    <div class="" v-if="isCartEmpty">
                        <div class="font-[13px] font-[600] flex items-center justify-between text-black/[0.8]">
                            <h4>Total (<span class="underline">USD</span>)</h4>
                            <p>$. {{ (cart.total * 1).toLocaleString() }}.00</p>
                        </div>
                    </div>
                    <div class="" v-else>
                        <div class="font-[13px] font-[600] flex items-center justify-between text-black/[0.8]">
                            <h4>Anda belum membeli barang / produk</h4>
                        </div>
                    </div>
                    <button
                        class="bg-gradient-to-r from-[#E92153] to-[#DE105E] w-full p-3 px-6 rounded-md text-white text-center text-[15px] font-bold"
                        @click="dataCheckOut">Checkout</button>
                </div>
            </div>
        </div>
        <NuxtLayout :name="layouts.footer"></NuxtLayout>
        <div class="fixed top-0 left-0 w-screen h-screen z-[30] ease-in-out"
            :class="{ 'top-0 opacity-100': displayDeletePopUp, 'top-[100%] opacity-0': !displayDeletePopUp }"
            style="transition:opacity 0.3s">
            <div class="relative w-full h-full flex items-center justify-center">
                <div class="absolute top-0 left-0 w-full h-full bg-black/[0.8] z-[31]"
                    @click="displayDeletePopUp = false; deleteData = false; removeCartData(currentItemId)"></div>
                <div class="bg-white p-4 rounded-lg z-[32] w-[350px] mx-4">
                    <img src="/delete.gif" alt="" class="mx-auto">
                    <h4 class="font-[500] text-base text-center my-4">Hapus barang dari keranjang?</h4>
                    <div class="flex items-center gap-4 mx-auto justify-center">
                        <button class="bg-red-500 p-2 px-10 rounded text-white block w-fit"
                            @click="displayDeletePopUp = false; deleteData = true; removeCartData(currentItemId)">Ya</button>
                        <button class="bg-sky-500 p-2 px-8 rounded text-white block w-fit"
                            @click="displayDeletePopUp = false; deleteData = false; removeCartData(currentItemId)">Tidak</button>
                    </div>
                </div>
            </div>
        </div>
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
import axios from 'axios';

export default {
    data() {
        return {
            layouts: {
                header: "header",
                footer: "footer"
            },
            dataImg: [],
            quantity: 0,
            dataq: null,
            cart: [],
            loginNotif: false,
            isUserLogin: false,
            deleteData: false,
            displayDeletePopUp: false,
            currentItemId: 0,
            checkBoxes: [],
            checkOut: [],
            isCartEmpty: false,
            isUserLogin : false,
        }
    },
    async created() {
        this.getProductData();
    },
    computed: {
        getData() {
            this.handleOrder
        },
    },
    methods: {
        dataCheckOut() {
            if (this.checkBoxes.length == 0) {
                alert("tolong pilih barang yang akan di checkout")
                return false
            }
            const isUserLogin = JSON.parse(localStorage.getItem("login"));
            const userLoginName = isUserLogin[0].username;
            let userCart = JSON.parse(localStorage.getItem(userLoginName));
            if (!userCart || !userCart[0].products) {
                userCart = { products: [] };
            }
            this.checkOut = userCart[0].products.filter(item => this.checkBoxes.includes(item.id));
            localStorage.removeItem('checkOut')
            const jsonCheckOut = JSON.stringify(this.checkOut)
            localStorage.setItem('checkOut', jsonCheckOut)
            window.location.href = '/checkout/'
        },
        getImg(id) {
            const product = this.dataImg.products.find(item => item.id === id);
            return product ? product.thumbnail : '';
        },
        deletePopUp(id) {
            this.currentItemId = id
            this.displayDeletePopUp = true
        },
        removeCartData(id) {
            if (this.deleteData == true) {
                const isUserLogin = JSON.parse(localStorage.getItem("login"));
                const userLoginName = isUserLogin[0].username;
                let userCart = JSON.parse(localStorage.getItem(userLoginName));
                if (!userCart || !userCart[0].products) {
                    userCart = { products: [] };
                }
                userCart[0].products = userCart[0].products.filter(item => item.id !== id);
                const jsonCart = JSON.stringify(userCart)
                localStorage.setItem(userLoginName, jsonCart)
                this.getCartData();
                this.deleteData = false;
            }
        },
        async getCartData() {
            const isUserLogin = JSON.parse(localStorage.getItem("login"));
            const userLoginName = isUserLogin[0].username;
            let userCart = JSON.parse(localStorage.getItem(userLoginName));
            if (!userCart || !userCart[0].products || userCart[0].products.length == 0) {
                userCart[0].products = [''];
            }
            userCart[0].products.sort((a, b) => a.id - b.id);
            const query = "https://dummyjson.com/carts/add";
            const requestData = {
                userId: 1,
                products: userCart[0].products
            };
            try {
                const response = await axios.post(query, requestData, {
                    headers: { 'Content-Type': 'application/json' },
                });
                this.cart = response.data
                this.isCartEmpty = this.cart.products.length > 0
                console.log(this.cart)
            } catch (error) {
                console.log(error);
            }
        },
        async getProductData() {
            try {
                const res = await axios.get("https://dummyjson.com/products?select=thumbnail&limit=100");
                this.dataImg = await res.data;
            } catch (error) {
                console.log(error);
            }
        },
        handleOrder(input) {
            this.quantity = input;
        },
    },
    mounted() {
        this.getCartData();
        const isUserLogin = JSON.parse(localStorage.getItem("login"))
        this.isUserLogin = isUserLogin
    }
}
</script>