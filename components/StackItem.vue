<script setup>

    const props = defineProps({
        item: {type: Object, required: true}
    })

    let name, src, experience;

    onMounted(() => {
        name = props.item[0];
        src = props.item[1].src;
        experience = props.item[1].experience;
    })

</script>

<template>
    <div class="stackItem__container">
        <img :src="src" :alt="name" class="stackItem__logo">
        <span class="stackItem__tooltip">
            <h3 class="title4 tooltip__name">{{name}}</h3>
            <p class="body tooltip__experience"></p>
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
            $tooltip-height: 60px;
            $tooltip-width: 120px;

            position: absolute;
            height: $tooltip-height;
            width: $tooltip-width;
            border: $border-width solid $primary;
            top: $tooltip-height * -1 + $spacer-1 * -1;
            left: 50%;
            transform: translateX(-50%);
            display: none;
            background-color: $grey-90;

            z-index: 10;
        }

        &__logo:hover + .stackItem__tooltip {
            display: block;
        }
    }

</style>
