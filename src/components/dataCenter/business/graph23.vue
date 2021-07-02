<template>
  <div id="my-charts23" style="width:100%; height:100%"></div>
</template>

<script>
import { getData23 } from "@/data/dataBusiness.js";

export default {
  components: {},
  data() {
    return {
      chartData: getData23,
      chartDom: {},
    };
  },
  watch: {
    chartData: {
      handler: function() {
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
    // 关闭了定时器
    // this.changeTiming();
  },
  methods: {
    drawCharts() {
      this.chartDom = this.$echarts.init(document.getElementById("my-charts23"));
      let data = this.chartData;
      this.chartDom.setOption({
        legend: {
          left: "center",
          bottom: "0",
          icon: "circle",
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 16,
          textStyle: {
            color: "#fff",
            fontSize: 14,
          },
        },
        radar: {
          name: {
            textStyle: {
              color: "#fff",
            },
          },
          center: ["53%", "50%"],
          startAngle: 60,
          indicator: data.indicator,
          splitLine: {
            lineStyle: {
              color: "rgba(1,120,254, 0.5)",
            },
          },
          axisLine: {
            lineStyle: {
              color: "rgba(1,120,254, 0.5)",
            },
          },
          splitArea: {
            areaStyle: {
              color: ["rgba(27,102,241, 0.2)"],
            },
          },
        },
        series: [
          {
            type: "radar",
            data: [
              {
                value: data.older,
                name: "智慧养老",
                areaStyle: {
                  normal: {
                    color: "#FFCC00",
                    //  new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    //   {
                    //     offset: 0,
                    //     color: "#FFCC00",
                    //   },
                    //   {
                    //     offset: 1,
                    //     color: "#FFE26F",
                    //   },
                    // ]),
                    opacity: 0.5,
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#FFE26F",
                  },
                },
                lineStyle: {
                  color: "rgba(0,0,0,0)",
                },
              },
              {
                value: data.medical,
                name: "智慧医疗",
                areaStyle: {
                  normal: {
                    color: "#00F0FF",
                    opacity: 0.5,
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#00F0FF",
                  },
                },
                lineStyle: {
                  color: "rgba(0,0,0,0)",
                },
              },
              {
                value: data.property,
                name: "物业服务",
                areaStyle: {
                  normal: {
                    color: "#0278FE",
                    opacity: 0.5,
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#0278FE",
                  },
                },
                lineStyle: {
                  color: "rgba(0,0,0,0)",
                },
              },
            ],
          },
        ],
      });
    },
    changeNumber() {
      let olderArray = [];
      this.chartData.older.forEach((item) => {
        item = item + Math.floor(Math.random() * 10 + 1);
        olderArray.push(item);
      });
      this.$set(this.chartData, "older", olderArray);

      let medicalArray = [];
      this.chartData.medical.forEach((item) => {
        item = item + Math.floor(Math.random() * 10 + 1);
        medicalArray.push(item);
      });
      this.$set(this.chartData, "medical", medicalArray);

      let propertyArray = [];
      this.chartData.property.forEach((item) => {
        item = item + Math.floor(Math.random() * 10 + 1);
        propertyArray.push(item);
      });
      this.$set(this.chartData, "property", propertyArray);
    },
    changeTiming() {
      this.dataCenterTimer23 = setInterval(() => {
        this.changeNumber();
      }, 5000);
    },
  },
  destroyed() {
    clearInterval(this.dataCenterTimer23);
  },
};
</script>

<style scoped lang="less"></style>
