<template>
  <div class="presale bg">
    <canvas id="presale_canvas"></canvas>
    <div class="bg-moon"></div>
    <div class="header-background">
      <!-- 导航 -->
      <div class="header container">
        <headerCmp></headerCmp>
      </div>
    </div>
    <div class="header container">
      <!-- 如果未结束 -->
      <presaleOne @on_state="get_state" v-if="time_end_state == 0"></presaleOne>
      <!-- 否则 -->

      <presaleTwo v-if="time_end_state == 1"></presaleTwo>
    </div>
    <!-- 购买代币 -->
    <!--div class="buyToken container">
      <buy-token :userLock="userLock"></buy-token>
      <rules :ruleList="ruleList"></rules>
      <get-pi></get-pi>
	  
      <mydata @handleUserLock="handleUserLock"></mydata>
	  <locked-mining></locked-mining>
    </div-->
    <locked-mining></locked-mining>
    <presale-com></presale-com>
    <!-- 对比 -->
    <!-- <vs-other></vs-other> -->
    <div class="container">
      <roadmap></roadmap>
      <tokenomics></tokenomics>
    </div>
    <answers></answers>
    <div class="footer">
      <!-- <links></links> -->
      <footer-cmp></footer-cmp>
    </div>
  </div>
</template>

<script>
import presaleOne from "@/views/presale/components/presaleOne.vue";
import presaleTwo from "@/views/presale/components/presaleTwo.vue";
import headerCmp from "../home/components/headerCmp.vue";
import presale from "./components/presale.vue";
import presaleEnd from "./components/presaleEnd.vue";

import buyToken from "./components/buyToken.vue";
import rules from "@/components/rules.vue";
import getPi from "./components/getPi.vue";

import mydata from "./components/mydata.vue";
import vsOther from "../home/components/vsOther.vue";
import roadmap from "../home/roadmap/roadmap.vue";
import links from "./components/links.vue";
import footerCmp from "../home/footer/footerCmp.vue";
import lockedMining from "../home/components/lockedMining.vue";
import answers from "../home/answers/answers.vue";
import tokenomics from "../home/tokenomics/tokenomics.vue";
import banner from "../airdrop/components/banner.vue";
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
    presale,
    presaleEnd,
    buyToken,
    rules,
    getPi,
    mydata,
    tokenomics,
    answers,
    vsOther,
    roadmap,
    footerCmp,
    links,
    lockedMining,
    banner,
    presaleOne,
    presaleTwo,
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
    let _that = this;
    init("presale_canvas");
    const nowTime = new Date().getTime();
    //console.log("deadline",this.deadline)
    if (nowTime >= this.deadline) {
      _that.time_end_state = 1;
    } else {
      _that.time_end_state = 0;
    }
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
@import "./index";
#presale_canvas {
  position: fixed;
  widows: 100%;
  height: 100%;
  z-index: 0;
}
@media screen and (min-width: 768px) {
  .header-background {
    background: rgba(33, 21, 59, 0.8);
  }

  .bg {
    background: url("../../assets/bgimg.png");
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .barnner {
    margin-top: 10%;
    margin-bottom: 10%;
  }
}

@media screen and (max-width: 768px) {
  .bg {
    background: url("../../assets/bgimg.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .barnner {
    margin-top: -10%;
    margin-bottom: 0%;
  }
}
</style>
