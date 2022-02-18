<template>
  <div class="warp">
    <div class="content">
      <div class="left">
        <img src="https://www.dogecoin.cc/img/spacepi-03.svg" alt="" />
      </div>
      <div class="right">
        <h2>CONTACT US</h2>
        <input placeholder="Your Name" type="text" />
        <input placeholder="Your Email" type="text" />
        <textarea placeholder="Message"></textarea>
        <a-button type="primary" size="large"> Submit </a-button>
      </div>
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
  padding-top: 133px;
  padding-bottom: 60px;
  background-image: url("../../../assets/bg-bottom.png");
  background-size: cover;
  .content {
    width: 70%;
    background-color: #fff;
    border-radius: 60px;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    padding: 50px 0;
    .left {
      width: 30%;
      padding-top: 150px;
    }
    .right {
      width: 40%;
      h2 {
        font-size: 2.5rem;
        font-weight: 900;
        color: @themeColor;
        padding-bottom: 50px;
      }
      input {
        width: 100%;
        height: 50px;
        margin-bottom: 22px;
        padding-left: 22px;
        border-radius: 10px;
        border: 1px solid @borderColor-2;
        display: block;
        outline: none;
        color: #000;
      }
      textarea {
        width: 100%;
        height: 150px;
        margin-bottom: 22px;
        padding-top: 10px;
        padding-left: 22px;
        border-radius: 10px;
        border: 1px solid @borderColor-2;
        display: block;
        outline: none;
        color: #000;
      }
      /deep/ .ant-btn-primary{
          background-color: @bgColor;
          border-color: @bgColor;
          padding: 0 60px;
          border-radius: 10px;
      }
    }
  }
}
</style>
