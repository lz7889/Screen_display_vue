<template>
  <div class="rightGraph1">
    <div class="rightGraph1Box">
      <div class="rightGraph1Main">
        <p>党组织数量</p>
        <h3>3,547</h3>
        <img src="../../../assets/img/servicePlatform/party-construction/rightIcon1.png">
      </div>
    </div>
    <div class="rightGraph1Box">
      <div class="rightGraph1Main">
        <p>区党员数量</p>
        <h3>12,473</h3>
        <img src="../../../assets/img/servicePlatform/party-construction/rightIcon2.png">
      </div>
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
.rightGraph1{
  width: 100%;
  height: 100%;
  display: flex;
  // background: red;
  justify-content: space-between;
}
.rightGraph1Box{
  width: 50%;
  height: 100%;
  background: url(../../../assets/img/servicePlatform/party-construction/rightBg.png)no-repeat center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rightGraph1Main{
  width: 55%;
  height: 40%;
  // background: red;
  position: relative;
}
.rightGraph1Main>p{
  font-size: 0.75rem;
  color: rgba(255,255,255,.8);
  line-height: 150%;
}
.rightGraph1Main>h3{
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 150%;
  color: #fff;
}
.rightGraph1Main>img{
  width: 25%;
  // height: 60%;
  position: absolute;
  right: 0px;
  top: 0px;
}
</style>
