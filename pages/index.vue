<script setup>
import SpinnerComp from '~/components/SpinnerComp.vue';
import stack from '~/utils/data/stack.json';
import ResourceManager from '~/utils/ResourcesManager/ResourceManager';
import { assignJSONToResources } from '~/utils/utilsFunctions';

useSeoMeta({
  title: 'Antoine Muneret',
  ogTitle: 'Antoine Muneret',
  description:
    'This is my portofolio. I am trying to showcase my past or current projects and tell you more about myself.',
  ogDescription:
    'This is my portofolio. I am trying to showcase my past or current projects and tell you more about myself.',
  ogImage: '/favicon/web-app-manifest-192x192.png',
  twitterCard: 'summary_large_image',
});

const resourceLoader = new ResourceManager();
const stackResources = ref([]);
const resourcesLoaded = ref(false);

const presentationContent = ref(null);
let activePresentationIndex = ref(1);
const presentation = {
  target: ['For everyone', 'For recruiters', 'For developers'],
  content: [
    "Hey there! I'm a front end developer. I love coding as much as I love climbing so if you don't see me attached to a rope I might be attached to my keyboard.",
    "I'm a front end developer. I understand Component Based Architecture. I have an eye for UI/UX design and Data Visualization. And I am also a kind guy.",
    'I may not be {highly_technical} yet and while (!Senior) I am a fastLearner and me.openToFeedback(). I build this.site from scratch.init && me.sharpenMySkills() on {projects: other}.',
  ],
};
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
    },
  ],
  dimension: {
    width: 1600,
    height: 400,
  },
  initialPosition: {
    x: -10,
    y: 40,
  },
  scale: -1,
};

function downloadPdf() {
  const link = document.createElement('a');
  link.href = '/Resume.pdf';
  link.download = 'resume_antoine_muneret(must hire).pdf';
  link.click();
}

onMounted(() => {
  const stackKeys = new Set(Object.keys(stack));
  const techLogoFiles = Object.values(stack)
    .map((entry) => entry?.src?.split('/')?.pop())
    .filter(Boolean);

  // manage resources
  resourceLoader.addEventListener('end', (e) => {
    const allTechLogos = resourceLoader.getFilteredArray('Tech_Logos') ?? [];
    stackResources.value = allTechLogos.filter((r) => stackKeys.has(r.key));
    resourcesLoaded.value = true;
    assignJSONToResources(stack, stackResources.value);
  });

  resourceLoader.manageResources([
    { directory: 'Tech_Logos', listOfElements: techLogoFiles },
    'Pictures',
    'Projects',
  ]);
});
</script>

