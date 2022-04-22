<template>
  <div>
    <div class="section">
      <div class="container borx">
        <div class="container background">
          <div class="container none-s">
            <div class="container-1440">
              <div class="container-invite">
                <div class="invite-title">
                  {{ this.$t("a_m_invite_tit") }}
                </div>
                <div class="invite-table">
                  <div class="invite-table-title">
                    <div>{{ this.$t("a_invite_tb1") }}</div>
                    <div>{{ this.$t("a_invite_tb2") }}</div>
                  </div>
                  <div class="invite-table-text" v-for="(item, index) of storeInviteList" :key="index">
                    <!--<div v-for="(item, index) of storeInviteList" :key="index">
                      {{ index + 1 > 9 ? index + 1 : "" + (index + 1) }}
                    </div>-->
                    <div>
                      <div class="invite-table-text-s">
                        {{ index + 1 > 9 ? index + 1 : "" + (index + 1) }}
                      </div>
                      <div class="invite-table-text-s">
                        {{ item }}
                      </div>
                    </div>
                    <div class="invite-table-s"></div>
                  </div>
                  <div class="invite-rules">
                    <div class="invite-rules-title">{{this.$t('a_rules_title')}}</div>
                    <div class="invite-rules-text">
                      <div>{{this.$t('a_rules_text1')}}</div>
                      <div>{{this.$t('a_rules_text2')}}</div>
                      <div>{{this.$t('a_rules_text3')}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container borx none">
        <div class="container">
          <div class="container-1440">
            <div class="container-invite">
              <div class="invite-title">
                {{ this.$t("a_m_invite_tit") }}
              </div>
              <div class="invite-table">
                <div class="invite-table-title">
                  <div>{{ this.$t("a_invite_tb1") }}</div>
                  <div>{{ this.$t("a_invite_tb2") }}</div>
                </div>
                <div class="invite-table-text" v-for="(item, index) of storeInviteList" :key="index">
                  <!--<div v-for="(item, index) of storeInviteList" :key="index">
                    {{ index + 1 > 9 ? index + 1 : "" + (index + 1) }}
                  </div>-->
                  <div>
                    <div class="invite-table-text-s">
                      {{ index + 1 > 9 ? index + 1 : "" + (index + 1) }}
                    </div>
                    <div class="invite-table-text-s">
                      {{ item }}
                    </div>
                  </div>
                  <div class="invite-table-s"></div>
                </div>
                <div class="invite-rules">
                  <div class="invite-rules-title">Invitation Rules</div>
                  <div class="invite-rules-text">
                    <div>1. The presale and airdrop invitations for this event can take effect at the same time</div>
                    <div>2. Invitation allows more people to participate in the construction of the Bdoge ecosystem, while expanding the marketing team</div>
                    <div>3. Each address can invite up to 99 users</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-1440" style="height: auto;">
			  <div class="hero-wrap">
          <a href="#ecosystem" class="hero__scrollbtn w-inline-block">
            <img src="@/assets/hero-scroll-shape.png" loading="eager" alt="" class="hero__scrollbtn--img"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { abiObject, getAbi, web3 } from "utils/common";
const { contractObject: PerSaleObj } = getAbi(abiObject.PerSaleAbi);
export default {
  data() {
    return {
      // 默认地址
      initalAddress: "",
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
      p_titcom_li_left: this.$t("p_titcom_li_left"),
      p_titcom_li_right: this.$t("p_titcom_li_right"),
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
    ]),
    async getairdropStatus() {
				if (this.deadline < new Date().getTime()) {
					//如果结束时间小于现在
					this.airdropStatus1 = true;
					// this.airdropStatus1 = false ;
				}else{
					//如果结束时间大于于现在
					this.airdropStatus1 = false ;
					// this.airdropStatus1 = true;
				}
		},
  },

  components: {
  },
  created() {
    this.titcom();
    this.invitePayCount();
    this.invitePayCount();
    this.updateInvitationLink(this.address);
    this.getIsAirdrops();
	this.getairdropStatus();
  },
  mounted() {},
  methods: {
    ...mapMutations(["updateInvitationLink"]),
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
    airdropStatus() {
			if (this.deadline < new Date().getTime()) {
				return false
			}
			return true
		},
    // getAddress() {
    //   let address = sessionStorage.getItem("accountAddress");
    //   let location = window.location.host;
    //   if (!address || address === "") {
    //     return;
    //   } else {
    //     this.invitationLink = `https://${location}/#/presale?address=${address}&isInvited=${Number(
    //       JSON.parse(this.isInvited)[1]
    //     )}`;
    //   }
    // },
    // 支付好友总数
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

    finish() {
      alert(this.$t("over"));
    },
    // 地址复制
    onCopy(e) {
      // alert(e.text);
      this.$message.success(this.$t("copySuccess"));
    },
    // 最新参与预售随机
    titcom() {
      var items = this.raisedList;
      var items = items[Math.floor(Math.random() * items.length)]
      const random = Math.random().toString(36).substr(2, 4);
      this.p_titcom_li_left = items.address;
      const random1 = Math.random() * 1.5;
      this.p_titcom_li_right =
      this.$t("p_titcom_li_right") + random1.toFixed(1);
      //console.log("数据");
    },
  },
};
</script>

<style scoped lang="less">
  @import "../../../styles/shiba-ui";
  @import "./airdrops.less";
</style>
