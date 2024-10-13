<script setup>

    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        school: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
    })

</script>

<template>

    <div class="card__container">
        <h2 class="card__title">{{title}}</h2>
        <p class="card__body card__school">{{ school }}</p>
        <p class="card__body card__location">{{ location }}</p>
        <slot></slot>
    </div>
    
</template>

<style lang="scss" scoped>
    
    .card__container {
        display: flex;
        flex-direction: column;
        gap: $spacer-1;
        margin-top: $spacer-2;
        text-align: left;
    }

    .card__title {
        margin-bottom: $spacer-1;
        text-transform: uppercase;
        font-size: 1.1rem;
        font-weight: bold;

        @include breakpoint-max-width(lg) {
            margin-bottom: 0;
        }
    }

    .card__body {
        font-size: .8rem;
        display: block;
    }

    .card__school {
        @include breakpoint-max-width(lg) {
            display: none;
        }
    }

</style>
