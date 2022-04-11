<template>
	<div>
		<div class="warp" style="width: 100%;display: flex;padding-bottom: 6.25rem;">
			<div class="pc centre" style="z-index:9">
				<div class="width title">{{ this.$t("a_top_amount") }}</div>
				<div class="width text">{{ airdropQuantityProp }}</div>
				<div class="car">
					<div class="car-c">
						<div class="car-f">
							<div>
								<span class="cat-title">{{ this.$t("a_top_amount_array")[0]['title'] }}</span>
							</div>
							<div>
								<span class="car-text">{{storeMyTotalspacepi}}</span>
							</div>
						</div>
						<div class="car-f">
							<div>
								<span class="cat-title">{{ this.$t("a_top_amount_array")[1]['title'] }}</span>
							</div>
							<div>
								<span class="car-text">{{ storeInviteList.length }}</span>
							</div>
						</div>
						<div class="car-f">
							<div>
								<span class="cat-title">{{ this.$t("a_top_amount_array")[2]['title'] }}</span>
							</div>
							<div>
								<span class="car-text">{{storeInviteRewards}}</span>
							</div>
						</div>
					</div>
					<div class="car-c" style="margin-top: 25px;">
						<div
							style="width: 81%;height: 44px;background: #FDD333;opacity: 1;border-radius: 8px;display: flex;align-items: center;text-align: center;justify-content:center;">
							<img style="width: 1rem;height: 1rem;background-size: cover;object-fit: cover;"
								src="@/assets/i.png" alt="" />&nbsp;&nbsp;<span
								style="font-size: 1rem;font-family: DIN;font-weight: bold;">{{this.$t("a_top_amount_c")}}</span>
						</div>
					</div>
				</div>
			</div>
			<div class="m centre">
				<div class="width title">{{ this.$t("a_top_amount") }}</div>
				<div class="width text">{{ airdropQuantityProp }}</div>
				<div class=""
					style="width: 100%;border: 1px solid #707070;opacity: 0.2;float: left;margin-bottom: 0.625rem;">
				</div>
				<div class="car"
					style="font-weight: 400;font-size: 16px;font-family: DIN;padding-top: 0.625rem;">
					<div class="car-f" style="width: 100%;float: left;">
						<div style="padding-top: 1rem;">
							<span class="cat-title" style="float: left;">{{ this.$t("a_top_amount_array")[0]['title'] }}</span>
							<span class="car-text" style="float: right;">{{storeMyTotalspacepi}}</span>
						</div>
					</div>
					<div class="car-f" style="width: 100%;float: left;">
						<div style="padding-top: 1rem;">
							<span class="cat-title" style="float: left;">{{ this.$t("a_top_amount_array")[1]['title'] }}</span>
							<span class="car-text" style="float: right;">{{ storeInviteList.length }}</span>
						</div>
					</div>
					<div class="car-f" style="width: 100%;float: left;">
						<div style="padding-top: 1rem;">
							<span class="cat-title" style="float: left;">{{ this.$t("a_top_amount_array")[2]['title'] }}</span>
							<span class="car-text" style="float: right;">{{storeInviteRewards}}</span>
						</div>
					</div>
				</div>
				<div style="width: 100%;padding-top: 15px;display: flex;">
					<div
						style="width: 100%;height: 40px;background: #ffffff;opacity: 1;border-radius: 6px;display: flex;align-items: center;text-align: center;justify-content:center;">
						<span
							style="font-size:1rem;font-family: DIN;font-weight: bold;">
							<img style="width: 0.9rem;height: 0.9rem;background-size: cover;object-fit: cover;" src="@/assets/i.png"
							alt="" /> {{this.$t("a_top_amount_c")}}</span>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { abiObject, getAbi } from "utils/common";
