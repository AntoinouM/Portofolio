<script lang="ts" setup>

    const navbarOpened = ref(false)

</script>

<template>
    <div class="navbar__container">
        <div class="links__container" :class="{opened: navbarOpened}">
            <NuxtLink class="navbar__link" :to="{ path: '/', hash: '#bento'}">Home</NuxtLink>
            <NuxtLink class="navbar__link" :to="{ path: '/', hash: '#projects'}">Projects</NuxtLink>
            <NuxtLink class="navbar__link" :to="{ path: '/', hash: '#contact'}">Contact</NuxtLink>
        </div>
        <div class="navbar__btn" :class="{isRounded: navbarOpened}" @click="navbarOpened = !navbarOpened"></div>
    </div>
</template>

<style lang="scss" scoped>

    $navbar-height: 50px;

    .opened {
        transform: scaleX(1) !important;
        border-radius: $border-radius-lg 0 0 $border-radius-lg !important;
    }

    .isRounded {
        border-radius: 0 $border-radius-lg $border-radius-lg 0 !important;
        border: $border-width solid $smoke-white;
    }
    
    .navbar__container {
        position: sticky;
        top: 0;
        width: 100%;
        height: $navbar-height;
        display: flex;
        justify-content: center;
        z-index: 100;

        & .navbar__btn {
            height: $navbar-height;
            width: $navbar-height;
            background-color: $grey-90;
            border-radius: $border-radius-lg;
            background-image: url('/public/Pictures/menu-burger.svg');

            &:hover {
                cursor: pointer;
            }
        }

        & .links__container {
            display: flex;
            flex-direction: row;
            gap: $spacer-4;
            padding: $spacer-3 $spacer-4;
            z-index: 100;
            background-color: $grey-90;
            border-radius: $border-radius-lg;
            transform: scaleX(0);
            transition: transform .3s ease-in;
            transform-origin: 100% 50%;

            & .navbar__link {
                font-size: .9rem;
                color: $smoke-white;
                text-transform: uppercase;
                position: relative;

                &::after {
                    display:block;
                    position: absolute;
                    bottom: -10%;
                    content: '';
                    border-bottom: solid 2px $smoke-white; 
                    border-radius: 5px;
                    width: 100%; 
                    transform: scaleX(0);  
                    transition: transform 250ms ease-in-out;
                }

                &:hover:after {
                    transform: scaleX(1);
                }
            }
        }
    }

</style>
