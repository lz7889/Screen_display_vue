<template>
  <div style="width: 100%; height: 100%">
    <div class="top-legend">
      <i></i>办结事项<span>{{ chartData.topData.done }}</span>
      <i></i>待办事项<span>{{ chartData.topData.todo }}</span>
    </div>
    <div class="content">
      <div
        id="party-construction-right2-top"
        style="width: 100%; height: 30%"
      ></div>
      <div
        id="party-construction-right2-bottom"
        style="width: 100%; height: 80%"
      ></div>
    </div>
  </div>
</template>

<script>
import { partyConstructionRight2 } from "@/data/dataService.js";

export default {
  components: {},
  data() {
    return {
      chartData: partyConstructionRight2,
      topChartDom: {},
      bottomChartDom: {},
    };
  },
  watch: {
    // chartData: {
    //   handler: function() {
    //     this.drawCharts();
    //   },
    //   deep: true,
    // },
  },
  mounted() {
    this.drawChartsTop();
    this.drawChartsBottom();
    let _this = this;
    window.addEventListener("resize", () => {
      _this.topChartDom.resize();
      _this.bottomChartDom.resize();
    });
    // this.changeTiming();
  },
  methods: {
    drawChartsTop() {
      this.topChartDom = this.$echarts.init(
        document.getElementById("party-construction-right2-top")
      );
      let total = this.chartData.topData.done + this.chartData.topData.todo;
      let done = this.chartData.topData.done;
      let proportion = (done / total).toFixed(2) * 100 + "%";
      let label = proportion + "\n办结率";
      this.topChartDom.setOption({
        xAxis: {
          max: total,
          splitLine: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        grid: {
          left: 60,
          top: 120,
          right: 10,
          bottom: 100,
        },
        yAxis: [
          {
            type: "category",
            inverse: false,
            data: [label],
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
          },
        ],
        series: [
          {
            // 内
            type: "bar",
            barWidth: 23,
            silent: true,
            itemStyle: {
              normal: {
                color: "#1588D1",
              },
            },
            label: {
              normal: {
                formatter: "{b}",
                textStyle: {
                  color: "#fff",
                  fontSize: 14,
                },
                position: "left",
                distance: 10, // 向右偏移位置
                show: true,
              },
            },
            data: [done],
            z: 1,
            animationEasing: "elasticOut",
          },
          {
            // 分隔
            type: "pictorialBar",
            itemStyle: {
              normal: {
                color: "#07314a",
              },
            },
            symbolRepeat: "fixed",
            symbolMargin: 2,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [3, 23],
            symbolPosition: "start",
            symbolOffset: [3, -3],
            symbolBoundingData: this.total,
            data: [total, total, total, total],
            z: 2,
            animationEasing: "elasticOut",
          },
          {
            // label
            type: "pictorialBar",
            symbolBoundingData: total,
            itemStyle: {
              normal: {
                color: "none",
              },
            },
            label: {
              show: false,
            },
            data: [done],
            z: 0,
          },
          {
            name: "外框",
            type: "bar",
            barGap: "-130%", // 设置外框粗细
            data: [total, total, total, total],
            barWidth: 36,
            itemStyle: {
              normal: {
                barBorderRadius: [5, 5, 5, 5],
                color: "transparent", // 填充色
                barBorderColor: "#1588D1", // 边框色
                barBorderWidth: 2, // 边框宽度
              },
            },
            z: 0,
          },
        ],
      });
    },
    drawChartsBottom() {
      this.bottomChartDom = this.$echarts.init(
        document.getElementById("party-construction-right2-bottom")
      );
      let data = this.chartData.bottomData;
      this.bottomChartDom.setOption({
        // legend: {
        //   right: "0",
        //   top: "0",
        //   itemWidth: 10,
        //   itemHeight: 10,
        //   orient: "vertical",
        //   textStyle: {
        //     color: "#fff",
        //     fontSize: 12,
        //   },
        // },
        radar: {
          name: {
            textStyle: {
              color: "#fff",
            },
          },
          radius: "73%",
          center: ["50%", "46%"],
          // startAngle: 60,
          indicator: data.indicator,
          nameGap: 5,
          splitLine: {
            lineStyle: {
              color: "rgba(1,120,254, 0.5)",
            },
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "rgba(1,120,254, 0.5)",
            },
          },
          splitArea: {
            show: false,
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
                value: data.done,
                name: "办结事项",
                areaStyle: {
                  normal: {
                    color: "rgba(96, 92, 255, 0.1)",
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#59D19C",
                  },
                },
                lineStyle: {
                  color: "#17F689",
                },
                symbol: "circle",
                symbolSize: 6,
              },
              {
                value: data.todo,
                name: "待办事项",
                areaStyle: {
                  normal: {
                    color: "rgba(220, 160, 71, 0.1)",
                  },
                },
                itemStyle: {
                  normal: {
                    color: "#605CFF",
                  },
                },
                symbol: "circle",
                symbolSize: 6,
                lineStyle: {
                  color: "#0134B1",
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
.content {
  // height: calc(100% - 30px);
  height: 100%;
  width: 100%;
}
.top-legend {
  position: absolute;
  top: 25px;
  right: 40px;
  font-size: 12px;
  i {
    display: inline-block;
    height: 10px;
    width: 10px;
    background-color: #605cff;
    margin: 0 8px 0 20px;
    &:first-child {
      background-color: #59d19c;
    }
  }
}
</style>
