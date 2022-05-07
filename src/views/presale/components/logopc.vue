<template>
    <div id="pc-lottie"></div>
</template>

<script>
import lottie from "lottie-web";
  import animationData from '@/assets/logo.json';

  export default {
    name: 'logopc',
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
                container: document.getElementById("pc-lottie"),
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