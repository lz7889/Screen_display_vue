<template>
  <div class="security">
    <div class="choose-box">
      <button
        :class="activeItem === 'event' ? 'active' : ''"
        @click="activeItem = 'event'"
      >
        事件
      </button>
      <button
        :class="activeItem === 'order' ? 'active' : ''"
        @click="activeItem = 'order'"
      >
        工单
      </button>
    </div>
    <div class="henred"></div>

    <div class="title">
      <div class="title_1">
        <div class="shijian">事件类型</div>
        <img
          src="../../../assets/img/servicePlatform/security/filter.png"
          alt=""
        />
      </div>
      <div class="title_2">位置</div>
      <div class="title_3">时间</div>
      <div class="title_4">状态</div>
    </div>
    <div class="ruhu">
      <vue-seamless-scroll :data="list" class="seamless-warp">
        <ul class="items">
          <li class="content" v-for="item in list" :key="item.index">
            <div class="item">
              <div :class="item.active">{{ item.namesw }}</div>
              <div class="item_2">{{ item.Building }}</div>
              <div class="item_3">{{ item.time }}</div>
              <div class="item_4">{{ item.state }}</div>
            </div>
          </li>
        </ul>
      </vue-seamless-scroll>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      activeItem: "order",

      list: [
        {
          active: "item_1S",
          namesw: "火灾报警",
          Building: "03楼-A-303",
          time: "2021-02-09 18:26",
          state: "未处理",
        },
        {
          active: "item_2S",
          namesw: "设备报警",
          Building: "03楼-B-353",
          time: "2021-02-09 12:26",
          state: "未处理",
        },
        {
          active: "item_3S",
          namesw: "安全报警",
          Building: "13楼-B-153",
          time: "2021-02-09 14:26",
          state: "已处理",
        },
        {
          active: "item_3S",
          namesw: "安全报警",
          Building: "1楼-D-253",
          time: "2021-02-09 10:48",
          state: "未处理",
        },

        {
          active: "item_1S",
          namesw: "火灾报警",
          Building: "06楼-A-403",
          time: "2021-02-09 17:06",
          state: "已处理",
        },
        {
          active: "item_2S",
          namesw: "设备报警",
          Building: "07楼-B-453",
          time: "2021-02-09 10:29",
          state: "未处理",
        },
        {
          active: "item_2S",
          namesw: "设备报警",
          Building: "08楼-B-453",
          time: "2021-02-08 11:29",
          state: "未处理",
        },
        {
          active: "item_3S",
          namesw: "安全报警",
          Building: "9楼-D-013",
          time: "2021-02-09 10:28",
          state: "未处理",
        },
        {
          active: "item_1S",
          namesw: "火灾报警",
          Building: "08楼-A-423",
          time: "2021-02-09 11:06",
          state: "已处理",
        },
        {
          active: "item_3S",
          namesw: "安全报警",
          Building: "1楼-D-253",
          time: "2021-02-09 10:48",
          state: "未处理",
        },
        {
          active: "item_3S",
          namesw: "安全报警",
          Building: "9楼-D-013",
          time: "2021-02-09 10:28",
          state: "未处理",
        },
        {
          active: "item_1S",
          namesw: "火灾报警",
          Building: "06楼-A-403",
          time: "2021-02-09 17:06",
          state: "已处理",
        },
        {
          active: "item_3S",
          namesw: "安全报警",
          Building: "1楼-D-253",
          time: "2021-02-09 10:48",
          state: "未处理",
        },
        {
          active: "item_3S",
          namesw: "安全报警",
          Building: "9楼-D-013",
          time: "2021-02-09 10:28",
          state: "未处理",
        },
        {
          active: "item_1S",
          namesw: "火灾报警",
          Building: "06楼-A-403",
          time: "2021-02-09 17:06",
          state: "已处理",
        },
        {
          active: "item_3S",
          namesw: "安全报警",
          Building: "1楼-D-253",
          time: "2021-02-09 10:48",
          state: "未处理",
        },
        {
          active: "item_3S",
          namesw: "安全报警",
          Building: "9楼-D-013",
          time: "2021-02-09 10:28",
          state: "未处理",
        },
        {
          active: "item_1S",
          namesw: "火灾报警",
          Building: "06楼-A-403",
          time: "2021-02-09 17:06",
          state: "已处理",
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="less">
.security {
  // background: pink;
  height: 100%;
  width: 100%;

  .choose-box {
    height: 100%;
    position: absolute;
    top: 14px;
    right: 20px;
    // transform: translateX(-50%);
    font-size: 13px;
    cursor: pointer;
    box-shadow: none;
    background: none;
    border: none;
    button {
      height: 24px;
      width: 50px;
      font-size: 12px;
      box-shadow: none;
      border: 1px solid #fff;
      border-radius: 3px;
      background-color: transparent;
      outline: none;
      color: #fff;
      text-align: center;
      cursor: pointer;
      &:last-child {
        margin-left: 14px;
      }
    }
    .active {
      background-color: #3699ff;
      border: 1px solid #3699ff;
    }
  }

  .henred {
    margin: 15px 0;
    border: 1px solid rgba(19, 50, 142, 1);
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(57, 91, 129, 1);
    font-size: 14px;
    padding: 6px 10px;
    .title_1 {
      display: flex;
      align-items: center;
      .shijian {
        margin-right: 5px;
      }
    }
  }
  .content:last-child {
    .item {
      margin: 0;
    }
  }
  .content {
    height: 100%;

    .item {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      align-items: center;
      margin: 15px 0;
      .item_1S {
        width: 90px;
        height: 30px;
        text-align: center;
        background: rgba(234, 39, 78, 1);
        line-height: 30px;
        font-size: 14px;
      }
      .item_2S {
        width: 90px;
        height: 30px;
        text-align: center;
        background: rgba(255, 121, 46, 1);
        line-height: 30px;
        font-size: 14px;
      }
      .item_3S {
        width: 90px;
        height: 30px;
        text-align: center;
        background: rgba(246, 194, 10, 1);
        line-height: 30px;
        font-size: 14px;
      }
    }
  }

  .ruhu {
    height: 100%;
    // background: pink;
    .seamless-warp {
      overflow: hidden;
      height: 100%;
      color: aliceblue;
    }
  }
}
</style>
