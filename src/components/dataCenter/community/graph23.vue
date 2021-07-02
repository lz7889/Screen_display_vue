<template>
  <div class="to_tree">
    <div id="my-chartss_1">
      <div>
        <el-progress color="rgba(0, 180, 255, 1)" type="circle" :stroke-width="15" stroke-linecap="butt" :percentage="60"></el-progress>
        <div class="kais">APP开锁</div>
      </div>
    </div>
    <div id="my-chartss_2">
      <div>
        <el-progress color="rgba(3, 225, 227, 1)" type="circle" :stroke-width="15" stroke-linecap="butt" :percentage="60"></el-progress>
        <div class="kais">指纹锁</div>
      </div>
    </div>
    <div id="my-chartss_3">
      <div>
        <el-progress color="rgba(254, 81, 101, 1)" type="circle" :stroke-width="15" stroke-linecap="butt" :percentage="20"></el-progress>
        <div class="kais">密码锁</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="less">
.to_tree {
  // background: pink;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  div {
    .kais {
      text-align: center;
      padding: 20px 0;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
    }
  }
  /deep/.el-progress__text {
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
  }
  #my-chartss_1 {
    /deep/.el-progress-circle__track {
      stroke: rgba(0, 180, 255, 0.1);
    }
  }
  #my-chartss_2 {
    /deep/.el-progress-circle__track {
      stroke: rgba(3, 225, 227, 0.1);
    }
  }
  #my-chartss_3 {
    /deep/.el-progress-circle__track {
      stroke: rgba(254, 81, 101, 0.1);
    }
  }
}
</style>
