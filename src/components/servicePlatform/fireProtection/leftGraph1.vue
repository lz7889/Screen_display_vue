<template>
  <div class="fire-protection-row">
    <div
      class="fire-protection-item"
      v-for="(item, index) in data"
      :key="index"
    >
      <img
        :src="
          require(`../../../assets/img/servicePlatform/fire-protection/${item.icon}.png`)
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
import { fireProtectionLeft1 } from "@/data/dataService.js";
export default {
  components: {},
  data() {
    return {
      data: fireProtectionLeft1,
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="less">
.fire-protection-row {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: nowrap;
  margin-top: 15px;
  .fire-protection-item {
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
