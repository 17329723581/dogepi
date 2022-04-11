<template>
	<div class="warp">
		<div class="pc">
			<a-row type="flex" class="banner" justify="space-between">
				<a-col :md="12" :xs="24" class="presale-left">
					<h1>
						<span>{{ this.$t("a_top_text1") }}</span> {{ this.$t("a_top_text2") }}
					</h1>
					<div>
						<p class="time-title-y">{{ this.$t("a_top_text3") }}</p>
						<div class="finish">
							<a-statistic-countdown :value="deadline" format="DD: HH: mm: ss " @finish="finish()" />
							<ul>
								<li>Days</li>
								<li>Hours</li>
								<li>Minutes</li>
								<li style="padding-right: 500px;">Seconds</li>
							</ul>
						</div>
					</div>
					<h2 style="line-height: 28px;font-size: 20px;font-weight: 400">
						{{ this.$t("a_top_text4") }}
					</h2>
					<div class="but" style="display: flex;">
						<div class="but-b">
							<img class="but-img" src="@/assets/twitter-fill-y.png" alt="" />
						</div>
						<div class="but-b">
							<img class="but-img" src="@/assets/telegram-y.png" alt="" />
						</div>
						<div class="but-b"
							style="width: 14.375rem;background: #FDD333;font-weight: 800;font-size: 1rem;">
							{{this.$t("a_top_but")}}
						</div>
					</div>
				</a-col>
			</a-row>
		</div>
		<div class="mobile">
			<a-col :md="12" :xs="24" class="presale-left">
				<h1
					style="text-align: center;font-size: 2.5rem;font-family: DIN;font-weight: bold;line-height: 3.5rem;">
					{{ this.$t("a_top_text1_m") }} <span>{{ this.$t("a_top_text2_m") }}</span>
				</h1>
				<div>
					<p class="time-title-y" style="font-size: 2rem;text-align: center;">{{ this.$t("a_top_text3_m") }}
					</p>
					<div class="finish">
						<a-statistic-countdown :value="deadline" format="DD : HH : mm : ss " @finish="finish()" />
						<ul>
							<li>Days</li>
							<li>Hours</li>
							<li>Minutes</li>
							<li>Seconds</li>
						</ul>
					</div>
				</div>
				<h2 style="line-height: 28px;font-size: 20px;font-weight: 400">
					{{ this.$t("a_top_text4") }}
				</h2>
				<div class="but" style="display: flex;">
					<div class="but-b">
						<img class="but-img" src="@/assets/twitter-fill-y.png" alt="" />
					</div>
					<div class="but-b">
						<img class="but-img" src="@/assets/telegram-y.png" alt="" />
					</div>
					<div class="but-b"
						style="width: 14.375rem;background: #FDD333;font-weight: 800;font-size: 1rem;">
						{{this.$t("a_top_but")}}
					</div>
				</div>
			</a-col>
		</div>
	</div>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions
	} from "vuex";
	import {
		abiObject,
		getAbi
	} from "utils/common";
	const {
		contractObject: PerSaleObj
	} = getAbi(abiObject.PerSaleAbi);
	export default {
		data() {
			return {
				// 默认地址
				initalAddress: "",
			};
		},
		props: {
			isLogin: {
				type: Boolean,
			},
			airdropQuantity: {
				type: Number,
			},
		},
		watch: {
			address: {},
		},
		computed: {
			...mapState(["deadline", "lang", "address", "isInvited"]),
			invite() {
				const isInvited = sessionStorage.getItem("isRoueInvited");

				if (isInvited !== "undefined") {
					return isInvited;
				} else {
					return this.initalAddress;
				}
			},
		},

		components: {
		},
		created() {
			this.getOwner();
			this.getRouteInvited();
		},
		mounted() {},
		methods: {
			...mapMutations(["editAddress", "updateIsInvited", "updateInvitationLink"]),
			...mapActions(["getInvited", "myInvites"]),
			// save route query address
			// 登录
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
				font-size: 2.2rem;
				text-align: left;
			}

			.r_num {
				color: #FDD333;
				font-size: 6rem;
				position: absolute;
				bottom: 60px;
				right: 0px;
			}

			.r_msg {
				font-size: 2.2rem;
				position: absolute;
				display: inline-block;
				bottom: 0px;
				right: 0px;
			}
		}

		.titcom {
			width: 360px;

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

			.time {
				font-weight: 900;
				color: #000;
				font-size: 36px;
			}

			.ul {
				padding: 0px 10px;
				margin: 10px auto;

				.li {
					font-size: 20px;
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
			}

			.des {
				font-size: 14px;
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
		.finish {
			
			/deep/ .ant-statistic-content {
				span {
					font-size: 4.6vw;
					font-weight: 800;
				}
			}

			ul {
				display: flex;
				// justify-content:center;
				color: #FDD333;
				margin-top: -10px;
				font-size: 20px;
				margin-bottom: 30px !important;

				li {
					padding: 0 2.99vw 0 2.3125rem;
				}
			}
		}
	}

	.warp {
		width: 100%;
		padding: 73px 0 30px;
		margin-bottom: 70px;

		.banner {
			position: relative;
			
			.logo {
				
				position: absolute;
				top: 0;
				right: 0px;
				bottom: 0px;
				width: 25vw;
				height: 25vw;
				// height: 500px;
				
			}
		}

		.presale-left {
			position: relative;

			h1 {
				font-size: 3.5rem;
				font-weight: 900;
				line-height: 60px;
				margin-bottom: 20px !important;

				span {
					color: #FDD333;
				}
			}

			h2 {
				font-size: 2rem;
				font-weight: 900;
				line-height: 60px;
				margin-bottom: 20px !important;
			}

			.but {
				width: 100%;
				margin-top: 5.25rem;

				.but-b {
					border-radius: 0.5rem;
					display: flex;
					width: 3.4375rem;
					height: 3.4375rem;
					background: #FFFFFF;
					float: left;
					margin-right: 2.4375rem;
					align-items: center;
					text-align: center;
					justify-content: center;

					.but-img {
						width: 40%;
						height: 40%;
						background-size: cover;
						object-fit: cover;
					}
				}
			}

			.time-title-y {
				font-size: 1.25rem;
				font-weight: 400;
				color: #FDD333;
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
				}

				.time {
					font-weight: 900;
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

			.finish {
				/deep/ .ant-statistic-content {
					span {
						display: flex;
						justify-content: center;
						font-size: 3.25rem;
						font-weight: 800;
					}
				}

				ul {
					display: flex;
					// justify-content:center;
					color: #FDD333;
					margin-top: 5px;
					font-size: 10px;
					margin-bottom: 30px !important;

					li {
						padding: 0 4.5% 0 9.5%;
					}
				}
			}
		}

		.pc {
			display: none;
		}
	}
</style>
