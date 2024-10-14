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
        <div class="project__image grid__child">
            <img :src="imageSrc" :alt="`${name} project image cover`">
        </div>
        <div class="project__description grid__child">
            <h3 class="title2 description__title">{{ name }}</h3>
            <p class="description__body">{{ description }}</p>
            <p class="description__stack"></p>
        </div>
        <div class="project__links grid__child"></div>
    </div>
    
</template>

<style lang="scss" scoped>

    .project__container {
        width: 100%;
        height: 350px;
        overflow: hidden;

        display: grid;
        grid-template-columns: 1fr 1.5fr;
        grid-template-rows: 3fr .8fr;
        grid-column-gap: $spacer-3;
        grid-row-gap: $spacer-2;

        grid-template-areas: 
            "picture description"
            "picture links";

        & .grid__child {
            justify-self: stretch;
            align-self: stretch;
            border-radius: $border-radius-xl;
            background-color: $grey-90;
            overflow: hidden;
            padding: $spacer-3 $spacer-4;
        }
    }

    .project {

        &__image {
            grid-area: picture;
        }

        &__description {
            grid-area: description;
            display: flex;
            flex-direction: column;
            gap: $spacer-3;

            & .description__title {
                font-weight: bold;
            }

            & .description__body {

            }

            & .description__stack {
                align-self: flex-end;
            }
        }

        &__links {
            grid-area: links;
        }
    }
    
</style>
