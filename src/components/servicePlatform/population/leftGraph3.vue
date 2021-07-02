<template>
  <div style="width: 100%; height: 100%">
    <div id="population-left3" style="width: 100%; height: 100%"></div>
    <div class="choose-box">
      <button
        :class="activeItem === 'event' ? 'active' : ''"
        @click="activeItem = 'event'"
      >
        事件
      </button>
      <button
        :class="activeItem === 'order' ? 'active' : ''"
        @click="activeItem = 'order'"
      >
        工单
      </button>
    </div>
  </div>
</template>

<script>
import { populationLeft3 } from "@/data/dataService.js";
export default {
  components: {},
  data() {
    return {
      data: populationLeft3,
      chartDom: {},
      activeItem: "order",
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
        document.getElementById("population-left3")
      );
      let data = this.data;
      this.chartDom.setOption({
        color: ["#3A1AFF", "#4A68FF", "#00A8FF"],
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            type: "pie",
            radius: ["50%", "80%"],
            avoidLabelOverlap: false,
            center: ["50%", "50%"],
            emphasis: {
              label: {
                show: true,
                // fontSize: "16",
              },
            },
            label: {
              normal: {
                show: true,
                position: "outside",
                formatter: "{b|{b}}\n{b|{c}}",
                rich: {
                  b: {
                    align: "center",
                    color: "#FFF",
                    fontSize: 14,
                    lineHeight: 20,
                  },
                  c: {
                    alien: "center",
                    color: "#FFF",
                    fontSize: 14,
                    lineHeight: 20,
                  },
                },
                align: "center",
              },
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

<style scoped lang="less">
.choose-box {
  position: absolute;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 13px;
  cursor: pointer;
  box-shadow: none;
  background: none;
  border: none;
  button {
    height: 24px;
    width: 50px;
    font-size: 12px;
    box-shadow: none;
    border: 1px solid #fff;
    border-radius: 3px;
    background-color: transparent;
    outline: none;
    color: #fff;
    text-align: center;
    cursor: pointer;
    &:last-child {
      margin-left: 14px;
    }
  }
  .active {
    background-color: #3699ff;
    border: 1px solid #3699ff;
  }
}
</style>
