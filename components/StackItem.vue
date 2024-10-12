<script setup>
    import Resource from '~/utils/ResourcesManager/Resource';


    const props = defineProps({
        item: {type: Resource, required: true}
    })

</script>

<template>
    <div class="stackItem__container">
        <img :src="item.src" class="stackItem__logo"/>
        <span class="stackItem__tooltip">
            <h3 class="title4 tooltip__name">{{ item.name }}</h3>
            <p class="body tooltip__experience">{{ item.experience }}</p>
        </span>
    </div>
</template>

<style lang="scss" scoped>
    
    .stackItem {

        &__container {
            position: relative;
            width: clamp(36px, 14%, 45px);
            height: auto;
            aspect-ratio: 1/1;
        }

        &__logo {
            width: 100%;
            height: 100%;
            object-position: center center;
            filter: grayscale(.9);
            transition: all .5s ease-out;

            &:hover {
                filter: grayscale(0);
            }
        }

        &__tooltip {
            $tooltip-height: 80px;
            $tooltip-width: 160px;

            position: absolute;
            height: $tooltip-height;
            width: $tooltip-width;
            border: $border-width solid $primary;
            top: $tooltip-height * -1 + $spacer-1 * -1;
            left: 50%;
            transform: translateX(-50%);
            display: none;
            opacity: 0;
            background-color: $grey-90;
            transition: opacity 1s ease-out;
            z-index: 10;
            padding: $spacer-2 $spacer-1;
        }

        &__logo:hover + .stackItem__tooltip {
            display: block;
            opacity: 1;
            transition: all 1s ease-out;
        }
    }

</style>
