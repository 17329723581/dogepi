<template>
	<div class="warp">
		<div style="width:100%;">
			<div class="pc">
				<div class="layout">
					<div class="font-color-y">{{this.$t('Tokenomics')['text']}}</div>
					<div class="title-b">{{this.$t('Tokenomics')['title']}}</div>
					<div class="font-color-y" style="font-size: 1rem;">{{this.$t('Tokenomics')['content']}}</div>
					<div style="width: 100%;margin-top: 0.9375rem;text-align: center;">
						<div style="width: 30%;float: left;">
							<div class="title-b">{{this.$t('Tokenomics')['array'][0]['title']}}</div>
							<div class="font-color-y" style="font-size: 1rem;">{{this.$t('Tokenomics')['array'][0]['text']}}</div>
						</div>
						<div style="width: 30%;float: left;">
							<div class="title-b">{{this.$t('Tokenomics')['array'][1]['title']}}</div>
							<div class="font-color-y" style="font-size: 1rem;">{{this.$t('Tokenomics')['array'][1]['text']}}</div>
						</div>
						<div style="width: 35%;float: right;">
							<div class="title-b">{{this.$t('Tokenomics')['array'][2]['title']}}</div>
							<div class="font-color-y" style="font-size: 1rem;">{{this.$t('Tokenomics')['array'][2]['text']}}</div>
						</div>
					</div>
				</div>
				<div class="layout">
					<div style="width: 75%;float: right;">
						<img src="@/assets/bgimg2.png" alt=""
							style="width:100%;height:100%;background-size: cover;border-radius: 2%;object-fit: cover;float: left;" />
					</div>
				</div>
			</div>
			<div class="m">
				<div class="layout" style="width: 100%;margin-bottom: 5rem;margin-top: 15%;">
					<img src="@/assets/bgimg2.png" alt=""
							style="width:100%;height:100%;background-size: cover;border-radius: 2%;object-fit: cover;float: left;" />
					
				</div>
				<div class="layout" style="width: 100%;">
					<div class="font-color-y">{{this.$t('Tokenomics')['text']}}</div>
					<div class="title-b">{{this.$t('Tokenomics')['title']}}</div>
					<div class="font-color-y" style="font-size: 1rem;">{{this.$t('Tokenomics')['content']}}</div>
					<div style="width: 100%;margin-top: 0.9375rem;text-align: left;">
						<div style="width: 100%;float: left;">
							<div class="title-b">{{this.$t('Tokenomics')['array'][0]['title']}}</div>
							<div class="font-color-y" style="font-size: 1.25rem;">{{this.$t('Tokenomics')['array'][0]['text']}}</div>
						</div>
						<div style="width: 100%;float: left;">
							<div class="title-b">{{this.$t('Tokenomics')['array'][1]['title']}}</div>
							<div class="font-color-y" style="font-size: 1.25rem;">{{this.$t('Tokenomics')['array'][1]['text']}}</div>
						</div>
						<div style="width: 100%;float: right;">
							<div class="title-b">{{this.$t('Tokenomics')['array'][2]['title']}}</div>
							<div class="font-color-y" style="font-size: 1.25rem;">{{this.$t('Tokenomics')['array'][2]['text']}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		props: {},
		computed: {},
		watch: {},
		components: {},
		created() {},
		mounted() {},
		methods: {},
	};
</script>

<style scoped lang="less">
	.warp {
		margin-top: 5rem;
		width: 100%;
		float: left;

		.layout {
			width: 50%;
			float: left;
		}

		.m {
			display: none;
		}

		.font-color-y {
			font-size: 1.125rem;
			color: #FDD333;
			font-weight: bold;
			font-family: DIN;
		}

		.title-b {
			margin-top: 0.625rem;
			margin-bottom: 0.9375rem;
			font-size: 2.1875rem;
			font-family: DIN;
			font-weight: bold;
			color: #FFFFFF;
			opacity: 1;
		}

	}

	@media screen and (max-width: 768px) {
		.warp {
			.m {
				display: block;
			}

			.pc {
				display: none;
			}
		}
	}
</style>
