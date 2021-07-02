<template>
  <div class="asdrg">
    <div id="my-charts11w" style="width:100%; height:100%"></div>
  </div>
</template>

<script>
import { getData34 } from "@/data/dataCenter.js";
export default {
  components: {},
  data() {
    return {
      data: getData34,
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
    window.onresize = function() {
      _this.chartDom.resize();
    };
  },
  methods: {
    drawCharts() {
      this.chartDom = this.$echarts.init(document.getElementById("my-charts11w"));
      let data = this.data;
      this.chartDom.setOption({
        color: ["rgba(63, 255, 234, 1)", "rgba(52, 75, 190, 1)", "rgba(74, 104, 255, 1)", "rgba(129, 113, 228, 1)", "rgba(81, 58, 222, 1)", "rgba(58, 26, 255, 1)", "rgba(0, 168, 255, 1)"],
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            type: "pie",
            radius: ["56%", "80%"],
            avoidLabelOverlap: false,
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
.asdrg {
  width: 100%;
  height: 100%;
  margin-top: 20px;
}
</style>
