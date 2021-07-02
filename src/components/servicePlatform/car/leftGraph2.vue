<template>
  <div class="securityhqy">
    <div class="choose-box"></div>
    <div class="henred"></div>

    <div class="title">
      <div class="title_2">车辆牌号</div>
      <div class="title_3">出入口</div>
      <div class="title_4">时间</div>
      <div class="title_1">
        <div class="shijian">状态</div>
        <img
          src="../../../assets/img/servicePlatform/security/filter.png"
          alt=""
        />
      </div>
    </div>
    <div class="ruhu">
      <vue-seamless-scroll :data="list" class="seamless-warp">
        <ul class="items">
          <li class="content" v-for="item in list" :key="item.index">
            <div class="item">
              <div>{{ item.namesw }}</div>
              <div class="item_2">{{ item.Building }}</div>
              <div class="item_3">{{ item.time }}</div>
              <div :class="item.state == '进' ? 'item_4a' : 'item_4b'">
                {{ item.state }}
              </div>
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
          namesw: "渝A9***23",
          Building: "G1-DZ-201",
          time: "2021-02-09 16:26",
          state: "进",
        },
        {
          namesw: "渝A7***c3",
          Building: "G1-DZ-201",
          time: "2021-02-09 17:24",
          state: "出",
        },
        {
          namesw: "渝B***53",
          Building: "G1-DZ-201",
          time: "2021-02-09 08:26",
          state: "出",
        },
        {
          namesw: "渝F4***2",
          Building: "G1-DZ-201",
          time: "2021-02-10 17:46",
          state: "出",
        },
        {
          namesw: "渝C4***73",
          Building: "G1-DZ-201",
          time: "2021-02-11 16:12",
          state: "进",
        },
        {
          namesw: "渝B4***66",
          Building: "G1-DZ-201",
          time: "2021-02-11 10:06",
          state: "出",
        },
        {
          namesw: "渝B0***3",
          Building: "G1-DZ-201",
          time: "2021-02-11 03:26",
          state: "进",
        },
        {
          namesw: "渝A8***2",
          Building: "G1-DZ-201",
          time: "2021-02-12 04:32",
          state: "进",
        },
        {
          namesw: "渝A6***23",
          Building: "G1-DZ-201",
          time: "2021-02-12 18:24",
          state: "出",
        },
        {
          namesw: "渝B4***12",
          Building: "G1-DZ-201",
          time: "2021-02-13 10:08",
          state: "出",
        },
        {
          namesw: "渝B4***66",
          Building: "G1-DZ-201",
          time: "2021-02-11 10:06",
          state: "出",
        },
        {
          namesw: "渝B0***3",
          Building: "G1-DZ-201",
          time: "2021-02-11 03:26",
          state: "进",
        },
        {
          namesw: "渝A8***2",
          Building: "G1-DZ-201",
          time: "2021-02-12 04:32",
          state: "进",
        },
        {
          namesw: "渝A6***23",
          Building: "G1-DZ-201",
          time: "2021-02-12 18:24",
          state: "出",
        },
        {
          namesw: "渝A7**23",
          Building: "G1-DZ-201",
          time: "2021-02-13 17:16",
          state: "进",
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="less">
.securityhqy {
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
      .item_4a {
        color: rgba(251, 255, 36, 1);
        padding-right: 30px;
      }
      .item_4b {
        color: rgba(0, 235, 23, 1);
        padding-right: 30px;
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
