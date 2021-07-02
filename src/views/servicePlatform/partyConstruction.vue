<template>
  <div class="bg" style="height: 100%; width: 100%">
    <div class="top">
      <Top :active="2">社区级综合服务平台</Top>
    </div>
    <div class="content">
      <!-- <show-bar /> -->
      <menu-bar current="party-construction" />
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content left1">
            <border-box title="实有人口">
              <partyconstruction-left-graph1 />
            </border-box>
          </div>
          <div class="grid-content left2">
            <border-box title="重点人员">
              <partyconstruction-left-graph2 />
            </border-box>
          </div>
          <div class="grid-content left3">
            <border-box title="特殊人群">
              <partyconstruction-left-graph3 />
            </border-box>
          </div>
          <div class="grid-content left4">
            <border-box title="法人机构">
              <partyconstruction-left-graph4 />
            </border-box>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content center-top">
            <partyconstruction-center-graph1 />
          </div>
          <div class="grid-content center-bottom">
            <border-box title="信息总览">
              <partyconstruction-center-graph2 />
            </border-box>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content right-top">
            <border-box title="党组织情况">
              <partyconstruction-right-graph1 />
            </border-box>
          </div>
          <div class="grid-content right-middle">
            <border-box title="事项概况">
              <partyconstruction-right-graph2 />
            </border-box>
          </div>
          <div class="grid-content right-bottom">
            <border-box title="风险患者多发地排名">
              <partyconstruction-right-graph3 />
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
// import showBar from "@/components/servicePlatform/showBar";
import borderBox from "@/components/servicePlatform/borderBox";
import partyconstructionLeftGraph1 from "@/components/servicePlatform/partyConstruction/leftGraph1";
import partyconstructionLeftGraph2 from "@/components/servicePlatform/partyConstruction/leftGraph2";
import partyconstructionLeftGraph3 from "@/components/servicePlatform/partyConstruction/leftGraph3";
import partyconstructionLeftGraph4 from "@/components/servicePlatform/partyConstruction/leftGraph4";
import partyconstructionCenterGraph1 from "@/components/servicePlatform/partyConstruction/centerGraph1";
import partyconstructionCenterGraph2 from "@/components/servicePlatform/partyConstruction/centerGraph2";
import partyconstructionRightGraph1 from "@/components/servicePlatform/partyConstruction/rightGraph1";
import partyconstructionRightGraph2 from "@/components/servicePlatform/partyConstruction/rightGraph2";
import partyconstructionRightGraph3 from "@/components/servicePlatform/partyConstruction/rightGraph3";

export default {
  components: {
    Top,
    borderBox,
    menuBar,
    partyconstructionLeftGraph1,
    partyconstructionLeftGraph2,
    partyconstructionLeftGraph3,
    partyconstructionLeftGraph4,
    partyconstructionCenterGraph1,
    partyconstructionCenterGraph2,
    partyconstructionRightGraph1,
    partyconstructionRightGraph2,
    partyconstructionRightGraph3,
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
  .left1 {
    height: calc((100vh - 250px) * 0.17);
  }
  .left2 {
    height: calc((100vh - 250px) * 0.22);
  }
  .left3 {
    height: calc((100vh - 250px) * 0.29);
  }
  .left4 {
    height: calc((100vh - 250px) * 0.31);
  }
  .center-top {
    height: calc((100vh - 210px) * 0.73);
  }
  .center-bottom {
    height: calc((100vh - 210px) * 0.26);
  }
  .right-top {
    height: calc((100vh - 230px) * 0.23);
  }
  .right-middle {
    height: calc((100vh - 230px) * 0.42);
  }
  .right-bottom {
    height: calc((100vh - 230px) * 0.34);
  }
}
</style>
