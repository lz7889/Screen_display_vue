<template>
  <div class="enviroment">
    <div class="evment">
      <iframe
        width="160"
        scrolling="no"
        height="60"
        frameborder="0"
        allowtransparency="true"
        src="https://i.tianqi.com?c=code&id=86&color=%23FFFFFF&icon=1&site=12"
      ></iframe>
    </div>
    <div class="eitmee">
      <div class="a">
        <span class="a1">46%</span>
        <span class="a2">36㎎/m³</span>
      </div>
      <div class="b">
        <span class="b1">湿度</span>
        <span class="b2">PM2.5</span>
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
.enviroment {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .evment {
    width: 50%;
    // background: orange;sw
    padding-top: 20px;
    // margin: auto;
    /deep/.weather span {
      padding: 0 !important;
    }
  }
  .eitmee {
    // background: palegoldenrod;
    flex: 1;
    font-size: 13px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
    // margin: auto;
    text-align: center;
    border-left: 1px dashed rgba(255, 255, 255, 0.3);
    .a {
      padding-top: 25px;
      color: rgba(2, 247, 248, 1);
      .a1 {
        padding-right: 30px;
      }
    }

    .b {
      padding: 10px 0;
      .b1 {
        padding-right: 30px;
      }
    }
  }
}
</style>
