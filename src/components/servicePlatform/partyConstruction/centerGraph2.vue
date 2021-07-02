<template>
  <div class="centerGraph2">
      <div class="centerGraph2Box" v-for="val,index in centerGraph" :key="index">
        <p>{{val.name}}</p>
        <h3>{{`${parseFloat(val.num).toLocaleString()}`}}</h3>
      </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      centerGraph:[
        {name:'镇/街道总数',num:12},
        {name:'网格总数',num:128},
        {name:'综合网格总数',num:134},
        {name:'专属网格总数',num:48},
        {name:'实有人口',num:61257},
        {name:'流动人口',num:4658},
        {name:'房屋总数',num:7456},
        {name:'出租房总数',num:1652},
        {name:'服务对象',num:29201},
        {name:'特殊人群',num:4201},
        {name:'重点人员',num:1252},
        {name:'法人机构',num:382}
      ]
    };
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="less">
.centerGraph2{
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  // background: red;
}
.centerGraph2Box{
  width: calc(100% / 6);
  height: 50%;
  // background: salmon;
  padding: 15px 0 0 25px;
  box-sizing: border-box;
}
.centerGraph2Box>p{
  font-size: 0.75rem;
  color: rgba(255,255,255,.8);
  line-height: 150%;
}
.centerGraph2Box>h3{
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 150%;
  color: #fff;
}
</style>
