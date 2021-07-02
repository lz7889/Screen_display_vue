<template>
  <div class="bg">
    <div class="top">
      <Top :active="1">智慧社区数据中心</Top>
    </div>
    <div class="nav">
      <div class="nav-item" v-for="tab in tabs" :key="tab.index" @click="toggleTab(tab.index)">
        <span :class="['nav-item-title', { active: active === tab.index }]">{{ tab.name }}</span>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Top from "@/components/Top";

export default {
  components: {
    Top,
  },
  data() {
    return {
      tabs: [
        { name: "社区大数据", index: 0 },
        { name: "业务大数据", index: 1 },
      ],
      active: 0,
    };
  },
  created() {},
  methods: {
    toggleTab(index) {
      this.active = index;
      if (index === 0) {
        this.$router.push({ name: "community" });
      } else {
        this.$router.push({ name: "business" });
      }
    },
  },
};
</script>

<style scoped lang="less">
.bg {
  width: 100%;
  height: 100%;
  background: url("../../assets/img/DataCenter/bg.png") no-repeat;
}
.top {
  height: 162px;
}
.nav {
  display: flex;
  justify-content: center;
  .nav-item {
    width: 165px;
    height: 48px;
    background-image: url("../../assets/img/DataCenter/tab-border.png");
    background-size: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    cursor: pointer;
    margin-right: 27px;
    .nav-item-title {
      line-height: 48px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      color: #90b5faff;
    }
    @keyframes twinkling {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    & .active {
      color: #00b4ff;
    }
    & .active::before {
      content: url(../../assets/img/DataCenter/tab-focus-left.png);
      margin-right: 10px;
      animation: twinkling 2s infinite ease-in-out;
    }
    & .active::after {
      content: url(../../assets/img/DataCenter/tab-focus-right.png);
      margin-left: 10px;
      animation: twinkling 2s infinite ease-in-out;
    }
  }
}
.content {
  margin: 30px 50px 0;
}
</style>
