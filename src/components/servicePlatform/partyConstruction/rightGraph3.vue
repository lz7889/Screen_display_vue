<template>
  <div id="partyconstruction-right3" style="width: 100%; height: 100%"></div>
</template>

<script>
import { partyConstructionRight3 } from "@/data/dataService.js";

export default {
  components: {},
  data() {
    return {
      chartData: partyConstructionRight3,
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
        document.getElementById("partyconstruction-right3")
      );
      let data = this.chartData;
      this.chartDom.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          top: "25%",
          left: "0%",
          right: "4%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: data.category,
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
                color: "#39456A",
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
              formatter: function (value) {
                if (value !== 0) {
                  value = value / 1000 + "K";
                }
                return value;
              },
            },
            name: "单位/件",
            nameTextStyle: {
              color: "#fff",
              fontSize: 12,
            },
            axisTick: {
              show: false,
            },
            interval: 1000,
            // 坐标轴颜色
            axisLine: {
              lineStyle: {
                type: "dotted",
                color: "#39456A",
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "dotted",
                color: ["#39456A"],
                width: 1,
              },
            },
          },
        ],
        series: [
          {
            name: "件数",
            type: "bar",
            barWidth: "45%",
            data: data.value,
            itemStyle: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  color: "black",
                },
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#4F40FF" },
                  { offset: 1, color: "#31F4D1" },
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
