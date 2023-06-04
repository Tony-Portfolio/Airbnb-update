<template>
    <div></div>
</template>
<script>
export default {
    mounted() {
        localStorage.removeItem('login');
        window.location.href = "/";
    }
}

</script>