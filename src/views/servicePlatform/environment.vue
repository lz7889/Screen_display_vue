<template>
  <div class="bg" style="height: 100%; width: 100%">
    <div class="top">
      <Top :active="2">社区级综合服务平台</Top>
    </div>
    <div class="content">
      <menu-bar current="environment" />
      <show-bar />
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content left-top">
            <border-box title="计量设备">
              <environment-left-graph1 />
            </border-box>
          </div>
          <div class="grid-content left-middle">
            <border-box title="能耗分析">
              <environment-left-graph2 />
            </border-box>
          </div>
          <div class="grid-content left-bottom">
            <border-box title="能耗数据">
              <environment-left-graph3 />
            </border-box>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content center-top">
            <environment-center-graph1 />
          </div>
          <div class="grid-content center-bottom">
            <border-box title="实时能耗">
              <environment-center-graph2 />
            </border-box>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content right-top">
            <border-box title="环境监测">
              <environment-right-graph1 />
            </border-box>
          </div>
          <div class="grid-content right-bottom">
            <border-box title="报警数据">
              <environment-right-graph2 />
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
import environmentLeftGraph1 from "@/components/servicePlatform/environment/leftGraph1";
import environmentLeftGraph2 from "@/components/servicePlatform/environment/leftGraph2";
import environmentLeftGraph3 from "@/components/servicePlatform/environment/leftGraph3";
import environmentCenterGraph1 from "@/components/servicePlatform/environment/centerGraph1";
import environmentCenterGraph2 from "@/components/servicePlatform/environment/centerGraph2";
import environmentRightGraph1 from "@/components/servicePlatform/environment/rightGraph1";
import environmentRightGraph2 from "@/components/servicePlatform/environment/rightGraph2";

export default {
  components: {
    Top,
    borderBox,
    menuBar,
    showBar,
    environmentLeftGraph1,
    environmentLeftGraph2,
    environmentLeftGraph3,
    environmentCenterGraph1,
    environmentCenterGraph2,
    environmentRightGraph1,
    environmentRightGraph2,
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
  .left-top {
    height: calc((100vh - 230px) * 0.31);
  }
  .left-middle {
    height: calc((100vh - 230px) * 0.33);
  }
  .left-bottom {
    height: calc((100vh - 230px) * 0.35);
  }
  .center-top {
    height: calc((100vh - 210px) * 0.73);
  }
  .center-bottom {
    height: calc((100vh - 210px) * 0.26);
  }
  .right-top {
    height: calc((100vh - 210px) * 0.17);
  }
  .right-bottom {
    height: calc((100vh - 210px) * 0.82);
  }
}
</style>
