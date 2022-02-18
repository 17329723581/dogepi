import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
import persistedState from 'vuex-persistedstate'
import {abiObject, getAbi, web3} from 'utils/common'
import axios from "axios"

Vue.use(Vuex)

const {contractObject:PerSaleObj} = getAbi(abiObject.PerSaleAbi)
const {contractObject:spacePiObj} = getAbi(abiObject.spacePiAbi)

export default new Vuex.Store({
  plugins: [persistedState({ storage: window.sessionStorage })],
  state: {
    address: sessionStorage.getItem("accountAddress") || '',
    lang: Cookies.get("lang") || "en-US",
    isLangAlive: true,
    isInvited: JSON.parse(sessionStorage.getItem("isInvited")) || '',
    isInvitedPledge: JSON.parse(sessionStorage.getItem("isInvitedPledge")) || '',
    isRoueInvited: '',
    tokenDecimals: 0,
    storeSwapRatio: 0,
    balanceof: 0,
    initalAddress: '',
    // 我的spacepi
    storeMyTotalspacepi: 0,
    // 邀请奖励
    storeInviteRewards: 0,
    //邀请列表
    storeInviteList: [],
    storeInvitePledgeLink: [],
    // 邀请链接
    storeInviteLink: [],
    // 结束时间
    deadline:1647230400000,//9999999999999
    //百分比
    percentage:0,

  },
  mutations: {
    
    editAddress(state,val) {
      state.address = val
      sessionStorage.setItem("accountAddress", val);
    },
    updateLang(state,params){
      state.lang = params
    },
    updateIsLangAlive(state, value) {
      state.isLangAlive = value;
    },
    updateIsInvited(state,value){
      state.isInvited = value;
    },
    updateIsInvitedPledge(state,value){
      state.isInvitedPledge = value;
    },
    updateIsRoueInvited(state,value){
      state.isRoueInvited = value;
    },
    updateDecimal(state,value){
      state.tokenDecimals = value;
    },
    updateStoreSwapRatio(state,value){
      // //console.log('storeSwapRatio',value);
      state.storeSwapRatio = value;
    },
    updateBalanceof(state,value){
      state.balanceof = value;
    },
    updateMyspacepi(state,value){
      state.storeMyTotalspacepi = value;
    },
    updateEndTimenew(state,value){
      axios
      .get("https://admin.pcoindex.com/api/progress")
      .then(function(response){
        state.deadline = response.data.deadline;
        state.percentage = response.data.number;
      })
      .catch(function(error) {
        //     // 请求失败处理
      });
     },
    updateInviteList(state,value){
      state.storeInviteList = value;
    },
    updateInviteRewards(state,value){
      state.storeInviteRewards = value;
    },
    updateInvitationLink(state,params) {
      let location = window.location.host;
      //console.log(state.isInvited)
        const invitationLink = `https://${location}/#/presale?address=${params}&isInvited=${Number(state.isInvited[1])}`;
        const viewLink = invitationLink.slice(0, 15) +" .... " +invitationLink.slice(68);
        state.storeInviteLink = [invitationLink,viewLink]
    },
    updateInvitationPledgeLink(state,params) {
      let location = window.location.host;
      //console.log(state.isInvitedPledge,'isInvited')
        const invitationLink = `https://${location}/#/presale?address=${params}&isInvited=${Number(state.isInvitedPledge['isInvited'])}`;
        const viewLink = invitationLink.slice(0, 15) +" .... " +invitationLink.slice(68);
        state.storeInvitePledgeLink = [invitationLink,viewLink]
    },
    updateInitalAddress(state,params){
      // //console.log(updateInitalAddress,'updateInitalAddress')
      state.initalAddress = params
    }
    
  },
  actions: {
    async getInviteInfo({commit},params){
      const InviteInfo = await InviteObj.methods.getInviteInfo(params).call();
      const {isInvited,inviter} = InviteInfo;
      // Action function
      commit('updateIsInvitedPledge',{inviter,isInvited})
      sessionStorage.setItem("isInvitedPledge",JSON.stringify({inviter,isInvited}))
    },
    // 获取邀请人
    async getInvited({commit},params){
      const isInvited = await PerSaleObj.methods.isInvited(params).call()
      // console.log('isInvited',isInvited)
      commit('updateIsInvited', isInvited)
      sessionStorage.setItem("isInvited",JSON.stringify(isInvited))
      // history.go(0);
      // Vue.prototype.LangReload()
    },
    // 获取代币小数位
    async getdecimal({commit,dispatch}){
      const tokenDecimals = await spacePiObj.methods.decimals().call();
      commit('updateDecimal', tokenDecimals)
      dispatch('getPerHTPrice', tokenDecimals)
      //结束时间
      const endTime = await PerSaleObj.methods.endTime().call()
      // //console.log('endTime',endTime)
      commit('updateEndTimenew', endTime*1000)
    },
    // 获取 spacepi 价格
    async getPerHTPrice({commit},tokenDecimals) {
      const price = await PerSaleObj.methods.perHTPrice().call()
      const swapRatio = price / 10 ** tokenDecimals
      this.swapRatio = swapRatio
      // this.swapRatio = 10000000000
      commit('updateStoreSwapRatio',swapRatio)
    },
    // 获取账户余额
    async getBalance({commit},params){
      const balanceof = await web3.eth.getBalance(params);
      commit('updateBalanceof', web3.utils.fromWei(balanceof))
    },
    //结束时间
    // async getEndTime({commit}){
    //   const endTime = await PerSaleObj.methods.endTime().call()
    //   //console.log('endTime',endTime)
    //   commit('updateEndTime', endTime*1000)
    // },
    async myInvites({commit,state},params) {
      const InviteAirdropAmount = await PerSaleObj.methods.perInviteAirdropAmount().call()
      const perInviteAirdropAmount = InviteAirdropAmount / 10 ** state.tokenDecimals
      const inviteList = await PerSaleObj.methods.getInvitee(params).call()
      //console.log(perInviteAirdropAmount,'perInviteAirdropAmount')
      // 我的邀请
      commit('updateInviteList',inviteList)
      // 我的spacepi
      const myspacepi = (inviteList.length+1)*perInviteAirdropAmount
      commit('updateMyspacepi',myspacepi)
      // 邀请奖励
      const InviteRewards = myspacepi - perInviteAirdropAmount
      // //console.log(InviteRewards)
      commit('updateInviteRewards',InviteRewards)
    },
  },
  modules: {
  }
})
