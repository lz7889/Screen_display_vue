<template>
  <div class="bg" style="height: 100%; width: 100%">
    <div class="top">
      <Top :active="2">社区级综合服务平台</Top>
    </div>
    <div class="content">
      <home-bar />
      <menu-bar current="servicePlatform" />
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content left">
            <border-box title="社区概况">
              <service-left-graph1 />
            </border-box>
          </div>
          <div class="grid-content left">
            <border-box title="社区消防">
              <service-left-graph2 />
            </border-box>
          </div>
          <div class="grid-content left">
            <border-box title="社区公告">
              <service-left-graph3 />
            </border-box>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content center-top">
            <service-center-graph1 />
          </div>
          <div class="grid-content center-bottom">
            <border-box title="重点监控视频">
              <service-center-graph2 />
            </border-box>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content right-top">
            <border-box title="报警与事件">
              <service-right-graph1 />
            </border-box>
          </div>
          <div class="grid-content right-bottom">
            <border-box title="社区安防">
              <service-right-graph2 />
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
import homeBar from "@/components/servicePlatform/home/homeBar";
import borderBox from "@/components/servicePlatform/borderBox";
import serviceLeftGraph1 from "@/components/servicePlatform/home/leftGraph1";
import serviceLeftGraph2 from "@/components/servicePlatform/home/leftGraph2";
import serviceLeftGraph3 from "@/components/servicePlatform/home/leftGraph3";
import serviceCenterGraph1 from "@/components/servicePlatform/home/centerGraph1";
import serviceCenterGraph2 from "@/components/servicePlatform/home/centerGraph2";
import serviceRightGraph1 from "@/components/servicePlatform/home/rightGraph1";
import serviceRightGraph2 from "@/components/servicePlatform/home/rightGraph2";

export default {
  components: {
    Top,
    borderBox,
    menuBar,
    homeBar,
    serviceLeftGraph1,
    serviceLeftGraph2,
    serviceLeftGraph3,
    serviceCenterGraph1,
    serviceCenterGraph2,
    serviceRightGraph1,
    serviceRightGraph2,
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
  .left {
    height: calc((100vh - 230px) * 0.33);
  }
  .center-top {
    height: calc((100vh - 210px) * 0.73);
  }
  .center-bottom {
    height: calc((100vh - 210px) * 0.26);
  }
  .right-top {
    height: calc((100vh - 210px) * 0.33);
  }
  .right-bottom {
    height: calc((100vh - 210px) * 0.66);
  }
}
</style>
