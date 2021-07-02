// 千分号
function formatter(number) {
  const numbers = number
    .toString()
    .split("")
    .reverse();
  const segs = [];

  while (numbers.length) segs.push(numbers.splice(0, 3).join(""));

  return segs
    .join(",")
    .split("")
    .reverse()
    .join("");
}

export const getData11 = {
  Time: ["2时", "4时", "6时", "8时", "10时", "12时", "14时", "16时", "18时", "20时", "22时", "24时"],
  datas1: [80, 180, 300, 234, 54, 365, 234, 214, 121, 76, 84, 425],
  datas2: [20, 280, 30, 334, 54, 87, 23, 2, 124, 324, 123, 321],
};

export const getData23 = {
  indicator: [
    { name: "送餐洗护", max: 10000 },
    { name: "e乐监护智能穿戴设备", max: 10000 },
    { name: "定期体检预约", max: 10000 },
    { name: "物业缴费", max: 10000 },
    { name: "小e智能客服机器人", max: 10000 },
    { name: "送餐洗护", max: 10000 },
  ],
  older: [4200, 3000, 6000, 6500, 5000, 5000],
  medical: [7000, 4400, 2800, 2600, 4200, 3200],
  property: [6000, 8000, 5300, 7800, 6600, 7600],
};

export const getData12 = {
  left: [
    {
      number: {
        number: [1254652],
        content: "{nt}",
        style: {
          fontSize: 24,
          fill: "#02fdfd",
        },
        textAlign: "left",
        formatter,
      },
      title: "电商订单总数",
    },
    {
      number: {
        number: [6554652],
        content: "{nt}",
        style: {
          fontSize: 24,
          fill: "#02fdfd",
        },
        textAlign: "left",
        formatter,
      },
      title: "结算总金额",
    },
    {
      number: {
        number: [938316520],
        content: "{nt}",
        style: {
          fontSize: 24,
          fill: "#02fdfd",
        },
        textAlign: "left",
        formatter,
      },
      title: "订单总金额",
    },
  ],
  right: [
    {
      number: {
        number: [2354],
        content: "{nt}",
        style: {
          fontSize: 24,
          fill: "#02fdfd",
        },
        textAlign: "left",
        formatter,
      },
      title: "接入商家总数",
    },
    {
      number: {
        number: [34572],
        content: "{nt}",
        style: {
          fontSize: 24,
          fill: "#02fdfd",
        },
        textAlign: "left",
        formatter,
      },
      title: "监督告警总数",
    },
    {
      number: {
        number: [39216565],
        content: "{nt}",
        style: {
          fontSize: 24,
          fill: "#02fdfd",
        },
        textAlign: "left",
        formatter,
      },
      title: "存证总数",
    },
  ],
  centerMap: [
    {
      name: "北京",
      value: 324,
    },
    {
      name: "天津",
      value: 13,
    },
    {
      name: "上海",
      value: 240,
    },
    {
      name: "重庆",
      value: 1475,
    },
    {
      name: "河北",
      value: 13,
    },
    {
      name: "河南",
      value: 83,
    },
    {
      name: "云南",
      value: 11,
    },
    {
      name: "辽宁",
      value: 19,
    },
    {
      name: "黑龙江",
      value: 15,
    },
    {
      name: "湖南",
      value: 69,
    },
    {
      name: "安徽",
      value: 260,
    },
    {
      name: "山东",
      value: 39,
    },
    {
      name: "新疆",
      value: 4,
    },
    {
      name: "江苏",
      value: 31,
    },
    {
      name: "浙江",
      value: 104,
    },
    {
      name: "江西",
      value: 36,
    },
    {
      name: "湖北",
      value: 252,
    },
    {
      name: "广西",
      value: 33,
    },
    {
      name: "甘肃",
      value: 247,
    },
    {
      name: "山西",
      value: 9,
    },
    {
      name: "内蒙古",
      value: 157,
    },
    {
      name: "陕西",
      value: 22,
    },
    {
      name: "吉林",
      value: 4,
    },
    {
      name: "福建",
      value: 18,
    },
    {
      name: "贵州",
      value: 5,
    },
    {
      name: "广东",
      value: 6398,
    },
    {
      name: "青海",
      value: 41,
    },
    {
      name: "西藏",
      value: 0,
    },
    {
      name: "四川",
      value: 484,
    },
    {
      name: "宁夏",
      value: 404,
    },
    {
      name: "海南",
      value: 22,
    },
    {
      name: "南海诸岛",
      value: 0,
    },
    {
      name: "台湾",
      value: 3,
    },
    {
      name: "香港",
      value: 5,
    },
    {
      name: "澳门",
      value: 12,
    },
  ],
};

export const getData13 = {
  alarmTotal: [
    {
      label: "告警总数",
      value: 55,
    },
    {
      label: "高空抛物告警",
      value: 12,
    },
    {
      label: "实时监控告警",
      value: 40,
    },
  ],
  alarmDetail: {
    label: ["人形告警", "车辆告警", "市场部", "跌倒求助告警", "环境监控告警"],
    value: [210, 150, 200, 250, 180],
  },
};
