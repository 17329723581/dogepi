<template>
    <div class="airdrop">
        <div class="airdrop-container">
            <!-- TOP -->
            <div class="airdrop-top">
                <!-- LOGO动画 -->
                <div class="airdrop-left">
                    <div class="base-circle-wrap">
                        <img src="@/assets/c1.png" loading="lazy" alt="" class="htb-circle-1" />
                        <logo class="htb-circle-dashes"></logo>
                        <div class="circle-glued-coins">
                            <img src="@/assets/gc1.png" loading="lazy" alt="" class="gc-1" />
                            <img src="@/assets/gc2.png" loading="lazy" alt="" class="gc-2" />
                            <img src="@/assets/gc4.png" loading="lazy" alt="" class="gc-3" />
                        </div>
                        <div class="front-coins-holder">
                            <img src="@/assets/bc1.png" loading="lazy" alt="" class="bc-1" />
                            <img src="@/assets/bc2.png" loading="lazy" alt="" class="bc-2" />
                            <img src="@/assets/bc4.png" loading="lazy" alt="" class="bc-3" />
                        </div>
                    </div>
                </div>
                <div class="airdrop-right">
                    <!-- 连接钱包功能 -->
                    <div class="connect">
                        <!-- 连接钱包 -->
                        <button v-if="!address" type="button" @click="connect">{{ this.$t("p_r_o_login_bnt") }}</button>
                        <!-- 断开连接钱包 -->
                        <button v-if="address" type="button" @click="logout">{{ this.$t("p_r_o_out_bnt") }}</button>
                        <a class="cont" @click="Jump(url[0])">
                            <img src="@/assets/twitter-fill-y.png">
                        </a>
                        <a class="cont" @click="Jump(url[1])">
                            <img src="@/assets/telegram-y.png">
                        </a>
                    </div>
                    <!-- 倒计时区域 -->
                    <div class="countdown">
                        <span class="title">{{ this.$t("p_t_title") }}</span>
                        <a-statistic-countdown :value="deadline" format="DD: HH: mm: ss " @finish="finish()" />
                    </div>
                    <!-- 内容区域 -->
                    <div class="content">
                        <span>
                            {{ this.$t('a_top_time_text') }}
                        </span>
                    </div>
                    <!-- 标题区域 -->
                    <div class="title">
                        <span>
                            {{ this.$t('a_top_des_text1') }}
                        </span>
                        <span class="color">
                            {{ this.$t('a_top_des_text2') }}
                        </span>
                    </div>
                </div>
            </div>
            <!-- 广告 -->
            <div class="advertisement">
                <!-- 父级元素 -->
                <div class="parent">
                    <!-- 子元素 -->
                    <div class="son">
                        <!-- 内容 -->
                        <div class="content">
                            <div class="title">
                                <!-- 标题父级元素 -->
                                <div class="title-parent">
                                    <span class="b">
                                        {{ this.$t('advertisement') }}
                                    </span>
                                    <span>
                                        {{ this.$t('advertisement1') }}
                                    </span>
                                </div>
                                <!-- 标题子元素 -->
                                <div class="title-son">
                                    <div class="left">
                                        <div class="circular-a"></div>
                                        <div class="circular-b"></div>
                                        <div class="circular-c"></div>
                                    </div>
                                    <div class="right">
                                        <div class="circular-a"></div>
                                        <div class="circular-b"></div>
                                        <div class="circular-c"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- LOGO -->
                            <div class="logo">
                                <img src="@/assets/c1.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 空投 -->
            <div class="airdrop-car">
                <!-- 空投数量 -->
                <div class="airdrop-quantity">
                    <!-- 标题 -->
                    <div class="title">
                        <img src="@/assets/airdrop-title.png">
                        <span>{{ this.$t('a_quantity_title') }}</span>
                    </div>
                    <!-- 空投数量 -->
                    <div class="quantity">
                        {{ airdropQuantityProp }}
                    </div>
                </div>
                <!-- 空投倒计时和复制链接 -->
                <div class="airdrop-container">
                    <div class="left">
                        <!-- 倒计时 -->
                        <div class="countdown">
                            <div class="title">
                                {{ this.$t("a_time_tit") }}
                            </div>
                            <a-statistic-countdown :value="deadline" format="DD: HH: mm: ss" @finish="finish()" />
                        </div>
                    </div>
                    <div class="right">
                        <!-- 链接和复制 -->
                        <div class="like-container">
                            <div class="like">
                                <span class="url">
                                    {{ storeInviteLink[0] }}
                                </span>
                                <div class="button">
                                    <button v-if="isInvited[1] == true" v-clipboard:copy="storeInviteLink[0]"
                                        v-clipboard:success="onCopy">
                                        {{ this.$t("a_time_btn2") }}
                                    </button>
                                    <button v-if="isInvited ? isInvited[1] == false : true"
                                        style="background-color: rgb(128, 128, 128);">
                                        {{ this.$t("a_time_btn2") }}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="coey-text-a">{{ this.$t("a_time_msg2") }}</div>
                        <div class="coey-text-b">{{ this.$t("a_time_msg1") }}</div>
                    </div>
                </div>
                <!-- 最新随机数 -->
                <div class="titcom">
                    <span>
                        {{ this.$t("p_titcom_tit") }}
                    </span>
                    <span class="l">
                        {{ p_titcom_li_left }}
                    </span>
                    <span>
                        {{ p_titcom_li_right }} {{ this.$t('currency') }}
                    </span>
                </div>
                <!-- 邀请空投数据 -->
                <div class="airdrop-data">
                    <!-- 邀请空投数据A -->
                    <div class="airdrop-data-a">
                        <a-row :gutter="40">
                            <a-col :span="8">
                                <div class="airdrop-data-container">
                                    <span class="title">
                                        {{ this.$t("a_time_tb2") }}
                                    </span>
                                    <span class="text">
                                        {{ payCount }}
                                    </span>
                                </div>
                            </a-col>
                            <a-col :span="8">
                                <div class="airdrop-data-container">
                                    <span class="title">
                                        {{ this.$t("a_time_tb3") }}
                                    </span>
                                    <span class="text">
                                        {{ totaltoken }}
                                    </span>
                                </div>
                            </a-col>
                            <a-col :span="8">
                                <div class="airdrop-data-container">
                                    <span class="title">
                                        {{ this.$t("a_time_tb4") }}
                                    </span>
                                    <span class="text">
                                        {{ rewardsCount }}
                                    </span>
                                </div>
                            </a-col>
                        </a-row>
                    </div>
                    <!-- 邀请空投数据B -->
                    <div class="airdrop-data-b">
                        <a-row :gutter="40">
                            <a-col :span="8">
                                <div class="airdrop-data-container">
                                    <span class="title">
                                        {{ this.$t('a_top_amount_array')[0].title }}
                                    </span>
                                    <span class="text">
                                        {{ storeMyTotalspacepi }}
                                    </span>
                                </div>
                            </a-col>
                            <a-col :span="8">
                                <div class="airdrop-data-container">
                                    <span class="title">
                                        {{ this.$t('a_top_amount_array')[1].title }}
                                    </span>
                                    <span class="text">
                                        {{ storeInviteList.length }}
                                    </span>
                                </div>
                            </a-col>
                            <a-col :span="8">
                                <div class="airdrop-data-container">
                                    <span class="title">
                                        {{ this.$t('a_top_amount_array')[2].title }}
                                    </span>
                                    <span class="text">
                                        {{ storeInviteRewards }}
                                    </span>
                                </div>
                            </a-col>
                        </a-row>
                    </div>
                    <!-- 领取空投按钮 -->
                    <div class="receive-airdrop">
                        <button
                            v-if="storeInviteLink[0].split('?')[1].split('&')[0].split('=')[1] != '' && airdropStatus == true && isInvited[1] == true && airdropStatus1 == true"
                            style="background:#808080">{{ this.$t("ye_get6") }}</button>
                        <button
                            v-if="storeInviteLink[0].split('?')[1].split('&')[0].split('=')[1] != '' && airdropStatus == false && isInvited[1] == true && airdropStatus1 == true"
                            @click="getAirdrop">{{ this.$t("ye_get5") }}</button>
                        <button
                            v-if="storeInviteLink[0].split('?')[1].split('&')[0].split('=')[1] != '' && airdropStatus == false && isInvited[1] == false && airdropStatus1 == true"
                            style="background:#808080"> {{ this.$t("ye_get8") }}</button>
                    </div>
                    <!-- 领取空投说明 -->
                    <div class="receiving-airdrop-instructions">
                        <img src="@/assets/i.png"> <span>{{ this.$t("airdrop_instructions") }}</span>
                    </div>
                </div>
            </div>
            <!-- 预售规则 -->
            <div class="presale-rules">
                <span class="title">
                    {{ this.$t('a_rules_title') }}
                </span>
                <div class="text">
                    <span>{{ this.$t('a_rules_text1') }}</span>
                    <span>{{ this.$t('a_rules_text2') }}</span>
                    <span>{{ this.$t('a_rules_text3') }}</span>
                </div>
            </div>
            <!-- 邀请成员 -->
            <div class="invite-members">
                <span class="title">
                    {{ this.$t("a_m_invite_tit") }}
                </span>
                <div class="table">
                    <div class="table-title">
                        <span>{{ this.$t("a_invite_tb1") }}</span>
                        <span>{{ this.$t("a_invite_tb2") }}</span>
                    </div>
                </div>
                <div class="table-container" v-for="(item, index) of storeInviteList" :key="index">
                    <div class="table-content">
                        <span class="container1">{{ index + 1 > 9 ? index + 1 : "" + (index + 1) }}</span>
                        <span class="container2">{{ item }}</span>
                    </div>
                    <div class="table-line"></div>
                </div>
            </div>
            <!-- 邀请规则 -->
            <div class="invite-rules">
                <span class="title">
                    {{ this.$t('a_rules_title') }}
                </span>
                <div class="text">
                    <span>{{ this.$t('a_rules_text1') }}</span>
                    <span>{{ this.$t('a_rules_text2') }}</span>
                    <span>{{ this.$t('a_rules_text3') }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { abiObject, getAbi, web3 } from "utils/common";
const { contractObject: PerSaleObj } = getAbi(abiObject.PerSaleAbi);
const {contractObject:spacePiObj} = getAbi(abiObject.spacePiAbi)

import logo from "@/views/presale/components/logopc.vue";
export default {
    data() {
        return {
            // 默认地址
            initalAddress: "",
            airdropQuantityProp: 0,
            raisedList: [
                { address: "0x3A2d...", num: "1" },
                { address: "0x8a6F...", num: "2" },
                { address: "0x385f...", num: "3" },
                { address: "0x724e...", num: "4" },
                { address: "0x1284...", num: "5" },
                { address: "0x695a...", num: "6" },
                { address: "0x352a...", num: "7" },
                { address: "0x9e7f...", num: "8" },
                { address: "0x4252...", num: "9" },
                { address: "0x3746...", num: "10" },
                { address: "0x774a...", num: "11" },
                { address: "0xe226...", num: "12" },
            ],
            payCount: 0,
            airdropStatus1: false,
            totaltoken: 0,
            rewardsCount: 0,
            receive_status: false,
            receive_title: this.$t("a_time_btn1"),
            p_titcom_li_left: this.$t("p_titcom_li_left"),
            p_titcom_li_right: this.$t("p_titcom_li_right"),
            url: [
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
        InviteList: {
            type: Array,
            default: () => {
                return [];
            },
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
        ...mapState([
            "address",
            "isInvited",
            "storeMyTotalspacepi",
            "storeInviteList",
            "deadline",
            "storeSwapRatio",
            "tokenDecimals",
            "storeInviteLink",
            "lang",
            "storeInviteRewards"
        ]),
        async getairdropStatus() {
            if (this.deadline < new Date().getTime()) {
                //如果结束时间小于现在
                this.airdropStatus1 = true;
                // this.airdropStatus1 = false ;
            } else {
                //如果结束时间大于于现在
                this.airdropStatus1 = false;
                // this.airdropStatus1 = true;
            }
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
        logo
    },
    created() {
        this.getAirdropInfo();
        this.titcom();
        this.invitePayCount();
        this.updateInvitationLink(this.address);
        this.getIsAirdrops();
        this.getairdropStatus();

        this.getOwner();
        this.getRouteInvited();
        
    },
    mounted() { },
    methods: {
        ...mapMutations(["editAddress", "updateIsInvited", "updateInvitationLink", "updateMyspacepi", "updateInviteList"]),
        ...mapActions(["getInvited", "myInvites"]),
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
        delCookie() {
            var keys = document.cookie.match(/[^ =;]+(?==)/g)
            if (keys) {
                for (var i = keys.length; i--;) {
                    document.cookie = keys[i] + '=0;path=/;expires=' + new Date(0).toUTCString() // 清除当前域名下的,例如：m.ratingdog.cn
                    document.cookie = keys[i] + '=0;path=/;domain=' + document.domain + ';expires=' + new Date(0).toUTCString() // 清除当前域名下的，例如 .m.ratingdog.cn
                    document.cookie = keys[i] + '=0;path=/;domain=ratingdog.cn;expires=' + new Date(0).toUTCString() // 清除一级域名下的或指定的，例如 .ratingdog.cn
                }
            }
        },
        async getairdropStatus() {
            if (this.deadline <= new Date().getTime()) {
                //如果结束时间小于现在
                this.airdropStatus1 = true;
                // this.airdropStatus1 = false ;
            } else {
                //如果结束时间大于于现在
                this.airdropStatus1 = false;
                // this.airdropStatus1 = true;
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
        airdropStatus() {
            if (this.deadline < new Date().getTime()) {
                return false
            }
            return true
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
            if (JSON.parse(this.isInvited)[1]) { } else {
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
        // getAddress() {
        //   let address = sessionStorage.getItem("accountAddress");
        //   let location = window.location.host;
        //   if (!address || address === "") {
        //     return;
        //   } else {
        //     this.invitationLink = `https://${location}/#/presale?address=${address}&isInvited=${Number(
        //       JSON.parse(this.isInvited)[1]
        //     )}`;
        //   }
        // },
        // 支付好友总数
        async invitePayCount() {
            try {
                let payCount = 0;
                let _that  = this ;
                let totaltoken = new this.$BigNumber(0);
                // const invitePercentage = await PerSaleObj.methods.invitePercentage().call();
                const Price = await PerSaleObj.methods.perHTPrice().call();
                const Pricenum = Number(Price).toFixed(0)/ 10 **  _that.tokenDecimals 
                let buybnbnum  = 0 ;
                for (let i = 0; i < this.storeInviteList.length; i++) {
                    const userLockList = await PerSaleObj.methods.getUserLock(this.storeInviteList[i]).call();
                    // userLockList[0]>0?totaltoken+=Number(userLockList[0]): ''
                    // userLockList[0]>0?payCount+=1:''
                    const userLockListnum =  Number(userLockList).toFixed(0);
                    const buynum = userLockListnum / 10 **  _that.tokenDecimals;
                    buybnbnum = buybnbnum + buynum /Pricenum;
                    payCount += 1;
                }
                this.payCount = payCount;

                // const asd = new this.$BigNumber(123)/new this.$BigNumber(this.storeSwapRatio)
                // //console.log(asd.toFixed(9))
                // const storeSwapRatio = new this.$BigNumber(this.storeSwapRatio);
                const tokenDecimals = buybnbnum;
                this.totaltoken = tokenDecimals;


                const rewardsCount = buybnbnum * 0.1;
                // //console.log( web3.utils.fromWei(rewardsCount.toString()),'rewardsCount')
                this.rewardsCount = rewardsCount;
            } catch (error) {
                //console.log(error);
            }
        },

        async getIsAirdrops() {
            const airdropStatus = await PerSaleObj.methods
                .getIsAirdrop(this.address)
                .call();
            this.airdropStatus = airdropStatus;
            console.log('airdropStatus', airdropStatus);
        },

        async getAirdrop() {
            await PerSaleObj.methods.airdrop().send({
				from: this.address,
				value: web3.utils.toWei("0.0025"),
			}).then(() => {
				this.$message.success(this.$t("receiveAirdropSuccess"));
                setTimeout(()=>{
					window.location.reload();
				},1500)
			}).catch(() => {
				this.$message.error(this.$t("receiveAirdropError"));
			});
            
        },

        finish() {
            alert(this.$t("over"));
        },
        // 地址复制
        onCopy(e) {
            // alert(e.text);
            this.$message.success(this.$t("index_cta_m"));
        },
        // 最新参与预售随机
        titcom() {
            var items = this.raisedList;
            var items = items[Math.floor(Math.random() * items.length)]
            const random = Math.random().toString(36).substr(2, 4);
            this.p_titcom_li_left = items.address;
            const random1 = Math.random() * 1.5;
            this.p_titcom_li_right =
                this.$t("p_titcom_li_right") + random1.toFixed(1);
            //console.log("数据");
        },
        async getAirdropInfo() {
            const totalAirdrop = await PerSaleObj.methods.totalAirdrop().call()
            // const airdropped = await PerSaleObj.methods.airdropped().call()
            const tokenDecimals = await spacePiObj.methods.decimals().call()
            this.airdropQuantityProp = Number(totalAirdrop / 10 ** tokenDecimals).toFixed(0)
            // this.myInvites(this.address)
        },
    },
};
</script>
<style scoped lang="less">
@import "./index.less";

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
</style>