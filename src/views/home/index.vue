<template>
	<div class="home">
		<div class="bg-moon"></div>
		<div class="header-background">
			<!-- 导航 -->
			<div class="header container">
				<header-cmp></header-cmp>
			</div>
		</div>
		<wrap></wrap>
	</div>
</template>

<script>
	import headerCmp from "./components/headerCmp.vue";
	import wrap from "./Harry/wrap.vue";
	import firstToken from "./components/firstToken.vue";
	import lockedMining from "./components/lockedMining.vue";
	import charts from "./components/charts.vue";
	import vsOther from "./components/vsOther.vue";
	import ourDoc from "./components/ourDoc.vue";
	import roadmap from "./roadmap/roadmap.vue";
	import contactUs from "./components/contactUs.vue";
	import footerCmp from "./footer/footerCmp.vue";
	import answers from "./answers/answers.vue";
	import tokenomics from "./tokenomics/tokenomics.vue";
	

	export default {
		data() {
			return {};
		},
		props: {},
		computed: {},
		watch: {},
		components: {
			headerCmp,
			wrap,
			firstToken,
			lockedMining,
			charts,
			vsOther,
			ourDoc,
			roadmap,
			answers,
			tokenomics,
			contactUs,
			footerCmp,
		},
		created() {
		},
		mounted() {
			//init("home_canvas");
		},
		methods: {},
	};
</script>

<style scoped lang="less">

	@import "./index";
	.bg{
		position: relative;
	}
	#home_canvas{
		position: fixed;
		widows: 100%;
		height: 100%;
		z-index: 0;
	}
	@media screen and (min-width: 768px) {
		.header-background {
			// background: rgba(33, 21, 59, 0.8);
		}

		.bg {
			// background: url("../../assets/homebgimgpc.png") no-repeat no-repeat;
			// background-repeat: no-repeat;
			// background-size: cover;
			// background-size: 100%;

		}
	}

	@media screen and (max-width: 768px) {
		.bg {
			// background: url("../../assets/homebgimgm.png");
			// background-repeat: no-repeat;
			// background-size: cover;
			// background-size: 100%;
		}
	}
</style>
