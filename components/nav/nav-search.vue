<template>
    <input type="text" placeholder="cari barang"
        class="flex border-2 border-black/[0.1] shadow-lg py-3 px-4 pr-14 rounded-full text-[14px] font-[500] block w-[300px]"
        v-model="search" @keyup="submitInput">
</template>
  
<script>
export default {
    data() {
        return {
            search: ''
        };
    },
    methods: {
        submitInput() {
            this.$emit('inputSubmitted', this.search);
        }
    }
};
</script>
  