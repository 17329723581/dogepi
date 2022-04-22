<template>
	<div>
		<div class="section">
			<div class="container-1440">
				<div class="htb-wrap">
					<div class="banner">
            <!-- 广告 -->
						<div class="advertisement">
                <!-- 父级元素 -->
                <div class="parent">
                    <!-- 子元素 -->
                    <div class="son">
                        <!-- 内容 -->
                        <div class="content">
                            <div class="title">
                                <!-- 标题父级元素 -->
                                <div class="title-parent">
                                    <span class="b">
                                      <div class="b-a">
                                        {{this.$t('advertisement')}}
                                      </div>
                                    </span>
                                    <span class="c">
                                      <div class="c-a">
                                        {{this.$t('advertisement1')}}
                                      </div>
                                    </span>
                                </div>
                                <!-- 标题子元素 -->
                                <div class="title-son">
                                    <div class="left">
                                        <div class="circular-a"></div>
                                        <div class="circular-b"></div>
                                        <div class="circular-c"></div>
                                    </div>
                                    <div class="right">
                                        <div class="circular-a"></div>
                                        <div class="circular-b"></div>
                                        <div class="circular-c"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- LOGO -->
                            <div class="logo">
                                <img src="@/assets/c1.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { abiObject, getAbi } from "utils/common";
