<template>
    <div>
        <main class="w-full h-full">
            <section class="w-full h-full">
                <div class="flex items-center justify-center w-full h-full h-screen">
                    <div
                        class="my-auto max-w-[500px] block md:m-auto p-8 bg-cover bg-center sm:text-black relative border-[1px] border-black/[0.1] rounded-lg shadow-md">
                        <h2 class="uppercase text-center font-bold text-2xl">Daftar untuk mulai berbelanja</h2>
                        <p class="sm:text-black/[0.8] text-sm text-center">Sudah punya akun? <NuxtLink
                                to="/login" class="font-bold text-[#FF385C] bg-white rounded p-[2px]">Masuk
                                disini</NuxtLink>
                        </p>
                        <NuxtLink to="/"><img src="/images/airbnb-logo.png" alt=""
                            class="w-7/12 block m-auto my-10 sm:bg-transparent sm:rounded-none"></NuxtLink>
                        <div class="flex flex-col justify-center gap-4">
                            <div class="">
                                <label for="username" class="text-left font-[500] text-sm mb-2 block w-fit">Username</label>
                                <input type="text" placeholder="Username"
                                    class="border-2 border-black-800/[0.2] p-3 px-4 w-full rounded text-sm font-bold text-black"
                                    id="username" name="username" v-model="username">
                            </div>
                            <div class="">
                                <!-- <input type="text" placeholder="Email" class = "border-2 border-slate-800/[0.2] p-3 px-4 w-full rounded text-sm"> -->
                                <label for="password" class="text-left font-[500] text-sm mb-2 block w-fit">Password</label>
                                <input type="password" placeholder="Password"
                                    class="border-2 border-black-800/[0.2] p-3 px-4 w-full rounded text-sm font-bold text-black"
                                    id="password" name="password" v-model="password">
                            </div>
                            <button class="w-full bg-[#FF385C] p-2 rounded text-white outline-none" name="submit"
                                @click="setDataUser">Daftar</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    </div>
</template>

<script>

import axios from 'axios';


export default {
    data() {
        return {
            layouts: {
                header: "header",
                container: "container",
                footer: "footer"
            },
            username: "",
            country: "",
            password: "",
            userData: [],
            products: [],
            checkout: [],
            profile_picture : "/default.jpg",
            profile_description : "",
        }
    },
    computed: {
    },
    methods: {
        setDataUser() {
            if (this.username == "" || this.password == "" ) {
                alert('tolong isi semua kolom!')
                return false
            }
            const username = this.username;
            const password = this.password;
            const products = this.products;
            const checkout = this.checkout;
            const profile_picture = this.profile_picture;
            const profile_description = this.profile_description;
            this.userData.push({ username, password, profile_picture, profile_description, products, checkout })
            const jsonUserData = JSON.stringify(this.userData);
            localStorage.setItem(username, jsonUserData);
            console.log(localStorage.getItem(username));
            const loginData = [{ isloggedin: true, username }]
            localStorage.setItem("login", JSON.stringify(loginData));
            window.location.href = "/"
        }
    },
    async created() {
    },
    mounted() {
        // localStorage.clear();
    }
}
</script>