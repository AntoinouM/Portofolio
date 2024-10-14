<script setup>

    const props = defineProps({
        src: { type: String, required: true },
        name: { type: String, required: true },
    })

</script>

<template>
    
    <div class="item__container">
        <img :src="src" :alt="name" class="item__image">
        <p class="item__name">{{ name }}</p>
    </div>

</template>

<style lang="scss" scoped>
    
    .item__container {
        display: flex;
        flex-direction: row;
        gap: $spacer-2;
        padding: $spacer-1 $spacer-3;
        border-radius: $border-radius-lg;
        border: $border-width solid $smoke-white;
        width: fit-content;
        opacity: .9;

        & .item {
            &__image {
                width: 24px;
                height: 24px;
            }

            &__name {
                font-size: .8rem;
                display: flex;
                align-items: center;
            }
        }
    }

</style>
