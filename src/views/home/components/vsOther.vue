<template>
  <div class="warp">
    <h1>{{this.$t('vs_title')}}</h1>
    <div class="table">
      <table>
        <thead>
          <tr>
            <th><p>{{this.$t('vs_sub_title1')}}</p></th>
            <th>
              <div>
                <img src="@/assets/logo.svg" alt="" />
                <p>{{this.$t('vs_title1')}}</p>
                <p>{{this.$t('vs_sub_title2')}}</p>
              </div>
            </th>
            <th>
              <div>
                <img src="@/assets/Doge-coin.svg" alt="" />
                <p>{{this.$t('vs_title2')}}</p>
                <p>{{this.$t('vs_sub_title3')}}</p>
              </div>
            </th>
            <th>
              <div>
                <img src="@/assets/Shiba-icon.svg" alt="" />
                <p>{{this.$t('vs_title3')}}</p>
                <p>{{this.$t('vs_sub_title4')}}</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{this.$t('vs_left_title1')}}</td>
            <td><img src="@/assets/ture.png" alt=""></td>
            <td><img src="@/assets/false.png" alt=""></td>
            <td><img src="@/assets/false.png" alt=""></td>
          </tr>
          <tr>
            <td>{{this.$t('vs_left_title2')}}</td>
            <td><img src="@/assets/ture.png" alt=""></td>
            <td><img src="@/assets/false.png" alt=""></td>
            <td><img src="@/assets/false.png" alt=""></td>
          </tr>
          <tr>
            <td>{{this.$t('vs_left_title3')}}</td>
            <td><img src="@/assets/ture.png" alt=""></td>
            <td><img src="@/assets/false.png" alt=""></td>
            <td><img src="@/assets/false.png" alt=""></td>
          </tr>
          <tr>
            <td>{{this.$t('vs_left_title4')}}</td>
            <td><img src="@/assets/ture.png" alt=""></td>
            <td><img src="@/assets/false.png" alt=""></td>
            <td><img src="@/assets/false.png" alt=""></td>
          </tr>
          <tr>
            <td>{{this.$t('vs_left_title5')}}</td>
            <td><img src="@/assets/ture.png" alt=""></td>
            <td><img src="@/assets/false.png" alt=""></td>
            <td><img src="@/assets/false.png" alt=""></td>
          </tr>
        </tbody>
      </table>
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
    font-size: 2.5rem;
    font-weight: 800;
    color: @themeColor;
  }
  .table {
    padding: 60px 0;
  }
  table {
    width: 75%;
    margin: 0 auto;
    p {
      font-size: 1.2rem;
      padding: 10px;
      color: @themeColor;
    }
    th {
      width: 25%;
      text-align: center;
      border-bottom: 1px solid @borderColor-1;
      font-size: 1.2rem;
      &:first-child {
        vertical-align: bottom;
        text-align: right;
      }
      img{
        width: 80px;
        height: 80px;
      }
    }
    td {
      width: 25%;
      padding: 10px 0;
      color: @themeColor;
      font-weight: 700;
      text-align: right;
      font-size: 1rem;
      text-align: center;
      border-bottom: 1px solid @borderColor-1;
      &:first-child {
        text-align: right;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .warp {
    padding: 50px 0;
    h1 {
      text-align: center;
      font-size: 2.2rem;
      font-weight: 800;
      color: @themeColor;
    }
    .table {
      padding: 30px 0;
    }
    table {
      width: 100%;
      margin: 0 auto;
      p {
        font-size: 1.2rem;
        padding: 5px 0;
        color: @themeColor;
      }
      th {
        width: 25%;
        text-align: center;
        border-bottom: 1px solid @borderColor-1;
        font-size: 1.2rem;
        &:first-child {
          vertical-align: bottom;
          text-align: right;
        }
        img{
          width: 50px;
          height: 50px;
        }
      }
      td {
        width: 25%;
        padding: 13px 0;
        color: @themeColor;
        font-weight: 700;
        text-align: right;
        font-size: 1rem;
        text-align: center;
        border-bottom: 1px solid @borderColor-1;
        i {
          font-weight: 700;
          color: red;
        }
        &:first-child {
          text-align: right;
        }
      }
    }
  }
}
</style>
