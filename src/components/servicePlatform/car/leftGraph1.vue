<template>
  <div class="profile-row">
    <div class="profile-item" v-for="(item, index) in data" :key="index">
      <img
        :src="
          require(`../../../assets/img/servicePlatform/car/${item.icon}.png`)
        "
      />
      <span
        >{{ item.text
        }}<span :class="['num', item.type]">{{ item.num }}</span></span
      >
    </div>
  </div>
</template>

<script>
import { carLeft1 } from "@/data/dataService.js";
export default {
  components: {},
  data() {
    return {
      data: carLeft1,
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="less">
.profile-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
  margin-top: 25px;
  .profile-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33%;
    span {
      font-size: 12px;
      margin-top: 12px;
      .num {
        margin-left: 3px;
        color: #02fcfc;
      }
      .warning {
        color: #fc0202;
      }
    }
  }
}
</style>
