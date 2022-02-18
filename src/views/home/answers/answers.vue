<template>
	<div class="bg-t" style="width: 100%;height: auto;float: left;position: relative;">
		<div class="container">
			<div class="warp">
				<div class=" layout-c" style="margin-top:15%;">
					<div>
						<span class="font-title-color-b">{{this.$t('answers')['title']}}</span>
					</div>
					<div style="display: flex;justify-content: center;">
						<div class="content-c">
							<span class="font-content-color-y">{{this.$t('answers')['text']}}</span>
						</div>
					</div>
					<div class="layout-content">
						<div class="pc">
							<div class="layout-content-c" style="float: left;">
								<ul id="parent">
									<li @click="metaverse(1)">
										<span style="color: #7E8A9E;font-weight: bold;">
											<p></p> {{this.$t('answers')['array'][0]['title']}}
										</span>
										<ul :class="array[0]==true?'block':'none'">
											<li
												style="line-height: 1.25rem;width: 80%;color: #FDD333;font-size: 0.9375rem;font-weight: bold;margin-left: 1rem;margin-top: 1rem;margin-bottom: 1rem;">
												{{this.$t('answers')['array'][0]['text']}}</li>
										</ul>
									</li>
									<li @click="metaverse(2)">
										<span style="color: #7E8A9E;font-weight: bold;">
											<p></p> {{this.$t('answers')['array'][1]['title']}}
										</span>
										<ul :class="array[1]==true?'block':'none'">
											<li
												style="line-height: 1.25rem;width: 80%;color: #FDD333;font-size: 0.9375rem;font-weight: bold;margin-left: 1rem;margin-top: 1rem;margin-bottom: 1rem;">
												{{this.$t('answers')['array'][1]['text']}}</li>
										</ul>
									</li>
									<li @click="metaverse(3)">
										<span style="color: #7E8A9E;font-weight: bold;">
											<p></p> {{this.$t('answers')['array'][2]['title']}}
										</span>
										<ul :class="array[2]==true?'block':'none'">
											<li
												style="line-height: 1.25rem;width: 80%;color: #FDD333;font-size: 0.9375rem;font-weight: bold;margin-left: 1rem;margin-top: 1rem;margin-bottom: 1rem;">
												{{this.$t('answers')['array'][2]['text']}}</li>
										</ul>
									</li>
									<li @click="metaverse(4)">
										<span style="color: #7E8A9E;font-weight: bold;">
											<p></p> {{this.$t('answers')['array'][3]['title']}}
										</span>
										<ul :class="array[3]==true?'block':'none'">
											<li
												style="line-height: 1.25rem;width: 80%;color: #FDD333;font-size: 0.9375rem;font-weight: bold;margin-left: 1rem;margin-top: 1rem;margin-bottom: 1rem;">
												{{this.$t('answers')['array'][3]['text']}}</li>
										</ul>
									</li>
								</ul>
							</div>
							<div class="layout-content-c" style="float: right;">
								<ul id="parent">
									<li @click="metaverse(5)">
										<span style="color: #7E8A9E;font-weight: bold;">
											<p></p> {{this.$t('answers')['array'][4]['title']}}
										</span>
										<ul :class="array[4]==true?'block':'none'">
											<li
												style="line-height: 1.25rem;width: 80%;color: #FDD333;font-size: 0.9375rem;font-weight: bold;margin-left: 1rem;margin-top: 1rem;margin-bottom: 1rem;">
												{{this.$t('answers')['array'][4]['text']}}</li>
										</ul>
									</li>
									<li @click="metaverse(6)">
										<span style="color: #7E8A9E;font-weight: bold;">
											<p></p> {{this.$t('answers')['array'][5]['title']}}
										</span>
										<ul :class="array[5]==true?'block':'none'">
											<li
												style="line-height: 1.25rem;width: 80%;color: #FDD333;font-size: 0.9375rem;font-weight: bold;margin-left: 1rem;margin-top: 1rem;margin-bottom: 1rem;">
												{{this.$t('answers')['array'][5]['text']}}</li>
										</ul>
									</li>
									<li @click="metaverse(7)">
										<span style="color: #7E8A9E;font-weight: bold;">
											<p></p> {{this.$t('answers')['array'][6]['title']}}
										</span>
										<ul :class="array[6]==true?'block':'none'">
											<li
												style="line-height: 1.25rem;width: 80%;color: #FDD333;font-size: 0.9375rem;font-weight: bold;margin-left: 1rem;margin-top: 1rem;margin-bottom: 1rem;">
												{{this.$t('answers')['array'][6]['text']}}</li>
										</ul>
									</li>
									<!-- <li @click="metaverse(8)">
										<span style="color: #7E8A9E;font-weight: bold;">
											<p></p> {{this.$t('answers')['array'][7]['title']}}
										</span>
										<ul :class="array[7]==true?'block':'none'">
											<li
												style="line-height: 1.25rem;width: 80%;color: #FDD333;font-size: 0.9375rem;font-weight: bold;margin-left: 1rem;margin-top: 1rem;margin-bottom: 1rem;">
												{{this.$t('answers')['array'][7]['text']}}</li>
										</ul>
									</li> -->
								</ul>
							</div>
						</div>
						<div class="m">
							<div class="layout-content-c" style="float: left;width: 100%;">
								<ul id="parent">
									<li @click="metaverse(1)">
										<span style="color: #7E8A9E;font-weight: bold;">
											<p></p> {{this.$t('answers')['array'][0]['title']}}
										</span>
										<ul :class="array[0]==true?'block':'none'">
											<li
												style="line-height: 1.25rem;width: 95%;color: #FDD333;font-size: 1.25rem;font-weight: bold;margin-left: 1rem;margin-top: 1rem;margin-bottom: 1rem;">
												{{this.$t('answers')['array'][0]['text']}}</li>
										</ul>
									</li>
									<li @click="metaverse(2)">
										<span style="color: #7E8A9E;font-weight: bold;">
											<p></p> {{this.$t('answers')['array'][1]['title']}}
										</span>
										<ul :class="array[1]==true?'block':'none'">
											<li
												style="line-height: 1.25rem;width: 95%;color: #FDD333;font-size: 1.25rem;font-weight: bold;margin-left: 1rem;margin-top: 1rem;margin-bottom: 1rem;">
												{{this.$t('answers')['array'][1]['text']}}</li>
										</ul>
									</li>
									<li @click="metaverse(3)">
										<span style="color: #7E8A9E;font-weight: bold;">
											<p></p> {{this.$t('answers')['array'][2]['title']}}
										</span>
										<ul :class="array[2]==true?'block':'none'">
											<li
												style="line-height: 1.25rem;width: 95%;color: #FDD333;font-size: 1.25rem;font-weight: bold;margin-left: 1rem;margin-top: 1rem;margin-bottom: 1rem;">
												{{this.$t('answers')['array'][2]['text']}}</li>
										</ul>
									</li>
									<li @click="metaverse(4)">
										<span style="color: #7E8A9E;font-weight: bold;">
											<p></p> {{this.$t('answers')['array'][3]['title']}}
										</span>
										<ul :class="array[3]==true?'block':'none'">
											<li
												style="line-height: 1.25rem;width: 95%;color: #FDD333;font-size: 1.25rem;font-weight: bold;margin-left: 1rem;margin-top: 1rem;margin-bottom: 1rem;">
												{{this.$t('answers')['array'][3]['text']}}</li>
										</ul>
									</li>
									<li @click="metaverse(5)">
										<span style="color: #7E8A9E;font-weight: bold;">
											<p></p> {{this.$t('answers')['array'][4]['title']}}
										</span>
										<ul :class="array[4]==true?'block':'none'">
											<li
												style="line-height: 1.25rem;width: 95%;color: #FDD333;font-size: 1.25rem;font-weight: bold;margin-left: 1rem;margin-top: 1rem;margin-bottom: 1rem;">
												{{this.$t('answers')['array'][4]['text']}}</li>
										</ul>
									</li>
									<li @click="metaverse(6)">
										<span style="color: #7E8A9E;font-weight: bold;">
											<p></p> {{this.$t('answers')['array'][5]['title']}}
										</span>
										<ul :class="array[5]==true?'block':'none'">
											<li
												style="line-height: 1.25rem;width: 95%;color: #FDD333;font-size: 1.25rem;font-weight: bold;margin-left: 1rem;margin-top: 1rem;margin-bottom: 1rem;">
												{{this.$t('answers')['array'][5]['text']}}</li>
										</ul>
									</li>
									<li @click="metaverse(7)">
										<span style="color: #7E8A9E;font-weight: bold;">
											<p></p> {{this.$t('answers')['array'][6]['title']}}
										</span>
										<ul :class="array[6]==true?'block':'none'">
											<li
												style="line-height: 1.25rem;width: 95%;color: #FDD333;font-size: 1.25rem;font-weight: bold;margin-left: 1rem;margin-top: 1rem;margin-bottom: 1rem;">
												{{this.$t('answers')['array'][6]['text']}}</li>
										</ul>
									</li>
									<!-- <li @click="metaverse(8)">
										<span style="color: #7E8A9E;font-weight: bold;">
											<p></p> {{this.$t('answers')['array'][7]['title']}}
										</span>
										<ul :class="array[7]==true?'block':'none'">
											<li
												style="line-height: 1.25rem;width: 95%;color: #FDD333;font-size: 1.25rem;font-weight: bold;margin-left: 1rem;margin-top: 1rem;margin-bottom: 1rem;">
												{{this.$t('answers')['array'][7]['text']}}</li>
										</ul>
									</li> -->
								</ul>
							</div>
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
				array:[1,0,0,0,0,0,0,0]
			};
		},
		props: {},
		computed: {},
		watch: {},
		components: {},
		created() {},
		mounted() {},
		methods: {
			metaverse(e){
				this.array=[0,0,0,0,0,0,0,0];
				for (var i=0;i<this.array.length;i++){
					if(i==e-1){
						this.array[i] = 1;
					}
				}
			}
		},
	};
