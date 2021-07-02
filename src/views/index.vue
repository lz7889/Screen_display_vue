<template>
  <div class="home">
    <Top></Top>
  </div>
</template>

<script>
// @ is an alias to /src
import Top from "../components/Top";
export default {
  components: {
    Top,
  },
};
</script>

<style lang="less" scoped>
.home {
  // background: black;
  width: 100%;
  height: 100%;
}
</style>
