<script setup>

    const props = defineProps({
        height: String,
    })

</script>

<template>

    <div>
        <section class="section-container">
            <slot></slot>
        </section>
    </div>
    
</template>

<style lang="scss" scoped>
    
    .section-container {
        height: v-bind(height);
    }

</style>
