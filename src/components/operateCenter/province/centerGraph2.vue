<template>
  <div style="width: 100%; height: 100%">
    <div id="center-bottom-chart" style="width: 100%; height: 100%"></div>
    <select class="select-box">
      <option value="today">当天</option>
    </select>
  </div>
</template>

<script>
import { centerBottom } from "@/data/dataOperate.js";

export default {
  components: {},
  props: ["province"],
  data() {
    return {
      chartData: centerBottom,
      chartDom: {},
    };
  },
  watch: {
    province: {
      handler: function () {
        this.drawCharts();
      },
    },
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
      this.chartDom = this.$echarts.init(
        document.getElementById("center-bottom-chart")
      );
      let data = this.chartData[this.province];
      let time = this.chartData.time;
      let label = this.chartData.label;
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
        },
        legend: {
          show: true,
          top: 0,
          left: 20,
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
            data: time,
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
            // interval: 200,
            // 坐标轴颜色
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "#1B66F1FF",
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: label[0],
            type: "line",
            data: data.value0,
            color: "#B7FFBE",
            smooth: true,
            symbol: "none",
          },
          {
            name: label[1],
            type: "line",
            data: data.value1,
            color: "#FAAC51",
            smooth: true,
            symbol: "none",
          },
          {
            name: label[2],
            type: "line",
            data: data.value2,
            color: "#5158FA",
            smooth: true,
            symbol: "none",
          },
          {
            name: label[3],
            type: "line",
            data: data.value3,
            color: "#31FBFB",
            smooth: true,
            symbol: "none",
          },
          {
            name: label[4],
            type: "line",
            data: data.value4,
            color: "#065DFF",
            smooth: true,
            symbol: "none",
          },
        ],
      });
    },
  },
};
</script>

<style scoped lang="less">
.select-box {
  position: absolute;
  top: 10px;
  right: 30px;
  font-size: 13px;
  cursor: pointer;
  box-shadow: none;
  background: none;
  border: none;
  color: #fff;
}
</style>