const { contractObject: PerSaleObj } = getAbi(abiObject.PerSaleAbi);
export default {
  data() {
    return {
      // 默认地址
      initalAddress: "",
	  airdropQuantityProp:0
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
    address: {
      handler(newVal, oldVal) {
        // console.log(newVal,!JSON.parse(this.isInvited)[1])
        if (newVal !== "") {
          // handle invites function for store 
          this.myInvites(newVal)
          // create share URL
          this.updateInvitationLink(newVal)
          this.getInvited(newVal)
        }
        if (this.isInvited) {
          if (newVal !== "" && !this.isInvited[1]) {
            this.bondInvite();
          }
        }
      },
      immediate: true,
    },
  },
  computed: {
    ...mapState(["deadline", "lang", "address", "isInvited","storeMyTotalspacepi","storeInviteRewards","storeInviteList","storeInviteLink"]),
    airdropQuantityProp() {
      return this.airdropQuantity;
    },
    invite() {
      const isInvited = sessionStorage.getItem("isRoueInvited");

      if (isInvited !== "undefined") {
        return isInvited;
      } else {
        return this.initalAddress;
      }
    },
  },

  components: {},
  created() {
    this.getOwner();
    this.getRouteInvited();
  },
  mounted() {},
  methods: {
    ...mapMutations(["editAddress","updateIsInvited","updateInvitationLink"]),
    ...mapActions(["getInvited","myInvites"]),
    finish() {
      alert(this.$t("over"));
    },
    // save route query address
    getRouteInvited() {
      const isRoueInvited = sessionStorage.getItem("isRoueInvited");
      if (isRoueInvited === "undefined" || !isRoueInvited) {
        sessionStorage.setItem("isRoueInvited", this.$route.query.address);
      } else {
        sessionStorage.getItem("isRoueInvited");
      }
    },
    // 登录
    connect() {
      // this.login();
      // eth_requestAccounts  链接钱包
      ethereum
        .request({ method: "eth_requestAccounts" })
        .then(async (accounts) => {
          // add address for store
          this.editAddress( accounts[0])
          // 获取邀请人
          const isInvited = await PerSaleObj.methods.isInvited(accounts[0]).call()
          // Action function
          this.updateIsInvited(isInvited)
          sessionStorage.setItem("isInvited",JSON.stringify(isInvited))
          
          this.$message.success(this.$t('connectSuccess'));
          if(!JSON.parse(this.isInvited)[1]){
            this.bondInvite()
          }
          // history.go(0);
        })
        .catch((err) => {
          // errorHandler(err);
          console.log(err);
        });

      // Vue.prototype.LangReload()
    },

    bondInvite() {
      // console.log(this.invite);
      const nowTime = new Date().getTime();

      if(nowTime>this.deadline){return}
      const h = this.$createElement;
      const invite = this.invite;
      const that = this;
      if (JSON.parse(this.isInvited)[1]) {
      } else {
        this.$info({
          title: this.$t("comfirmInvite"),
          content: h("div", {}, [h("p", `${this.$t("inviter")}：${invite}`)]),
          async onOk(e) {
            if (that.invite === that.address) {
              that.$notification.open({
                message: "warning",
                description: this.$t("inviterNotSelf"),
              });
              return;
            }
            console.log(that.invite, "invite");
            await PerSaleObj.methods
              .bondInvite(that.invite)
              .send({ from: that.address });
            that.getInvited(that.address);
            // that.confirmLoading = true;
          },
        });
      }
    },
    async getOwner() {
      const initalAddress = await PerSaleObj.methods.owner().call();
      // console.log(initalAddress)
      this.initalAddress = initalAddress;
    },
  },
};
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
			font-weight: 400;

		}

		.text {
			font-size: 5rem;
			font-weight: 400;

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
					font-weight: 400;
				}

				.car-text {
					font-size: 2rem;
					font-weight: bold;
					color: #5A51A8;

				}
			}

		}
	}
	.m{
		display: none;
	}
	@media screen and (max-width: 768px) {
		.m{
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
			font-weight: 400;


		}

		.text {
			font-size: 1.75rem;
			font-weight: 400;
			padding-top: 0.625rem;
			padding-bottom: 0.625rem;
		}

		.car {
			width: 100%;
		}
	}
</style>
