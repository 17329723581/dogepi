<template>
  <div class="warp">
    <a-row type="flex" justify="space-between">
      <a-col :md="14" :xs="24" class="warp-left">
        <a-tabs type="card">
          <a-tab-pane key="1" :tab="pledge">
            <div class="tabs-down">
              <div class="tabs-down-l">
                <div class="token_icon">
                  <img src="@/assets/ture.png" alt="" />
                  <!-- <img src="@/assets/doge-icon.png" alt="" /> -->
                </div>
                
                <a-select default-value="DOGI" @change="handleChange" style="width: 100px">
                  <a-select-option value="SPACEPI"> SPACEPI </a-select-option>
                  <a-select-option value="DOGI"> DOGI </a-select-option>
                </a-select>
              </div>
              <div class="tabs-down-r">
                <p>
                  <span>{{ this.$t("pledgeAPY") }}：</span>
                  <span>35.18%</span>
                </p>
              </div>
            </div>
            <div class="tabs-inp">
              <input type="text" v-model="inputPledge"/>
              <button @click="handleMax('pledge')">{{ this.$t("pl_maxNum") }}</button>
            </div>
            <div class="tab-num">
              <p>{{ this.$t("pledgeNum") }}：<span>{{formatDecimal(balanceof,0)}}</span> {{selectValue}}</p>
              <template v-if="!address">
                <button @click="connect">{{ $t("login") }}</button>
              </template>
              <template v-else-if="isApprove">
                <button @click="stakePledge">{{ this.$t("pledge") }}</button>
              </template>
              <template v-else>
                <button @click="handleApprove">{{ this.$t("approve") }}</button>
              </template>
              <p>
                {{ this.$t("buySpace") }} <img src="@/assets/go.png" alt="" />
              </p>
              <a-button type="primary" @click="logout">退出登录</a-button>
            </div>
          </a-tab-pane>
          <!-- 赎回 -->
          <a-tab-pane key="2" :tab="redeem">
            <div class="tabs-down tabs-down2">
              <div class="tabs-down-l">

                <div class="token_icon">
                  <img src="@/assets/ture.png" alt="" />
                  <!-- <img src="@/assets/doge-icon.png" alt="" /> -->
                </div>

                <a-select default-value="DOGI" style="width: 100px">
                  <a-select-option value="SPACEPI"> SpacePi </a-select-option>
                  <a-select-option value="DOGI"> DOGI </a-select-option>
                </a-select>
              </div>
              <div class="tabs-down-r">
                <p>
                  <span>{{ this.$t("pledgeAPY") }}：</span>
                  <span>35.18%</span>
                </p>
              </div>
            </div>
            <div class="tabs-inp">
              <input type="text" v-model="inputRedeem"/>
              <button @click="handleMax('redeem')">{{ this.$t("pl_maxNum") }}</button>
            </div>
            <div class="tab-num">
              <p>{{ this.$t("myRedeem") }}：<span>{{myPledge}}</span> {{selectValue}}</p>
              <template v-if="!address">
                <button @click="connect">{{ $t("login") }}</button>
              </template>
              <template v-else-if="isApprove">
                <button @click="redemption">{{ this.$t("redeem") }}</button>
              </template>
              <template v-else>
                <button @click="handleApprove">{{ this.$t("approve") }}</button>
              </template>
              <p>
                {{ this.$t("buySpace") }} <img src="@/assets/go.png" alt="" />
              </p>
              
            </div>
          </a-tab-pane>
        </a-tabs>
      </a-col>
      <a-col :md="9" :xs="24" class="warp-right">
        <div class="warp-right-top">
          <p>
            <img src="@/assets/ture.png" alt="" />{{ this.$t("inviteNum") }}
          </p>
          <p>{{InviteListProp.length}}</p>
        </div>
        <div class="warp-right-data">
          <div>
            <p>{{ this.$t("pl_my1") }}</p>
            <p>{{totalStake}}</p>
          </div>
          <div>
            <p>{{ this.$t("pl_my2") }}</p>
            <p>{{groupTotalPledge}}</p>
          </div>
        </div>
        <div class="warp-right-data">
          <div>
            <p>{{ this.$t("pl_my3") }}</p>
            <p>{{myPledge}}</p>
          </div>
          <div>
            <p>{{ this.$t("pl_my4") }}</p>
            <p>{{myFight}}</p>
          </div>
        </div>
        <div class="warp-right-data">
          <div>
            <p>{{ this.$t("pl_my5") }}</p>
            <p>{{myReward}}</p>
          </div>
          <div>
            <button @click="withdraw">{{ this.$t("get") }}</button>
          </div>
        </div>
        <div class="warp-right-link">
          <p>{{ this.$t("myLink") }}</p>
        <div class="fle align_middle">
          <!-- <p class="link fle4">{{ storeInviteLink[1] }}</p>
          <span class="copy fle align_middle fle1" v-clipboard:copy="storeInviteLink[0]" v-clipboard:success="onCopy">
            <a-icon type="copy" />{{ this.$t("copy") }}</span> -->
        </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>

