<template>
  <div
    id="deposit-certificate-left-middle"
    style="width: 100%; height: 100%"
  ></div>
</template>

<script>
import { depositCertificateMiddle1 } from "@/data/dataService.js";

export default {
  components: {},
  data() {
    return {
      chartData: depositCertificateMiddle1,
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
        document.getElementById("deposit-certificate-left-middle")
      );
      let data = this.chartData;
      this.chartDom.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          show: true,
          right: "4%",
          itemWidth: 8,
          itemHeight: 8,
          icon: "circle",
          itemGap: 35,
          textStyle: {
            color: "#fff",
            fontSize: 14,
          },
        },
        grid: {
          top: "20%",
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
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              show: false,
              textStyle: {
                color: "#fff",
              },
            },
            axisTick: {
              show: false,
            },
            interval: 2000,
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
                type: "dashed",
                color: ["rgba(27,102,241,0.5)"],
                width: 1,
              },
            },
          },
        ],
        series: [
          {
            name: data.label[0],
            type: "bar",
            barWidth: "15%",
            data: data.value0,
            itemStyle: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  color: "black",
                },
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#FE5165" },
                  { offset: 1, color: "rgba(254, 81, 101, 0)" },
                ]),
              },
            },
          },
          {
            name: data.label[1],
            type: "bar",
            barWidth: "15%",
            data: data.value1,
            itemStyle: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  color: "black",
                },
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#FFBB32" },
                  { offset: 1, color: "rgba(255, 187, 50, 0)" },
                ]),
              },
            },
          },
          {
            name: data.label[2],
            type: "bar",
            barWidth: "15%",
            data: data.value2,
            itemStyle: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  color: "black",
                },
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#0278FE" },
                  { offset: 1, color: "rgba(2, 120, 254, 0.03)" },
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

<style scoped lang="less"></style>
