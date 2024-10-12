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
        <img src="/public/" :alt="name" class="stackItem__logo">
        <span class="stackItem__tooltip">
            <h3 class="title4 tooltip__name">name</h3>
            <p class="body tooltip__experience"></p>
        </span>
    </div>
</template>

<style lang="scss" scoped>
    
    .stackItem {

        &__container {
            position: relative;
            width: 15%;
            height: auto;
            aspect-ratio: 1/1;
            min-width: 36px;
        }

        &__logo {
            width: 100%;
            height: 100%;
            object-position: center center;
        }
    }

</style>
