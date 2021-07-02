<template>
  <div id="party-construction-left4" style="width: 100%; height: 100%"></div>
</template>

<script>
import { partyConstructionLeft4 } from "@/data/dataService.js";

export default {
  components: {},
  data() {
    return {
      chartData: partyConstructionLeft4,
      chartDom: {},
    };
  },
  watch: {
    // chartData: {
    //   handler: function () {
    //     this.drawCharts();
    //   },
    //   deep: true,
    // },
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
        document.getElementById("party-construction-left4")
      );
      let data = this.chartData;
      let sum = eval(data.value.join("+"));
      let barWidth = 20;
      this.chartDom.setOption({
        textStyle: {
          color: "#fff",
          fontSize: 12,
        },
        grid: {
          top: "8%",
          bottom: "0%",
          left: "18%",
          right: "0%",
        },
        yAxis: {
          inverse: true,
          offset: 3,
          axisLine: {
            show: 0,
          },
          axisTick: {
            show: 0,
          },
          axisLabel: {
            fontSize: 12,
          },
          data: data.category,
        },
        xAxis: {
          axisLabel: {
            show: 0,
          },
          axisLine: {
            show: 0,
          },
          axisTick: {
            show: 0,
          },
          splitLine: {
            show: 0,
          },
        },
        series: [
          {
            z: 1,
            type: "bar",
            barWidth: barWidth,
            data: data.value,
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  x2: 0,
                  y: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#02BEFE",
                    },
                    {
                      offset: 0.5,
                      color: "#1772F3",
                    },
                    {
                      offset: 0.5,
                      color: "#02BEFE",
                    },
                    {
                      offset: 1,
                      color: "#1772F3",
                    },
                  ],
                },
              },
            },
          },
          {
            z: 2,
            name: "底部",
            type: "pictorialBar",
            data: [1, 1, 1, 1, 1],
            symbol: "diamond",
            symbolOffset: ["-50%", 0],
            symbolSize: [10, barWidth],
            itemStyle: {
              normal: {
                color: {
                  type: "linear",
                  x: 0,
                  x2: 0,
                  y: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#02BEFE",
                    },
                    {
                      offset: 0.5,
                      color: "#1772F3",
                    },
                    {
                      offset: 0.5,
                      color: "#02BEFE",
                    },
                    {
                      offset: 1,
                      color: "#1772F3",
                    },
                  ],
                },
              },
            },
          },
          {
            z: 3,
            name: "上部1",
            type: "pictorialBar",
            symbolPosition: "end",
            data: data.value,
            symbol: "diamond",
            symbolOffset: ["50%", 0],
            symbolSize: [(10 * (barWidth - 4)) / barWidth, barWidth - 4],
            itemStyle: {
              normal: {
                borderColor: "#1772F3",
                borderWidth: 2,
                color: "#1772F3",
              },
            },
            label: {
              show: true,
              position: "insideRight",
              formatter: (p) => {
                return (
                  p.value + "(" + ((p.value / sum) * 100).toFixed(2) + "%)"
                );
              },
              fontSize: 12,
              color: "#fff",
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
