<template>
	<div class="warp">
		<div class="pc">
			<a-row type="flex" class="banner" justify="space-between">
				<a-col :md="10" :xs="24" class="presale-left">
					<div class="left_tit">{{ this.$t("p_t_title") }}</div>
					<!-- <div class="left_tit">{{ this.$t("p_t_booking_title") }}</div> -->
					<div class="left_tit_orange">{{ this.$t("p_t_orange") }}</div>
					<div class="left_des">{{ this.$t("p_t_des1") }}</div>
					<div class="left_num">{{ this.$t("p_t_num") }}</div>
					<div class="line">
						<div class="Progress" :style="'width:'+80+'%'"></div>
					</div>
					<div class="left_des">{{ this.$t("p_t_des2") }}</div>
					<div class="current_des">{{ this.$t("p_t_des3") }} {{ thousands(currentBlock)}}</div>
					<div class="left_input"><span>{{ this.$t("p_t_input")[0] }}</span>{{getspacepi}} {{ this.$t("p_t_input")[1] }}
					</div>
					<div class="left_btn" v-if="!isLogin" @click="connect()" style="background-color: #FDD333;margin-left:1rem;">{{ this.$t("a_top_but") }}</div>
					<!-- <div class="left_btn"  v-if="isLogin"  @click="$router.push('/airdrop')">{{ this.$t("p_t_btn") }}</div> -->
					<div>
						<div class="left_btn"  v-if="isLogin"  @click="receive_status==false?getStageToken():''" :style="receive_status==false? 'background-color: #FDD333;':'background-color: #ccc;'">
							{{ blockReceive(stages[0][1],stages[0][0]) }}
						</div>
					<div class="left_btn_out"  v-if="isLogin"  @click="logout()">{{ this.$t("a_top_but1") }}</div>
					</div>
					<!-- <div class="left_des1">{{ thousands(stages[0]) }}BK({{ $t("estimate") }},{{ getStageUnlockTime(stages[1]) }})</div> -->
				</a-col>
				<logo class="logo"></logo>
			</a-row>
			<a-row type="flex" justify="space-between">
				<a-col :md="24" :xs="24" class="presale-left">
					<div class="rules" style="margin-top:80px;">
						<div class="tit">{{ this.$t("p_r_o_rules_title") }}</div>
						<div class="des">{{ this.$t("p_r_o_rules_array")[0] }}</div>
						<div class="des">{{ this.$t("p_r_o_rules_array")[1] }}</div>
						<div class="des">{{ this.$t("p_r_o_rules_array")[3] }}</div>
					</div>
					<div class="my_pre">
						<div class="li">
							<div>{{ this.$t("p_r_o_pre_array")[0]['title'] }}</div>
							<div class="num">{{userLock}}</div>
						</div>
						<div class="li">
							<div>{{ this.$t("p_r_o_pre_array")[1]['title'] }}</div>
							<div class="num">{{getspacepi}}</div>
						</div>
					</div>
					<!-- <div class="white_des">{{ this.$t("p_r_o_des")}}</div>
					<div class="record">
						{{ this.$t("p_r_o_record")}}

					</div> -->
				</a-col>
			</a-row>
		</div>
		<div class="mobile">
			<mLogo class="logo"></mLogo>
			<div class="left_com">
				<div class="left_tit">{{ this.$t("p_t_title") }}</div>
				<!-- <div class="left_tit">{{ this.$t("p_t_booking_title") }} </div> -->
				<div class="left_tit_orange">{{ this.$t("p_t_orange") }}</div>
				<div class="left_tit_orange_des">{{ this.$t("p_t_desc1_S") }}</div>
				<div class="left_num">{{ this.$t("p_t_desc1_num") }}</div>
				<div class="line">
					<div class="Progress" :style="'width:'+80+'%'"></div>
				</div>
				<div class="left_des">{{ this.$t("p_t_des2") }}</div>
				<div class="current_des">{{ this.$t("p_t_des3") }} {{ thousands(currentBlock)}}</div>
				<div class="left_input"><span>{{ this.$t("p_t_input")[0] }}</span>{{getspacepi}} {{ this.$t("p_t_input")[1] }}
				</div>
				<div class="left_btn" v-if="!isLogin" @click="connect()" style="background-color: #FDD333">{{ this.$t("a_top_but") }}</div>
				<!-- <div class="left_btn"  v-if="isLogin"  @click="$router.push('/airdrop')">{{ this.$t("p_t_btn") }}</div> -->
				<div class="left_btn"  v-if="isLogin"  @click="receive_status==false?getStageToken():''" :style="receive_status==false? 'background-color: #FDD333;':'background-color: #ccc;'">
						{{ blockReceive(stages[0][1],stages[0][0]) }}
				</div>
				<div class="left_btn_out"  v-if="isLogin"  @click="logout()">{{ this.$t("a_top_but1") }}</div>
				<!-- <div class="left_des1">{{ thousands(stages[0]) }}BK({{ $t("estimate") }},{{ getStageUnlockTime(stages[1]) }})</div> -->
			</div>
			<div class="rules">
				<div class="tit">{{ this.$t("p_r_o_rules_title") }}</div>
				<div class="des">{{ this.$t("p_r_o_rules_array")[0] }}</div>
				<div class="des">{{ this.$t("p_r_o_rules_array")[1] }}</div>
				<div class="des">{{ this.$t("p_r_o_rules_array")[3] }}</div>
			</div>
			<div class="my_pre">
				<div class="li">
					<div>{{ this.$t("p_r_o_pre_array")[0]['title'] }}</div>
					<div class="num">{{userLock}}</div>
				</div>
				<div class="li">
					<div>{{ this.$t("p_r_o_pre_array")[1]['title'] }}</div>
					<div class="num">{{getspacepi}}</div>
				</div>
			</div>
			<!-- <div class="record">
				{{ this.$t("p_r_o_record")}}
			</div> -->
		</div>
	</div>
