<template>
    <div class="">
        <NavMidHeader />
        <div class="w-full">
            <div class="w-full max-w-[1100px] mx-auto p-4 min-h-screen">
                <div
                    class="w-full flex items-center justify-center text-center md:relative sticky top-0 left-0 w-full bg-white p-4 md:bg-transparent md:p-0 z-[20] mx-4">
                    <h4
                        class="font-[500] text-lg md:text-2xl flex justify-center md:justify-start items-center gap-2 relative md:text-left text-center w-full block my-4">
                        Pemesanan
                        <NuxtLink :to="'/'">
                            <span class="absolute top-[50%] translate-y-[-50%] left-[10px] md:left-[-30px] z-[40]"><svg
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </span>
                        </NuxtLink>
                    </h4>
                </div>
                <div v-if="userData && userData.checkout && userData.checkout.length > 0"
                    class="border-[1px] border-black/[0.1] rounded p-4 flex flex-col gap-4 p-2">
                    <div v-for="items in userData.checkout" :key="items.checkout_items.id" class="text-[15px]">
                        <hr>
                        <div class="flex flex-col gap-1 text-[15px] font-[500] text-black/[0.8]">
                            <h3 class="font-bold text-xl my-4 text-black">Data Checkout</h3>
                            <p>Metode Pembayaran: {{ items.payment_method }}</p>
                            <p>Lokasi Pengiriman: {{ items.payment_location }}</p>
                            <p>Kupon: {{ items.payment_coupon }}</p>
                            <p>Metode Pengiriman: {{ items.delivery_method }}</p>
                            <p>Tanggal Checkout: {{ items.checkout_date }}</p>
                        </div>
                        <p v-if="items.checkout_items.products.length > 1" class = "text-green-500">Gratis Biaya Pengiriman, Pembelian lebih dari 1 barang</p>
                        <h4 class="mt-8 font-[500]">Barang</h4>
                        <div>
                            <div v-for="product in items.checkout_items.products" :key="product.id"
                                class="flex items-start gap-1 flex-col p-2">
                                <p>Produk : {{ product.title }}</p>
                                <p>Jumlah : {{ product.quantity }}</p>
                                <p>Harga : ${{ product.price }}.00</p>
                                <p>Total : ${{ product.total }}.00</p>
                            </div>
                            <hr class="my-4">
                            {{ shippingfee(items.delivery_method, items.checkout_items.products.length) }}
                            {{ 'Biaya pengiriman : $' + shipping + ".00 (" + items.delivery_method + ")" }}
                            <p>Total Checkout : ${{ (items.checkout_items.total + shipping).toLocaleString() }}.00 </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
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
                footer: "footer",
            },
            checkout_array: [],
            userData: [],
            dataProduct: [],
            shipping: 0
        }
    },
    async created() {
        // this.getProductData();
    },
    computed: {

    },
    methods: {
        shippingfee(methods, item) {
            if (methods == "Pengiriman Instan" && item == 1)
                this.shipping = 15;
            else if (methods == "Pengiriman Reguler" && item == 1)
                this.shipping = 5
            else {
                this.shipping = 0;
            }
        },
        async getProductData() {
            try {
                const res = await axios.get("https://dummyjson.com/products?select=thumbnail&limit=100");
                this.dataProduct = await res.data;
            } catch (error) {
                console.log(error);
            }
        },
        getData() {
            const isUserLogin = JSON.parse(localStorage.getItem("login"));
            const userLoginName = isUserLogin[0].username;
            let userData = JSON.parse(localStorage.getItem(userLoginName));
            this.userData = userData[0];
            this.userData.checkout = this.userData.checkout.reverse();
        },
        // getImg(id) {
        //     const product = this.dataProduct.products.find(item => item.id === id);
        //     return product ? product.thumbnail : '';
        // },

    },
    mounted() {
        // localStorage.clear()
        this.getData();



    }
}
</script>