<script setup>

    const props = defineProps({
        imageSrc: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        stack: { type: Array, required: true },
        links: {type: Array, default: null },
        reverse: { type: Boolean, default: false }
    })

    const project = ref(null);
    const projectImage = ref(null);
    const imageContainer = ref(null);

    const computedImageWidth = computed(() => {
        return projectImage.value ? projectImage.value.naturalWidth * (350 / projectImage.value.naturalHeight) + 'px' : null;
    });
    const computedImagePosition = computed(() => {
        return imageContainer.value && projectImage.value ? (projectImage.value.naturalWidth * (350 / projectImage.value.naturalHeight) - imageContainer.value.offsetWidth) * -1 + 'px' : null;
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            entry.target.classList.add('fade-in');
          } else if (!entry.isIntersecting || entry.intersectionRatio < 0.3) {
            entry.target.classList.remove('fade-in');
          }
        });
      },
      { threshold: 0.25, }
    );

    onMounted(() => {
        projectImage.value = new Image();
        projectImage.value.src = props.imageSrc;
        observer.observe(project.value)
    });

    onBeforeUnmount(() => {
        observer.unobserve(project.value)
    })

</script>

<template>

    <div ref="project" class="project__container" :class="{reverse: reverse}">
        <div ref="imageContainer" class="project__image grid__child">
            <img :src="imageSrc" :alt="`${name} project image cover`" :class="{fromRight: reverse}">
        </div>
        <div class="project__description grid__child">
            <h3 class="title2 description__title">{{ name }}</h3>
            <p class="description__body">{{ description }}</p>
            <div class="description__stack">
                <span class="stack__separator"></span>
                <div class="stack__container">
                    <TechnologyItem 
                        v-for="item in stack"
                        :key="item"
                        :src="item[1]"
                        :name="item[0]"
                    />
                </div>
            </div>
        </div>
        <div class="project__links grid__child">
            <LinkComp
                v-for="link in links"
                :key="link[0]"
                :src="link[1]"
                :name="link[0]"
                :link="link[2]"
            />
        </div>
    </div>
    
</template>

<style lang="scss" scoped>

    $container-height: 350px;

    .fade-in {
        opacity: 1 !important;
    }

    .project__container {
        width: 85%;
        height: $container-height;
        opacity: .1;
        transition: opacity 0.5s ease-in;

        display: grid;
        grid-template-columns: 1fr 1.5fr;
        grid-template-rows: 3fr .7fr;
        grid-column-gap: $spacer-3;
        grid-row-gap: $spacer-2;

        grid-template-areas: 
            "picture description"
            "picture links";

        @include breakpoint-max-width(md) {
            width: 100%;
            height: fit-content;
            display: flex;
            flex-direction: column;
            gap: $spacer-2;
            align-items: center;
        }

        & .grid__child {
            justify-self: stretch;
            align-self: stretch;
            border-radius: $border-radius-xl;
            background-color: $grey-90;
            overflow: hidden;
            padding: $spacer-3 $spacer-4;
            position: relative;
        }
    }

    .reverse {
        grid-template-columns: 1.5fr 1fr;
        grid-template-areas: 
            "description picture"
            "links picture";

        @include breakpoint-max-width(md) {
            height: fit-content;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1.5fr .5fr;

            grid-template-areas: 
                "picture"
                "description"
                "links";
        }
    }

    .project {

        $image-height: 160px;

        &__image {
            grid-area: picture;
            padding: 0 !important;
            position: relative;
            overflow: visible !important;

            @include breakpoint-max-width(md) {
                height: $image-height;
            }

            &:hover {

                & > img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: $container-height ;
                    width: v-bind(computedImageWidth);
                    transform: scaleY(1.05);

                    @include breakpoint-max-width(md) {
                        position: inherit;
                        height: 100%;
                        width: 100% !important;
                        transform: scaleY(1) !important;
                    }
                }

                & > img.fromRight {
                    /* change here for position */
                    right: 0 !important;
                    transform: translateX(v-bind(computedImagePosition)) scaleY(1.05);

                    @include breakpoint-max-width(md) {
                        transform: translateX(0) scaleY(1) !important;
                    }
                }
            }

            & img {
                position: relative;
                height: 100%;
                width: 100%;
                object-fit: cover;
                object-position: left center;
                border-radius: $border-radius-xl;
                transition: all .3s ease-out;
                z-index: 11;
                transform-origin: 50% 100%;

                @include breakpoint-max-width(md) {
                    height: 100%;
                    width: 100%;
                }
            }
        }

            & img.fromRight {
                transform: translateX(0);
            }


        &__description {
            grid-area: description;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: $spacer-3;

            & .description__title {
                font-weight: bold;
                font-size: 1.2rem;
            }

            & .description__body {
                font-size: .9rem;
            }

            & .description__stack {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: $spacer-2;

                    & .stack__separator {
                        height: 1px;
                        width: 100%;
                        background-color: $grey-70;
                    }

                    & .stack__container {
                        display: flex;
                        flex-direction: row;
                        gap: $spacer-2;
                        flex-wrap: wrap;
                    }
            }
        }

        &__links {
            grid-area: links;
            padding: 0 !important;
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            @include breakpoint-max-width(md) {
                padding: $spacer-2 !important;
            }
        }
    }
    
</style>
