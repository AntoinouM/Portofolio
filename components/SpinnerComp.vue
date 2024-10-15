<script setup>
    
    const props = defineProps({
        loadingPercentage: { type: Number, default: undefined}
    })

</script>

<template>
    <div class="spinner__item">

    </div>
</template>

<style lang="scss" scoped>
    
    .spinner_item {
        width: 200px;
        height: 200px;
        background-color: palevioletred;
    }

</style>
