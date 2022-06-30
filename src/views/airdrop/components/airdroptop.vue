<template>
	<div>
		<div class="section__htb wf-section">
			<div class="container-1440">
				<div class="htb-wrap">
				<div class="htb-hero">
					<div class="htb-left">
					<homeLogo class="base-circle-wrap" style="width: 50vw;"></homeLogo>
					</div>
					<div class="htb-right">
						<a-row type="flex" class="banner" justify="space-between">
							<a-col :md="12" :xs="24" class="presale-left">
								<div class="left_lu">
									<div class="li">
										<div class="connect"  v-if="!address">
											<button type="button" class="car3-b-button" @click="connect">{{ this.$t("p_r_o_login_bnt") }}</button>
										</div>
										<div class="connect" v-if="address">
											<button type="button" class="car3-b-button"  @click="logout">{{ this.$t("p_r_o_out_bnt") }}</button>
										</div>
										<div class="car-p-t pc">
											<div class="cont" @click="Jump(url[0])">
												<img src="@/assets/twitter-fill-y.png">
											</div>
											<div class="cont" @click="Jump(url[1])">
												<img src="@/assets/telegram-y.png">
											</div>
										</div>
										<div class="car-p-t mo">
											<div class="cont" @click="Jump(url[0])">
												<img src="@/assets/twitter-fill-y.png">
											</div>
											<div class="cont" @click="Jump(url[1])" style="margin-left:5px;">
												<img src="@/assets/telegram-y.png">
											</div>
										</div>
									</div>
								</div>
								<div class="left_lu">
									<div class="li">
										<div class="connect-time">
											<span class="connect-time-title">{{ this.$t("p_t_title")}}</span>
											<div class="connect-time-text">
												<a-statistic-countdown :value="deadline" format="DD: HH: mm: ss " @finish="finish()" />
											</div>
										</div>
									</div>
								</div>
								<!-- <div class="left_lu">
									<div class="li">
										<div class="connect-des">
											{{this.$t('a_top_time_text')}}
										</div>
									</div>
								</div> -->
								<div class="left_lu">
									<div class="li">
										<div class="connect-des-text">
											<div class="des-t">{{this.$t('a_top_des_text1')}}</div>
											<div class="des-t">{{this.$t('a_top_des_text2')}}</div>
										</div>
									</div>
								</div>
							</a-col>
						</a-row>
					</div>
				</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import homeLogo from "../mobile/homeLogoMo.vue";
	import logo from "../../presale/components/logo.vue";
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
				url:[
					this.$t('a_twitter_url'),
					this.$t('a_telegram_url'),
				]
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
					// //console.log(newVal,!JSON.parse(this.isInvited)[1])
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
			...mapState(["deadline", "lang", "address", "isInvited"]),
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

		components: {
			logo,
			homeLogo
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
			finish() {

				alert(this.$t("over"));

			},
			getRouteInvited() {
				const isRoueInvited = sessionStorage.getItem("isRoueInvited");
				if (isRoueInvited === "undefined" || !isRoueInvited) {
					sessionStorage.setItem("isRoueInvited", this.$route.query.address);
				} else {
					sessionStorage.getItem("isRoueInvited");
				}
			},
			delCookie () {
				var keys = document.cookie.match(/[^ =;]+(?==)/g)
				if (keys) {
					for (var i = keys.length; i--;) {
					document.cookie = keys[i] + '=0;path=/;expires=' + new Date(0).toUTCString() // 清除当前域名下的,例如：m.ratingdog.cn
					document.cookie = keys[i] + '=0;path=/;domain=' + document.domain + ';expires=' + new Date(0).toUTCString() // 清除当前域名下的，例如 .m.ratingdog.cn
					document.cookie = keys[i] + '=0;path=/;domain=ratingdog.cn;expires=' + new Date(0).toUTCString() // 清除一级域名下的或指定的，例如 .ratingdog.cn
					}
				}
			},
			logout() {
				// this.delCookie();
				sessionStorage.removeItem("accountAddress");
      			sessionStorage.removeItem("isInvited");
      			sessionStorage.removeItem("vuex");
      			// sessionStorage.clear();
     			window.location.reload();
			},
			// 登录
			connect() {
				// this.login();
				// eth_requestAccounts  链接钱包
				ethereum.request({
						method: "eth_requestAccounts"
					}).then(async (accounts) => {
						// add address for store
						this.editAddress(accounts[0])
						// 获取邀请人
						const isInvited = await PerSaleObj.methods.isInvited(accounts[0]).call()
						// Action function
						this.updateIsInvited(isInvited)
						sessionStorage.setItem("isInvited", JSON.stringify(isInvited))

						this.$message.success(this.$t('connectSuccess'));
						// setTimeout(function(){
						// 	window.location.reload();
						// },1000)
						if (!JSON.parse(this.isInvited)[1]) {
							this.bondInvite()
						}
						// history.go(0);

					})
					.catch((err) => {
						// errorHandler(err);
						//console.log(err);
					});
				// Vue.prototype.LangReload()
				
			},

			bondInvite() {
				// //console.log(this.invite);
				const nowTime = new Date().getTime();

				if (nowTime > this.deadline) {
					return
				}
				const h = this.$createElement;
				const invite = this.invite;
				const that = this;
				if (JSON.parse(this.isInvited)[1]) {} else {
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
							//console.log(that.invite, "invite");
							await PerSaleObj.methods
								.bondInvite(that.invite)
								.send({
									from: that.address
								});
							that.getInvited(that.address);
							// that.confirmLoading = true;
						},
					});
				}

				
			},
			async getOwner() {
				const initalAddress = await PerSaleObj.methods.owner().call();
				// //console.log(initalAddress)
				this.initalAddress = initalAddress;
			},
			Jump(e) {
				window.open(e)
			},
		},
	};
</script>

<style scoped lang="less">
	@import "../../../styles/shiba-ui";
	@import "../../presale/components/presaleOne.less";
	@import "../../presale/components/presaleOneSlyte.less";
	@import "../../presale/components/presaleTwo.less";
	@-webkit-keyframes rotation {
	from {
		-webkit-transform: rotate(0deg);
	}
	to {
		-webkit-transform: rotate(360deg);
	}
	}
	.htb-circle-dashes {
	animation: rotation 60s linear infinite;
	}
	.circle-glued-coins {
	animation: rotation 30s linear infinite;
	}
	.front-coins-holder {
	animation: rotation 60s linear infinite;
	}
	@import "./airdroptop.less";
</style>
