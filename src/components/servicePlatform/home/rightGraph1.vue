<template>
  <div id="right-top-chart" style="width:100%; height:100%"></div>
</template>

<script>
import { getRight1 } from "@/data/dataService.js";

export default {
  components: {},
  data() {
    return {
      chartData: getRight1,
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
    this.changeTiming();
    this.drawCharts();
    let _this = this;
    window.addEventListener("resize", () => {
      _this.chartDom.resize();
    });
  },
  methods: {
    drawCharts() {
      this.chartDom = this.$echarts.init(document.getElementById("right-top-chart"));
      let data = this.chartData;
      this.chartDom.setOption(
        {
          animation: false,
          title: [
            {
              text: data.title[0],
              show: true,
              textStyle: {
                color: "#fff",
                fontSize: 16,
                fontWeight: 400,
              },
              bottom: "0%",
              left: "15%",
            },
            {
              text: data.title[1],
              show: true,
              textStyle: {
                color: "#fff",
                fontSize: 16,
                fontWeight: 400,
              },
              bottom: "0%",
              right: "15%",
            },
          ],
          series: [
            {
              center: ["25%", "45%"],
              radius: ["60%", "61%"],
              clockWise: true,
              type: "pie",
              avoidLabelOverlap: false,
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: "center",
                  },
                  labelLine: {
                    show: false,
                  },
                  color: "#454568",
                  borderColor: "#454568",
                  // borderWidth: 16,
                },
              },
              data: [
                {
                  value: data.restValue,
                },
                {
                  name: data.value[0],
                  value: data.value[0],
                  itemStyle: {
                    normal: {
                      label: {
                        show: false,
                      },
                      labelLine: {
                        show: false,
                      },
                      color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: "rgba(2,255,255,0)",
                        },
                        {
                          offset: 1,
                          color: "rgba(2,255,255,100)",
                        },
                      ]),
                      borderColor: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: "rgba(2,255,255,0)",
                        },
                        {
                          offset: 1,
                          color: "rgba(2,255,255,100)",
                        },
                      ]),
                      borderWidth: 10,
                    },
                  },
                  label: {
                    normal: {
                      textStyle: {
                        fontSize: 30,
                        fontWeight: "bold",
                        color: "#fff",
                      },
                    },
                  },
                },
              ],
            },
            {
              center: ["75%", "45%"],
              radius: ["60%", "61%"],
              clockWise: true,
              type: "pie",
              avoidLabelOverlap: false,
              itemStyle: {
                normal: {
                  label: {
                    show: true,
                    position: "center",
                  },
                  labelLine: {
                    show: false,
                  },
                  color: "rgba(255,255,255,0.3)",
                  // borderWidth: 16,
                },
              },
              data: [
                {
                  value: data.restValue,
                },
                {
                  name: data.value[1],
                  value: data.value[1],
                  zlevel: 1,
                  itemStyle: {
                    normal: {
                      label: {
                        show: false,
                      },
                      labelLine: {
                        show: false,
                      },
                      color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: "rgba(2,255,255,0)",
                        },
                        {
                          offset: 1,
                          color: "rgba(2,255,255,100)",
                        },
                      ]),
                      borderColor: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                          offset: 0,
                          color: "rgba(254,81,101,0)",
                        },
                        {
                          offset: 1,
                          color: "rgba(254,81,101,100)",
                        },
                      ]),
                      borderWidth: 10,
                    },
                  },
                  label: {
                    normal: {
                      textStyle: {
                        fontSize: 30,
                        fontWeight: "bold",
                        color: "#fff",
                      },
                    },
                  },
                },
              ],
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

<style scoped lang="less"></style>
