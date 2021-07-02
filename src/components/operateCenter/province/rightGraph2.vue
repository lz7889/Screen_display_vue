<template>
  <div class="warning-row">
    <div class="warning-item" v-for="(item, index) in data" :key="index">
      <img
        :src="require(`../../../assets/img/OperateCenter/${item.icon}.png`)"
      />
      <div class="right-text">
        <div class="number">{{ item.number }}</div>
        <div class="text">{{ item.text }}</div>
      </div>
    </div>
    <select class="select-box">
      <option value="month">本月</option>
    </select>
  </div>
</template>

<script>
import { rightBottom } from "@/data/dataOperate.js";
export default {
  props: ["province"],
  data() {
    return {
      data: rightBottom[this.province],
    };
  },
  watch: {
    province: function () {
      this.data = rightBottom[this.province];
    },
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="less">
.warning-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-between;
  height: 85%;
  .warning-item {
    width: 33%;
    img {
      float: left;
    }
    .number {
      font-size: 20px;
      line-height: 28px;
    }
    .text {
      font-size: 12px;
      line-height: 17px;
    }
  }
}
.select-box {
  position: absolute;
  top: 10px;
  right: 30px;
  font-size: 13px;
  cursor: pointer;
  box-shadow: none;
  background: none;
  border: none;
  color: #fff;
}
</style>
