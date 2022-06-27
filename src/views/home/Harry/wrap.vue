<template>
  <div>
    <div class="section__hero section__hero-s wf-section">
      <bannerLogo></bannerLogo>
      <div class="container-1440">
        <div class="hero-wrap">
          <div class="hero-left-wrap">
            <div class="h1" >
              {{ this.$t("index_text1") }}
            </div>
            <div class="h1 font-s">
              {{ this.$t("index_text1s") }}
            </div>
            <p class="p hero">
              {{ this.$t("index_text2") }}
            </p>
            <div class="container-button">
              <button class="cta-btn button-a" @click="jump('/presale')">
                {{this.$t('presale')}}
              </button>
              <button class="cta-btn button-b " @click="jump('/airdrop')">
                {{this.$t('airdrop')}}
              </button>
            </div>
            <div class="coye">
              <!-- 电脑端 -->
              <div class="coye-l p">
                {{this.$t("index_adress")}}
              </div>
              <div class="coye-r cta-btn p" v-clipboard:copy="address" v-clipboard:success="onCopy">
                {{this.$t("index_cta_btn5")}}
              </div>
              <!-- 移动端 -->
              <div class="coye-l m">
                {{this.$t("index_adress").slice(0,6)}}......{{this.$t("index_adress").substring(this.$t("index_adress").length-11)}}
                <div class="coye-r-btn" v-clipboard:copy="address" v-clipboard:success="onCopy">
                  <img src="../../../assets/token.png">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="particles-js" class="particle-class"></div>
    </div>
    <div class="container-1440" style="height: auto;">
      <div class="hero-wrap">
        <a href="#ecosystem" class="hero__scrollbtn w-inline-block">
          <img src="@/assets/hero-scroll-shape.png" loading="eager" alt="" class="hero__scrollbtn--img"/>
        </a>
      </div>
    </div>
    <bdoge></bdoge>
  </div>
</template>
<script>
import footerCmp from "../footer/footerCmp.vue";
import bdoge from "./bdoge.vue";
import bannerLogo from "../components/banner.vue";
export default {
  data() {
    return {
      address: this.$t("index_adress"),
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
    bannerLogo
  },
  created() {},
  mounted() {
    let i = inst("canvas_banner");
  },
  methods: {
      // 地址复制
			onCopy(e) {
				// alert(e.text);
				this.$message.success(this.$t("index_cta_m"));
			},
      // 跳转
      jump(e){
        this.$router.push({
          path: e,
          title: this.$t("home"),
          query: {},
        });
      }
  },
};
</script>

<style scoped lang="less">
@import "../../../styles/shiba-ui";
@import "../../../../public/css/index.css";
@import "../../../../public/css/animate.min.css";
@import "./wrap.less";
</style>
