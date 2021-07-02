
<template>
  <div class="visited-row">
    <div class="visited-item" v-for="(item, index) in pageData" :key="index">
      <span class="visited-value">{{ item.value }}</span>
      <span class="line"></span>
      <span class="visited-text">{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
import { leftBottom } from "@/data/dataOperate.js";
export default {
  components: {},
  props: ["province"],
  data() {
    return {
      pageData: leftBottom[this.province],
    };
  },
  watch: {
    province: {
      handler: function () {
        this.pageData = leftBottom[this.province];
      },
    },
  },
  created() {},
  mounted() {
    // 定时器
    this.changeTiming();
  },
  methods: {
    changeTiming() {
      this.provinceLeftTimer1 = setInterval(() => {
        this.changeNumber();
      }, 5000);
    },
    changeNumber() {
      this.pageData.forEach((item) => {
        item.value += 1;
      });
    },
  },
  destroyed() {
    clearInterval(this.provinceLeftTimer1);
  },
};
</script>

<style scoped lang="less">
.visited-row {
  height: 100%;
  width: 100%;
  color: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: center;
  margin-top: 40px;
  .visited-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 76px;
    width: 30%;
    border: 2px solid #1b66f1;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 12px 10px;
    margin-bottom: 30px;
    .visited-value {
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
    }
    .line {
      width: 20px;
      height: 0px;
      border: 2px solid #a0cecd;
    }
    .visited-text {
      font-size: 12px;
      line-height: 17px;
      color: #00cada;
      margin-top: 4px;
    }
  }
}
</style>
