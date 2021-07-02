<template>
  <div class="top-container">
    <div class="top-item">
      <border-box>
        <div class="left-image">
          <img src="../../../assets/img/servicePlatform/deposit-certificate/deposit-certificate1.png" alt="" />
        </div>
        <div class="right-content">
          <div>{{ data[0].text }}</div>
          <div class="right-content-num">{{ data[0].value }}</div>
        </div>
      </border-box>
    </div>
    <div class="top-item">
      <border-box>
        <div class="left-image">
          <img src="../../../assets/img/servicePlatform/deposit-certificate/deposit-certificate2.png" alt="" />
        </div>
        <div class="right-content">
          <div>{{ data[1].text }}</div>
          <div class="right-content-num">{{ data[1].value }}</div>
        </div>
      </border-box>
    </div>
    <div class="top-item">
      <border-box>
        <div class="left-image">
          <img src="../../../assets/img/servicePlatform/deposit-certificate/deposit-certificate3.png" alt="" />
        </div>
        <div class="right-content">
          <div>{{ data[2].text }}</div>
          <div class="right-content-num">{{ data[2].value }}</div>
          <div class="right-content-compare">
            同比上月
            <span :class="['compare-num', data[2].compareResult]">{{ data[2].compareNum }}</span>
          </div>
        </div>
      </border-box>
    </div>
    <div class="top-item">
      <border-box>
        <div class="left-image">
          <img src="../../../assets/img/servicePlatform/deposit-certificate/deposit-certificate4.png" alt="" />
        </div>
        <div class="right-content">
          <div>{{ data[3].text }}</div>
          <div class="right-content-num">{{ data[3].value }}</div>
          <div class="right-content-compare">
            同比上月
            <span :class="['compare-num', data[3].compareResult]">{{ data[3].compareNum }}</span>
          </div>
        </div>
      </border-box>
    </div>
  </div>
</template>

<script>
import borderBox from '@/components/servicePlatform/borderBox';
import { depositCertificateTop } from '@/data/dataService.js';

export default {
  components: { borderBox },
  data() {
    return {
      data: depositCertificateTop,
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped lang="less">
.box {
  height: calc((100vh - 210px) * 0.18);
}
.top-container {
  display: flex;
  justify-content: space-between;
  .top-item {
    flex: 1;
    margin-left: 20px;
    &:first-child {
      margin-left: 0;
    }
    position: relative;
    .left-image {
      height: 125px;
      width: 118px;
      position: absolute;
      left: 35px;
      top: 12px;
    }
    .right-content {
      font-size: 18px;
      color: #f7f7f7;
      position: absolute;
      left: 192px;
      top: 50%;
      transform: translateY(-50%);
      .right-content-num {
        font-size: 30px;
        font-weight: bold;
        margin-top: 16px;
      }
      .right-content-compare {
        font-size: 18px;
        margin-top: 20px;
        .compare-num {
          margin-left: 20px;
        }
        .increase {
          color: #fe5151;
        }
        .decrease {
          color: #02fafa;
        }
      }
    }
  }
}
</style>
