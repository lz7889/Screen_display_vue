<template>
  <div class="to_fix">
    <div class="to_fix_content">
      <div class="to_fix_1">
        <img src="../../../assets/img/DataCenter/iOS.png" alt="" />
        <div class="aa">ios用户：{{ ios }}</div>
        <div>占比：{{ percentage2 }}%</div>
      </div>
      <div class="to_fix_2">
        <img src="../../../assets/img/DataCenter/andar.png" alt="" />
        <div class="aa">安卓用户：{{ Android }}</div>
        <div>占比：{{ percentage1 }}%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      Android: 2999,
      ios: 3681,
      a: "",
      i: "",
    };
  },
  created() {
    this.changeTiming();
  },
  methods: {
    nuber1() {
      this.Android += Math.floor(Math.random() * 10 + 1);
      this.ios += Math.floor(Math.random() * 10 + 1);
    },
    changeTiming() {
      this.dataCenterTimerhqy = setInterval(() => {
        this.nuber1();
      }, 5000);
    },
  },
  computed: {
    percentage1() {
      let a = (this.Android / (this.Android + this.ios)) * 100;
      return a.toFixed(2);
    },

    percentage2() {
      let a = (this.ios / (this.Android + this.ios)) * 100;
      return a.toFixed(2);
    },
  },
  destroyed() {
    clearInterval(this.dataCenterTimerhqy);
  },
};
</script>

<style scoped lang="less">
.to_fix {
  // background: #000;
  width: 100%;
  height: 100%;
  margin-top: 30px;

  .to_fix_content {
    margin: auto;
    width: 80%;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
    .to_fix_1 {
      div {
        text-align: center;
      }
      .aa {
        padding: 8px 0 8px 0;
      }
    }
    .to_fix_2 {
      div {
        text-align: center;
      }
      .aa {
        padding: 8px 0 8px 0;
      }
    }
  }
}
</style>
