<template>
  <div class="content-box">
    <div class="item-box" v-for="(item, index) in data" :key="index">
      <img :src="require(`../../../assets/img/DataCenter/${item.img}.png`)" alt="" />
      <div class="text">{{ item.text }}</div>
      <dv-digital-flop class="number" :config="item.number" />
    </div>
  </div>
</template>

<script>
import { getData12 } from "@/data/dataCenter.js";

export default {
  components: {},
  data() {
    return {
      data: getData12,
      dataCenterTimer12: "",
    };
  },
  mounted() {
    this.changeTiming();
  },
  methods: {
    changeTiming() {
      this.dataCenterTimer12 = setInterval(() => {
        this.changeNumber();
      }, 5000);
    },
    changeNumber() {
      this.data.forEach((item, index) => {
        if (index < 5) {
          item.number.number[0] += ++index;
          item.number = { ...item.number };
        }
      });
    },
  },
  destroyed() {
    clearInterval(this.dataCenterTimer12);
  },
};
</script>

<style scoped lang="less">
.content-box {
  margin: 0 48px;
  display: flex;
  justify-content: space-between;
  .item-box {
    margin-top: 30px;
    font-family: Microsoft YaHei;
    text-align: center;
    width: 125px;
    margin-left: 5px;
    margin-right: 5px;
    .text {
      margin-top: 8px;
      font-size: 14px;
    }
    .number {
      margin-top: 0px;
    }
  }
}
</style>
