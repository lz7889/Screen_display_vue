<template>
  <div>
    <!-- 第一排 -->
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content">
          <border-box title="人口结构分析">
            <community-graph11 />
          </border-box>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <border-box title="社区总览">
            <community-graph12 />
          </border-box>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <border-box title="用户活跃统计">
            <community-graph-13 />
          </border-box>
        </div>
      </el-col>
    </el-row>
    <!-- 第二排 -->
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content">
          <border-box title="人口流入流出分析">
            <community-graph21 />
          </border-box>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <border-box title="住户性别统计">
            <community-graph22 />
          </border-box>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <border-box title="门禁类型统计">
            <community-graph23 />
          </border-box>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <border-box title="使用设备统计">
            <community-graph24 />
          </border-box>
        </div>
      </el-col>
    </el-row>
    <!-- 第三排 -->
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content">
          <border-box title="入住情况统计">
            <community-graph31 />
          </border-box>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <border-box title="流量使用情况统计(GB)">
            <community-graph32 />
          </border-box>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <border-box title="服务工单趋势">
            <community-graph33 />
          </border-box>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content">
          <border-box title="投票存证统计">
            <community-graph34 />
          </border-box>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import borderBox from "@/components/dataCenter/borderBox";
import CommunityGraph11 from "@/components/dataCenter/community/graph11";
import CommunityGraph12 from "@/components/dataCenter/community/graph12";
import CommunityGraph13 from "@/components/dataCenter/community/graph13";
import CommunityGraph21 from "@/components/dataCenter/community/graph21";
import CommunityGraph22 from "@/components/dataCenter/community/graph22";
import CommunityGraph23 from "@/components/dataCenter/community/graph23";
import CommunityGraph24 from "@/components/dataCenter/community/graph24";
import CommunityGraph31 from "@/components/dataCenter/community/graph31";
import CommunityGraph32 from "@/components/dataCenter/community/graph32";
import CommunityGraph33 from "@/components/dataCenter/community/graph33";
import CommunityGraph34 from "@/components/dataCenter/community/graph34";

export default {
  components: {
    borderBox,
    CommunityGraph11,
    CommunityGraph12,
    CommunityGraph13,
    CommunityGraph21,
    CommunityGraph22,
    CommunityGraph23,
    CommunityGraph24,
    CommunityGraph31,
    CommunityGraph32,
    CommunityGraph33,
    CommunityGraph34,
  },
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
  height: calc((100vh - 330px) / 3);
  // background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
