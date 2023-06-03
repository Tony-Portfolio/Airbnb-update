<script setup>
const { data: data } = await useFetch('https://dummyjson.com/products/categories')
</script>
<template>
    <div class="py-2">
        <div class="w-11/12 mx-auto flex gap-4 items-center">
            <div class="max-w-full overflow-hidden relative">
                <!-- <div
                        class="p-2 bg-white border-[1px] border-black/[0.1] rounded-full text-sm absolute top-[50%] left-[2%] translate-x-[-50%] translate-y-[-50%]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                            <path fill-rule="evenodd"
                                d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div
                        class="p-2 bg-white border-[1px] border-black/[0.1] rounded-full text-sm absolute top-[50%] left-[98%] translate-x-[-50%] translate-y-[-50%]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                            <path fill-rule="evenodd"
                                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                                clip-rule="evenodd" />
                        </svg>
                    </div> -->
                <ul
                    class="navigation flex gap-2 gap-x-8 flex-nowrap font-[500] text-black/[0.6] text-[13px] overflow-x-auto text-center whitespace-nowrap">
                    <NuxtLink :to="'/product/category/' + items" v-for="items in data" :key="items.id">
                        <li class="py-1 relative group" :class="{ active: isActive === 1 }">
                            <i class="fa-solid fa-sort-down"></i>
                            <p class="py-2">{{ items }}</p>
                            <div
                                class="absolute bottom-0 left-0 w-full border-[1px] border-black/[0.1] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                            </div>
                        </li>
                    </NuxtLink>
                    <!-- <NuxtLink to="/search/2">
                        <li class="py-1 relative group" :class="{ active: isActive === 2 }">
                            <img src="/icon/tropis.jpg" alt="" class="w-[20px] mx-auto grayscale-[100%]">
                            <p class="py-2">Tropis</p>
                            <div
                                class="absolute bottom-0 left-0 w-full border-[1px] border-black/[0.1] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                            </div>
                        </li>
                    </NuxtLink> -->
                </ul>
            </div>
            <!-- <div class="">
                <div
                    class="border-[1px] border-black/[0.1] px-3 py-3 text-sm rounded-lg flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path
                            d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                    </svg>
                    <p>filter</p>
                </div>
            </div> -->
        </div>
    </div>
    <p class = "fixed bottom-[20px] right-[20px] z-[10] bg-[#FF385C] p-2 text-white rounded md:hidden block "><NuxtLink to="/product/cart/2" class = "flex gap-2 items-center"><i class="fa-solid fa-cart-shopping"></i></NuxtLink></p>
</template>
<script>

export default {
    data(){
        return{
            
        }
    },
    computed: {
        isActive() {
            return parseInt(this.$route.params.id);
        }
    },
    mounted(){
    }
}
</script>