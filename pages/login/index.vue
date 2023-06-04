<template>
    <div>
        <main class="w-full h-full">
            <section class="w-full h-full">
                <div class="grid grid-cols-1 sm:grid-cols-2 w-full h-full">
                    <div
                        class="my-auto md:w-10/12 lg:w-9/12 xl:w-7/12 block md:m-auto h-screen p-8 bg-cover bg-center text-white sm:text-black bg-hero-pattern sm:bg-no-pattern relative">
                        <h2 class="uppercase text-center font-bold text-2xl">Masuk ke akun Anda</h2>
                        <p class="sm:text-black/[0.8] text-sm text-center text-white">Belum punya akun? <NuxtLink
                                to="/register" class="font-bold text-[#FF385C] bg-white rounded p-[2px]">Daftar disini
                            </NuxtLink>
                        </p>
                        <img src="/images/airbnb-logo.png" alt=""
                            class="w-7/12 block m-auto my-10 sm:bg-transparent sm:rounded-none">
                        <div class="flex flex-col justify-center gap-4">
                            <div class="">
                                <label for="username" class="text-left font-bold text-sm mb-2 block w-fit">Username</label>
                                <input type="text" placeholder="Username"
                                    class="border-2 border-slate-800/[0.2] p-3 px-4 w-full rounded text-sm font-bold text-black"
                                    id="username" name="username" v-model="username">
                            </div>
                            <div class="">
                                <!-- <input type="text" placeholder="Email" class = "border-2 border-slate-800/[0.2] p-3 px-4 w-full rounded text-sm"> -->
                                <label for="password" class="text-left font-bold text-sm mb-2 block w-fit">Password</label>
                                <input type="password" placeholder="Password"
                                    class="border-2 border-slate-800/[0.2] p-3 px-4 w-full rounded text-sm font-bold text-black"
                                    id="password" name="password" v-model="password">
                            </div>
                            <button class="w-full bg-[#FF385C] p-2 rounded text-white outline-none" name="submit"
                                @click="getDataUser">Masuk</button>
                        </div>
                        <div
                            class="w-10/12 flex items-center flex-wrap justify-between absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-50%] block sm:hidden">
                            <a href="#" class="text-sm font-[500] text-white">Terms of Service</a>
                            <a href="#" class="text-sm font-[500] text-white">About Us</a>
                            <a href="#" class="text-sm font-[500] text-white">Privacy Policy</a>
                        </div>
                    </div>
                    <div class="relative w-full h-full sm:block hidden">
                        <img src="/images/login.jpeg" alt="" class="w-full h-screen object-cover">
                        <div
                            class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[rgba(255,56,92,0.7)] w-full h-full flex items-center justify-center">
                            <h3 class="uppercase font-bold text-4xl text-white text-center">Shop Smarter Not Harder</h3>
                        </div>
                        <div
                            class="flex items-center justify-between absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-6/12 text-center">
                            <a href="#" class="text-sm font-[500] text-white">Terms of Service</a>
                            <a href="#" class="text-sm font-[500] text-white">About Us</a>
                            <a href="#" class="text-sm font-[500] text-white">Privacy Policy</a>
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
            password: "",
            userData: [],
        }
    },
    computed: {
    },
    methods: {
        getDataUser() {
            const username = this.username;
            const password = this.password;
            const jsonUserData = JSON.stringify(this.userData);
            const getUserData = JSON.parse(localStorage.getItem(username));
            if (getUserData) {
                if (getUserData.password == password) {
                    var isLogged = true
                    const loginData = [{isloggedin:true,username}]
                    localStorage.setItem("login", JSON.stringify(loginData));
                    window.location.href = "/"
                }else{
                    alert('username atau password salah!')
                }
            } else {
                alert('username tidak ada!')
            }
        }
    },
    async created() {
    },
}
</script>