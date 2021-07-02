<template>
  <div style="width: 100%; height: 100%">
    <div class="top-total">
      <div class="total-text">注册用户</div>
      <div class="total-num">
        <span
          class="num-item"
          v-for="(item, index) in registerNum"
          :key="index"
        >
          {{ item }}
        </span>
      </div>
    </div>
    <div class="top-total" style="margin-left: 250px">
      <div class="total-text">活跃用户</div>
      <div class="total-num">
        <span class="num-item" v-for="(item, index) in activeNum" :key="index">
          {{ item }}
        </span>
      </div>
    </div>
    <div id="center-top-chart" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import { mapData, centerTopTotal } from "@/data/dataOperate.js";

export default {
  components: {},
  props: ["province"],
  data() {
    return {
      mapData: mapData,
      chartDom: {},
      totalData: centerTopTotal[this.province],
    };
  },
  created() {},
  computed: {
    registerNum() {
      return this.totalData.registerNum.toString();
    },
    activeNum() {
      return this.totalData.activeNum.toString();
    },
  },
  watch: {
    province: {
      handler: function () {
        this.drawCharts();
        // 再次对total进行赋值
        this.totalData = centerTopTotal[this.province];
      },
    },
  },
  mounted() {
    // 定时器
    this.changeTiming();
    this.drawCharts();
    let _this = this;
    window.addEventListener("resize", () => {
      _this.chartDom.resize();
    });
  },
  methods: {
    drawCharts() {
      this.chartDom = this.$echarts.init(
        document.getElementById("center-top-chart")
      );
      let areaMap = require(`../../../assets/json/${this.province}.json`);
      this.$echarts.registerMap("area", areaMap);
      let mapData = this.mapData[this.province];
      this.chartDom.setOption({
        // tooltip: {
        //   trigger: "item",
        //   formatter: function (params) {
        //     if (params.data) {
        //       return params.name;
        //     } else {
        //       return "";
        //     }
        //   },
        // },
        visualMap: {
          show: false,
          min: 0,
          max: 1000000,
          type: "piecewise",
          // 点的颜色，可以自定义不同区间不同颜色
          splitList: [
            {
              color: "rgb(233, 242, 0)",
              // 大于200
              gt: 300,
            },
            {
              color: "rgb(227, 165, 41)",
              // 小于200
              lt: 300,
              gt: 200,
            },
            {
              color: "rgb(213, 178, 97)",
              lt: 100,
            },
          ],
        },
        geo: {
          map: "area",
          aspectScale: 1, //长宽比
          top: "18%",
          zoom: 1,
          itemStyle: {
            normal: {
              areaColor: "#013C62",
              shadowColor: "rgba(47,141,255,.5)", //阴影边框颜色
              shadowOffsetX: 0,
              shadowOffsetY: 10,
            },
            emphasis: {
              areaColor: "#2AB8FF",
              borderWidth: 0,
              label: {
                show: false,
              },
            },
          },
        },
        series: [
          {
            type: "map",
            aspectScale: 1, //长宽比
            top: "18%",

            label: {
              normal: {
                show: false, //隐藏城市名称
                textStyle: {
                  color: "#fff", //地图城市名称颜色
                },
              },
              emphasis: {
                textStyle: {
                  color: "#fff", //鼠标悬浮后省份颜色
                },
              },
            },

            itemStyle: {
              normal: {
                borderColor: "#2ab8ff", //地图边界颜色
                borderWidth: 1,
                areaColor: "#031525", //区域面颜色
              },
              emphasis: {
                areaColor: "#061A5F", //鼠标悬浮区域面颜色
                borderWidth: 2,
                color: "",
              },
            },
            zoom: 1,
            selectedMode: false,
            map: "area", //使用
          },
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            showEffectOn: "render",
            // 闪动点的大小和频率
            // rippleEffect: {
            //   period: 5,
            //   brushType: "stroke",
            //   scale: 4,
            // },
            // 涟漪效果
            effectType: "ripple",
            hoverAnimation: false,
            legendHoverLink: false,
            symbolSize: function (val) {
              if (val[2] <= 100) {
                return 4;
              }
              if (val[2] > 100 && val[2] <= 200) {
                return 8;
              }
              if (val[2] > 200 && val[2] <= 300) {
                return 12;
              }
              if (val[2] > 300 && val[2] <= 400) {
                return 16;
              }
              if (val[2] > 400 && val[2] <= 500) {
                return 20;
              }
              if (val[2] > 500) {
                return 24;
              }
            },
            // 不显示鼠标放上去之后的小区名
            tooltip: {
              show: false,
            },
            data: mapData,
          },
        ],
      });
    },
    changeTiming() {
      this.dataCenterTimer1 = setInterval(() => {
        this.changeNumber();
      }, 5000);
    },
    changeNumber() {
      let newNum = {
        registerNum: this.totalData.registerNum + 1,
        activeNum: this.totalData.activeNum + 1,
      };
      this.totalData = newNum;
    },
  },
  destroyed() {
    clearInterval(this.dataCenterTimer1);
  },
};
</script>

<style scoped lang="less">
.top-total {
  height: 102px;
  color: #ffffff;
  position: fixed;
  margin-left: 30px;
  z-index: 99;
  .total-text {
    font-size: 20px;
    line-height: 28px;
  }
  .total-num {
    margin-top: 20px;
    .num-item {
      display: inline-block;
      width: 30px;
      height: 52px;
      font-size: 41px;
      // 数字偏下一点点
      line-height: 54px;
      text-align: center;
      background: #0a1f3f;
      border: 1px solid #06606f;
      border-radius: 5px;
      margin-right: 6px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
