<template>
  <div
    id="deposit-certificate-right-bottom"
    style="width: 100%; height: 100%"
  ></div>
</template>

<script>
import { depositCertificateBottom2 } from "@/data/dataService.js";

export default {
  components: {},
  data() {
    return {
      chartData: depositCertificateBottom2,
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
        document.getElementById("deposit-certificate-right-bottom")
      );
      let data = this.chartData;
      this.chartDom.setOption({
        tooltip: {
          trigger: "axis",
        },
        legend: {
          show: true,
          right: "3%",
          icon: "circle",
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 35,
          textStyle: {
            color: "#fff",
            fontSize: 14,
          },
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
            // 坐标轴颜色
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
            name: data.label[0],
            type: "line",
            data: data.value0,
            symbol: "circle",
            symbolSize: 10,
            itemStyle: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  color: "black",
                },
                color: "#FE5165",
              },
              emphasis: {
                color: "#FE5165",
              },
            },
          },
          {
            name: data.label[1],
            type: "line",
            data: data.value1,
            symbol: "circle",
            symbolSize: 10,
            itemStyle: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  color: "black",
                },
                color: "#03EEF1",
              },
              emphasis: {
                color: "#03EEF1",
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
</style>
