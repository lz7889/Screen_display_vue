<template>
  <div class="bg" style="height: 100%; width: 100%">
    <div class="top">
      <Top :active="2">社区级综合服务平台</Top>
    </div>
    <div class="content">
      <menu-bar current="deposit-certificate" />
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content top">
            <deposit-certificate-top-graph />
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content left-middle">
            <border-box title="使用发起方分析">
              <deposit-certificate-middle-graph1 />
            </border-box>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content right-middle">
            <border-box title="电子签章合同类型">
              <deposit-certificate-middle-graph2 />
            </border-box>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content left-bottom">
            <border-box title="电子签章使用趋势">
              <deposit-certificate-bottom-graph1 />
            </border-box>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content right-bottom">
            <border-box title="存证链使用分析">
              <deposit-certificate-bottom-graph2 />
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
import borderBox from "@/components/servicePlatform/borderBox";
import depositCertificateTopGraph from "@/components/servicePlatform/depositCertificate/topGraph";
import depositCertificateMiddleGraph1 from "@/components/servicePlatform/depositCertificate/middleGraph1";
import depositCertificateMiddleGraph2 from "@/components/servicePlatform/depositCertificate/middleGraph2";
import depositCertificateBottomGraph1 from "@/components/servicePlatform/depositCertificate/bottomGraph1";
import depositCertificateBottomGraph2 from "@/components/servicePlatform/depositCertificate/bottomGraph2";

export default {
  components: {
    Top,
    borderBox,
    menuBar,
    depositCertificateTopGraph,
    depositCertificateMiddleGraph1,
    depositCertificateMiddleGraph2,
    depositCertificateBottomGraph1,
    depositCertificateBottomGraph2,
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
  .service-menu-wapper {
    bottom: 3vh;
  }
  .grid-content {
    margin-bottom: 20px;
  }
  .top {
    height: calc((100vh - 210px) * 0.18);
  }
  .left-middle,
  .right-middle {
    height: calc((100vh - 210px) * 0.34);
  }
  .left-bottom,
  .right-bottom {
    height: calc((100vh - 210px) * 0.34);
  }
}
</style>
