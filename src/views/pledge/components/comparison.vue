<template>
  <div class="warp">
    <div class="pr-content">
      <a-col :md="18" :xs="24" class="content-left">
        <p class="tip">{{this.$t('inviteMembers')}}</p>
        <div class="pr-list">
          <div class="h"><p class="title">{{this.$t('inviteSerialNumber')}}</p></div>
          <div class="h2"><p class="title">{{this.$t('inviteAddress')}}</p></div>
        </div>
        <div class="pr-list scroll">
          <div class="list" v-for="item of InviteListProp.length" :key="item">
            <p >{{item}}</p>
          </div>
          <div class="list2" v-for="item of InviteListProp" :key="item">
            <p >{{item}}</p>
          </div>
        </div>
      </a-col>
      <a-col :md="6" :xs="24" class="content-right">
        <img src="@/assets/list.png" alt="" />
      </a-col>
    </div>
    <div class="pr-rules">
      <rules :ruleList="ruleList"></rules>
    </div>
  </div>
</template>

<script>
import rules from "@/components/rules.vue";
import { mapState } from 'vuex';
export default {
  data() {
    return {
      ruleList: [
        { text: this.$t("pr_rules1") },
        { text: this.$t("pr_rules2") },
        { text: this.$t("pr_rules3") },
      ],
    };
  },
  props: {
    InviteList: {
      type: Array,
      default: ()=>{
        return []
      }
    }
  },
  computed: {
    InviteListProp() {
      return this.InviteList
    }
  },
  watch: {},
  components: {
    rules,
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.warp {
  width: 100%;
  .pr-content {
    width: 60%;
    margin: 0 auto 30px;
    padding: 20px;
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;
    .tip {
      color: #000;
      font-weight: 700;
      font-size: 1.2rem;
    }
    .pr-list {
      color: #000;
      display: flex;
      width: 100%;
      padding: 5px 0;
      .title {
        color: #000 !important;
        font-size: 1.1rem;
      }
      .list {
        p {
          font-weight: 700;
        }
      }
      .list,
      .h {
        width: 20%;
        text-align: center;
        p {
          color: #5a52a8;
          padding: 3px 0;
        }
      }
      .list2,
      .h2 {
        width: 70%;
        text-align: center;
        p {
          padding: 3px 0;
        }
      }
    }
    .scroll {
      overflow-y: scroll;
      max-height: 200px;
    }
    img {
      max-width: 100%;
    }
  }
  .content-right {
  }
  .rules{
    width: 58%;
    margin: 0 auto;
  }
  // .content {
  //   width: 80%;
  //   text-align: center;
  //   margin: 0 auto;
  //   img {
  //     margin-bottom: 20px;
  //   }
  //   .box {
  //     display: flex;
  //     //   align-items: center;
  //     justify-content: center;
  //     margin-bottom: 50px;
  //     div {
  //       width: 25%;
  //       margin: 10px 40px;
  //       font-size: 0.9rem;
  //       .title {
  //         font-size: 1.2rem;
  //         margin-bottom: 10px !important;
  //       }
  //     }
  //   }
  // }
}

@media screen and (max-width: 768px) {
  .warp {
    width: 100%;
    .pr-content {
      width: 100%;
      margin: 30px auto 30px;
      padding: 20px;
      background-color: #fff;
      border-radius: 20px;
      overflow: hidden;
      .tip {
        color: #000;
        font-weight: 700;
        font-size: 1.2rem;
      }
      .pr-list {
        color: #000;
        display: flex;
        width: 100%;
        padding: 5px 0;
        .title {
          color: #000 !important;
          font-size: 1.1rem;
        }
        .list {
          p {
            font-weight: 700;
          }
        }
        .list,
        .h {
          width: 20%;
          text-align: center;
          p {
            color: #5a52a8;
            padding: 3px 0;
          }
        }
        .list2,
        .h2 {
          width: 70%;
          text-align: center;
          p {
            padding: 3px 0;
          }
        }
      }
      .scroll {
        overflow-y: scroll;
        max-height: 200px;
      }
      img {
        max-width: 100%;
      }
    }
    .content-right {
      display: none;
    }
  }
}

.pr-rules {
  width: 58%;
  margin: 0 auto;
  padding-bottom: 60px;
  h2 {
    font-weight: 700;
  }
  p {
    font-size: 0.9rem;
  }
}

@media screen and (max-width: 768px) {
  .pr-rules {
    width: 98%;
    margin: 0 auto;
    padding-bottom: 0px;
    h2 {
      font-weight: 700;
    }
    p {
      font-size: 1.1rem;
    }
  }
}
</style>
