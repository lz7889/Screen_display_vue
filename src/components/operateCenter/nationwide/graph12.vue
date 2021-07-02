<template>
  <div id="my-charts12" style="width: 100%; height: 100%"></div>
</template>

<script>
// 引入中国地图数据
import "../../../assets/js/china.js";
export default {
  components: {},
  data() {
    return {};
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
      var mapName = "china";
      var geoCoordMap = {};
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
            });
          }
        }
        return res;
      };
      let dataPin = [
        {
          name: "北京",
          value: 1000,
        },
        {
          name: "浙江",
          value: 1000,
        },

        {
          name: "重庆",
          value: 1000,
        },
        {
          name: "广东",
          value: 1000,
        },
      ];
      var mapFeatures = this.$echarts.getMap(mapName).geoJson.features;
      mapFeatures.forEach(function (v) {
        // 地区名称
        var name = v.properties.name;
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp;
      });
      this.chartDom = this.$echarts.init(
        document.getElementById("my-charts12")
      );
      // let data = this.centerMap;
      var domImg = document.createElement("img");
      domImg.style.height = domImg.height = domImg.width = domImg.style.width =
        "10px";
      domImg.src =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGimlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTA1LTI5VDExOjE5OjQyKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA1LTI5VDExOjE5OjQyKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wNS0yOVQxMToxOTo0MiswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMTI1ZjcwYS02NmEwLTZhNDEtYjE3NC02MGEzMTBmMDhhOGEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiNzBiNTliZC1jZjU3LTA2NDEtOWM2OC1mMzU2MGE5ZTgwYTEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjMGRkMmIxZC02NWVlLWU4NDUtODdkYy00NGQxODIzMDVlMDYiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmMwZGQyYjFkLTY1ZWUtZTg0NS04N2RjLTQ0ZDE4MjMwNWUwNiIgc3RFdnQ6d2hlbj0iMjAyMS0wNS0yOVQxMToxOTo0MiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTI1ZjcwYS02NmEwLTZhNDEtYjE3NC02MGEzMTBmMDhhOGEiIHN0RXZ0OndoZW49IjIwMjEtMDUtMjlUMTE6MTk6NDIrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+eG1wLmRpZDpiOGUxM2IwNS0zZjVjLTVlNGItYTQ0Mi01NGM3MmI1MWRhNzg8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6XvoadAAAeKUlEQVR4nM1925IkN7KcewBZ3TMkd7WmPSbTkx70E/pUfdwxk5letZJ2Rc50VyUiXA8BIJFV1UPu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";
      this.chartDom.setOption({
        geo: {
          map: "china",
          zoom: 1.4, //当前视角的缩放比例
          aspectScale: 0.85,
          layoutCenter: ["50%", "50%"], //地图位置
          layoutSize: "100%",
          // 背景阴影效果
          // shadow效果
          // itemStyle: {
          //   normal: {
          //     areaColor: "rgba(24, 57, 154,0.4)",
          //     shadowColor: "rgba(0,243,255,0.2)",
          //     shadowOffsetX: 5,
          //     shadowOffsetY: 15,
          //   },
          // },
          // 发光效果
          itemStyle: {
            normal: {
              borderColor: new this.$echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "#00F6FF",
                  },
                  {
                    offset: 1,
                    color: "#53D9FF",
                  },
                ],
                false
              ),
              borderWidth: 1,
              shadowColor: "rgba(10,76,139,.8)",
              shadowOffsetY: 0,
              shadowBlur: 100,
            },
          },
          regions: [
            {
              name: "南海诸岛",
              itemStyle: {
                normal: {
                  opacity: 0,
                },
              },
            },
          ],
        },
        visualMap: {
          type: "piecewise",
          show: false,
          pieces: [
            {
              min: 500,
              label: ">500",
            },
          ],
          inRange: {
            color: ["#ff9400"],
          },
        },
        series: [
          // 常规地图
          {
            type: "map",
            mapType: "china",
            aspectScale: 0.85,
            layoutCenter: ["50%", "50%"], //地图位置
            layoutSize: "100%",
            zoom: 1.4, //当前视角的缩放比例
            itemStyle: {
              normal: {
                areaColor: {
                  image: domImg,
                  repeat: "repeat",
                },
                // borderColor: "rgba(0,243,255,0.1)",
                borderColor: "#0b63e3",
                borderWidth: 2,
              },
              // 鼠标hover效果
              emphasis: {
                areaColor: "#FFAE00",
                label: {
                  show: false,
                },
              },
            },
          },
          // 高亮块
          {
            type: "map",
            map: "china",
            zoom: 1.25,
            // itemStyle: {
            //   normal: {
            //     borderColor: "#ff9400",
            //     borderWidth: 1,
            //   },
            //   emphasis: {
            //     // 被选中的颜色
            //     areaColor: "#FFAE00",
            //   },
            // },
            data: dataPin,
          },
          // 区域散点图
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            // 坐标点大小
            // symbolSize: 8,
            // rippleEffect: {
            //   //坐标点动画
            //   period: 10,
            //   scale: 7,
            //   brushType: "fill",
            // },
            label: {
              normal: {
                show: true,
                position: "bottom",
                formatter: "{b}运营中心",
                color: "#fff",
                fontWeight: "bold",
                fontSize: 16,
              },
            },
            data: convertData(dataPin),
            itemStyle: {
              //坐标点颜色
              normal: {
                show: true,
                color: "rgba(255, 148, 0,.6)",
                shadowBlur: 20,
                shadowColor: "#fff",
                emphasis: {
                  // 被选中的颜色
                  areaColor: "#FFAE00",
                },
              },
            },
          },
        ],
      });
    },
  },
};
</script>

<style scoped lang="less"></style>
