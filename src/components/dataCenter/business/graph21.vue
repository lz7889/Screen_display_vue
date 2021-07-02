<template>
  <div class="dadr" style="width:100%; height:100%">
    <div id="my-charts_21" style="width:100%; height:100%"></div>
  </div>
</template>

<script>
// import { getData11 } from "@/data/dataCenter.js";
export default {
  components: {},
  data() {
    return {
      // data: getData11,
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
  },
  methods: {
    drawCharts() {
      this.chartDom = this.$echarts.init(
        document.getElementById("my-charts_21")
      );

      let dashedPic =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAAOBAMAAAB6G1V9AAAAD1BMVEX////Kysrk5OTj4+TJycoJ0iFPAAAAG0lEQVQ4y2MYBaNgGAMTQQVFOiABhlEwCugOAMqzCykGOeENAAAAAElFTkSuQmCC";
      let color = [
        "rgba(28, 103, 244, 1)",
        "rgba(6, 211, 196, 1)",
        "rgba(255, 187, 50, 1)",
        "rgba(44, 204, 68, 1)",
      ];
      let chartData = [
        {
          name: "物业缴费",
          value: 50,
        },
        {
          name: "二手房租售",
          value: 27,
        },
        {
          name: "业主投票&存证",
          value: 16,
        },
        {
          name: "健康管理",
          value: 30,
        },
      ];
      let arrName = [];
      let arrValue = [];
      let sum = 0;
      let pieSeries = [],
        lineYAxis = [];

      // 数据处理
      chartData.forEach((v) => {
        arrName.push(v.name);
        arrValue.push(v.value);
        sum = sum + v.value;
      });

      // 图表option整理
      chartData.forEach((v, i) => {
        pieSeries.push({
          name: "学历",
          type: "pie",
          clockWise: false,
          hoverAnimation: false,
          radius: [65 - i * 15 + "%", 57 - i * 15 + "%"],
          center: ["50%", "50%"],
          label: {
            show: false,
          },
          data: [
            {
              value: v.value,
              name: v.name,
            },
            {
              value: sum - v.value,
              name: "",
              itemStyle: {
                // color: "rgba(11,21,50,0.1)",
                color: "rgba(0,0,0,0.1)",
              },
            },
          ],
        });
        pieSeries.push({
          name: "",
          type: "pie",
          silent: true,
          z: 1,
          clockWise: false, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          radius: [65 - i * 15 + "%", 57 - i * 15 + "%"],
          center: ["50%", "50%"],
          label: {
            show: false,
          },
          data: [
            {
              value: 7.5,
              itemStyle: {
                // color: "rgba(11,21,50)",
                color: "rgba(0,0,0,0.1)",
              },
            },
            {
              value: 2.5,
              name: "",
              itemStyle: {
                color: "rgba(0,0,0,0)",
              },
            },
          ],
        });
        v.percent = ((v.value / sum) * 100).toFixed(1) + "%";
        lineYAxis.push({
          value: i,
          textStyle: {
            rich: {
              circle: {
                color: color[i],
                padding: [0, 5],
              },
            },
          },
        });
      });

      // let data = this.data;
      this.chartDom.setOption({
        backgroundColor: "",
        color: color,
        grid: {
          top: "15%",
          bottom: "54%",
          left: "50%",
          right: "0%",
          containLabel: false,
        },

        yAxis: [
          {
            type: "category",
            inverse: true,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              formatter: function(params) {
                let item = chartData[params];
                console.log(item);
                return (
                  "{line|}{circle|●}{name|" +
                  item.name +
                  "}{bd|}{percent|" +
                  item.percent +
                  "}{value|" +
                  "" +
                  "}"
                );
              },
              interval: 0,
              inside: true,
              textStyle: {
                color: "#333",
                fontSize: 14,
                rich: {
                  line: {
                    width: 0,
                    height: 10,
                    backgroundColor: { image: dashedPic },
                  },
                  name: {
                    color: "#ffff",
                    fontSize: 14,
                  },
                  bd: {
                    color: "#ccc",
                    padding: [0, 5],
                    fontSize: 14,
                  },
                  percent: {
                    color: "rgba(2, 253, 253, 1)",
                    fontSize: 14,
                  },
                  value: {
                    color: "#333",
                    fontSize: 14,
                    fontWeight: 500,
                    padding: [0, 0, 0, 20],
                  },
                  unit: {
                    fontSize: 14,
                  },
                },
              },
              show: true,
            },
            data: lineYAxis,
          },
        ],
        xAxis: [
          {
            show: false,
          },
        ],
        series: pieSeries,
      });
    },
  },
};
</script>

<style scoped lang="less"></style>
