<template>
  <div class="warp" v-if="isLogin">
    <div class="getpi">
      <div class="title">
        {{ this.$t("ye_title") }}
        {{ thousands(currentBlock)}}
      </div>
      <div class="box">
        <div class="box-content" v-for="(item,index) of stages" :key="item[1]">
          <div>
            <p>{{ $t("auxiliary") }}{{index+1}}{{ $t("tage") }}</p>
            <p class="num">{{item[2]}}%</p>
            <p>{{item[0]}}</p>
          </div>
          <!-- :class="{'bgColor': Number(currentBlock)<Number(item[1])}" -->
          <button
          :disabled="blockReceive(item[1],item[0]) !== $t('ye_get5')"
          
          @click="getStageToken(index+1)">{{ blockReceive(item[1],item[0]) }}</button>
          <p>{{ thousands(item[1]) }}BK({{ $t("estimate") }},{{ getStageUnlockTime(item[1]) }})</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {abiObject, getAbi, web3, thousands} from 'utils/common'
import { mapState } from 'vuex';
const {contractObject:PerSaleObj} = getAbi(abiObject.PerSaleAbi)

export default {
  data() {
    return {
      currentBlock: 0,
      stage: [],
      stages: [],
      timer: null,
      isLogin: false,
      thousands: thousands
    };
  },
  props: {},
  computed: {
    ...mapState(["address","tokenDecimals","deadline"]),
    stageandAddress(){
      return [this.address,this.stage]
    },
  },
  watch: {
    address:  {
      handler(newVal, oldVal) {
        if(newVal !== '' ){
          this.isLogin = true
        }else{
          this.isLogin = false
        }
      },
      immediate: true,
    },
    stageandAddress:  {
      handler(newVal, oldVal) {
        // console.log(newVal[0],newVal[1])
        if( newVal[0] !== '' && newVal[1].length>0){
          this.getResult(newVal[0])
        }
      },
      immediate: true,
    },
  },
  components: {},
  created() {
    this.getStage()
    this.getCurrentBlock()
  },
  mounted() {},
  methods: {
    // 估计区块解锁时间
    // (stage-this.currentBlock)*3*1000
    getStageUnlockTime(stage){
      // console.log(stage,this.currentBlock)
      // if(this.currentBlock>0){
      //   const Distance = new this.$BigNumber(Number(stage)).minus(new this.$BigNumber(this.currentBlock));
      //   const distanceTmie = Distance.multipliedBy(new this.$BigNumber(3)).multipliedBy(new this.$BigNumber(1000))
      //   const nowTime = new this.$BigNumber(new Date().getTime());
      //   const estimate = nowTime.plus(distanceTmie).toNumber();
      //   return new Date(estimate).format("MM-dd,yyyy")
      // }
      // console.log(new Date(estimate).format("MM-dd,yyyy"))
      if(this.currentBlock>0){
        const Distance = new this.$BigNumber(this.currentBlock).minus(new this.$BigNumber(Number(stage)));
        // const Distance = new this.$BigNumber(8616736).minus(new this.$BigNumber(7752736));
        if(Distance.toNumber()){
          const distanceTmie = Distance.multipliedBy(new this.$BigNumber(3)).multipliedBy(new this.$BigNumber(1000))
          // const nowTime = new this.$BigNumber(new Date('2021/9/27 19:59:54').getTime());
          const nowTime = new this.$BigNumber(new Date().getTime());
          const estimate = nowTime.minus(distanceTmie).toNumber();
          return new Date(estimate).format("MM-dd,yyyy")
        }
      }



    },
    // 判断按钮状态
    blockReceive(blockNumber,userLock){
      const currentBlock = Number(this.currentBlock); //当前区块
      const partBlockNumber = Number(blockNumber);  // 第N阶段区块
      const partUserLock = Number(userLock);  // 第N阶段token
      const now = new Date().getTime()  // 当前时间
      const deadline = this.deadline  //活动结束时间

      // const currentBlock = 8616736
      // const partUserLock = 1
      // const deadline = 1629379200000

      // 判断活动是否结束，并且区块高度是否到达
      if(now>deadline && currentBlock>=partBlockNumber){
        //判断是否有可领取值
        if(partUserLock>0){
          return this.$t("ye_get5")
        }else{
          return this.$t("ye_get6")
        }
      }else{
          return this.$t("ye_get4")
      } 
      
    },
    // 获取当前区块
    getCurrentBlock(){
      this.timer = setInterval(async() => {
        // console.log('12123')
        this.currentBlock = await web3.eth.getBlockNumber();
      }, 5000);
    },
    //获取区块号,比例
    async getStage () {
      // console.log('qwe')
      const stage = await PerSaleObj.methods.getStage().call();
      // console.log(stage,'stage')
      this.stage = stage.slice(1)
      
    },
    // 获取区块可领取代币
    async getResult (params) {
      PerSaleObj.methods.getUserLock(params).call().then((result) => {
        this.stages=[]
          result.slice(1).forEach((value, index) => {
            // console.log(value,this.tokenDecimals)
                const blockBalanceOf = value/ 10 ** this.tokenDecimals
                this.stages.push([blockBalanceOf,...this.stage[index]])
          })
      })
      // console.log(this.stages,'stages')
    },
    // 阶段代币领取
    async getStageToken(stage) {
      // console.log(stage)
      
      await PerSaleObj.methods.withdrawByStage(Number(stage)).send({from: this.address})
      this.getResult(this.address)
      this.$message.success(this.$t('getSuccess'));
    }
  },
  destroyed () {
    clearTimeout(this.timer)
  }
};
</script>

