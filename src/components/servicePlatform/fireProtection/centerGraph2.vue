<template>
  <div style="height: 100%; width: 100%">
    <div id="fireprotection-center2" style="width: 100%; height: 100%"></div>
    <div class="title-num">
      在线摄像头：<span>{{ totalData[0] }}</span
      >告警摄像头：<span>{{ totalData[1] }}</span>
    </div>
  </div>
</template>

<script>
import { fireProtectionCenter2 } from "@/data/dataService.js";

export default {
  components: {},
  data() {
    return {
      chartData: fireProtectionCenter2.chartData,
      chartDom: {},
      totalData: fireProtectionCenter2.totalData,
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
        document.getElementById("fireprotection-center2")
      );
      let data = this.chartData;
      this.chartDom.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter: "{b}点：{c}件",
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
            name: "报警事件",
            type: "bar",
            barWidth: "60%",
            data: data.value,
            itemStyle: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  color: "black",
                },
                color: function (params) {
                  var colorList = [
                    "#1b85f2",
                    "#28dcd3",
                    "#1b85f2",
                    "#28dcd3",
                    "#1b85f2",
                    "#28dcd3",
                    "#1b85f2",
                    "#28dcd3",
                    "#1b85f2",
                    "#28dcd3",
                    "#1b85f2",
                    "#28dcd3",
                    "#1b85f2",
                    "#28dcd3",
                    "#1b85f2",
                    "#28dcd3",
                    "#1b85f2",
                    "#28dcd3",
                    "#1b85f2",
                    "#28dcd3",
                    "#1b85f2",
                    "#28dcd3",
                    "#1b85f2",
                    "#28dcd3",
                  ];
                  return colorList[params.dataIndex];
                },
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
  top: 34px;
  right: 5%;
  font-size: 12px;
  span {
    color: #02fcfc;
    &:first-child {
      margin-right: 25px;
    }
  }
}
</style>
