<template>
  <div>
    <div class="section">
      <div class="container">
        <div class="container-1440">
          <div class="htb-wrap">
            <div class="car1">
              <div class="car1-airdrop-a mo">
                <div class="car1-title">
                  <img src="@/assets/airdrop-m-title.png">
                  {{ this.$t('a_quantity_title') }}
                </div>
              </div>
              <div class="car1-airdrop-b">{{ airdropQuantityProp }}</div>
              <div class="car1-airdrop-c">{{ this.$t("a_time_msg1") }}</div>
            </div>
            <!-- 链接和复制 -->
            <div class="like-container">
              <div class="like">
                <span class="url">
                  {{ storeInviteLink[0] }}
                </span>
                <div class="button">
                  <button v-if="isInvited[1] == true" v-clipboard:copy="storeInviteLink[0]"
                    v-clipboard:success="onCopy">
                    {{ this.$t("a_time_btn2") }}
                  </button>
                  <button v-if="isInvited ? isInvited[1] == false : true" style="background-color: rgb(128, 128, 128);">
                    {{ this.$t("a_time_btn2") }}
                  </button>
                </div>
              </div>
            </div>
            <!-- 说明 -->
            <div class="explain">
              <span>
                {{ this.$t("a_time_msg2") }}
              </span>
            </div>
            <div class="car3">
              <div class="car3-a yq">
                <div class="car3-a-s">
                  <div class="title">{{ this.$t("a_time_tb2") }}</div>
                  <div class="text">{{ payCount }}</div>
                </div>
              </div>
              <div class="car3-a yq">
                <div class="car3-a-s">
                  <div class="title">{{ this.$t("a_time_tb3") }}</div>
                  <div class="text">{{ totaltoken }}</div>
                </div>
              </div>
              <div class="car3-a yq">
                <div class="car3-a-s">
                  <div class="title">{{ this.$t("a_time_tb4") }}</div>
                  <div class="text">{{ rewardsCount }}</div>
                </div>
              </div>
              <div class="car3-a">
                <div class="car3-a-s">
                  <div class="title">{{ this.$t('a_top_amount_array')[0].title }}</div>
                  <div class="text">{{ storeMyTotalspacepi }}</div>
                </div>
              </div>
              <div class="car3-b">
                <div class="car3-b-s">
                  <div class="title">{{ this.$t('a_top_amount_array')[1].title }}</div>
                  <div class="text">{{ storeInviteList.length }}</div>
                </div>
              </div>
              <div class="car3-c">
                <div class="car3-c-s">
                  <div class="title">{{ this.$t('a_top_amount_array')[2].title }}</div>
                  <div class="text">{{ storeInviteRewards }}</div>
                </div>
              </div>
            </div>
            <!-- 领取空投按钮 -->
            <div class="receive-airdrop">
              <button
                v-if="storeInviteLink[0].split('?')[1].split('&')[0].split('=')[1] != '' && airdropStatus == true && isInvited[1] == true && airdropStatus1 == true"
                style="background:#808080">{{ this.$t("ye_get6") }}</button>
              <button
                v-if="storeInviteLink[0].split('?')[1].split('&')[0].split('=')[1] != '' && airdropStatus == false && isInvited[1] == true && airdropStatus1 == true"
                @click="getAirdrop">{{ this.$t("ye_get5") }}</button>
              <button
                v-if="storeInviteLink[0].split('?')[1].split('&')[0].split('=')[1] != '' && airdropStatus == false && isInvited[1] == false && airdropStatus1 == true"
                style="background:#808080"> {{ this.$t("ye_get8") }}</button>
            </div>
            <div class="car4">
              <div class="car4-a">
                <img src="@/assets/i.png" class="pc"><img src="@/assets/m-i.png" class="mo">{{ this.$t("a_top_amount_c")
                }}
              </div>
            </div>
            <div class="car2">
              <div class="car1-rules-a">{{ this.$t('p_r_o_rules_title') }}</div>
              <div class="car1-rules-b">
                <div>{{ this.$t('p_r_o_rules_array')[0] }}</div>
                <div>{{ this.$t('p_r_o_rules_array')[1] }}</div>
                <div>{{ this.$t('p_r_o_rules_array')[2] }} </div>
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
const { contractObject: spacePiObj } = getAbi(abiObject.spacePiAbi);
export default {
  data() {
    return {
      // 默认地址
      initalAddress: "",
      airdropQuantityProp: 0,
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
      "lang",
      "storeInviteRewards"

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
    this.updateInvitationLink(this.address);
    this.getIsAirdrops();
    this.getairdropStatus();
  },
  mounted() { },
  methods: {
    ...mapMutations(["editAddress", "updateIsInvited", "updateInvitationLink", "updateMyspacepi", "updateInviteList"]),
    ...mapActions(["getInvited", "myInvites"]),
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
                let _that  = this ;
                let totaltoken = new this.$BigNumber(0);
                // const invitePercentage = await PerSaleObj.methods.invitePercentage().call();
                const Price = await PerSaleObj.methods.perHTPrice().call();
                const Pricenum = Number(Price).toFixed(0)/ 10 **  _that.tokenDecimals 
                let buybnbnum  = 0 ;
                for (let i = 0; i < this.storeInviteList.length; i++) {
                    const userLockList = await PerSaleObj.methods.getUserLock(this.storeInviteList[i]).call();
                    // userLockList[0]>0?totaltoken+=Number(userLockList[0]): ''
                    // userLockList[0]>0?payCount+=1:''
                    const userLockListnum =  Number(userLockList).toFixed(0);
                    const buynum = userLockListnum / 10 **  _that.tokenDecimals;
                    buybnbnum = buybnbnum + buynum /Pricenum;
                    payCount += 1;
                }
                this.payCount = payCount;

                // const asd = new this.$BigNumber(123)/new this.$BigNumber(this.storeSwapRatio)
                // //console.log(asd.toFixed(9))
                // const storeSwapRatio = new this.$BigNumber(this.storeSwapRatio);
                const tokenDecimals = buybnbnum;
                this.totaltoken = tokenDecimals;


                const rewardsCount = buybnbnum * 0.1;
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
      console.log('airdropStatus', airdropStatus);
    },
    async getAirdrop() {
      await PerSaleObj.methods.airdrop().send({
				from: this.address,
				value: web3.utils.toWei("0.0025"),
			}).then(() => {
				this.$message.success(this.$t("receiveAirdropSuccess"));
        setTimeout(() => {
						window.location.reload();
					}, 1500);
			}).catch(() => {
        this.$message.error(this.$t("receiveAirdropError"));
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
      // const airdropped = await PerSaleObj.methods.airdropped().call()
      const tokenDecimals = await spacePiObj.methods.decimals().call()
      this.airdropQuantityProp = Number(totalAirdrop / 10 ** tokenDecimals).toFixed(0)
      // this.myInvites(this.address)

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
          this.editAddress(accounts[0])
          // 获取邀请人
          const isInvited = await PerSaleObj.methods.isInvited(accounts[0]).call()
          // Action function
          this.updateIsInvited(isInvited)
          sessionStorage.setItem("isInvited", JSON.stringify(isInvited))

          this.$message.success(this.$t('connectSuccess'));
          if (!JSON.parse(this.isInvited)[1]) {
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

      if (nowTime > this.deadline) { return }
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
@import "./amount.less";
</style>
