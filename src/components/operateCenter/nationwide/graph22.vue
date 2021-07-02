<template>
  <div class="xinkong">
    <div class="content">
      <div id="my-charts11wq" style="width: 100%; height: 100%"></div>
    </div>
  </div>
</template>

<script>
import { getData22 } from "@/data/dataOperate.js";
export default {
  components: {},
  data() {
    return {
      data: getData22,
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
    window.onresize = function () {
      _this.chartDom.resize();
    };
  },
  methods: {
    drawCharts() {
      this.chartDom = this.$echarts.init(
        document.getElementById("my-charts11wq")
      );
      let data = this.data;
      this.chartDom.setOption({
        color: [
          "rgba(63, 255, 234, 1)",
          "rgba(52, 75, 190, 1)",
          "rgba(74, 104, 255, 1)",
          "rgba(129, 113, 228, 1)",
          "rgba(81, 58, 222, 1)",
          "rgba(58, 26, 255, 1)",
          "rgba(0, 168, 255, 1)",
        ],
        tooltip: {
          trigger: "item",
        },

        series: [
          {
            type: "pie",
            radius: ["40%", "60%"],
            avoidLabelOverlap: false,
            center: ["50%", "42%"], //图的位置，距离左跟上的位置
            emphasis: {
              label: {
                show: true,
                // fontSize: "16",
              },
            },
            label: {
              show: true,
              position: "outside",
              formatter: "{b}\n{d}%",
            },
            labelLine: {
              show: true,
              length: 8,
              length2: 8,
            },
            data: data,
          },
        ],

        textStyle: {
          color: "#ffff",
        },
      });
    },
  },
};
</script>

<style scoped lang="less">
.xinkong {
  width: 100%;
  height: 100%;
}
.content {
  font-family: Microsoft YaHei;
  color: #ffffff;
  text-align: justify;
  height: calc(100% - 20px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: #ccc;
  height: 100%;
}
</style>
