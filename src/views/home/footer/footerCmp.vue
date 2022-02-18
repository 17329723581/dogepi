<template>
	<div class="warp" style="display: flex;">
		<div class="container" style="position: relative;">
			<div class="container-1">
				<div class="title"> {{this.$t('Community')['title']}}</div>
				<div class="content">{{this.$t('Community')['text']}}</div>
				<div class="bunt" @click="Jump(buttext)">
					{{this.$t('Community')['buttext']}}
				</div>
			</div>
			<div style="width: 100%;height: 0px;border: 1px solid #707070;opacity: 1;float: left;margin-top: 10%;">
			</div>
			<div style="width: 100%;float: left;margin-top: 5%;">
				<div class="c">
					<p style="font-size: 1rem;color: #FFFFFF;"><!-- If you have any question, please contact usCopyright ©
						2021 SpacePi. All Rights Reserved -->{{this.$t('footer1')}} {{this.$t('footer2')}}</p>
				</div>
				<div class="b-c-img">
					<img @click="Jump(url[0])" src="../../../assets/twitter-fill.png" class="c-img" />
					<img @click="Jump(url[1])" src="../../../assets/telegram.png" class="c-img" />
					<img @click="Jump(url[2])" src="../../../assets/discord.png" class="c-img" />
					<img @click="Jump(url[3])" src="../../../assets/reddit.png" class="c-img" />
					<img @click="Jump(url[4])" src="../../../assets/github.png" class="c-img" />
					<img @click="Jump(url[5])" src="../../../assets/medium.png" class="c-img" />
					<img @click="Jump(url[6])" src="../../../assets/copy.png" class="c-img" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				buttext:this.$t('Community')['buttext_url'],
				url:[
					this.$t('footer_twitter_url'),
					this.$t('footer_telegram_url'),
					this.$t('footer_discord_url'),
					this.$t('footer_reddit_url'),
					this.$t('footer_github_url'),
					this.$t('footer_medium_url'),
					this.$t('footer_copy_url')
				]
			};
		},
		props: {},
		computed: {},
		watch: {},
		components: {},
		created() {},
		mounted() {},
		methods: {
			Jump(e) {
				window.open(e)
			},
		},
	};
</script>

<style scoped lang="less">
	.warp {
		width: 100%;
		
		// height: 32.375rem;

		background: #131A21;
		opacity: 1;
		border-radius: 0px;
		padding-top: 2.5rem;
		padding-bottom: 2.5rem;

		.c {
			width: 70%;
			float: left;
		}

		.b-c-img {
			width: 30%;
			float: right;

			.c-img {
				margin-left: 0.9375rem;
				width: 5%;
			}
		}

		.container-1 {
			float: left;
			width: 30%;

			.title {
				font-size: 1.5rem;
				font-family: DIN;
				font-weight: bold;
				color: #FFFFFF;
				opacity: 1;
			}

			.content {
				margin-top: 0.9375rem;
				font-size: 15px;
				font-family: DIN;
				font-weight: 400;
				color: #FDD333;
				opacity: 1;
			}

			.bunt {
				margin-top: 0.9375rem;
				width: 109px;
				height: 46px;
				background: #FDD333;
				opacity: 1;
				border-radius: 12px;
				font-size: 18px;
				font-family: DIN;
				font-weight: bold;
				line-height: 2.5rem;
				color: #333333;
				opacity: 1;
				text-align: center;
			}
		}

		.container-2 {
			float: right;
			width: 30%;

			.title {
				font-family: DIN;
				font-weight: bold;
				color: #FFFFFF;
				opacity: 1;
				padding-bottom: 0.9375rem;
				opacity: 0.5;
				font-size: 1.125rem;
			}

			.text {
				line-height: 1.5rem;
				font-size: 1rem;
				font-family: DIN;
				font-weight: 400;
				color: #FFFFFF;
				opacity: 1;
			}
		}

	}

	@media screen and (max-width: 768px) {
		.warp {
			//height: 35rem;
			
			.c {
				width: 100%;
				float: left;
			}

			.b-c-img {
				width: 100%;
				text-align: center;
				margin-top: 5%;

				.c-img {
					margin: 4%;
					width: 5%;
				}
			}

			.container-1 {
				float: left;
				width: 100%;

				.title {
					font-size: 1.5rem;
					font-family: DIN;
					font-weight: bold;
					color: #FFFFFF;
					opacity: 1;
				}

				.content {
					margin-top: 0.9375rem;
					font-size: 15px;
					font-family: DIN;
					font-weight: 400;
					color: #FDD333;
					opacity: 1;
				}

				.bunt {
					margin-top: 5rem;
					width: 109px;
					height: 46px;
					background: #FDD333;
					opacity: 1;
					border-radius: 12px;
					font-size: 18px;
					font-family: DIN;
					font-weight: bold;
					line-height: 3.5rem;
					color: #333333;
					opacity: 1;
					text-align: center;
				}
			}

			.container-2 {
				float: right;
				width: 100%;

				.title {
					padding-top: 3.125rem;
					font-family: DIN;
					font-weight: bold;
					color: #FFFFFF;
					opacity: 1;
					padding-bottom: 15px;
					opacity: 0.5;
					font-size: 1.125rem;
				}

				.text {
					line-height: 1.5rem;
					font-size: 1rem;
					font-family: DIN;
					font-weight: 400;
					color: #FFFFFF;
					opacity: 1;
				}
			}
		}

	}
</style>
