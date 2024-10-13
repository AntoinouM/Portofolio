<script  setup>
    import stack from '~/utils/data/stack.json';
    import ResourceManager from '~/utils/ResourcesManager/ResourceManager';
    import { assignJSONToResources } from '~/utils/utilsFunctions';

    const resourceLoader = new ResourceManager();
    const stackResources = ref(null);
    const resourcesLoaded = ref(false);

    const presentationContent = ref(null)
    let activePresentationIndex = ref(0);
    const presentation = {
        target: ['For everyone', 'For recruiters', 'For developers'],
        content: [
            "Hey there! I'm a full-stack developer who’s all about coding, crafting clean designs, and bringing beautiful, user-friendly experiences to life. I love turning ideas into sleek, functional, and fun digital creations!",
            "I'm a full-stack developer with a passion for clean code, intuitive design, and problem-solving, eager to bring my skills to your team to create impactful digital solutions.",
            "I may not be {highly_technical} yet and while (!Senior) I am a fastLearner and I am me.openToFeedback(). I build this.site from scratch && me.sharpenMySkills on {projects: other}.",
        ]
    }
    const animate = ref(false);
    const sprite = {
        src: '/Pictures/astroIdle.png',
        states: [
            {
                name: 'idle',
                nbImg: 4,
                row: 1,
                col: 1,
                width: 400,
                height: 400,
            }
        ],
        dimension: {
            width: 1600,
            height: 400
        },         
        initialPosition: {
            x: -10,
            y: 40
        },
        scale: -1,
    }

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
                    <article class="bento__item bento__presentation">
                        <ul class="presentation__targets">
                            <li v-for="(target, index) in presentation.target" :key="`target${index}`" class="presentation__target" :class="{active: activePresentationIndex === index}" @click="activePresentationIndex = index">{{target}}</li>
                        </ul>
                        <div ref="presentationContent" class="presentation__content">{{ presentation.content[activePresentationIndex] }}</div>
                    </article>
                    <article class="bento__item bento__picture">
                        <img src="/Pictures/climbing.jpg" alt="man climbing">
                        <svg class="picture__svg" viewBox="0 0 54 45" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                            <path class="picture__path" d="M53.5 2.50001C43.6666 -0.16666 23.5 -1.19999 21.5 16C19.5 33.2 31.1667 33.8333 38 31C43.7186 28.6289 45.1 20.8 39.5 16C32.5 10 18.5 14.5 10 29C3.2 40.6 1.16667 44.1667 1 44.5M1 44.5V36M1 44.5L8.5 42.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </article>
                    <article class="bento__item bento__quote">
                        <p class="body">"Whether it’s climbing or coding, I’m all about solving problems, finding the best path, and reaching the goal step by step."</p>
                    </article>
                    <article class="bento__item bento__position">
                        <h3 class="title4 position_text">Full-stack developer & UX enthusiast</h3>
                    </article>
                    <article class="bento__item bento__name" @mouseenter="animate = true" @mouseleave="animate = false">
                        <h2 class="title4 name__name">Hello, I am <br/><span class="title2 name_name--strong">ANTOINE MUNERET</span></h2>
                        <CanvasComp class="name__canvas"
                            :animate="animate"
                            :sprite="sprite"
                            :fps="20"
                        />
                    </article>
                    <article class="bento__item bento__stack">
                        <h3 class="title3 stack__title">My stack</h3>
                        <div class="stack__container">
                            <StackItem v-for="resource in stackResources" :key="resource.key" :item="resource" class="stack__item"/>
                        </div>
                    </article>
                    <article class="bento__item bento__education">
                        <div class="education__container">
                            <h3 class="education__title">Education</h3>
                            <EducationCard 
                                title="Bachelor in Creative Computing"
                                school="Sept. 2021 - June 2024"
                                location="Fachhochschule St. Pölten, Austria"
                            />
                            <EducationCard 
                                title="Technical Degree in Sales"
                                school="Sept. 2009 - June 2011"
                                location="IUT2 Grenoble, France"
                            />
                        </div>
                        <div class="education__projects">
                            <h3 class="projects__text">My Projects</h3>
                            <span class="projects__buffer"></span>
                            <span class="projects__arrow">
                            </span>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </div>
    
</template>

<style lang="scss" scoped>

    
</style>
