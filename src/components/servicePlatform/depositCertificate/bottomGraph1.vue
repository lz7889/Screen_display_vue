<template>
  <div style="height: 100%; width: 100%">
    <div
      id="deposit-certificate-left-bottom"
      style="width: 100%; height: 100%"
    ></div>
    <div class="title-num">
      <span>平均次数：{{ totalData.average }}次/月</span>
      <span>最高值：{{ totalData.max }}次</span>
      <span>最低值：{{ totalData.min }}次</span>
    </div>
  </div>
</template>

<script>
import { depositCertificateBottom1 } from "@/data/dataService.js";

export default {
  components: {},
  data() {
    return {
      chartData: depositCertificateBottom1.chartData,
      totalData: depositCertificateBottom1.totalData,
      chartDom: {},
    };
  },
  watch: {
    chartData: {
      handler: function () {
        this.drawCharts();
      },
      deep: true,
    },
  },
  created() {
    this.$nextTick(() => {
      this.drawCharts();
    });
  },
  mounted() {
    this.drawCharts();
    let _this = this;
    window.addEventListener("resize", () => {
      _this.chartDom.resize();
    });
    // this.changeTiming();
  },
  methods: {
    drawCharts() {
      this.chartDom = this.$echarts.init(
        document.getElementById("deposit-certificate-left-bottom")
      );
      let data = this.chartData;
      this.chartDom.setOption({
        tooltip: {
          trigger: "axis",
        },
        legend: {
          show: false,
        },
        grid: {
          top: "16%",
          left: "0%",
          right: "4%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: data.time,
            axisTick: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: "#fff",
              },
              interval: 0,
            },
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "#1B66F1FF",
              },
            },
            boundaryGap: false,
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              textStyle: {
                color: "#fff",
              },
              formatter: "{value}W",
            },
            axisTick: {
              show: false,
            },
            scale: true,
            min: 0,
            interval: 10,
            axisLine: {
              show: false,
              lineStyle: {
                type: "solid",
                color: "#1B66F1FF",
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(27,102,241,0.5)",
                type: "dashed",
                width: 1,
              },
            },
          },
        ],
        series: [
          {
            name: "电子签章数",
            type: "line",
            data: data.value,
            symbol: "circle",
            symbolSize: 10,
            itemStyle: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  color: "black",
                },
                color: "#0278FE",
              },
              emphasis: {
                color: "#0278FE",
              },
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(27,102,241,0.3)",
                  },
                  {
                    offset: 1,
                    color: "rgba(27, 102, 241, 0)",
                  },
                ]),
              },
            },
          },
        ],
      });
    },
    changeNumber() {
      let newArray = [];
      this.chartData.value.forEach((item) => {
        // item = item + Math.floor(Math.random() * 10 + 1);
        item = item + 1;
        newArray.push(item);
      });
      this.$set(this.chartData, "value", newArray);
    },
    changeTiming() {
      this.dataCenterTimer33 = setInterval(() => {
        this.changeNumber();
      }, 5000);
    },
  },
  destroyed() {
    clearInterval(this.dataCenterTimer33);
  },
};
</script>

<style scoped lang="less">
.title-num {
  position: absolute;
  top: 34px;
  right: 5%;
  font-size: 14px;
  span {
    margin-right: 25px;
  }
}
</style>
