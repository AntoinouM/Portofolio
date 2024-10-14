<script setup>

    const props = defineProps({
        src: { type: String, required: true },
        name: { type: String, required: true }
    })

</script>

<template>
    <div class="link__container">
        <img class="link__image" :src="src" :alt="name">
        <p class="link__name"></p>
    </div>
</template>

<style lang="scss" scoped>
    
    .link__container {
        display: flex;
        flex-direction: row;
        gap: $spacer-2;
        justify-content: center;
        align-items: center;
        padding: $spacer-2 $spacer-1;
    }

</style>
