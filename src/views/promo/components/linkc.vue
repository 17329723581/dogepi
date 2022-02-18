<template>
	<div>
		<div class="warp" style="width: 100%;display: flex;padding-bottom: 6.25rem;">
			<div class="pc centre" style="z-index: 1;">
				<div class="width title">{{ this.$t("a_top_amount_link_title") }}</div>
				<div style="display: flex;justify-content: center;width: 100%;padding-top: 15px;">
					<div class="width"
						style="width: 75%;height: 60px;background: #2C1D51;border: 1px solid #FFFFFF;border-radius: 6px;display: flex;align-items: center;text-align: center;justify-content:center;">
						<div
							style="width: 90%;float: left;text-align: left;padding-left: 0.9375rem;font-size: 28px;color: #FFFFFF;">
							{{ storeInviteLink[1] }}
						</div>
						<div style="width: 5%;float: right;margin-top: 0.5rem;" v-clipboard:copy="storeInviteLink[0]" v-clipboard:success="onCopy">
							<a-icon type="copy"
								style="font-size: 1.5rem;font-family: DIN;font-weight: 400;color: #FDD333;line-height: 5.1875rem;float: right;" />
						</div>
					</div>
				</div>
				<div style="display: flex;justify-content: center;width: 100%;padding-top: 15px;">
					<div style="width: 75%;">
						<span style="color: #FDD333;font-size:1rem;font-family: DIN;">
							{{ this.$t("a_top_amount_link_text") }}</span>
					</div>

				</div>
			</div>
			<div class="m centre">
				<div class="width title">{{ this.$t("a_top_amount_link_title") }}</div>
				<div style="width: 100%;padding-top: 15px;display: flex;">
					<div
						style="width: 100%;height: 40px;background: #ffffff;opacity: 1;border-radius: 6px;display: flex;align-items: center;text-align: center;justify-content:center;">
						<span
							style="font-size: 1rem;font-family: DIN;font-weight: bold;color: #333333;">{{ storeInviteLink[1] }}</span>
					</div>
				</div>
				<div style="width: 100%;padding-top: 50px;display: flex;justify-content: center;position: relative;" v-clipboard:copy="storeInviteLink[0]" v-clipboard:success="onCopy">
					<div style="font-size: 18px;width: 10.3125rem;font-weight: bold;height: 40px;background: #FDD333;opacity: 1;border-radius: 6px;display: flex;justify-content: center;align-items: center;">
						<a-icon type="copy"
							style="font-size: 1.5rem;font-family: DIN;font-weight: 400;color: #000000;float: right;float: left;" />&nbsp;Copy
					</div>
				</div>
				<div style="width: 100%;padding-top: 50px;display: flex;justify-content: center;color: #FFFFFF;">
					<span style="font-size: 14px;font-family: DIN;">
						{{ this.$t("a_top_amount_link_text") }}
					</span>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  props: {},
  computed: {
    ...mapState(["storeMyTotalspacepi","storeInviteRewards","storeInviteList","storeInviteLink"]),
  },
  watch: {},
  components: {
  },
  created() {},
  mounted() {},
  methods: {
    // 地址复制
    onCopy(e) {
      this.$message.success(this.$t('copySuccess'));
    },

  }
}
</script>

<style scoped lang="less">
	.centre {
		width: 100%;
		height: auto;
		justify-content: center;
	}

	.pc {
		.width {
			display: flex;
			justify-content: center;
			width: 100%;
			float: left;
		}

		.title {
			font-size: 1.25rem;
			font-family: DIN;
			font-weight: 400;
			color: #FFFFFF;

		}

		.text {
			font-size: 5rem;
			font-family: DIN;
			font-weight: 400;
			color: #FFFFFF;

		}

		.car {
			width: 100%;
			float: left;
			height: 14.8125rem;
			background: #FFFFFF;
			border: 1px solid #707070;
			opacity: 1;
			border-radius: 20px;
			padding-left: 50px;
			padding-right: 50px;

			.car-c {
				width: 100%;
				float: left;
				display: flex;
				justify-content: center;

				.car-f {
					margin-top: 35px;
					margin-left: 50px;
					margin-right: 50px;
					width: 25%;
					text-align: center;
					line-height: 2.5rem
				}

				.cat-title {
					font-size: 1.125rem;
					font-family: DIN;
					font-weight: 400;
					color: #333333;
				}

				.car-text {
					font-size: 2rem;
					font-family: DIN;
					font-weight: bold;
					color: #5A51A8;

				}
			}

		}
	}

	.m {
		display: none;
	}

	@media screen and (max-width: 768px) {
		.m {
			display: block;
		}

		.pc {
			display: none;
		}

		.width {
			display: flex;
			justify-content: center;
			width: 100%;
			float: left;
		}

		.title {
			font-size: 1.25rem;
			font-family: DIN;
			font-weight: 400;
			color: #FFFFFF;


		}

		.text {
			font-size: 1.75rem;
			font-family: DIN;
			font-weight: 400;
			color: #FFFFFF;
			padding-top: 0.625rem;
			padding-bottom: 0.625rem;
		}

		.car {
			width: 100%;
		}
	}
</style>
