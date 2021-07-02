<template>
  <div class="content">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content left-top">
          <border-box title="项目数据">
            <operate-left-graph1 :province="province" />
          </border-box>
        </div>
        <div class="grid-content left-bottom">
          <border-box title="访问重点">
            <operate-left-graph2 :province="province" />
          </border-box>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content center-top">
          <operate-center-graph1 :province="province" />
        </div>
        <div class="grid-content center-bottom">
          <border-box>
            <operate-center-graph2 :province="province" />
          </border-box>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content right-top">
          <border-box title="交易数据">
            <operate-right-graph1 :province="province" />
          </border-box>
        </div>
        <div class="grid-content right-bottom">
          <border-box title="告警数据">
            <operate-right-graph2 :province="province" />
          </border-box>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import borderBox from "@/components/operateCenter/province/borderBox";
import operateLeftGraph1 from "@/components/operateCenter/province/leftGraph1";
import operateLeftGraph2 from "@/components/operateCenter/province/leftGraph2";
import operateCenterGraph1 from "@/components/operateCenter/province/centerGraph1";
import operateCenterGraph2 from "@/components/operateCenter/province/centerGraph2";
import operateRightGraph1 from "@/components/operateCenter/province/rightGraph1";
import operateRightGraph2 from "@/components/operateCenter/province/rightGraph2";

export default {
  components: {
    borderBox,
    operateLeftGraph1,
    operateLeftGraph2,
    operateCenterGraph1,
    operateCenterGraph2,
    operateRightGraph1,
    operateRightGraph2,
  },
  data() {
    return {
      province: this.$route.params.province,
    };
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "updataRoute",
  },
  methods: {
    updataRoute() {
      this.province = this.$route.params.province;
    },
  },
};
</script>

<style scoped lang="less">
.content {
  padding: 30px 50px 0;
  height: calc(100vh - 160px);
  background: url("../../assets/img/OperateCenter/bg2.png") no-repeat;
  background-size: cover;
  .grid-content {
    margin-bottom: 20px;
  }
  .left-top {
    height: calc((100vh - 210px) * 0.67);
  }
  .left-bottom {
    height: calc((100vh - 210px) * 0.33);
  }
  .center-top {
    height: calc((100vh - 210px) * 0.67);
  }
  .center-bottom {
    height: calc((100vh - 210px) * 0.33);
  }
  .right-top {
    height: calc((100vh - 210px) * 0.56);
  }
  .right-bottom {
    height: calc((100vh - 210px) * 0.44);
  }
}
</style>
