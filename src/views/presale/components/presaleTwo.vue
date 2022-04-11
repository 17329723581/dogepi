<template>
	<div>
		<div class="section__htb wf-section">
			<div class="container-1440">
				<div class="htb-wrap">
				<div class="htb-hero">
					<div class="htb-left">
					<div class="base-circle-wrap">
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
					</div>
					</div>
					<div class="htb-right">
						<a-row type="flex" class="banner" justify="space-between">
							<a-col :md="12" :xs="24" class="presale-left">
								<div class="left_lu">
									<div class="li">
										<div class="connect"  v-if="!isLogin">
											<button type="button" class="car3-b-button" @click="connect">{{ this.$t("p_r_o_login_bnt") }}</button>
										</div>
										<div class="connect" v-if="isLogin">
											<button type="button" class="car3-b-button"  @click="logout">{{ this.$t("p_r_o_out_bnt") }}</button>
										</div>
										<div class="car-p-t">
											<div class="cont">{{ this.$t("p_t_input")[0] }}</div>
											<div class="cont">{{getspacepi}} {{ this.$t("p_t_input")[1] }}</div>
										</div>
									</div>
								</div>
								<div class="left_lu">
									<div class="li">
										<div class="connect">
											<span class="car-p-title">{{ this.$t("a_top_time_title")}}</span>
											<div class="car-p-height">{{ this.$t("p_t_num")}}</div>
										</div>
									</div>
								</div>
								<div class="left_lu">
									<div class="li">
										<div class="connect-line">
											<div class="line">
												<div class="Progress" :style="'width:'+80+'%'"></div>
											</div>
										</div>
									</div>
								</div>
								<div class="left_lu">
									<div class="li">
										<div class="connect-text">
											The presale has ended, you can now claim your Bdoge for the presale
										</div>
									</div>
								</div>
								<div class="left_lu">
									<div class="li">
										<div class="connect-block-height">
											{{ this.$t("p_t_des3") }} {{ thousands(currentBlock)}}
										</div>
									</div>
								</div>
								<div class="left_lu">
									<div class="li">
										<div class="connect-des">
											{{ this.$t("p_t_des2") }}
										</div>
									</div>
								</div>
								<div class="left_lu" v-if="isLogin">
									<div class="li">
										<div class="connect-lq">
											<button type="button" :class="receive_status==false?'connect-lq-button button-yellow':'connect-lq-button button-grey'"  @click="receive_status==false?getStageToken():''">{{ blockReceive(stages[0][1],stages[0][0]) }}</button>
										</div>
									</div>
								</div>
							</a-col>
						</a-row>
					</div>
				</div>
				</div>
			</div>
		</div>
		<div class="section">
			<div class="container-1440">
				<div class="car3-f">
					<span class="title">
						{{ this.$t("p_r_o_rules_title") }}
					</span>
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
				<div class="htb-wrap">
					<div class="car4">
						<div class="car4-a">
						<div class="car4-a-s">
							<span class="title">{{ this.$t("p_r_o_pre_array")[0]["title"] }}</span>
							<span class="text">{{ userLock }}</span>
						</div>
						</div>
						<div class="car4-b">
						<div class="car4-b-s">
							<span class="title">{{ this.$t("p_r_o_pre_array")[1]["title"] }}</span>
							<span class="text">{{ getspacepi }}</span>
						</div>
						</div>
						<div class="car4-c">
						{{this.$t("p_info") }}
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
	import logo from "./logo.vue";
	import {abiObject,getAbi, web3,thousands} from "utils/common";
	import { mapState, mapActions, mapMutations } from "vuex";
	const {contractObject: PerSaleObj} = getAbi(abiObject.PerSaleAbi)

	export default {
		data() {
			return {
				currentBlock: 0,
				stage: [],
				stages: [],
				timer: null,
				isLogin: false,
				thousands: thousands,
				userLock: 0,
				getspacepi: 0,
				receive_status:false,
			};
		},
		props: {},
		computed: {
			...mapState(["address","isInvited","tokenDecimals","balanceof","storeSwapRatio","deadline",]),
			stageandAddress() {
				return [this.address, this.stage]
			},
		},
		watch: {
			address: {
				handler(newVal, oldVal) {
					if (newVal !== '') {
						this.getUserLock()
						this.isLogin = true
					} else {
						this.isLogin = false
					}
				
				},
				immediate: true,
			},
			stageandAddress: {
				handler(newVal, oldVal) {
					// console.log(newVal[0],newVal[1])
					if (newVal[0] !== '' && newVal[1].length > 0) {
						this.getResult(newVal[0])
					}
				},
				immediate: true,
			},
		},
		components: {
			logo
		},
		created() {
			this.getStage()
			this.getCurrentBlock()
		},
		mounted() {},
		methods: {

   			...mapMutations([ "updateStoreSwapRatio","editAddress", "tokenDecimals","updateIsInvited","updateInvitationLink",]),
    		...mapActions(["login", "getInvited", "myInvites", "getBalance"]),
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
				
				this.$message.success(this.$t('p_sendAdd'));
				setTimeout(()=>{
					window.location.reload();
				},1500);
				// if(!JSON.parse(this.isInvited)[1]){
				// console.log('isInvited[1]',isInvited[1])
				//  console.log('connect',isInvited[1])
				
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
			delCookie () {
				var keys = document.cookie.match(/[^ =;]+(?==)/g)
				if (keys) {
					for (var i = keys.length; i--;) {
					document.cookie = keys[i] + '=0;path=/;expires=' + new Date(0).toUTCString() // 清除当前域名下的,例如：m.ratingdog.cn
					document.cookie = keys[i] + '=0;path=/;domain=' + document.domain + ';expires=' + new Date(0).toUTCString() // 清除当前域名下的，例如 .m.ratingdog.cn
					document.cookie = keys[i] + '=0;path=/;domain=ratingdog.cn;expires=' + new Date(0).toUTCString() // 清除一级域名下的或指定的，例如 .ratingdog.cn
					}
				}
			},
			logout() {
				
				sessionStorage.removeItem("accountAddress");
      			sessionStorage.removeItem("isInvited");
      			sessionStorage.removeItem("vuex");

     			window.location.reload();
			},
			async getUserLock() {
				const userLock = await PerSaleObj.methods.getUserLock(this.address).call()
				//   console.log(userLock,'userLock')
				let total = new this.$BigNumber(userLock[0])
				let get_token = total.toFixed(0) / 10 ** Number(this.tokenDecimals)
				// console.log(get_token)
				this.getspacepi = get_token
				this.userLock = Number(get_token) / Number(this.storeSwapRatio)
			},
			// 估计区块解锁时间
			// (stage-this.currentBlock)*3*1000
			getStageUnlockTime(stage) {
				// console.log(stage,this.currentBlock)
				// if(this.currentBlock>0){
				//   const Distance = new this.$BigNumber(Number(stage)).minus(new this.$BigNumber(this.currentBlock));
				//   const distanceTmie = Distance.multipliedBy(new this.$BigNumber(3)).multipliedBy(new this.$BigNumber(1000))
				//   const nowTime = new this.$BigNumber(new Date().getTime());
				//   const estimate = nowTime.plus(distanceTmie).toNumber();
				//   return new Date(estimate).format("MM-dd,yyyy")
				// }
				// console.log(new Date(estimate).format("MM-dd,yyyy"))
				if (this.currentBlock > 0) {
					const Distance = new this.$BigNumber(this.currentBlock).minus(new this.$BigNumber(Number(stage)));
					// const Distance = new this.$BigNumber(8616736).minus(new this.$BigNumber(7752736));
					if (Distance.toNumber()) {
						const distanceTmie = Distance.multipliedBy(new this.$BigNumber(3)).multipliedBy(new this
							.$BigNumber(1000))
						// const nowTime = new this.$BigNumber(new Date('2021/9/27 19:59:54').getTime());
						const nowTime = new this.$BigNumber(new Date().getTime());
						const estimate = nowTime.minus(distanceTmie).toNumber();
						return new Date(estimate).format("MM-dd,yyyy")
					}
				}



			},
			// 判断按钮状态
			blockReceive(blockNumber, userLock) {
				const currentBlock = Number(this.currentBlock); //当前区块
				const partBlockNumber = Number(blockNumber); // 第N阶段区块
				const partUserLock = Number(userLock); // 第N阶段token
				const now = new Date().getTime() // 当前时间
				const deadline = this.deadline //活动结束时间

				// const currentBlock = 8616736
				// const partUserLock = 1
				// const deadline = 1629379200000

				// 判断活动是否结束，并且区块高度是否到达
				if (now > deadline && currentBlock >= partBlockNumber) {
					//判断是否有可领取值
					if (partUserLock > 0) {
						return this.$t("ye_get5")
					} else {
						this.receive_status = true;
						return this.$t("ye_get6")
					}
				} else {
					return this.$t("ye_get4")
				}

			},
			// 获取当前区块
			getCurrentBlock() {
				this.timer = setInterval(async () => {
					// console.log('12123')
					this.currentBlock = await web3.eth.getBlockNumber();
				}, 5000);
			},
			//获取区块号,比例
			async getStage() {
				// console.log('qwe')
				const stage = await PerSaleObj.methods.getStage().call();
				this.stage = stage.slice(1)

			},
			// 获取区块可领取代币
			async getResult(params) {
				PerSaleObj.methods.getUserLock(params).call().then((result) => {
					this.stages = []
					console.log(result,'result[1]')
					result.slice(1).forEach((value, index) => {
						// console.log(value,this.tokenDecimals)
						const blockBalanceOf = value / 10 ** this.tokenDecimals
						this.stages.push([blockBalanceOf, ...this.stage[index]])
					})
				})
			},
			// 阶段代币领取
			async getStageToken() {
				// console.log(stage)

				const stage = 1;
				if( this.blockReceive(this.stages[0][1],this.stages[0][0]) == this.$t('ye_get5')){
					await PerSaleObj.methods.withdrawByStage(Number(stage)).send({
						from: this.address
					})
					this.getResult(this.address)
					this.$message.success(this.$t('getSuccess'));
				}else{
					this.$message.error(this.$t('ye_get6'));
				}
				
			}
		},
		destroyed() {
			clearTimeout(this.timer)
		}
	};
</script>

<style scoped lang="less">
	@import "../../../styles/shiba-ui";
	@import "./presaleOne.less";
	@import "./presaleOneSlyte.less";
	@import "./presaleTwo.less";
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
