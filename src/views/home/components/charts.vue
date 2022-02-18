<template>
  <div class="charts">
    <a-row type="flex" justify="center" align="middle">
      <a-col :md="8" :xs="24" class="charts-left">
        <h1>{{this.$t('chart_title')}}</h1>
        <p>
          {{this.$t('chart_text')}}
        </p>
      </a-col>
      <a-col :md="8" :xs="24" class="charts-center">
        <div id="main"></div>
      </a-col>
      <a-col :md="8" :xs="13" class="charts-right">
        <p><span class="c1"></span><span>15%</span><span>{{this.$t('chart_text1')}}</span></p>
        <p>
          <span class="c2"></span><span>30%</span><span>{{this.$t('chart_text2')}}</span>
        </p>
        <p><span class="c3"></span><span>5%</span><span>{{this.$t('chart_text3')}}</span></p>
        <p>
          <span class="c4"></span><span>50%</span><span>{{this.$t('chart_text4')}}</span>
        </p>
      </a-col>
    </a-row>
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
  mounted() {
    this.drawCharts();
  },
  methods: {
    drawCharts() {
      let myChart = this.$echarts.init(document.getElementById("main"));
      window.onresize = myChart.resize;

      let option = {
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["40%", "70%"],
            color: ["#5A51A8", "#FFB05C", "#F443A5", "#fff"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 15, name: this.$t('chart_text1') },
              { value: 30, name: this.$t('chart_text2') },
              { value: 5, name: this.$t('chart_text3') },
              { value: 50, name: this.$t('chart_text4') },
            ],
          },
        ],
      };

      myChart.setOption(option);
    },
  },
};
</script>

<style scoped lang="less">
.charts {
  width: 100%;
  padding: 20px 80px;
  .charts-left {
    h1 {
      color: #fff;
      font-size: 2rem;
    }
    p {
      color: #fff;
      font-size: 1rem;
    }
  }
  .charts-center {
    #main {
      width: 100%;
      height: 200px;
    }
  }
  .charts-right {
    p {
      color: #fff;
      font-size: 1.1rem;
      line-height: 25px;
      span:nth-child(1) {
        display: inline-block;
        width: 15px;
        height: 15px;
        margin-right: 3px;
        border-radius: 3px;
      }
    }
  }
  .c1 {
    background-color: #5a51a8;
  }
  .c2 {
    background-color: #ffb05c;
  }
  .c3 {
    background-color: #f443a5;
  }
  .c4 {
    background-color: #fff;
  }
}

@media screen and (max-width: 768px) {
  .charts {
    width: 100%;
    padding: 20px 10px;
    .charts-left {
      h1 {
        color: #fff;
        font-size: 2rem;
        text-align: center;
        margin-bottom: 10px !important;
      }
      p {
        color: #fff;
        font-size: 1rem;
      }
    }
    .charts-center {
      #main {
        width: 100%;
        height: 250px;
      }
    }
    .charts-right {
      p {
        color: #fff;
        font-size: 1.1rem;
        line-height: 25px;
        span:nth-child(1) {
          display: inline-block;
          width: 15px;
          height: 15px;
          margin-right: 3px;
          border-radius: 3px;
        }
      }
    }
    .c1 {
      background-color: #5a51a8;
    }
    .c2 {
      background-color: #ffb05c;
    }
    .c3 {
      background-color: #f443a5;
    }
    .c4 {
      background-color: #fff;
    }
  }
}
</style>
