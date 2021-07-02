<template>
  <div style="width:100%;height:100%" id="container"></div>
</template>
<script>
const VueAMap = window.AMap;
export default {
  data() {
    return {};
  },
  mounted() {
    this.mapInit();
  },
  methods: {
    mapInit() {
      console.log(VueAMap);
      const container = document.querySelector('#container');
      let buildingLayer = new VueAMap.Buildings({ zIndex: 120, zooms: [16, 20] });
      let options = {
        hideWithoutStyle: true, //是否隐藏设定区域外的楼块
        areas: [
          {
            //围栏1
            //visible:false,//是否可见
            rejectTexture: true, //是否屏蔽自定义地图的纹理
            color1: '#13b0fa', //楼顶颜色
            color2: '#080d22', //楼面颜色
            path: [
              [106.498608, 29.58808],
              [106.498068, 29.58815],
              [106.49698, 29.588206],
              [106.49365, 29.588178],
              [106.493419, 29.588145],
              [106.493301, 29.588024],
              [106.493103, 29.584997],
              [106.493468, 29.584904],
              [106.498046, 29.584778],
              [106.49833, 29.584844],
              [106.498544, 29.585035],
              [106.498608, 29.58808],
            ],
          },
        ],
      };
      buildingLayer.setStyle(options); //此配色优先级高于自定义mapStyle

      let map = new VueAMap.Map(container, {
        zoom: 17,
        pitch: 40,
        showBuildingBlock: true,
        showIndoorMap: false,
        showLabel: false,
        mapStyle: 'amap://styles/darkblue',
        center: [106.495731, 29.586591],
        features: ['bg', 'point', 'road'],
        viewMode: '3D',
        layers: [VueAMap.createDefaultLayer(), buildingLayer],
      });

      // 以 icon URL 的形式创建一个途经点
      let marker1 = new VueAMap.Marker({
        position: new VueAMap.LngLat(106.495731, 29.584983),
        // 将一张图片的地址设置为 icon
        icon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEvklEQVRYR+2XXWxTZRjH//+3brL2tBhZW6rEGCWkpxtEBWPgQiGCMUHUaPzACxiIM+qFgRhj0ESMGL+IeCN+kMjRYEARNQGNEBMhauQzcbCeFrgAEoK0XdFsZwts7fuYc9pC6boNBeSG9/a87/P/Pf/nYytxmQ8vsz6uAAzrQG8uPllr1a6Iu0E0CfiVoqz3N9s7L1bphgRwTsQnQql9rhCJ3SK4AUDUExZZB/gsI9q59UJBhgTozSW+E8EDWrM9NDa52hVysi33AmgD5LGy8A/KxzX+Mcmv/ytIXQAnE78HVFsgstKIppbUBu/OxKcRbCPZBqCBwK+AWP5wyiJR/Dcw9QGy5jqAj3tuAzt0UZaPjqW+rw18KjPxpoIqPgNxXUEzBPsBWIGrfWt4zf6/zgdkEICbnaL6TQSfKMqAgPMABAF0CmR5MJL6sjawCHxO1lwKso3ATSSOuiCqoK2mWPrIcCCDAHqy5mqCi0g9JRBO7+3pajWptQsxH0AMgqOkvD6U3b05c5EInwVwK4C/3dJAlGVEkx31QOoAJA4QctyIpGZUP8gfGz+usbFhPkuOTACQh+At3VSwQqGDXbXBnbw5S4p8mcBdbiUJrFGA1RSxf6m+OwigN5twBLLbBXCy5s/u5WqYfH58qLHY6FrtOnIbBP1CrGiAWKMiqUOD+iQXn1DQXAZybrmnNorWVmhserM34rUPenOJXSIYpXxqdrG/cLP7PRhLb3NhRHgwGLWfrrxxuhJt0F4DullChB/6fGL5m+1dtXEPH75xVDjgfxXASyCSRthurQvgZMwXQb4NyFbV3/Ckf9y+Y+7FnkziY6VwPBC2X6sN3pNpeZj09sN9pSxlPUt131K5250xH1SkC3CL8ulp/jHp3+sCVMRItEPg1tYSDSsYs5P1msg52TrJuLbT25hOxpwFxTYInijb3U0wT0qXCG73BEWeC0RTqyqxhtmE5iItXEhgKogBQqxCQa0eHUvurgZxsgkB0AHyM326+HloXDrf15W4o1iUeQQeARkGkIUgC6IVWhYbY1Pvjwhwps4nWubCJwshmFnOagOK+oNgLL3dc+vP+HT6XGs5HcAxAZYEI/aG7mxigQI+BfCmEbGXOlmzA+AkrXxmqHl/ehCAW2NS3PEClOro0/JKJGI7Z0AyibVUeBRATgTXuT0CqJVGJPljNYiAq1wAr2nBKQYQ61MyUzS/BbDJiNj31x3DkpWyrfSR00XwEbT2th6vUtdDsBaC96hkBcB2ESzzvhE7qdU7/mjnN5XAPZn4Q6TaWMm+N9eyWURma+DO0FB7oAJwdv49S6tPxtdYnKoH1CkRHhLBF2WA9nJp0hS8YUTttU7W3ARwCqmeInVOa+wgsSkQPjf7c6agHgBZytI9uqC3e/sgk3gXxAuVVX0635LoL8jz3tTUOa6wCOaQak4g3Oktn2FLUO2AEbHPmRL3PyQRtcf9Q1W9kDwH8uNDfbpxcSm42kul/tCFgSUgFxPYEIjYbv8MOmcEzqMEpceCk0BxhhE94M3+hZ4RACpNWZYh90L4U6XzL1R8xB6oLcHFEByxB85e4BEjYi+4FKJDNeEeAJM9W4hlla7/3wAutdBQ8a/8NLvsDvwD+FA1P7rCycIAAAAASUVORK5CYII=',
        // 设置了 icon 以后，设置 icon 的偏移量，以 icon 的 [center bottom] 为原点
        offset: new VueAMap.Pixel(-13, -30),
      });
      let marker2 = new VueAMap.Marker({
        position: new VueAMap.LngLat(106.493731, 29.586983),
        // 将一张图片的地址设置为 icon
        icon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEvklEQVRYR+2XXWxTZRjH//+3brL2tBhZW6rEGCWkpxtEBWPgQiGCMUHUaPzACxiIM+qFgRhj0ESMGL+IeCN+kMjRYEARNQGNEBMhauQzcbCeFrgAEoK0XdFsZwts7fuYc9pC6boNBeSG9/a87/P/Pf/nYytxmQ8vsz6uAAzrQG8uPllr1a6Iu0E0CfiVoqz3N9s7L1bphgRwTsQnQql9rhCJ3SK4AUDUExZZB/gsI9q59UJBhgTozSW+E8EDWrM9NDa52hVysi33AmgD5LGy8A/KxzX+Mcmv/ytIXQAnE78HVFsgstKIppbUBu/OxKcRbCPZBqCBwK+AWP5wyiJR/Dcw9QGy5jqAj3tuAzt0UZaPjqW+rw18KjPxpoIqPgNxXUEzBPsBWIGrfWt4zf6/zgdkEICbnaL6TQSfKMqAgPMABAF0CmR5MJL6sjawCHxO1lwKso3ATSSOuiCqoK2mWPrIcCCDAHqy5mqCi0g9JRBO7+3pajWptQsxH0AMgqOkvD6U3b05c5EInwVwK4C/3dJAlGVEkx31QOoAJA4QctyIpGZUP8gfGz+usbFhPkuOTACQh+At3VSwQqGDXbXBnbw5S4p8mcBdbiUJrFGA1RSxf6m+OwigN5twBLLbBXCy5s/u5WqYfH58qLHY6FrtOnIbBP1CrGiAWKMiqUOD+iQXn1DQXAZybrmnNorWVmhserM34rUPenOJXSIYpXxqdrG/cLP7PRhLb3NhRHgwGLWfrrxxuhJt0F4DullChB/6fGL5m+1dtXEPH75xVDjgfxXASyCSRthurQvgZMwXQb4NyFbV3/Ckf9y+Y+7FnkziY6VwPBC2X6sN3pNpeZj09sN9pSxlPUt131K5250xH1SkC3CL8ulp/jHp3+sCVMRItEPg1tYSDSsYs5P1msg52TrJuLbT25hOxpwFxTYInijb3U0wT0qXCG73BEWeC0RTqyqxhtmE5iItXEhgKogBQqxCQa0eHUvurgZxsgkB0AHyM326+HloXDrf15W4o1iUeQQeARkGkIUgC6IVWhYbY1Pvjwhwps4nWubCJwshmFnOagOK+oNgLL3dc+vP+HT6XGs5HcAxAZYEI/aG7mxigQI+BfCmEbGXOlmzA+AkrXxmqHl/ehCAW2NS3PEClOro0/JKJGI7Z0AyibVUeBRATgTXuT0CqJVGJPljNYiAq1wAr2nBKQYQ61MyUzS/BbDJiNj31x3DkpWyrfSR00XwEbT2th6vUtdDsBaC96hkBcB2ESzzvhE7qdU7/mjnN5XAPZn4Q6TaWMm+N9eyWURma+DO0FB7oAJwdv49S6tPxtdYnKoH1CkRHhLBF2WA9nJp0hS8YUTttU7W3ARwCqmeInVOa+wgsSkQPjf7c6agHgBZytI9uqC3e/sgk3gXxAuVVX0635LoL8jz3tTUOa6wCOaQak4g3Oktn2FLUO2AEbHPmRL3PyQRtcf9Q1W9kDwH8uNDfbpxcSm42kul/tCFgSUgFxPYEIjYbv8MOmcEzqMEpceCk0BxhhE94M3+hZ4RACpNWZYh90L4U6XzL1R8xB6oLcHFEByxB85e4BEjYi+4FKJDNeEeAJM9W4hlla7/3wAutdBQ8a/8NLvsDvwD+FA1P7rCycIAAAAASUVORK5CYII=',
        // 设置了 icon 以后，设置 icon 的偏移量，以 icon 的 [center bottom] 为原点
        offset: new VueAMap.Pixel(-13, -30),
      });
      let marker3 = new VueAMap.Marker({
        position: new VueAMap.LngLat(106.497331, 29.586983),
        // 将一张图片的地址设置为 icon
        icon:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEvklEQVRYR+2XXWxTZRjH//+3brL2tBhZW6rEGCWkpxtEBWPgQiGCMUHUaPzACxiIM+qFgRhj0ESMGL+IeCN+kMjRYEARNQGNEBMhauQzcbCeFrgAEoK0XdFsZwts7fuYc9pC6boNBeSG9/a87/P/Pf/nYytxmQ8vsz6uAAzrQG8uPllr1a6Iu0E0CfiVoqz3N9s7L1bphgRwTsQnQql9rhCJ3SK4AUDUExZZB/gsI9q59UJBhgTozSW+E8EDWrM9NDa52hVysi33AmgD5LGy8A/KxzX+Mcmv/ytIXQAnE78HVFsgstKIppbUBu/OxKcRbCPZBqCBwK+AWP5wyiJR/Dcw9QGy5jqAj3tuAzt0UZaPjqW+rw18KjPxpoIqPgNxXUEzBPsBWIGrfWt4zf6/zgdkEICbnaL6TQSfKMqAgPMABAF0CmR5MJL6sjawCHxO1lwKso3ATSSOuiCqoK2mWPrIcCCDAHqy5mqCi0g9JRBO7+3pajWptQsxH0AMgqOkvD6U3b05c5EInwVwK4C/3dJAlGVEkx31QOoAJA4QctyIpGZUP8gfGz+usbFhPkuOTACQh+At3VSwQqGDXbXBnbw5S4p8mcBdbiUJrFGA1RSxf6m+OwigN5twBLLbBXCy5s/u5WqYfH58qLHY6FrtOnIbBP1CrGiAWKMiqUOD+iQXn1DQXAZybrmnNorWVmhserM34rUPenOJXSIYpXxqdrG/cLP7PRhLb3NhRHgwGLWfrrxxuhJt0F4DullChB/6fGL5m+1dtXEPH75xVDjgfxXASyCSRthurQvgZMwXQb4NyFbV3/Ckf9y+Y+7FnkziY6VwPBC2X6sN3pNpeZj09sN9pSxlPUt131K5250xH1SkC3CL8ulp/jHp3+sCVMRItEPg1tYSDSsYs5P1msg52TrJuLbT25hOxpwFxTYInijb3U0wT0qXCG73BEWeC0RTqyqxhtmE5iItXEhgKogBQqxCQa0eHUvurgZxsgkB0AHyM326+HloXDrf15W4o1iUeQQeARkGkIUgC6IVWhYbY1Pvjwhwps4nWubCJwshmFnOagOK+oNgLL3dc+vP+HT6XGs5HcAxAZYEI/aG7mxigQI+BfCmEbGXOlmzA+AkrXxmqHl/ehCAW2NS3PEClOro0/JKJGI7Z0AyibVUeBRATgTXuT0CqJVGJPljNYiAq1wAr2nBKQYQ61MyUzS/BbDJiNj31x3DkpWyrfSR00XwEbT2th6vUtdDsBaC96hkBcB2ESzzvhE7qdU7/mjnN5XAPZn4Q6TaWMm+N9eyWURma+DO0FB7oAJwdv49S6tPxtdYnKoH1CkRHhLBF2WA9nJp0hS8YUTttU7W3ARwCqmeInVOa+wgsSkQPjf7c6agHgBZytI9uqC3e/sgk3gXxAuVVX0635LoL8jz3tTUOa6wCOaQak4g3Oktn2FLUO2AEbHPmRL3PyQRtcf9Q1W9kDwH8uNDfbpxcSm42kul/tCFgSUgFxPYEIjYbv8MOmcEzqMEpceCk0BxhhE94M3+hZ4RACpNWZYh90L4U6XzL1R8xB6oLcHFEByxB85e4BEjYi+4FKJDNeEeAJM9W4hlla7/3wAutdBQ8a/8NLvsDvwD+FA1P7rCycIAAAAASUVORK5CYII=',
        // 设置了 icon 以后，设置 icon 的偏移量，以 icon 的 [center bottom] 为原点
        offset: new VueAMap.Pixel(-13, -30),
      });

      // 将 markers 添加到地图
      map.add([marker1, marker2, marker3]);

      new VueAMap.Polygon({
        bubble: true,
        fillOpacity: 0.3,
        strokeWeight: 1,
        path: options.areas[0].path,
        map: map,
      });
    },
  },
};
</script>

<style></style>
