<script setup>

    const props = defineProps({
        sprite: {type: Object, default: null},
        fps: {type: Number, default: 60}
    })
    const canvas = ref(null);
    const initialPosition = {
        x: 0,
        y: 0
    };
    let context, canvasDim, astronautImage, spriteDim; 
    let frameX = 0;
    let frameY = 0;
    let gameFrame = 0;

    onMounted(() => {
        context = canvas.value.getContext('2d');
        canvasDim = {
            width: canvas.value.width * window.devicePixelRatio,
            height: canvas.value.height * window.devicePixelRatio
        }
        if (!props.sprite) return;
        spriteDim = {
            width: props.sprite.states[0].width,
            height: props.sprite.states[0].height
        }
        astronautImage = new Image();
        astronautImage.src = props.sprite.src
        if (props.sprite.initialPosition) {
            initialPosition.x = props.sprite.initialPosition.x;
            initialPosition.y = props.sprite.initialPosition.y;
        }
        animate()
    })

    function animate() {
        context.clearRect(0, 0, canvasDim.width, canvasDim.height);
        let position = Math.floor(gameFrame / props.fps) % props.sprite.states[0].nbImg;
        frameX = spriteDim.width * position;
        context.drawImage(astronautImage, frameX, frameY, spriteDim.width, spriteDim.height, initialPosition.x, initialPosition.y, spriteDim.width * 0.8, spriteDim.height * 0.25);
        gameFrame++;
        requestAnimationFrame(animate);
    }

</script>

<template>

    <div class="canvas__container">
        <canvas class="canvas" ref="canvas"></canvas>
    </div>
    
</template>

<style lang="scss" scoped>
    
    .canvas__container {

        & .canvas {
            width: 100%;
            height: 100%;
        }
    }

</style>
