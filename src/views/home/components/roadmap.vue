<template>
  <div class="warp">
    <a-row class="content">
      <a-col :md="11" :xs="0" class="content-left">
        <img src="@/assets/roadmap.png" alt="" />
      </a-col>
      <a-col :md="13" :xs="24" class="content-right">
        <h2>{{ this.$t("ROADMAP") }}</h2>
        <div class="scroll-box">
          <div v-for="item in list" :key="item.span">
            <span>{{ item.span }}</span>
            <ul>
              <strong>{{ item.title }}</strong>
              <li v-for="subItem in item.liList" :key="subItem.id">
                <a-icon type="api" />
                {{ subItem.text }}
              </li>
            </ul>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          span: this.$t("Phase1"),
          title: this.$t("r_title1"),
          liList: [
            {
              id: "1",
              text: this.$t("rt1_text1"),
            },
            {
              id: "2",
              text: this.$t("rt1_text2"),
            },
            {
              id: "3",
              text: this.$t("rt1_text3"),
            },
            {
              id: "4",
              text: this.$t("rt1_text4"),
            },
            {
              id: "5",
              text: this.$t("rt1_text5"),
            },
            {
              id: "6",
              text: this.$t("rt1_text6"),
            },
            {
              id: "7",
              text: this.$t("rt1_text7"),
            },
            {
              id: "8",
              text: this.$t("rt1_text8"),
            },
            {
              id: "9",
              text: this.$t("rt1_text9"),
            },
            {
              id: "10",
              text: this.$t("rt1_text10"),
            },
          ],
        },
        {
          span: this.$t("Phase2"),
          title: this.$t("r_title2"),
          liList: [
            // {
            //   id: "1",
            //   text: this.$t("rt1_text1"),
            // },
            {
              id: "2",
              text: this.$t("rt2_text2"),
            },
            {
              id: "3",
              text: this.$t("rt2_text3"),
            },
            {
              id: "4",
              text: this.$t("rt2_text4"),
            },
            {
              id: "5",
              text: this.$t("rt2_text5"),
            },
            {
              id: "6",
              text: this.$t("rt2_text6"),
            },
            {
              id: "7",
              text: this.$t("rt2_text7"),
            },
            {
              id: "8",
              text: this.$t("rt2_text8"),
            },
            {
              id: "9",
              text: this.$t("rt2_text9"),
            }
          ],
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
  padding: 80px 13%;
  .content {
    color: @themeColor;
    .content-left {
      padding-left: 5%;
      img {
        width: 75%;
      }
    }
    .content-right {
      h2 {
        color: @themeColor;
        font-size: 2.3rem;
        font-weight: 900;
        text-align: center;
      }
    }
  }
  .scroll-box {
    margin-top: 50px;
    max-height: 700px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar-track {
      background-color: @borderColor-1;
    }
    &::-webkit-scrollbar-thumb {
      background-color: @themeColor;
    }
    div {
      display: flex;
      margin-bottom: 40px;
      span {
        margin-right: 17px;
        font-size: 52px;
        font-weight: 600;
        writing-mode: vertical-lr;
        color: #d4d3e1;
      }
      ul {
        color: @themeColor;
        strong {
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 50px;
        }
        li {
          font-size: 1rem;
          line-height: 30px;
          font-weight: 700;
          i {
            color: @fontColor-2;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .warp {
    padding: 50px 0 0;
    .content {
      color: @themeColor;
      .content-left {
        padding-left: 5%;
        display:none;
        img {
          width: 55%;
        }
      }
      .content-right {
        h2 {
          color: @themeColor;
          font-size: 2.3rem;
          font-weight: 900;
          text-align: center;
        }
      }
    }
    .scroll-box {
      margin-top: 20px;
      max-height: inherit;
      overflow-y: inherit;
      div {
        display: flex;
        margin-bottom: 40px;
        span {
          display: inline-block;
          width: 20%;
          margin-right: 0px;
          font-size: 30px;
          font-weight: 600;
          writing-mode: vertical-lr;
          color: #d4d3e1;
        }
        ul {
          color: @themeColor;
          strong {
            font-size: 2.2rem;
            font-weight: 700;
            line-height: 50px;
          }
          li {
            font-size: 1.2rem;
            line-height: 22px;
            font-weight: 700;
            display: flex;
            align-items: center;
            margin-bottom: 5px;
            i {
              margin-right: 5px;
              color: @fontColor-2;
            }
            p {
              word-break: break-all;
            }
          }
        }
      }
    }
  }
}
</style>
