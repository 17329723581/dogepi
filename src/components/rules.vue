<template>
  <div class="warp">
    <h2>{{ this.$t("p_rules") }}</h2>
    <p v-for="(item, index) in ruleList" :key="index">
      <span>{{ index + 1 }}. </span> {{ item.text }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    ruleList: {
      type: Array,
      default: [],
    },
  },
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
  width: 58%;
  margin: 0 auto;
  padding-bottom: 60px;
  h2 {
    font-weight: 700;
    color: @themeColor;
  }
  p {
    font-size: 0.9rem;
    color: @themeColor;
  }
}

@media screen and (max-width: 768px) {
  .warp {
    width: 98%;
    margin: 0 auto;
    padding-bottom: 40px;
    h2 {
      font-weight: 700;
      color: @themeColor;
    }
    p {
      font-size: 1rem;
      color: @themeColor;
    }
  }
}
</style>