<style scoped lang="less">
.bgColor {
  background-color: gray!important;
}
.warp {
  width: 100%;
  .getpi {
    width: 100%;
    margin: 50px auto 50px;
    .title {
      margin: 0 auto 0px;
      width: 20%;
      text-align: center;
      padding: 5px 0;
      background-color: #ffd18d;
      font-size: 1rem;
      border-radius: 10px;
    }
    .box {
      width: 90%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px 20px;
      border-radius: 20px;
      .box-content {
        width: 25%;
        text-align: center;
        padding: 10px 20px;
        div {
          background-color: #421e78;
          padding: 10px 20px;
          border-radius: 20px;
          margin-bottom: 18px;
          p:nth-child(1) {
            text-align: left;
          }
          p:nth-child(3) {
            color: #f9b24c;
          }
        }
        p {
          color: #fff;
          margin-bottom: 5px !important;
        }
        .num {
          font-size: 2.3rem;
          color: #f9b24c;
          font-weight: 700;
        }
        .box-money {
          background: url("../../../assets/bg-money.png") no-repeat;
          background-size: cover;
          padding: 20px 0;
          border-radius: 20px;
          img {
            width: 60%;
          }
        }
        button {
          background-color: #f9b24c;
          border: none;
          margin-bottom: 10px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .warp {
    width: 100%;
    .getpi {
      width: 100%;
      margin: 50px auto 0px;
      .title {
        margin: 0 auto 0px;
        width: 60%;
        text-align: center;
        padding: 5px 0;
        background-color: #ffd18d;
        font-size: 1rem;
        border-radius: 10px;
      }
      .box {
        width: 90%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 40px 20px;
        border-radius: 20px;
        .box-content {
          width: 100%;
          text-align: center;
          padding: 10px 20px;
          div {
            background-color: #421e78;
            padding: 10px 20px;
            border-radius: 20px;
            margin-bottom: 18px;
            p:nth-child(1) {
              text-align: left;
            }
            p:nth-child(3) {
              color: #f9b24c;
            }
          }
          p {
            color: #fff;
            margin-bottom: 5px !important;
          }
          .num {
            font-size: 2.3rem;
            color: #f9b24c;
            font-weight: 700;
          }
          .box-money {
            background: url("../../../assets/bg-money.png") no-repeat;
            background-size: cover;
            padding: 20px 0;
            border-radius: 20px;
            img {
              width: 60%;
            }
          }
          button {
            background-color: #f9b24c;
            border: none;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>
