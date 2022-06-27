<template>
  <div id="app" v-if="isLangAlive">
    <router-view />
    <div class="back-top" @click="toPage('top')">
      <a-icon type="up" />
    </div>
  </div>
</template>
<script>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<META HTTP-EQUIV="PRAGMA" CONTENT="NO-CACHE">
</script>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import axios from "axios";

export default {
  created() {
    this.getdecimal();
    this.getRouteInvited();
  },
  watch: {
    address: {
      handler(newVal, oldVal) {
        newVal !== "" && this.getBalance(newVal);
      },
      immediate: true,
    },
  },
  computed: {
    ...mapState(["isLangAlive", "address"]),
  },

  methods: {
    ...mapActions(["login", "getdecimal", "getBalance"]),
    // save route query address
    getRouteInvited() {
      const isRoueInvited = sessionStorage.getItem("isRoueInvited");
      if (isRoueInvited === "undefined" || !isRoueInvited) {
        sessionStorage.setItem("isRoueInvited", this.$route.query.address);
      } else {
        sessionStorage.getItem("isRoueInvited");
      }
    },
    delCookie() {
      var keys = document.cookie.match(/[^ =;]+(?==)/g);
      if (keys) {
        for (var i = keys.length; i--; ) {
          document.cookie =
            keys[i] + "=0;path=/;expires=" + new Date(0).toUTCString(); // 清除当前域名下的,例如：m.ratingdog.cn
          document.cookie =
            keys[i] +
            "=0;path=/;domain=" +
            document.domain +
            ";expires=" +
            new Date(0).toUTCString(); // 清除当前域名下的，例如 .m.ratingdog.cn
          document.cookie =
            keys[i] +
            "=0;path=/;domain=ratingdog.cn;expires=" +
            new Date(0).toUTCString(); // 清除一级域名下的或指定的，例如 .ratingdog.cn
        }
      }
    },
    // 锚点跳转
    toPage(id) {
      console.log(id);
      document.querySelector(`#${id}`).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
    },
  },
};
</script>

<style lang="less">
.c-y {
  color: #fea626;
}
@import "./styles/common";
* {
  
}

#app {
  width: 100%;
  height: 100%;
  background: #2C0058;
  color: @fontColor;
}
.back-top {
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  i {
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 768px) {
  #app {
    background: #301e63;
  }
  .back-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      font-size: 1.5rem;
    }
  }
}

.cta-btn {
  height: 3.1vw;
  background: #fea626;
  border-radius: @fillet;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 10s linear; /* vendorless fallback */
  -o-transition: color 10s linear; /* opera */
  -ms-transition: color 10s linear; /* IE 10 */
  -moz-transition: color 10s linear; /* Firefox */
  -webkit-transition: color 10s linear; /*safari and chrome */
}

.cta-btn:after,
.cta-btn:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  //background: #fea626;
  z-index: -2;
}
.cta-btn:hover {
  z-index: 1;
  cursor: pointer;
  //background:transparent;
}

.cta-btn:before {
  transition: 0.6s;
  background: linear-gradient(245deg, #F06B00 0%, #F28902 100%);
  z-index: -1;
}
.cta-btn:hover:after,
.cta-btn:hover:before {
  width: 100%;
}

.cta-btn__txt {
  font-size: 1.3vw;
  font-weight: bold;
  line-height: 0;
  color: @blackFontColor;
}
</style>