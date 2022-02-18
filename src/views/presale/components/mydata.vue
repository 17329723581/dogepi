<template>
  <div class="warp" v-if="isLogin">
    <div class="warp-top">
      <div>
        <p>{{ this.$t("mypresale_text1") }}</p>
        <p>{{userLock}}</p>
      </div>
      <div>
        <p>{{ this.$t("mypresale_text2") }}</p>
        <p>{{getspacepi}}</p>
      </div>
    </div>
    <!-- <div class="warp-bottom">
      <p>{{ this.$t("myrecord") }}</p>
    </div> -->
  </div>
</template>

<script>
import {abiObject, getAbi} from 'utils/common'
import { mapState } from 'vuex';
const {contractObject:PerSaleObj} = getAbi(abiObject.PerSaleAbi)
export default {
  data() {
    return {
        isLogin: false,
        userLock: 0,
        getspacepi: 0,
    };
  },
  props: {},
  computed: {
    ...mapState(["address","tokenDecimals","storeSwapRatio"])
  },
  watch: {
    address:  {
      handler(newVal, oldVal) {
        if(newVal !== '' ){
          this.getUserLock()
          this.isLogin = true
        }else{
          this.isLogin = false
        }
      },
      immediate: true,
    },
  },
  components: {},
  created() {
      // console.log(this.$store.state.address,this.isLogin);
  },
  mounted() {},
  methods: {
    // 
    async getUserLock(){
      const userLock = await PerSaleObj.methods.getUserLock(this.address).call()
      // console.log(userLock,'userLock')
      let total = new this.$BigNumber(userLock[0])
      let get_token = total.toFixed(0) / 10 ** Number(this.tokenDecimals)
      // console.log(get_token)
      this.getspacepi = get_token
      this.userLock = Number(get_token) / Number(this.storeSwapRatio)
      console.log(get_token,this.storeSwapRatio,userLock)
      this.$emit('handleUserLock',this.userLock)
    }
  },
};
</script>

<style scoped lang="less">
.warp {
  width: 100%;
  color: #000;
  .warp-top {
    width: 70%;
    margin: 0 auto 30px;
    padding: 20px 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    background-color: #fff;
    div {
      width: 30%;
      text-align: center;
      p {
        &:first-child {
          font-size: 1.2rem;
          font-weight: 700;
        }
        &:last-child {
          font-size: 2rem;
          font-weight: 700;
        }
      }
    }
  }
  .warp-bottom {
    width: 70%;
    min-height: 100px;
    margin: 0 auto 30px;
    padding: 20px 30px;
    border-radius: 20px;
    border: 1px solid #ccc;
    background-color: #fff;
    p {
      &:first-child {
        font-size: 1.2rem;
        font-weight: 700;
      }
    }
  }
}

@media screen and (max-width: 768px){
  .warp {
  width: 100%;
  color: #000;
  margin-top: 30px;
  .warp-top {
    width: 100%;
    margin: 0 auto 30px;
    padding: 20px 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    background-color: #fff;
    div {
      width: 40%;
      text-align: center;
      p {
        &:first-child {
          font-size: 1.2rem;
          font-weight: 700;
        }
        &:last-child {
          font-size: 2rem;
          font-weight: 700;
        }
      }
    }
  }
  .warp-bottom {
    width: 100%;
    min-height: 100px;
    margin: 0 auto 30px;
    padding: 20px 30px;
    border-radius: 20px;
    border: 1px solid #ccc;
    background-color: #fff;
    p {
      &:first-child {
        font-size: 1.2rem;
        font-weight: 700;
      }
    }
  }
}
}
</style>
