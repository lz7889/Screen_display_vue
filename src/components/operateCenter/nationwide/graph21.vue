<template>
  <div class="gareop">
    <div class="content">
      <div class="content_1">
        <video
          class="video-js vjs-default-skin vjs-big-play-centered"
          
          API
          loop
          muted
          autoplay="autoplay"
          preload="auto"
        >
          <source
            src="../../../assets/mp4/h1.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="content_1">
        <video
          class="video-js vjs-default-skin vjs-big-play-centered"
          
          API
          loop
          muted
          autoplay="autoplay"
          preload="auto"
        >
          <source
            src="../../../assets/mp4/h2.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div class="content_1">
        <video
          class="video-js vjs-default-skin vjs-big-play-centered"
          
          API
          muted
          loop
          autoplay="autoplay"
          preload="auto"
        >
          <source  src="../../../assets/mp4/h3.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="content_1">
        <video
          class="video-js vjs-default-skin vjs-big-play-centered"
          
          API
          muted
          loop
          autoplay="autoplay"
          preload="auto"
        >
          <source  src="../../../assets/mp4/h4.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},

  created() {},
};
</script>

<style scoped lang="less">
.gareop {
  height: 100%;
}
.content {
  font-family: Microsoft YaHei;
  color: #ffffff;
  text-align: justify;
  height: calc(100% - 20px);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background: pink;

  .content_1 {
    width: 24%;
    // height: 100%;
    // background: gray;
    /deep/.video-js {
      width: 100%;
      // height: 100%;
    }
  }
}
</style>
