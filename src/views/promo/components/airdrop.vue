<template>
	<div class="warp">
		<div class="pc">
			<a-row type="flex" class="banner" justify="space-between">
				<a-col :md="10" :xs="24" class="presale-left">
					<h1>
						<span>{{ this.$t("a_text1") }}</span> {{ this.$t("a_text3") }} <!-- {{ this.$t("a_text2") }} -->
					</h1>
					<h2>
						{{ this.$t("a_text4") }}
					</h2>
					<h1>{{ this.$t("a_text5") }}</h1>
					<h2>
						{{ this.$t("a_text6") }}
					</h2>
				</a-col>
			</a-row>
			<a-row type="flex" justify="space-between">
				<a-col :md="24" :xs="24" class="presale-left">
					<div class="titcom">
						<div class="tit">{{ this.$t("a_titcom_tit") }}</div>
						<div class="li" style="width: 100%;display: flex;justify-content: center;">
							<span style="float: left;"
								class="li-left">{{ this.$t("a_titcom_li_left") }}</span>
								<span style="float: right;display: flex;right: 0;"
									>{{ this.$t("a_titcom_li_right") }}</span>
						</div>
					</div>
					<div class="timecom">
						<div class="tit">{{ this.$t("a_time_tit") }}</div>
						<a-statistic-countdown :value="deadline" format="DD: HH: mm: ss" @finish="finish()" />
						<div class="ul">
							<div class="li">
								{{ this.$t("a_time_tb1") }}
								<span>{{ storeMyTotalspacepi }}</span>
							</div>
							<div class="li">
								{{ this.$t("a_time_tb2") }}
								<span>{{ payCount }}</span>
							</div>
							<div class="li">
								{{ this.$t("a_time_tb3") }}
								<span>{{ totaltoken }}</span>
							</div>
							<div class="li">
								{{ this.$t("a_time_tb4") }}
								<span>{{ rewardsCount }}</span>
							</div>
						</div>
						<div  v-if="airdropStatus1">
							<div class="btn" v-if="airdropStatus==false" @click="getAirdrop">
								{{receive_title}}
							</div>
							<div class="btn" v-else  :style="airdropStatus==true?'background-color: #ccc;':''">
								{{ this.$t("ye_get6") }}
							</div>
							
						</div>
						<div style="padding: 10px 60px;
						border-radius: 10px;
						line-height: 26px;
						font-weight: 600;
						margin: 20px auto;
						background-color: #808080;
						display: inline-block;
						font-size: 14px;" v-if="!airdropStatus1"  >{{ this.$t("a_time_btn1") }}</div>
						
						<div class="des">{{ this.$t("a_time_msg1") }}</div>
						<div class="des" style="font-weight: bold;">{{ storeInviteLink[0] }}</div>
						<div class="btn" v-clipboard:copy="storeInviteLink[0]" v-clipboard:success="onCopy">
							{{ this.$t("a_time_btn2") }}</div>
						<div class="des">{{ this.$t("a_time_msg2") }}</div>
					</div>
					<div class="rules">
						<div class="tit">{{ this.$t("a_rules_one_tit") }}</div>
						<div class="des">{{ this.$t("a_rules_one1") }}</div>
						<div class="des">{{ this.$t("a_rules_one2") }}</div>
						<div class="des">{{ this.$t("a_rules_one3") }}</div>
						<div class="des">{{ this.$t("a_rules_one4") }}</div>
					</div>
					<div class="invite">
						<div class="tit">{{ this.$t("a_invite_time") }}</div>
						<div class="li">
							<div class="tb1">{{ this.$t("a_invite_tb1") }}</div>
							<div class="tb2">{{ this.$t("a_invite_tb2") }}</div>
						</div>
						<div class="li" v-for="(item,index) of storeInviteList" :key="item">
							<div class="tb1">{{index+1>9?index+1:""+(index+1)}}</div>
							<div class="tb2">{{item}}</div>
						</div>
					</div>
					<div class="rules">
						<div class="tit">{{ this.$t("a_rules_two_tit") }}</div>
						<div class="des">{{ this.$t("a_rules_two1") }}</div>
						<div class="des">{{ this.$t("a_rules_two2") }}</div>
						<div class="des">{{ this.$t("a_rules_two3") }}</div>
					</div>
				</a-col>
			</a-row>
		</div>
		<div class="mobile">
			<div class="rate_com">
				
				<div  class="r" style="font-size: 3.5rem;">
					<span class="r_r">{{ this.$t("a_text1") }}</span>&nbsp;{{ this.$t("a_text3") }}
				</div>
				
				<!-- <div class="r">{{ this.$t("a_m_text1") }}</div>
				<div class="r_r">{{ this.$t("a_m_text2") }}</div> -->
				<div class="r_left">{{ this.$t("a_m_text3") }}</div>
				<!--<div class="r_left">{{ this.$t("a_m_text5") }}</div>
				<div class="r_left">{{ this.$t("a_m_text6") }}</div>
				<div class="r_left">{{ this.$t("a_m_text7") }}</div>-->
				<div class="r_num">{{ this.$t("a_m_text8") }}</div>
				<div class="r_msg">{{ this.$t("a_m_text9") }}</div>
			</div>

			<div class="titcom">
				<div class="tit">{{ this.$t("a_titcom_tit") }}</div>
				<div class="li" style="display: flex;justify-content: center;">
					<span class="li-left">{{ this.$t("a_titcom_li_left") }}</span>{{ this.$t("a_titcom_li_right") }}
				</div>
			</div>

			<div class="timecom">
				<div class="tit">{{ this.$t("a_time_tit") }}</div>
				<a-statistic-countdown :value="deadline" format="DD: HH: mm: ss" @finish="finish()" />
				<div class="ul">
					<div class="li">
						{{ this.$t("a_time_tb1") }}
						<span>{{ storeMyTotalspacepi }}</span>
					</div>
					<div class="li">
						{{ this.$t("a_time_tb2") }}
						<span>{{ payCount }}</span>
					</div>
					<div class="li">
						{{ this.$t("a_time_tb3") }}
						<span>{{ totaltoken }}</span>
					</div>
					<div class="li">
						{{ this.$t("a_time_tb4") }}
						<span>{{ rewardsCount }}</span>
					</div>
				</div>
				<div class="btn" v-if="airdropStatus1" @click="getAirdrop" >{{ this.$t("a_time_btn1") }}</div>
				<div style="padding: 10px 60px;
				border-radius: 10px;
				line-height: 26px;
				font-weight: 600;
				margin: 20px auto;
				background-color: #808080;
				display: inline-block;
				font-size: 14px;" v-if="!airdropStatus1"  >{{ this.$t("a_time_btn1") }}</div>
				<div class="des" style="font-weight: bold;font-size: 1rem;word-wrap:break-word; 
