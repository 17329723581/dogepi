<template>
	<div class="spacepi">
		<a-row type="flex" justify="space-between">
			<a-col :md="24" :xs="24" class="spacepi-left">
				<div style="text-align: center;" class="homebody">
					<!-- PC端 -->
					<div class="homebodybgpc">
						<div>
							<img src="@/assets/spacepititle.png" alt="" style="width:21.25rem" />
						</div>
						<div class="margin-top-1">
							<span
								style="font-family: Alibaba PuHuiTi;font-size: 20px;font-weight:bold;color: #FFFFFF;">{{ this.$t("only") }}
							</span>
						</div>
						<div class="margin-top-1" style="display: flex;justify-content: center;">
							<div style="width: 50rem;">
								<span
									style="font-family: Alibaba PuHuiTi;font-size: 16px;font-weight: bold;color: #FFFFFF;">{{ this.$t("introduce") }}</span>
							</div>
						</div>
						<div>
							<div class="margin-top-5" style="position: 15px 0;">
								<div style="height: 3.75rem;">
									<a-button @click="event()"
										style="width: 20%;height:3.75rem;background: #FDD333;border-radius: 0.9375rem;float: left;border: 0rem;line-height:3.75rem;color: #333333;font-size: 1rem;font-family: DIN;font-weight: bold;">
										<a-dropdown>
											<a class="ant-dropdown-link"
												style="line-height:3.75rem;color: #333333;font-size: 1rem;font-family: DIN;font-weight: bold;">
												{{ this.$t("down")[0] }}
												<a-icon type="down" style="font-size:1vw;" />
											</a>

										</a-dropdown>
									</a-button>
									<a-menu v-if="show==true"
										style="width: 20%;position: absolute;top:65%;border-radius: 12px;padding-top: 5px;padding-bottom: 5px;">

										<a-menu-item @click="Jump(0)">
											<a href="javascript:;"
												style="font-size: 1rem;;font-family: DIN;font-weight: bold;">
												{{url_array[0]['title']}}
											</a>
										</a-menu-item>
										<a-menu-item @click="Jump(1)">
											<a href="javascript:;"
												style="font-size: 1rem;font-family: DIN;font-weight: bold;">{{url_array[1]['title']}}</a>
										</a-menu-item>
										<a-menu-item @click="Jump(2)">
											<a href="javascript:;"
												style="font-size: 1rem;font-family: DIN;font-weight: bold;">{{url_array[2]['title']}}</a>
										</a-menu-item>
									</a-menu>
									<a-button
										style="width:20%;height:3.75rem;background: #FDD333;border-radius: 0.9375rem;float: left;margin-left:20%;border: 0;"
										@click="$router.push('/presale')">
										<span
											style="line-height:3.75rem;color: #333333;font-size: 1rem;font-family: DIN;font-weight: bold;">
											{{ this.$t("bun") }}
										</span>
									</a-button>
									<a-button
										style="width:20%;height:3.75rem;background: #FDD333;border-radius: 0.9375rem;float: left;margin-left:20%;border: 0;"
										@click="$router.push('/airdrop')">
										<span
											style="line-height:3.75rem;color: #333333;font-size: 1rem;font-family: DIN;font-weight: bold;">
											{{ this.$t("bun1") }}
										</span>
									</a-button>
								</div>
							</div>
							<div style="margin-top: 1.875rem;">
								<div style="height: 3.75rem;">
									<div
										style="width: 60%;background:rgba(51,51,51,0.4);border-radius: 12px;height: 3.75rem;color: #FFFFFF;">
										<div @click="tab(1)" :style="tabarray[0]==1?tabycoro:tabhcoro">
											<span
												style="line-height:3.75rem;font-size: 1rem;font-family: DIN;font-weight: bold;display: inline-flex;align-items: center;">
												<img src="@/assets/bsc.png" alt=""
													style="width:2rem;height:2rem;;" />&nbsp;
												{{ this.$t("bunArr")[0] }}
											</span>
										</div>
										<div @click="tab(2)" :style="tabarray[1]==1?tabycoro:tabhcoro">
											<span
												style="line-height:3.75rem;font-size: 1rem;;font-family: DIN;font-weight: bold;display: inline-flex;align-items: center;">
												<img src="@/assets/heco.png" alt=""
													style="width:2rem;height:2rem;" />&nbsp;
												{{ this.$t("bunArr")[1] }}
											</span>
										</div>
										<div @click="tab(3)" :style="tabarray[2]==1?tabycoro:tabhcoro">
											<span
												style="line-height:3.75rem;font-size: 1rem;font-family: DIN;font-weight: bold;display: inline-flex;align-items: center;">
												<img src="@/assets/tron.png" alt=""
													style="width:2rem;height:2rem;" />&nbsp;
												{{ this.$t("bunArr")[2] }}
											</span>
										</div>
									</div>
								</div>

							</div>
							<div style="margin-top: 1.875rem;">
								<div
									style="width: 100%;height: 5.1875rem;background: #2C1D51;border: 1px solid #FFFFFF;border-radius: 0.75rem;">
									<div style="float: left;width: 95%;">
										<span
											style="font-size: 1.5vw;font-family: DIN;font-weight: 400;color: #FFFFFF;line-height: 5.1875rem;float: left;margin-left:2.5%">{{ address }}</span>
									</div>
									<div style="float: right;width: 5%;">
										<span v-clipboard:copy="address" v-clipboard:success="onCopy">
											<a-icon type="copy"
												style="font-size: 1.625rem;font-family: DIN;font-weight: 400;color: #FDD333;line-height: 5.1875rem;float: left;"
												v-clipboard:success="onCopy" />
										</span></span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- 移动端 -->
					<div class="homebodybgm">
						<div>
							<img src="@/assets/spacepititlem.png" alt="" style="width:22.5rem" />
						</div>
						<div class="margin-top-1">
							<span
								style="font-family: Alibaba PuHuiTi;font-size: 16px;font-weight:bold;color: #FDD333;">{{ this.$t("only") }}
							</span>
						</div>
						<div class="margin-top-1" style="display: flex;justify-content: center;">
							<div style="width: 50rem;">
								<span
									style="font-family: PingFang SC;font-size: 18px;font-weight: bold;color: #FFFFFF;">{{ this.$t("introduce") }}</span>
							</div>
						</div>
						<div class="margin-top-5" style="display: flex;">
							<div style="width: 100%;height:3.75rem;background: #FDD333;border-radius: 0.9375rem;"
								@click="event()">
								<a-dropdown>
									<a class="ant-dropdown-link"
										style="line-height:3.75rem;color: #333333;font-size: 1.25rem;font-family: DIN;font-weight: bold;">
										{{ this.$t("down")[0]}}
										<a-icon type="caret-down" style="font-size:1.5rem;" />
									</a>
								</a-dropdown>
								<a-menu v-if="show==true"
									style="width: 100%;position: absolute;border-radius: 12px;padding-top: 5px;padding-bottom: 5px;z-index: 0;">

									<a-menu-item @click="Jump(0)">
										<a href="javascript:;" style="font-size: 1.25rem;font-family: DIN;font-weight: bold;">{{url_array[0]['title']}}</a>
									</a-menu-item>
									<a-menu-item @click="Jump(1)">
										<a href="javascript:;" style="font-size: 1.25rem;font-family: DIN;font-weight: bold;">{{url_array[1]['title']}}</a>
									</a-menu-item>
									<a-menu-item @click="Jump(2)">
										<a href="javascript:;" style="font-size: 1.25rem;font-family: DIN;font-weight: bold;">{{url_array[2]['title']}}</a>
									</a-menu-item>
								</a-menu>
								
							</div>
						</div>
						<div style="margin-top: 1.875rem;display: flex;z-index: 0;height:3.75rem;">
							<a-button style="width:100%;height:3.75rem;background: #FDD333;border-radius: 0.9375rem;float: left;border: 0;z-index: 0;" @click="$router.push('/presale')" v-if="show==false">
								<span style="line-height:3.75rem;color: #333333;font-size: 1.25rem;font-family: DIN;font-weight: bold;">{{ this.$t("bun") }}</span>
							</a-button>
							<a-button style="width:100%;height:3.75rem;background: #FDD333;border-radius: 0.9375rem;float: left;margin-left:5%;border: 0;z-index: 0;" @click="$router.push('/airdrop')" v-if="show==false">
								<span style="line-height:3.75rem;color: #333333;font-size: 1.25rem;font-family: DIN;font-weight: bold;">{{ this.$t("bun1") }}</span>
							</a-button>
						</div>
						<div style="margin-top: 1.875rem;">
							<div style="height: 3.75rem;">
								<div
									style="width: 100%;background:rgba(51,51,51,0.4);border-radius: 12px;height: 3.75rem;color: #FFFFFF;">
									<div @click="tab(1)" :style="tabarray[0]==1?tabycoro:tabhcoro">
										<span
											style="line-height:3.75rem;font-size: 1.25rem;font-family: DIN;font-weight: bold;display: inline-flex;align-items: center;">
											<!-- <img src="@/assets/bsc.png" alt="" style="width:6vw;height:6vw;" />&nbsp; -->
											{{ this.$t("bunArr")[0] }}
										</span>
									</div>
									<div @click="tab(2)" :style="tabarray[1]==1?tabycoro:tabhcoro">
										<span
											style="line-height:3.75rem;font-size:1.25rem;font-family: DIN;font-weight: bold;display: inline-flex;align-items: center;">
											<!-- <img src="@/assets/heco.png" alt="" style="width:6vw;height:6vw;" />&nbsp; -->
											{{ this.$t("bunArr")[1] }}
										</span>
									</div>
									<div @click="tab(3)" :style="tabarray[2]==1?tabycoro:tabhcoro">
										<span
											style="line-height:3.75rem;font-size: 1.25rem;font-family: DIN;font-weight: bold;display: inline-flex;align-items: center;">
											<!-- <img src="@/assets/tron.png" alt="" style="width:6vw;height:6vw;" />&nbsp; -->
											{{ this.$t("bunArr")[2] }}
										</span>
									</div>
								</div>
							</div>

						</div>
						<div style="margin-top: 1.875rem;">
							<div
								style="width: 100%;height: 4rem;background: #2C1D51;border: 1px solid #FFFFFF;border-radius: 0.75rem;">
								<div style="float: left;width: 90%;">
									<span
										style="font-size: 1.625rem;font-family: DIN;font-weight: 400;color: #FFFFFF;line-height: 4rem;float: left;margin-left:1.5625rem">{{ address.substr(0,14) }}...{{ address.substr(address.length-5) }}</span>
								</div>
								<div style="float: right;width: 10%;">
									<span v-clipboard:copy="address" v-clipboard:success="onCopy">
										<a-icon type="copy"
											style="font-size: 1.625rem;font-family: DIN;font-weight: bold;color: #FDD333;line-height: 4rem;float: left;"
											v-clipboard:success="onCopy" />
									</span></span>
								</div>
							</div>
						</div>
					</div>
				</div>


			</a-col>
		</a-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				address: this.$t("bsc_token"),
				tabarray: [1, 0, 0],
				tabycoro: 'width:33%;height:3.75rem;background: #FDD333;border-radius: 0.9375rem;float: left;color: #000000;',
				tabhcoro: 'width:33%;height:3.75rem;border-radius: 0.9375rem;float: left;',
				show: false,
				url_array: this.$t("url_array"),
			};
		},
		props: {},
		computed: {},
		watch: {},
		components: {},
		created() {},
		mounted() {},
		methods: {
			// 地址复制
			onCopy(e) {
				// alert(e.text);
				this.$message.success(this.$t("copySuccess"));
			},
			Jump(e) {
				if (this.show == true) {
					this.show = false;
				} else {
					this.show = true;
				}
				window.open(this.url_array[e].url)
			},
			event() {
				if (this.show == true) {
					this.show = false;
				} else {
					this.show = true;
				}
			},
			tab(e) {
				if (e == 1) {
					this.tabarray = [1, 0, 0]
					this.address = this.$t("bsc_token");
				} else if (e == 2) {
					this.tabarray = [0, 1, 0]
					this.address = this.$t("hoce_token");
				} else {
					this.tabarray = [0, 0, 1]
					this.address = this.$t("tron_token");
				}
			},
		},
	};
