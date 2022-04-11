<template>
  <div class="airdrop">
    <div class="po-s"></div>
	<div class="apo">
		<div class="header-background">
		<!-- 导航 -->
		<div class="section__hero section__hero-s wf-section">
			<div class="container-1440">
			<header-cmp></header-cmp>
			</div>
		</div>
		</div>
		<airdroptop></airdroptop>
		<a>
		<banner class="barnner"></banner>
		</a>
		<amount></amount>
		<airdrops></airdrops>
		<bdoge class="a-pot"></bdoge>
	</div>
    
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import bdoge from "../home/Harry/bdoge.vue";
import headerCmp from "../home/components/headerCmp.vue";
import airdroptop from "./components/airdroptop.vue";
import amount from "./components/amount.vue";
import linkc from "./components/linkc.vue";
import footerCmp from "../home/footer/footerCmp.vue";
import banner from "./components/banner.vue";
import airdrops from "./components/airdrops.vue";
import { abiObject, getAbi, web3 } from "utils/common";
const { contractObject: PerSaleObj } = getAbi(abiObject.PerSaleAbi);

export default {
  data() {
    return {
      accountAddress: this.$store.state.address || "",
      isLogin: false,
      totalAirdrop: 0,
      airdropped: 0,
      // 空投数量
      airdropQuantity: 0,
      rate_state: 0,
    };
  },
  props: {},
  computed: {
    ...mapState(["address", "tokenDecimals", "isInvited"]),
  },
  watch: {
    tokenDecimals: {
      handler(newVal, oldVal) {
        newVal && this.getAirdropInfo();
      },
      immediate: true,
    },
    address: {
      handler(newVal, oldVal) {
        if (newVal !== "") {
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      },
      immediate: true,
    },
  },
  components: {
    headerCmp,
    banner,
    airdroptop,
    amount,
    linkc,
    footerCmp,
    airdrops,
    bdoge,
  },
  created() {},
  mounted() {
    init("airdrop");
  },
  methods: {
    ...mapMutations(["updateMyspacepi", "updateInviteList"]),
    async getAirdropInfo() {
      this.totalAirdrop = await PerSaleObj.methods.totalAirdrop().call();
      this.airdropped = await PerSaleObj.methods.airdropped().call();
      // this.airdropQuantity = Number(this.totalAirdrop / 10 ** this.tokenDecimals) - Number(this.airdropped / 10 ** this.tokenDecimals)
      this.airdropQuantity = Number(
        this.totalAirdrop / 10 ** this.tokenDecimals
      );
      //console.log(this.airdropQuantity)
      // this.myInvites(this.address)
    },
    get_state(val) {
      $router.push("/presale");
      this.rate_state = 1;
    },
    // async myInvites(params) {
    //   const perInviteAirdropAmount = await PerSaleObj.methods.perInviteAirdropAmount().call()
    //   this.perInviteAmount = perInviteAirdropAmount / 10 ** this.tokenDecimals
    //   const inviteList = await PerSaleObj.methods.getInvitee(params).call()
    //   // //console.log(inviteList);
    //   this.updateInviteList(inviteList)
    //   // 我的邀请
    //   this.myInviteCount = inviteList
    //   // 我的spacepi
    //   this.myspacepi = (inviteList.length+1)*this.perInviteAmount
    //   this.updateMyspacepi(this.myspacepi)
    //   // 邀请奖励
    //   this.InviteRewards = this.myspacepi - this.perInviteAmount

    // },
    // getAddress(params) {
    //   let location = window.location.host;
    //     this.invitationLink = `https://${location}/#/presale?address=${params}&isInvited=${Number(JSON.parse(this.isInvited)[1])}`;
    //     this.viewLink =
    //       this.invitationLink.slice(0, 15) +
    //       " .... " +
    //       this.invitationLink.slice(68);
    // },
  },
};
</script>

<style scoped lang="less">
@import "../../styles/shiba-ui";
@import "./index";
@media (max-width: 768px) {
  .airdrop {
    .po {
      position: initial;
    }
    .po-s {
      @media (max-width: 550px) {
        height: 1300px;
      }
      @media (min-width: 540px) {
        height: 2000px;
      }
      @media (min-width: 760px) {
        height: 2000px;
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
		//background: #2C0058;
		z-index: 9;
		
	}
	.a-pot{
		margin-top:-150px ;
	}
  }
}
</style>
