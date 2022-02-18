<template>
  <div class="warp">
    <a-row type="flex" justify="space-between">
      <a-col :md="10" :xs="24" class="presale-left presale-end">
        <h1>
          <p>{{ this.$t("ye_text1") }}</p>
          <p>{{ this.$t("ye_text2") }}</p>
        </h1>
        <p>{{ this.$t("ye_text3") }}</p>
        <p class="num">1000000000000000</p>
        <div class="border">
          <div></div>
        </div>
        <p>
          {{ this.$t("ye_text4") }}
        </p>
      </a-col>
      <a-col :md="12" :xs="24" class="presale-right">
        <img src="@/assets/presaleEnd.png" alt="" />
      </a-col>
    </a-row>
    <!-- <div class="getpi">
      <div class="title">
        {{ this.$t("ye_title") }}
      </div>
      <div class="box">
        <div class="box-content">
          <p>{{ this.$t("ye_get1") }}</p>
          <div class="box-money">
            <img src="@/assets/money.png" alt="" />
          </div>
          <p class="num">30%</p>
          <button>{{ this.$t("ye_get4") }}</button>
          <p>219954</p>
        </div>
        <div class="box-content jt">
          <img src="@/assets/rg.png" alt="" />
        </div>
        <div class="box-content">
          <p>{{ this.$t("ye_get2") }}</p>
          <div class="box-money">
            <img src="@/assets/money.png" alt="" />
          </div>
          <p class="num">30%</p>
          <button>{{ this.$t("ye_get4") }}</button>
          <p>219954</p>
        </div>
        <div class="box-content jt">
          <img src="@/assets/rb.png" alt="" />
        </div>
        <div class="box-content">
          <p>{{ this.$t("ye_get3") }}</p>
          <div class="box-money">
            <img src="@/assets/money.png" alt="" />
          </div>
          <p class="num">40%</p>
          <button>{{ this.$t("ye_get4") }}</button>
          <p>219954</p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
  width: 100%;
  padding: 73px 0 90px;
  .presale-left {
    h1 {
      font-size: 3.5rem;
      font-weight: 900;
      color: @themeColor;
      margin-bottom: 20px !important;
    }
    p {
      font-weight: 700;
      color: #fff;
    }
    .num {
      font-size: 3rem;
    }
    .border {
      width: 100%;
      height: 5px;
      background-color: #ebeef5;
      margin: 10px 0;
      border-radius: 10px;
      div {
        width: 100%;
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

  .getpi {
    width: 100%;
    margin: 80px auto 20px;
    .title {
      margin: 0 auto 0px;
      width: 20%;
      text-align: center;
      padding: 5px 0;
      background-color: #ffd18d;
      font-size: 1rem;
      border-radius: 10px;
    }
    .box {
      width: 90%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      padding: 40px 20px;
      border-radius: 20px;
      .box-content {
        width: 15%;
        text-align: center;
        p {
          margin-bottom: 5px !important;
        }
        .num {
          font-size: 2rem;
          color: #f9b24c;
          font-weight: 700;
        }
        .box-money{
          background: url('../../../assets/bg-money.png') no-repeat;
          background-size: cover;
          padding: 20px 0;
          border-radius:20px;
          img {
            width: 60%;
          }
        }
        button {
          background-color: #f9b24c;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .warp {
    width: 100%;
    padding: 50px 0 20px;
    .presale-end p {
      text-align: left !important;
    }
    .presale-left {
      order: 2;
      h1 {
        font-size: 3rem;
        font-weight: 900;
        margin: 15px 0 20px !important;
        color: @themeColor;
      }
      p {
        font-weight: 700;
        text-align: center;
        margin-bottom: 12px !important;
        color: #fff;
      }
      .finish {
        padding-left: 0px;
        /deep/ .ant-statistic-content {
          text-align: center;
          span {
            font-size: 4rem;
            font-weight: 800;
            color: @bgColor;
          }
        }
        ul {
          display: flex;
          justify-content: center;
          color: @bgColor;
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
            color: @themeColor;
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
      order: 1;
      text-align: center;
      img {
        width: 70%;
      }
    }
    .getpi {
      width: 100%;
      margin: 80px auto 20px;
      .title {
        margin: 0 auto 0px;
        width: 70%;
        text-align: center;
        padding: 8px 0;
        background: url("../../../assets/bg-btn.png") no-repeat;
        background-size: cover;
        font-size: 1rem;
        border-radius: 10px;
        font-weight: 700;
        font-size: 1.2rem;
      }
      .box {
        width: 90%;
        margin: 0 auto;
        display: inherit;
        align-items: center;
        justify-content: center;
        background-color: inherit;
        padding: 40px 0px;
        border-radius: 20px;
        .box-content {
          width: 100%;
          text-align: center;
          p:nth-child(1) {
            color: #fff;
            margin-bottom: 10px !important;
            font-size: 1.2rem;
          }
          p:nth-child(5) {
            color: #fff;
            margin: 10px 0 !important;
            font-size: 1rem;
          }
          .num {
            font-size: 2.3rem;
            color: #f9b24c;
            font-weight: 700;
          }
        .box-money{
          width: 45%;
          margin: 0 auto;
          background: url('../../../assets/bg-money.png') no-repeat;
          background-size: cover;
          padding: 20px 0;
          border-radius:20px;
          img {
            width: 60%;
          }
        }
          button {
            background-color: #f9b24c;
            border: none;
            border-radius: 20px;
            padding: 10px 30px;
          }
        }
        .jt img {
          width: 20%;
          margin: 30px 0;
          transform: rotate(90deg);
        }
      }
    }
  }
}
</style>
