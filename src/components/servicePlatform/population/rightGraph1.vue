<template>
  <div class="population_right">
    <vue-seamless-scroll :data="list" class="seamless-warps">
      <ul class="itemarr">
        <li v-for="item in list" :key="item.index">
          <div class="population_item">
            <!-- 左边 -->
            <div class="left">
              <img :src="item.img" alt="" />
              <div class="left_ohjytr">
                <div class="left_nufrety">
                  <i class="el-icon-user-solid"></i>
                  <div>{{ item.names }}</div>
                </div>
                <div>{{ item.prson }}</div>
              </div>
            </div>
            <!-- 右边 -->
            <div class="right">
              <div class="dsfret">{{ item.time }}</div>
              <div>{{ item.temperature }}</div>
            </div>
          </div>
        </li>
      </ul>
    </vue-seamless-scroll>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      list: [
        {
          img: require("../../../assets/img/servicePlatform/population/a.png"),
          names: "G1-MJ-1502",
          prson: "员工：张*名  进门",
          time: "2021.05.29 ",
          temperature: "体温：36.4℃，正常",
        },
        {
          img: require("../../../assets/img/servicePlatform/population/b.png"),
          names: "G1-MJ-1502",
          prson: "员工：王*明  进门",
          time: "2021.05.29 ",
          temperature: "体温：35.5℃，正常",
        },
        {
          img: require("../../../assets/img/servicePlatform/population/c.png"),
          names: "G1-MJ-1502",
          prson: "员工：黄**  进门",
          time: "2021.05.29 ",
          temperature: "体温：36.4℃，正常",
        },
        {
          img: require("../../../assets/img/servicePlatform/population/d.png"),
          names: "G1-MJ-1502",
          prson: "员工：李**  进门",
          time: "2021.05.29 ",
          temperature: "体温：36.4℃，正常",
        },
        {
          img: require("../../../assets/img/servicePlatform/population/e.png"),
          names: "G1-MJ-1502",
          prson: "员工：王*名  进门",
          time: "2021.05.29 ",
          temperature: "体温：36.4℃，正常",
        },
        {
          img: require("../../../assets/img/servicePlatform/population/f.png"),
          names: "G1-MJ-1502",
          prson: "员工：孔*化  进门",
          time: "2021.05.29 ",
          temperature: "体温：35.9℃，正常",
        },
        {
          img: require("../../../assets/img/servicePlatform/population/e.png"),
          names: "G1-MJ-1502",
          prson: "员工：李*叮  进门",
          time: "2021.05.29 ",
          temperature: "体温：36.5℃，正常",
        },
        {
          img: require("../../../assets/img/servicePlatform/population/f.png"),
          names: "G1-MJ-1502",
          prson: "员工：孙*莉  进门",
          time: "2021.05.29 ",
          temperature: "体温：36.1℃，正常",
        },
        {
          img: require("../../../assets/img/servicePlatform/population/e.png"),
          names: "G1-MJ-1502",
          prson: "员工：游*凯  进门",
          time: "2021.05.29 ",
          temperature: "体温：35.8℃，正常",
        },
        {
          img: require("../../../assets/img/servicePlatform/population/f.png"),
          names: "G1-MJ-1502",
          prson: "员工：刘*莉  进门",
          time: "2021.05.29 ",
          temperature: "体温：36.6℃，正常",
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="less">
.seamless-warps {
  height: 100%;
  overflow: hidden;
}
.population_right {
  width: 100%;
  height: 100%;
  margin-top: 40px;

  .itemarr {
    // margin-top: 60px;
  }
  .population_item {
    // height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #b9babf;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(19, 50, 142, 1);
    margin-top: 10px;
    .left {
      // font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #ffffff;
      display: flex;
      align-items: center;
      .left_nufrety {
        display: flex;
        // align-items: center;
        padding-bottom: 10px;
      }
      .left_ohjytr {
        padding-left: 10px;
      }
    }
    .right {
      .dsfret {
        padding-bottom: 10px;
      }
    }
  }
}
</style>
