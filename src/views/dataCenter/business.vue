<template>
  <div>
    <!-- 第一排 -->
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content">
          <border-box title="Smart China AI 开放平台综合能力趋势">
            <business-graph11 />
          </border-box>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <business-graph12 />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <border-box title="告警预警统计">
            <business-graph13 />
          </border-box>
        </div>
      </el-col>
    </el-row>
    <!-- 第二排 -->
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content">
          <border-box title="主动服务综合排行">
            <business-graph21 />
          </border-box>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <border-box title="资源统计">
            <business-graph22 />
          </border-box>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <border-box title="热点服务排行">
            <business-graph23 />
          </border-box>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import borderBox from "@/components/dataCenter/borderBox";
import BusinessGraph11 from "@/components/dataCenter/business/graph11";
import BusinessGraph12 from "@/components/dataCenter/business/graph12";
import BusinessGraph13 from "@/components/dataCenter/business/graph13";
import BusinessGraph21 from "@/components/dataCenter/business/graph21";
import BusinessGraph22 from "@/components/dataCenter/business/graph22";
import BusinessGraph23 from "@/components/dataCenter/business/graph23";

export default {
  components: { borderBox, BusinessGraph11, BusinessGraph12, BusinessGraph13, BusinessGraph21, BusinessGraph22, BusinessGraph23 },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="less">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.grid-content {
  // height: 266px;
  height: calc((100vh - 310px) / 2);
  // background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
