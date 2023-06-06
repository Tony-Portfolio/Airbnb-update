
<template>
    <header class="sticky top-0 left-0 z-[10] bg-white shadow-md">
        <!-- <NavResponsiveHeader /> -->
        <!-- <NavTopHeader /> -->
        <NavMidHeader/>
        <NavBotHeader />
        


    </header>
</template>
<script>

export default {
    data() {
        return {
            dropdownmenu: false,
            searchval: ''
        };
    },
    methods: {
    }
}
</script>