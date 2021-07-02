<template>
  <div class="security-row">
    <div class="security-item" v-for="(item, index) in data" :key="index">
      <img
        :src="
          require(`../../../assets/img/servicePlatform/security/${item.icon}.png`)
        "
      />
      <span
        >{{ item.text }}
        <span style="color: #02fcfc">{{ item.num }}</span></span
      >
    </div>
  </div>
</template>

<script>
import { securityLeft1 } from "@/data/dataService.js";
export default {
  components: {},
  data() {
    return {
      data: securityLeft1,
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="less">
.security-row {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: nowrap;
  margin-top: 15px;
  .security-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      font-size: 12px;
      margin-top: 12px;
    }
  }
}
</style>
