<script setup>

    const props = defineProps({
        src: { type: String, required: true },
        name: { type: String, required: true },
        link: { type: String, required: false },
    })

    const allowLink = ref(true);

    onMounted(() => {
        allowLink.value = props.link.substring(0, 5) === 'https';
    })

</script>

<template>
    
    <div class="item__container" :class="{linkInvalid: !allowLink}">
        <img :src="src" :alt="name" class="item__image">
        <a v-if="allowLink" :href="link" target="_blank" rel="noopener" class="item__name">{{name}}</a>
        <p v-else class="item__name item__name">Coming soon</p>
    </div>

</template>

<style lang="scss" scoped>
    
    .item__container {
        display: flex;
        flex-direction: row;
        gap: $spacer-3;
        width: fit-content;
        transition: all .25s ease-in;

        &:hover {
            transform: scale(1.06);

            & .item__name:after {
                transform: scaleX(1); 
            }
        }

        & .item {
            &__image {
                width: 30px;
                height: 30px;
                filter: invert(1);
            }

            &__name {
                font-size: 1rem;
                display: flex;
                align-items: center;
                color: $smoke-white;
                position: relative;

                &::after {
                    display:block;
                    position: absolute;
                    bottom: $spacer-1 * -1;
                    content: '';
                    border-bottom: solid 2px $smoke-white; 
                    border-radius: 5px;
                    width: 100%; 
                    transform: scaleX(0);  
                    transform-origin:  100% 50%;
                    transition: transform 250ms ease-in-out;
                }
            }
        }
    }

    .linkInvalid {
        opacity: .6;

        &:hover {
            transform: none;
        }

        & .item__name {
            cursor: not-allowed;

            &::after {
                display: none;
            }
        }
    }

</style>
