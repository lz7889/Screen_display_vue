<template>
  <div class="warning-trend-box">
    <table class="top-table">
      <tr>
        <td>
          <div class="warning-num">125</div>
          <br />报警总数
        </td>
        <td rowspan="2" style="background-color: rgba(27, 102, 241, 0.1)">
          <div class="warning-not-handle">10</div>
          <br />报警未处理
        </td>
        <td>
          <div class="warning-num">38</div>
          <br />今日报警数
        </td>
      </tr>
      <tr>
        <td>
          <div class="warning-num">96.7%</div>
          <br />有效报警率
        </td>
        <td>
          <div class="warning-num">0</div>
          <br />今日故障数
        </td>
      </tr>
    </table>
    <div class="bottom-charts">
      <img
        src="../../../assets/img/servicePlatform/fire-protection/line.png"
        alt=""
      />
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
.warning-trend-box {
  height: 100%;
  width: 100%;
}
.top-table {
  height: 45%;
  width: 100%;
  margin-top: 20px;
  td {
    border: 1px solid rgba(26, 92, 215, 0.2);
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
  }
  .warning-num {
    display: inline-block;
    font-size: 20px;
    margin-bottom: 8px;
  }
  .warning-not-handle {
    font-size: 60px;
    font-weight: 400;
    color: #fe5165;
    line-height: 36px;
    margin-bottom: 18px;
  }
}
.bottom-charts {
  margin-top: 10px;
  height: 43%;
  border: 1px solid rgba(26, 92, 215, 0.2);
  position: relative;
  img {
    width: 100%;
    position: absolute;
    bottom: 0;
    // vertical-align: bottom;
  }
}
</style>
