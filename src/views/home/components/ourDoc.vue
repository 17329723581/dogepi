<template>
  <div class="warp">
    <h1>OUR DOCUMENTS</h1>
    <p>You can find our official whitepaper and aduit below!</p>
    <div class="content">
      <div>
        <img src="@/assets/audit.svg" alt="" />
        <a href="">Audit</a>
      </div>
      <div>
        <img src="@/assets/whitepaper.svg" alt="" />
        <a href="">White Paper</a>
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
  padding: 80px 0;
  h1 {
    text-align: center;
    font-size: 2.7rem;
    font-weight: 800;
  }
  p {
    text-align: center;
    font-size: 0.9rem;
    font-weight: 800;
  }
  .content {
    display: flex;
    justify-content: center;
    padding: 30px 0;
    text-align: center;
    div {
      width: 20%;
      padding: 0 30px;
      a {
        display: block;
        padding-top: 10px;
        font-size: 1.2rem;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .warp {
    padding: 50px 5%;
    h1 {
      text-align: center;
      font-size: 2.7rem;
      font-weight: 800;
    }
    p {
      text-align: left;
      font-size: 1.2rem;
      font-weight: 800;
    }
    .content {
      display: flex;
      justify-content: center;
      padding: 30px 0;
      text-align: center;
      div {
        width: 50%;
        padding: 0 30px;
        a {
          display: block;
          padding-top: 10px;
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>
