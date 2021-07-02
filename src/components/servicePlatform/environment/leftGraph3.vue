<template>
  <div style="height: 100%; width: 100%">
    <div id="environment-left3" style="width: 100%; height: 100%"></div>
    <div class="check-group">
      <button
        :class="activeItem === 'day' ? 'active' : ''"
        @click="activeItem = 'day'"
      >
        日
      </button>
      <button
        :class="activeItem === 'month' ? 'active' : ''"
        @click="activeItem = 'month'"
      >
        月
      </button>
      <button
        :class="activeItem === 'year' ? 'active' : ''"
        @click="activeItem = 'year'"
      >
        年
      </button>
    </div>
  </div>
</template>

<script>
import { environmentLeft3 } from "@/data/dataService.js";

export default {
  components: {},
  data() {
    return {
      activeItem: "month",
      chartData: environmentLeft3,
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
        document.getElementById("environment-left3")
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
          top: 30,
          left: "center",
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
        },
        grid: {
          top: "30%",
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
            name: "(万kwh)",
            nameTextStyle: {
              color: "#fff",
              fontSize: 12,
            },
            axisLabel: {
              textStyle: {
                color: "#fff",
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "#1B66F1FF",
              },
            },
            splitLine: {
              lineStyle: {
                color: "#1B66F1FF",
                type: "dashed",
              },
            },
          },
          {
            type: "value",
            name: "(千吨)",
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
        ],
        series: [
          {
            name: data.label[0],
            type: "bar",
            barWidth: "40%",
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
            type: "line",
            data: data.value1,
            yAxisIndex: 1,
            symbol: "circle",
            symbolSize: 6,
            itemStyle: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  color: "black",
                },
                color: "#FFBB32",
              },
              emphasis: {
                color: "#FFBB32",
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
.check-group {
  position: absolute;
  top: 17px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  box-shadow: none;
  background: none;
  border: none;
  button {
    height: 24px;
    width: 40px;
    font-size: 12px;
    box-shadow: none;
    border: 1px solid #fff;
    // border-radius: 3px;
    background-color: transparent;
    outline: none;
    color: #fff;
    text-align: center;
    cursor: pointer;
    margin-left: -1px;
    &:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    &:last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
  .active {
    background-color: #3699ff;
  }
}
</style>
