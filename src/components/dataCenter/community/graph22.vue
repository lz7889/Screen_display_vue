<template>
  <div class="contents">
    <div class="item1">
      <div style="text-align: center;">
        <img src="../../../assets/img/DataCenter/a11.png" width="90" height="90" alt="" />
      </div>
      <div class="item_s item_ss">男性住户：{{ nan }}</div>
      <div class="item_s">占比：{{ percentage1 }}%</div>
    </div>
    <div class="item"></div>
    <div class="item1">
      <div style="text-align: center;">
        <img src="../../../assets/img/DataCenter/a1.png" width="90" height="90" alt="" />
      </div>
      <div class="item_s item_ss">女性住户：{{ nv }}</div>
      <div class="item_s">占比：{{ percentage2 }}%</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      nan: 6,
      nv: 516,
    };
  },
  created() {
    this.changeTiming();
  },
  methods: {
    nuber11() {
      this.nan += Math.floor(Math.random() * 10 + 1);
      this.nv += Math.floor(Math.random() * 10 + 1);
    },
    changeTiming() {
      this.dataCenterTimerhy = setInterval(() => {
        this.nuber11();
      }, 3000);
    },
  },
  computed: {
    percentage1() {
      let a = (this.nan / (this.nan + this.nv)) * 100;
      return a.toFixed(2);
    },

    percentage2() {
      let a = (this.nv / (this.nv + this.nan)) * 100;
      return a.toFixed(2);
    },
  },
  destroyed() {
    clearInterval(this.dataCenterTimerhy);
  },
};
</script>

<style scoped lang="less">
.contents {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 31px;
  // background: #000;
  .item {
    width: 10%;
  }
  .item1 {
    width: 64%;
    height: 90%;
    background: rgba(27, 102, 241, 0.1);
    padding: 16px 27px;
    .item_s {
      text-align: center;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
    }
    .item_ss {
      padding: 10px 0;
    }
  }
}
</style>