word-break:break-all; ">{{ storeInviteLink[0] }}</div>

				<div class="btn" v-clipboard:copy="storeInviteLink[0]" v-clipboard:success="onCopy">
					{{ this.$t("a_time_btn2") }}</div>
				<div class="des" style="font-weight: bold;font-size: 1rem;">{{ this.$t("a_m_time_msg") }}</div>
			</div>

			<div class="rules">
				<div class="tit">{{ this.$t("a_rules_one_tit") }}</div>
				<div class="des">{{ this.$t("a_rules_one1") }}</div>
				<div class="des">{{ this.$t("a_rules_one2") }}</div>
				<div class="des">{{ this.$t("a_rules_one3") }}</div>
				<div class="des">{{ this.$t("a_rules_one4") }}</div>
			</div>

			<div class="invite">
				<div class="tit">{{ this.$t("a_m_invite_tit") }}</div>
				<div class="li">
					<div class="tb1">{{ this.$t("a_invite_tb1") }}</div>
					<div class="tb2">{{ this.$t("a_invite_tb2") }}</div>
				</div>
				<div class="li" v-for="(item,index) of storeInviteList" :key="item">
					<div class="tb1">{{index+1>9?index+1:""+(index+1)}}</div>
					<div class="tb2">{{item}}</div>
				</div>
			</div>
		<!-- 	<div class="rules">
				<div class="tit">{{ this.$t("a_rules_one_tit") }}</div>
				<div class="des">{{ this.$t("a_rules_one1") }}</div>
				<div class="des">{{ this.$t("a_rules_one2") }}</div>
				<div class="des">{{ this.$t("a_rules_one3") }}</div>
				<div class="des">{{ this.$t("a_rules_one4") }}</div>
			</div> -->
		</div>
	</div>
