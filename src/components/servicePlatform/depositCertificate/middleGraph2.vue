<template>
  <div
    id="deposit-certificate-right-middle"
    style="width: 100%; height: 100%"
  ></div>
</template>

<script>
import { depositCertificateMiddle2 } from "@/data/dataService.js";

export default {
  components: {},
  data() {
    return {
      chartData: depositCertificateMiddle2,
      chartDom: {},
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
        document.getElementById("deposit-certificate-right-middle")
      );
      let data = this.chartData;
      this.chartDom.setOption({
        tooltip: {
          show: false,
        },
        grid: {
          top: "10%",
          left: "0%",
          right: "4%",
          bottom: "2%",
          containLabel: true,
        },
        yAxis: [
          {
            type: "category",
            data: data.category,
            inverse: true,
            axisTick: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: "#fff",
              },
            },
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "#1B66F1FF",
              },
            },
          },
        ],
        xAxis: [
          {
            type: "value",
            axisLabel: {
              show: false,
              textStyle: {
                color: "#fff",
              },
            },
            axisTick: {
              show: false,
            },
            // interval: 2000,
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "#1B66F1FF",
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
                color: ["rgba(27,102,241,0.5)"],
                width: 1,
              },
            },
          },
        ],
        series: [
          {
            name: data.category,
            type: "bar",
            barWidth: "55%",
            data: data.value,
            itemStyle: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  color: "black",
                },
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: "#1B66F1" },
                  { offset: 1, color: "#0580FD" },
                ]),
              },
            },
            label: {
              show: true,
              position: "insideRight",
              color: "#fff",
              fontSize: 14,
            },
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
