<template>
  <header>
    <div class="header-logo" id="top">
      <div class="header-logo-pc">
        <a href="">
          <img src="@/assets/logo.png" class="img" />
          <span>DogePi</span>
        </a>
      </div>
      <div class="header-logo-m" >
        <a href="">
          <img src="@/assets/logo.png" class="img" />
          <span>DogePi</span>
        </a>
      </div>
    </div>
    <nav class="header-nav">
      <ul>
        <li
          v-for="item in nav"
          :key="item.name"
          @click="routerPush(item.patn, item.name)"
        >
          <a href="javascript:;">{{ item.title }}</a>
        </li>
        <li class="lang">
          <a-dropdown :trigger="['click']">
            <a class="ant-dropdown-link" style="color: #333333;" @click="(e) => e.preventDefault()">
              {{ langName }}
            </a>
            <a-menu slot="overlay" class="dow" @click="changeLang" style="z-index:99999">
              <a-menu-item v-for="item of langList" :key="item.key">
                <a href="javascript:;">{{ item.name }}</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </li>
      </ul>
    </nav>

    <nav class="m-header-nav">
      <div class="m-header-dow">
        <a-icon type="global" />
        <a-dropdown :trigger="['click']">
          <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
            {{ langName }}
            <a-icon type="caret-down" style="color: #5A51A8;" />
          </a>
          <a-menu slot="overlay" class="dow" @click="changeLang">
            <a-menu-item v-for="item of langList" :key="item.key">
              <a href="javascript:;">{{ item.name }}</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
      <div class="m-memu-i" @click.stop="changeMemu = true">
        <a-icon type="menu" style="font-size: 1.5625rem;" />
      </div>
      <div class="m-nav" :class="{ show: changeMemu }">
        <ul>
          <div style="margin-top: -20px;text-align: center">
            
          </div>
          <li
            v-for="item in nav"
            :key="item.name"
            @click="routerPush(item.patn, item.name)"
          >
            <a href="javascript:;">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      changeMemu: false,
      nav: [
        {
          path: "/",
          title: this.$t("home"),
          name: "Home",
        },
        {
          path: "/presale",
          title: this.$t("presale"),
          name: "Presale",
        },
        {
          path: "/airdrop",
          title: this.$t("airdrop"),
          name: "Airdrop",
        },
		
      ],
      langName: "",
      langList: [
        {
          key: "en-US",
          name: "English",
        },
        {
          key: "zh-CN",
          name: "简体中文",
        },
		// import engLang from './eng.js'
		// import zhLang from './zh_cn.js'
		// import zhTwLang from './zh_tw.js'
		// import jaJpLang from './ja_jp.js'
		// import ruRuLang from './ru-ru.js'
		// import koKrLang from './ko-kr.js'
		// import deDeLang from './de-de.js'
		// import frFrLang from './fr-fr.js'
		// import arLang from './ar-ar.js'
		// import thThLang from './th-th.js'
		// import viVnLang from './vi-vn.js'
		// import idIdLang from './id-id.js'
		
      ],
    };
  },
  props: {},
  computed: {
    ...mapState(["lang"]),
  },
  watch: {},
  components: {},
  created() {
    this.langName = this.langList.filter((e) => {
      return this.lang === e.key;
    })[0].name;
  },
  mounted() {
    // 模拟外部点击  关闭移动端侧边导航
    document.addEventListener("click", (e) => {
      if (e.target.className !== "m-nav show") {
        this.changeMemu = false;
      }
    });
  },
  methods: {
    ...mapMutations(["updateLang"]),
    // 切换语言

    changeLang({ key }) {
      const lang = key;
      // console.log(key)
      // const lang = key === "en-US" ? "en-US" : "zh-CN";

      this.$i18n.locale = lang;
      this.$cookie.set("lang", lang);
      this.$store.commit("updateLang", lang);
      this.LangReload();
    },
    routerPush(path, name) {
      this.$router.push({
        path: path,
        name: name,
        query: {},
      });
    },
  },
};
</script>

