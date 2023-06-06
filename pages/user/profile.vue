<template>
    <NavMidHeader />
    <div class="w-full max-w-[1200px] mx-auto my-4 min-h-screen">
        <div class="md:mx-auto md:my-4 md:my-14 flex flex-col md:gap-16 w-full px-4 md:px-14 md:px-0 min-h-screen">
            <div
                class="w-full flex items-center justify-center text-center md:relative sticky top-0 left-0 w-full bg-white p-4 md:bg-transparent md:p-0 z-[20]">
                <h4
                    class="font-[500] text-lg md:text-2xl flex justify-center md:justify-start items-center gap-2 relative md:text-left text-center w-full block">
                    Profil
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
            <div>
                <div class="flex flex-col gap-4">
                    <div class="">
                        <div class = "flex gap-4 w-full">
                            <img :src="picture_url || '/default.jpg'"
                                class="w-[200px] h-[200px] object-cover object-top rounded-full">
                            <div class = "w-full h-[200px]">
                                <textarea class = "border-[1px] border-black/[0.1] h-full p-4 rounded w-full">{{ description }}</textarea>
                            </div>
                        </div>
                        <div>
                            <h3>Profile Url</h3>
                            <input v-model="picture" class="px-2 py-1 w-full rounded border-[1px] border-black/[0.1]"
                                @keyup="getImgUrl">
                        </div>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div>
                            <h3>Username</h3>
                            <input v-model="username" class="px-2 py-1 w-full rounded border-[1px] border-black/[0.1]">
                        </div>
                        <div>
                            <h3>Password</h3>
                            <input v-model="password" class="px-2 py-1 w-full rounded border-[1px] border-black/[0.1]">
                        </div>
                    </div>
                </div>
                <button class = "text-white bg-[#FF385C] px-2 py-2 rounded-md my-4" @click="setUserData">Simpan perubahan</button>
            </div>
        </div>
    </div>
    <NuxtLayout :name="layouts.footer"></NuxtLayout>
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
            useData: [],
            username: "",
            password: "",
            picture: "",
            picture_url: "",
            description:"Tentang Anda",
        }
    },
    methods: {
        getUserData() {
            const isUserLogin = JSON.parse(localStorage.getItem("login"));
            const userLoginName = isUserLogin[0].username;
            let userData = JSON.parse(localStorage.getItem(userLoginName));
            this.userData = userData
            console.log(this.userData[0].username)
            this.username = this.userData[0].username;
            this.password = this.userData[0].password;
            this.picture = this.userData[0].profile_picture;
            this.picture_url = this.userData[0].profile_picture;
            this.description = this.userData[0].description;
        },
        isValidUrl(url) {
            var urlPattern = /^(?:\w+:)?\/\/([^\s.]+\.\S{2}|localhost[:?\d]*)\S*$/;
            return urlPattern.test(url);
        },
        getImgUrl() {
            if (this.isValidUrl(this.picture))
                this.picture_url = this.picture
            else
                this.picture_url = '/default.jpg'
        },
        setUserData(){
            if(this.username == "" || this.password == ""){
                alert("Kolom username dan password tidak boleh kosong!");
            }
            const isUserLogin = JSON.parse(localStorage.getItem("login"));
            const userLoginName = isUserLogin[0].username;
            let userData = JSON.parse(localStorage.getItem(userLoginName));

            userData[0].username = this.username;
            userData[0].password = this.password;
            userData[0].profile_picture = this.picture_url;
            userData[0].profile_description = this.description;

            isUserLogin[0].username = this.username;
            const jsonLoginData = JSON.stringify(isUserLogin);
            const jsonUserData = JSON.stringify(userData);
            localStorage.setItem('login', jsonLoginData)
            localStorage.removeItem(userLoginName)
            localStorage.setItem(this.username, jsonUserData)
            this.getUserData();
        }
    },
    mounted() {
        this.getUserData();
    }
}
</script>