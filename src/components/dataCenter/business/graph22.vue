<template>
  <div class="graph_22">
    <div class="graph_1">
      <div class="titles titles1">在网IOT设备</div>
      <div class="titles titles2">{{ nueber1s }}</div>
      <div style="width:100%; height:132px">
        <Chart1 :son1="totle1"></Chart1>
      </div>
      <div class="titles titles3 titles4">
        活跃社区
        <span style="color: rgba(26, 92, 215, 1)">{{ comment1 }}个</span>
      </div>
      <div class="titles titles3">
        资源数 <span style="color: rgba(26, 92, 215, 1)"> {{ totle }}个</span>
      </div>
    </div>
    <div class="graph_1">
      <div class="titles titles1">在网IOT设备</div>
      <div class="titles titles2">{{ nueber2s }}</div>
      <div style="width:100%; height:132px">
        <Chart2 :son2="totle2"></Chart2>
      </div>
      <div class="titles titles3 titles4">
        活跃商户<span style="color: rgba(2, 253, 253, 1)"
          >{{ comment2 }}个</span
        >
      </div>
      <div class="titles titles3">
        资源数 <span style="color: rgba(2, 253, 253, 1)"> {{ totle }}个</span>
      </div>
    </div>
    <div class="graph_1">
      <div class="titles titles1">在网IOT设备</div>
      <div class="titles titles2">{{ nueber3s }}</div>
      <div style="width:100%; height:132px">
        <Chart3 :son3="totle3"></Chart3>
      </div>
      <div class="titles titles3 titles4">
        活跃用户数
        <span style="color:rgba(214, 154, 32, 1)">{{ comment3 }}个</span>
      </div>
      <div class="titles titles3">
        资源数 <span style="color: rgba(214, 154, 32, 1)">{{ totle }}个</span>
      </div>
    </div>

    <div class="graph_1">
      <div class="titles titles1">在网IOT设备</div>
      <div class="titles titles2">
        {{ nueber4s }}
      </div>
      <div style="width:100%; height:132px">
        <Chart4 :son4="totle4"></Chart4>
      </div>
      <div class="titles titles3 titles4">
        智能活跃设备
        <span style="color: rgba(87, 246, 111, 1)">{{ comment4 }}个</span>
      </div>
      <div class="titles titles3">
        资源数 <span style="color: rgba(87, 246, 111, 1)"> {{ totle }}个</span>
      </div>
    </div>
  </div>
</template>

<script>
import Chart1 from "@/components/Chart/Chart_1";
import Chart2 from "@/components/Chart/Chart_2";
import Chart3 from "@/components/Chart/Chart_3";
import Chart4 from "@/components/Chart/Chart_4";

export default {
  components: {
    Chart1,
    Chart2,
    Chart3,
    Chart4,
  },
  data() {
    return {
      nueber1: 5499,
      nueber2: 7558,
      nueber3: 5468,
      nueber4: 1558,
      comment1: 2247,
      comment2: 1487,
      comment3: 1967,
      comment4: 3007,
      totle: 5000,
      msg1: 0,
    };
  },
  methods: {
    shuzi() {
      this.comment1 += Math.floor(Math.random() * 10 + 1);
      this.comment2 += Math.floor(Math.random() * 10 + 1);
      this.comment3 += Math.floor(Math.random() * 10 + 1);
      this.comment4 += Math.floor(Math.random() * 10 + 1);
    },
    shuzis() {
      this.nueber1 += Math.floor(Math.random() * 10 + 1);
      this.nueber2 += Math.floor(Math.random() * 10 + 1);
      this.nueber3 += Math.floor(Math.random() * 10 + 1);
      this.nueber4 += Math.floor(Math.random() * 10 + 1);
    },

    changeTiming() {
      this.dataCenterTimerhy = setInterval(() => {
        this.shuzi();
      }, 6000);
    },
    changeTimings() {
      this.dataCenterTimerhys = setInterval(() => {
        this.shuzis();
      }, 4500);
    },
  },

  computed: {
    nueber1s() {
      let a = parseFloat(this.nueber1).toLocaleString();
      return a;
    },
    nueber2s() {
      let a = parseFloat(this.nueber2).toLocaleString();
      return a;
    },
    nueber3s() {
      let a = parseFloat(this.nueber3).toLocaleString();
      return a;
    },
    nueber4s() {
      let a = parseFloat(this.nueber4).toLocaleString();
      return a;
    },
    comment1s() {
      let a = parseFloat(this.comment1).toLocaleString();
      return a;
    },
    comment2s() {
      let a = parseFloat(this.comment2).toLocaleString();
      return a;
    },
    comment3s() {
      let a = parseFloat(this.comment3).toLocaleString();
      return a;
    },
    comment4s() {
      let a = parseFloat(this.comment4).toLocaleString();
      return a;
    },

    totle1() {
      let a = (this.comment1 / this.totle) * 100;
      return a.toFixed(2);
    },
    totle2() {
      let a = (this.comment2 / this.totle) * 100;
      return a.toFixed(2);
    },
    totle3() {
      let a = (this.comment3 / this.totle) * 100;
      return a.toFixed(2);
    },
    totle4() {
      let a = (this.comment4 / this.totle) * 100;
      return a.toFixed(2);
    },
  },

  destroyed() {
    clearInterval(this.dataCenterTimerhy);
    clearInterval(this.dataCenterTimerhys);
  },
  created() {
    this.changeTiming();
    this.changeTimings();
  },
};
</script>

<style scoped lang="less">
.graph_22 {
  width: 100%;
  height: 100%;
  // background: palegreen;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  .graph_1 {
    width: 24%;
    // background: orange;
    .titles {
      text-align: center;
    }
    .titles1 {
      height: 14px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
    }

    .titles2 {
      font-size: 34px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      padding: 15px 0 20px 0;
    }
    .titles3 {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
    }

    .titles4 {
      padding: 26px 0px 14px 0;
    }
  }
}
</style>
