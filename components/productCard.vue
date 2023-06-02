<template>
    <div>
        <div class="flex flex-col gap-4">
            <NuxtLink :to="'/product/details/' + data.id" class="flex flex-col gap-2">
                <div class="relative">
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
                        <SwiperSlide v-for="image in data.images">
                            <NuxtLink :to="'/product/details/' + data.id">
                                <img :src="image" alt="" class="w-full h-56 duration-1000 rounded-lg object-cover object-top" loading="lazy">
                            </NuxtLink>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div class="flex flex-col">
                    <div class="flex items-center justify-between font-[500]">
                        <h3 class="">{{ data.title }}</h3>
                        <div class="flex gap-2 items-center text-[14px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            <p>{{ data.rating }}</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <p class="text-black/[0.6] font-[500] text-[14px]">{{ data.description }}</p>
                        <p class="text-black/[0.6] font-[500] text-[14px]">{{ data.night }}</p>
                        <p class="text-black/[1] font-[500] text-[14px]">Brand : {{ data.brand }}</p>
                        <p class="text-black/[1] font-[500] text-[14px]">Stok : {{ data.stock }}</p>
                        <p class="text-black/[0.6] text-[15px] font-[500] my-2"><span class="text-black">$ {{
                            (data.price * 1).toLocaleString()
                        }}.00</span></p>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
    
<script setup>
const props = defineProps({
    data: Object,
})
</script>

<style>
.swiper-button-next {
    @apply flex items-center justify-center text-sm text-rose-500 hover:translate-x-1 duration-300;
    display: none;
}

.swiper-button-prev {
    @apply flex items-center justify-center text-sm text-rose-500 hover:translate-x-1 duration-300;
    display: none;
}

.swiper-button-disabled {
    display: none;
}


.groupSwiper:hover .swiper-button-prev {
    display: block;
}

.groupSwiper:hover .swiper-button-next {
    display: block;
}

.swiper-pagination-bullet {
    @apply bg-rose-400;
    width: 6px;
    height: 6px;
    opacity: 0.5;
}

.swiper-pagination-bullet-active {
    opacity: 1;
}
</style>