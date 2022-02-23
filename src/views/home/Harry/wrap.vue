<template>
  <div>
    <div class="section__hero section__hero-s wf-section">
      <div class="container-1440">
        <div class="hero-wrap">
          <div class="hero-left-wrap">
            <h1 class="h1">
              A Decentralized Meme Token that Evolved into a Vibrant Ecosystem
            </h1>
            <p class="p hero">
              SHIB, LEASH, BONE — ShibaSwap — Innovative Reward System — The
              Shiba Incubator — And more. 585k+ Community Members and Growing
              Fast!
            </p>
            <div class="hero-btn-wrap">
              <a href="#how-to-buy" class="cta-btn r-pad hero-m w-inline-block">
                <div class="cta-btn__txt">How to Buy</div>
                <div class="cta-btn__bg"></div>
              </a>
              <a
                href="https://github.com/shytoshikusama/woofwoofpaper/raw/main/SHIBA_INU_WOOF_WOOF.pdf"
                target="_blank"
                class="cta-btn-transparent hero w-inline-block"
              >
                <div class="cta-btn__txt">Read WoofPaper v2</div>
                <div class="cta-btn-transparent__gradhide"></div>
                <div class="cta-btn-transparent__gradhide-red"></div>
                <div class="cta-btn-transparent__animbox"></div>
              </a>
            </div>
          </div>
          <div class="hero-right-wrap">
            <img
              src="@/assets/hero-shib.png"
              loading="eager"
              alt=""
              class="hero--art"
            /><img
              src="@/assets/moon.svg"
              loading="eager"
              alt=""
              class="hero--moon"
            />
          </div>
          <a href="#ecosystem" class="hero__scrollbtn w-inline-block"
            ><img
              src="@/assets/hero-scroll-shape.svg"
              loading="eager"
              alt=""
              class="hero__scrollbtn--img"/><img
              src="@/assets/hero-scroll-arr.svg"
              loading="eager"
              alt=""
              class="hero__scrollbtn--arrow"/></a
          ><img
            src="@/assets/bg-glow.svg"
            loading="eager"
            style="opacity:0"
            alt=""
            class="hero-bg-glow"
          />
        </div>
      </div>
      <div id="particles-js" class="particle-class"></div>
    </div>
    <div class="section__hero wf-section">
      <div
        class="hover-div"
        style="position: absolute;z-index:9"
        onmousemove="color_hover(event)"
      ></div>
      <canvas
        class="banner_canvas"
        id="canvas_banner"
        style="position: absolute;z-index:9"
      ></canvas>
      <div class="box box1" style="position: absolute;">
        <img class="bg-loading" src="@/assets/loading.png" />
        <img class="bg-skp" src="@/assets/skp.png" />
        <div style="text-align:center;color: aliceblue;">
          <div class="p1 nodely animate__animated animate__backInUp">
            {{ this.$t("index_text1") }}
          </div>
          <div class="p2 dely_1 animate__animated animate__backInUp">
            {{ this.$t("index_text2") }}
          </div>
        </div>
      </div>

      <div class="container-1440">
        <div class="hero-wrap">
          <div class="hero-left-wrap"></div>
        </div>
      </div>
      <div id="particles-js" class="particle-class"></div>
    </div>
    <bdoge></bdoge>
    <footer-cmp></footer-cmp>
  </div>
</template>
<script>
import footerCmp from "../footer/footerCmp.vue";
import bdoge from "./bdoge.vue";
export default {
  data() {
    return {
      airlist: [
        {
          img: "http://pcoindex.oss/images/art1.png",
        },
        {
          img: "http://pcoindex.oss/images/art2.png",
        },
        {
          img: "http://pcoindex.oss/images/art3.jpg",
        },
        {
          img: "http://pcoindex.oss/images/art4.png",
        },
        {
          img: "http://pcoindex.oss/images/art5.jpg",
        },
        {
          img: "http://pcoindex.oss/images/art6.png",
        },
        {
          img: "http://pcoindex.oss/images/art7.png",
        },
        {
          img: "http://pcoindex.oss/images/art8.png",
        },
        {
          img: "http://pcoindex.oss/images/art9.png",
        },
      ],
    };
  },
  props: {},
  computed: {},
  watch: {},
  components: {
    footerCmp,
    bdoge,
  },
  created() {},
  mounted() {
    let i = inst("canvas_banner");
  },
  methods: {},
};
</script>

<style scoped lang="less">
@import "../../../styles/shiba-ui";
@import "../../../../public/css/index.css";
@import "../../../../public/css/animate.min.css";

p {
  max-width: 550px;
  font-family: Khula, sans-serif;
  color: #bbbbbe;
  font-size: 18px;
  line-height: 32px;
}
.art_p {
  max-width: 1440px;
  font-family: Khula, sans-serif;
  color: #bbbbbe;
  font-size: 18px;
  line-height: 32px;
}
.section__hero {
  height: 50vw;
}
.bg-loading {
  width: 50vw;
}
.bg-skp {
  width: 50vw;
}
.box1 .p1 {
  font-size: 3.5vw;
}
.box1 .p2 {
  font-size: 2vw;
}
.section__hero-s{
  height: auto;
}
@media (max-width: 768px) {
  .section__hero {
    height: auto;
  }
  .bg-loading {
    width: 100vw;
  }
  .bg-skp {
    width: 80vw;
  }
  .box1 .p1 {
    font-size: 4.5vw;
  }
  .box1 .p2 {
    font-size: 3.5vw;
  }
}
</style>
<style>
body,
html {
  max-width: 100% !important;
  overflow-x: hidden !important;
}

::-moz-selection {
  color: #fff;
  background: #f06500;
}

::selection {
  color: #fff;
  background: #f06500;
}

@media (min-width: 992px) AND (max-width: 1340px) {
  .hero--art {
    width: 350px;
  }

  .hero--moon {
    width: 518px;
  }
}

@media (min-width: 992px) AND (max-width: 1400px) {
  .nav-link.more {
    display: none;
  }

  .nav-drop.more {
    display: block;
  }
}

@media (min-width: 992px) AND (max-width: 1250px) {
  .nav-link.ss {
    display: none;
  }

  .nav-drop-link.ss {
    display: block;
  }
}

@media (min-width: 992px) AND (max-width: 1200px) {
  .coin-grid {
    grid-column-gap: 32px;
    grid-row-gap: 32px;
  }

  .coin-box-content {
    padding-top: 40px;
    padding-right: 40px;
    padding-bottom: 48px;
    padding-left: 40px;
  }

  .coin-box--coin {
    height: 100px;
  }

  .coin-box-top {
    height: 200px;
  }
}

.brand-url--logo,
.coin-box--coin,
.coin-box-elip-bg,
.coin-box-graph--ico,
.coin1-shad,
.cta-btn--ico,
.eco-cta--ico,
.eco-cta--ico-hover,
.hero--moon,
.hero-bg-glow,
.hero__scrollbtn--arrow,
.hero__scrollbtn--img,
.meat,
.scrol-up-cta--ico,
.ss--img-glow {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.arr-up-trigger,
.brand-url--logo,
.cta-btn--ico,
.eco-cta--ico,
.eco-cta--ico-hover,
.hero--moon,
.hero-bg-glow,
.hero__scrollbtn--arrow,
.hero__scrollbtn--img,
.meat {
  pointer-events: none;
}

#modal::-webkit-scrollbar {
  width: 10px;
  border-radius: 16px;
  background-color: transparent;
}

#modal::-webkit-scrollbar-thumb {
  background-color: #2b2a36;
  border-radius: 16px;
}

html.wf-loading * {
  opacity: 0;
}
</style>
