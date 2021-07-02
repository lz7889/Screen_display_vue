<template>
  <div class="bg" style="height: 100%; width: 100%">
    <div class="top">
      <Top :active="2">社区级综合服务平台</Top>
    </div>
    <div class="content">
      <menu-bar current="car" />
      <show-bar />
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content left-top">
            <border-box title="车辆信息">
              <car-left-graph1 />
            </border-box>
          </div>
          <div class="grid-content left-bottom">
            <border-box title="车辆出入记录">
              <car-left-graph2 />
            </border-box>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content center-top">
            <car-center-graph1 />
          </div>
          <div class="grid-content center-bottom">
            <border-box title="订单统计">
              <car-center-graph2 />
            </border-box>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content right-top">
            <border-box title="车流统计">
              <car-right-graph1 />
            </border-box>
          </div>
          <div class="grid-content right-bottom">
            <border-box title="报警数据">
              <car-right-graph2 />
            </border-box>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top";
import menuBar from "@/components/servicePlatform/menuBar";
import showBar from "@/components/servicePlatform/showBar";
import borderBox from "@/components/servicePlatform/borderBox";
import carLeftGraph1 from "@/components/servicePlatform/car/leftGraph1";
import carLeftGraph2 from "@/components/servicePlatform/car/leftGraph2";
import carCenterGraph1 from "@/components/servicePlatform/car/centerGraph1";
import carCenterGraph2 from "@/components/servicePlatform/car/centerGraph2";
import carRightGraph1 from "@/components/servicePlatform/car/rightGraph1";
import carRightGraph2 from "@/components/servicePlatform/car/rightGraph2";

export default {
  components: {
    Top,
    borderBox,
    menuBar,
    showBar,
    carLeftGraph1,
    carLeftGraph2,
    carCenterGraph1,
    carCenterGraph2,
    carRightGraph1,
    carRightGraph2,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style scoped lang="less">
.bg {
  width: 100%;
  height: 100%;
  background: url("../../assets/img/DataCenter/bg.png") no-repeat;
  background-size: cover;
}
.content {
  margin: 30px 50px 0;
  .grid-content {
    margin-bottom: 20px;
  }
  .left-top,
  .right-top {
    height: calc((100vh - 210px) * 0.32);
  }
  .left-bottom,
  .right-bottom {
    height: calc((100vh - 210px) * 0.67);
  }
  .center-top {
    height: calc((100vh - 210px) * 0.73);
  }
  .center-bottom {
    height: calc((100vh - 210px) * 0.26);
  }
}
</style>
