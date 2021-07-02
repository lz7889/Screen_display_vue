<template>
  <div style="width: 100%; height: 100%">
    <div class="content">
      <div id="my-charts13-top" style="width: 100%; height: 50%"></div>
      <div id="my-charts13-bottom" style="width: 100%; height: 45%"></div>
    </div>
  </div>
</template>

<script>
import { getData13 } from "@/data/dataOperate.js";

export default {
  components: {},
  data() {
    return {
      chartData: getData13,
      topChartDom: {},
      bottomChartDom: {},
    };
  },
  watch: {
    // chartData: {
    //   handler: function() {
    //     this.drawCharts();
    //   },
    //   deep: true,
    // },
  },
  mounted() {
    this.drawChartsTop();
    this.drawChartsBottom();
    let _this = this;
    window.addEventListener("resize", () => {
      _this.topChartDom.resize();
      _this.bottomChartDom.resize();
    });
    // this.changeTiming();
  },
  methods: {
    drawChartsTop() {
      this.topChartDom = this.$echarts.init(
        document.getElementById("my-charts13-top")
      );
      let data = this.chartData.topData;
      this.topChartDom.setOption({
        grid: {
          top: "10%",
          left: "0%",
          right: "4%",
          bottom: "12%",
          containLabel: true,
        },
        legend: {
          show: true,
          bottom: 0,
          left: "center",
          icon: "circle",
          itemWidth: 8,
          itemHeight: 8,
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
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
                color: "rgba(0,0,0,0)",
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: [
                  "rgba(0,0,0,0)",
                  "#1B66F1FF",
                  "#1B66F1FF",
                  "rgba(0,0,0,0)",
                ],
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
            interval: 4000,
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
                color: [
                  "rgba(0,0,0,0)",
                  "#1B66F1FF",
                  "#1B66F1FF",
                  "rgba(0,0,0,0)",
                ],
                type: "dashed",
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
                color: "#2BDAFF",
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
                color: "#7748FF",
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
                color: "#FFC316",
              },
            },
          },
        ],
      });
    },
    drawChartsBottom() {
      this.bottomChartDom = this.$echarts.init(
        document.getElementById("my-charts13-bottom")
      );
      let data = this.chartData.bottomData;
      this.bottomChartDom.setOption({
        grid: {
          top: "10%",
          left: "2%",
          right: "8%",
          bottom: "12%",
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
          bottom: -5,
          left: "center",
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
            // splitLine: {
            //   show: true,
            //   lineStyle: {
            //     color: ["#1B66F1FF"],
            //     type: "solid",
            //     width: 1,
            //   },
            // },
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
                color: "#1B66F1FF",
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: [
                  "rgba(0,0,0,0)",
                  "#1B66F1FF",
                  "#1B66F1FF",
                  "#1B66F1FF",
                  "rgba(0,0,0,0)",
                ],
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
            itemStyle: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  color: "black",
                },
                color: "#5158FA",
                areaStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0.25,
                      color: "rgba(81, 88, 250, 0.4)",
                    },
                    {
                      offset: 1,
                      color: "rgba(81, 88, 250, 0)",
                    },
                  ]),
                },
              },
            },
            smooth: true,
          },
          {
            name: data.label[1],
            type: "line",
            data: data.value1,
            itemStyle: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  color: "black",
                },
                color: "#31FBFB",
                areaStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0.11,
                      color: "rgba(49, 251, 251, 0.4)",
                    },
                    {
                      offset: 1,
                      color: "rgba(49, 251, 251, 0)",
                    },
                  ]),
                },
              },
            },
            smooth: true,
          },
          {
            name: data.label[2],
            type: "line",
            data: data.value2,
            itemStyle: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  color: "black",
                },
                color: "#065DFF",
                areaStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0.17,
                      color: "rgba(6, 93, 255, 0.4)",
                    },
                    {
                      offset: 1,
                      color: "rgba(6, 93, 255, 0)",
                    },
                  ]),
                },
              },
            },
            smooth: true,
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
      this.dataCenterTimer13 = setInterval(() => {
        this.changeNumber();
      }, 5000);
    },
  },
  destroyed() {
    clearInterval(this.dataCenterTimer13);
  },
};
</script>

<style scoped lang="less">
.content {
  color: #ffffff;
  height: calc(100% - 30px);
  width: 100%;
}
</style>
