<template>
  <div id="party-construction-left2" style="width: 100%; height: 100%"></div>
</template>

<script>
import { partyConstructionLeft2 } from "@/data/dataService.js";

export default {
  components: {},
  data() {
    return {
      chartData: partyConstructionLeft2,
      chartDom: {},
    };
  },
  watch: {
    // chartData: {
    //   handler: function () {
    //     this.drawCharts();
    //   },
    //   deep: true,
    // },
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
        document.getElementById("party-construction-left2")
      );
      let data = this.chartData;
      this.chartDom.setOption({
        title: [
          {
            text: data.category[0],
            left: "13%",
            bottom: "-7",
            textAlign: "center",
            textStyle: {
              fontSize: "12",
              color: "#fff",
              fontWeight: 400,
            },
          },
          {
            text: data.category[1],
            left: "48%",
            bottom: "-7",
            textAlign: "center",
            textStyle: {
              fontSize: "12",
              color: "#fff",
              fontWeight: 400,
            },
          },
          {
            text: data.category[2],
            right: "-5%",
            bottom: "-7",
            textAlign: "center",
            textStyle: {
              fontSize: "12",
              color: "#fff",
              fontWeight: 400,
            },
          },
        ],
        series: [
          {
            name: data.category[0],
            type: "pie",
            clockWise: false,
            radius: ["50%", "70%"],
            itemStyle: {
              normal: {
                color: "#D4DB85",
                shadowBlur: 0,
                // label: {
                //   show: false,
                // },
                labelLine: {
                  show: false,
                },
              },
            },
            hoverAnimation: false,
            center: ["15%", "50%"],
            data: [
              {
                value: data.value[0],
                label: {
                  normal: {
                    formatter: function (params) {
                      return params.value;
                    },
                    position: "center",
                    show: true,
                    textStyle: {
                      fontSize: 14,
                      color: "#fff",
                    },
                  },
                },
              },
              {
                value: data.totalPercent[0] - data.value[0],
                itemStyle: {
                  normal: {
                    color: "#ffefcc",
                  },
                },
              },
            ],
          },
          {
            name: data.category[1],
            type: "pie",
            clockWise: false,
            radius: ["50%", "70%"],
            itemStyle: {
              normal: {
                color: "#736cdb",
                shadowBlur: 0,
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            },
            hoverAnimation: false,
            center: ["50%", "50%"],
            data: [
              {
                value: data.value[1],
                label: {
                  normal: {
                    formatter: function (params) {
                      return params.value;
                    },
                    position: "center",
                    show: true,
                    textStyle: {
                      fontSize: 14,
                      color: "#fff",
                    },
                  },
                },
              },
              {
                value: data.totalPercent[1] - data.value[1],
                name: "invisible",
                itemStyle: {
                  normal: {
                    color: "#cceaf9",
                  },
                },
              },
            ],
          },
          {
            name: data.category[2],
            type: "pie",
            clockWise: false,
            radius: ["50%", "70%"],
            itemStyle: {
              normal: {
                color: "#D4DB85",
                shadowBlur: 0,
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            },
            hoverAnimation: false,
            center: ["85%", "50%"],
            data: [
              {
                value: data.value[2],
                label: {
                  normal: {
                    formatter: function (params) {
                      return params.value;
                    },
                    position: "center",
                    show: true,
                    textStyle: {
                      fontSize: 14,
                      color: "#fff",
                    },
                  },
                },
              },
              {
                value: data.totalPercent[2] - data.value[2],
                name: "invisible",
                itemStyle: {
                  normal: {
                    color: "#ffefcc",
                  },
                },
              },
            ],
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

<style scoped lang="less"></style>
