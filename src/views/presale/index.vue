<template>
  <div class="presale bg">
    <div class="po-s"></div>
    <div class="apo">
      <!--<canvas id="presale_canvas"></canvas>-->
      <div class="bg-moon"></div>
      <div class="header-background">
        <!-- 导航 -->
        <div class="section__hero section__hero-s wf-section">
          <div class="container-1440">
            <header-cmp></header-cmp>
          </div>
        </div>
      </div>
      <div class="header">
        <!-- 如果未结束 -->
        <!--<presaleOne @on_state="get_state" v-if="time_end_state == 0"></presaleOne>-->
        <div class="pc">
          <presaleOne @on_state="get_state" v-if="time_end_state == 0"></presaleOne>
        </div>
        <div class="mobile">
          <presaleOnem @on_state="get_state" v-if="time_end_state == 0"></presaleOnem>
        </div>
        <!-- 否则 -->
        <presaleTwo v-if="time_end_state == 1"></presaleTwo>
      </div>
      <bdoge class="p-top"></bdoge>
    </div>
  </div>
</template>

<script>
import presaleOne from "@/views/presale/start/pc/index.vue";//PC端开始页面
import presaleOnem from "@/views/presale/start/mobile/index.vue";//移动端开始页面
import presaleTwo from "@/views/presale/components/presaleTwo.vue";
import headerCmp from "../home/components/headerCmp.vue";
import footerCmp from "../home/footer/footerCmp.vue";
import bdoge from "../home/Harry/bdoge.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      ruleList: [
        { text: this.$t("p_rules1") },
        { text: this.$t("p_rules2") },
        { text: this.$t("p_rules3") },
      ],
      userLock: 0,
      time_end_state: 0,
    };
  },
  props: {},
  computed: {
    ...mapState([
      "address",
      "isInvited",
      "tokenDecimals",
      "balanceof",
      "storeSwapRatio",
      "deadline",
    ]),
  },
  watch: {},
  components: {
    headerCmp,
    footerCmp,
    presaleOne,
    presaleOnem,
    presaleTwo,
    bdoge,
  },
  created() {
    let _that = this;
    const nowTime = new Date().getTime();
    if (nowTime >= this.deadline) {
      _that.time_end_state = 1;
    } else {
      _that.time_end_state = 0;
    }
  },

  mounted() {
    // let _that = this;
    // // init("presale_canvas");
    // const nowTime = new Date().getTime();
    // //console.log("deadline",this.deadline)
    // if (nowTime >= this.deadline) {
    //   _that.time_end_state = 1;
    // } else {
    //   _that.time_end_state = 0;
    // }
  },
  methods: {
    // 回调我的预售
    handleUserLock(userLock) {
      this.userLock = userLock;
    },
    get_state(val) {
      console.log(val);
      this.time_end_state = 1;
    },
  },
};
</script>

<style scoped lang="less">
@import "../../styles/shiba-ui";
@import "./index";
#presale_canvas {
  position: fixed;
  widows: 100%;
  height: 100%;
  z-index: 0;
}
.pc{
  display: block;
}
.mobile{
  display: none;
}
@media (max-width: 768px) {
  .pc{
    display: none;
  }
  .mobile{
    display: block;
  }
  .presale{

    .po-s {
      @media (min-width: 280px) {
        height: 900px;
      }
      @media (min-width: 360px) {
        height: 980px;
      }
      @media (min-width: 375px) {
        height: 1000px;
      }
      @media (min-width: 412px) {
        height: 1050px;
      }
      @media (min-width: 414px) {
        height: 1250px;
      }
      @media (min-width: 540px) {
        height: 1600px;
      }
      @media (min-width: 768px) {
        height: 1600px;
      }
      background: linear-gradient(180deg, #3a447f 0%, #773785 47%, #2d0158 100%);
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
      //background: #2C0058;

    }
    .p-top{
      margin-top:-150px;
    }
  }
}
</style>
