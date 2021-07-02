<template>
  <div class="bg">
    <div class="come_top">
      <div class="top">
        <div class="top_img_log"></div>
        <div class="top_title">
          <slot></slot>
        </div>
        <div class="weather">
          <iframe
            width="270"
            scrolling="no"
            height="25"
            frameborder="0"
            allowtransparency="true"
            src="https://i.tianqi.com?c=code&id=1&color=%23FFFFFF&icon=1&site=12"
          ></iframe>
        </div>
      </div>
      <div class="option">
        <div class="option_one">
          <div
            :class="activeIndex == 0 ? 'item1_active item1' : 'item1'"
            @click="title(0, 'operateCenter')"
          >
            运营中心
          </div>
          <div
            :class="activeIndex == 1 ? 'item2_active item2' : 'item2'"
            @click="title(1, 'dataCenter')"
          >
            数据中心
          </div>
          <div
            :class="activeIndex == 2 ? 'item2_active item2' : 'item2'"
            @click="title(2, 'servicePlatform')"
          >
            社区级综合服务平台
          </div>
        </div>
        <div class="option_tree"></div>
        <div class="option_to">
          <div class="item1">搜索</div>
          <div class="item2">PC端展示</div>
          <div class="item3">消息</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: this.active,
    };
  },
  props: {
    active: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  methods: {
    title(i, route) {
      this.activeIndex = i;
      this.$router.push({ name: route });
    },
  },
};
</script>

<style lang="less" scoped>
.bg {
  background: black;
  // width: 100%;
}
.come_top {
  background-image: url("../assets/img/DataCenter/boder.png");
  height: 114px;
  background-size: 100%;
  background-repeat: no-repeat;
  font-weight: bold;
  color: #ffffff;
  padding: 15px 50px 0 50px;
  .top {
    height: 50%;
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    font-family: Microsoft YaHei;
    .top_img_log {
      background-image: url("../assets/img/DataCenter/log.png");
      width: 280px;
      height: 36px;
      background-repeat: no-repeat;
    }
    .weather {
      width: 280px;
    }
    .top_title {
      position: relative;
      top: 30px;
    }
  }

  .option {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;

    .option_one {
      display: flex;
      padding: 5px 0;
      div {
        margin-right: -29px;
        cursor: pointer;
      }
      .item1 {
        width: 244px;
        height: 44px;
        background-image: url("../assets/img/DataCenter/item1.png");
        background-size: 100%;
        background-repeat: no-repeat;
        text-align: center;
        line-height: 44px;
      }

      .item1_active {
        width: 244px;
        height: 44px;
        background-image: url("../assets/img/DataCenter/item_a.png");
        background-size: 100%;
        background-repeat: no-repeat;
        text-align: center;
        line-height: 44px;
      }
      .item2 {
        width: 254px;
        height: 44px;
        background-image: url("../assets/img/DataCenter/item2.png");
        background-size: 100%;
        background-repeat: no-repeat;
        text-align: center;
        line-height: 44px;
      }
      .item2_active {
        width: 254px;
        height: 44px;
        background-image: url("../assets/img/DataCenter/item_b.png");
        background-size: 100%;
        background-repeat: no-repeat;
        text-align: center;
        line-height: 44px;
      }

      .item3 {
        width: 254px;
        height: 44px;
        background-image: url("../assets/img/DataCenter/item2.png");
        background-size: 100%;
        background-repeat: no-repeat;
        text-align: center;
        line-height: 44px;
      }
    }
    .option_to {
      display: flex;
      padding: 5px 0;
      div {
        margin-left: -29px;
      }
      .item1 {
        width: 244px;
        height: 44px;
        background-image: url("../assets/img/DataCenter/item4.png");
        background-size: 100%;
        background-repeat: no-repeat;
        text-align: center;
        line-height: 44px;
      }
      .item2 {
        width: 254px;
        height: 44px;
        background-image: url("../assets/img/DataCenter/item4.png");
        background-size: 100%;
        background-repeat: no-repeat;
        text-align: center;
        line-height: 44px;
      }
      .item3 {
        width: 254px;
        height: 44px;
        background-image: url("../assets/img/DataCenter/item3.png");
        background-size: 100%;
        background-repeat: no-repeat;
        text-align: center;
        line-height: 44px;
      }
    }
  }
}
</style>
