<template>
    <div id="car1"></div>
</template>

<script>
import lottie from "lottie-web";
  import animationData from '@/assets/homeCar1.json';

  export default {
    name: 'car1',
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
                container: document.getElementById("car1"),
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