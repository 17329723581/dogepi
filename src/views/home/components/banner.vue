<template>
    <div id="banner"></div>
</template>

<script>
import lottie from "lottie-web";
  import animationData from '@/assets/banner.json';

  export default {
    name: 'banner',
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
                container: document.getElementById("banner"),
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