<template>
  <div>
    <NavBar />
    <section class="section bento" id="bento">
      <div class="spinner" v-if="!resourcesLoaded">
        <SpinnerComp />
      </div>
      <div class="bento__container" v-if="resourcesLoaded">
        <div class="bento__grid">
          <article class="bento__item bento__presentation">
            <ul class="presentation__targets">
              <li
                v-for="(target, index) in presentation.target"
                :key="`target${index}`"
                class="presentation__target"
                :class="{ active: activePresentationIndex === index }"
                @click="activePresentationIndex = index"
              >
                {{ target }}
              </li>
            </ul>
            <div ref="presentationContent" class="presentation__content">
              {{ presentation.content[activePresentationIndex] }}
            </div>
          </article>
          <article class="bento__item bento__picture">
            <svg
              class="picture__svg"
              viewBox="0 0 54 45"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="picture__path"
                d="M53.5 2.50001C43.6666 -0.16666 23.5 -1.19999 21.5 16C19.5 33.2 31.1667 33.8333 38 31C43.7186 28.6289 45.1 20.8 39.5 16C32.5 10 18.5 14.5 10 29C3.2 40.6 1.16667 44.1667 1 44.5M1 44.5V36M1 44.5L8.5 42.5"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </article>
          <article class="bento__item bento__quote">
            <p class="body">
              "Whether it’s climbing or coding, I’m all about solving problems,
              finding the best path, and reaching the goal step by step."
            </p>
          </article>
          <NuxtLink
            :to="{ path: '/', hash: '#contact' }"
            class="bento__item bento__position"
          >
            <h3 class="title4 position_text">
              Front-end developer & UX enthusiast
            </h3>
          </NuxtLink>
          <div
            class="bento__item bento__name"
            @mouseenter="animate = true"
            @mouseleave="animate = false"
          >
            <h2 class="title4 name__name">
              Hello, I am <br /><span class="title2 name_name--strong"
                >ANTOINE MUNERET</span
              >
            </h2>
            <CanvasComp
              class="name__canvas"
              :animate="animate"
              :sprite="sprite"
              :fps="20"
            />
          </div>
          <article class="bento__item bento__stack">
            <h3 class="title4 stack__title">My stack</h3>
            <div class="stack__container">
              <StackItem
                v-for="resource in stackResources"
                :key="resource.key"
                :item="resource"
                class="stack__item"
              />
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
                title="Technical Degree in Management"
                school="Sept. 2009 - June 2011"
                location="IUT2 Grenoble, France"
              />
            </div>
            <NuxtLink
              class="education__projects"
              :to="{ path: '/', hash: '#projects' }"
            >
              <h3 class="projects__text">My Projects</h3>
              <span class="projects__buffer"></span>
              <span class="projects__arrow"></span>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>
    <section class="section projects" id="projects" v-if="resourcesLoaded">
      <h2 class="title2 projects__title">my projects</h2>
      <div class="projects__container">
        <ProjectComp
          image-src="/Projects/oper.png"
          image-link="https://www.opercredits.com/"
          name="Oper Credits"
          description="Oper Credits is a digital mortgage management platform designed for efficient use on both mobile and desktop. It consists of two synchronized applications: one for borrowers and one for banks or credit institutions."
          :stack="[
            ['angular', '/Tech_Logos/angular.svg'],
            ['typescript', '/Tech_Logos/typescript.svg'],
            ['sass', '/Tech_Logos/sass.svg'],
            ['figma', '/Tech_Logos/figma.svg'],
          ]"
          :links="[
            [
              'website',
              '/Pictures/world-globe-line-icon.svg',
              'https://comixcraft.com/',
            ],
          ]"
          :stack-resource="stackResources"
          :reverse="true"
        />
        <ProjectComp
          image-src="/Projects/comixcraft_home.png"
          image-link="https://comixcraft.com/"
          name="Comixcraft"
          description="Comixcraft is an online comic editor that lets users easily design and share comics on both mobile and desktop devices. It's simple to use, with tools that make the creative process smooth and accessible."
          :stack="[
            ['nuxt', '/Tech_Logos/nuxt.svg'],
            ['javascript', '/Tech_Logos/javascript.svg'],
            ['css', '/Tech_Logos/css.svg'],
            ['sass', '/Tech_Logos/sass.svg'],
            ['html', '/Tech_Logos/html.svg'],
            ['figma', '/Tech_Logos/figma.svg'],
          ]"
          :links="[
            [
              'source',
              '/Tech_Logos/github.svg',
              'https://github.com/comixcraft/Editor',
            ],
            [
              'website',
              '/Pictures/world-globe-line-icon.svg',
              'https://comixcraft.com/',
            ],
          ]"
          :stack-resource="stackResources"
        />
        <ProjectComp
          image-src="/Projects/elevate.png"
          image-link="https://github.com/AntoinouM/elevate"
          name="Elevate! (rework)"
          description="ON GOING PROJECT - I decided to redo an old 2D browser game made with vanilla Javascript. I redeveloped my Elevate! game with React (NextJs) and typescript to make it mobile first."
          :stack="[
            ['React', '/Tech_Logos/react.svg'],
            ['Next', '/Tech_Logos/next.svg'],
            ['Typescript', '/Tech_Logos/typescript.svg'],
            ['Sass', '/Tech_Logos/sass.svg'],
          ]"
          :links="[
            [
              'source',
              '/Tech_Logos/github.svg',
              'https://github.com/AntoinouM/elevate',
            ],
            [
              'website',
              '/Pictures/world-globe-line-icon.svg',
              'https://test-elevate.netlify.app/',
            ],
          ]"
          :stack-resource="stackResources"
          :reverse="true"
        />
        <ProjectComp
          image-src="/Projects/portofolio.webp"
          image-link="https://antoinemuneret.dev/"
          name="Portofolio"
          description="My online portofolio where I give more information about myself, my projects and my stack."
          :stack="[
            ['nuxt', '/Tech_Logos/nuxt.svg'],
            ['javascript', '/Tech_Logos/javascript.svg'],
            ['css', '/Tech_Logos/css.svg'],
            ['sass', '/Tech_Logos/sass.svg'],
            ['html', '/Tech_Logos/html.svg'],
            ['figma', '/Tech_Logos/figma.svg'],
          ]"
          :links="[
            [
              'source',
              '/Tech_Logos/github.svg',
              'https://github.com/AntoinouM/Portofolio',
            ],
            [
              'website',
              '/Pictures/world-globe-line-icon.svg',
              'https://antoinemuneret.dev/',
            ],
          ]"
          :stack-resource="stackResources"
        />
        <ProjectComp
          image-src="/Projects/mindretreat_home.png"
          image-link="https://github.com/AntoinouM/website"
          name="The mind retreats"
          description="The mind retreat is an institution based in Bali. It offers retreats for mental well-being, combining holistic therapies, hypnotherapy, and nature immersion to help guests rejuvenate and find inner peace."
          :stack="[
            ['nuxt', '/Tech_Logos/nuxt.svg'],
            ['javascript', '/Tech_Logos/javascript.svg'],
            ['css', '/Tech_Logos/css.svg'],
            ['sass', '/Tech_Logos/sass.svg'],
            ['html', '/Tech_Logos/html.svg'],
            ['figma', '/Tech_Logos/figma.svg'],
          ]"
          :links="[
            [
              'source',
              '/Tech_Logos/github.svg',
              'https://github.com/AntoinouM/website',
            ],
            ['website', '/Pictures/world-globe-line-icon.svg', 'coming soon'],
          ]"
          :reverse="true"
        />
        <ProjectComp
          image-src="/Projects/astro_game.png"
          image-link="https://github.com/AntoinouM/CrossRealityDev"
          name="Stranded on Mars"
          description="'Stranded on Mars' is a 3D video-game. A small astronaut crashes his rocket on an unfamiliar planet. To repair it and get back home, he has to explore the area and gather resources."
          :stack="[
            ['csharp', '/Tech_Logos/csharp.svg'],
            ['blender', '/Tech_Logos/blender.svg'],
            ['unity', '/Tech_Logos/unity.svg'],
          ]"
          :links="[
            [
              'source',
              '/Tech_Logos/github.svg',
              'https://github.com/AntoinouM/CrossRealityDev',
            ],
          ]"
        />
        <ProjectComp
          image-src="/Projects/astro_browser.png"
          image-link="https://astro-browsergame.netlify.app"
          name="Elevate!"
          description="A simple browser game. Some collectibles planets are falling from the sky giving you fuel for your Jetpack. Try to reach the highest you can to make the better score. (not mobile friendly)"
          :stack="[
            ['javascript', '/Tech_Logos/javascript.svg'],
            ['html', '/Tech_Logos/html.svg'],
            ['css', '/Tech_Logos/css.svg'],
            ['photoshop', '/Tech_Logos/photoshop.svg'],
          ]"
          :links="[
            [
              'source',
              '/Tech_Logos/github.svg',
              'https://github.com/AntoinouM/CCL-NavigatorGame',
            ],
            [
              'website',
              '/Pictures/world-globe-line-icon.svg',
              'https://astro-browsergame.netlify.app',
            ],
          ]"
          :reverse="true"
        />
      </div>
    </section>
    <section class="section contact" id="contact" v-if="resourcesLoaded">
      <h2 class="title2 contact__title">Let's connect</h2>
      <div class="contact__container">
        <div class="title4 contact__name">Antoine Muneret</div>
        <div class="contact__photo"></div>
        <div class="contact__location">
          <img
            src="/Pictures/location.svg"
            alt="location"
            class="location__picto"
          />
          <p class="location__text">Vienna, Austria</p>
        </div>
        <div class="socials__container">
          <div class="contact__socials">
            <LinkComp
              class="social socials_github"
              src="/Tech_Logos/github.svg"
              name="github"
              link="https://github.com/AntoinouM"
            />
            <LinkComp
              class="social socials_linkedin"
              src="/Pictures/linkedin.svg"
              name="linkedin"
              link="https://www.linkedin.com/in/antoine-muneret-5b81b9123/"
            />
            <LinkComp
              class="social socials_email"
              src="/Pictures/email.svg"
              name="email"
              link="mailto:antoine.muneret2@gmail.com"
            />
          </div>
          <div class="pdf__download" @click="downloadPdf">
            Download my resume
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
