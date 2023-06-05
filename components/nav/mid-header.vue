<template>
    <div class="w-11/12 mx-auto flex flex-col gap-4">
        <div class="flex items-center justify-between py-4 gap-4">
            <div class="hidden md:block">
                <NuxtLink to="/">
                    <img src="/images/airbnb-logo.png" alt="" class="w-[100px] shrink">
                </NuxtLink>
            </div>
            <div class="flex-1 md:flex-none">
                <div class="w-full">
                    <div class="relative">
                        <form :action="`/search/${search}`">
                            <input type="text" placeholder="cari barang"
                                class="flex border-2 border-black/[0.1] shadow-lg py-3 px-4 pr-14 rounded-full text-[14px] font-[500] block md:w-[350px] w-full lg:focus:w-[450px]"
                                style="transition: width 0.5s;outline:rgba(0,0,0,0.5);" v-model="search" name="q">
                        </form>
                        <NuxtLink :to="`/search/${search}?q${search}`"><div
                            class="w-[35px] h-[35px] text-white rounded-full bg-[#FF385C] flex items-center justify-center p-2 absolute top-[50%] right-[10px] translate-y-[-50%]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-12 h-12">
                                <path fill-rule="evenodd"
                                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div></NuxtLink>
                    </div>
                </div>
            </div>
            <div class="items-center gap-4 justify-end flex">
                <NuxtLink to="/product/cart/">
                    <div class="flex items-center relative">
                        <div class="text-[13px] cursor-pointer bg-[#FF385C] text-white w-[25px] h-[25px] flex items-center justify-center absolute top-[-10px] right-[-10px] rounded-full"><p>{{
                            cartCount }}</p></div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </div>

                </NuxtLink>
                <div class="flex items-center p-1 border-[1px] border-black/[0.1] rounded-full gap-1 relative shadow-md">
                    <div class="flex items-center gap-1 cursor-pointer" @click="dropdownmenu = !dropdownmenu">
                        <div class="mx-2">
                            <i class="fa-solid fa-bars"></i>
                        </div>
                        <div
                            class="bg-black/[0.6] w-[15px] h-[15px] rounded-full flex items-center justify-center p-4 text-white">
                            <i class="fa-solid fa-user"></i>
                        </div>
                    </div>
                    <div class="absolute bg-white top-[120%] left-[-215%] py-2 w-[240px] z-[40] shadow-lg rounded-lg flex flex-col gap-3"
                        v-show="dropdownmenu" @click="dropdownmenu = !dropdownmenu">
                        <div :class="{ hidden: islogged }">
                            <NuxtLink to="/register/">
                                <p class="hover:bg-black/[0.03] py-3 text-[15px] px-4 cursor-pointer">Daftar</p>
                            </NuxtLink>
                            <NuxtLink to="/login/">
                                <p class="hover:bg-black/[0.03] py-3 text-[15px] px-4 cursor-pointer">Masuk</p>
                            </NuxtLink>
                        </div>
                        <div :class="{ hidden: !islogged }">
                            <NuxtLink to="/order/">
                                <p class="hover:bg-black/[0.03] py-3 text-[15px] px-4 cursor-pointer">Pemesanan</p>
                            </NuxtLink>
                            <!-- <hr> -->
                            <hr>
                            <NuxtLink to="/logout">
                                <p class="hover:bg-black/[0.03] py-3 text-[15px] px-4 cursor-pointer">Logout</p>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr class="md:block hidden">
</template>
<script>

export default {
    data() {
        return {
            dropdownmenu: false,
            search: '',
            cartCount: 0,
            islogged: false
        };
    },
    methods: {
        getProductQuantity() {
            if (localStorage.getItem("login")) {
                const isUserLogin = JSON.parse(localStorage.getItem("login"));
                const userLoginName = isUserLogin[0].username;
                let userCart = JSON.parse(localStorage.getItem(userLoginName));
                if (!userCart[0] || !userCart[0].products) {
                    userCart = { products: [] };
                }
                var totalQuantity = 0
                userCart[0].products.forEach((product) => {
                    totalQuantity += product.quantity
                })
                this.cartCount = totalQuantity
            }
        }
    },
    mounted() {
        this.getProductQuantity();
        const isUserLogin = JSON.parse(localStorage.getItem("login"))
        if (isUserLogin) {
            this.islogged = isUserLogin[0].isloggedin;
        }
        // localStorage.clear()
    }
}
</script>