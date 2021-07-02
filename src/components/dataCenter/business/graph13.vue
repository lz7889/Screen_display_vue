<template>
  <div style="width:100%; height:100%">
    <div class="alarm-box">
      <div class="alarm-item" v-for="(item, index) in alarmTotal" :key="index">
        <div class="alarm-label">
          {{ item.label }}
        </div>
        <div class="alarm-value">
          {{ item.value }}
        </div>
      </div>
    </div>
    <div id="my-charts13" style="width:100%; height:100%"></div>
  </div>
</template>

<script>
import { getData13 } from "@/data/dataBusiness.js";
export default {
  components: {},
  data() {
    return {
      alarmTotal: getData13.alarmTotal,
      chartData: getData13.alarmDetail,
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
  methods: {
    drawCharts() {
      this.chartDom = this.$echarts.init(document.getElementById("my-charts13"));
      let data = this.chartData;
      this.chartDom.setOption({
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "第一条圆弧",
            type: "pie",
            radius: ["1.8%", "2%"],
            center: ["50%", "60%"],

            startAngle: -180,
            hoverAnimation: false,
            legendHoverLink: true,
            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 500,
                name: "第一条圆弧",
                label: {
                  show: false,
                },
              },
              {
                value: 500,
                itemStyle: {
                  normal: {
                    color: "transparent",
                  },
                },
              },
            ],
          },
          {
            name: "第二条圆弧",
            type: "pie",
            startAngle: -180,
            hoverAnimation: false,
            legendHoverLink: true,
            radius: ["11.8%", "12%"],
            center: ["50%", "60%"],

            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 500,
                name: "第二条圆弧",
              },
              {
                value: 500,
                itemStyle: {
                  normal: {
                    color: "transparent",
                  },
                },
              },
            ],
          },
          {
            name: "第三条圆弧",
            type: "pie",
            startAngle: -180,
            hoverAnimation: false,
            legendHoverLink: true,
            radius: ["31.8%", "32%"],
            center: ["50%", "60%"],

            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 500,
                name: "第三条圆弧",
              },
              {
                value: 500,
                itemStyle: {
                  normal: {
                    color: "transparent",
                  },
                },
              },
            ],
          },
          {
            name: "第四条圆弧",
            type: "pie",
            startAngle: -180,
            hoverAnimation: false,
            legendHoverLink: true,
            radius: ["51.8%", "52%"],
            center: ["50%", "60%"],

            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 500,
                name: "第四条圆弧",
              },
              {
                value: 500,
                itemStyle: {
                  normal: {
                    color: "transparent",
                  },
                },
              },
            ],
          },
          {
            name: "第五条圆弧",
            type: "pie",
            startAngle: -180,
            hoverAnimation: false,
            legendHoverLink: true,
            radius: ["71.8%", "72%"],
            center: ["50%", "60%"],

            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 500,
                name: "第五条圆弧",
              },
              {
                value: 500,
                itemStyle: {
                  normal: {
                    color: "transparent",
                  },
                },
              },
            ],
          },
          {
            name: "第六条圆弧",
            type: "pie",
            startAngle: -180,
            hoverAnimation: false,
            legendHoverLink: true,
            radius: ["91.8%", "92%"],
            center: ["50%", "60%"],

            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 500,
                name: "第六条圆弧",
              },
              {
                value: 500,
                itemStyle: {
                  normal: {
                    color: "transparent",
                  },
                },
              },
            ],
          },
          {
            name: "工作类型",
            type: "pie",
            radius: [0, "82%"],
            center: ["50%", "60%"],
            avoidLabelOverlap: false,
            startAngle: 0,
            roseType: "area",
            selectedMode: "single",
            label: {
              color: "#fff",
              position: "outside",
            },
            labelLine: {
              show: false,
              length: 0,
              length2: 0,
            },
            data: [
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: 0,
                name: "",
                label: {
                  normal: {
                    show: false,
                  },
                },
              },
              {
                value: data.value[0],
                name: data.label[0],
                itemStyle: {
                  normal: {
                    color: "#0278fe",
                  },
                },
              },
              {
                value: data.value[1],
                name: data.label[1],
                itemStyle: {
                  normal: {
                    color: "#FFBB32",
                  },
                },
              },
              {
                value: data.value[2],
                name: data.label[2],
                itemStyle: {
                  normal: {
                    color: "#6058df",
                  },
                },
              },
              {
                value: data.value[3],
                name: data.label[3],
                itemStyle: {
                  normal: {
                    color: "#ff3976",
                  },
                },
              },
              {
                value: data.value[4],
                name: data.label[4],
                itemStyle: {
                  normal: {
                    color: "#00d6fb",
                  },
                },
              },
            ],
          },
        ],
      });
    },
    changeNumber() {
      this.alarmTotal.forEach((item) => {
        item.value += 1;
      });
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

<style scoped lang="less">
.alarm-box {
  display: flex;
  justify-content: space-around;
  .alarm-item {
    text-align: center;
    margin-top: 40px;
    .alarm-label {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
    }
    .alarm-value {
      margin-top: 10px;
      font-size: 24px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #02fdfd;
    }
  }
}
</style>