</script>

<style scoped lang="less">
	.bg-t {
		.m {
			display: none;
		}

		background: url("../../../assets/bgimg1.png") no-repeat no-repeat center center;

		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: 100% 100%;

		.warp {
			height: 55rem;

			.layout-c {
				margin-top: 3.125rem;
				width: 100%;
				float: left;
				text-align: center;

				.content-c {
					width: 50rem;
				}

				.font-title-color-b {
					font-size: 2.25rem;
					font-family: DIN;
					font-weight: bold;
					color: #FFFFFF;
					opacity: 1;
				}

				.font-content-color-y {
					font-size: 1.125rem;
					font-family: DIN;
					font-weight: bold;
					color: #FDD333;
					opacity: 1;
				}

				.layout-content {
					width: 100%;
					float: left;
					display: flex;
					margin-top: 5rem;

					.font-18 {
						font-size: 1.125rem;
					}

					.font-35 {
						font-size: 2.1875rem;
					}

					.layout-content-c {
						width: 50%;

						#parent>li>span {
							// background: #999999;
							display: block;
							width: 100%;
							// border: 1px solid #ECEEF2;
						}

						li {
							text-align: left;
							line-height: 2.5rem;
							display: block;
							font-size: 1vw;

						}

						li p {
							// display: inline-block;
							// width: 0px;
							// height: 0px;
							// border-left: 0.5rem solid transparent;
							// border-right: 0.5rem solid transparent;
							// border-top: 0.5rem solid #747ED1;
						}

						li>.none {
							display: none;
						}

						li>ul>li {
							// border: 1px solid #DEDEDE;
							width: 199px;
						}

						// #parent span:hover+ul {
						// 	display: block;
						// }

						// li>.none:hover {
						// 	display: block;
						// }

						#parent span:hover>p {
							// display: inline-block;
							// width: 0px;
							// height: 0px;
							// border-top: 0.5rem solid transparent;
							// border-bottom: 0.5rem solid transparent;
							// border-left: 0.5rem solid #747ED1;
						}


					}


				}
			}

		}
	}


	@media screen and (max-width: 768px) {
		.bg-t {
			.m {
				display: block;
			}

			.pc {
				display: none;
			}

			background: url("../../../assets/bgimg1.png") no-repeat no-repeat center center;

			-webkit-background-size: cover;
			-moz-background-size: cover;
			-o-background-size: cover;
			background-size: cover;

			.warp {
				height: 50rem;

				.layout-c {
					margin-top: 3.125rem;
					width: 100%;
					float: left;
					text-align: center;

					.content-c {
						width: 50rem;
					}

					.font-title-color-b {
						font-size: 2rem;
						font-family: DIN;
						font-weight: bold;
						color: #FFFFFF;
						opacity: 1;
					}

					.font-content-color-y {
						font-size: 1.25rem;
						font-family: DIN;
						font-weight: bold;
						color: #FDD333;
						opacity: 1;
					}

					.layout-content {
						width: 100%;
						float: left;
						display: flex;
						margin-top: 5rem;

						.font-18 {
							font-size: 1.125rem;
						}

						.font-35 {
							font-size: 2.1875rem;
						}

						.layout-content-c {
							width: 50%;

							#parent>li>span {
								// background: #999999;
								display: block;
								width: 100%;
								font-size: 1.25rem;
								// border: 1px solid #ECEEF2;
							}

							li {
								text-align: left;
								line-height: 2.5rem;
								display: block;

							}

							li p {
								display: inline-block;
								width: 0px;
								height: 0px;
								border-left: 0.5rem solid transparent;
								border-right: 0.5rem solid transparent;
								border-top: 0.5rem solid #747ED1;
							}

							li>.none {
								display: none;
							}

							li>ul>li {
								// border: 1px solid #DEDEDE;
								width: 199px;
							}

							#parent span:hover+ul {
								display: block;
							}

							li>.none:hover {
								display: block;

								li.block {
									display: none;
								}
							}

							#parent span:hover>p {
								display: inline-block;
								width: 0px;
								height: 0px;
								border-top: 0.5rem solid transparent;
								border-bottom: 0.5rem solid transparent;
								border-left: 0.5rem solid #747ED1;
							}


						}


					}
				}

			}
		}
	}
</style>
