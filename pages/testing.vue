<template>
    <div>
        <input type="text" placeholder="Cari barang"
            class="flex border-2 border-black/[0.1] shadow-lg py-3 px-4 pr-14 rounded-full text-[14px] font-[500] block w-[300px]"
            v-model="searchValue"/>

        <p>Search value: {{ searchValue }}</p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            searchValue: 'Something'
        }
    }
}
</script>
  