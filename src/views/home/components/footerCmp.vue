<template>
  <div class="warp">
    <p class="copyright">
      {{this.$t('footer1')}}
    </p>
    <p class="copyright">
      {{this.$t('footer2')}}
    </p>
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
  padding: 50px 0;
  text-align: center;
  background: url("../../../assets/bg-footer.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  p {
    a {
      color: #1658dc !important;
      margin-right: 20px;
      font-weight: normal;
      line-height: 40px;
    }
  }
  .copyright {
    color: @themeColor;
    line-height: 30px;
    a {
      color: @themeColor !important;
    }
  }
}

@media screen and (max-width: 768px) {
  .warp {
    padding: 50px 20px 20px;
    text-align: center;
    .copyright {
      padding: 0 10px;
      color: @themeColor;
      line-height: 20px;
      font-weight: 700;
      font-size: .8rem;
      a {
        font-weight: 700;
        color: @themeColor !important;
      }
    }
  }
}
</style>
