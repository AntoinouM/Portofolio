<script setup>
    
    const props = defineProps({
        loadingPercentage: { type: Number, default: undefined}
    })

</script>

<template>
    <div class="loadContainer">
        <div class="loadText body">loading</div>
        <div class="loadInner">
            <div class="loadCircle">
                <div class="loadCircleInner"></div>
            </div>
            <div class="loadCircle">
                <div class="loadCircleInner"></div>
            </div>
            <div class="loadCircle">
                <div class="loadCircleInner"></div>
            </div>
            <div class="loadCircle">
                <div class="loadCircleInner"></div>
            </div>
            <div class="loadCircle">
                <div class="loadCircleInner"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
    $loaderSize: 200px; /* size of the container */
    $loaderSpeed: 1.5s;
    $border-thickness: 5px; /* the bigger the loader is, the thicker this needs to be */
    $loader-base-color: $electric-blue; /* rgb color */

    .loadText {
        animation: typing 1.5s infinite alternate;
        color: $loader-base-color;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        @keyframes typing {
          from { color: $loader-base-color }
          to { color: rgba($loader-base-color,0) }
        }
    }

    .loadContainer{
        position: relative;
        width: $loaderSize;
        height: $loaderSize;
    }

    .loadInner{
        width: 82.5%;
        height: 85%;
        border-radius: 100%;
        position: absolute;
        top: 7.5%;
        left: 7.25%;
    }

    .loadCircle{
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .loadCircle > .loadCircleInner{
        width: 100%;
        height: 100%;
        border-radius: 100%;
        border: $border-thickness solid rgba($loader-base-color,0.7);
        border-right: none;
        border-top: none;
        background-clip: padding;
        box-shadow: inset 0px 0px 10px rgba($loader-base-color,0.15);
    }
    .loadCircle:nth-of-type(0){
        transform: rotate(0deg);
            -o-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
    }
    .loadCircle:nth-of-type(0) .loadCircleInner{
        animation: loaderSpin $loaderSpeed infinite linear;
            -o-animation: loaderSpin $loaderSpeed infinite linear;
            -ms-animation: loaderSpin $loaderSpeed infinite linear;
            -webkit-animation: loaderSpin $loaderSpeed infinite linear;
            -moz-animation: loaderSpin $loaderSpeed infinite linear;
    }
    .loadCircle:nth-of-type(1){
        transform: rotate(70deg);
            -o-transform: rotate(70deg);
            -ms-transform: rotate(70deg);
            -webkit-transform: rotate(70deg);
            -moz-transform: rotate(70deg);
    }
    .loadCircle:nth-of-type(1) .loadCircleInner{
        animation: loaderSpin $loaderSpeed infinite linear;
            -o-animation: loaderSpin $loaderSpeed infinite linear;
            -ms-animation: loaderSpin $loaderSpeed infinite linear;
            -webkit-animation: loaderSpin $loaderSpeed infinite linear;
            -moz-animation: loaderSpin $loaderSpeed infinite linear;
    }
    .loadCircle:nth-of-type(2){
        transform: rotate(140deg);
            -o-transform: rotate(140deg);
            -ms-transform: rotate(140deg);
            -webkit-transform: rotate(140deg);
            -moz-transform: rotate(140deg);
    }
    .loadCircle:nth-of-type(2) .loadCircleInner{
        animation: loaderSpin $loaderSpeed infinite linear;
            -o-animation: loaderSpin $loaderSpeed infinite linear;
            -ms-animation: loaderSpin $loaderSpeed infinite linear;
            -webkit-animation: loaderSpin $loaderSpeed infinite linear;
            -moz-animation: loaderSpin $loaderSpeed infinite linear;
    }
    .loadInner{
        animation: loaderSpin ($loaderSpeed*2.5) infinite linear;
            -o-animation: (loaderSpin $loaderSpeed*2.5) infinite linear;
            -ms-animation: (loaderSpin $loaderSpeed*2.5) infinite linear;
            -webkit-animation: (loaderSpin $loaderSpeed*2.5) infinite linear;
            -moz-animation: (loaderSpin $loaderSpeed*2.5) infinite linear;
    }
    @keyframes loaderSpin{
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
    @-o-keyframes loaderSpin{
        from{
            -o-transform: rotate(0deg);
        }
        to{
            -o-transform: rotate(360deg);
        }
    }
    @-ms-keyframes loaderSpin{
        from{
            -ms-transform: rotate(0deg);
        }
        to{
            -ms-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes loaderSpin{
        from{
            -webkit-transform: rotate(0deg);
        }
        to{
            -webkit-transform: rotate(360deg);
        }
    }
    @-moz-keyframes loaderSpin{
        from{
            -moz-transform: rotate(0deg);
        }
        to{
            -moz-transform: rotate(360deg);
        }
    }

</style>
