<template>
	<div class="warp">
		<div class="firstTokenpc" style="width: 100%; height: auto;">
			<!-- 轮播图 -->
			<div style="width: 100%;height:auto;margin-top: 2%;position: relative;padding-left: 10%;padding-right: 10%;">
				<a-carousel arrows :dots="false">
					<div slot="prevArrow" slot-scope="props" class="custom-slick-arrow" style="left: 10px;zIndex: 1;">
						<a-icon type="left-circle" />
					</div>
					<div slot="nextArrow" slot-scope="props" class="custom-slick-arrow"
						style="right: 10px;z-index: 99;">
						<a-icon type="right-circle" />
					</div>
					<div style="height:100%">
						<img class="carousel-img" src="@/assets/b1.png" alt="" />
						<img class="carousel-img1" src="@/assets/b2.png" alt="" />
					</div>
				</a-carousel>
			</div>
		</div>
		<div class="firstTokenm container" style="width: 100%; height: auto;">
			<!-- 轮播图 -->
			<div style="width: 100%;height:auto;position: relative;">
				<a-carousel arrows :dots="false">
					<div slot="prevArrow" slot-scope="props" class="custom-slick-arrow" style="left: 10px;zIndex: 1;">
						<a-icon type="left-circle" />
					</div>
					<div slot="nextArrow" slot-scope="props" class="custom-slick-arrow"
						style="right: 10px;z-index: 0;">
						<a-icon type="right-circle" />
					</div>
					<div style=" height:100%">
						<img class="carousel-img" src="@/assets/b1.png" alt="" />
					</div>
					<div>
						<img class="carousel-img" src="@/assets/b2.png" alt="" />
					</div>
				</a-carousel>
			</div>
		</div>

		<!-- PC端 -->
		<!-- 移动端 -->
		<!-- <a-row class="content">
      <a-col :md="12" :xs="24" class="content-left">
        <h2>{{this.$t('LM')}}</h2>
        <img src="@/assets/mining.png" alt="" />
      </a-col>
      <a-col :md="12" :xs="24" class="content-right">
        <div v-for="item in listP" :key="item.title">
          <strong>{{ item.title }}</strong>
          <p>{{ item.body }}</p>
        </div>
      </a-col>
    </a-row> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				listP: [{
						title: this.$t('LM_title1'),
						body: this.$t('LM_text1')
					},
					{
						title: this.$t('LM_title2'),
						body: this.$t('LM_text2'),
					},
					{
						title: this.$t('LM_title3'),
						body: this.$t('LM_text3'),
					},
				],
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
		padding: 80px 0;

		.firstTokenm {
			display: none;
		}
		.carousel-img {
			float: left;
			width: 48%;
			height: 100%;
			background-size: cover;
			object-fit: cover;
		}
		.carousel-img1 {
			float: right;
			width: 48%;
			height: 100%;
			background-size: cover;
			object-fit: cover;
		}
		.content {
			color: @themeColor;

			.content-left {
				position: relative;
				//   text-align: center;
				padding-left: 5%;

				h2 {
					position: absolute;
					font-weight: 700;
					color: @themeColor;
					font-size: 2.5rem;
					top: 10px;
					right: -300px;
				}

				img {
					width: 60%;
				}
			}

			.content-right {
				padding: 120px 150px 0 0px;

				strong {
					font-size: 1.2rem;
					line-height: 3rem;
				}

				p {
					font-size: 1rem;
				}
			}
		}
	}

	@media screen and (max-width: 768px) {
		.warp {
			.firstTokenpc {
				display: none;
			}
			.carousel-img {
				width: 100%;
				height: 100%;
				background-size: cover;
				object-fit: cover;
			}
			.firstTokenm {
				display: block;
			}

			padding: 50px 0;

			.content {
				color: @themeColor;

				.content-left {
					position: relative;
					text-align: center;
					padding-left: 0%;

					h2 {
						// display: none;
						position: inherit;
						font-weight: 700;
						color: @themeColor;
						font-size: 2.5rem;
						right: inherit;
						margin-bottom: 1.5rem !important;
					}

					img {
						width: 65%;
					}
				}

				.content-right {
					padding: 0px 0px 0 20px;

					strong {
						font-size: 1.5rem;
						line-height: 3rem;
					}

					p {
						font-size: 1rem;
						margin-bottom: 10px !important;
					}
				}
			}
		}
	}
</style>
<style scoped>
	.ant-carousel>>>.custom-slick-arrow:before {
		display: none;
	}
	
	.ant-carousel>>>.custom-slick-arrow:hover {
		opacity: 0.5;
	}
	@media screen and (min-width: 768px) {

		/* For demo */
		.ant-carousel>>>.slick-slide {
			height: 100%;
			overflow: hidden;

		}

		.ant-carousel>>>.custom-slick-arrow {
			width: 30px;
			height: 30px;
			font-size: 30px;
			color: #fff;
			background-color: rgba(31, 45, 61, 0.11);
			opacity: 0.5;
		}

		.ant-carousel>>>.custom-slick-arrow:before {
			display: none;
		}

		.ant-carousel>>>.custom-slick-arrow:hover {
			opacity: 0.5;
		}
	}

	@media screen and (max-width: 768px) {

		/* For demo */
		.ant-carousel>>>.slick-slide {
			height: 100%;
			overflow: hidden;

		}

		.ant-carousel>>>.custom-slick-arrow {
			width: 30px;
			height: 30px;
			font-size: 30px;
			color: #fff;
			background-color: rgba(31, 45, 61, 0.11);
			opacity: 0.5;
			

		}

		.ant-carousel>>>.custom-slick-arrow:before {
			display: none;
		}

		.ant-carousel>>>.custom-slick-arrow:hover {
			opacity: 0.5;
		}
	}

	/* 轮播图 */
</style>
