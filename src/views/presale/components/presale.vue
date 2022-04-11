<template>
  <div class="warp">
    <a-row type="flex" justify="space-between">
      <a-col :md="10" :xs="24" class="presale-left">
        <h1>{{ this.$t("presell") }}</h1>
        <p>{{ this.$t("PresaleIn") }}</p>
        <div class="finish">
          <a-statistic-countdown
            :value="deadline"
            format="DD: HH: mm: ss"
            @finish="finish()"
          />
          <ul>
            <li>{{ this.$t("day") }}</li>
            <li>{{ this.$t("h") }}</li>
            <li>{{ this.$t("m") }}</li>
            <li>{{ this.$t("s") }}</li>
          </ul>
        </div>
        <div class="price">
          <div class="price-left">
            <p>{{ this.$t("p_text1") }}</p>
            <p>{{ this.$t("p_text2") }}</p>
          </div>
          <div class="price-right">
            <p>{{ this.$t("p_text3") }}</p>
            <p>{{ this.$t("p_text4") }}</p>
          </div>
        </div>
        <div class="border">
          <div></div>
        </div>
        <p class="text">
          {{ this.$t("p_text5") }}
        </p>
      </a-col>
      <a-col :md="12" :xs="24" class="presale-right">
        <img src="@/assets/presale.png" alt="" />
      </a-col>
    </a-row>
    <div class="banner" v-if="address" @click="$router.push('/promo')">
      <div class="banner-pc pc-block">
        <img v-if="lang === 'zh-CN'" src="@/assets/banner.png" />
        <img v-else-if="lang === 'en-US'" src="@/assets/banner-en.png" />
        <img v-else src="@/assets/banner-en.png" />
      </div>
      <div class="banner-mb mb-block">
        <img v-if="lang === 'zh-CN'" src="@/assets/yd-banner.png" />
        <img v-else-if="lang === 'en-US'" src="@/assets/yd-banner-en.png" />
        <img v-else src="@/assets/yd-banner-en.png" />
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
    ...mapState(["deadline", "address", "lang"]),
    // deadline(){
    //   return 1729187200000
    // }
  },
  watch: {},
  components: {},
  created() {},
  mounted() {},
  methods: {
    finish() {
      alert(this.$t("over"));
    },
  },
};
</script>

<style scoped lang="less">
.warp {
  width: 100%;
  padding: 73px 0 90px;
  .presale-left {
    h1 {
      font-size: 3.5rem;
      font-weight: 900;
    }
    p {
      font-weight: 700;
    }
    .finish {
      padding-left: 20px;
      /deep/ .ant-statistic-content {
        span {
          font-size: 4rem;
          font-weight: 800;
        }
      }
      ul {
        display: flex;
        // justify-content:center;
        margin-top: -10px;
        margin-bottom: 30px !important;
        li {
          padding: 0 56px 0 18px;
        }
      }
    }
    .price {
      width: 100%;
      display: flex;
      margin-top: 20px;
      div {
        width: 50%;
        p {
          font-weight: 800;
          &:nth-child(1) {
            font-size: 1rem;
          }
          &:nth-child(2) {
            font-size: 2rem;
            font-weight: 900;
          }
        }
      }
    }
    .border {
      width: 100%;
      height: 5px;
      background-color: #ebeef5;
      margin: 10px 0;
      border-radius: 10px;
      div {
        width: 60%;
        height: 100%;
        background-color: #fcb44b;
        border-radius: 10px;
      }
    }
  }
  .presale-right {
    text-align: center;
    img {
      width: 70%;
    }
  }
  .banner {
    width: 100%;
    margin-top: 30px;
    .banner-pc {
      width: 100%;
      height: 100%;
      img {
        max-width: 100%;
      }
    }
    .banner-mb {
      width: 100%;
      height: 100%;
      img {
        max-width: 100%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .banner {
      width: 100%;
      margin-top: 30px;
      .banner-pc {
        width: 100%;
        height: 100%;
        img {
          max-width: 100%;
        }
      }
      .banner-mb {
        width: 100%;
        height: 100%;
        img {
          max-width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .warp {
    width: 100%;
    padding: 50px 0 10px;
    .presale-left {
      order: 2;
    }
    .presale-right {
      order: 1;
    }
    .presale-left {
      h1 {
        font-size: 3rem;
        font-weight: 900;
        margin: 15px 0 20px !important;
      }
      p {
        font-weight: 700;
        text-align: center;
        margin-bottom: -12px !important;
      }
      .finish {
        padding-left: 0px;
        /deep/ .ant-statistic-content {
          text-align: center;
          span {
            font-size: 4rem;
            font-weight: 800;
          }
        }
        ul {
          display: flex;
          justify-content: center;
          margin-top: -10px;
          margin-bottom: 30px !important;
          li {
            width: 25%;
            text-align: center;
            padding: 0;
          }
        }
      }
      .price {
        width: 100%;
        display: inherit;
        margin-top: 20px;
        div {
          width: 100%;
          p {
            font-weight: 800;
            text-align: left !important;
            &:nth-child(1) {
              font-size: 1.3rem;
              margin-bottom: 0px !important;
            }
            &:nth-child(2) {
              font-size: 2rem;
              font-weight: 900;
              margin-bottom: 15px !important;
            }
          }
        }
      }
      .border {
        width: 100%;
        height: 5px;
        background-color: #ebeef5;
        margin: 10px 0;
        border-radius: 10px;
        div {
          width: 60%;
          height: 100%;
          background-color: #fcb44b;
          border-radius: 10px;
        }
      }
      .text {
        text-align: left !important;
      }
    }
    .presale-right {
      text-align: center;
      img {
        width: 70%;
      }
    }
    .banner {
      width: 100%;
      margin-top: 30px;
      img {
        max-width: 100%;
      }
    }
  }
}
</style>
