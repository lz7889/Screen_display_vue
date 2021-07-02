<template>
  <div class="service-menu-wapper">
    <div class="service-menu-container">
      <div class="service-menu">
        <div
          class="menu-item"
          v-for="(item, index) in menuList"
          :key="index"
          @click="toggleMenu(item.path)"
        >
          <img
            v-if="item.path === currentPath"
            :src="
              require(`../../assets/img/servicePlatform/menu/${item.path}-active.png`)
            "
          />
          <img
            v-else
            :src="
              require(`../../assets/img/servicePlatform/menu/${item.path}.png`)
            "
          />
          <span>{{ item.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      required: true,
      default: "servicePlatform",
    },
  },
  data() {
    return {
      menuList: [
        {
          path: "servicePlatform",
          label: "首页",
        },
        {
          path: "population",
          label: "人口",
        },
        {
          path: "security",
          label: "安防",
        },
        {
          path: "fire-protection",
          label: "消防",
        },
        {
          path: "environment",
          label: "环境",
        },
        {
          path: "car",
          label: "车辆",
        },
        {
          path: "party-construction",
          label: "党建",
        },
        {
          path: "deposit-certificate",
          label: "存证",
        },
      ],
      currentPath: this.current,
    };
  },
  created() {},
  methods: {
    toggleMenu(path) {
      this.currentPath = path;
      this.$router.push({ name: path });
    },
  },
};
</script>

<style scoped lang="less">
.service-menu-wapper {
  z-index: 999;
  position: fixed;
  bottom: 27vh;
  left: 50%;
  transform: translateX(-50%);
  .service-menu-container {
    width: 45vw; // 给父元素宽度，使子元素flex生效
    .service-menu {
      height: 75px;
      display: flex;
      cursor: pointer;
      .menu-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 12.5%;
        font-size: 12px;
        color: #fff;
        img {
          height: 51px;
          width: 50px;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
