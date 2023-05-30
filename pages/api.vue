<template>
    <div class="mt-0">
        <NuxtLayout :name="layouts.header">
        </NuxtLayout>
        <div class="w-11/12 mx-auto">
            <section class="my-2">
                <div
                    class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] grid-rows-[repeat(auto,550px)] gap-y-8 gap-6 my-4">
                    <div v-for="property in response.data.propertySearch.properties" :key="property.id">
                        <div>
                            <div class="flex flex-col gap-4">
                                <NuxtLink :to="/hotel/ + property.id" class="flex flex-col gap-2">
                                    <div class="relative">
                                        <img :src="property.propertyImage.image.url" alt=""
                                            class="w-full h-[300px] rounded-lg object-cover object-top">
                                        <div
                                            class="absolute bottom-[10px] left-[10px] bg-white w-[60px] h-[70px] rounded-se-lg rounded-ee-lg">
                                            <div class="flex items-center justify-center h-full h-full relative">
                                                <img :src="property.propertyImage.image.url" alt=""
                                                    class="w-[40px] h-[40px] object-cover object-top rounded-full">
                                                <div
                                                    class="absolute border-l-[1px] border-black/[0.2] top-0 left-[5px] h-full w-full">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col">
                                        <div class="flex items-center justify-between font-[500]">
                                            <h3 class="">{{ property.name }}</h3>
                                            <div class="flex gap-2 items-center text-[14px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                                <p>{{ property.reviews.score }}</p>
                                            </div>
                                        </div>
                                        <div class="">
                                            <p class="text-black/[0.6] font-[500] text-[14px]">Menginap di tempat john</p>
                                            <p class="text-black/[0.6] font-[500] text-[14px]">31 Jun - 31 Feb</p>
                                            <p class="text-black/[0.6] text-[15px] font-[500] my-2"><span
                                                    class="text-black">{{
                                                        property.price.options[0].formattedDisplayPrice.toLocaleString()
                                                    }}</span> malam</p>
                                        </div>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <NuxtLayout :name="layouts.footer">

        </NuxtLayout>
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
            jsonData: json,
            response:null,
        };
    },
    async setup() {
        const options = {
            method: 'POST',
            url: 'https://hotels4.p.rapidapi.com/properties/v2/list',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '93788320c3msh23bfde2d0684e57p17e7b1jsnd3c3a3b2391b',
                'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
            },
            data: {
                currency: 'USD',
                eapid: 1,
                locale: 'en_US',
                siteId: 300000001,
                destination: {
                    regionId: '6054439'
                },
                checkInDate: {
                    day: 10,
                    month: 10,
                    year: 2022
                },
                checkOutDate: {
                    day: 15,
                    month: 10,
                    year: 2022
                },
                rooms: [
                    {
                        adults: 2,
                        children: [{ age: 5 }, { age: 7 }]
                    }
                ],
                resultsStartingIndex: 0,
                resultsSize: 200,
                sort: 'PRICE_LOW_TO_HIGH',
                filters: {
                    price: { max: 150, min: 100 }
                }
            }
        };

        let response = null;
        try {
            response = await axios.request(options);
        } catch (error) {
            console.error(error);
        }

        return {
            response: response.data
        };
    }
};
</script>