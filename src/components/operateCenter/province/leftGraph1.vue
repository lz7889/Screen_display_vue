<template>
  <div class="province_left_one">
    <!-- 上面部分 -->
    <div class="province_top">
      <div class="province_top_content">
        <div class="province_top_item" v-for="item in list" :key="item.index">
          <img :src="item.img" alt="" />
          <div class="title">
            <div class="guanli">{{ item.names }}</div>
            <div class="nuber">
              {{ `${parseFloat(item.nubers).toLocaleString()}` }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 下面部分 -->
    <div class="province_bootoom">
      <div class="province_bootoom_left">
        <div class="province_bootoom_title">业态分布数据</div>
        <div class="province_bootoom_wcb">
          <div id="my-charts11pHQY" style="width:100%; height:100%"></div>
        </div>
      </div>
      <div class="province_bootoom_right">
        <div class="province_bootoom_title">面积分布</div>
        <div class="province_bootoom_wcb">
          <div id="my-charts11p" style="width:100%; height:100%"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HQYcenterTopTotal } from "@/data/dataOperate.js";
export default {
  components: {},
  props: ["province"],
  data() {
    return {
      data: HQYcenterTopTotal[this.province],
      chartDom: {},
      list: [],
      list1: [
        {
          img: require("../../../assets/img/province/Frame 21.png"),
          names: "管理社区",
          nubers: 231,
        },
        {
          img: require("../../../assets/img/province/Frame 21-4.png"),
          names: "管理面积",
          nubers: 70561223,
        },
        {
          img: require("../../../assets/img/province/Frame 21-1.png"),
          names: "预警告警",
          nubers: 2341,
        },
        {
          img: require("../../../assets/img/province/Frame 21-5.png"),
          names: "车位数",
          nubers: 132401,
        },
        {
          img: require("../../../assets/img/province/Frame 21-2.png"),
          names: "入驻商家",
          nubers: 70312341,
        },
        {
          img: require("../../../assets/img/province/Frame 21-6.png"),
          names: "IOT在网设备",
          nubers: 234541,
        },
        {
          img: require("../../../assets/img/province/Frame 21-3.png"),
          names: "医疗机构",
          nubers: 857,
        },
        {
          img: require("../../../assets/img/province/Frame 21-7.png"),
          names: "养老结构",
          nubers: 111,
        },
      ],
      list2: [
        {
          img: require("../../../assets/img/province/Frame 21.png"),
          names: "管理社区",
          nubers: 2231,
        },
        {
          img: require("../../../assets/img/province/Frame 21-4.png"),
          names: "管理面积",
          nubers: 7223,
        },
        {
          img: require("../../../assets/img/province/Frame 21-1.png"),
          names: "预警告警",
          nubers: 6341,
        },
        {
          img: require("../../../assets/img/province/Frame 21-5.png"),
          names: "车位数",
          nubers: 42401,
        },
        {
          img: require("../../../assets/img/province/Frame 21-2.png"),
          names: "入驻商家",
          nubers: 1232341,
        },
        {
          img: require("../../../assets/img/province/Frame 21-6.png"),
          names: "IOT在网设备",
          nubers: 2546541,
        },
        {
          img: require("../../../assets/img/province/Frame 21-3.png"),
          names: "医疗机构",
          nubers: 8587,
        },
        {
          img: require("../../../assets/img/province/Frame 21-7.png"),
          names: "养老结构",
          nubers: 11541,
        },
      ],
      list3: [
        {
          img: require("../../../assets/img/province/Frame 21.png"),
          names: "管理社区",
          nubers: 431,
        },
        {
          img: require("../../../assets/img/province/Frame 21-4.png"),
          names: "管理面积",
          nubers: 3261223,
        },
        {
          img: require("../../../assets/img/province/Frame 21-1.png"),
          names: "预警告警",
          nubers: 2341,
        },
        {
          img: require("../../../assets/img/province/Frame 21-5.png"),
          names: "车位数",
          nubers: 312401,
        },
        {
          img: require("../../../assets/img/province/Frame 21-2.png"),
          names: "入驻商家",
          nubers: 47912341,
        },
        {
          img: require("../../../assets/img/province/Frame 21-6.png"),
          names: "IOT在网设备",
          nubers: 623541,
        },
        {
          img: require("../../../assets/img/province/Frame 21-3.png"),
          names: "医疗机构",
          nubers: 1257,
        },
        {
          img: require("../../../assets/img/province/Frame 21-7.png"),
          names: "养老结构",
          nubers: 811,
        },
      ],
      list4: [
        {
          img: require("../../../assets/img/province/Frame 21.png"),
          names: "管理社区",
          nubers: 23531,
        },
        {
          img: require("../../../assets/img/province/Frame 21-4.png"),
          names: "管理面积",
          nubers: 70223,
        },
        {
          img: require("../../../assets/img/province/Frame 21-1.png"),
          names: "预警告警",
          nubers: 23471,
        },
        {
          img: require("../../../assets/img/province/Frame 21-5.png"),
          names: "车位数",
          nubers: 132471,
        },
        {
          img: require("../../../assets/img/province/Frame 21-2.png"),
          names: "入驻商家",
          nubers: 70392341,
        },
        {
          img: require("../../../assets/img/province/Frame 21-6.png"),
          names: "IOT在网设备",
          nubers: 42341,
        },
        {
          img: require("../../../assets/img/province/Frame 21-3.png"),
          names: "医疗机构",
          nubers: 1057,
        },
        {
          img: require("../../../assets/img/province/Frame 21-7.png"),
          names: "养老结构",
          nubers: 511,
        },
      ],
    };
  },
  created() {
    this.cars();
    this.$nextTick(() => {
      this.drawCharts();
      this.drawChartss();
    });
  },
  methods: {
    cars() {
      switch (this.province) {
        case "xinan":
          //代码1
          this.list = this.list1;
          break;

        case "beijing":
          this.list = this.list2;
          break;
        case "guangzhou":
          //代码1
          this.list = this.list3;
          break;
        case "huazhong":
          //代码1
          this.list = this.list4;
          break;
        //代码2
      }
    },
    drawCharts() {
      this.chartDom = this.$echarts.init(
        document.getElementById("my-charts11p")
      );
      let data = this.data;
      this.chartDom.setOption({
        tooltip: {
          show: false,
          trigger: "item",
          // formatter: "{d}%)",
        },

        itemStyle: {},
        series: [
          {
            type: "pie",
            radius: [0, 80],
            center: ["50%", "40%"],
            roseType: "radius",
            itemStyle: {
              borderRadius: 5,
            },
            label: {
              show: true,
              position: "inner",
              formatter: "{d}%)",
              fontSize: 12, //文字的字体大小
            },
            emphasis: {
              label: {
                show: true,
              },
            },

            data: data,
          },
        ],
      });
    },

    drawChartss() {
      this.chartDom = this.$echarts.init(
        document.getElementById("my-charts11pHQY")
      );
      const dataw = [];
      this.data.forEach((item) => {
        dataw.push(item.value);
      });

      this.chartDom.setOption({
        xAxis: {
          //  show:false,
          type: "category",
          data: ["住宅", "商业", "写字楼", "别墅", "公寓"],
          axisLabel: {
            color: "#fff",
            interval: 0,
          },
          textStyle: {
            fontSize: 12, //更改坐标轴文字大小
          },
          axisTick: {
            //x轴刻度线
            show: false,
          },
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "rgba(0,0,0,0)",
            },
          },
        },
        yAxis: {
          show: false,
          axisTick: {
            //x轴刻度线
            show: false,
          },
          type: "value",
        },
        series: [
          {
            data: dataw,
            type: "bar",
            barWidth: "40%",
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorlist = [
                    "#31FBFB",
                    "#AAFFF3",
                    "#7D00FB",
                    "#9E6FEF",
                    "#84D480",
                  ];
                  return colorlist[params.dataIndex];
                },
              },
            },
          },
        ],
        grid: {
          top: "10%", // 等价于 y: '16%'
          left: "-16%",
          right: "0%",
          bottom: "30%",
          containLabel: true,
        },
      });
    },
  },
  mounted() {
    this.drawCharts();
    this.drawChartss();
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
        console.log(this.data);
        this.data = HQYcenterTopTotal[this.province];
        this.drawCharts();
        this.drawChartss();
      },
    },
  },
};
</script>

<style scoped lang="less">
.province_left_one {
  width: 100%;
  height: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  .province_top {
    // height: 60%;
    // background: darkcyan;
    width: 100%;
    .province_top_content {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      .province_top_item {
        display: flex;
        align-items: center;
        padding: 20px 0;
        width: 50%;
        .title {
          padding-left: 10px;
          .guanli {
            font-size: 12px;
            color: #ffff;
          }
          .nuber {
            font-size: 22px;
            color: #ffff;
            padding-top: 5px;
          }
        }
      }
    }
  }

  .province_bootoom {
    // background: salmon;
    flex: 1;
    display: flex;
    .province_bootoom_title {
      font-size: 20px;
      color: #fff;
    }
    .province_bootoom_left {
      width: 50%;
      // height: 100%;
      .province_bootoom_wcb {
        height: 100%;
        width: 100%;
        // background: palegoldenrod;
      }
      // background: olive;
    }
    .province_bootoom_right {
      height: 100%;
      width: 50%;
      .province_bootoom_wcb {
        height: 100%;
        width: 100%;
        // background: palegoldenrod;
      }
    }
  }
}
</style>
