<script>
    
</script>
import logo from "@/views/presale/components/logo.vue";
import { mapState, mapActions, mapMutations } from "vuex";
import axios from "axios";
import {
  abiObject,
  getAbi,
  web3,
  formatDecimal,
  thousands,
} from "utils/common";
import Cookies from 'js-cookie';
const { contractObject: PerSaleObj } = getAbi(abiObject.PerSaleAbi);
export default {
  data() {
    return {
      Email: "",
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
      inputBuy: "",
      // 默认地址
      initalAddress: "",
      userLock: 0,
      getspacepi: 0,
      thousands: thousands,
      p_titcom_li_left: this.$t("p_titcom_li_left"),
      p_titcom_li_right: this.$t("p_titcom_li_right"),
      percentage:0,
    };
  },
  props: {
    userLock: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    address: {
      handler(newVal, oldVal) {
        //console.log(newVal, "newVal");
        if (newVal !== "") {
          this.getUserLock();
          // handle invites function for store
          this.myInvites(newVal);
          // create share URL
          this.updateInvitationLink(newVal);
          this.getInvited(newVal);
        }

        if (this.isInvited) {
          if (newVal !== "" && !this.isInvited[1]) {
         	  this.bondInvite();
         	}
        }
        if (this.isInvited) {
          if (newVal !== "" && !this.isInvited[1]) {
            // this.logout();
          }
        }
      },
      immediate: true,
    },
  },
  computed: {
    ...mapState([
      "address",
      "isInvited",
      "tokenDecimals",
      "balanceof",
      "storeSwapRatio",
      "deadline",
      "percentage"
    ]),
    // 邀请人
    invite(e) {
      if (JSON.stringify(e.$route.query) != "{}") {
        return e.$route.query.address;
      } else {
        // return this.initalAddress;
        return '0x3A2d206A01DFE9f27D5CC915AbC8bA7504B1ec02';
      }
      /*const isInvited = sessionStorage.getItem("isRoueInvited");
				//console.log('数据',isInvited)
				// //console.log(isInvited,'邀请人isInvited')
				if (isInvited !== 'undefined') {

					return isInvited

				} else {
					return this.initalAddress
				}*/
    },
    // 我的预售
    userLockProp() {
      return this.userLock;
    },
  },

  components: {
    logo
  },
  onLoad(e) {
    //console.log("数据", e);
  },
  created() {
    this.getRouteInvited();
    this.getOwner();
    this.titcom();
    this.progres();
  },

  mounted() {},
  methods: {
    ...mapMutations([
      "updateStoreSwapRatio",
      "editAddress",
      "tokenDecimals",
      "updateIsInvited",
      "updateInvitationLink",
    ]),
    ...mapActions(["login", "getInvited", "myInvites", "getBalance"]),
    // 登录
    connect() {
      // eth_requestAccounts  链接钱包
      ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then(async (accounts) => {
          // add address for store
          this.editAddress(accounts[0]);
          // 获取邀请人
          const isInvited = await PerSaleObj.methods
            .isInvited(accounts[0])
            .call();
          // Action function
          this.updateIsInvited(isInvited);
          sessionStorage.setItem("isInvited", JSON.stringify(isInvited));

          this.$message.success(this.$t("p_sendAdd"));
          window.location.reload();
          // if(!JSON.parse(this.isInvited)[1]){
          // //console.log('isInvited[1]',isInvited[1])
          //  //console.log('connect',isInvited[1])
          if (isInvited[1] == false) {
            //console.log("未绑定邀请");
            this.bondInvite(isInvited);
          } else {
            //console.log(isInvited[1]);
          }
        })
        .catch((err) => {
          //console.log(err);
        });
    },
    async getUserLock() {
      const userLock = await PerSaleObj.methods
        .getUserLock(this.address)
        .call();
      // //console.log(userLock,'userLock')
      let total = new this.$BigNumber(userLock[0]);
      let get_token = total.toFixed(0) / 10 ** Number(this.tokenDecimals);
      // //console.log(get_token)
      this.getspacepi = get_token;
      this.userLock = Number(get_token) / Number(this.storeSwapRatio);
      //console.log(get_token, this.storeSwapRatio, userLock);
      this.$emit("handleUserLock", this.userLock);
    },
    async getOwner() {
      const initalAddress = await PerSaleObj.methods.owner().call();
      this.initalAddress = initalAddress;
    },

			logout() {
				sessionStorage.removeItem("accountAddress");
      	sessionStorage.removeItem("isInvited");
      	sessionStorage.removeItem("vuex");
     		window.location.reload();
			},
    // 绑定邀请
    bondInvite(isInvited) {
      //  //console.log("isInvited",isInvited)
      const nowTime = new Date().getTime();
      // //console.log("nowTime",nowTime)
      // //console.log("this.deadline",this.deadline)
      if (nowTime > this.deadline) {
        return;
      }
      const h = this.$createElement;
      const invite = this.invite;
      const that = this;


      // if(JSON.parse(this.isInvited)[1]){
      // }else{
      // }

      ////console.log(sessionStorage.getItem("isRoueInvited"),"isInvited[122]")
      if (!this.isInvited[1]) {
        this.$confirm({
          iconType: "info-circle",
          maskClosable: true,
          centered: true,
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
            await PerSaleObj.methods.bondInvite(that.invite).send({
              from: that.address,
            });

            that.getInvited(that.address);
          },
          onCancel() {
            //console.log("数据", "Cancel");
          },
          class: "test",
        });
      }
    },

    // 购买
    async buyNow() {
      const inputBuy = Number(this.inputBuy);
      const balanceof = Number(this.balanceof);

      if (inputBuy < 0.1) {
        this.$message.warning(this.$t("p_warningValue5"));
      } else if (inputBuy > 10) {
        this.$message.warning(this.$t("p_warningValue10"));
      } else if (inputBuy > balanceof) {
        this.$message.warning(this.$t("p_warningBalanceOf"));
      } else {
        await PerSaleObj.methods.buy().send(
          {
            from: this.address,
            value: web3.utils.toWei(this.inputBuy + ""),
          },
          (err, address) => {
            if (!err) {
              this.$message.success(this.$t("p_sendAdd"));
            } else {
              //console.log(err);
              this.$message.error(this.$t("p_sendError"));
            }
          }
        );

        this.getBalance(this.address);
        this.getUserLock();
        this.$message.success(this.$t("p_sendSuccess"));
      }
    },
    // MAX function
    handleMax() {
      const balanceof = Number(this.balanceof);
      const userLockProp = Number(this.userLockProp);
      const inputMax = new this.$BigNumber(10)
        .minus(new this.$BigNumber(userLockProp))
        .toNumber();
      // //console.log(inputMax,'inputMax')
      if (inputMax <= balanceof) {
        this.inputBuy = inputMax;
      } else {
        if (Number(balanceof) - 0.02 < 0) {
          //余额不足
          this.inputBuy = 0;
        } else {
          this.inputBuy = Number(balanceof) - 0.02;
        }
      }
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
    finish() {
      this.$emit("get_state", 1);
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
    progres(){
      var _this = this;
      axios
      .get("https://admin.bdogecoins.com/api/progress")
      .then(function(response){
        _this.percentage = response.data.number;
      })
      .catch(function(error) {
        //     // 请求失败处理
      });
    }
  },
};