</template>

<script>
	import {mapState,mapMutations} from "vuex";
	import {abiObject,getAbi, web3 } from "utils/common";
	const {contractObject: PerSaleObj} = getAbi(abiObject.PerSaleAbi);
	export default {
		data() {
			return {
				// 默认地址
				initalAddress: "",
				raisedList: [
					{ address: "0x000ndu531...", num: "1" },
        			{ address: "0x000ndu531...", num: "2" },
        			{ address: "0x000ndu531...", num: "3" },
					{ address: "0x000ndu531...", num: "4" },
					{ address: "0x000ndu531...", num: "5" },
					{ address: "0x000ndu531...", num: "6" },
				],
				payCount: 0,
				airdropStatus1: false,
				totaltoken: 0,
				rewardsCount: 0,
				receive_status:false,
				receive_title:this.$t("a_time_btn1"),
			};
		},
		props: {
			isLogin: {
				type: Boolean,
			},
			airdropQuantity: {
				type: Number,
			},
			InviteList: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		watch: {
			address: {},
		},
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
			]),
			airdropStatus() {
				if (this.deadline < new Date().getTime()) {
					return false
				}
				return true
			},
		},

		components: {
		},
		created() {
			this.invitePayCount();
			this.invitePayCount();
			this.updateInvitationLink(this.address);
			this.getIsAirdrops();
		},
		mounted() {},
		methods: {
			...mapMutations(["updateInvitationLink"]),
			async getairdropStatus() {
				if (this.deadline < new Date().getTime()) {
					//如果结束时间小于现在
					this.airdropStatus1 = true;
					// this.airdropStatus1 = false ;
				}else{
					//如果结束时间大于于现在
					this.airdropStatus1 = false ;
					// this.airdropStatus1 = true;
				}

			},
			// getAddress() {
			//   let address = sessionStorage.getItem("accountAddress");
			//   let location = window.location.host;
			//   if (!address || address === "") {
			//     return;
			//   } else {
			//     this.invitationLink = `https://${location}/#/presale?address=${address}&isInvited=${Number(
			//       JSON.parse(this.isInvited)[1]
			//     )}`;
			//   }
			// },
			// 支付好友总数
			async invitePayCount() {
				try {
					let payCount = 0;
					let totaltoken = new this.$BigNumber(0);
					for (let i = 0; i < this.storeInviteList.length; i++) {
						const userLockList = await PerSaleObj.methods
							.getUserLock(this.storeInviteList[i])
							.call();
						// userLockList[0]>0?totaltoken+=Number(userLockList[0]): ''
						// userLockList[0]>0?payCount+=1:''
						if (Number(userLockList[0]) > 0) {
							// const bgTotaltoken = Number(userLockList[0]);
							totaltoken = totaltoken.plus(new this.$BigNumber(userLockList[0]));
							payCount += 1;
						}
					}
					const invitePercentage = await PerSaleObj.methods
						.invitePercentage()
						.call();
					// console.log(invitePercentage)

					this.payCount = payCount;

					// const asd = new this.$BigNumber(123)/new this.$BigNumber(this.storeSwapRatio)
					// console.log(asd.toFixed(9))

					const storeSwapRatio = new this.$BigNumber(this.storeSwapRatio)
					const tokenDecimals = 10 ** this.tokenDecimals
					console.log(tokenDecimals)
					this.totaltoken = totaltoken.dividedBy(storeSwapRatio).dividedBy(new this.$BigNumber(
						tokenDecimals)).toFixed(4);

					// this.rewardsCount = new this.$BigNumber(5000).multipliedBy(new this.$BigNumber(invitePercentage)).dividedBy(new this.$BigNumber(100))
					// this.tokenDecimals

					const rewardsCount = new this.$BigNumber(Number(this.totaltoken))
						.multipliedBy(new this.$BigNumber(invitePercentage))
						.dividedBy(new this.$BigNumber(100)).toString()

					// console.log( web3.utils.fromWei(rewardsCount.toString()),'rewardsCount')
					this.rewardsCount = rewardsCount

				} catch (error) {
					console.log(error);
				}
			},

			async getIsAirdrops(){
			  const airdropStatus = await PerSaleObj.methods.getIsAirdrop(this.address).call()
			  this.airdropStatus = airdropStatus
			  console.log('airdropStatus',airdropStatus);
			},

			async getAirdrop() {

				await PerSaleObj.methods
					.airdrop()
					.send({
						from: this.address,
						value: web3.utils.toWei("0.0025")
					});
				this.$notification.open({
					message: "succeed",
					description: this.$t('receiveAirdropSuccess'),
				});
			},

			finish() {
				alert(this.$t('over'));
			},
			// 地址复制
			onCopy(e) {
				// alert(e.text);
				this.$message.success(this.$t('copySuccess'));
			},
		},
	};
