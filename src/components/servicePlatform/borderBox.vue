<template>
  <div class="box">
    <div class="border_corner border_corner_left_top"></div>
    <div class="border_corner border_corner_right_top"></div>
    <div class="border_corner border_corner_left_bottom"></div>
    <div class="border_corner border_corner_right_bottom"></div>
    <div class="main">
      <span class="title">
        {{ title }}
      </span>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["title"],
  created() {},
  methods: {},
};
</script>

<style scoped lang="less">
.box {
  height: 100%;
  width: 100%;
  position: relative;
  border: 1px solid rgba(26, 92, 215, 0.3);
  background-color: rgba(26, 92, 215, 0.1);
  box-sizing: border-box;
  padding: 17px 20px 20px;
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
    .title {
      font-size: 20px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #ffffff;
    }
    .content {
      font-family: Microsoft YaHei;
      color: #ffffff;
      text-align: justify;
      height: calc(100% - 20px);
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
