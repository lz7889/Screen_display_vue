<template>
  <div>
    <div class="content">
      <vue-seamless-scroll :data="listData" class="seamless-warp">
        <ul class="item">
          <li v-for="item in listData" :key="item.index">
            <div class="serves">
              <img :src="item.img" alt="" />
              <div class="serve_s">
                <div class="serve_name">{{ item.title }}</div>
                <div class="serve_nuber">
                  {{ `${parseFloat(item.nuber).toLocaleString()}` }}
                </div>
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
      listData: [
        {
          img: require("../../../assets/img/OperateCenter/operate1.png"),
          title: "注册居民用户",
          nuber: 1950,
        },
        {
          img: require("../../../assets/img/OperateCenter/operate2.png"),
          title: "社区数量",
          nuber: 1150,
        },
        {
          img: require("../../../assets/img/OperateCenter/operate3.png"),
          title: "入住商家",
          nuber: 3160,
        },
        {
          img: require("../../../assets/img/OperateCenter/operate4.png"),
          title: "订单",
          nuber: 11450,
        },
        {
          img: require("../../../assets/img/OperateCenter/operate5.png"),
          title: "医疗机构",
          nuber: 1810,
        },
        {
          img: require("../../../assets/img/OperateCenter/operate6.png"),
          title: "养老机构",
          nuber: 2650,
        },
        {
          img: require("../../../assets/img/OperateCenter/operate7.png"),
          title: "已改造/改造中老旧社区",
          nuber: 360,
        },
        {
          img: require("../../../assets/img/OperateCenter/operate8.png"),
          title: "IOT设备",
          nuber: 750,
        },
        {
          img: require("../../../assets/img/OperateCenter/operate9.png"),
          title: "实名认证",
          nuber: 1150,
        },
        {
          img: require("../../../assets/img/OperateCenter/operate10.png"),
          title: "预警告警",
          nuber: 5,
        },
      ],
    };
  },

  methods: {
    lyl() {
      this.listData.forEach((item) => {
        item.nuber += Math.floor(Math.random() * 10 + 1);
      });
    },

    changeTiming() {
      this.dataCenterTimerhy = setInterval(() => {
        this.lyl();
      }, 3500);
    },
  },
  computed: {},
  destroyed() {
    clearInterval(this.dataCenterTimerhy);
  },
  created() {
    this.changeTiming();
  },
};
</script>

<style scoped lang="less">
.seamless-warp {
  height: 100%;
  // overflow: hidden;
  color: aliceblue;
}

.item {
  .serves {
    display: flex;
    align-items: center;
    color: #fff;
    margin-bottom: 16px;
    .serve_s {
      padding-left: 10px;
      .serve_name {
        font-size: 12px;
        line-height: 16px;
      }
      .serve_nuber {
        font-size: 22px;
        font-weight: 600;
        line-height: 30px;
      }
    }
  }
}
</style>
