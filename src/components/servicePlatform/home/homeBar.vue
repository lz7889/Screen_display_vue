<template>
  <div class="home-bar-wapper">
    <div class="home-bar-container">
      <div class="home-bar">
        <div class="menu-item" v-for="(item, index) in data" :key="index">
          <div class="item-num">{{ item.num }}</div>
          <div class="item-text">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { homeBar } from "@/data/dataService.js";

export default {
  data() {
    return {
      data: homeBar,
    };
  },
};
</script>

<style scoped lang="less">
.home-bar-wapper {
  z-index: 999;
  position: fixed;
  top: 17vh;
  left: 50%;
  transform: translateX(-50%);
  .home-bar-container {
    width: 32vw; // 给父元素宽度，使子元素flex生效
    .home-bar {
      height: 75px;
      display: flex;
      // cursor: pointer;
      justify-content: space-between;
      .menu-item {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 12px;
        color: #fff;
        min-width: 102px;
        min-height: 102px;
        background-image: url(../../../assets/img/servicePlatform/home/bubble-border.png);
        background-size: cover;
        border-radius: 50%;
        box-shadow: 0 0 35px rgba(27, 102, 241, 0.6) inset,
          0 0 35px rgba(27, 102, 241, 0.6);
        .item-num {
          font-size: 24px;
          font-weight: bold;
          color: #ffffff;
        }
        .item-text {
          font-size: 12px;
          font-weight: 400;
          color: #d2e2ff;
          margin-top: 12px;
        }
      }
    }
  }
}
</style>