<style scoped lang="less">
header {
  width: 100%;
  // padding: 53px 0 0;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-logo {
    .header-logo-pc{
      z-index: 99;
      a{
        display:flex;
        align-items: center;
        color:@fontColor;
        span{
          margin-left: 10px;
          font-size: 30px;
          font-weight: 800;
        }
      }
      .header-title{
          padding-left: 10px;
          font-size: 24px;
          font-weight: 800;
      }
    }
    img {
      width: 60px;
    }
  }
  .header-logo-m {
    display: none;
  }
}

.dow {
  flex-wrap: wrap;
  text-align: left;
  width: 100px;

  li {
    width: 100%;
    padding: 10px 10px;
  }
}

/deep/ .ant-dropdown-menu-item {
  a {
    
  }
}

.m-header-nav {
  display: none;
}

ul {
  display: flex;
  align-items: center;
  li {
    margin-right: 25px;
    font-size: 1.1rem;

    a {
      font-weight: 400;
      color:@fontColor;
    }
  }
  .lang{
    padding: 5px 20px 5px 20px;
    background: #F4A93E;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (max-width: 1200px) {
  header {
    height: 70px;
    .header-logo {
      .header-logo-pc{
          z-index: 99;
          a{
            display:flex;
            align-items: center;
            span{
              margin-left: 10px;
              font-size: 25px;
            }
          }
          .header-title{
              padding-left: 10px;
              font-size: 24px;
          }
      }
    }
    .header-logo-m {
      display: none;
    }
  }
  ul {
    display: flex;
    align-items: center;
    li {
      margin-right: 25px;
      font-size: 1.1rem;

      a {
        font-weight: 400;
        color:@fontColor;
      }
    }
    .lang{
      padding: 2px 10px 2px 10px;
      background: #F4A93E;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
@media screen and (max-width: 768px) {
  header {
    // width: 100vw;
    // padding: 30px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;

    
    .header-logo {
      z-index: 99;
      .header-title{
        padding-left: 10px;
        font-size: 24px;
        font-weight: 800;
      }
      img {
        @media (max-width: 540px) {
          width:10vw;
        }
        @media (min-width: 540px) {
          width:8vw;
        }
      }
    }
    .header-logo-pc {
      display: none;
    }
    .header-logo-m {
      a{
        display:flex;
        align-items: center;
        color: @fontColor;
        span{
          margin-left: 10px;
          font-weight: bold;
          @media (max-width: 540px) {
            font-size: 20px;
          }
          @media (min-width: 280px) {
            font-size: 16px;
          }
          @media (min-width: 768px) {
            font-size: 30px;
          }

        }
      }
      display: block;
    }
  }

  .header-nav {
    display: none;
  }

  .m-header-nav {
    display: block;
    margin-right: 10px;
    .m-header-dow {
      float: left;
      margin-right: 10px;
    }

    .show {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0 !important;
      //right: 0 !important;
    }

    .m-memu-i {
      // position: absolute;
      // top: 30px;
      // right: 1.5rem;
      // margin-left: 10px;
      float: right;
      z-index: 999;

      i {
        font-size: 2rem;
      }
    }

    .m-nav {
      position: fixed;

      top: 0;
      bottom: 0;
      left: -100%;
      z-index: 9999;
      width: 200px;
      // min-height: 100vh;
      // box-shadow: 0px 2px 4px rgb(50, 191, 247);
      // background: #ffffff !important;
      background-color: rgba(90,81,168,0.6);
      transition: all 0.3s;
      backdrop-filter: blur(25px);
      padding-top: 50px;
      box-sizing: border-box;

      ul {
        display: inherit;

        li {
          margin-right: 0;
          padding: 20px 0px 20px;
          text-align: center;
          color: #333;
          font-size: 1.1rem;

          a {
            font-size: 1.1rem;
            font-weight: 800;
          }
        }
      }
    }
  }
}
</style>
