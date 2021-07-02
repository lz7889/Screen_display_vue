<template>
  <div style="height: 100%; width: 100%">
    <div id="environment-left2" style="width: 50%; height: 100%"></div>
    <div class="right-num">
      <div class="num-item" v-for="(item, index) in totalData" :key="index">
        <div class="item-value">{{ item.value }}</div>
        <div class="item-text">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { environmentLeft2 } from "@/data/dataService.js";

export default {
  components: {},
  data() {
    return {
      chartData: environmentLeft2.leftChartData,
      chartDom: {},
      totalData: environmentLeft2.rightTotalData,
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
        document.getElementById("environment-left2")
      );
      let data = this.chartData;
      let dataArr = [
        {
          value: data.value,
          name: data.text,
        },
      ];
      let color = new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
        {
          offset: 0,
          color: "#5CF9FE", // 0% 处的颜色
        },
        {
          offset: 0.17,
          color: "#468EFD", // 100% 处的颜色
        },
        {
          offset: 0.9,
          color: "#468EFD", // 100% 处的颜色
        },
        {
          offset: 1,
          color: "#5CF9FE", // 100% 处的颜色
        },
      ]);
      let colorSet = [
        [0.91, color],
        [1, "#15337C"],
      ];
      let rich = {
        white: {
          fontSize: 20,
          color: "#fff",
          fontWeight: "500",
          padding: [-150, 0, 0, 0],
        },
        // 中间数字
        bule: {
          fontSize: 28,
          color: "#fff",
          fontWeight: "700",
          padding: [-35, 0, 0, 0],
        },
        size: {
          height: 40,
          padding: [90, 0, 0, 0],
        },
        // 文字及边框
        radius: {
          width: 100,
          height: 25,
          borderWidth: 1,
          borderColor: "#0092F2",
          fontSize: 14,
          color: "#fff",
          backgroundColor: "#1B215B",
          borderRadius: 5,
          textAlign: "center",
        },
      };
      this.chartDom.setOption({
        series: [
          {
            //外圈底色
            type: "pie",
            radius: "85%",
            center: ["50%", "50%"],
            z: 0,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.RadialGradient(
                  0.5,
                  0.5,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(17,24,43,0)",
                    },
                    {
                      offset: 0.5,
                      // color: '#1E2B57'
                      color: "rgba(28,42,91,.6)",
                    },
                    {
                      offset: 1,
                      color: "#141C33",
                      // color:'rgba(17,24,43,0)'
                    },
                  ],
                  false
                ),
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            },
            hoverAnimation: false,
            label: {
              show: false,
            },
            tooltip: {
              show: false,
            },
            data: [100],
          },
          {
            type: "gauge",
            radius: "74%",
            startAngle: "225",
            endAngle: "-45",
            splitNumber: "100",
            pointer: {
              show: false,
            },
            detail: {
              show: false,
            },
            title: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: [[1, "#00FFFF"]],
                width: 1,
                opacity: 1,
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
          },
          {
            type: "gauge",
            radius: "70%",
            startAngle: "225",
            endAngle: "-45",
            pointer: {
              show: false,
            },
            detail: {
              formatter: function (value) {
                return (
                  "{bule|" + value + "}" + "{size|" + "}\n{radius|当日总能耗}"
                );
              },
              rich: rich,
              offsetCenter: ["0%", "0%"],
            },
            data: dataArr,
            title: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: colorSet,
                width: 5,
                // shadowBlur: 15,
                // shadowColor: "#B0C4DE",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: 1,
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
          },
          {
            name: "灰色内圈", //刻度背景
            type: "gauge",
            z: 2,
            radius: "60%",
            startAngle: "225",
            endAngle: "-45",
            //center: ["50%", "75%"], //整体的位置设置
            axisLine: {
              // 坐标轴线
              lineStyle: {
                // 属性lineStyle控制线条样式
                color: [[1, "#018DFF"]],
                width: 1,
                opacity: 1, //刻度背景宽度
              },
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            pointer: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            detail: {
              show: false,
            },
          },
          {
            name: "白色圈刻度",
            type: "gauge",
            radius: "60%",
            startAngle: 225, //刻度起始
            endAngle: -45, //刻度结束
            z: 4,
            axisTick: {
              show: false,
            },
            splitLine: {
              length: 3, //刻度节点线长度
              lineStyle: {
                width: 1,
                color: "rgba(1,244,255, 0.9)",
              }, //刻度节点线
            },
            axisLabel: {
              color: "rgba(255,255,255,0)",
              fontSize: 12,
            }, //刻度节点文字颜色
            pointer: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                opacity: 0,
              },
            },
            detail: {
              show: false,
            },
            data: [
              {
                value: 0,
                name: "",
              },
            ],
          },
          {
            //内圆
            type: "pie",
            radius: "56%",
            center: ["50%", "50%"],
            z: 1,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.RadialGradient(
                  0.5,
                  0.5,
                  0.8,
                  [
                    {
                      offset: 0,
                      color: "#4978EC",
                    },
                    {
                      offset: 0.5,
                      color: "#1E2B57",
                    },
                    {
                      offset: 1,
                      color: "#141F3D",
                    },
                  ],
                  false
                ),
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            },
            hoverAnimation: false,
            label: {
              show: false,
            },
            tooltip: {
              show: false,
            },
            data: [100],
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
  // destroyed() {
  //   clearInterval(this.dataCenterTimer33);
  // },
};
</script>

<style scoped lang="less">
.right-num {
  width: calc(50% - 20px);
  height: calc(100% - 40px);
  position: absolute;
  top: 30px;
  right: 25px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  .num-item {
    width: 50%;
    text-align: center;
    &:nth-child(3) {
      margin-top: 33px;
    }
    &:nth-child(4) {
      margin-top: 33px;
    }
    .item-text {
      font-size: 14px;
      color: #ffffff;
      margin-top: 9px;
    }
    .item-value {
      font-size: 20px;
      font-weight: 400;
      color: #02f7f8;
    }
  }
}
</style>
