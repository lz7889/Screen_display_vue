<template>
  <div>
    <div class="content">
      <vue-seamless-scroll :class-option="defaultOption" :data="listData" class="seamless-warp">
        <ul class="itemsa">
          <li v-for="item in listData" :key="item.index">
            <div class="serves">
              {{ item.title }}
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
          title: "2021.05.29 为促进党民一家亲，于本周末开展党员带领居民开...",
        },
        {
          title: "2021.05.28 大数据可视化：从用“数据”说话到让数据“说话...",
        },
        {
          title: "2021.05.27 未来几十年，人工智能 能带给我们什么",
        },
        {
          title: "2021.05.26 同心协力战疫情 攻坚克难当先锋——抗击疫情 梅...",
        },
        {
          title: "2021.05.25 重庆丰都县五洞岩风电项目违规毁林引发泥石流...",
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
  // height: 60%;
  overflow: hidden;
  color: aliceblue;
  height: 160px;
}

.itemsa {
  .serves {
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ffffff;
    border-bottom: 1px solid rgba(19, 50, 142, 1);
    padding: 20px 0;
  }
}
</style>