</script>

<style scoped lang="less">
	.spacepi {
		width: 100%;
		padding: 50% 0 90px;
		font-family: DIN;

		.spacepi-right {
			position: relative;
			left: -100px;
		}

		.homebodybgm {
			display: none;
		}

		@media screen and (max-width: 768px) {
			padding: 100% 0 50px;

			.spacepi-left {
				order: 2;
			}

			.spacepi-right {
				order: 1;
				position: inherit;
				left: inherit;
			}

			.homebodybgm {
				display: block;
			}

			.homebodybgpc {
				display: none;
			}

		}

		.spacepi-left {


			h1 {
				font-size: 3.5rem;
				font-weight: 900;
				color: @themeColor;

				span:nth-child(1) {
					font-size: 3.5rem;
					color: @fontColor-2;
				}
			}

			p {
				padding: 20px 0 40px;
				font-size: 1rem;
				color: @themeColor;
			}

			.spacepi-btn {
				display: flex;

				a {
					color: #000 !important;
					display: block;
					height: 50px;
					line-height: 50px;
					margin-right: 10px;
					margin-bottom: 40px;
					padding: 0 26px;
					border-radius: 30px;
					border: 1px solid @borderColor-2;
					background: @fontColor-1;
					font-size: 16px;
					font-weight: 700;

					&:nth-child(1) {
						color: #000 !important;
						background: @fontColor-2;
					}
				}
			}

			.copyaddress {
				margin-bottom: 30px;

				span {
					display: inline-block;
					height: 50px;
					line-height: 50px;
					margin-right: 10px;
					padding: 0 16px;
					border-radius: 10px;
					border: 1px solid @borderColor-2;
					background: @fontColor-1;
					font-size: 16px;
					font-weight: 500;
					color: @borderColor-2;

					&:nth-child(2) {
						padding: 0 14px;

						i {
							color: @fontColor-1;
							font-size: 1.5rem;
						}

						background: @fontColor-2;
					}
				}
			}

			.spacepi-link {
				display: flex;

				a {
					display: block;
					width: 40px;
					height: 39px;
					line-height: 38px;
					text-align: center;
					border-radius: 8px;
					margin-right: 12px;
					// background: url("../../../assets/link1.png");
					background-color: #fff;

					img {
						width: 25px;
						height: 25px;
					}
				}
			}
		}

		@media screen and (max-width: 768px) {
			.spacepi-left {
				h1 {
					font-size: 2.5rem;
					font-weight: 900;
					color: @themeColor;

					span:nth-child(1) {
						font-size: 2.5rem;
						color: @fontColor-2;
					}
				}

				p {
					padding: 20px 0 40px;
					font-size: 1.2rem;
					color: @themeColor;
				}

				.spacepi-btn {
					display: flex;
					flex-wrap: wrap;

					a {
						display: block;
						height: 50px;
						line-height: 50px;
						margin-right: 10px;
						margin-bottom: 10px;
						padding: 0 3rem;
						border-radius: 30px;
						border: 1px solid @borderColor-2;
						background: @fontColor-1;
						font-size: 16px;
						font-weight: 700;

						img {
							margin-right: 4px;
						}

						&:nth-child(1) {
							color: #082868 !important;
							background: #f9b24c;
						}
					}
				}

				.copyaddress {
					margin-top: 30px;
					margin-bottom: 30px;
					display: flex;
					justify-content: space-around;

					span {
						width: 80%;
						display: inline-block;
						height: 50px;
						line-height: 50px;
						margin-right: 10px;
						padding: 0 16px;
						border-radius: 10px;
						border: 1px solid @borderColor-2;
						background: @fontColor-1;
						font-size: 16px;
						font-weight: 500;
						color: @borderColor-2;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;

						&:nth-child(2) {
							width: 15%;
							text-align: center;
							padding: 0;

							i {
								font-size: 1.6rem;
								color: #fff;
							}

							background-color: #f9b24c;
						}
					}
				}

				.spacepi-link {
					display: flex;

					a {
						display: block;
						width: 40px;
						height: 40px;
						line-height: 40px;
						text-align: center;
						border-radius: 8px;
						border: 0;
						margin-right: 15px;
						background-color: #fff;

						img {
							width: 25px;
							height: 25px;
						}
					}
				}
			}
		}

		.spacepi-right {
			text-align: center;

			img {
				position: absolute;
				right: 0;
				// top: 0px;
				width: 90%;
				z-index: 99;
			}

			@media screen and (max-width: 768px) {
				img {
					position: absolute;
					right: 0;
					// top: 0px;
					width: 50%;
					z-index: 99;
				}
			}
		}
	}

	.margin-top-1 {
		margin-top: 1rem;
	}

	;

	.margin-top-5 {
		margin-top: 5rem;
	}
</style>