import {abiObject, getAbi, web3, formatDecimal} from 'utils/common'
import { mapActions, mapMutations, mapState } from 'vuex'
// const {contractObject:SpacePiToken} = getAbi(abiObject.spacePiAbi)
const {contractObject:DogiToken} = getAbi(abiObject.DogiAbi)
const {contractObject:InviteObj} = getAbi(abiObject.InviteAbi)
const {contractObject:StakePoolObj,address: StakePoolAddress} = getAbi(abiObject.StakePoolAbi)
export default {
  data() {
    return {
      pledge: this.$t("pledge"),
      redeem: this.$t("redeem"),
      selectValue: 'DOGI',
      decimals: 0,
      token: DogiToken,
      formatDecimal: formatDecimal,
      balanceof: 0,
      inputPledge: 0,
      inputRedeem: 0,
      myPledge: 0,
      myFight: 0,
      myReward: 0,
      totalStake: 0,
      isApprove: false,
      groupTotalPledge: 0,
      timer: 0,
      // 默认地址
      initalAddress: '',
    };
  },
  props: {
    InviteList: {
      type: Array,
      default: ()=>{
        return []
      }
    }
  },
  computed: {
    ...mapState(["address","tokenDecimals","isInvitedPledge"]),
    InviteListProp() {
      return this.InviteList
    },
    // 邀请人
    invite() {
      const isInvited = sessionStorage.getItem("isRoueInvited");
      if(isInvited !== 'undefined'){
        return isInvited
      }else{
        return this.initalAddress
      }
    },
  },
  watch: {
    InviteListProp: {
      handler(newVal, oldVal) {
        this.totalGroupPledge(newVal)
      },
      immediate: true,
    },
    address: {
      handler(newVal, oldVal) {
        if(this.isInvitedPledge){
          if( newVal !== '' && !this.isInvitedPledge["isInvited"]){
            this.bondInvite()
          }
        }
        if(newVal !== ''){
          this.reload()
          this.$emit('emitMyInvitee')
          // create share URL
          this.updateInvitationPledgeLink(newVal)
          this.getInviteInfo(newVal)
        }
      },
      immediate: true,
    },
    tokenDecimals: {
      handler(newVal, oldVal) {
        console.log(newVal)
        newVal >0 &&this.getTokenDecimals()
      },
      immediate: true,
    },
  },
  components: {},
  created() {
    this.getOwner()
  },
  mounted() {},
  methods: {
    ...mapMutations(["updateIsInvitedPledge","editAddress","updateInvitationPledgeLink"]),
    ...mapActions(["getInviteInfo"]),
    reload(){
      this.getTokenDecimals()
      this.getStakeInfo()
      this.getWithdrawableReward()
      // this.updateInvitationLink(this.address)
      this.getApprove()
      this.getTotalStake()
      this.getBalanceOf()
    },
    // 更改代币精度
    getTokenDecimals(){
      if(this.selectValue === 'SPACEPI'){
        this.decimals = 10**this.tokenDecimals;
      }else{
        this.decimals = 10**18;
      }
    },

    // 更换代币合约对象
    handleChange(value) {
      this.selectValue = value
      switch (value) {
        // case 'SPACEPI':
        //   this.token = SpacePiToken
        //   break;
        case 'DOGI':
          this.token = DogiToken
          break;
      }
      this.reload()
    },
    // 账户余额
    getBalanceOf(){
      this.token.methods.balanceOf(this.address).call().then((result)=>{
          const balanceOf = (new this.$BigNumber(result).dividedBy(new this.$BigNumber(this.decimals))).toFixed();
          this.balanceof = balanceOf
      })
    },
    // 质押信息
    async getStakeInfo(){
      const info = await StakePoolObj.methods.getStakeInfo(this.address).call();
      const myPledge = (new this.$BigNumber(info[0]).dividedBy(new this.$BigNumber(this.decimals))).toFixed();
      const myFight = (new this.$BigNumber(info[1]).dividedBy(new this.$BigNumber(this.decimals))).toFixed();
      this.myPledge = myPledge;
      this.myFight = myFight;

    },
    //获取我的奖励
    async getWithdrawableReward(){
      clearTimeout(this.timer)
      const reward = await StakePoolObj.methods.getWithdrawableReward(this.address).call();
      const Reward = (new this.$BigNumber(reward).dividedBy(new this.$BigNumber(this.decimals))).toFixed();
      // console.log(reward,Reward)
      this.myReward = Reward;
      this.timer = setTimeout(()=>{
        this.getWithdrawableReward()
      },10000)
    },
    // 质押
    async stakePledge(){
      if(this.inputPledge>0){
        const paramsDecimals = (new this.$BigNumber(this.inputPledge).multipliedBy(new this.$BigNumber(this.decimals))).toFixed();
        await StakePoolObj.methods.stakeAdd(paramsDecimals).send({from: this.address})
        this.getBalanceOf()
        this.getStakeInfo()
        this.getTotalStake()
        this.getWithdrawableReward()
      }else{
        this.$message.warning(this.$t('warningValue0'));
      }
    },
    // 赎回
    async redemption(){
      
      if(this.inputRedeem>0){
        const paramsDecimals = (new this.$BigNumber(this.inputRedeem).multipliedBy(new this.$BigNumber(this.decimals))).toFixed();
        await StakePoolObj.methods.stakeSub(paramsDecimals).send({from: this.address})
        this.getBalanceOf()
        this.getStakeInfo()
        this.getTotalStake()
        this.getWithdrawableReward()
      }else{
        this.$message.warning(this.$t('warningValue0'));
      }
    },
    // 最大值
    handleMax(params){
      if(params === 'pledge'){
        this.inputPledge = formatDecimal(this.balanceof,0);
      }else{
        this.inputRedeem = this.myPledge;
      }
    },
    // 地址复制
    onCopy(e) {
      this.$message.success(this.$t('copySuccess'));
    },
    //获取总质押
    async getTotalStake(){
      const totalStake= await StakePoolObj.methods.totalStake().call();
      // console.log(this.decimals)
      // console.log(totalStake)
      const BGtotalStake = (new this.$BigNumber(totalStake).dividedBy(new this.$BigNumber(this.decimals))).toFixed();
      this.totalStake = BGtotalStake
    },
    // 获取授权额度
    async getApprove(){
      
      const isApprove = await this.token.methods.allowance(this.address,StakePoolAddress).call()
      // console.log(isApprove)
      Number(isApprove)>0?this.isApprove = true: this.isApprove = false
    },
    // 授权
    async handleApprove(){
      const paramsDecimals = (new this.$BigNumber(1000000000000000).multipliedBy(new this.$BigNumber(this.decimals))).toFixed();
      console.log(paramsDecimals)
      await this.token.methods.approve(StakePoolAddress, paramsDecimals).send({from: this.address})
      this.getApprove()
    },
    // 领取奖励
    async withdraw(){
      await StakePoolObj.methods.withdraw().send({from: this.address})
      this.getStakeInfo()
      this.getWithdrawableReward()
    },
    async totalGroupPledge(params){
      let groupTotalPledge = new this.$BigNumber(0);
      for(let i=0;i<params.length;i++){
        const info = await StakePoolObj.methods.getStakeInfo(params[i]).call();
        let pledge = (new this.$BigNumber(info[0]).dividedBy(new this.$BigNumber(this.decimals)));
        groupTotalPledge = groupTotalPledge.plus(pledge)
      }
      // this.groupTotalPledge;
      this.groupTotalPledge = groupTotalPledge.toNumber()
      // console.log(groupTotalPledge.toNumber())
    },
    // 登录
    connect() {
      // console.log('connect')
      // eth_requestAccounts  链接钱包
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then(async (accounts) => {
          // add address for store
          this.editAddress(accounts[0])
          // 获取邀请人
          const InviteInfo = await InviteObj.methods.getInviteInfo(this.address).call();
          const {isInvited,inviter} = InviteInfo;
          // Action function
          this.updateIsInvitedPledge({inviter,isInvited})
          sessionStorage.setItem("isInvitedPledge",JSON.stringify({inviter,isInvited}))
          // create share URL
          this.updateInvitationPledgeLink(accounts[0])

          this.$message.success(this.$t('connectSuccess'));
          console.log(this.isInvitedPledge['isInvited'])
          if(!this.isInvitedPledge['isInvited']){
            
            this.bondInvite()
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
   // 绑定邀请人
    bondInvite() {
      const nowTime = new Date().getTime();
      if(nowTime>this.deadline){return}
      const h = this.$createElement;
      const invite = this.invite
      const that = this;
        this.$info({
          title: this.$t("comfirmInvite"),
          content: h("div", {}, [h("p", `${this.$t("inviter")}：${invite}`)]),
          async onOk(e) {
            if (invite === that.address) {
              that.$notification.open({
                message: "warning",
                description: that.$t("inviterNotSelf"),
              });
              return;
            }
            console.log(invite)
            InviteObj.methods.bondInvite(invite).send({from: that.address})
            that.getInviteInfo(that.address)
          },
        });
      
    },
    async getOwner() {
      const initalAddress = await StakePoolObj.methods.owner().call();
      this.initalAddress = initalAddress
    },
    // 退出登录
    logout() {
      sessionStorage.removeItem("accountAddress");
      sessionStorage.removeItem("isInvited");
      sessionStorage.removeItem("vuex");
      window.location.reload()
    },
  },
  destroyed () {
    clearTimeout(this.timer)
  }
};
</script>

<style scoped lang="less">
.copy{
  cursor: pointer;
  font-size: 1rem;
}
.token_icon {
  display: inline-block;
  width: 30px;
  height: 30px;
  img {
    width: 100%;
    height: auto;
  }
}
.warp {
  width: 70%;
  padding: 80px 0%;
  margin: 0 auto;
  .warp-left {
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    padding-bottom: 20px;
    .tabs-down {
      width: 60%;
      padding: 10px 0;
      margin: 0 auto;
      color: #000;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      /deep/ .ant-select-selection {
        color: #000;
        border: none;
        box-shadow: inherit;
      }
      /deep/ .ant-select-selection:active,
      /deep/ .ant-select-selection:focus {
        color: #000;
        border: none;
        border-color: #fff;
        outline: none;
        box-shadow: inherit;
      }
    }
    .tabs-down-r {
      span:nth-child(2) {
        color: #290659;
        font-weight: 700;
      }
    }
    .tabs-inp {
      width: 60%;
      margin: 20px auto;
      border: 1px solid #ccc;
      overflow: hidden;
      padding: 10px 0 10px 10px;
      border-radius: 10px;
      input {
        width: 60%;
        outline: none;
        border: none;
        color: #000;
      }
      button {
        width: 30%;
        padding: 0;
        float: right;
      }
      button:hover {
        color: #000;
      }
    }
    .tab-num {
      width: 60%;
      margin: 20px auto;
      overflow: hidden;
      padding: 10px 0 10px 10px;
      text-align: center;
      color: #333;
      button {
        background-color: #5a52a8;
        color: #fff;
        border-radius: 10px;
        margin: 30px 0;
      }
      p:last-child {
        cursor: pointer;
      }
    }
    // .tabs-down2 {
    //   padding: 40px 0;
    // }
  }
  .warp-right {
    background-color: #fff;
    border-radius: 10px;
    padding: 30px 20px 20px;
    overflow: hidden;
    .warp-right-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
      p {
        font-weight: 700;
        font-size: 1.3rem;
      }
    }
    .warp-right-data {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;
      P:nth-child(1) {
        font-size: 0.9rem;
        color: #000;
      }
      P:nth-child(2) {
        font-size: 1rem;
        color: #000;
      }
      div:nth-child(2) {
        p {
          font-size: 0.9rem;
          text-align: right;
        }
        P:nth-child(2) {
          font-size: 1rem;
          color: #000;
        }
      }
      button {
        padding: 10px 15px;
        color: #fff;
        background-color: #5a52a8;
        border-radius: 10px;
      }
    }
    .warp-right-link {
      padding-top: 20px;
      p {
        font-size: 1.3rem;
      }
      .link {
        font-size: 1.11rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
/deep/ .ant-tabs-nav {
  width: 100%;
}
/deep/ .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab {
  width: 50%;
  text-align: center;
  border: none;
  color: #000;
  margin-right: 0;
}
/deep/ .ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active {
  background-color: #fcb44b;
}

@media screen and (max-width: 768px) {
  .warp {
    width: 100%;
    padding: 50px 0%;
    .warp-left {
      background-color: #fff;
      border-radius: 10px 10px 0 0;
      overflow: hidden;
      padding-bottom: 20px;
      .tabs-down {
        width: 100%;
        padding: 10px 0;
        margin: 0 auto;
        color: #000;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        /deep/ .ant-select-selection {
          color: #000;
          border: none;
          box-shadow: inherit;
        }
        /deep/ .ant-select-selection:active,
        /deep/ .ant-select-selection:focus {
          color: #000;
          border: none;
          border-color: #fff;
          outline: none;
          box-shadow: inherit;
        }
      }
      .tabs-down-r {
        span:nth-child(2) {
          color: #290659;
          font-weight: 700;
        }
      }
      .tabs-inp {
        width: 80%;
        margin: 20px auto;
        border: 1px solid #ccc;
        overflow: hidden;
        padding: 10px 0 10px 10px;
        input {
          width: 60%;
          outline: none;
          border: none;
          color: #000;
        }
        button {
          width: 30%;
          padding: 0;
          float: right;
        }
        button:hover {
          color: #000;
        }
      }
      .tab-num {
        width: 60%;
        margin: 0px auto;
        overflow: hidden;
        padding: 10px 0 10px 10px;
        text-align: center;
        color: #333;
        button {
          background-color: #5a52a8;
          color: #fff;
          border-radius: 10px;
          margin: 30px 0;
        }
        p:last-child {
          cursor: pointer;
        }
      }
      .tabs-down2 {
        padding: 20px 0;
      }
    }
    .warp-right {
      background-color: #fff;
      border-radius: 0 0 10px 10px;
      padding: 30px 20px 20px;
      overflow: hidden;
      .warp-right-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
        p {
          font-weight: 700;
          font-size: 1.3rem;
        }
        P:nth-child(2) {
          font-size: 1.8rem;
        }
      }
      .warp-right-data {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0;
        P:nth-child(1) {
          font-size: 1rem;
          color: #000;
        }
        P:nth-child(2) {
          font-size: 1.2rem;
          font-weight: 700;
          color: #000;
        }
        div:nth-child(2) {
          p {
            text-align: right;
          }
        }
        button {
          padding: 10px 15px;
          color: #fff;
          background-color: #5a52a8;
          border-radius: 10px;
        }
      }
      .warp-right-link {
        padding-top: 20px;
        p {
          font-size: 1.3rem;
        }
        .link {
          font-size: 1.11rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
