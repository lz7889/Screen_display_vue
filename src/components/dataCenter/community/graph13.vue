<template>
  <div id="my-charts13" style="width:100%; height:100%"></div>
</template>

<script>
import { getData13 } from "@/data/dataCenter.js";

export default {
  components: {},
  data() {
    return {
      chartData: getData13,
      chartDom: {},
    };
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
  watch: {
    chartData: {
      handler: function() {
        this.drawCharts();
      },
      deep: true,
    },
  },
  methods: {
    drawCharts() {
      this.chartDom = this.$echarts.init(document.getElementById("my-charts13"));
      let data = this.chartData;
      this.chartDom.setOption(
        {
          // tooltip: {
          //   trigger: "axis",
          // },
          grid: {
            left: "4%",
            right: "4%",
            bottom: "12%",
            top: "10%",
          },
          xAxis: [
            {
              type: "category",
              data: data.category,
              splitLine: {
                show: true,
                lineStyle: {
                  color: ["rgba(0,0,0,0)", "#1B66F1FF", "#1B66F1FF", "#1B66F1FF", "rgba(0,0,0,0)"],
                  width: 1,
                },
              },
              // 坐标轴颜色
              axisLine: {
                lineStyle: {
                  type: "solid",
                  color: "#1B66F1",
                },
              },
              //刻度线
              axisTick: {
                show: false,
              },
              axisLabel: {
                textStyle: {
                  color: "#fff",
                },
                interval: 0,
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              splitLine: {
                lineStyle: {
                  color: ["rgba(0,0,0,0)", "#1B66F1FF", "#1B66F1FF", "rgba(0,0,0,0)"],
                  type: "dashed",
                },
              },
              axisLabel: {
                formatter: function() {
                  return "";
                },
              },
              axisTick: {
                show: false,
              },
              axisLine: {
                show: false,
              },
              interval: 5000,
            },
          ],
          series: [
            {
              name: "用户活跃",
              type: "line",
              smooth: false,
              symbolSize: 8,
              // 默认是空心圆（中间是白色的），改成实心圆
              symbol: "circle",
              itemStyle: {
                normal: {
                  color: "#09CBD9FF",
                  label: {
                    show: true,
                    color: "#fff",
                  },
                },
                emphasis: {
                  color: "#09CBD9FF",
                },
              },
              lineStyle: {
                width: 0,
              },
              areaStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#1B66F1",
                    },
                    {
                      offset: 1,
                      color: "rgba(27, 102, 241, 0)",
                    },
                  ]),
                },
              },
              data: data.value,
            },
          ],
        },
        true
      );
    },
    changeNumber() {
      let newArray = [];
      this.chartData.value.forEach((item) => {
        item = item + Math.floor(Math.random() * 10 + 1);
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

<style scoped lang="less"></style>