</template>

<script>
	import {abiObject,getAbi, web3,thousands} from "utils/common";
	import logo from "@/views/airdrop/components/logo.vue";
	import mLogo from "@/views/airdrop/components/m-logo.vue";
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
			logo,
			mLogo
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
				
				this.$message.success(this.$t('connectSuccess'));
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
	.mobile {
		display: none;
		font-family: DIN;

		.left_com {
			margin: 20px;

			.left_tit {
				color: #fff;
				font-size: 32px;
				font-weight: bold;
				line-height: 60px;
				font-family: DIN;
				text-transform: uppercase;
				text-align: center;
			}

			.left_tit_orange {
				color: #FDD333;
				font-size: 40px;
				font-weight: bold;
				line-height: 60px;
				font-family: DIN;
				text-transform: uppercase;
				text-align: center;
			}

			.left_tit_orange_des {
				color: #FDD333;
				font-size: 20px;
				font-weight: bold;
				line-height: 50px;
				font-family: DIN;
				text-align: center;
			}

			.left_des {
				color: #fff;
			}

			.left_num {
				color: #fff;
				font-size: 36px;
				font-weight: bold;
				line-height: 60px;
				font-family: DIN;
				overflow: hidden;
			}

			.current_des {
				color: #FDD333;
				font-size: 20px;
				font-weight: bold;
				line-height: 80px;
				font-family: DIN;
			}

			.left_input {
				border: 1px solid #FDD333;
				border-radius: 8px;
				padding: 10px 16px 10px 16px;
				color: #fff;
				text-align: right;
				position: relative;
				font-size: 20px;
				font-weight: bold;
				line-height: 32px;

				span {
					position: absolute;
					left: 16px;
					line-height: 32px;
					color: #FDD333;
				}
			}

			.left_btn {
				margin: 20px auto;
				//background-color: #FDD333;
				line-height: 36px;
				font-size: 18px;
				color: #241A41;
				width: 200px;
				text-align: center;
				border-radius: 4px;
				text-transform: uppercase;
				font-weight: bold;
				position: relative;
			}

			.left_btn_out{
				margin: 20px auto;
				background-color: #FDD333;
				line-height: 36px;
				font-size: 18px;
				color: #241A41;
				width: 200px;
				text-align: center;
				border-radius: 4px;
				text-transform: uppercase;
				font-weight: bold;
				position: relative;
			}
			.left_des1 {
				color: #fff;
				font-size: 16px;
				font-weight: bold;
				text-align: center;
			}

			.line {
				margin: 20px 0;
				height: 10px;
				border-radius: 5px;
				background-color: #fff;
				overflow: hidden;

				.Progress {
					background-color: #FDD333;
					height: 10px;
					float: left;
					border-radius: 5px;
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
				color: #FDD333;
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
					color: #5A51A8;
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
					color: #5A51A8;
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
					color: #5A51A8;
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
				border: 1px solid #FDD333;
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
				background-color: #FDD333;
				border-radius: 8px;
				margin-top: 20px;
			}

			.token {
				margin: 0 20px;
				margin-top: 10px;
				text-align: left;
				display: flex;
				overflow: hidden;

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
					color: #fff;
					font-size: 52px;
					font-weight: bold;
					line-height: 80px;
					font-family: DIN;
				}

				.left_tit_orange {
					color: #FDD333;
					font-size: 52px;
					font-weight: bold;
					line-height: 80px;
					font-family: DIN;
				}

				.left_des {
					color: #fff;
				}

				.left_num {
					color: #fff;
					font-size: 52px;
					font-weight: bold;
					line-height: 80px;
					font-family: DIN;
				}

				.current_des {
					color: #FDD333;
					font-size: 24px;
					font-weight: bold;
					line-height: 80px;
					font-family: DIN;
				}

				.left_input {
					display: inline-block;
					border: 1px solid #FDD333;
					border-radius: 8px;
					padding: 10px 16px 10px 100px;
					color: #fff;
					text-align: right;
					position: relative;
					font-size: 20px;
					font-weight: bold;
					line-height: 32px;

					span {
						position: absolute;
						left: 16px;
						line-height: 32px;
						color: #FDD333;
					}
				}

				.left_btn {
					margin: 20px 0;
					//background-color: #FDD333;
					line-height: 2.5rem;
					font-size: 16px;
					color: #241A41;
					width: 120px;
					height: 2.5rem;
					text-align: center;
					border-radius: 4px;
					display: inline-block; 
				}
				.left_btn_out{
					margin: 20px 0;
					background-color: #FDD333;
					line-height: 2.5rem;
					font-size: 16px;
					color: #241A41;
					width: 120px;
					height: 2.5rem;
					text-align: center;
					border-radius: 4px;
					margin-left: 10px;
					display: inline-block;
				}
				.left_des1 {
					color: #fff;
					font-size: 16px;
					font-weight: bold;
				}

				.line {
					margin: 20px 0;
					width: 400px;
					height: 10px;
					border-radius: 5px;
					background-color: #fff;
					overflow: hidden;

					.Progress {
						background-color: #FDD333;
						height: 10px;
						float: left;
						border-radius: 5px;
					}
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
					background-color: #FDD333;
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

					.li-left {
						width: 40%;
						color: #5A51A8;
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
							color: #5A51A8;
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
							color: #5A51A8;
							font-size: 10px;
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
						background-color: #FDD333;
						border-radius: 8px;
						margin-top: 20px;
					}

					.token {
						margin-top: 10px;
						width: 320px;
						text-align: left;
						display: flex;
						overflow: hidden;

						img {
							display: inline;
							width: 12px;
							height: 12px;
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
				margin-bottom: 40px;

				.tit {
					font-size: 26px;
					color: #fff;
					margin-bottom: 20px;
				}

				.des {
					color: #FDD333;
					font-size: 1.25rem;
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
					font-size: 1.5rem;
					text-align: center;
					line-height: 3.25rem;
					font-weight: 400;

					.num {
						font-size: 2rem;
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
