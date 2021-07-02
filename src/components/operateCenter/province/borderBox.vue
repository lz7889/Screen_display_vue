<template>
  <div class="box">
    <div class="border_corner border_corner_left_top"></div>
    <div class="border_corner border_corner_right_top"></div>
    <div class="border_corner border_corner_left_bottom"></div>
    <div class="border_corner border_corner_right_bottom"></div>
    <div class="main">
      <div class="box-title" v-if="title">
        {{ title }}
      </div>
      <div class="box-content">
        <slot></slot>
      </div>
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
  // border: 1px solid rgba(26, 92, 215, 0.3);
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
    overflow: hidden;
    color: #fff;
    .box-title {
      font-weight: 900;
      font-size: 20px;
    }
    .box-content {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
