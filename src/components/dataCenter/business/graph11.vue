<template>
  <div style="width:100%; height:100%">
    <div id="my-chartss" style="width:100%; height:94%"></div>
    <div class="aone">
      <div class="w">
        <div class="a"></div>
        <div>外部调用：2485796</div>
      </div>
      <div class="w ws">
        <div class="b"></div>
        <div>当日新增调用：2485796</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getData11 } from "@/data/dataBusiness.js";
export default {
  components: {},
  data() {
    return {
      data: getData11,
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
        color: ["rgba(50, 183, 233, 1)", "rgba(254, 81, 101, 1)"],
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
          max: 500,
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
            lineStyle: {
              color: ["#1B66F1FF"],
              type: "dashed",
            },
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
          left: "0%",
          right: "0%",
          bottom: "5%",
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

<style scoped lang="less">
.aone {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 20px;
  .w {
    display: flex;
    align-items: center;
  }
  .ws {
    margin-right: 40px;
  }
  .a {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(3, 223, 227, 1);
    margin-right: 10px;
  }
  .b {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(254, 81, 101, 1);
    margin-right: 10px;
  }
}
</style>
