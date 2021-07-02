<template>
  <div class="content">
    <!-- 第一排 -->
    <el-row :gutter="40">
      <el-col :span="5">
        <div class="grid-content first-row">
          <border-box>
            <operate-graph11 />
          </border-box>
        </div>
      </el-col>
      <el-col :span="13">
        <div class="grid-content first-row">
          <operate-graph12 />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content first-row">
          <border-box title="Smart China AI">
            <operate-graph13 />
          </border-box>
        </div>
      </el-col>
    </el-row>
    <!-- 第二排 -->
    <el-row :gutter="40">
      <el-col :span="12">
        <div class="grid-content second-row">
          <border-box title="重点监控视频">
            <operate-graph21 />
          </border-box>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content second-row">
          <border-box title="Smart China 存证链">
            <operate-graph22 />
          </border-box>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content second-row">
          <border-box>
            <operate-graph23 />
          </border-box>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import borderBox from "@/components/operateCenter/nationwide/borderBox";
import OperateGraph11 from "@/components/operateCenter/nationwide/graph11";
import OperateGraph12 from "@/components/operateCenter/nationwide/graph12";
import OperateGraph13 from "@/components/operateCenter/nationwide/graph13";
import OperateGraph21 from "@/components/operateCenter/nationwide/graph21";
import OperateGraph22 from "@/components/operateCenter/nationwide/graph22";
import OperateGraph23 from "@/components/operateCenter/nationwide/graph23";

export default {
  components: {
    borderBox,
    OperateGraph11,
    OperateGraph12,
    OperateGraph13,
    OperateGraph21,
    OperateGraph22,
    OperateGraph23,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style scoped lang="less">
.content {
  margin: 30px 50px 0;
  .grid-content {
    // height: 266px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .first-row {
    height: calc((100vh - 200px) * 0.7);
  }
  .second-row {
    height: calc((100vh - 200px) * 0.3);
  }
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
