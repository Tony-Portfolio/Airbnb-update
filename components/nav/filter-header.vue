<template>
    <div class="w-full h-screen fixed top-0 left-0 z-[30] hidden">
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
                                    <h4 class="font-[500]">Rumah</h4>
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
    </div>
</template>