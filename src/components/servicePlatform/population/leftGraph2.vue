<template>
  <div id="population-left2" style="width: 100%; height: 100%"></div>
</template>

<script>
import { populationLeft2 } from "@/data/dataService.js";

export default {
  components: {},
  data() {
    return {
      chartData: populationLeft2,
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
        document.getElementById("population-left2")
      );
      let data = this.chartData;
      this.chartDom.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          // formatter: "{b}月<br />{c}单",
        },
        legend: {
          show: true,
          left: "center",
          itemWidth: 8,
          itemHeight: 8,
          icon: "circle",
          textStyle: {
            color: "#fff",
            fontSize: 12,
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
              lineStyle: {
                type: "solid",
                color: "#1B66F1FF",
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
                color: ["#1B66F1FF"],
                width: 1,
              },
            },
          },
        ],
        series: [
          {
            name: data.label[0],
            type: "bar",
            barWidth: "26%",
            data: data.value0,
            itemStyle: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  color: "black",
                },
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#02BEFE" },
                  { offset: 1, color: "#1772F3" },
                ]),
              },
            },
          },
          {
            name: data.label[1],
            type: "bar",
            barWidth: "26%",
            data: data.value1,
            itemStyle: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  color: "black",
                },
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#FE6102" },
                  { offset: 0.48, color: "#11FF81" },
                  { offset: 1, color: "#1772F3" },
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
