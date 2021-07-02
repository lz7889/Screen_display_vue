<template>
  <div class="bg" style="height: 100%; width: 100%">
    <div class="top">
      <Top :active="2">社区级综合服务平台</Top>
    </div>
    <div class="content">
      <show-bar />
      <menu-bar current="fire-protection" />
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content left-top">
            <border-box title="监测设备">
              <fireprotection-left-graph1 />
            </border-box>
          </div>
          <div class="grid-content left-middle">
            <border-box title="报警趋势">
              <fireprotection-left-graph2 />
            </border-box>
          </div>
          <div class="grid-content left-bottom">
            <border-box title="报警数据">
              <fireprotection-left-graph3 />
            </border-box>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content center-top">
            <fireprotection-center-graph1 />
          </div>
          <div class="grid-content center-bottom">
            <border-box title="报警事件统计">
              <fireprotection-center-graph2 />
            </border-box>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content right">
            <border-box title="报警数据">
              <fireprotection-right-graph1 />
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
import fireprotectionLeftGraph1 from "@/components/servicePlatform/fireProtection/leftGraph1";
import fireprotectionLeftGraph2 from "@/components/servicePlatform/fireProtection/leftGraph2";
import fireprotectionLeftGraph3 from "@/components/servicePlatform/fireProtection/leftGraph3";
import fireprotectionCenterGraph1 from "@/components/servicePlatform/fireProtection/centerGraph1";
import fireprotectionCenterGraph2 from "@/components/servicePlatform/fireProtection/centerGraph2";
import fireprotectionRightGraph1 from "@/components/servicePlatform/fireProtection/rightGraph1";
export default {
  components: {
    Top,
    borderBox,
    menuBar,
    showBar,
    fireprotectionLeftGraph1,
    fireprotectionLeftGraph2,
    fireprotectionLeftGraph3,
    fireprotectionCenterGraph1,
    fireprotectionCenterGraph2,
    fireprotectionRightGraph1,
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
    height: calc((100vh - 230px) * 0.2);
  }
  .left-middle {
    height: calc((100vh - 230px) * 0.45);
  }
  .left-bottom {
    height: calc((100vh - 230px) * 0.34);
  }
  .center-top {
    height: calc((100vh - 210px) * 0.73);
  }
  .center-bottom {
    height: calc((100vh - 210px) * 0.26);
  }
  .right {
    height: calc(100vh - 198px);
  }
}
</style>
