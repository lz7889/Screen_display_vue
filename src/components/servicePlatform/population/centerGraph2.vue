<template>
  <div style="width: 100%; height: 100%">
    <div id="population-center-bottom" style="width: 100%; height: 100%"></div>
    <div class="title-num">
      当前人流量：<span>{{ totalData[0] }}</span
      >当前社区人数：<span>{{ totalData[1] }}</span>
    </div>
  </div>
</template>

<script>
import { populationCenter2 } from "@/data/dataService.js";

export default {
  components: {},
  data() {
    return {
      chartData: populationCenter2.chartData,
      totalData: populationCenter2.totalData,
      chartDom: {},
    };
  },
  mounted() {
    this.changeTiming();
    this.drawCharts();
    let _this = this;
    window.addEventListener("resize", () => {
      _this.chartDom.resize();
    });
  },
  methods: {
    drawCharts() {
      this.chartDom = this.$echarts.init(
        document.getElementById("population-center-bottom")
      );
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
          icon: "rect",
          itemHeight: 4,
          itemWidth: 12,
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
              show: true,
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
                color: "#1B66F1FF",
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
            color: "#32B7E9",
            smooth: true,
            symbol: "none",
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(50,183,233,0.2)",
                  },
                  {
                    offset: 1,
                    color: "rgba(50,183,233,0)",
                  },
                ],
                global: false,
              },
            },
          },
          {
            name: data.label[1],
            type: "line",
            data: data.value1,
            color: "#FE5165",
            smooth: true,
            symbol: "none",
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(254,81,101,0.2)",
                  },
                  {
                    offset: 1,
                    color: "rgba(254,81,101,0)",
                  },
                ],
                global: false,
              },
            },
          },
        ],
      });
    },
    changeTiming() {
      this.populationCenterTimer2 = setInterval(() => {
        this.changeNumber();
      }, 5000);
    },
    changeNumber() {
      this.totalData = [this.totalData[0] + 1, this.totalData[1] + 1];
    },
  },
  destroyed() {
    clearInterval(this.populationCenterTimer2);
  },
};
</script>

<style scoped lang="less">
.title-num {
  position: absolute;
  top: 34px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  span {
    color: #02fcfc;
    &:first-child {
      margin-right: 25px;
    }
  }
}
</style>
