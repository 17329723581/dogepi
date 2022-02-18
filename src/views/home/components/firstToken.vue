<template>
	<div class="warp" style="display: flex;">
		<!-- PC端 -->
		<div class="firstTokenpc" style="width: 100%; height: auto;padding-bottom: 10rem;">
			<div style="width: 100%;position: relative;">
				<div style="width: 50%;float: left;">
					<div style="display: flex;">
						<!-- 图片 -->
						<div style="width: 50%;float: left;">
							<img src="@/assets/car1.png" alt=""
								style="width: 90%;height:100%;background-size: cover;border-radius: 5%;object-fit: cover;" />
						</div>
						<!-- 卡片 -->
						<div style="width: 50%;float: right;">
							<div class="car">
								<span class="car-title">{{this.$t('car')[0]['title']}}</span>
								<div class="car-content">{{this.$t('car')[0]['content']}}</div>
							</div>
						</div>
					</div>
					<div style="display: flex;">
						<!-- 卡片 -->
						<div style="width: 50%;float: left;margin-top: 1.5rem;">
							<div class="car">
								<span class="car-title">{{this.$t('car')[1]['title']}}</span>
								<div class="car-content">{{this.$t('car')[1]['content']}}</div>
							</div>
						</div>
						<!-- 图片 -->
						<div style="width: 50%;margin-top: 1.5rem;float: right;">
							<img src="@/assets/car2.png" alt=""
								style="width: 90%;height: 100%;background-size: cover;border-radius: 5%;object-fit: scale-down;" />
						</div>
					</div>
				</div>
				<!-- What is SpacePi？ -->
				<div style="width: 50%;float: right;height:100%;padding-left: 1.25rem;position:relative;">
					<div>
						<span class="font-color-b">{{this.$t('doge')}}</span>
					</div>
					<div class="font-color-y" style="padding-top: 0.9375rem;font-size: 1.0625rem;">
						{{this.$t('text')[0]}}
					</div>
					<div class="font-color-y" style="padding-top: 1.5rem;font-size: 1.0625rem;">
						{{this.$t('text')[1]}}
					</div>
					<div class="font-color-y" style="padding-top: 1.5rem;font-size: 1.0625rem;">
						{{this.$t('text')[2]}}
					</div>
					<div style="position:relative;width: 50%;height: 3.75rem;margin-top: 10%;">
						<div @click="Jump(tetxbu_url)"
							style="width:11.25rem;height: 3.375rem;background: #FDD333;opacity: 1;border-radius: 0.75rem;text-align: center;">
							<span
								style="line-height:3.75rem;color: #333333;font-size: 1.25rem;font-family: DIN;font-weight: bold;">
								{{this.$t('tetxbu')}} 
							</span>
						</div>
					</div>
				</div>
				<div style="display: flex;width: 100%;height:auto;">
					<div style="margin-top: 10rem; width: 100%;font-family: DIN;">
						<!-- ENTER THE STARL METAVERSE -->
						<div style="width: 50%;float: left;">
							<div style="width: 100%;">
								<span class="font-color-y"
									style="font-size: 1.125rem;">{{this.$t('station')['enter']}}</span>
							</div>
							<div style="width: 100%;">
								<span class="font-color-b">{{this.$t('station')['title']}}</span>
							</div>
							<div style="margin-top:3.125rem;width: 100%;">
								<span class="font-color-y">
									{{this.$t('station')['text'][0]}}
								</span>
							</div>
							<div style="margin-top: 1.875rem;width: 100%;padding-right:1.5625rem;">
								<span class="font-color-y">
									{{this.$t('station')['text'][1]}}
								</span>
							</div>
							<!-- STARL Token -->
							<div style="margin-top: 1.875rem;width: 50%;float: left;padding-right:1.5625rem;">
								<div style="width: 100%;">
									<span class="font-color-b"
										style="font-size: 1.125rem;">{{this.$t('station')['c'][0]['title']}}</span>
								</div>
								<div style="margin-top:0.625rem;width: 100%;">
									<span class="font-color-y">
										{{this.$t('station')['c'][0]['text']}}
									</span>
								</div>
							</div>
							<!-- Profile -->
							<div style="margin-top: 1.875rem;width: 50%;float: right;padding-right:1.5625rem;">
								<div style="width: 100%;">
									<span class="font-color-b"
										style="font-size: 1.125rem;">{{this.$t('station')['c'][1]['title']}}</span>
								</div>
								<div style="margin-top:0.625rem;width: 100%;">
									<span class="font-color-y">
										{{this.$t('station')['c'][1]['text']}}
									</span>
								</div>
							</div>
							<!-- SATE NFTs -->
							<div style="margin-top: 1.875rem;width: 50%;float: left;padding-right:1.5625rem;">
								<div style="width: 100%;">
									<span class="font-color-b"
										style="font-size: 1.125rem;">{{this.$t('station')['c'][2]['title']}}</span>
								</div>
								<div style="margin-top:0.625rem;width: 100%;">
									<span class="font-color-y">
										{{this.$t('station')['c'][2]['text']}}
									</span>
								</div>
							</div>
							<!-- SATE NFTs -->
							<div style="margin-top: 1.875rem;width: 50%;float: right;padding-right:1.5625rem;">
								<div style="width: 100%;">
									<span class="font-color-b"
										style="font-size: 1.125rem;">{{this.$t('station')['c'][3]['title']}}</span>
								</div>
								<div style="margin-top:0.625rem;width: 100%;">
									<span class="font-color-y">
										{{this.$t('station')['c'][3]['text']}}
									</span>
								</div>
							</div>
							<!-- Gaming Portal -->
							<div style="margin-top: 1.875rem;width: 50%;float: left;padding-right:1.5625rem;">
								<div style="width: 100%;">
									<span class="font-color-b"
										style="font-size: 1.125rem;">{{this.$t('station')['c'][4]['title']}}</span>
								</div>
								<div style="margin-top:0.625rem;width: 100%;">
									<span class="font-color-y">
										{{this.$t('station')['c'][4]['text']}}
									</span>
								</div>
							</div>
							<!-- Gaming Portal -->
							<div style="margin-top: 1.875rem;width: 50%;float: left;padding-right:1.5625rem;">
								<div style="width: 100%;">
									<span class="font-color-b"
										style="font-size: 1.125rem;">{{this.$t('station')['c'][5]['title']}}</span>
								</div>
								<div style="margin-top:0.625rem;width: 100%;">
									<span class="font-color-y">
										{{this.$t('station')['c'][5]['text']}}
									</span>
								</div>
							</div>
						</div>
						<!--  -->
						<div style="width: 50%;float: right;">
							<div style="width:70%;float: right;margin-top: -3.125rem;">
								<!-- <img src="@/assets/bg-c.png" alt=""
									style="width: 100%;height:100%;background-size: cover;border-radius: 5%;object-fit: cover;" /> -->
								<logo class="logo"></logo>
							</div>
						</div>
						<div style="width: 50%;float: right;">
							<div style="width:100%;float: right;margin-top:5%;">
								<!-- Meo Satelite卡片 -->
								<div class="car-d" style="float: left;">
									<div style="width: 100%;" class="content">
										<div class="car-d-img">
											<img src="@/assets/car-1.png" alt=""
												style="width:100%;height:100%;background-size: cover;border-radius: 5%;object-fit: cover;" />
										</div>
										<div class="car-d-title">{{this.$t('car1')[0]['text']}}</div>
										<div class="car-d-content">{{this.$t('car1')[0]['title']}}</div>
										<div style="width: 100%;">
											<div style="padding-top: 0.625rem;display: flex;align-items: center">
												<img src="@/assets/ture.png" alt=""
													style="width:1.5rem;height:100%;background-size: cover;border-radius: 5%;object-fit: cover;" />&nbsp;
												<div>
													<span
														style="width: 100%;float: left;font-size: 0.875rem;font-family: PingFang SC;font-weight: 400;color: #E1E1E1;margin-top: 0.75rem;line-height: 0.5rem;">{{this.$t('car1')[0]['trx']}}</span>
													<span
														style="font-size: 0.625rem;font-family: PingFang SC;font-weight: 400;color: #E1E1E1;line-height: 1rem;">{{this.$t('car1')[0]['usd']}}</span>
												</div>

											</div>
										</div>
									</div>
								</div>
								<!-- Meo Satelite卡片 -->
								<div class="car-d"
									style="float: left;position: relative;top:5rem;right: 5rem;z-index: 0;">
									<div style="width: 100%;" class="content">
										<div class="car-d-img">
											<img src="@/assets/car-2.png" alt=""
												style="width:100%;height:100%;background-size: cover;border-radius: 5%;object-fit: cover;" />
										</div>
										<div class="car-d-title">{{this.$t('car1')[1]['text']}}</div>
										<div class="car-d-content">{{this.$t('car1')[1]['title']}}</div>
										<div style="width: 100%;">
											<div style="padding-top: 0.625rem;display: flex;align-items: center">
												<img src="@/assets/ture.png" alt=""
													style="width:1.5rem;height:100%;background-size: cover;border-radius: 5%;object-fit: cover;" />&nbsp;
												<div>
													<span
														style="width: 100%;float: left;font-size: 0.875rem;font-family: PingFang SC;font-weight: 400;color: #E1E1E1;margin-top: 0.75rem;line-height: 0.5rem;">{{this.$t('car1')[1]['trx']}}</span>
													<span
														style="font-size: 0.625rem;font-family: PingFang SC;font-weight: 400;color: #E1E1E1;">{{this.$t('car1')[1]['usd']}}</span>
												</div>

											</div>
										</div>
									</div>

								</div>
								<!-- Meo Satelite卡片 -->
								<div class="car-d"
									style="float: right;position: relative;top:-9rem;right: 0rem;z-index: 1;">
									<div style="width: 100%;" class="content">
										<div class="car-d-img">
											<img src="@/assets/car-3.png" alt=""
												style="width:100%;height:100%;background-size: cover;border-radius: 5%;object-fit: cover;" />
										</div>
										<div class="car-d-title">{{this.$t('car1')[2]['text']}}</div>
										<div class="car-d-content">{{this.$t('car1')[2]['title']}}</div>
										<div style="width: 100%;">
											<div style="padding-top: 0.625rem;display: flex;align-items: center">
												<img src="@/assets/ture.png" alt=""
													style="width:1.5rem;height:100%;background-size: cover;border-radius: 5%;object-fit: cover;" />&nbsp;
												<div>
													<span
														style="width: 100%;float: left;font-size: 0.875rem;font-family: PingFang SC;font-weight: 400;color: #E1E1E1;margin-top: 0.75rem;line-height: 0.5rem;">{{this.$t('car1')[2]['trx']}}</span>
													<span
														style="font-size: 0.625rem;font-family: PingFang SC;font-weight: 400;color: #E1E1E1;">{{this.$t('car1')[2]['usd']}}</span>
												</div>

											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
		<!-- 移动端 -->
		<div class="firstTokenm" style="width: 100%;height: auto">
			<!-- 图片 -->
			<div>
				<img src="@/assets/car1.png" alt=""
					style="width: 100%;height:100%;background-size: cover;border-radius: 0;object-fit: cover;" />
			</div>
			<!-- 卡片 -->
			<div class="margi-top-50">
				<div class="car" style="width: 100%;height: auto;">
					<span class="car-title">{{this.$t('car')[0]['title']}}</span>
					<div class="car-content" style="line-height: 26px;padding-top: 1.5625rem;">
						{{this.$t('car')[0]['content']}}
					</div>
				</div>
			</div>
			<!-- 图片 -->
			<div class="margi-top-50" style="text-align: center;">
				<img src="@/assets/car2.png" alt=""
					style="width: 75%;height: 75%;background-size: cover;object-fit: cover;" />
			</div>
			<!-- 卡片 -->
			<div class="margi-top-50">
				<div class="car" style="width: 100%;height: auto">
					<span class="car-title">{{this.$t('car')[1]['title']}}</span>
					<div class="car-content" style="line-height: 26px;padding-top: 1.5625rem;">
						{{this.$t('car')[1]['content']}}
					</div>
				</div>
			</div>
			
			<!-- What is SpacePi？ -->
			<div class="margi-top-50" style="margin-top:5rem;z-index: 99;">
				<div style="width: 100%;height:100%;">
					<div style="font-size: 2rem;font-family: DIN;font-weight: bold;color: #FFFFFF;">
						<span>{{this.$t('doge')}}</span>
					</div>
					<div
						style="padding-top: 0.9375rem;color: #FDD333;font-weight: 400;font-family: DIN;font-size: 1.25rem;">
						{{this.$t('text')[0]}}
					</div>
					<div
						style="padding-top: 1.5rem;color: #ffffff;font-weight: 400;font-family: DIN;font-size: 1.25rem;">
						{{this.$t('text')[1]}}
					</div>
					<div
						style="padding-top: 1.5rem;color: #FFFFFF;font-weight: 400;font-family: DIN;font-size: 1.25rem;">
						{{this.$t('text')[2]}}
					</div>
					<div style="margin-top: 2rem;">
						<a-button @click="Jump(tetxbu_url)" style="width:8.9375rem;height: 3.75rem;background: #FDD333;opacity: 1;border-radius: 0.5rem;text-align: center;border: 0;">
						    <span
						    	style="line-height:3.75rem;color: #333333;font-size: 1.25rem;font-family: DIN;font-weight: bold;">
						    	{{this.$t('tetxbu')}}
						    </span>
						</a-button>
					</div>
				</div>
			</div>
			<!-- ENTER THE STARL METAVERSE -->
			<div class="margi-top-50">
				<div style="width: 100%;">
					<span class="font-color-y" style="font-size: 1.125rem;">{{this.$t('station')['enter']}}</span>
				</div>
				<div style="width: 100%;">
					<span class="font-color-b">{{this.$t('station')['title']}}</span>
				</div>
				<div style="margin-top:3.125rem;width: 100%;">
					<span class="font-color-y" style="color: #FFFFFF;">
						{{this.$t('station')['text'][0]}}
					</span>
				</div>
				<div style="margin-top: 1.875rem;width: 100%;">
					<span class="font-color-y" style="color: #FFFFFF;">
						{{this.$t('station')['text'][1]}}
					</span>
				</div>
				<!-- STARL Token -->
				<div style="margin-top: 1.875rem;width: 100%;">
					<div style="width: 100%;">
						<span class="font-color-b"
							style="font-size: 1.125rem;">{{this.$t('station')['c'][0]['title']}}</span>
					</div>
					<div style="margin-top:0.625rem;width: 100%;">
						<span class="font-color-y">
							{{this.$t('station')['c'][0]['text']}}
						</span>
					</div>
				</div>
				<!-- Profile -->
				<div style="margin-top: 1.875rem;width: 100%;">
					<div style="width: 100%;">
						<span class="font-color-b"
							style="font-size: 1.125rem;">{{this.$t('station')['c'][1]['title']}}</span>
					</div>
					<div style="margin-top:0.625rem;width: 100%;">
						<span class="font-color-y">
							{{this.$t('station')['c'][1]['text']}}
						</span>
					</div>
				</div>
				<!-- SATE NFTs -->
				<div style="margin-top: 1.875rem;width: 100%;">
					<div style="width: 100%;">
						<span class="font-color-b"
							style="font-size: 1.125rem;">{{this.$t('station')['c'][2]['title']}}</span>
					</div>
					<div style="margin-top:0.625rem;width: 100%;">
						<span class="font-color-y">
							{{this.$t('station')['c'][2]['text']}}
						</span>
					</div>
				</div>
				<!-- SATE NFTs -->
				<div style="margin-top: 1.875rem;width: 100%;">
					<div style="width: 100%;">
						<span class="font-color-b"
							style="font-size: 1.125rem;">{{this.$t('station')['c'][3]['title']}}</span>
					</div>
					<div style="margin-top:0.625rem;width: 100%;">
						<span class="font-color-y">
							{{this.$t('station')['c'][3]['text']}}
						</span>
					</div>
				</div>
				<!-- Gaming Portal -->
				<div style="margin-top: 1.875rem;width: 100%;">
					<div style="width: 100%;">
						<span class="font-color-b"
							style="font-size: 1.125rem;">{{this.$t('station')['c'][4]['title']}}</span>
					</div>
					<div style="margin-top:0.625rem;width: 100%;">
						<span class="font-color-y">
							{{this.$t('station')['c'][4]['text']}}
						</span>
					</div>
				</div>
				<!-- Gaming Portal -->
				<div style="margin-top: 1.875rem;width: 100%;float: left;">
					<div style="width: 100%;">
						<span class="font-color-b"
							style="font-size: 1.125rem;">{{this.$t('station')['c'][5]['title']}}</span>
					</div>
					<div style="margin-top:0.625rem;width: 100%;">
						<span class="font-color-y">
							{{this.$t('station')['c'][5]['text']}}
						</span>
					</div>
				</div>
			</div>
			<div style="margin-top:3.125rem;width: 100%;">
				<div style="width: 100%;">
					<div style="width:100%;">
						<!-- <img src="@/assets/bg-c.png" alt=""
							style="width: 100%;height:100%;background-size: cover;;object-fit: cover;" /> -->
						<mLogo class="logo"></mLogo>
					</div>
				</div>
				<div style="width: 100%;">
					<div style="width:100%;float: right;margin-top:5%;">
						<!-- Meo Satelite卡片 -->
						<div class="car-d" style="float: left;width:40%;">
							<div style="width: 100%;" class="content">
								<div class="car-d-img">
									<img src="@/assets/car-1.png" alt=""
										style="width:100%;height:100%;background-size: cover;border-radius: 5%;object-fit: cover;" />
								</div>
								<div class="car-d-title">{{this.$t('car1')[0]['text']}}</div>
								<div class="car-d-content">{{this.$t('car1')[0]['title']}}</div>
								<div style="width: 100%;">
									<div style="padding-top: 0.625rem;display: flex;align-items: center">
										<img src="@/assets/ture.png" alt=""
											style="width:1.5rem;height:100%;background-size: cover;border-radius: 5%;object-fit: cover;" />&nbsp;
										<div>
											<span
												style="width: 100%;float: left;font-size: 0.875rem;font-family: PingFang SC;font-weight: 400;color: #E1E1E1;margin-top: 0.15625rem;">{{this.$t('car1')[0]['trx']}}</span>
											<span
												style="font-size: 0.625rem;font-family: PingFang SC;font-weight: 400;color: #E1E1E1;">{{this.$t('car1')[0]['usd']}}</span>
										</div>

									</div>
								</div>
							</div>
						</div>
						<!-- Meo Satelite卡片 -->
						<div class="car-d"
							style="float: left;position: relative;top:5rem;right: 2rem;z-index: 0;width:40%;">
							<div style="width: 100%;" class="content">
								<div class="car-d-img">
									<img src="@/assets/car-2.png" alt=""
										style="width:100%;height:100%;background-size: cover;border-radius: 5%;object-fit: cover;" />
								</div>
								<div class="car-d-title">{{this.$t('car1')[1]['text']}}</div>
								<div class="car-d-content">{{this.$t('car1')[1]['title']}}</div>
								<div style="width: 100%;">
									<div style="padding-top: 0.625rem;display: flex;align-items: center">
										<img src="@/assets/ture.png" alt=""
											style="width:1.5rem;height:100%;background-size: cover;border-radius: 5%;object-fit: cover;" />&nbsp;
										<div>
											<span
												style="width: 100%;float: left;font-size: 0.875rem;font-family: PingFang SC;font-weight: 400;color: #E1E1E1;margin-top: 0.15625rem;">{{this.$t('car1')[1]['trx']}}</span>
											<span
												style="font-size: 0.625rem;font-family: PingFang SC;font-weight: 400;color: #E1E1E1;">{{this.$t('car1')[1]['usd']}}</span>
										</div>

									</div>
								</div>
							</div>

						</div>
						<!-- Meo Satelite卡片 -->
						<div class="car-d"
							style="float: right;position: relative;top:-9rem;right: 0rem;z-index: -1;width:40%;">
							<div style="width: 100%;" class="content">
								<div class="car-d-img">
									<img src="@/assets/car-3.png" alt=""
										style="width:100%;height:100%;background-size: cover;border-radius: 5%;object-fit: cover;" />
								</div>
								<div class="car-d-title">{{this.$t('car1')[2]['text']}}</div>
								<div class="car-d-content">{{this.$t('car1')[2]['title']}}</div>
								<div style="width: 100%;">
									<div style="padding-top: 0.625rem;display: flex;align-items: center">
										<img src="@/assets/ture.png" alt=""
											style="width:1.5rem;height:100%;background-size: cover;border-radius: 5%;object-fit: cover;" />&nbsp;
										<div>
											<span
												style="width: 100%;float: left;font-size: 0.875rem;font-family: PingFang SC;font-weight: 400;color: #E1E1E1;margin-top: 0.15625rem;">{{this.$t('car1')[2]['trx']}}</span>
											<span
												style="font-size: 0.625rem;font-family: PingFang SC;font-weight: 400;color: #E1E1E1;">{{this.$t('car1')[2]['usd']}}</span>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
	import logo from "./logo.vue";
	import mLogo from "./m-logo.vue";
	export default {
		data() {
			return {
				tetxbu_url:this.$t('tetxbu_url')
			};
		},
		props: {},
		computed: {

		},
		watch: {},
		components: {
			logo,
			mLogo
		},
		created() {},
		mounted() {},
		methods: {
			onChange(a, b, c) {
				console.log(a, b, c);
			},
			Jump(e) {
				window.open(e)
			},
		},
	};
