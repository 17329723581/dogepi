<template>
    <div class="start">
        <div class="start-background-content">
            <div class="start-content">
                <div class="start-presale-content">
                    <div class="start-presale-left">
                        <!-- <div class="base-circle-wrap">
                          <img src="@/assets/c1.png" loading="lazy" alt="" class="htb-circle-1"/>
                          <logo class="htb-circle-dashes"></logo>
                          <div class="circle-glued-coins">
                            <img src="@/assets/gc1.png" loading="lazy" alt="" class="gc-1"/>
                            <img src="@/assets/gc2.png" loading="lazy" alt="" class="gc-2"/>
                            <img src="@/assets/gc4.png" loading="lazy" alt="" class="gc-3"/>
                          </div>
                          <div class="front-coins-holder">
                            <img src="@/assets/bc1.png" loading="lazy" alt="" class="bc-1"/>
                            <img src="@/assets/bc2.png" loading="lazy" alt="" class="bc-2"/>
                            <img src="@/assets/bc4.png" loading="lazy" alt="" class="bc-3"/>
                          </div>
                        </div> -->
                        <homeLogo class="base-circle-wrap"></homeLogo>
                    </div>
                    <div class="start-presale-right">
                        <div class="start-presale-right-content">
                            <div class="start-presale-soft">
                                <span class="start-presale-title">{{ this.$t("p_o_array")[0]["title"] }}</span>
                                <span class="start-presale-text">{{ this.$t("p_o_array")[0]["num"] }}</span>
                            </div>
                            <div class="start-presale-hard">
                                <span class="start-presale-title">{{ this.$t("p_o_array")[1]["title"] }}</span>
                                <span class="start-presale-text">{{ this.$t("p_o_array")[1]["num"] }}</span>
                            </div>
                        </div>
                        <div class="start-presale-percentage-content">
                            <div class="start-presale-percentage">
                                <div class="progress" :style="'width:' + percentage + '%'"></div>
                            </div>
                            <!-- <div class="start-presale-title">
                                <span>
                                    {{ this.$t("p_o_title") }}
                                </span>
                            </div> -->
                        </div>
                        <div class="start-presale-countdown-content">
                            <div class="start-presale-countdown-title">
                                <span>{{ this.$t("p_o_des") }}</span>
                            </div>
                            <div class="start-presale-countdown">
                                <a-statistic-countdown :value="deadline" format="DD: HH: mm: ss" @finish="finish()"/>
                            </div>
                            <div class="start-presale-countdown-text">
                                <span>{{ this.$t("p_r_o_text") }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="start-wallet-content">
                    <div class="start-wallet-a">
                        <div class="start-wallet-title-a-content">
                            <div class="start-wallet-title-content">
                                <a-row :gutter="16">
                                    <a-col :span="8" class="start-wallet-a-title">{{ this.$t("p_r_o_pre_array")[0]["title"] }}</a-col>
                                    <a-col :span="8" class="start-wallet-a-text">{{ getnum(userLock,2)}}</a-col>
                                    <a-col :span="8" class="start-wallet-a-currency">{{ this.$t('currency') }}</a-col>
                                </a-row>
                            </div>
                        </div>
                        <div class="start-wallet-title-b-content">
                            <!-- <div class="start-wallet-b-col">
                                <span class="start-wallet-b-title">{{this.$t("p_r_o_totalarray")[0].title}}</span>
                                <span class="start-wallet-b-text">{{this.$t("p_r_o_totalarray")[0].text}}</span>
                            </div> -->
                            <div class="start-wallet-b-col">
                                <span class="start-wallet-b-title">{{this.$t("p_r_o_totalarray")[1].title}}</span>
                                    <span class="start-wallet-b-text">{{this.$t("p_r_o_totalarray")[1].text}} {{ storeSwapRatio/100000000 }}e {{this.$t("currency_1")}}</span>
                            </div>
                            <div class="start-wallet-b-col">
                                <span class="start-wallet-b-title">{{this.$t("p_r_o_totalarray")[2].title}}</span>
                                    <span class="start-wallet-b-text">{{this.$t("p_r_o_totalarray")[2].text}}</span>
                            </div>
                            <div class="start-wallet-b-col">
                                <span class="start-wallet-b-title">{{this.$t("p_r_o_totalarray")[3].title}}</span>
                                <span class="start-wallet-b-text">{{this.$t("p_r_o_totalarray")[3].text}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="start-wallet-like" style=""></div>
                    <div class="start-wallet-b">
                        <div class="start-wallet-b-title">
                            <span>{{ this.$t("p_buy_l_title") }}</span>
                        </div>
                        <div class="start-wallet-b-input">
                            <div class="start-wallet-b-input-left">
                                <span>
                                    {{ this.$t("p_amount") }}
                                </span>
                            </div>
                            <div class="start-wallet-b-input-content">
                                <input  maxlength="12" type="text" v-model="inputBuy" :placeholder="$t('p_input_text')" :min="0.1" :max="10" :precision="0">
                            </div>
                            <div class="start-wallet-b-input-content">
                                <span>
                                    {{ this.$t("currency") }}
                                </span>
                            </div>
                            <div class="start-wallet-b-button-content">
                                <button @click="handleMax">{{ this.$t("p_r_o_max") }}</button>
                            </div>
                        </div>
                    </div>
                    <div class="start-wallet-c">
                        <div class="start-wallet-c-content">
                            <span>{{ this.$t("p_titcom_tit") }}</span>
                            <span class="start-wallet-c-text">{{p_titcom_li_left}}</span>
                            <span>{{p_titcom_li_right}} {{this.$t('currency')}}</span>
                        </div>
                    </div>
                    <div class="start-wallet-d">
                        <div class="start-wallet-balance">
                            <span>
                                {{ this.$t("p_r_o_balance") }} {{ balanceof }} {{this.$t('currency')}}
                            </span>
                        </div>
                    </div>
                    <div class="start-wallet-connect" v-if="!address">
                        <button  type="button" class="start-wallet-connect-a" @click="connect">{{ this.$t("p_r_o_login_bnt") }}</button>
                    </div>
                    <div class="start-wallet-connect" v-if="address">
                        <button type="button" class="start-wallet-connect-a" @click="buyNow()">{{ this.$t("p_r_o_buy_bnt") }}</button>
                    </div>
                    <div class="start-wallet-connect" v-if="address">
                        <span class="address">
                            <img src="@/assets/token.png">
                            <span class="address-s">
                                {{address}}
                            </span>
                        </span>
                        <button type="button" class="start-wallet-connect-b" @click="logout">{{ this.$t("p_r_o_out_bnt") }}</button>
                    </div>
                </div>
                <div class="start-wallet-connect-info">
                    <span>
                        {{this.$t("p_info") }}
                    </span>
                </div>
                <div class="start-rules">
                    <span class="title">
                        {{ this.$t("p_r_o_rules_title") }}
                    </span>
                    <div class="text-s">
                        <div class="text">
                            <span>{{ this.$t("p_r_o_rules_array")[0] }}</span>
                        </div>
                        <div class="text">
                            <span>{{ this.$t("p_r_o_rules_array")[1] }}</span>
                        </div>
                        <div class="text">
                            <span>{{ this.$t("p_r_o_rules_array")[2] }}</span>
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
</template>
<script>
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
</script>
<script>
import homeLogo from "@/views/home/Harry/homeLogo.vue"

import logo from "@/views/presale/components/logopc.vue";
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
const {contractObject:spacePiObj} = getAbi(abiObject.spacePiAbi)
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
      deadline:'0',
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
      "percentage",
      "urls"
    ]),
    // 邀请人
    invite(e) {
      if (JSON.stringify(e.$route.query) != "{}") {
        return e.$route.query.address;
      } else {
        // return this.initalAddress;
        return '0x456463b185a447552b31516c2cb729b9c90D531B';
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
    logo,
    homeLogo
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

  mounted() {
    // let _this = this;
    // axios
    //   .get(this.urls + 'bdogepiPresaleEnd')
    //   .then(function(response){
    //     _this.deadline = response.data.data;
    // })
  },
  methods: {
    ...mapMutations([
      "updateStoreSwapRatio",
      "editAddress",
      "tokenDecimals",
      "updateIsInvited",
      "updateInvitationLink",
    ]),
    
    ...mapActions(["login", "getInvited", "myInvites", "getBalance"]),
    getnum(a,num)
        {
            var a_type = typeof(a);
            if(a_type == "number"){
                var aStr = a.toString();
                var aArr = aStr.split('.');
            }else if(a_type == "string"){
                var aArr = a.split('.');
            }
            
            if(aArr.length > 1) {
                if(num == 0)
                {
                    a = aArr[0];
                }else{
                    a = aArr[0] + "." + aArr[1].substr(0, num);
                }
            }
            //console.log('getnum',a)

            // let arr = await PerSaleObj.methods.getUserLock(this.address).call()
            //  await PerSaleObj.methods.getUserLock(this.address).call();
            // console.log('getnum',arr)
            return a;
            
        },
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
          const tokenDecimals = await spacePiObj.methods.decimals().call();
          const userLock = await PerSaleObj.methods.getUserLock(this.address).call();
          const Price = await PerSaleObj.methods.perHTPrice().call();
          // 1个币安 = 0.001spi币当前价格 / 10 ** 位数
          // 获取已经购买价格 / spi币当前价格
          let total = new this.$BigNumber(userLock);
          let get_token = total.toFixed(0);
          
          let mypersale = get_token / Price;
          this.userLock = mypersale.toFixed(1);

          console.log('Price数据',Price)
          console.log('get_token数据',get_token)

          //  const userLock = await PerSaleObj.methods.getUserLock(this.address).call()
          // //   console.log(userLock,'userLock')
          // let total = new this.$BigNumber(userLock[0])
          // let get_token = total.toFixed(0) / 10 ** Number(this.tokenDecimals)
          // // console.log(get_token)
          // this.getspacepi = get_token
          // this.userLock = Number(get_token) / Number(this.storeSwapRatio)
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
        await PerSaleObj.methods.buy().send({
          from: this.address,
          value: web3.utils.toWei(this.inputBuy)
        }).then(()=>{
          this.$message.success(this.$t("p_sendSuccess"));
        }).catch(()=>{
          this.$message.error(this.$t("p_sendError"));
        });
        this.getBalance(this.address);
        this.getUserLock();
        
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
</script>

<style scoped lang="less">
@import "../../../../styles/shiba-ui.less";
//@import "./presaleOneSlyte.less";
@import "../../components/presaleOne.less";
@import "../../components/presaleOneSlyte.less";
@import "../css/index.less";
@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
.htb-circle-dashes {
  animation: rotation 60s linear infinite;
}
.circle-glued-coins {
  animation: rotation 30s linear infinite;
}
.front-coins-holder {
  animation: rotation 60s linear infinite;
}
</style>
