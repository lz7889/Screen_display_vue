<template>
  <div class="leftGraph3" id='main'></div>
</template>

<script>
import { populationLeft3 } from "@/data/dataService.js";
export default {
  components: {},
  data() {
    return {
      data: populationLeft3,
      chartDom: {},
      activeItem: "order"
    };
  },
  created() {},
  mounted(){
    this.drawLine();
    let _this = this;
    window.addEventListener("resize", () => {
      _this.chartDom.resize();
    });
  },
  methods: {
    drawLine(){
      this.chartDom = this.$echarts.init(
        document.getElementById("main")
      );
      this.chartDom.setOption({
        color: ["#EBB517", "#617395", "#5DD3A3", "#5789F0"],
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '25%',
            right:'20%',
            orient: 'vertical',
            textStyle:{
              color:'#fff'
            },
            icon:'rect',
            itemWidth:12,
            itemHeight:12
        },
        series: [
            {
              // name: '访问来源',
              type: 'pie',
              top: '10%',
              left: '-50%',
              radius: ['60%', '80%'],
              avoidLabelOverlap: false,
              label: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                label: {
                    show: true,
                    fontSize: '12',
                    fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                {value: 50, name: '精神障碍患者'},
                {value: 500, name: '社区矫正人员'},
                {value: 700, name: '刑满释放人员'},
                {value: 100, name: '涉毒人员'}
              ]
            }
        ]
      });
    }
  },
};
</script>

<style scoped lang="less">
.leftGraph3{
  width: 100%;
  height: 100%;
}
</style>
