<template>
  <div id="my-charts33" style="width:100%; height:100%"></div>
</template>

<script>
import { getData33 } from "@/data/dataCenter.js";

export default {
  components: {},
  data() {
    return {
      chartData: getData33,
      chartDom: {},
    };
  },
  watch: {
    chartData: {
      handler: function() {
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
    this.changeTiming();
  },
  methods: {
    drawCharts() {
      this.chartDom = this.$echarts.init(document.getElementById("my-charts33"));
      let data = this.chartData;
      this.chartDom.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter: "{b}月<br />{c}单",
        },
        grid: {
          top: "10%",
          left: "3%",
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
                color: ["#1B66F1FF"],
                width: 1,
              },
            },
          },
        ],
        series: [
          {
            name: "服务工单",
            type: "bar",
            barWidth: "30%",
            data: data.value,
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

            // label: {
            //   show: true,
            //   position: "top",
            //   textStyle: {
            //     color: "#FFFFFF",
            //     // fontSize: 14,
            //   },
            //   backgroundColor: "#1B66F1FF",
            //   borderRadius: [5],
            //   padding: [7, 8, 5, 9],
            //   distance: 10,
            // },
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
