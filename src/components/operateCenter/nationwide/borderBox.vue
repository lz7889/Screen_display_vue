<template>
  <div class="box">
    <div class="border_corner border_corner_left_top"></div>
    <div class="border_corner border_corner_right_top"></div>
    <div class="border_corner border_corner_left_bottom"></div>
    <div class="border_corner border_corner_right_bottom"></div>
    <div class="main">
      <div class="title-container" v-if="title">
        <div class="title">
          <img src="../../../assets/img/OperateCenter/item-title.png" alt="" />
          <span class="title-text">{{ title }}</span>
          <span class="title-stripe"></span>
        </div>
        <div class="divider">
          <span class="divider1"></span>
          <span class="divider2"></span>
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped lang="less">
.box {
  height: 100%;
  width: 100%;
  position: relative;
  border: 1px solid rgba(26, 92, 215, 0.3);
  // background-color: rgba(26, 92, 215, 0.1);
  box-sizing: border-box;
  padding: 13px 16px 15px;
  .border_corner {
    z-index: 2500;
    position: absolute;
    width: 10px;
    height: 10px;
    border: 2px solid #1c67f4;
  }
  .border_corner_left_top {
    top: 0;
    left: 0;
    border-right: none;
    border-bottom: none;
  }
  .border_corner_right_top {
    top: 0;
    right: 0;
    border-left: none;
    border-bottom: none;
  }
  .border_corner_left_bottom {
    bottom: 0;
    left: 0;
    border-right: none;
    border-top: none;
  }
  .border_corner_right_bottom {
    bottom: 0;
    right: 0;
    border-left: none;
    border-top: none;
  }
  .main {
    height: 100%;
    width: 100%;
    overflow: hidden;
    .title {
      height: 30px;
      font-weight: bold;
      display: flex;
      align-items: center;
      .title-text {
        display: inline-block;
        white-space: nowrap;
        margin: 0 20px 0 17px;
        font-size: 20px;
        color: #00f0ff;
      }
      .title-stripe {
        height: 30px;
        width: 100%;
        background-color: rgba(0, 133, 247, 0.1);
      }
    }
    .divider {
      display: flex;
      justify-content: left;
      margin-top: 8px;
      .divider1 {
        height: 2px;
        width: 7px;
        background-color: #0085f7;
      }
      .divider2 {
        height: 2px;
        width: 100%;
        background-color: rgba(0, 133, 247, 0.2);
      }
    }
  }
}
</style>
