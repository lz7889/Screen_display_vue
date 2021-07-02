<template>
  <div class="serviceplatform">
    <div class="contents">
      <div class="itemr">
        <div class="name">AICP-309-001</div>
        <div class="vido">
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
      </div>
      <div class="itemr">
        <div class="name">AICP-309-001</div>
        <div class="vido">
          <video
            class="video-js vjs-default-skin vjs-big-play-centered"
            
            API
            loop
            muted
            autoplay="autoplay"
            preload="auto"
          >
            <source
               src="../../../assets/mp4/h3.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div class="itemr">
        <div class="name">AICP-309-001</div>
        <div class="vido">
          <video
            class="video-js vjs-default-skin vjs-big-play-centered"
            
            API
            loop
            muted
            autoplay="autoplay"
            preload="auto"
          >
            <source
             src="../../../assets/mp4/h4.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div class="itemr">
        <div class="name">AICP-309-001</div>
        <div class="vido">
          <video
            class="video-js vjs-default-skin vjs-big-play-centered"
            
            API
            loop
            muted
            autoplay="autoplay"
            preload="auto"
          >
            <source
              src="../../../assets/mp4/h7.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div class="itemr">
        <div class="name">AICP-309-001</div>
        <div class="vido">
          <video
            class="video-js vjs-default-skin vjs-big-play-centered"
            
            API
            loop
            muted
            autoplay="autoplay"
            preload="auto"
          >
            <source
              src="../../../assets/mp4/h10.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div class="itemr">
        <div class="name">AICP-309-001</div>
        <div class="vido">
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
.serviceplatform {
  width: 100%;
  height: 100%;
  margin-top: 30px;
  .contents {
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .itemr {
      width: 48%;
      height: 30%;
      // background: orangered;
      font-family: PingFang SC;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      letter-spacing: 0em;
      .name {
        margin-bottom: 20px;
      }
      .vido {
        width: 100%;
        /deep/.video-js {
          width: 100%;
          // height: 100%;
        }
      }
    }
  }
}
</style>
