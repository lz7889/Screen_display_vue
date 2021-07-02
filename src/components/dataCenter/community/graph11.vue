<template>
  <div id="my-charts11" style="width:100%; height:100%"></div>
</template>

<script>
import { getData11 } from "@/data/dataCenter.js";
export default {
  components: {},
  data() {
    return {
      data: getData11,
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
      this.chartDom = this.$echarts.init(document.getElementById("my-charts11"));
      let data = this.data;
      this.chartDom.setOption({
        color: ["#f9a854", "#00c4ff", "#fe5165", "#00de81", "#fff100"],
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          y: "center",
          left: "80%",
          icon: "circle",
          itemWidth: 8,
          itemHeight: 8,
          itemGap: 16,
          textStyle: {
            color: "#fff",
            fontSize: 14,
          },
        },
        series: [
          {
            type: "pie",
            radius: ["56%", "80%"],
            avoidLabelOverlap: false,
            center: ["35%", "52%"],
            emphasis: {
              label: {
                show: true,
                // fontSize: "16",
              },
            },
            label: {
              show: true,
              position: "outside",
              formatter: "{d}%",
            },
            labelLine: {
              show: true,
              length: 8,
              length2: 8,
            },
            data: data,
          },
        ],
      });
    },
  },
};
</script>

<style scoped lang="less"></style>
