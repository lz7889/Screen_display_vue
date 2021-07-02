<template>
  <div style="height: 100%; width: 100%">
    <div id="car-right1" style="width: 100%; height: 100%"></div>
    <div class="title-num">
      当日车流量：<span>{{ totalData[0] }}</span
      >当日车流数：<span>{{ totalData[1] }}</span>
    </div>
  </div>
</template>

<script>
import { carRight1 } from "@/data/dataService.js";

export default {
  components: {},
  data() {
    return {
      chartData: carRight1.chartData,
      chartDom: {},
      totalData: carRight1.totalData,
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
      this.chartDom = this.$echarts.init(document.getElementById("car-right1"));
      let data = this.chartData;
      this.chartDom.setOption({
        legend: {
          show: true,
          top: "10%",
          right: "5%",
          icon: "circle",
          itemWidth: 6,
          itemHeight: 6,
          itemGap: 15,
          textStyle: {
            color: "#fff",
          },
        },
        tooltip: {
          trigger: "item",
        },
        grid: {
          top: "25%",
          left: "3%",
          right: "4%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: {
          min: 8,
          max: 22,
          interval: 2,
          axisTick: {
            show: false,
          },
          axisLabel: {
            textStyle: {
              color: "#fff",
            },
            formatter: "{value}:00",
            interval: 0,
          },
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
        yAxis: {
          interval: 200,
          name: "车/次",
          nameTextStyle: {
            color: "#fff",
            fontSize: 12,
          },
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
          splitLine: {
            lineStyle: {
              color: "rgba(255, 255, 255, 0.1)",
            },
          },
        },
        series: [
          {
            type: "scatter",
            name: data.label[0],
            symbolSize: 9,
            data: data.value0,
            itemStyle: {
              color: "#5B8FF9",
              borderColor: "rgba(20, 20, 20, 0.85)",
            },
          },
          {
            type: "scatter",
            name: data.label[1],
            symbolSize: 9,
            data: data.value1,
            itemStyle: {
              color: "#6ADFAF",
              borderColor: "rgba(20, 20, 20, 0.85)",
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
