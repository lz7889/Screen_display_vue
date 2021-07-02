<template>
  <div id="my-charts44" style="width:100%; height:100%"></div>
  
</template>

<script>
export default {
  props: ["son4"],
  components: {},
  data() {
    return {
      chartDom: {},
    };
  },
  created() {
    this.$nextTick(() => {
      this.drawCharts();
    });
  },
  mounted() {
    this.drawCharts();
    let _this = this;
    window.addEventListener("resize", () => {
      _this.chartDom.resize();
    });
  },
  methods: {
    drawCharts() {
      this.chartDom = this.$echarts.init(
        document.getElementById("my-charts44")
      );

      var data = [
        {
          name: "装备制造",
          value: this.son4,
        },
      ];

      var titleArr = [],
        seriesArr = [];
      let colors = [["rgba(26, 162, 46, 1)", "rgba(14, 37, 87, 1)"]];
      data.forEach(function(item, index) {
        titleArr.push({
          left: index * 20 + 10 + "%",
          top: "65%",
          textAlign: "center",
          textStyle: {
            fontWeight: "normal",
            fontSize: "14",
            color: colors[index][0],
            textAlign: "center",
          },
        });
        seriesArr.push({
          name: item.name,
          type: "pie",
          clockWise: false,
          radius: [65, 40],
          itemStyle: {
            normal: {
              color: colors[index][0],
              shadowColor: colors[index][0],
              shadowBlur: 0,
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
          hoverAnimation: false,
          center: ["50%", "50%"],
          data: [
            {
              value: item.value,
              label: {
                normal: {
                  formatter: function(params) {
                    return params.value + "%";
                  },
                  position: "center",
                  show: true,
                  textStyle: {
                    fontSize: "20",
                    fontWeight: "bold",
                    color: colors[index][0],
                  },
                },
              },
            },
            {
              value: 100 - item.value,
              name: "invisible",
              itemStyle: {
                normal: {
                  color: colors[index][1],
                },
                emphasis: {
                  color: colors[index][1],
                },
              },
            },
          ],
        });
      });

      // let data = this.data;
      this.chartDom.setOption({
        // backgroundColor: "#fff",
        title: titleArr,
        series: seriesArr,
      });
    },
  },
  watch: {
    son4: function(newV, oldV) {
      console.log("新值-----------", oldV);
      console.log("久值-----------", newV);
      if (newV != oldV) {
        this.drawCharts();
      }
    },
  },
};
</script>

<style scoped lang="less"></style>
