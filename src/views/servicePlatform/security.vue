<template>
  <div class="bg" style="height: 100%; width: 100%">
    <div class="top">
      <Top :active="2">社区级综合服务平台</Top>
    </div>
    <div class="content">
      <show-bar />
      <menu-bar current="security" />
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content left-top">
            <border-box title="报警数据">
              <security-left-graph1 />
            </border-box>
          </div>
          <div class="grid-content left-bottom">
            <border-box title="实时监控画面">
              <security-left-graph2 />
            </border-box>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content center-top">
            <security-center-graph1 />
          </div>
          <div class="grid-content center-bottom">
            <border-box title="报警事件统计">
              <security-center-graph2 />
            </border-box>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content right">
            <border-box title="报警数据">
              <security-right-graph1 />
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
import securityLeftGraph1 from "@/components/servicePlatform/security/leftGraph1";
import securityLeftGraph2 from "@/components/servicePlatform/security/leftGraph2";
import securityCenterGraph1 from "@/components/servicePlatform/security/centerGraph1";
import securityCenterGraph2 from "@/components/servicePlatform/security/centerGraph2";
import securityRightGraph1 from "@/components/servicePlatform/security/rightGraph1";
export default {
  components: {
    Top,
    borderBox,
    menuBar,
    showBar,
    securityLeftGraph1,
    securityLeftGraph2,
    securityCenterGraph1,
    securityCenterGraph2,
    securityRightGraph1,
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
    height: calc((100vh - 218px) * 0.2);
  }
  .left-bottom {
    height: calc((100vh - 218px) * 0.8);
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
