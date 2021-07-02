<template>
  <el-row :gutter="13" class="content-container">
    <el-col :span="6">
      <div class="content-box">
        <div
          class="content-item"
          v-for="(item, index) in leftData"
          :key="index"
        >
          <div class="item-title">{{ item.title }}</div>
          <dv-digital-flop class="number" :config="item.number" />
        </div>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="content-box map">
        <div id="my-charts12" style="width: 100%; height: 100%"></div>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="content-box">
        <div
          class="content-item"
          v-for="(item, index) in rightData"
          :key="index"
        >
          <div class="item-title">{{ item.title }}</div>
          <dv-digital-flop class="number" :config="item.number" />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getData12 } from "@/data/dataBusiness.js";
// 引入中国地图数据
import "../../../assets/js/china.js";
export default {
  components: {},
  data() {
    return {
      leftData: getData12.left,
      rightData: getData12.right,
      centerMap: getData12.centerMap,
    };
  },
  mounted() {
    this.changeTiming();
    this.drawCharts();
    let _this = this;
    window.addEventListener("resize", () => {
      _this.chartDom.resize();
    });
  },
  created() {},
  methods: {
    changeTiming() {
      this.dataCenterTimer12 = setInterval(() => {
        this.changeNumber();
      }, 5000);
    },
    changeNumber() {
      this.leftData.forEach((item, index) => {
        item.number.number[0] += ++index;
        item.number = { ...item.number };
      });
      this.rightData.forEach((item, index) => {
        item.number.number[0] += ++index;
        item.number = { ...item.number };
      });
    },
    drawCharts() {
      this.chartDom = this.$echarts.init(
        document.getElementById("my-charts12")
      );
      let data = this.centerMap;
      console.log(data.length);
      this.chartDom.setOption({
        tooltip: {
          show: true,
          formatter: function (params) {
            return (
              "&nbsp;&nbsp;" +
              params.name +
              "&nbsp;&nbsp;&nbsp;" +
              params.value +
              "&nbsp;&nbsp;"
            );
          },
        },
        visualMap: {
          type: "piecewise",
          left: "0",
          bottom: "15",
          itemWidth: 16,
          itemHeight: 12,
          textStyle: {
            color: "#fff",
            fontSize: 12,
          },
          pieces: [
            {
              min: 500,
              label: ">500",
            },
            {
              max: 500,
              min: 200,
              label: "200-500",
            },
            {
              max: 200,
              min: 0,
              label: "<200",
            },
            {
              value: 0,
              label: "无数据",
            },
          ],
          // 从少到多
          inRange: {
            color: ["#7db3fa", "#4897ff", "#0f77ff", "#004bd4"],
          },
          outOfRange: {
            color: ["#999999"],
          },
        },
        series: [
          {
            type: "map",
            map: "china",
            zoom: 1.25,
            label: {
              normal: {
                show: false,
              },
              emphasis: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                borderColor: "#fff",
                borderWidth: 1,
              },
              emphasis: {
                // 被选中的颜色
                areaColor: "#041ee7",
              },
            },
            data: data,
          },
        ],
      });
    },
  },
  destroyed() {
    clearInterval(this.dataCenterTimer12);
  },
};
</script>

<style scoped lang="less">
.content-container {
  height: 100%;
  width: 100%;
  .el-col {
    height: 100%;
  }
  .content-box {
    height: 100%;
    background-color: rgba(26, 92, 215, 0.1);
    padding: 0px 25px;
    .content-item {
      padding-top: 30px;
      border-bottom: 1px solid rgba(27, 102, 241, 0.3);
      &:last-child {
        border-bottom: none;
      }
      .item-title {
        margin-bottom: -10px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #fefefe;
      }
    }
  }
}
</style>
