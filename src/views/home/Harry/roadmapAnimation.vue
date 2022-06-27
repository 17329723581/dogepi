<template>
    <div id="roadmapAnimation"></div>
</template>

<script>
import lottie from "lottie-web";
  import animationData from '@/assets/roadmap-animation.json';

  export default {
    name: 'roadmapAnimation',
    components: {
    },
    data() {
      return {
        defaultOptions: { animationData: animationData },
        animationSpeed: 1,
        anim: {}
      }
    },
   mounted(){
        this.svgFun();
    },
    methods: {
        svgFun(){
            let params = {
                container: document.getElementById("roadmapAnimation"),
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: animationData
            };
            let anim;
            anim = lottie.loadAnimation(params);
        }
    },
  }
</script>