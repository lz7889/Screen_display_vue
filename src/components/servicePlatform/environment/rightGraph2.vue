<template>
  <div class="securitys">
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
      <vue-seamless-scroll :data="list"  :class-option="defaultOption" class="seamless-warp">
        <ul class="items">
          <li class="content" v-for="item in list" :key="item.index">
            <div class="item">
              <div class="items">
                <img
                  src="../../../assets/img/servicePlatform/security/warning.png"
                  alt=""
                />
                <div class="dsad">
                  {{ item.namesw }}
                </div>
              </div>
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
          namesw: "G1-DZ-201",
          Building: "负载超标",
          time: "2021-02-09 18:26",
          state: "未处理",
        },
        {
          namesw: "G1-DZ-211",
          Building: "报警关闸",
          time: "2021-02-09 12:26",
          state: "未处理",
        },
        {
          namesw: "G1-DZ-202",
          Building: "设备掉线",
          time: "2021-02-09 14:26",
          state: "已处理",
        },
        {
          namesw: "G1-DZ-102",
          Building: "欠压报警",
          time: "2021-02-09 10:48",
          state: "未处理",
        },

        {
          namesw: "G1-DZ-142",
          Building: "数据异常",
          time: "2021-02-09 17:06",
          state: "已处理",
        },
        {
          namesw: "G1-DZ-172",
          Building: "报警关闸",
          time: "2021-02-09 10:29",
          state: "未处理",
        },
         {
          namesw: "G1-DZ-102",
          Building: "欠压报警",
          time: "2021-02-09 10:48",
          state: "未处理",
        },

        {
          namesw: "G1-DZ-142",
          Building: "数据异常",
          time: "2021-02-09 17:06",
          state: "已处理",
        },
        {
          namesw: "G1-DZ-172",
          Building: "报警关闸",
          time: "2021-02-09 10:29",
          state: "未处理",
        },
        {
          namesw: "G1-DZ-202",
          Building: "设备掉线",
          time: "2021-02-09 14:26",
          state: "已处理",
        },
        {
          namesw: "G1-DZ-202",
          Building: "设备掉线",
          time: "2021-02-09 14:26",
          state: "已处理",
        },
        {
          namesw: "G1-DZ-102",
          Building: "欠压报警",
          time: "2021-02-09 10:48",
          state: "未处理",
        },

        {
          namesw: "G1-DZ-142",
          Building: "数据异常",
          time: "2021-02-09 17:06",
          state: "已处理",
        },
        {
          namesw: "G1-DZ-172",
          Building: "报警关闸",
          time: "2021-02-09 10:29",
          state: "未处理",
        },
        {
          namesw: "G1-DZ-202",
          Building: "设备掉线",
          time: "2021-02-09 14:26",
          state: "已处理",
        },
        {
          namesw: "G1-DZ-102",
          Building: "欠压报警",
          time: "2021-02-09 10:48",
          state: "未处理",
        },

        {
          namesw: "G1-DZ-142",
          Building: "数据异常",
          time: "2021-02-09 17:06",
          state: "已处理",
        },
        {
          namesw: "G1-DZ-172",
          Building: "报警关闸",
          time: "2021-02-09 10:29",
          state: "未处理",
        },
        {
          namesw: "G1-DZ-872",
          Building: "设备掉线",
          time: "2021-02-08 11:29",
          state: "未处理",
        },
      ],
    };
  },
  computed: {
    defaultOption() {
      return {
        step: 0.5, // 数值越大速度滚动越快
      };
    },
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="less">
.securitys {
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
      .items {
        display: flex;
        align-items: center;
        width: 90px;
        .dsad {
          padding-left: 5px;
        }
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