const { contractObject: PerSaleObj } = getAbi(abiObject.PerSaleAbi);
export default {
  data() {
    return {
      // 默认地址
      initalAddress: "",
	    airdropQuantityProp:0,
      raisedList: [
        { address: "0x3A2d...", num: "1" },
        { address: "0x8a6F...", num: "2" },
        { address: "0x385f...", num: "3" },
        { address: "0x724e...", num: "4" },
        { address: "0x1284...", num: "5" },
        { address: "0x695a...", num: "6" },
        { address: "0x352a...", num: "7" },
        { address: "0x9e7f...", num: "8" },
        { address: "0x4252...", num: "9" },
        { address: "0x3746...", num: "10" },
        { address: "0x774a...", num: "11" },
        { address: "0xe226...", num: "12" },
      ],
      payCount: 0,
      airdropStatus1: false,
      totaltoken: 0,
      rewardsCount: 0,
      receive_status: false,
      receive_title: this.$t("a_time_btn1"),
      a_titcom_li_left: this.$t("a_titcom_li_left"),
      a_titcom_li_right: this.$t("a_titcom_li_right") + " 0.1 BNB",
    };
  },
  props: {
     isLogin: {
      type: Boolean,
    },
    airdropQuantity: {
      type: Number,
    },
    InviteList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  watch: {
	
    address: {},
  },
  computed: {
    ...mapState([
      "address",
      "isInvited",
      "storeMyTotalspacepi",
      "storeInviteList",
      "deadline",
      "storeSwapRatio",
      "tokenDecimals",
      "storeInviteLink",
      "storeInviteRewards",
	  "lang"
    ]),

    invite() {
      const isInvited = sessionStorage.getItem("isRoueInvited");

      if (isInvited !== "undefined") {
        return isInvited;
      } else {
        return this.initalAddress;
      }
    },
  },

  components: {},
  created() {
    this.getOwner();
    this.getRouteInvited();
	  this.getAirdropInfo();

    this.titcom();
    this.invitePayCount();
    this.invitePayCount();
    this.updateInvitationLink(this.address);
    this.getIsAirdrops();
	  this.getairdropStatus();
  },
  mounted() {},
  methods: {
    ...mapMutations(["editAddress","updateIsInvited","updateInvitationLink","updateMyspacepi", "updateInviteList"]),
    ...mapActions(["getInvited","myInvites"]),
    finish() {
      alert(this.$t("over"));
    },
    async getairdropStatus() {
      if (this.deadline <= new Date().getTime()) {
        //如果结束时间小于现在
        this.airdropStatus1 = true;
        // this.airdropStatus1 = false ;
      } else {
        //如果结束时间大于于现在
        this.airdropStatus1 = false;
        // this.airdropStatus1 = true;
      }
    },
    async invitePayCount() {
      try {
        let payCount = 0;
        let totaltoken = new this.$BigNumber(0);
        for (let i = 0; i < this.storeInviteList.length; i++) {
          const userLockList = await PerSaleObj.methods
            .getUserLock(this.storeInviteList[i])
            .call();
          // userLockList[0]>0?totaltoken+=Number(userLockList[0]): ''
          // userLockList[0]>0?payCount+=1:''
          if (Number(userLockList[0]) > 0) {
            // const bgTotaltoken = Number(userLockList[0]);
            totaltoken = totaltoken.plus(new this.$BigNumber(userLockList[0]));
            payCount += 1;
          }
        }
        const invitePercentage = await PerSaleObj.methods
          .invitePercentage()
          .call();
        // //console.log(invitePercentage)

        this.payCount = payCount;

        // const asd = new this.$BigNumber(123)/new this.$BigNumber(this.storeSwapRatio)
        // //console.log(asd.toFixed(9))

        const storeSwapRatio = new this.$BigNumber(this.storeSwapRatio);
        const tokenDecimals = 10 ** this.tokenDecimals;
        //console.log(tokenDecimals)
        this.totaltoken = totaltoken
          .dividedBy(storeSwapRatio)
          .dividedBy(new this.$BigNumber(tokenDecimals))
          .toFixed(4);

        // this.rewardsCount = new this.$BigNumber(5000).multipliedBy(new this.$BigNumber(invitePercentage)).dividedBy(new this.$BigNumber(100))
        // this.tokenDecimals

        const rewardsCount = new this.$BigNumber(Number(this.totaltoken))
          .multipliedBy(new this.$BigNumber(invitePercentage))
          .dividedBy(new this.$BigNumber(100))
          .toString();

        // //console.log( web3.utils.fromWei(rewardsCount.toString()),'rewardsCount')
        this.rewardsCount = rewardsCount;
      } catch (error) {
        //console.log(error);
      }
    },
    async getIsAirdrops() {
      const airdropStatus = await PerSaleObj.methods
        .getIsAirdrop(this.address)
        .call();
      this.airdropStatus = airdropStatus;
      console.log('airdropStatus',airdropStatus);
    },
    async getAirdrop() {
      await PerSaleObj.methods.airdrop().send({
        from: this.address,
        value: web3.utils.toWei("0.0025"),
      });
      this.$notification.open({
        message: "succeed",
        description: this.$t("receiveAirdropSuccess"),
      });
    },
    // 地址复制
    onCopy(e) {
      // alert(e.text);
      this.$message.success(this.$t("copySuccess"));
    },
    titcom() {
      var items = this.raisedList;
      var items = items[Math.floor(Math.random() * items.length)]
          const random = Math.random().toString(36).substr(2, 4);
      this.a_titcom_li_left = items.address;
      const random1 = Math.random() * 1.5;
      this.a_titcom_li_right =
      this.$t("a_titcom_li_right") + random1.toFixed(1) + "BNB";
      ////console.log('数据',)
    },
    async getAirdropInfo() {
      const totalAirdrop = await PerSaleObj.methods.totalAirdrop().call()
      // this.airdropQuantity = Number(this.totalAirdrop / 10 ** this.tokenDecimals) - Number(this.airdropped / 10 ** this.tokenDecimals)
      const tokenDecimals = await PerSaleObj.methods.decimals().call()
      this.airdropQuantityProp = Number(totalAirdrop / 10 ** tokenDecimals)

      // this.myInvites(this.address)
    },
      // save route query address
    getRouteInvited() {
	
      const isRoueInvited = sessionStorage.getItem("isRoueInvited");
      if (isRoueInvited === "undefined" || !isRoueInvited) {
        sessionStorage.setItem("isRoueInvited", this.$route.query.address);
      } else {
        sessionStorage.getItem("isRoueInvited");
      }
    },
    // 登录
    connect() {
      // this.login();
      // eth_requestAccounts  链接钱包
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then(async (accounts) => {
          // add address for store
          this.editAddress( accounts[0])
          // 获取邀请人
          const isInvited = await PerSaleObj.methods.isInvited(accounts[0]).call()
          // Action function
          this.updateIsInvited(isInvited)
          sessionStorage.setItem("isInvited",JSON.stringify(isInvited))
          
          this.$message.success(this.$t('connectSuccess'));
          if(!JSON.parse(this.isInvited)[1]){
            this.bondInvite()
          }
          // history.go(0);
        })
        .catch((err) => {
          // errorHandler(err);
          //console.log(err);
        });

      // Vue.prototype.LangReload()
    },

    bondInvite() {
      // //console.log(this.invite);
      const nowTime = new Date().getTime();

      if(nowTime>this.deadline){return}
      const h = this.$createElement;
      const invite = this.invite;
      const that = this;
      if (JSON.parse(this.isInvited)[1]) {
      } else {
        this.$info({
          title: this.$t("comfirmInvite"),
          content: h("div", {}, [h("p", `${this.$t("inviter")}：${invite}`)]),
          async onOk(e) {
            if (that.invite === that.address) {
              that.$notification.open({
                message: "warning",
                description: this.$t("inviterNotSelf"),
              });
              return;
            }
            //console.log(that.invite, "invite");
            await PerSaleObj.methods
              .bondInvite(that.invite)
              .send({ from: that.address });
            that.getInvited(that.address);
            // that.confirmLoading = true;
          },
        });
      }
    },
    async getOwner() {
      const initalAddress = await PerSaleObj.methods.owner().call();
      // //console.log(initalAddress)
      this.initalAddress = initalAddress;
    },
  },
};
</script>

<style scoped lang="less">
	@import "../../../styles/shiba-ui";
	@import "../../presale/components/presaleOne.less";
	@import "../../presale/components/presaleOneSlyte.less";
	@import "../../presale/components/presaleTwo.less";
	@import "./banner.less";
</style>
