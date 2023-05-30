<template>
    <div class="md:block hidden border-b-[1px] border-black/[0.1]">
        <div class="bg-[#F7F7F7] py-5">
            <div class="w-11/12 mx-auto flex items-center justify-between">
                <h2 class="text-xl font-[500]">Kamar dan 50+ fitur terkini</h2>
                <div class="flex gap-4 items-center">
                    <img src="/images/video.jpg" alt="" class="w-[50px] rounded-lg">
                    <p>lihat video kamar</p>
                    <p class="">|</p>
                    <p>Selengkapnya</p>
                </div>
            </div>
        </div>
    </div>
    <section class="sticky top-0 left-0 z-[10] bg-white shadow-md">
        <div class="md:hidden block py-4">
            <div
                class="flex items-center justify-between w-11/12 border-[1px] border-black/[0.1] rounded-full mx-auto px-2 py-2 shadow-lg">
                <div class="flex gap-4 items-center">
                    <div class="flex items-center justify-center ml-2 font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-6 h-6 font-bold">
                            <path fill-rule="evenodd"
                                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="flex flex-col">
                        <h3 class="text-[15px] font-bold">Kemana saja</h3>
                        <p class="text-[13px] font-[500] text-black/[0.6]">Minggu mana pun , Tambahkan tamu</p>
                    </div>
                </div>
                <div class="">
                    <div
                        class="h-[40px] w-[40px] border-[1px] border-black/[0.1] rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path
                                d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-11/12 mx-auto flex flex-col gap-4 md:block hidden">
            <div class="flex items-center py-4">
                <div class="flex-1">
                    <NuxtLink to="/">
                        <img src="/images/airbnb-logo.png" alt="" class="w-[100px] shrink">
                    </NuxtLink>
                </div>
                <div class=" flex-1 shrink-0">
                    <div class="w-full">
                        <ul
                            class="flex border-2 border-black/[0.1] shadow-lg gap-4 py-2 px-3 rounded-full text-[14px] font-[500] items-center w-full">
                            <li class="pl-4">Ke mana saja</li>
                            <li class="font-[400] text-black/[0.4]">|</li>
                            <li>Minggu mana pun</li>
                            <li class="font-[400] text-black/[0.4]">|</li>
                            <li class="flex items-center gap-2 justify-between">Tambahkan tamu <div
                                    class="w-[35px] h-[35px] text-white rounded-full bg-[#FF385C] flex items-center justify-center p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="w-12 h-12">
                                        <path fill-rule="evenodd"
                                            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex items-center gap-4 justify-end flex-1 shrink-0">
                    <p>Jadikan rumah anda airbnb</p>
                    <div class="flex items-center p-1 border-[1px] border-black/[0.1] rounded-full gap-1 relative">
                        <div class="flex items-center gap-1 cursor-pointer" @click="dropdownmenu = !dropdownmenu">
                            <div class="mx-2">
                                <i class="fa-solid fa-bars"></i>
                            </div>
                            <div
                                class="bg-black/[0.6] w-[15px] h-[15px] rounded-full flex items-center justify-center p-4 text-white">
                                <i class="fa-solid fa-user"></i>
                            </div>
                        </div>
                        <div class="absolute bg-white top-[100%] left-[-215%] py-2 w-[240px] z-[20] shadow-lg rounded-lg flex flex-col gap-3"
                            v-show="dropdownmenu" @click="dropdownmenu = !dropdownmenu">
                            <div class="">
                                <p class="hover:bg-black/[0.03] py-3 text-[15px] px-4 cursor-pointer">Daftar</p>
                                <p class="hover:bg-black/[0.03] py-3 text-[15px] px-4 cursor-pointer">Masuk</p>
                            </div>
                            <hr>
                            <div class="">
                                <p class="hover:bg-black/[0.03] py-3 text-[15px] px-4 cursor-pointer">Jadikan rumah Anda
                                    Airbnb</p>
                                <p class="hover:bg-black/[0.03] py-3 text-[15px] px-4 cursor-pointer">Bantuan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="md:block hidden">
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
                        <NuxtLink to="/search/1">
                            <li class="py-1 relative group" :class="{ active: isActive === 1 }">
                                <img src="/icon/bed.jpg" alt="" class="w-[20px] mx-auto grayscale-[100%]">
                                <p class="py-2">Kamar</p>
                                <div
                                    class="absolute bottom-0 left-0 w-full border-[1px] border-black/[0.1] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                                </div>
                            </li>
                        </NuxtLink>
                        <NuxtLink to="/search/2">
                            <li class="py-1 relative group" :class="{ active: isActive === 2 }">
                                <img src="/icon/tropis.jpg" alt="" class="w-[20px] mx-auto grayscale-[100%]">
                                <p class="py-2">Tropis</p>
                                <div
                                    class="absolute bottom-0 left-0 w-full border-[1px] border-black/[0.1] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                                </div>
                            </li>
                        </NuxtLink>
                        <NuxtLink to="/search/3">
                            <li class="py-1 relative group" :class="{ active: isActive === 3 }">
                                <img src="/icon/beach.jpg" alt="" class="w-[20px] mx-auto grayscale-[100%]">
                                <p class="py-2">Dekat pantai</p>
                                <div
                                    class="absolute bottom-0 left-0 w-full border-[1px] border-black/[0.1] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                                </div>
                            </li>
                        </NuxtLink>
                        <NuxtLink to="/search/4">
                            <li class="py-1 relative group" :class="{ active: isActive === 4 }">
                                <img src="/icon/rumah-bumi.jpg" alt="" class="w-[20px] mx-auto grayscale-[100%]">
                                <p class="py-2">Rumah bumi</p>
                                <div
                                    class="absolute bottom-0 left-0 w-full border-[1px] border-black/[0.1] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                                </div>
                            </li>
                        </NuxtLink>
                        <NuxtLink to="/search/5">
                            <li class="py-1 relative group" :class="{ active: isActive === 5 }">
                                <img src="/icon/golf.jpg" alt="" class="w-[20px] mx-auto grayscale-[100%]">
                                <p class="py-2">Golf</p>
                                <div
                                    class="absolute bottom-0 left-0 w-full border-[1px] border-black/[0.1] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                                </div>
                            </li>
                        </NuxtLink>
                        <NuxtLink to="/search/6">
                            <li class="py-1 relative group" :class="{ active: isActive === 6 }">
                                <img src="/icon/view.jpg" alt="" class="w-[20px] mx-auto grayscale-[100%]">
                                <p class="py-2">Pemandangan indah</p>
                                <div
                                    class="absolute bottom-0 left-0 w-full border-[1px] border-black/[0.1] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                                </div>
                            </li>
                        </NuxtLink>
                        <NuxtLink to="/search/7">
                            <li class="py-1 relative group" :class="{ active: isActive === 7 }">
                                <img src="/icon/camp.jpg" alt="" class="w-[20px] mx-auto grayscale-[100%]">
                                <p class="py-2">Berkemah</p>
                                <div
                                    class="absolute bottom-0 left-0 w-full border-[1px] border-black/[0.1] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                                </div>
                            </li>
                        </NuxtLink>
                        <NuxtLink to="/search/8">
                            <li class="py-1 relative group" :class="{ active: isActive === 8 }">
                                <img src="/icon/kolam-renang.jpg" alt="" class="w-[20px] mx-auto grayscale-[100%]">
                                <p class="py-2">Kolam renang</p>
                                <div
                                    class="absolute bottom-0 left-0 w-full border-[1px] border-black/[0.1] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                                </div>
                            </li>
                        </NuxtLink>
                        <NuxtLink to="/search/9">
                            <li class="py-1 relative group" :class="{ active: isActive === 9 }">
                                <img src="/icon/modern.jpg" alt="" class="w-[20px] mx-auto grayscale-[100%]">
                                <p class="py-2">Desain keren</p>
                                <div
                                    class="absolute bottom-0 left-0 w-full border-[1px] border-black/[0.1] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                                </div>
                            </li>
                        </NuxtLink>
                        <NuxtLink to="/search/10">
                            <li class="py-1 relative group" :class="{ active: isActive === 10 }">
                                <img src="/icon/rumah-kecil.jpg" alt="" class="w-[20px] mx-auto grayscale-[100%]">
                                <p class="py-2">Rumah kecil</p>
                                <div
                                    class="absolute bottom-0 left-0 w-full border-[1px] border-black/[0.1] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                                </div>
                            </li>
                        </NuxtLink>
                        <NuxtLink to="/search/11">
                            <li class="py-1 relative group" :class="{ active: isActive === 11 }">
                                <img src="/icon/taman-nasional.jpg" alt="" class="w-[20px] mx-auto grayscale-[100%]">
                                <p class="py-2">Taman nasional</p>
                                <div
                                    class="absolute bottom-0 left-0 w-full border-[1px] border-black/[0.1] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                                </div>
                            </li>
                        </NuxtLink>
                        <NuxtLink to="/search/12">
                            <li class="py-1 relative group" :class="{ active: isActive === 12 }">
                                <img src="/icon/mansion.jpg" alt="" class="w-[20px] mx-auto grayscale-[100%]">
                                <p class="py-2">Mansion</p>
                                <div
                                    class="absolute bottom-0 left-0 w-full border-[1px] border-black/[0.1] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                                </div>
                            </li>
                        </NuxtLink>
                        <NuxtLink to="/search/13">
                            <li class="py-1 relative group" :class="{ active: isActive === 13 }">
                                <img src="/icon/wow.jpg" alt="" class="w-[20px] mx-auto grayscale-[100%]">
                                <p class="py-2">Wow</p>
                                <div
                                    class="absolute bottom-0 left-0 w-full border-[1px] border-black/[0.1] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                                </div>
                            </li>
                        </NuxtLink>
                        <NuxtLink to="/search/14">
                            <li class="py-1 relative group" :class="{ active: isActive === 14 }">
                                <img src="/icon/luxe.jpg" alt="" class="w-[20px] mx-auto grayscale-[100%]">
                                <p class="py-2">Luxe</p>
                                <div
                                    class="absolute bottom-0 left-0 w-full border-[1px] border-black/[0.1] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                                </div>
                            </li>
                        </NuxtLink>
                        <NuxtLink to="/search/15">
                            <li class="py-1 relative group" :class="{ active: isActive === 15 }">
                                <img src="/icon/hadap-pantai.jpg" alt="" class="w-[20px] mx-auto grayscale-[100%]">
                                <p class="py-2">Hadap pantai</p>
                                <div
                                    class="absolute bottom-0 left-0 w-full border-[1px] border-black/[0.1] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                                </div>
                            </li>
                        </NuxtLink>
                        <NuxtLink to="/search/16">
                            <li class="py-1 relative group" :class="{ active: isActive === 16 }">
                                <img src="/icon/populer.jpg" alt="" class="w-[20px] mx-auto grayscale-[100%]">
                                <p class="py-2">Populer</p>
                                <div
                                    class="absolute bottom-0 left-0 w-full border-[1px] border-black/[0.1] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                                </div>
                            </li>
                        </NuxtLink>
                    </ul>
                </div>
                <div class="">
                    <div
                        class="border-[1px] border-black/[0.1] px-3 py-3 text-sm rounded-lg flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path
                                d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                        </svg>
                        <p>filter</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="w-full h-screen fixed top-0 left-0 z-[30]">
            <div class="relative h-full w-full flex items-center justify-center">
                <div class="bg-black/[0.6] absolute top-0 left-0 w-full h-full z-[4]"></div>
                <div class="bg-white w-full max-w-[800px] rounded-xl h-5/6 z-[5] ">
                    <div class="relative border-b-[1px] border-black/[0.1] text-center py-5">
                        <div class="absolute top-[50%] translate-y-[-50%] left-[20px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <h3 class="font-[600] text-black text-[15px]">Filter</h3>
                    </div>
                    <div class="overflow-y-auto">
                        <div class="w-11/12 mx-auto max-h-[470px] overflow-auto">
                            <div class="">
                                <h3 class="font-[500] text-2xl leading-relaxed my-6">Kamar tidur dan tempat tidur</h3>
                                <div class="">
                                    <p class="font-[400] text-base my-6">Kamar tidur</p>
                                    <div class="flex items-center gap-2">
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">Bebas</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">1</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">2</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">3</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">4</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">5</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">6</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">7</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">8+</label>
                                    </div>
                                </div>
                                <div class="">
                                    <p class="font-[400] text-base my-6">Tempat tidur</p>
                                    <div class="flex items-center gap-2">
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">Bebas</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">1</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">2</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">3</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">4</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">5</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">6</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">7</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">8+</label>
                                    </div>
                                </div>
                                <div class="">
                                    <p class="font-[400] text-base my-6">Kamar mandi</p>
                                    <div class="flex items-center gap-2">
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">Bebas</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">1</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">2</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">3</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">4</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">5</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">6</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">7</label>
                                        <label for=""
                                            class="border-[1px] border-black/[0.1] p-2 px-4 font-[400] rounded-full hover:border-black transition duration-300 ease-in-out block w-fit px-6 text-[14px]">8+</label>
                                    </div>
                                </div>
                            </div>
                            <hr class="my-6">
                            <div class="">
                                <h3 class="font-[500] text-2xl leading-relaxed my-6">Tipe properti</h3>
                                <div class="grid grid-cols-4 gap-4">
                                    <div
                                        class="p-4 border-[1px] border-black/[0.1] rounded-lg flex justify-between flex-col h-full max-h-[240px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                                        </svg>
                                        <h4 class = "font-[500]">Rumah</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative p-6 flex items-center justify-between">
                        <div class="">
                            <h4 class="text-[14px] font-[500] underline">Hapus semua</h4>
                        </div>
                        <div class="px-7 py-3 bg-slate-900 text-white rounded-lg font-bold text-[15px]">
                            <h4>Tampilkan 362 tempat</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </section>
</template>
<script>
import json from '@/assets/data/hotel.json';
export default {
    data() {
        return {
            dropdownmenu: false
        }
    },
    computed: {
        isActive() {
            return parseInt(this.$route.params.id);
        }
    }
}
</script>