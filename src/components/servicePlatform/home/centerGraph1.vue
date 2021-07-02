<template>
  <div class="centrGRAP">
    <div id="container" style="width: 100%; height: 100%; resize: both">
      <div id="container" style="width: 500px; height: 300px"></div>
    </div>
  </div>
</template>
<script>
// import AMap from "AMap";
// var map;
// export default {
//   mounted: function() {
//     this.init();
//   },
//   methods: {
//     init: function() {
//       map = new AMap.Map("container", {
//         resizeEnable: true,
//         rotateEnable: true,
//         pitchEnable: true,
//         zoom: 17,
//         pitch: 80,
//         rotation: -15,
//         viewMode: "3D", //开启3D视图,默认为关闭
//         buildingAnimation: true, //楼块出现是否带动画

//         //  mapStyle: 'amap://styles/darkblue',
//         expandZoomRange: true,
//         zooms: [3, 20],
//         center: [106.482303, 29.639889],
//       });
//       AMap.plugin(["AMap.ToolBar", "AMap.Scale"], function() {
//         map.addControl(new AMap.ToolBar());
//         map.addControl(new AMap.Scale());
//       });
//     },
//   },
// };
//
</script>
<style scoped lang="less">
.centrGRAP {
  height: 100%;
  // background: #ccc;
}

/deep/ .map-wrapper {
  width: 100%;
  height: 100%;
  /*background: teal;*/
  background-image: url("../../../assets/img/OperateCenter/item-title.png");
}
</style>
