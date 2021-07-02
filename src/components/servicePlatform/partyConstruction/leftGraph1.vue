<template>
  <div class="leftGraph1">
    <!-- 户籍人口 -->
    <div class="leftGraph1Left">
      <p class="leftTitle">户籍人口</p>
      <div class="leftProgress1">
        <div></div>
      </div>
      <p class="leftNum">3,547(74%)</p>
    </div>
    <!-- 流动人口 -->
    <div class="leftGraph1Left">
      <p class="rightTitle">流动人口</p>
      <div class="leftProgress2">
        <div></div>
      </div>
      <p class="rightNum">2,000(26%)</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="less">
.leftGraph1{
  width: 100%;
  height: 100%;
  // background: red;
  padding: 0 3%;
  box-sizing: border-box;
  display: flex;
}
.leftGraph1>div{
  width: 50%;
  height: 100%;
  // background: aqua;
  margin-top: 3%;
}
.leftTitle{
  font-size: 12px;
  line-height: 200%;
  font-weight: 700;
  text-align: left;
}
.rightTitle{
  font-size: 12px;
  line-height: 200%;
  font-weight: 700;
  text-align: right;
}
.leftProgress1{
  width: 100%;
  height: 17%;
  max-height: 15.5px;
  background: rgba(62, 66, 83, .7);
  border-radius: 30px 0 0 30px;
  transition: .5s;
}
.leftProgress1>div{
  float: right;
  width: 70%;
  height: 100%;
  background: #E3B652;
  border-radius: 30px 0 0 30px;
}
.leftNum{
  font-size: 12px;
  color: rgba(255, 255, 255, .8);
  line-height: 200%;
}
.leftProgress2{
  width: 100%;
  height: 17%;
  max-height: 15.5px;
  background: rgba(62, 66, 83, .7);
  border-radius: 0 30px 30px 0;
  transition: .5s;
}
.leftProgress2>div{
  float: left;
  width: 50%;
  height: 100%;
  background: #82C9D3;
  border-radius: 0 30px 30px 0;
}
.rightNum{
  font-size: 12px;
  color: rgba(255, 255, 255, .8);
  line-height: 200%;
  text-align: right;
}
</style>