</script>
<style scoped lang="less">
	.margi-top-50 {
		margin-top: 3.125rem;
	}

	.carousel-img {
		width: 100%;
		height: 100%;
		background-size: cover;
		object-fit: cover;
	}

	// 白字体
	.font-color-b {
		font-size: 2rem;
		font-family: DIN;
		font-weight: bold;
		color: #FFFFFF;
		opacity: 1;
	}

	// 黄字体
	.font-color-y {
		font-size: 1.25rem;
		font-family: DIN;
		font-weight: 400;
		color: #FDD333;
		opacity: 1;
	}

	// 卡片黑色
	.car-d {
		width: 40%;
		// height: 22.8125rem;
		background: #23262F;
		opacity: 1;
		border-radius: 0.75rem;

		.car-d-title {
			padding-top: 0.625rem;
			font-size: 13px;
			font-family: PingFang SC;
			font-weight: 400;
			line-height: 28px;
			color: #E1E1E1;
			opacity: 1;
		}

		.content {
			padding: 1.5625rem;

			.car-d-img {
				display: flex;
				justify-content: center;
			}

			.car-d-content {
				font-size: 1.5rem;
				font-family: DIN;
				font-weight: 900;
				color: #E1E1E1;
				opacity: 1;
			}
		}

	}


	.warp {
		padding: 5rem 0 3.125rem;

		.firstTokenm {
			display: none;
		}

		.car {
			width: 90%;
			background: #FFFFFF;
			opacity: 1;
			border-radius: 12px;
			text-align: center;
			padding-top: 2.5rem;
			height: 100%;
			// height: 21.875rem;

			.car-title {
				font-family: DIN;
				color: #FDD333;
				font-weight: bold;
				font-size: 1.5rem;
			}

			.car-content {
				padding-top: 1rem;
				padding-bottom: 3.125rem;
				font-size: 1rem;
				font-family: DIN;
				font-weight: 800;
				line-height: 1.625rem;
				color: #272247;
				opacity: 1;
				padding-left: 2rem;
				padding-right: 2rem;
			}
		}



		h1 {
			color: @themeColor;
			font-size: 2.5rem;
			font-weight: 900;
			text-align: center;
			text-transform: uppercase;
		}

		p {
			color: @themeColor;
			font-size: 1rem;
			padding: 0 20% 20px;
			text-align: center;
		}

		.content-col-title {
			font-size: 18px;
			font-weight: 700;
		}

		.content-col-body {
			padding: 0 10%;
		}

		.content {
			.content-col {
				// width: 100%;
				text-align: center;

				img {
					width: 100px;
					height: 120px;
				}

				h2 {
					font-size: 40px;
					font-weight: 700;
					color: @fontColor-2;
				}
			}
		}
	}

	@media screen and (max-width: 768px) {

		.warp {
			padding: 0 0 0px;

			.firstTokenpc {
				display: none;
			}

			.firstTokenm {
				display: block;
			}

			h1 {
				color: @themeColor;
				font-size: 2.5rem;
				font-weight: 900;
				text-align: center;
				text-transform: uppercase;
			}

			p {
				color: @themeColor;
				font-size: 1rem;
				padding: 0 10% 10px;
				text-align: center;
			}

			.content-col-title {
				font-size: 20px;
				font-weight: 700;
			}

			.content-col-body {
				padding: 0 5%;
			}

			.content {
				.content-col {
					// width: 100%;
					padding-bottom: 3.125rem;
					text-align: center;

					img {
						width: 100px;
						height: 100px;
						margin-bottom: 0px;
					}
				}
			}
			.car {
				width: 90%;
				background: #FFFFFF;
				opacity: 1;
				border-radius: 12px;
				text-align: center;
				padding-top: 2.5rem;
				height: 100%;
				// height: 21.875rem;
			
				.car-title {
					font-family: DIN;
					color: #FDD333;
					font-weight: bold;
					font-size: 2rem;
				}
			
				.car-content {
					padding-top: 1rem;
					padding-bottom: 3.125rem;
					font-size: 1.25rem;
					font-family: DIN;
					font-weight: 800;
					line-height: 1.625rem;
					color: #272247;
					opacity: 1;
					padding-left: 2rem;
					padding-right: 2rem;
				}
			}
		}
	}
</style>
