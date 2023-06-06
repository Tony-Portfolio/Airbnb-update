<template>
    <NavMidHeader />
    <div class="w-full max-w-[1200px] mx-auto my-4 min-h-screen">
        <div class="flex items-start justify-start flex-col gap-8 mx-4">
            <div
                class="w-full flex items-center justify-center text-center md:relative sticky top-0 left-0 w-full bg-white p-4 md:bg-transparent md:p-0 z-[20]">
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
                    <p class="font-[400] text-[14px]">Pembelian produk lebih dari 1 gratis biaya pengiriman</p>
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
            <div class="flex md:flex-row flex-col gap-8">
                <div class="flex w-full md:w-[500px] flex-col my-4 gap-4">
                    <div class="flex gap-4 flex-col" v-for="items in cart.products" :key="items.id">
                        <div class="flex gap-4">
                            <div class="w-[100px]">
                                <img :src="getImg(items.id)" alt="" class="w-[100px] h-[100px] object-cover object-top">
                            </div>
                            <div class="flex gap-2 flex-grow">
                                <div class="flex flex-col w-full">
                                    <h4 class="font-bold text-[16px]">{{ items.title }}</h4>
                                    <div class="flex items-center justify-between w-full">
                                        <p class="font-[500] text-[15px]">$.{{ (items.price * 1).toLocaleString() }}.00 ({{
                                            items.quantity }})</p>
                                        <p class="font-[500] text-[15px] whitespace-nowrap">$. {{ (items.total *
                                            1).toLocaleString()
                                        }}.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex flex-col gap-2">
                        <div class="font-[13px] font-[600] flex items-center justify-between w-full text-black/[0.8]">
                            <h4>Biaya Pengiriman : </h4>
                            <p>$. {{ (shipping).toLocaleString() }}.00</p>
                        </div>
                        <hr>
                        <div class="font-[13px] font-[600] flex items-center justify-between w-full text-black/[0.8]">
                            <h4>Total (<span class="underline">USD</span>)</h4>
                            <p>$. {{ (cart.total * 1 + shipping).toLocaleString() }}.00</p>
                        </div>
                    </div>
                </div>
                <hr class="md:hidden block">
                <div class="w-full flex flex-col gap-6">
                    <div class="flex flex-col gap-4">
                        <h4 class="font-[500] text-xl">Pilih metode pembayaran</h4>
                        <div class="w-full relative">
                            <select name="payment_method" id="payment_method"
                                class="border-[1px] border-black/[0.1] rounded p-2 w-full" v-model="payment_method">
                                <option value="COD">Cash On Delivery (COD)</option>
                                <option value="Kartu Kredit">Kartu kredit</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <h4 class="font-[500] text-xl">Lokasi Pengiriman Barang</h4>
                        <input type="text" class="w-full p-2 border-[1px] border-black/[0.1] rounded font-[400]"
                            placeholder="Lokasi pengiriman" v-model="payment_location">
                    </div>
                    <div class="flex flex-col gap-2">
                        <h4 class="font-[500] text-xl">Kupon</h4>
                        <select name="payment_coupon" id="payment_coupon"
                            class="border-[1px] border-black/[0.1] rounded p-2 w-full" v-model="payment_coupon"
                            @change="shippingfee">
                            <option value="Tidak ada kupon" selected="selected">Tidak ada kupon</option>
                        </select>
                    </div>
                    <div class="flex flex-col gap-2">
                        <h4 class="font-[500] text-xl">Metode Pengiriman</h4>
                        <select name="delivery_method" id="delivery_method"
                            class="border-[1px] border-black/[0.1] rounded p-2 w-full" v-model="delivery_method"
                            @change="shippingfee">
                            <option value="Pengiriman Instan">Pengiriman Instan</option>
                            <option value="Pengiriman Reguler" selected="selected">Pengiriman Reguler</option>
                        </select>
                    </div>
                    <p class="text-[13px]">Kami akan menelepon atau mengirim SMS guna mengonfirmasikan nomor Anda. Tarif
                        standar SMS dan data
                        berlaku. <span class="underline">Kebijakan Privasi</span></p>
                    <button
                        class="bg-gradient-to-r from-[#E92153] to-[#DE105E] w-full p-3 px-6 rounded-md text-white text-center text-[15px] font-bold"
                        @click="checkout">Checkout</button>
                </div>
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
    <div class="fixed top-0 left-0 w-screen h-screen z-[30] ease-in-out" :class="{ 'top-[100%] opacity-0': !success, 'top-0 opacity-100': success }" style="transition:opacity 0.3s;">
        <div class="relative w-full h-full flex items-center justify-center">
            <div class="absolute top-0 left-0 w-full h-full bg-black/[0.8] z-[31]"></div>
            <div class="bg-white p-4 rounded-lg z-[32] w-[350px] mx-4">
                <img src="/success.gif" alt="" class="mx-auto">
                <h4 class="font-[500] text-base text-center my-4 leading-loose">Checkout Sukses. <NuxtLink
                        to="/order/"><span class="text-[#FF385C] underline">Cek data checkout</span></NuxtLink>
                        <br>Atau
                        <NuxtLink
                        to="/"><span class="text-[#FF385C] underline"> Lanjut Berbelanja</span></NuxtLink>
                </h4>
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
            dataProduct: [],
            quantity: 0,
            dataq: null,
            cart: [],
            payment_method: "COD",
            payment_location: "",
            payment_coupon: "Tidak ada kupon",
            delivery_method: "Pengiriman Reguler",
            checkout_items: [],
            shipping: 0,
            success : false
        }
    },
    async created() {
        this.getProductData();
    },
    computed: {
        shippingfee() {
            if (this.delivery_method == "Pengiriman Instan" && this.cart.totalQuantity == 1)
                this.shipping = 15;
            else if (this.delivery_method == "Pengiriman Reguler" && this.cart.totalQuantity == 1)
                this.shipping = 5
            else {
                this.shipping = 0;
            }
        }
    },
    methods: {
        checkout() {
            if (this.payment_method == "" || this.payment_location == "" || this.delivery_method == "") {
                alert("Tolong isi data yang kosong");
                return false
            }
            this.success = true;
            const isUserLogin = JSON.parse(localStorage.getItem("login"));
            const userLoginName = isUserLogin[0].username;
            let userCart = JSON.parse(localStorage.getItem(userLoginName));
            if (!userCart || !userCart[0].products) {
                userCart = { products: [] };
            }
            // remove item from cart
            const checkoutArray = JSON.parse(localStorage.getItem("checkOut"));
            const filteredProducts = userCart[0].products.filter(product => {
                return !checkoutArray.some(item => item.id === product.id);
            });
            userCart[0].products = filteredProducts;
            // add checkout data
            const checkout_items = this.cart;
            const payment_method = this.payment_method;
            const payment_location = this.payment_location;
            const payment_coupon = this.payment_coupon;
            const delivery_method = this.delivery_method;
            const currentDate = new Date();
            const options = { timeZone: 'UTC' };
            const formattedDate = currentDate.toLocaleString('id-ID', options);
            const checkout = {
                checkout_items: checkout_items,
                payment_method: payment_method,
                payment_location: payment_location,
                payment_coupon: payment_coupon,
                delivery_method: delivery_method,
                checkout_date: formattedDate
            }
            userCart[0].checkout.push(checkout);
            const jsonCart = JSON.stringify(userCart);
            localStorage.setItem(userLoginName, jsonCart);
            localStorage.removeItem("checkOut");
        },
        async getCartData() {
            let userCheckout = JSON.parse(localStorage.getItem("checkOut"));
            userCheckout.sort((a, b) => a.id - b.id);
            const query = "https://dummyjson.com/carts/add";
            const requestData = {
                userId: 1,
                products: userCheckout
            };
            try {
                const response = await axios.post(query, requestData, {
                    headers: { 'Content-Type': 'application/json' },
                });
                this.cart = response.data
            } catch (error) {
                console.log(error);
            }
            this.shippingfeecall();
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
        shippingfeecall() {
            if (this.delivery_method == "Pengiriman Instan" && this.cart.totalQuantity == 1)
                this.shipping = 15;
            else if (this.delivery_method == "Pengiriman Reguler" && this.cart.totalQuantity == 1)
                this.shipping = 5
            else {
                this.shipping = 0;
            }
        }
    },
    mounted() {
        this.getCartData();
        this.shippingfeecall();
    }
}
</script>