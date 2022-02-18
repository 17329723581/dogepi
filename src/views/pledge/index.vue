<template>
	<div class="pledge bg">
		<canvas id="pledge_canvas"></canvas>
		<div class="bg-moon"></div>
		<div class="header-background">
			<!-- 导航 -->
			<div class="header container">
				<header-cmp></header-cmp>
			</div>
		</div>
		<div class="pledge-warp container">
			<pledge :InviteList="InviteList" @emitMyInvitee="emitMyInvitee"></pledge>
			<comparison :InviteList="InviteList"></comparison>
			<locked-mining></locked-mining>
		</div>
		<!-- 底部 -->
		<div class="footer">
			<footer-cmp></footer-cmp>
		</div>
	</div>
</template>

<script>
	import headerCmp from "../home/components/headerCmp.vue";
	import pledge from "./components/pledge.vue";
	import comparison from "./components/comparison.vue";
	import footerCmp from "../home/footer/footerCmp.vue";
	import lockedMining from "../home/components/lockedMining.vue";

	import {
		abiObject,
		getAbi
	} from 'utils/common'
	import {
		mapState
	} from 'vuex';
	const {
		contractObject: InviteObj
	} = getAbi(abiObject.InviteAbi)
	const {
		contractObject: StakePoolObj
	} = getAbi(abiObject.InviteAbi)
	export default {
		data() {
			return {
				InviteList: []
			};
		},
		props: {},
		computed: {
			...mapState(["address"])
		},
		watch: {},
		components: {
			headerCmp,
			pledge,
			comparison,
			footerCmp,
			lockedMining
		},
		created() {
			this.getMyInvitee()
		},
		mounted() {
			init("pledge_canvas");
		},
		methods: {
			async getMyInvitee() {
				// InviteObj.methods.getInvitee(addr).call().then((list) => {
				//     list.map((x) => {
				//         StakePoolObj.methods.getStakeInfo(x).call().then((y)=>{
				//             $("#invitee").append(`<li>${x} 质押：${web3.utils.fromWei(y[0])} 算力值：${web3.utils.fromWei(y[1])}</li>`)
				//         })
				//     })
				//     $("#invite-count").text(list.length)
				// })
				const InviteList = await InviteObj.methods.getInvitee(this.address).call();
				this.InviteList = InviteList
			},
			emitMyInvitee() {
				this.getMyInvitee()
			}
		},
	};
</script>

<style scoped lang="less">
	@import "./index";

	#pledge_canvas{
		position: fixed;
		widows: 100%;
		height: 100%;
		z-index: 0;
	}
	@media screen and (min-width: 768px) {
		.header-background {
			background:rgba(33,21,59,0.8);
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
	}
</style>