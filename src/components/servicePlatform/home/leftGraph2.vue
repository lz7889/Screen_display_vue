<template>
  <div id="left-middle-chart" style="width:100%; height:100%"></div>
</template>

<script>
import { getLeft2 } from "@/data/dataService.js";

export default {
  components: {},
  data() {
    return {
      chartData: getLeft2,
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
      this.chartDom = this.$echarts.init(document.getElementById("left-middle-chart"));
      let data = this.chartData;
      this.chartDom.setOption({
        grid: {
          top: "18%",
          left: "2%",
          right: "5%",
          bottom: "0%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(0, 255, 233,0)",
                  },
                  {
                    offset: 0.5,
                    color: "rgba(0,133,247,1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 255, 233,0)",
                  },
                ],
                global: false,
              },
            },
          },
        },
        legend: {
          show: true,
          top: 0,
          right: 10,
          icon: "circle",
          itemHeight: 8,
          itemWidth: 8,
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
                color: "#1B66F1FF",
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
            interval: 100,
            // 坐标轴颜色
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "#1B66F1FF",
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ["rgba(0,0,0,0)", "#1B66F1FF", "#1B66F1FF", "#1B66F1FF", "#1B66F1FF", "rgba(0,0,0,0)"],
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
            color: "#03DFE3",
            smooth: true,
            symbol: "none",
          },
          {
            name: data.label[1],
            type: "line",
            data: data.value1,
            color: "#FE5165",
            smooth: true,
            symbol: "none",
          },
          {
            name: data.label[2],
            type: "line",
            data: data.value2,
            color: "#0278FE",
            smooth: true,
            symbol: "none",
          },
          {
            name: data.label[3],
            type: "line",
            data: data.value3,
            color: "#FFBB32",
            smooth: true,
            symbol: "none",
          },
        ],
      });
    },
  },
};
</script>

<style scoped lang="less"></style>
