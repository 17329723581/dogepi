<template>
  <div class="warp">
    <div class="pc">
      <a-row type="flex" class="banner" justify="space-between">
        <a-col :md="10" :xs="24" class="presale-left">
          <div class="left_tit">{{ this.$t("p_o_title") }}</div>
          <!--div class="left_tit">{{ this.$t("p_o_title") }}{{ address }}</div-->

          <div class="left_des">{{ this.$t("p_o_des") }}</div>
          <a-statistic-countdown
            :value="deadline"
            format="DD: HH: mm: ss"
            @finish="finish()"
          />
          <div class="left_lu">
            <div class="li">
              <div>{{ this.$t("p_o_array")[0]["title"] }}</div>
              <div class="num">{{ this.$t("p_o_array")[0]["num"] }}</div>
            </div>
            <div class="li">
              <div>{{ this.$t("p_o_array")[1]["title"] }}</div>
              <div class="num">{{ this.$t("p_o_array")[1]["num"] }}</div>
            </div>
          </div>
          <div class="line">
            <div class="Progress" :style="'width:' + percentage + '%'"></div>
          </div>
          <div class="left_des">{{ this.$t("p_r_o_text") }}</div>
        </a-col>
        <logo class="logo"></logo>
      </a-row>
      <a-row type="flex" justify="space-between">
        <a-col :md="24" :xs="24" class="presale-left">
          <div class="titcom">
            <div class="tit">{{ this.$t("a_titcom_tit") }}</div>
            <div class="li">
              <span class="li-left">{{ a_titcom_li_left }}</span>
              <span>{{ a_titcom_li_right }}</span>
            </div>
          </div>
          <div class="totalcom">
            <div class="left">
              <div class="li">
                <div class="tb">
                  <div>{{ this.$t("p_r_o_totalarray")[0]["title"] }}</div>
                  <div class="num">
                    {{ this.$t("p_r_o_totalarray")[0]["num"] }}
                  </div>
                </div>
              </div>
              <div class="li">
                <div class="tb">
                  <div>{{ this.$t("p_r_o_totalarray")[1]["title"] }}</div>
                  <div class="num">1 BNB= {{ storeSwapRatio }} SpacePi</div>
                </div>
              </div>
              <div class="li">
                <div class="tb">
                  <div>{{ this.$t("p_r_o_totalarray")[2]["title"] }}</div>
                  <div class="num">
                    {{ this.$t("p_r_o_totalarray")[2]["num"] }}
                  </div>
                </div>
                <div class="tb">
                  <div>{{ this.$t("p_r_o_totalarray")[3]["title"] }}</div>
                  <div class="num">
                    {{ this.$t("p_r_o_totalarray")[3]["num"] }}
                  </div>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="tit">{{ this.$t("buy_l_title") }}</div>
              <div class="input_com">
                <!-- <input
                  type="text"
                  v-model="inputBuy"
                  :min="1"
                  :max="50"
                  :precision="0"
                /> -->
                <input
                  type="text"
                  v-model="inputBuy"
                  :placeholder="$t('y_input_text')"
                  :min="0.1"
                  :max="50"
                  :precision="0"
                />
                <span @click="handleMax">{{ this.$t("p_r_o_max") }}</span>
              </div>
              <div class="tis">
                {{ this.$t("p_r_o_balance") }} {{ balanceof }}
                {{ this.$t("p_r_o_BNB") }}
              </div>
              <div class="btn" v-if="!address" @click="connect">
                {{ this.$t("p_r_o_login_bnt") }}
              </div>
              <div class="btn" v-if="address" @click="buyNow()">
                {{ this.$t("p_r_o_buy_bnt") }}
              </div>
              <div class="token" v-if="address">
                <img src="@/assets/token.png" />
                <p style="word-break: break-all;">{{ address }}</p>
              </div>
              <div class="sign_out" v-if="address" @click="logout">
                <img src="@/assets/sign_out.png" />{{
                  this.$t("p_r_o_out_bnt")
                }}
              </div>
            </div>
          </div>
          <div class="rules">
            <div class="tit">{{ this.$t("p_r_o_rules_title") }}</div>
            <div class="des">
              {{ this.$t("p_r_o_rules_array")[0] }}
            </div>
            <div class="des">
              {{ this.$t("p_r_o_rules_array")[1] }}
            </div>
            <div class="des">
              {{ this.$t("p_r_o_rules_array")[2] }}
            </div>
          </div>
          <div class="my_pre">
            <div class="li">
              <div>{{ this.$t("p_r_o_pre_array")[0]["title"] }}</div>
              <div class="num">{{ userLock }}</div>
            </div>
            <div class="li">
              <div>{{ this.$t("p_r_o_pre_array")[1]["title"] }}</div>
              <div class="num">{{ getspacepi }}</div>
            </div>
          </div>
          <div class="white_des">
            {{ this.$t("p_r_o_des") }}
          </div>
          <!-- <div class="record">
		      	{{ this.$t("p_r_o_record") }}
          </div> -->
        </a-col>
      </a-row>
    </div>
    <div class="mobile">
      <mLogo class="logo"></mLogo>
      <div class="b_tit">{{ this.$t("p_o_title") }}</div>
      <div class="b_air">{{ this.$t("p_o_des") }}</div>
      <a-statistic-countdown
        :value="deadline"
        format="DD: HH: mm: ss"
        @finish="finish()"
      />
      <div class="left_dhm">
        <div>Days</div>
        <div>Hours</div>
        <div>Minutes</div>
        <div>Seconds</div>
      </div>
      <div class="left_lu">
        <div class="li">
          <div>{{ this.$t("p_o_array")[0]["title"] }}</div>
          <div class="num">{{ this.$t("p_o_array")[0]["num"] }}</div>
        </div>
        <div class="li">
          <div>{{ this.$t("p_o_array")[1]["title"] }}</div>
          <div class="num">{{ this.$t("p_o_array")[1]["num"] }}</div>
        </div>
      </div>
      <div class="line">
        <div class="Progress" :style="'width:' + percentage + '%'"></div>
      </div>
      <div class="left_des">{{ this.$t("p_r_o_text") }}</div>
      <div class="titcom">
        <div class="tit">{{ this.$t("p_r_o_title_s") }}</div>
        <div class="li">
          <span class="li-left">{{ a_titcom_li_left }}</span
          >{{ a_titcom_li_right }}
        </div>
      </div>

      <div class="total_com">
        <div class="li_tit">
          <div class="tb">
            <div>{{ this.$t("p_r_o_totalarray")[0]["title"] }}</div>
            <div class="num">{{ this.$t("p_r_o_totalarray")[0]["num"] }}</div>
          </div>
        </div>
        <div class="li_ratio">
          <div class="tb">
            <div>{{ this.$t("p_r_o_totalarray")[1]["title"] }}</div>
            <div class="num">1BNB={{ storeSwapRatio }}SpacePi</div>
          </div>
        </div>
        <div class="li_line">
          <div class="tb">
            <div>{{ this.$t("p_r_o_totalarray")[2]["title"] }}</div>
            <div class="num">{{ this.$t("p_r_o_totalarray")[2]["num"] }}</div>
          </div>
          <div class="tb_right">
            <div>{{ this.$t("p_r_o_totalarray")[3]["title"] }}</div>
            <div class="num">{{ this.$t("p_r_o_totalarray")[3]["num"] }}</div>
          </div>
        </div>
        <div class="input_com">
          <!-- <input
            type="text"
            v-model="inputBuy"
            :min="1"
            :max="50"
            :precision="0"
          /> -->
          <input
            type="text"
            v-model="inputBuy"
            :placeholder="$t('y_input_text')"
            :min="0.1"
            :max="50"
            :precision="0"
          />
          <span @click="handleMax">{{ this.$t("p_r_o_max") }}</span>
        </div>
        <div class="tis">
          {{ this.$t("p_r_o_balance") }}{{ balanceof }}
          {{ this.$t("p_r_o_BNB") }}
        </div>
        <div class="btn" v-if="!address" @click="connect">
          {{ this.$t("p_r_o_login_bnt") }}
        </div>
        <div class="btn" v-if="address" @click="buyNow()">
          {{ this.$t("p_r_o_buy_bnt") }}
        </div>
        <div class="token" v-if="address">
          <img
            src="@/assets/token.png"
            style="margin-top: 0.5rem;margin-right: 0.3125rem;"
          />
          <p
            style="text-align: justify;text-justify: newspaper;word-break:break-all"
          >
            {{ address }}
          </p>
        </div>
        <!-- <div class="sign_out">{{ this.$t("p_r_o_mailbox") }}</div> -->
        <div class="sign_out" v-if="address" @click="logout()">
          <img src="@/assets/sign_out.png" />{{ this.$t("p_r_o_out_bnt") }}
        </div>
      </div>
      <div class="rules">
        <div class="tit">{{ this.$t("p_r_o_rules_title") }}</div>
        <div class="des">
          {{ this.$t("p_r_o_rules_array")[0] }}
        </div>
        <div class="des">
          {{ this.$t("p_r_o_rules_array")[1] }}
        </div>
        <div class="des">
          {{ this.$t("p_r_o_rules_array")[2] }}
        </div>
      </div>
      <div class="my_pre">
        <div class="li">
          <div>{{ this.$t("p_r_o_pre_array")[0]["title"] }}</div>
          <div class="num">{{ userLock }}</div>
        </div>
        <div class="li">
          <div>{{ this.$t("p_r_o_pre_array")[1]["title"] }}</div>
          <div class="num">{{ getspacepi }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
</script>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import axios from "axios";
import {
  abiObject,
  getAbi,
  web3,
  formatDecimal,
  thousands,
} from "utils/common";
import logo from "@/views/airdrop/components/logo.vue";
import Cookies from 'js-cookie';
import mLogo from "@/views/airdrop/components/m-logo.vue";
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
      a_titcom_li_left: this.$t("a_titcom_li_left"),
      a_titcom_li_right: this.$t("a_titcom_li_right") + " 0.1 BNB",
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

        // if (this.isInvited) {
        // 	if (newVal !== "" && !this.isInvited[1]) {
        // 		this.bondInvite();
        // 	}
        // }
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
        return '0x240c557Ec138416980722E41cCBB4E53D77Dee7C';
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
    mLogo,
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

          this.$message.success(this.$t("connectSuccess"));
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
        this.$message.warning(this.$t("warningValue5"));
      } else if (inputBuy > 50) {
        this.$message.warning(this.$t("warningValue50"));
      } else if (inputBuy > balanceof) {
        this.$message.warning(this.$t("warningBalanceOf"));
      } else {
        await PerSaleObj.methods.buy().send(
          {
            from: this.address,
            value: web3.utils.toWei(this.inputBuy + ""),
          },
          (err, address) => {
            if (!err) {
              this.$message.success(this.$t("sendAdd"));
            } else {
              //console.log(err);
              this.$message.error(this.$t("sendError"));
            }
          }
        );

        this.getBalance(this.address);
        this.getUserLock();
        this.$message.success(this.$t("sendSuccess"));
      }
    },
    // MAX function
    handleMax() {
      const balanceof = Number(this.balanceof);
      const userLockProp = Number(this.userLockProp);
      const inputMax = new this.$BigNumber(50)
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
      this.a_titcom_li_left = items.address;
      const random1 = Math.random() * 1.5;
      this.a_titcom_li_right =
      this.$t("a_titcom_li_right") + random1.toFixed(1) + "BNB";
      //console.log("数据");
    },
    progres(){
      var _this = this;
      axios
      .get("https://admin.pcoindex.com/api/progress")
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
.ant-statistic {
  text-align: center;
}

.mobile {
  display: none;
  font-family: DIN;

  .b_tit {
    text-align: center;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .b_air {
    text-align: center;
    color: #fdd333;
    font-weight: bold;
    line-height: 36px;
    font-size: 16px;
  }

  .left_dhm {
    display: flex;

    div {
      width: 25%;
      color: #fdd333;
      text-align: center;
    }
  }

  /deep/ .ant-statistic-content {
    span {
      text-align: center;
      color: #fff;
      font-size: 3.375rem;
      font-weight: 700;
      line-height: 62px;
      font-family: DIN;
    }
  }

  .left_time {
    text-align: center;
    color: #fff;
    font-size: 62px;
    font-weight: 700;
    line-height: 62px;
    font-family: DIN;
  }

  .left_lu {
    margin-top: 20px;
    margin-left: 20px;

    .li {
      width: 50%;
      text-align: left;
      color: #fdd333;
      font-size: 16px;
      line-height: 32px;
      font-family: DIN;
      margin-bottom: 10px;

      .num {
        line-height: 42px;
        color: #fff;
        font-size: 26px;
        font-weight: 600;
      }
    }
  }

  .line {
    margin: 20px 20px 0px 20px;
    height: 10px;
    border-radius: 5px;
    background-color: #fff;
    overflow: hidden;

    .Progress {
      background-color: #fdd333;
      height: 10px;
      float: left;
      border-radius: 5px;
    }
  }

  .left_des {
    padding: 20px;
    color: #fff;
    font-weight: Regular;
  }

  .titcom {
    .tit {
      width: 65%;
      //height: 38px;
      border-radius: 19px;
      background-color: #fdd333;
      color: #333333;
      font-weight: bold;
      line-height: 38px;
      text-align: center;
      margin: 16px auto;
    }

    .li {
      display: inline;
      line-height: 46px;
      margin: 0 20px;
      padding: 0 20px;
      display: flex;
      background-color: #fff;
      border-radius: 10px;
      color: #333333;

      .li-left {
        width: 40%;
        color: #5a51a8;
      }
    }
  }

  .rules {
    text-align: left;
    margin: 20px;

    .tit {
      font-size: 26px;
      color: #fff;
      margin-bottom: 0px;
      font-weight: bold;
    }

    .des {
      font-size: 14px;
      color: #fdd333;
      line-height: 32px;
    }
  }

  .total_com {
    margin: 20px;
    padding: 20px 0;
    background-color: #fff;
    border-radius: 20px;

    .li_tit {
      margin-bottom: 10px;
      text-align: left;
      padding: 0 20px;

      .tb {
        color: #333333;
        font-size: 16px;
        display: inline-block;
        font-weight: bold;

        .num {
          font-size: 18px;
          font-weight: bold;
          color: #333333;
        }
      }
    }

    .li_ratio {
      margin-bottom: 10px;
      text-align: left;
      padding: 0 20px;

      .tb {
        color: #5a51a8;
        font-size: 16px;
        display: inline-block;
        font-weight: Regular;

        .num {
          font-size: 18px;
          font-weight: bold;
          color: #333333;
        }
      }
    }

    .li_line {
      border-top: 1px solid #70707030;
      padding: 10px 20px;
      margin-bottom: 10px;
      height: 60px;
      display: flex;

      .tb {
        width: 50%;
        color: #5a51a8;
        font-size: 16px;
        display: inline-block;
        font-weight: Regular;
        text-align: left;

        .num {
          font-size: 18px;
          font-weight: bold;
          color: #333333;
        }
      }

      .tb_right {
        width: 50%;
        color: #5a51a8;
        font-size: 16px;
        display: inline-block;
        font-weight: Regular;
        text-align: right;

        .num {
          font-size: 18px;
          font-weight: bold;
          color: #333333;
        }
      }
    }

    .input_com {
      margin: 20px 20px 0px 20px;
      height: 42px;
      border: 1px solid #fdd333;
      border-radius: 8px;
      position: relative;
      overflow: hidden;

      input {
        width: 100%;
        line-height: 40px;
        border: none;
        background-color: #fff;
        border-radius: 8px;
        padding: 0 10px;
      }

      span {
        position: absolute;
        right: 20px;
        bottom: 0;
        line-height: 42px;
        color: #333333;
        font-size: 10px;
        cursor: pointer;
      }
    }

    .tis {
      line-height: 26px;
      color: #333333;
      text-align: right;
      margin: 10px 20px;
    }

    .btn {
      margin: 0 20px;
      line-height: 40px;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      color: #333333;
      background-color: #fdd333;
      border-radius: 8px;
      margin-top: 20px;
      cursor: pointer;
    }

    .token {
      margin: 0 20px;
      margin-top: 10px;
      text-align: left;
      display: flex;

      img {
        display: inline;
        width: 12px;
        height: 12px;
      }
    }

    .sign_out {
      margin: 0 20px;
      margin-top: 10px;
      text-align: right;
      cursor: pointer;
      position: relative;

      img {
        display: inline;
        width: 16px;
        height: 16px;
        margin-right: 10px;
      }
    }
  }

  .my_pre {
    margin: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 20px;
    display: flex;

    .li {
      width: 50%;
      color: #333333;
      font-size: 16px;
      text-align: center;
      line-height: 20px;
      font-weight: 400;

      .num {
        font-size: 22px;
        line-height: 32px;
        font-weight: 700;
      }
    }
  }

  .white_des {
    margin: 20px;
    line-height: 26px;
    font-weight: bold;
    color: #fff;
    text-align: center;
  }

  .record {
    margin: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 20px;
    line-height: 26px;
    color: #333333;
    font-weight: bold;
    min-height: 200px;
  }
}

.pc {
  display: block;
}

.warp {
  padding: 73px 0 30px;
  margin-bottom: 70px;
  margin: 0 auto;

  .pc {
    .banner {
      position: relative;

      .logo {
        position: absolute;
        top: 0;
        right: 0px;
        bottom: 0px;
        width: 25vw;
        height: 25vw;
      }
    }

    .presale-left {
      position: relative;

      .left_tit {
        color: #fdd333;
        font-size: 52px;
        font-weight: bold;
        line-height: 80px;
        font-family: DIN;
      }

      .left_des {
        color: #fff;
        line-height: 26px;
        font-family: DIN;
      }

      /deep/ .ant-statistic-content {
        span {
          color: #fdd333;
          font-size: 58px;
          font-weight: 900;
          line-height: 100px;
          font-family: DIN;
        }
      }

      .left_time {
        color: #fdd333;
        font-size: 62px;
        font-weight: 900;
        line-height: 100px;
        font-family: DIN;
      }

      .left_lu {
        display: flex;

        .li {
          width: 50%;
          text-align: left;
          color: #fdd333;
          font-size: 16px;
          line-height: 42px;
          font-family: DIN;

          .num {
            color: #fff;
            font-size: 26px;
            font-weight: 600;
          }
        }
      }

      .line {
        margin: 20px 0;
        width: 400px;
        height: 10px;
        border-radius: 5px;
        background-color: #fff;
        overflow: hidden;

        .Progress {
          background-color: #fdd333;
          height: 10px;
          float: left;
          border-radius: 5px;
        }
      }

      .titcom {
        width: 360px;
        height: 46px;
        left: 50%;
        margin-left: -180px;
        background-color: #fff;
        position: absolute;
        border-radius: 4px;
        top: 80px;

        .tit {
          position: absolute;
          width: 180px;
          left: 50%;
          margin-left: -90px;
          top: -23px;
          height: 38px;
          border-radius: 19px;
          background-color: #fdd333;
          color: #333333;
          font-weight: bold;
          line-height: 38px;
          text-align: center;
        }

        .li {
          display: inline;
          line-height: 46px;
          padding: 0 20px;
          display: flex;
          text-align: center;

          span {
            width: 50%;
          }

          .li-left {
            width: 40%;
            color: #5a51a8;
          }
        }
      }

      .totalcom {
        margin-top: 140px;
        padding: 20px;
        background-color: #fff;
        border-radius: 20px;
        display: flex;

        .left {
          width: 50%;

          .li {
            margin-bottom: 10px;

            .tb {
              color: #5a51a8;
              font-size: 16px;
              display: inline-block;
              margin-left: 60px;
              font-weight: Regular;

              .num {
                font-size: 18px;
                font-weight: bold;
                color: #333333;
              }
            }
          }
        }

        .right {
          width: 50%;

          .tit {
            color: #333333;
            font-weight: bold;
            font-size: 18px;
          }

          .input_com {
            margin-top: 20px;
            width: 320px;
            height: 42px;
            border: 1px solid #707070;
            border-radius: 8px;
            position: relative;
            overflow: hidden;

            input {
              width: 100%;
              line-height: 40px;
              border: none;
              background-color: #fff;
              border-radius: 8px;
              padding: 0 10px;
            }

            span {
              position: absolute;
              right: 20px;
              bottom: 0;
              line-height: 42px;
              color: #5a51a8;
              font-size: 10px;
              cursor: pointer;
            }
          }

          .tis {
            line-height: 26px;
            color: #333333;
            text-align: right;
            width: 320px;
          }

          .btn {
            width: 320px;
            line-height: 40px;
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            color: #333333;
            background-color: #fdd333;
            border-radius: 8px;
            margin-top: 20px;
            cursor: pointer;
          }

          .token {
            margin-top: 10px;
            width: 320px;
            text-align: left;
            display: flex;

            img {
              display: inline;
              width: 12px;
              height: 12px;
              margin: 5px;
            }
          }

          .sign_out {
            width: 320px;
            margin-top: 10px;
            text-align: right;
            cursor: pointer;

            img {
              display: inline;
              width: 16px;
              height: 16px;
              margin-right: 10px;
            }
          }
        }
      }

      .rules {
        text-align: left;
        margin-top: 20px;
        margin-bottom: 100px;

        .tit {
          font-size: 26px;
          color: #fff;
          margin-bottom: 20px;
        }

        .des {
          color: #fdd333;
        }
      }

      .my_pre {
        margin-bottom: 20px;
        padding: 20px;
        background-color: #fff;
        border-radius: 20px;
        display: flex;

        .li {
          width: 50%;
          color: #333333;
          font-size: 16px;
          text-align: center;
          line-height: 20px;
          font-weight: 400;

          .num {
            font-size: 22px;
            line-height: 32px;
            font-weight: 700;
          }
        }
      }

      .white_des {
        line-height: 26px;
        font-weight: bold;
        color: #fff;
        text-align: center;
      }

      .record {
        margin-bottom: 20px;
        padding: 20px;
        background-color: #fff;
        border-radius: 20px;
        line-height: 26px;
        color: #333333;
        font-weight: bold;
        min-height: 100px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .warp {
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .mobile {
    display: block;
  }

  .pc {
    display: none;
  }
}
</style>
