<template>
  <div class="warp">
    <!-- <div class="raised">
      <div class="sound">
        <a-icon type="sound" />
        <span>{{ this.$t("LatestRaised") }}</span>
      </div>
      <div class="carousel">
        <a-carousel dot-position="left" autoplay>
          <div v-for="item in raisedList" :key="item.num">
            <span class="address">{{ item.address }}</span>
            <span>{{ $t("LatestRaised1") }} {{ item.num }} HT</span>

          </div>
        </a-carousel>
      </div>
    </div> -->
    <div class="buy">
      <a-row type="flex" justify="space-between" align="middle">
        <a-col :md="10" :xs="24" class="buy-left">
          <ul>
            <li>
              <p>{{ this.$t("buy_l_t1") }}</p>
              <strong>{{ this.$t("buy_l_t2") }}</strong>
            </li>
            <li>
              <p>{{ this.$t("buy_l_t3") }}</p>
              <strong>1 HT = {{storeSwapRatio}} SpacePi</strong>
            </li>
            <li>
              <div>
                <p>{{ this.$t("buy_l_t4") }}</p>
                <strong>1 HT</strong>
              </div>
              <div>
                <p>{{ this.$t("buy_l_t5") }}</p>
                <strong>50 HT</strong>
              </div>
            </li>
          </ul>
        </a-col>
        <a-col :md="12" :xs="24" class="buy-right">
          <div>{{ this.$t("buy_l_title") }}</div>
          <div class="inp">
            <input type="number"  v-model="inputBuy"/>
            <!-- <a-input-number  v-model="inputBuy" :min="1" :max="50" :precision="0" /> -->
            <button @click="handleMax">Max</button>
          </div>
          <div class="balance">
            <p>{{ this.$t("balance") }}: {{balanceof}} HT</p>
          </div>
          <div class="login" v-if="address">
            <button :class="['buy-now']" @click="buyNow()" >
              {{ this.$t("buynow") }}
            </button>
            <p>
              <a-icon type="api" /><em>{{ address }}</em>
            </p>
            <div @click="logout()">
              <p><a-icon type="poweroff" />{{ this.$t("logout") }}</p>
            </div>
          </div>
          <div class="out">
            <button class="buy-now" v-if="!address" @click="connect()">
              <a-icon type="api" />{{ this.$t("login") }}
            </button>
          </div>
        </a-col>
      </a-row>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import {abiObject, getAbi, web3, formatDecimal} from 'utils/common'
const {contractObject:PerSaleObj} = getAbi(abiObject.PerSaleAbi)

