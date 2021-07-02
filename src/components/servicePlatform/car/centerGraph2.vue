<template>
  <div style="height: 100%; width: 100%">
    <div id="car-center2" style="width: 100%; height: 100%"></div>
    <div class="title-num">
      当日订单数：<span>{{ totalData[0] }}</span
      >车位利用率：<span>{{ totalData[1] }}</span>
    </div>
  </div>
</template>

<script>
import { carCenter2 } from "@/data/dataService.js";

export default {
  components: {},
  data() {
    return {
      chartData: carCenter2.chartData,
      chartDom: {},
      totalData: carCenter2.totalData,
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
        document.getElementById("car-center2")
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
          top: "0%",
          right: "6%",
          icon: "circle",
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 15,
          textStyle: {
            color: "#fff",
          },
        },
        grid: {
          top: "15%",
          left: "3%",
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
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
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
            axisLine: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: data.label[0],
            type: "bar",
            barWidth: "60%",
            data: data.value0,
            itemStyle: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  color: "black",
                },
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#1B85F2" },
                  { offset: 1, color: "#10C6FF" },
                ]),
              },
            },
          },
          {
            name: data.label[1],
            type: "line",
            smooth: true,
            symbol: "none",
            data: data.value1,
            yAxisIndex: 1,
            lineStyle: {
              width: 5,
            },
            itemStyle: {
              normal: {
                show: false,
                position: "top",
                textStyle: {
                  color: "black",
                },
                color: "#FFBA69",
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

<style scoped lang="less">
.title-num {
  position: absolute;
  top: 25px;
  left: 110px;
  font-size: 12px;
  span {
    color: #02fcfc;
    &:first-child {
      margin-right: 25px;
    }
  }
}
</style>
