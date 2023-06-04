<template>
    <div class="w-12/12 mx-auto flex-col gap-4 px-6 py-3 border-b-[1px] border-black/[0.1] hidden md:flex">
        <div class="flex items-center py-4">
            <div class="flex-1">
                <NuxtLink to="/">
                    <img src="/images/airbnb-logo.png" alt="" class="w-[100px] shrink">
                </NuxtLink>
            </div>
        </div>
    </div>
    <div class="w-full max-w-[1000px] mx-auto my-4">
        <div class="flex items-start justify-start flex-col gap-8 mx-8">
            <div
                class="w-full flex items-center justify-center text-center md:relative sticky top-0 left-0 w-full bg-white p-4 md:bg-transparent md:p-0 z-[20] mx-4">
                <h4
                    class="font-[500] text-lg md:text-2xl flex justify-center md:justify-start items-center gap-2 relative md:text-left text-center w-full block">
                    Checkout
                    <NuxtLink :to="'/product/cart/'">
                        <span class="absolute top-[50%] translate-y-[-50%] left-[10px] md:left-[-40px] z-[40]"><svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </span>
                    </NuxtLink>
                </h4>
            </div>
            <div class="p-6 w-full border-[1px] border-black/[0.2] rounded-xl flex items-center justify-between flex">
                <div class="flex flex-col gap-2">
                    <h3 class="font-[500] text-[16px]">Gratis Pengiriman</h3>
                    <p class="font-[400] text-[14px]">Pembelian produk lebih dari 2 gratis biaya pengiriman</p>
                </div>
                <div>
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                        focusable="false"
                        style="display: block; height: 32px; width: 32px; fill: rgb(227, 28, 95); stroke: currentcolor;">
                        <g stroke="none">
                            <path d="m32.62 6 9.526 11.114-18.146 23.921-18.147-23.921 9.526-11.114z" fill-opacity=".2">
                            </path>
                            <path
                                d="m34.4599349 2 12.8243129 14.9616983-23.2842478 30.6928721-23.28424779-30.6928721 12.82431289-14.9616983zm-17.9171827 16h-12.52799999l18.25899999 24.069zm27.441 0h-12.528l-5.73 24.069zm-14.583 0h-10.802l5.4012478 22.684zm-15.92-12.86-9.30799999 10.86h11.89399999zm19.253-1.141h-17.468l2.857 12.001h11.754zm1.784 1.141-2.586 10.86h11.894z">
                            </path>
                        </g>
                    </svg>
                </div>
            </div>
            <div class=" flex items-end justify-between relative w-full" v-for="items in cart.products" :key="items.id">
                <div class="flex gap-2">
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
            <div class="w-full">
                <div class="font-[13px] font-[600] flex items-center justify-between w-full text-black/[0.8]">
                    <h4>Total (<span class="underline">USD</span>)</h4>
                    <p>$. {{ (cart.total * 1).toLocaleString() }}.00</p>
                </div>
            </div>
            <hr class="border-[0.5px] border-black/[0.05] w-full">
            <div class="w-full flex flex-col gap-6">
                <div class="flex flex-col gap-4">
                    <h4 class="font-[500] text-xl">Pilih metode pembayaran</h4>
                    <div class="w-full relative">
                        <select name="" id="" class="border-[1px] border-black/[0.1] rounded p-2 w-full">
                            <option value="">Cash On Delivery (COD)</option>
                            <option value="">Kartu kredit</option>
                        </select>
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <h4 class="font-[500] text-xl">Lokasi Pengiriman Barang</h4>
                    <input type="text" class="w-full p-2 border-[1px] border-black/[0.1] rounded font-[400]"
                        placeholder="Lokasi pengiriman">
                </div>
                <div class="flex flex-col gap-2">
                    <h4 class="font-[500] text-xl">Kupon</h4>
                    <select name="" id="" class="border-[1px] border-black/[0.1] rounded p-2 w-full">
                        <option value="">Tidak ada kupon</option>
                    </select>
                </div>
                <div class="flex flex-col gap-2">
                    <h4 class="font-[500] text-xl">Metode Pengiriman</h4>
                    <select name="" id="" class="border-[1px] border-black/[0.1] rounded p-2 w-full">
                        <option value="">Pengiriman Instan</option>
                        <option value="">Pengiriman Reguler</option>
                    </select>
                </div>
                <p class="text-[13px]">Kami akan menelepon atau mengirim SMS guna mengonfirmasikan nomor Anda. Tarif
                    standar SMS dan data
                    berlaku. <span class="underline">Kebijakan Privasi</span></p>
                <button
                    class="bg-gradient-to-r from-[#E92153] to-[#DE105E] w-full p-3 px-6 rounded-md text-white text-center text-[15px] font-bold">Lanjutkan</button>
            </div>
        </div>
    </div>
    <div class="bottom-0 left-0 w-full border-t-[1px] border-black/[0.1] relative">
        <footer class="w-11/12 mx-auto flex items-center justify-between bg-white p-3 flex-col md:flex-row md:gap-0 gap-4">
            <div class="">
                <div class="flex text-[14px] font-[400] text-black/[0.8] items-center gap-3">
                    <i class="fa-regular fa-copyright"></i>
                    <p>2023 Airbnb, inc.</p>
                    <i class="fa-solid fa-circle text-[3px]"></i>
                    <p>Privasi</p>
                    <i class="fa-solid fa-circle text-[3px]"></i>
                    <p>Ketentuan</p>
                    <i class="fa-solid fa-circle text-[3px]"></i>
                    <p>Peta situs</p>
                </div>
            </div>
            <div class="flex items-center gap-4 font-[500]">
                <div class="flex items-center gap-2 text-[14px]">
                    <i class="fa-solid fa-globe"></i>
                    <p>Bahasa indonesia (ID)</p>
                </div>
                <div class="flex items-center gap-2 text-[14px]">
                    <i class="fa-solid fa-globe"></i>
                    <p>Rp IDR</p>
                </div>
                <div class="flex items-center gap-2 text-[14px]">
                    <p>Dukungan dan sumber informasi</p>
                    <i class="fa-solid fa-chevron-up"></i>
                </div>
            </div>
        </footer>
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
            quantity: 0,
            dataq: null,
            cart: [],
        }
    },
    async created() {
        this.getProductData();
    },
    methods: {
        async getCartData() {
            let userCart = JSON.parse(localStorage.getItem("checkOut"));
            userCart.sort((a, b) => a.id - b.id);
            console.log(userCart)
            const query = "https://dummyjson.com/carts/add";
            const requestData = {
                userId: 1,
                products: userCart
            };
            console.log(requestData)
            try {
                const response = await axios.post(query, requestData, {
                    headers: { 'Content-Type': 'application/json' },
                });
                this.cart = response.data
            } catch (error) {
                console.log(error);
            }
        },
        getImg(id) {
            const product = this.dataProduct.products.find(item => item.id === id);
            return product ? product.thumbnail : '';
        },
        async getProductData() {
            try {
                const res = await axios.get("https://dummyjson.com/products?select=thumbnail&limit=100");
                this.dataProduct = await res.data;
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.getCartData();
    }
}
</script>