<template>
  <div style="width:100%; height:100%">
    <div class="total-title">
      <div class="total-item" v-for="(item, index) in chartData.total" :key="index">
        {{ item.label }}
        <br />
        {{ item.value }}
      </div>
    </div>
    <div id="right-bottom-chart" style="width:100%; height:85%;"></div>
  </div>
</template>

<script>
import { getRight2 } from "@/data/dataService.js";

export default {
  components: {},
  data() {
    return {
      chartData: getRight2,
      chartDom: {},
    };
  },
  watch: {
    "chartData.value": {
      handler: function() {
        this.drawCharts();
      },
    },
  },
  mounted() {
    // this.changeTiming();
    this.drawCharts();
    let _this = this;
    window.addEventListener("resize", () => {
      _this.chartDom.resize();
    });
  },
  methods: {
    drawCharts() {
      this.chartDom = this.$echarts.init(document.getElementById("right-bottom-chart"));
      let data = this.chartData;
      let maxArray = [];
      for (let i = 0; i < data.value.length; i++) {
        maxArray.push(data.maxValue);
      }
      this.chartDom.setOption(
        {
          grid: {
            left: "1%",
            right: "0%",
            bottom: "0%",
            top: "4%",
            containLabel: true,
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "none",
            },
            formatter: function(params) {
              return params[0].name + " : " + params[0].value;
            },
          },
          xAxis: {
            show: false,
            type: "value",
          },
          yAxis: [
            {
              type: "category",
              inverse: true,
              axisLabel: {
                show: true,
                textStyle: {
                  color: "#fff",
                },
              },
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLine: {
                show: false,
              },
              data: data.label,
            },
            {
              type: "category",
              inverse: true,
              axisTick: "none",
              axisLine: "none",
              show: true,
              data: data.value,
            },
          ],
          series: [
            {
              name: "值",
              type: "bar",
              zlevel: 1,
              itemStyle: {
                normal: {
                  // barBorderRadius: 30,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: "#1B66F1",
                    },
                    {
                      offset: 1,
                      color: "#05B4FD",
                    },
                  ]),
                },
              },
              barWidth: 18,
              data: data.value,
            },
            {
              name: "背景",
              type: "bar",
              barWidth: 18,
              barGap: "-100%",
              data: maxArray,
              itemStyle: {
                normal: {
                  color: "rgba(24,31,68,1)",
                  // barBorderRadius: 30,
                },
              },
            },
          ],
        },
        true
      );
    },
    changeTiming() {
      this.dataCenterTimerright = setInterval(() => {
        this.changeNumber();
      }, 10000);
    },
    changeNumber() {
      let newArray = [];
      this.chartData.value.forEach((item) => {
        item = item + 1;
        newArray.push(item);
      });
      this.$set(this.chartData, "value", newArray);
      newArray = [];
    },
  },
  destroyed() {
    clearInterval(this.dataCenterTimerright);
  },
};
</script>

<style scoped lang="less">
.total-title {
  height: 55px;
  width: 100%;
  margin-top: 17px;
  padding-top: 13px;
  display: flex;
  justify-content: space-between;
  background-color: #0e2558;
  border-radius: 3px;
  .total-item {
    text-align: center;
    font-size: 14px;
    line-height: 22px;
    width: 33%;
  }
}
</style>