</script>

<style scoped lang="less">
	.mobile {
		display: none;

		.rate_com {
			font-size: 3.5rem;
			font-weight: 900;
			line-height: 60px;
			text-transform: uppercase;
			position: relative;

			.r {
				text-align: center;
			}

			.r_r {
				color: #FDD333;
				text-align: center;
			}

			.r_left {
				font-size: 1.5rem;
				text-align: left;
				width: 50%;
			}

			.r_num {
				color: #FDD333;
				font-size: 5rem;
				position: absolute;
				bottom: 4rem;
				right: 0px;
				
			}

			.r_msg {
				font-size: 2.2rem;
				position: absolute;
				display: inline-block;
				bottom: 0rem;
				right: 0px;
			}
		}

		.titcom {
			width: 100%;
			font-weight: bold;

			.tit {
				width: 180px;
				height: 38px;
				border-radius: 19px;
				background-color: #FDD333;
				font-weight: bold;
				line-height: 38px;
				text-align: center;
				margin: 16px auto;
			}

			.li {
				display: inline;
				line-height: 46px;
				padding: 0 20px;
				display: flex;
				background-color: #fff;
				border-radius: 10px;

				.li-left {
					width: 40%;
					color: #5A51A8;
				}
			}
		}

		.timecom {
			margin-top: 16px;
			background-color: #fff;
			border-radius: 20px;
			padding: 20px 0;
			text-align: center;

			.tit {
				line-height: 36rpx;
				font-weight: bold;
				color: #000;
			}

			/deep/ .ant-statistic-content {
				span {
					color: #000;
					font-size: 3.25rem;
					font-weight: bold;
				}
			}

			.time {
				font-weight: 900;
				font-size: 36px;
			}

			.ul {
				padding: 0px 10px;
				margin: 10px auto;

				.li {
					font-size: 1rem;
					text-align: left;
					position: relative;
					line-height: 46px;
					font-weight: 600;

					span {
						position: absolute;
						right: 0px;
					}
				}
			}

			.btn {
				padding: 10px 60px;
				border-radius: 10px;
				line-height: 26px;
				font-weight: 600;
				margin: 20px auto;
				background-color: #FDD333;
				display: inline-block;
				font-size: 14px;
			}

			.btnno {
				padding: 10px 60px;
				border-radius: 10px;
				line-height: 26px;
				font-weight: 600;
				margin: 20px auto;
				background-color: #808080;
				display: inline-block;
				font-size: 14px;
			}

			.des {
				padding: 0 20px;
			}
		}

		.rules {
			text-align: left;
			margin-top: 20px;
			margin-bottom: 60px;

			.tit {
				font-size: 26px;
				margin-bottom: 20px;
				font-weight: bold;
			}

			.des {
				font-size: 1rem;
				font-weight: bold;
				color: #FDD333;
				line-height: 32px;
			}
		}

		.invite {
			background-color: #fff;
			border-radius: 20px;
			padding: 20px;
			position: relative;
			font-weight: bold;
			min-height: 260px;

			.tit {
				font-size: 24px;
				line-height: 36px;
			}

			.li {
				text-align: left;
				line-height: 38px;
				height: 38px;

				.tb1 {
					width: 36%;
					display: block;
					float: left;
				}

				.tb2 {
					width: 64%;
					text-align: right;
					display: block;
					overflow: hidden;
				}
			}
		}
	}

	.pc {
		display: block;
	}

	.warp {
		width: 100%;
		padding: 73px 0 30px;
		margin-bottom: 70px;

		.banner {
			position: relative;

			.logo {
				position: absolute;
				right: 0px;
				bottom: 0px;
				width: 400px;
				height: 400px;
			}
		}

		.presale-left {
			position: relative;

			h1 {
				font-size: 3.5rem;
				font-weight: 900;
				line-height: 4.5rem;
				margin-bottom: 20px !important;

				span {
					color: #f1ac4b;
				}
			}

			h2 {
				font-size: 2rem;
				font-weight: 900;
				line-height: 60px;
				margin-bottom: 20px !important;
			}

			.titcom {
				width: 360px;
				height: 46px;
				left: 50%;
				margin-left: -180px;
				background-color: #fff;
				position: absolute;
				border-radius: 4px;
				top: 0px;

				.tit {
					position: absolute;
					width: 180px;
					left: 50%;
					margin-left: -90px;
					top: -23px;
					height: 38px;
					border-radius: 19px;
					background-color: #FDD333;
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

			.timecom {
				margin-top: 60px;
				background-color: #fff;
				border-radius: 20px;
				padding: 20px 0;
				text-align: center;

				.tit {
					line-height: 36rpx;
					font-weight: bold;
					color: #000;
				}

				/deep/ .ant-statistic-content {
					span {
						color: #000;
						font-size: 36px;
						font-weight: 900;
					}
				}

				.time {
					font-weight: 900;
					color: #000;
					font-size: 36px;
				}

				.ul {
					border-top: 1px solid #70707029;
					border-bottom: 1px solid #70707029;
					width: 80%;
					margin: 10px auto;
					display: flex;

					.li {
						font-size: 20px;
						width: 25%;
						padding: 10px 0;

						span {
							display: block;
							font-size: 26px;
							color: #5A51A8;
							font-weight: bold;
						}
					}
				}

				.btn {
					padding: 10px 60px;
					border-radius: 10px;
					line-height: 26px;
					margin: 20px auto;
					background-color: #FDD333;
					display: inline-block;
					font-size: 14px;
				}

				.des {}
			}

			.rules {
				text-align: left;
				margin-top: 20px;
				margin-bottom: 100px;

				.tit {
					font-size: 26px;
					margin-bottom: 20px;
				}

				.des {
					color: #FDD333;
				}
			}

			.invite {
				background-color: #fff;
				border-radius: 20px;
				padding: 20px;
				position: relative;
				font-weight: bold;
				min-height: 260px;

				.tit {
					font-size: 24px;
					line-height: 36px;
				}

				.li {
					display: flex;
					text-align: center;
					width: 66%;
					line-height: 32px;

					.tb1 {
						width: 36%;
					}

					.tb2 {
						width: 64%;
					}
				}

				.img {
					position: absolute;
					width: auto;
					height: 200px;
					right: 30px;
					bottom: 30px;
				}
			}
		}
	}

	@media screen and (max-width: 768px) {
		.mobile {
			display: block;
		}

		.pc {
			display: none;
		}
	}
</style>
