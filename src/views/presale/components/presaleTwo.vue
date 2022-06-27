<template>
	<div class="bg">
		<div class="section__htb wf-section">
			<div class="container-1440">
				<div class="htb-wrap">
					<div class="htb-hero">
						<div class="htb-left">
							<div class="base-circle-wrap">
								<img src="@/assets/c1.png" loading="lazy" alt="" class="htb-circle-1" />
								<logo class="htb-circle-dashes"></logo>
								<div class="circle-glued-coins">
									<img src="@/assets/gc1.png" loading="lazy" alt="" class="gc-1" />
									<img src="@/assets/gc2.png" loading="lazy" alt="" class="gc-2" />
									<img src="@/assets/gc4.png" loading="lazy" alt="" class="gc-3" />
								</div>
								<div class="front-coins-holder">
									<img src="@/assets/bc1.png" loading="lazy" alt="" class="bc-1" />
									<img src="@/assets/bc2.png" loading="lazy" alt="" class="bc-2" />
									<img src="@/assets/bc4.png" loading="lazy" alt="" class="bc-3" />
								</div>
							</div>
						</div>
						<div class="htb-right">
							<a-row type="flex" class="banner" justify="space-between">
								<a-col :md="12" :xs="24" class="presale-left">
									<div class="left_lu">
										<div class="li">
											<div class="connect" v-if="!isLogin">
												<button type="button" class="car3-b-button" @click="connect">{{
														this.$t("p_r_o_login_bnt")
												}}</button>
											</div>
											<div class="connect" v-if="isLogin">
												<button type="button" class="car3-b-button" @click="logout">{{
														this.$t("p_r_o_out_bnt")
												}}</button>
											</div>
											<div class="car-p-t">
												<div class="cont">{{ this.$t("p_t_input")[0] }}</div>
												<div class="cont">{{ getspacepi / 100000000 }}e {{
														this.$t("p_t_input")[1]
												}}</div>
											</div>
										</div>
									</div>
									<div class="left_lu">
										<div class="li">
											<div class="connect">
												<span class="car-p-title">{{ this.$t("a_top_time_title") }}</span>
												<div class="car-p-height">{{ this.$t("p_t_num") }}</div>
											</div>
										</div>
									</div>
									<div class="left_lu">
										<div class="li">
											<div class="connect-line">
												<div class="line">
													<div class="Progress" :style="'width:' + 80 + '%'"></div>
												</div>
											</div>
										</div>
									</div>
									<div class="left_lu">
										<div class="li">
											<div class="connect-text">
												{{ this.$t('p_r_o_text') }}
											</div>
										</div>
									</div>
									<div class="left_lu">
										<div class="li">
											<div class="connect-block-height">
												{{ this.$t("p_t_des3") }} {{ thousands(currentBlock) }}
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
									<!-- 领取空投说明 -->
									<!-- <div class="receiving-airdrop-instructions">
									<img src="@/assets/i.png"> <span>{{ this.$t("airdrop_instructions") }}</span>
								</div> -->
								</a-col>
							</a-row>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="section mobile">
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
							<!-- 领取空投按钮 -->
							<div class="receive-airdrop mobile">
									<button
							v-if="receive_status==true"
							@click="getpersalestatusClick">{{ this.$t("ye_get5") }}</button>
							<button
							v-else
							style="background:#808080">{{ this.$t("ye_get6") }}</button>
							</div>
						</div>


					</div>

				</div>
			</div>
		</div>
		<div class="section pc">
			<div class="container-1440 section-pc">
				<div class="section-car">
					<div class="section-car-s">
						<div>
							<span class="title">{{ this.$t("p_r_o_pre_array")[0]["title"] }}</span>
							<span class="text">{{ userLock }}</span>
						</div>
						<div>
							<span class="title">{{ this.$t("p_r_o_pre_array")[1]["title"] }}</span>
							<span class="text">{{ getspacepi }}</span>
						</div>
					</div>
					<!-- 领取空投按钮 -->
					<div class="receive-airdrop pc">
							<button
							v-if="receive_status==true && address!=''"
							@click="getpersalestatusClick">{{ this.$t("ye_get5") }}</button>
							<button
							v-if="receive_status==false && address!=''"
							style="background:#808080">{{ this.$t("ye_get6") }}</button>
					</div>
				</div>
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
			</div>
		</div>

		<div class="container-1440" style="height: auto;">
			<div class="hero-wrap">
				<a href="#ecosystem" class="hero__scrollbtn w-inline-block">
					<img src="@/assets/hero-scroll-shape.png" loading="eager" alt="" class="hero__scrollbtn--img" />
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import logo from "./logo.vue";
import { abiObject, getAbi, web3, thousands } from "utils/common";
import { mapState, mapActions, mapMutations } from "vuex";
const { contractObject: PerSaleObj } = getAbi(abiObject.PerSaleAbi)

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
			receive_status: false,
			airdropStatus1: false,
		};
	},
	props: {},
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
			"storeInviteRewards",
			"balanceof"
		]),
		stageandAddress() {
			return [this.address, this.stage]
		},
		async getairdropStatus() {
			if (this.deadline < new Date().getTime()) {
				//如果结束时间小于现在
				this.airdropStatus1 = true;
				// this.airdropStatus1 = false ;
			} else {
				//如果结束时间大于于现在
				this.airdropStatus1 = false;
				// this.airdropStatus1 = true;
			}
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
		// this.getStage()
		this.getpersalestatus();
		this.getCurrentBlock()
		this.updateInvitationLink(this.address);
		this.getIsAirdrops();
		// this.getairdropStatus();
		//  console.log(stage)
	},
	mounted() { },
	methods: {

		...mapMutations(["updateStoreSwapRatio", "editAddress", "updateIsInvited", "updateInvitationLink",]),
		...mapActions(["login", "getInvited", "myInvites", "getBalance"]),
		// 登录
		connect() {
			// eth_requestAccounts  链接钱包
			ethereum.request({ method: "eth_requestAccounts" })
				.then(async (accounts) => {
					// add address for store
					this.editAddress(accounts[0])
					// 获取邀请人
					const isInvited = await PerSaleObj.methods.isInvited(accounts[0]).call()
					// Action function
					this.updateIsInvited(isInvited)
					sessionStorage.setItem("isInvited", JSON.stringify(isInvited))

					this.$message.success(this.$t('p_sendAdd'));
					setTimeout(() => {
						window.location.reload();
					}, 1500);
					// if(!JSON.parse(this.isInvited)[1]){
					// console.log('isInvited[1]',isInvited[1])
					//  console.log('connect',isInvited[1])

					if (isInvited[1] == false) {
						console.log('未绑定邀请')
						this.bondInvite(isInvited)
					} else {
						console.log(isInvited[1])
					}

				})
				.catch((err) => {
					console.log(err);
				});
		},
		delCookie() {
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
		async getpersalestatus(){
			let _that = this;
			const userLock = await PerSaleObj.methods.getUserLock(this.address).call()
			console.log('userLock',userLock);
			if(userLock  === '0' ){
				console.log('userLock=[0');
				_that.receive_status = false;
				return;
				console.log(_that.receive_status);
				//yilingvqu \已领取

			}else{
				console.log('userLock=[1');
				//WEILINGQU  未领取
				_that.receive_status = true;
				console.log(_that.receive_status);
				return;
				
				
			}
		},
		async getpersalestatusClick(){
			//领取预售方法
				const userLock = await PerSaleObj.methods.withdraw().send({
					from: this.address
				}).then(() => {
				this.$message.success(this.$t("receiveAirdropSuccess"));
				setTimeout(()=>{
					window.location.reload();
				},1500)
			}).catch(() => {
				this.$message.error(this.$t("receiveAirdropError"));
			});
		},
		async getUserLock() {
			const userLock = await PerSaleObj.methods.getUserLock(this.address).call()
			//   console.log(userLock,'userLock')
			let total = new this.$BigNumber(userLock)
			let get_token = total.toFixed(0) / 10 ** Number(this.tokenDecimals)
			// console.log(get_token)
			this.getspacepi = get_token
			this.userLock = Number(get_token) / Number(this.storeSwapRatio)
			console.log('DogePi代币数据', this.getspacepi);
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
		// //获取区块号,比例
		// async getStage() {
		// 	// console.log('qwe')
		// 	const stage = await PerSaleObj.methods.getStage().call();
		// 	this.stage = stage
		// 	//console.log('数据',stage)

		// },
		// 获取区块可领取代币
		async getResult(params) {
			await PerSaleObj.methods.getUserLock(params).call().then((result) => {
				this.stages = []
				console.log(result, 'result[1]')
				result.slice(1).forEach((value, index) => {
					// console.log(value,this.tokenDecimals)
					const blockBalanceOf = value / 10 ** this.tokenDecimals
					this.stages.push([blockBalanceOf, ...this.stage[index]])

				})
			})
		},
		// 阶段代币领取
		async getStageToken() {
			

			const stage = 1;
			if (this.blockReceive(this.stages[0][1], this.stages[0][0]) == this.$t('ye_get5')) {
				await PerSaleObj.methods.getUserLock(Number(stage)).send({
					from: this.address
				})
				
				this.getResult(this.address)
				this.$message.success(this.$t('getSuccess'));
			} else {
				this.$message.error(this.$t('ye_get6'));
			}

		},
		airdropStatus() {
			if (this.deadline < new Date().getTime()) {
				return false
			}
			return true
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
			// this.$notification.open({
			// 	message: "succeed",
			// 	description: this.$t("receiveAirdropSuccess"),
			// });
		},
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



.receive-airdrop {
	margin-top: 2vw;

	button {
		border: 0;
		border-radius: 5vw;
		width: 16.9vw;
		height: 3.6vw;
		background: linear-gradient(180deg, #FEA626 0%, #FE9926 100%);
		box-shadow: 0px 0.2vw 0.3vw 0.1vw rgb(0 0 0 / 16%);
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.2vw;
		font-weight: bold;
		color: #2E2E2E;

	}
}

.section-car {
	width: 100%;
	background: rgba(255, 255, 255, 0.16);
	border-radius: 2.6vw;
	-webkit-backdrop-filter: blur(1.6vw);
	backdrop-filter: blur(1.6vw);
	padding: 3vw;
	display: grid;
	grid-gap: 1.4vw;

	.section-car-s {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 1.4vw;
		justify-content: center;

		div {
			width: 100%;
			height: 9.7vw;
			background: rgba(255, 255, 255, 0.16);
			box-shadow: 0px 0.2vw 0.3vw 0.1vw rgb(0 0 0 / 16%);
			border-radius: 0.4vw;
			-webkit-backdrop-filter: blur(1.6vw);
			backdrop-filter: blur(1.6vw);
			display: grid;
			justify-content: center;
			align-items: center;
			text-align: center;

			.title {
				font-size: 1vw;
				height: 1.5vw;
				color: #FEA626;
				pa-top: 44px;
				padding-top: 1vw;
			}

			.text {
				font-size: 1.9vw;
				color: #FFFFFF;
				font-weight: bold;
				padding-bottom: 1vw;
			}
		}
	}

	.receive-airdrop {
		display: flex;
		justify-content: center;
		margin-top: 0;
	}
}

.section-pc {
	display: grid;
	grid-gap: 1.4vw;
}

.car3-f {
	width: 100%;
	margin-top: 2.8vw;
	padding-left: 2vw;
	padding-right: 2vw;

	.title {
		width: 100%;
		font-size: 1vw;
		font-weight: bold;
		color: #FEA626;
	}
}

.bg {
	// 	background:url("../../../../public/images/img_24.png");
	//   -webkit-background-size: cover;
	//   -moz-background-size: cover;
	//   -o-background-size: cover;
	//   background-size: cover;


}

.pc {
	display: block;
}

.mobile {
	display: none;
}

@media (max-width: 768px) {
	.pc {
		display: none;
	}

	.mobile {
		display: flex;
	}

	.receive-airdrop {

		justify-content: center;
		align-items: center;

		button {
			width: 35vw;
			height: 8vw;
		}
	}
}
</style>
