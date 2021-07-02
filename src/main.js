import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Video from "video.js";
import "video.js/dist/video-js.css";
Vue.prototype.$video = Video;

import VideoPlayer from "vue-video-player";
require("video.js/dist/video-js.css");
require("vue-video-player/src/custom-theme.css");
Vue.use(VideoPlayer);

// reset.css
import "@/assets/css/reset.css";
// 引入elementui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
Vue.config.productionTip = false;
import dataV from "@jiaminghi/data-view";

import echarts from "echarts";
Vue.prototype.$echarts = echarts;

// 引入高德地图
import AMap from 'vue-amap';
Vue.use(AMap);

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: '你的key',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation']
});
import scroll from "vue-seamless-scroll";
Vue.use(scroll);
Vue.use(dataV);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
