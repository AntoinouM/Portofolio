<script  setup>
    import stack from '~/utils/data/stack.json';
    import ResourceManager from '~/utils/ResourcesManager/ResourceManager';
    import { assignJSONToResources } from '~/utils/utilsFunctions';

    const resourceLoader = new ResourceManager();
    const stackResources = ref(null);
    const resourcesLoaded = ref(false);

    onMounted(() => {
        // manage resources
        resourceLoader.addEventListener('end', (e) => {
            stackResources.value = resourceLoader.getFilteredArray('Tech_Logos');
            resourcesLoaded.value = true;
            console.log(e.detail.message)
            assignJSONToResources(stack, stackResources.value)
        })
        resourceLoader.manageResources(['Tech_Logos', 'Pictures'])
    })

</script>

<template>

    <div>
        <section class="section bento">
            <div class="bento__container" v-if="resourcesLoaded" >
                <div class="bento__grid">
                    <article class="bento__item bento__presentation"></article>
                    <article class="bento__item bento__picture">
                        <img src="/Pictures/climbing.jpg" alt="man climbing">
                    </article>
                    <article class="bento__item bento__quote">
                        <p class="body">"Whether it’s climbing or coding, I’m all about solving problems, finding the best path, and reaching the goal step by step."</p>
                    </article>
                    <article class="bento__item bento__position">
                        <h3 class="title4 position_text">Full-stack developer & UX enthusiast</h3>
                    </article>
                    <article class="bento__item bento__name">
                        <h2 class="title4 name__name">Hello, I am <span class="title2 name_name--strong">ANTOINE MUNERET</span></h2>
                        <img src="/public/Pictures/cosmo.png" alt="astronaut" class="name__image">
                    </article>
                    <article class="bento__item bento__stack">
                        <h3 class="title3 stack__title">My stack</h3>
                        <div class="stack__container">
                            <StackItem v-for="resource in stackResources" :key="resource.key" :item="resource" class="stack__item"/>
                        </div>
                    </article>
                    <article class="bento__item bento__education"></article>
                </div>
            </div>
        </section>
    </div>
    
</template>

<style lang="scss" scoped>

    
</style>
