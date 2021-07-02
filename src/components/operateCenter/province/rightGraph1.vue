<template>
  <div class="graphright">
    <!-- 上面部分 -->

    <div class="graphright_top">
      <div class="dfg">
        <div class="items">
          <div class="price">{{ nubeur1 }}</div>
          <div class="yanse"></div>
          <div class="toprice">交易总额/万元</div>
        </div>
        <div class="items">
          <div class="price">{{ nubeur2 }}</div>
          <div class="yanse"></div>
          <div class="toprice">缴费总额/万元</div>
        </div>
        <div class="items">
          <div class="price">{{ nubeur3 }}</div>
          <div class="yanse"></div>
          <div class="toprice">订单金额/万元</div>
        </div>
      </div>
    </div>
    <!-- 下面部分 -->
    <div class="graphright_bootom">
      <!-- 左边部分 -->
      <div class="sdh_left">
        <div>支付方式分析</div>
        <div class="dfgrg">
          <dv-active-ring-chart
            :config="config"
            style="width:100%;height:100%"
          />
        </div>
      </div>
      <!-- 右边部分 -->
      <div class="dasg_right">
        <div>交易类型分析</div>
        <div class="ojhere">
          <div id="my-charts11p2" style="width:100%; height:100%"></div>
        </div>
        <div>sdsad</div>
      </div>
    </div>
  </div>
</template>

<script>
import { LYLcenterTopTotal, YQYcenterTopTotal} from "@/data/dataOperate.js";

export default {
  data() {
    return {
      chartDom: {},
      config: LYLcenterTopTotal[this.province],
      nubeur1: 4958,
      nubeur2: 5758,
      nubeur3: 3858,
      dataLines:YQYcenterTopTotal[this.province]
    };
  },
  props: ["province"],

  methods: {
    drawCharts() {
      this.chartDom = this.$echarts.init(
        document.getElementById("my-charts11p2")
      );
      // let data = this.datas;
      var dataLine = this.dataLines;
      
      var myColor = [
        "#1B85F2",
        "#28DCD3",
        "#1B85F2",
        "#28DCD3",
        "#1B85F2",
        "#28DCD3",
      ];
      this.chartDom.setOption({
        grid: [
          {
            left: "20%",
            top: "10%",
            right: "20%",
            bottom: "20%",
          },
        ],
        xAxis: [
          {
            max: 100,
            show: false,
          },
        ],
        yAxis: [
          {
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: 12,
              },
            },
            data: ["水费", "电费", "燃气", "宽带", "物业", "维修"],
          },
          {
            axisTick: "none",
            axisLine: "none",
            show: false,
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: 12,
              },
            },
            data: [1, 1, 1, 1, 1, 1],
          },
          {
            axisLine: {
              lineStyle: {
                color: "rgba(0,0,0,0)",
              },
            },
            data: [],
          },
        ],
        series: [
          {
            name: "条",
            type: "bar",
            stack: "b",
            yAxisIndex: 0,
            data: dataLine,
            label: {
              normal: {
                show: false,
                position: "right",
                distance: 10,
                formatter: function(param) {
                  return param.value + "%";
                },
                textStyle: {
                  color: "#2F6781",
                  fontSize: 16,
                },
              },
            },
            barWidth: 12,
            itemStyle: {
              normal: {
                color: function(params) {
                  // var num = myColor.length;
                  return myColor[params.dataIndex];
                },
              },
            },
            z: 2,
          },
          {
            name: "框",
            type: "bar",
            yAxisIndex: 1,
            barGap: "-100%",
            data: [100, 100, 100, 100, 100, 100],
            barWidth: 12,
            itemStyle: {
              normal: {
                color: "#666666",
              },
            },
            z: 1,
            label: {
              normal: {
                show: true,
                position: "right",
                distance: 8,
                formatter: function(data) {
                  return dataLine[data.dataIndex] + "%";
                },
                textStyle: {
                  color: "#fff",
                  fontSize: 12,
                },
              },
            },
          },
        ],
      });
    },
    cars() {
      switch (this.province) {
        case "xinan":
          //代码1
          // this.list = this.list1;
          break;

        case "beijing":
          this.nubeur1 = 5475;
          this.nubeur2 = 2345;
          this.nubeur3 = 9775;
          break;
        case "guangzhou":
          //代码1
          this.nubeur1 = 1275;
          this.nubeur2 = 7845;
          this.nubeur3 = 3575;
          break;
        case "huazhong":
          //代码1
          this.nubeur1 = 3675;
          this.nubeur2 = 6345;
          this.nubeur3 = 9375;
          break;
        //代码2
      }
    },
  },
  created() {
    this.cars();
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
  watch: {
    province: {
      handler: function() {
        // 再次对total进行赋值
        this.cars();
        this.config = LYLcenterTopTotal[this.province];
        this.dataLines=YQYcenterTopTotal[this.province];
        this.drawCharts();
      },
    },
  },
};
</script>

<style scoped lang="less">
.graphright {
  width: 100%;
  height: 100%;
  // background: firebrick;
  display: flex;
  flex-direction: column;
  .graphright_top {
    width: 100%;
    height: 50%;
    // background: #000;
    .dfg {
      display: flex;
      justify-content: space-between;
      height: 100%;
      padding-top: 30px;
      .items {
        background-image: url("../../../assets/img/province/ty.png");
        width: 30%;
        background-size: 100%;
        background-repeat: no-repeat;
        .price {
          font-size: 20px;
          color: #fff;
          text-align: center;
          padding-top: 30px;
        }
        .yanse {
          width: 33px;
          height: 5px;
          background: linear-gradient(
            90deg,
            #3220ff -71.21%,
            #ffffff -71.19%,
            #958cf9 123.22%,
            #2613ff 124.24%
          );

          margin: auto;
          margin-top: 10px;
          margin-bottom: 10px;
          border-radius: 12px;
        }
        .toprice {
          font-size: 12px;
          color: #fff;
          text-align: center;
          transform: scale(0.85);
        }
      }
    }
  }
  .graphright_bootom {
    flex: 1;
    // background: darkgray;
    display: flex;
    font-family: PingFang SC;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    .sdh_left {
      width: 50%;
      display: flex;
      flex-direction: column;
      // background: seagreen;

      .dfgrg {
        flex: 1;
        margin-left: -32px;
      }
    }

    .dasg_right {
      flex: 1;
      // height: 100%;
      display: flex;
      flex-direction: column;
      // background: #958cf9;
      .ojhere {
        width: 100%;
        flex: 1;
      }
    }
  }
}
</style>