export default {
  data() {
    return {
      Email: "",
      raisedList: [
        { address: "0x000ndu531...", num: "1" },
        { address: "0x000ndu531...", num: "2" },
        { address: "0x000ndu531...", num: "3" },
        { address: "0x000ndu531...", num: "4" },
        { address: "0x000ndu531...", num: "5" },
        { address: "0x000ndu531...", num: "6" },
      ],
      inputBuy: 0.01,
      // 默认地址
      initalAddress: '',
    };
  },
  props: {
    userLock: {
      type: Number,
      default: 0,
    }
  },
  computed: {
    ...mapState(["address","isInvited","tokenDecimals","balanceof","storeSwapRatio","deadline"]),
    // 邀请人
    invite() {
      const isInvited = sessionStorage.getItem("isRoueInvited");
      console.log(isInvited,'邀请人isInvited')
      if(isInvited !== 'undefined'){
        return isInvited
      }else{
        // return this.initalAddress
        return '0x240c557Ec138416980722E41cCBB4E53D77Dee7C';
      }
    },
    // 我的预售
    userLockProp(){
      return this.userLock
    }
  },
  watch: {
    address:  {
      handler(newVal, oldVal) {
        if (newVal !== "") {
          // handle invites function for store 
          this.myInvites(newVal)
          // create share URL
          this.updateInvitationLink(newVal)
          this.getInvited(newVal)
        }
        if(this.isInvited){
          if( newVal !== '' && !this.isInvited[1]){
            this.bondInvite()

          }
        }
        
      },
      immediate: true,
    },
  },
  components: {},
  created() {
    this.getRouteInvited()
    this.getOwner()
  },
  mounted() {},
  methods: {
    ...mapMutations(["updateStoreSwapRatio","editAddress","updateIsInvited","updateInvitationLink"]),
    ...mapActions(["login","getInvited","myInvites","getBalance"]),

    // 登录
    connect() {
      // eth_requestAccounts  链接钱包
      ethereum.request({ method: "eth_requestAccounts" })
        .then(async (accounts) => {
          // add address for store
          this.editAddress( accounts[0])
          // 获取邀请人
          const isInvited = await PerSaleObj.methods.isInvited(accounts[0]).call()
          // Action function
          this.updateIsInvited(isInvited)
          sessionStorage.setItem("isInvited",JSON.stringify(isInvited))
          
          this.$message.success(this.$t('connectSuccess'));
          // if(!JSON.parse(this.isInvited)[1]){
          console.log('isInvited[1]',isInvited[1])
          if(isInvited[1] == false){
            console.log('未绑定邀请')
            this.bondInvite(isInvited)
          }else{
            console.log(isInvited[1])
          }

        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getOwner(){
      const initalAddress = await PerSaleObj.methods.owner().call()
      this.initalAddress = initalAddress
    },
    // 退出登录
    logout() {
      sessionStorage.removeItem("accountAddress");
      sessionStorage.removeItem("isInvited");
      sessionStorage.removeItem("vuex");
      sessionStorage.clear();
      window.location.reload()
    },
    // 绑定邀请
    bondInvite(isInvited){
      // console.log("绑定功能开启")
      const nowTime = new Date().getTime();
      // console.log("nowTime",nowTime)
      // console.log("this.deadline",this.deadline)
      if(nowTime>this.deadline){return}
      const h = this.$createElement;
      const invite = this.invite
      const that = this
      // if(JSON.parse(this.isInvited)[1]){
      // }else{
      // }
      if(!isInvited[1]){
        this.$info({
          title: this.$t('comfirmInvite'),
          content: h('div', {}, [
            h('p', `${this.$t('inviter')}：${invite}`),
          ]),
          async onOk(e) {
              if(that.invite === that.address){
                that.$notification.open({
                  message: 'warning',
                  description:
                    this.$t('inviterNotSelf'),
                });
                return
              }
              console.log(that.invite)
              await PerSaleObj.methods.bondInvite(that.invite).send({from: that.address})
              that.getInvited(that.address)
            },
        });
      }
    },

    // 购买
    async buyNow() {
      const inputBuy = Number(this.inputBuy);
      const balanceof = Number(this.balanceof);


      
      if(inputBuy<0.01){
        this.$message.warning(this.$t('warningValue5'));
      }else if(inputBuy>50){
        this.$message.warning(this.$t('warningValue50'));
      }else if(inputBuy>balanceof){
        this.$message.warning(this.$t('warningBalanceOf'));
      }else{
        await PerSaleObj.methods.buy().send({from: this.address, value: web3.utils.toWei(this.inputBuy+'')})
        this.getBalance(this.address)
      }
    },
    // MAX function
    handleMax(){
      const balanceof = Number(this.balanceof);
      const userLockProp = Number(this.userLockProp);
      const inputMax = new this.$BigNumber(50).minus(new this.$BigNumber(userLockProp)).toNumber();
      // console.log(inputMax,'inputMax')
      if(inputMax<=balanceof){
        this.inputBuy = inputMax
      }else{
        this.inputBuy = formatDecimal(balanceof,0)-0
      }
    },
    // save route query address
    getRouteInvited(){
      const isRoueInvited = sessionStorage.getItem("isRoueInvited")
      if(isRoueInvited === 'undefined' || !isRoueInvited){
        sessionStorage.setItem("isRoueInvited",this.$route.query.address)
      }else{
        sessionStorage.getItem("isRoueInvited")
      }
    },
  },
};
</script>

<style scoped lang="less">

/deep/ .ant-input-number {
  flex: 1;
  border-color: transparent;
  
}
/deep/ .ant-input-number:hover {
  border-color: transparent;

}
/deep/ .ant-input-number-focused{
  box-shadow: 0 0 0 2px transparent;
}
/deep/ .ant-input-number:focus {
  box-shadow: 0 0 0 2px transparent;
  border-color: transparent;
}
/deep/ .ant-input-number-handler-wrap{
  display: none;
}
.bgColor {
  background-color: gray!important;;
}
.warp {
  width: 100%;
  .raised {
    width: 30%;
    margin: 0 auto;
    .sound {
      width: 55%;
      padding: 10px 0;
      background-color: #fff;
      font-size: 1rem;
      margin: 0 auto;
      text-align: center;
      border-radius: 20px;
      box-shadow: 0 2px 4px rgb(139, 138, 138);
      //   white-space: nowrap;
      color: #000;
      margin-bottom: 5px;
      i{
        margin-right: 4px;
      }
    }
    .carousel {
      width: 80%;
      display: flex;
      justify-content: space-evenly;
      padding: 15px 0;
      background-color: #fff;
      font-size: 1rem;
      margin: 0 auto;
      text-align: center;
      border-radius: 20px;
      box-shadow: 0 2px 4px rgb(139, 138, 138);
      font-weight: 700;
      span:nth-child(1) {
        color: rgb(110, 110, 255);
        margin-right: 25px;
      }
      span:nth-child(2) {
        color: #000;
      }
      /deep/ .slick-dots-left {
        display: none !important;
      }
      //   white-space: nowrap;
    }
  }
  .buy {
    width: 60%;
    margin: 30px auto 40px;
    padding: 50px 30px 50px 60px;
    border-radius: 20px;
    box-shadow: 0 2px 5px rgb(100, 100, 100);
    .buy-left {
      ul li {
        color: #000;
        margin-bottom: 30px;
        p {
          line-height: 30px;
          font-size: 16px;
        }
        strong {
          font-size: 16px;
        }
        &:last-child {
          display: flex;
          div {
            margin-right: 20px;
          }
        }
      }
    }
  }
  .buy-right {
    padding: 10px;
    h3 {
      color: #000;
      font-weight: 700;
    }
    .inp {
      color: #000;
      width: 100%;
      position: relative;
      margin-top: 20px;
      padding: 10px 5px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      input {
        outline: none;
        border: none;
        font-size: 1rem;
        
      }
      button {
        position: absolute;
        right: 15px;
        border: none;
        font-size: 1rem;
        padding: 0;
        flex: 1;
      }
      button:hover {
          color: #000;
        }
    }
    .balance {
      font-size: 0.8rem;
      color: #000;
      text-align: right;
      p {
        line-height: 26px;
        font-weight: 700;
      }
    }
    .buy-now {
      width: 100%;
      margin: 20px auto;
      // text-align: center;
      padding: 13px 0;
    }
    .login {
      width: 100%;
      p {
        color: #000;
        font-weight: 700;
        display: flex;
        align-items: center;
        margin-bottom: 5px !important;
        em {
          word-break: break-all;
        }
        i {
          font-size: 1.3rem;
          margin-right: 5px;
        }
      }
      div {
        text-align: right;
        p {
          margin-top: 10px;
          display: inherit;
          color: #000;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .warp {
    width: 100%;
  .raised {
    width: 100%;
    margin: 0 auto;
    .sound {
      width: 55%;
      padding: 10px 0;
      background-color: #fff;
      font-size: 1rem;
      margin: 0 auto;
      text-align: center;
      border-radius: 20px;
      box-shadow: 0 2px 4px rgb(139, 138, 138);
      //   white-space: nowrap;
      color: #000;
      margin-bottom: 5px;
    }
    .carousel {
      width: 80%;
      display: flex;
      justify-content: space-evenly;
      padding: 15px 0;
      background-color: #fff;
      font-size: 1rem;
      margin: 0 auto;
      text-align: center;
      border-radius: 20px;
      box-shadow: 0 2px 4px rgb(139, 138, 138);
      font-weight: 700;
      span:nth-child(1) {
        color: rgb(110, 110, 255);
        margin-right: 25px;
      }
      span:nth-child(2) {
        color: #000;
      }
      /deep/ .slick-dots-left {
        display: none !important;
      }
      //   white-space: nowrap;
    }
  }
    .buy {
      width: 100%;
      margin: 30px auto 40px;
      padding: 20px 30px;
      border-radius: 20px;
      box-shadow: 0 2px 5px rgb(100, 100, 100);
      .buy-left {
        ul li {
          color: #000;
          margin-bottom: 30px;
          p {
            line-height: 30px;
            font-size: 16px;
          }
          strong {
            font-size: 16px;
          }
          &:last-child {
            display: flex;
            div {
              margin-right: 20px;
            }
          }
        }
      }
    }
    .buy-right {
      padding: 10px;
      h3 {
        color: #000;
        font-weight: 700;
      }
      .inp {
        width: 100%;
        position: relative;
        margin-top: 20px;
        padding: 10px 5px;
        border-radius: 10px;
        input {
          outline: none;
          border: none;
          font-size: 1.2rem;
        }
        button {
          position: absolute;
          right: 15px;
          border: none;
          font-size: 1.2rem;
          padding: 0;
        }
      }
      .balance {
        font-size: 1rem;
        color: #000;
        text-align: right;
        p {
          line-height: 26px;
          font-weight: 700;
        }
      }
      .buy-now {
        width: 100%;
        margin: 20px auto;
        // text-align: center;
        padding: 13px 0;
        font-size: 1.2rem;
        i {
          margin-right: 5px;
        }
      }
      .login {
        width: 100%;
        p {
          color: #000;
          font-weight: 700;
          display: flex;
          align-items: center;
          margin-bottom: 5px !important;
          em {
            word-break: break-all;
          }
          i {
            font-size: 1.5rem;
            margin-right: 5px;
          }
        }
        div {
          text-align: right;
          p {
            margin-top: 10px;
            display: inherit;
            color: #000;
          }
        }
      }
    }
  }
}
</style>
