<template>
  <div class="bg" style="height: 100%; width: 100%">
    <div class="top">
      <Top :active="2">社区级综合服务平台</Top>
    </div>
    <div class="content">
      <menu-bar current="population" />
      <show-bar />
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content left">
            <border-box title="人员信息">
              <population-left-graph1 />
            </border-box>
          </div>
          <div class="grid-content left">
            <border-box title="人员分析">
              <population-left-graph2 />
            </border-box>
          </div>
          <div class="grid-content left">
            <border-box title="报警数据">
              <population-left-graph3 />
            </border-box>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content center-top">
            <population-center-graph1 />
          </div>
          <div class="grid-content center-bottom">
            <border-box title="人流统计">
              <population-center-graph2 />
            </border-box>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content right">
            <border-box title="人员出入记录">
              <population-right-graph1 />
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
import populationLeftGraph1 from "@/components/servicePlatform/population/leftGraph1";
import populationLeftGraph2 from "@/components/servicePlatform/population/leftGraph2";
import populationLeftGraph3 from "@/components/servicePlatform/population/leftGraph3";
import populationCenterGraph1 from "@/components/servicePlatform/population/centerGraph1";
import populationCenterGraph2 from "@/components/servicePlatform/population/centerGraph2";
import populationRightGraph1 from "@/components/servicePlatform/population/rightGraph1";
export default {
  components: {
    Top,
    borderBox,
    menuBar,
    showBar,
    populationLeftGraph1,
    populationLeftGraph2,
    populationLeftGraph3,
    populationCenterGraph1,
    populationCenterGraph2,
    populationRightGraph1,
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
  .left {
    height: calc((100vh - 230px) * 0.33);
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
