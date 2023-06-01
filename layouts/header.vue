
<template>
    <header class="sticky top-0 left-0 z-[10] bg-white shadow-md">
        <!-- <NavResponsiveHeader /> -->
        <NavTopHeader />
        <NavMidHeader @Submitted="handle" />
        <NavBotHeader />
        <NavFilterHeader />
        


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
        handle(input) {
            this.searchval = input;
            this.submitInput();
        },
        submitInput() {
            this.$emit('inputSubmitted', this.searchval);
        }
    }
}
</script>