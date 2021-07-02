<template>
  <div class="dfrer">
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
            src="../../../assets/mp4/h5.mp4"
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
            src="../../../assets/mp4/h6.mp4"
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
          <source  src="../../../assets/mp4/h7.mp4" type="video/mp4" />
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
          <source  src="../../../assets/mp4/h9.mp4" type="video/mp4" />
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
  created() {},
  methods: {},
};
</script>

<style scoped lang="less">
.dfrer {
  width: 100%;
  // height: 100%;

  margin-top: 40px;
  .content {
    font-family: Microsoft YaHei;
    color: #ffffff;
    text-align: justify;
    // height: calc(100% - 20px);
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
}
</style>
