<script setup>
    import Resource from '~/utils/ResourcesManager/Resource';


    const props = defineProps({
        item: {type: Resource, required: true}
    })

</script>

<template>
    <div class="stackItem__container">
        <img :src="item.src" class="stackItem__logo" :class="{invert: item.name === 'express' || item.name === 'github', bright: item.name === 'unity'}"/>
        <span class="stackItem__tooltip">
            <h3 class="title4 tooltip__name">{{ item.name }}</h3>
            <p class="body tooltip__experience">{{ item.description }}</p>
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
            -webkit-transition : -webkit-filter 300ms ease-out, transform 300ms ease-out;
            transition: all .3s ease-out;
            z-index: 1;

            &:hover {
                filter: grayscale(0);
                transform: scale(1.08);
            }
        }

        &__tooltip {
            $tooltip-height: 80px;

            position: absolute;
            box-sizing: border-box;
            height: fit-content;
            width: fit-content;
            padding: $spacer-2 $spacer-3;
            border: $border-width solid $smoke-white;
            border-radius: $border-radius-lg;
            top: 0;
            left: 50%;
            transform: translate(-50%, -110%);
            display: none;
            opacity: 0;
            background-color: $grey-90;
            transition: all .3s ease-in;
            filter: drop-shadow(5px 5px 10px #000000);
        }

        &__logo:hover + .stackItem__tooltip {
            display: block;
            opacity: 1;
            z-index: 10;
        }
    }

    .tooltip__name {
        margin-bottom: $spacer-1;
        color: $electric-blue;
    }

    .invert {
        filter: invert(100%);

        &:hover {
            filter: invert(100%);
        }
    }

    .bright {
        filter: brightness(100%) saturate(1.5) invert(100%);

        &:hover {
            filter: brightness(100%) saturate(2) invert(100%);
        }
    }

</style>
