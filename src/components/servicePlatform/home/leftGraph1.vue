<template>
  <div class="profile-row">
    <div class="profile-item" v-for="(item, index) in data" :key="index">
      <img
        :src="
          require(`../../../assets/img/servicePlatform/home/${item.icon}.png`)
        "
      />
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
import { getLeft1 } from "@/data/dataService.js";
export default {
  components: {},
  data() {
    return {
      data: getLeft1,
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
  margin-top: 20px;
  .profile-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    span {
      font-size: 12px;
      margin-top: 12px;
    }
  }
}
</style>
