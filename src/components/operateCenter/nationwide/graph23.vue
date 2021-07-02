<template>
  <div style="width:100%; height:100%">
    <div id="my-charts23" style="width:100%; height:100%"></div>
  </div>
</template>

<script>
import { getData23 } from "@/data/dataOperate.js";

export default {
  components: {},
  data() {
    return {
      chartData: getData23,
      chartDom: {},
    };
  },
  mounted() {
    this.drawCharts();
    let _this = this;
    window.addEventListener("resize", () => {
      _this.chartDom.resize();
    });
  },
  methods: {
    drawCharts() {
      this.chartDom = this.$echarts.init(document.getElementById("my-charts23"));
      let data = this.chartData;
      this.chartDom.setOption({
        grid: {
          top: "18%",
          left: "2%",
          right: "8%",
          bottom: "2%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          show: true,
          top: 0,
          left: "center",
          itemWidth: 9,
          itemHeight: 9,
          icon: "rect",
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
        },
        xAxis: [
          {
            type: "category",
            data: data.time,
            boundaryGap: false,
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
                color: "rgba(0,0,0,0)",
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["rgba(255,255,255,.2)"],
                type: "solid",
                width: 1,
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              textStyle: {
                color: "#fff",
              },
            },
            axisTick: {
              show: false,
            },
            scale: true,
            interval: 2000,
            // 坐标轴颜色
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "rgba(255,255,255,.2)",
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["rgba(255,255,255,.2)"],
                type: "solid",
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
            color: "#389DBD",
          },
          {
            name: data.label[1],
            type: "line",
            data: data.value1,
            color: "#00CE74",
          },
          {
            name: data.label[2],
            type: "line",
            data: data.value2,
            color: "#49D9FE",
          },
          {
            name: data.label[3],
            type: "line",
            data: data.value3,
            color: "#7748FF",
          },
        ],
      });
    },
  },
};
</script>

<style scoped lang="less"></style>
