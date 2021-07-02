<template>
  <div class="show-bar-wapper">
    <div class="show-bar-container">
      <div class="show-bar">
        <div class="menu-item" v-for="(item, index) in data" :key="index">
          <img
            :src="
              require(`../../assets/img/servicePlatform/showbar/${item.icon}.png`)
            "
          />
          <div class="right-box">
            <div class="right-num">{{ item.num }}</div>
            <div class="right-text">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { showBar } from "@/data/dataService.js";

export default {
  data() {
    return {
      data: showBar,
    };
  },
};
</script>

<style scoped lang="less">
.show-bar-wapper {
  z-index: 999;
  position: fixed;
  top: 17vh;
  left: 50%;
  transform: translateX(-50%);
  .show-bar-container {
    width: 40vw; // 给父元素宽度，使子元素flex生效
    .show-bar {
      height: 75px;
      display: flex;
      cursor: pointer;
      justify-content: space-between;
      .menu-item {
        display: flex;
        align-items: center;
        // text-align: center;
        font-size: 12px;
        color: #fff;
        img {
          height: 80px;
          width: 80px;
        }
        .right-box {
          margin-left: 12px;
          .right-num {
            font-size: 24px;
            font-weight: bold;
            color: #ffffff;
          }
          .right-text {
            margin-top: 8px;
            font-size: 12px;
            font-weight: 400;
            color: #d2e2ff;
          }
        }
      }
    }
  }
}
</style>
