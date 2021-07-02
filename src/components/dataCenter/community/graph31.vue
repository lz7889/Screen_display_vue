<template>
  <div class="progress-content">
    <div class="progress-title">总入住户数：{{ chartData.totalhousehold }}</div>
    <el-progress class="progress-bar progress-bar1" :show-text="false" :stroke-width="22" :percentage="percentage1"></el-progress>
    <div class="progress-title">已住户数：{{ chartData.occupied }}</div>
    <el-progress class="progress-bar progress-bar2" :show-text="false" :stroke-width="22" :percentage="percentage2"></el-progress>
  </div>
</template>

<script>
import { getData31 } from "@/data/dataCenter.js";

export default {
  components: {},
  data() {
    return {
      chartData: getData31,
    };
  },
  computed: {
    percentage1() {
      return (this.chartData.totalhousehold / this.chartData.percentTotal) * 100;
    },
    percentage2() {
      return (this.chartData.occupied / this.chartData.percentTotal) * 100;
    },
  },
  mounted() {
    this.changeTiming();
  },
  methods: {
    changeNumber() {
      let totalhousehold = this.chartData.totalhousehold + Math.floor(Math.random() * 10 + 1);
      this.$set(this.chartData, "totalhousehold", totalhousehold);
      let occupied = this.chartData.occupied + Math.floor(Math.random() * 10 + 1);
      this.$set(this.chartData, "occupied", occupied);
    },
    changeTiming() {
      this.dataCenterTimer31 = setInterval(() => {
        this.changeNumber();
      }, 5000);
    },
  },
  destroyed() {
    clearInterval(this.dataCenterTimer31);
  },
};
</script>

<style scoped lang="less">
.progress-content {
  width: 100%;
  height: 100%;
}
.el-progress {
  width: 100%;
  /deep/ .el-progress-bar__outer {
    border-radius: 0;
    background-color: #0e2558;
    .el-progress-bar__inner {
      border-radius: 0;
    }
  }
}
.progress-title {
  margin-top: 32px;
}
.progress-bar {
  margin-top: 14px;
}
.progress-bar1 /deep/ .el-progress-bar__inner {
  background-color: unset;
  background-image: linear-gradient(to right, #1b66f1, #05b4fd) !important;
}
.progress-bar2 /deep/ .el-progress-bar__inner {
  background-color: unset;
  background-image: linear-gradient(to right, #326dce, #619dff) !important;
}
</style>
