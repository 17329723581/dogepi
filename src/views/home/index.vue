<template>
  <div class="home">
    <div class="po-s"></div>
    <div class="apo">
      <div class="bg-moon"></div>
      <div class="header-background">
        <!-- 导航 -->
        <div class="section__hero section__hero-s wf-section">
          <div class="container-1440">
            <header-cmp></header-cmp>
          </div>
        </div>
      </div>
      <wrap></wrap>
    </div>
  </div>
</template>

<script>
import headerCmp from "./components/headerCmp.vue";
import wrap from "./Harry/wrap.vue";
import footerCmp from "./footer/footerCmp.vue";
export default {
  data() {
    return {};
  },
  props: {},
  computed: {},
  watch: {},
  components: {
    headerCmp,
    wrap,
    footerCmp,
  },
  created() {},
  mounted() {
    init();
  },
  methods: {},
};
</script>

<style scoped lang="less">
@import "./index";
@import "../../styles/shiba-ui";
.bg {
  position: relative;
}
#canvas {
  position: absolute;
  widows: 100%;
  height: 100%;
  z-index: 0;
}

@media (max-width: 768px) {
  .home{
    
    .po-s{
      @media (min-width: 360px) {
        height: 220vw;//200vw
      }
      @media (min-width: 375px) {
        height: 220vw;//200vw
      }
      @media (min-width: 768px) {
        height: 220vw;//200vw
      }
      background: linear-gradient(180deg, #3a447f 0%, #773785 47%, #35457e 100%);
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
      position: relative;
      z-index: 2;
      display: flex;
    }
    .apo{
      position: absolute;
      width: 100%;
      top: 0;
    }
  }
}

</style>