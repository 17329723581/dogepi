<template>
	<div class="airdrop bg">
		<canvas id="airdrop"></canvas>
		<div class="bg-moon"></div>
		<div class="header-background">
			<!-- 导航 -->
			<div class="header container">
				<header-cmp></header-cmp>
			</div>
		</div>
		<!-- 规则 -->
		<!-- <div class="rules container" v-if="rate_state == 0">
			<airdroptop></airdroptop>
			<banner @get_state="get_state" style="margin-top: -10%;"></banner>
			<linkc></linkc>
		</div> -->
		
		<div class="rules container">
			<airdrop></airdrop>
		</div>
		<locked-mining class="top10"></locked-mining>
		<div class="rules container">
			<tokenomics style="margin-top: -2.5%;"></tokenomics>
		</div>

		<div class="footer">
			<footer-cmp></footer-cmp>
		</div>
	</div>
</template>

<script>
	import {
		mapState,
		mapActions,
		mapMutations
	} from "vuex";

	import headerCmp from "../home/components/headerCmp.vue";
	import airdroptop from "./components/airdroptop.vue";
	import airdrop from "./components/airdrop.vue";
	import linkc from "./components/linkc.vue";
	import footerCmp from "../home/footer/footerCmp.vue";
	import banner from "./components/banner.vue";
	import {
		abiObject,
		getAbi,
		web3
	} from 'utils/common'
	const {
		contractObject: PerSaleObj
	} = getAbi(abiObject.PerSaleAbi)

	export default {
		data() {
			return {
				accountAddress: this.$store.state.address || "",
				isLogin: false,
				totalAirdrop: 0,
				airdropped: 0,
				// 空投数量
				airdropQuantity: 0,
				rate_state:0
			};
		},
		props: {},
		computed: {
			...mapState(["address", "tokenDecimals", "isInvited"]),
		},
		watch: {
			tokenDecimals: {
				handler(newVal, oldVal) {
					newVal && this.getAirdropInfo()
				},
				immediate: true,
			},
			address: {
				handler(newVal, oldVal) {
					if (newVal !== '') {
						this.isLogin = true
					} else {
						this.isLogin = false
					}
				},
				immediate: true,
			},
		},
		components: {
			headerCmp,
			banner,
			airdroptop,
			linkc,
			footerCmp,
			airdrop
		},
		created() {},
		mounted() {
			init("airdrop");
		},
		methods: {
			...mapMutations(["updateMyspacepi", "updateInviteList"]),
			async getAirdropInfo() {
				this.totalAirdrop = await PerSaleObj.methods.totalAirdrop().call()
				this.airdropped = await PerSaleObj.methods.airdropped().call()
				// this.airdropQuantity = Number(this.totalAirdrop / 10 ** this.tokenDecimals) - Number(this.airdropped / 10 ** this.tokenDecimals)
				this.airdropQuantity = Number(this.totalAirdrop / 10 ** this.tokenDecimals)
				// this.myInvites(this.address)
			},
			get_state(val){
				this.rate_state = 1
			}
			// async myInvites(params) {
			//   const perInviteAirdropAmount = await PerSaleObj.methods.perInviteAirdropAmount().call()
			//   this.perInviteAmount = perInviteAirdropAmount / 10 ** this.tokenDecimals
			//   const inviteList = await PerSaleObj.methods.getInvitee(params).call()
			//   // console.log(inviteList);
			//   this.updateInviteList(inviteList)
			//   // 我的邀请
			//   this.myInviteCount = inviteList
			//   // 我的spacepi
			//   this.myspacepi = (inviteList.length+1)*this.perInviteAmount
			//   this.updateMyspacepi(this.myspacepi)
			//   // 邀请奖励
			//   this.InviteRewards = this.myspacepi - this.perInviteAmount

			// },
			// getAddress(params) {
			//   let location = window.location.host;
			//     this.invitationLink = `https://${location}/#/presale?address=${params}&isInvited=${Number(JSON.parse(this.isInvited)[1])}`;
			//     this.viewLink =
			//       this.invitationLink.slice(0, 15) +
			//       " .... " +
			//       this.invitationLink.slice(68);
			// },
		},
	};
</script>

<style scoped lang="less">
	#airdrop {
		position: fixed;
		widows: 100%;
		height: 100%;
		z-index: 0;
	}
	.top10{
		margin-top: -10%;
	}
	@import "./index";

	@media screen and (min-width: 768px) {
		.header-background {
			background: rgba(33, 21, 59, 0.8);
		}

		.bg {
			background: url("../../assets/bgimg.png");
			-webkit-background-size: cover;
			-moz-background-size: cover;
			-o-background-size: cover;
			background-size: cover;
		}
	}

	@media screen and (max-width: 768px) {
		.bg {
			background: url("../../assets/bgimg.png");
			background-repeat: no-repeat;
			background-size: cover;
			height: 100%;
			justify-content: center;
			align-items: center;
		}
		.top10{
			margin-top: -19%;
		}
	}
</style>
