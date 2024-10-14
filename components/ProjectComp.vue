<script setup>

    const props = defineProps({
        imageSrc: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        stack: { type: Array, required: true },
        links: {type: Array, default: null },
        stackResource: { type: Object, default: null }
    })

// observe when in the page to 'appear'

</script>

<template>

    <div class="project__container">
        <div class="project__image">
            <img :src="imageSrc" :alt="`${name} project image cover`">
        </div>
        <div class="project__description">
            <h3 class="title3 description__title">{{ name }}</h3>
            <p class="description__body">{{ description }}</p>
            <p class="description__stack"></p>
        </div>
        <div class="project__links"></div>
    </div>
    
</template>

<style lang="scss" scoped>

    .project__container {
        width: 100%;
        height: 350px;
        border: 1px solid pink;
        overflow: hidden;

        display: grid;
        
    }
    
</style>
