<template>
  <div class="equipment-warpper">
    <div class="equipment-item" v-for="(item, index) in data" :key="index">
      <img
        :src="
          require(`../../../assets/img/servicePlatform/environment/${item.icon}.png`)
        "
      />
      <div class="item-right">
        <div class="item-num">{{ item.totalnum }}</div>
        <div class="item-text">总数</div>
      </div>
      <div class="item-right">
        <div class="item-num">{{ item.online }}</div>
        <div class="item-text">在线数</div>
      </div>
    </div>
  </div>
</template>

<script>
import { environmentLeft1 } from "@/data/dataService.js";
export default {
  components: {},
  data() {
    return {
      data: environmentLeft1,
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="less">
.equipment-warpper {
  display: flex;
  flex-wrap: wrap;
  .equipment-item {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: rgba(73, 201, 255, 0.1);
    font-size: 14px;
    margin-top: 20px;
    margin-right: 20px;
    &:nth-child(even) {
      margin-right: 0;
    }
    img {
      height: 60px;
      width: 60px;
    }
    .item-right {
      text-align: center;
      .item-num {
        color: #02f7f8;
      }
      .item-text {
        margin-top: 14px;
      }
    }
  }
}
</style>
