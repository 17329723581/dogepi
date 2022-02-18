<template>
    <div id="m-lottie"></div>
</template>

<script>
import lottie from "lottie-web";
  import animationData from '@/assets/data_loop.json';

  export default {
    name: 'logo',
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
                container: document.getElementById("m-lottie"),
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