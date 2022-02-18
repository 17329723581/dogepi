<template>
  <div class="warp">
    <div>
      <a href="">
        <img src="" alt="" />
      </a>
      <p>Official Telegram</p>
    </div>
    <div>
      <a href="">
        <img src="" alt="" />
      </a>
      <p>Customer Service</p>
    </div>
    <div>
      <a href="">
        <img src="" alt="" />
      </a>
      <p>Official Twitter</p>
    </div>
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
  display: flex;
  justify-content: center;
  padding: 10px 0;
  div {
    padding: 0 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      display: block;
      width: 60px;
      height: 60px;
      border: 1px solid @borderColor-2;
      border-radius: 10px;
      margin-bottom: 10px;
    }
    p{
      color: @themeColor;
      font-size: 1rem;
      font-weight: 700;
    }
  }
}
</style>
