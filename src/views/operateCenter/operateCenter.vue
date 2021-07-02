<template>
  <div class="bg">
    <div class="top">
      <Top :active="0">
        智慧社区运营中心
        <br />
        <el-select
          v-model="region"
          class="region-select"
          @change="toggleRegion"
        >
          <el-option
            v-for="item in regionOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
            <div>{{ item.label }}</div>
            <div style="color: #8492a6; font-size: 12px">
              {{ item.address }}
            </div>
          </el-option>
        </el-select>
      </Top>
    </div>
    <router-view />
  </div>
</template>

<script>
import Top from "@/components/Top";

export default {
  components: {
    Top,
  },
  data() {
    return {
      region: this.$route.params.province
        ? this.$route.params.province
        : "全国",
      regionOptions: [
        {
          label: "西南运营中心",
          value: "xinan",
          address: "重庆市仙桃数据谷19号",
        },
        {
          label: "北京市运营中心",
          value: "beijing",
          address: "北京市海淀区中关村软件园7号",
        },
        {
          label: "广东省运营中心",
          value: "guangzhou",
          address: "广州市黄花岗信息园",
        },
        {
          label: "华中运营中心",
          value: "huazhong",
          address: "湖北省武汉市东湖高新区高新大道8号",
        },
      ],
    };
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "updataRoute",
  },
  created() {},
  methods: {
    toggleRegion(index) {
      this.$router.push(`/operateCenter/province/${index}`);
    },
    updataRoute() {
      this.region = this.$route.params.province
        ? this.$route.params.province
        : "全国";
    },
  },
};
</script>
<style scoped lang="less">
.bg {
  width: 100%;
  height: 100%;
  background: url("../../assets/img/OperateCenter/bg.png") no-repeat;
  background-size: cover;
}
.top {
  /deep/ .top_title {
    top: 15px !important;
  }
  .region-select {
    color: #ffffff;
    width: 170px;
    margin: 5px auto;
    /deep/ .el-select,
    /deep/ .el-input,
    /deep/ .el-input__inner {
      background-color: rgba(0, 0, 0, 0);
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      border: 0px;
      border-radius: 0px;
      text-align: center;
    }
    //修改的是el-input上下的小图标的颜色
    /deep/ .el-select .el-input .el-select__caret {
      color: #fff;
    }
    //修改单个的选项的样式
  }
}
.el-popper {
  .el-select-dropdown__item {
    height: 50px;
    line-height: 20px;
    :first-child {
      margin-top: 5px;
    }
  }
}
</style>
<style lang="less">
.el-select {
  display: block;
}
.popper__arrow {
  display: none !important;
}
</style>
