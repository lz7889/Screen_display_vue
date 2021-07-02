<template>
  <div class="population-row">
    <div class="population-item" v-for="(item, index) in data" :key="index">
      <img
        :src="
          require(`../../../assets/img/servicePlatform/population/${item.icon}.png`)
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
import { populationLeft1 } from "@/data/dataService.js";
export default {
  components: {},
  data() {
    return {
      data: populationLeft1,
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="less">
.population-row {
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  height: 85%;
  padding-top: 20px;
  .population-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33%;
    span {
      font-size: 12px;
      margin-top: 12px;
    }
  }
}
</style>
