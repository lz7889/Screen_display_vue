<template>
  <div id="my-chartss" style="width:100%; height:100%"></div>
</template>

<script>
import { getData21 } from "@/data/dataCenter.js";
export default {
  components: {},
  data() {
    return {
      data: getData21,
    };
  },
  mounted() {
    this.drawCharts();
  },
  methods: {
    drawCharts() {
      let chartDom = this.$echarts.init(document.getElementById("my-chartss"));
      let data = this.data;
      chartDom.setOption({
        legend: {
          data: ["销量"],
        },
        color: ["rgba(50, 183, 233, 1)", "rgba(254, 81, 101, 1)"], //关键加上这句话，legend的颜色和折线的自定义颜色就一致了
        xAxis: {
          type: "category",
          data: data.Time,
          // boundaryGap: false,
          // 坐标轴颜色
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#1B66F1FF",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            rotate: 0,
            show: true,
            textStyle: {
              color: "#fff",
              fontSize: 12,
            },
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          min: 0,
          max: 400,
          interval: 100,
          type: "value",

          // 坐标轴颜色
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#1B66F1FF",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            formatter: "{value}",
            textStyle: {
              color: "#fff",
              fontSize: 12,
            },
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            data: data.datas1,
            type: "line",
            smooth: true,
            areaStyle: {
              color: "rgba(50, 183, 233, 0.1)",
            },
          },
          {
            data: data.datas2,
            type: "line",
            smooth: true,
            areaStyle: {
              color: "rgba(254, 81, 101, 0.1)",
            },
          },
        ],

        grid: {
          top: "14%", // 等价于 y: '16%'
          left: "3%",
          right: "0%",
          bottom: "0%",
          containLabel: true,
        },

        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            shadowStyle: {
              color: "rgba(27, 102, 241, 0.3)",
            },
          },
        },
      });
    },
  },
};
</script>

<style scoped lang="less"></style>
