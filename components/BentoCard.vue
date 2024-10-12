<script setup>

    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        }
    })

</script>

<template>

    <div class="card__container">
        <h2 class="title2 card__title">Test</h2>
        <p class="body card__body">Test body lorem ipsum</p>
        <slot></slot>
    </div>
    
</template>

<style lang="scss" scoped>
    
</style>
