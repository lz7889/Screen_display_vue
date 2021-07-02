// 两数之间的随机数
function LimitRandom(min, max) {
  var fRound = Math.floor(Math.random() * (max - min + 1) + min);
  return fRound;
}

export const getData13 = {
  topData: {
    time: ["2021年4月", "2021年5月", "2021年6月"],
    label: ["语音识别", "人脸识别", "Smart AI调用"],
    value0: [8234, 6709, 9210],
    value1: [9823, 9890, 10234],
    value2: [3120, 4456, 3456],
  },
  bottomData: {
    time: ["1月", "2月", "3月", "4月", "5月", "6月"],
    label: ["车辆识别", "动态识别", "高空抛物识别"],
    value0: [3431, 2347, 4523, 4356, 7542, 7067],
    value1: [5732, 3367, 5562, 8456, 6209, 6810],
    value2: [7651, 5478, 3432, 6704, 8873, 5810],
  },
};

export const getData22 = [
  { value: 17441, name: "租/售房合同" },
  { value: 31146, name: "二手商品交易合同" },
  { value: 49834, name: "业主投票结果存证" },
  { value: 22425, name: "其它" },
  { value: 22425, name: "生活服务合同" },
  { value: 22425, name: "劳动合同" },
];

export const getData23 = {
  time: ["1月", "2月", "3月", "4月", "5月", "6月"],
  label: ["覆盖社区数量", "注册用户", "入驻商家", "订单数量"],
  value0: [7542, 2347, 4523, 4356, 3431, 7067],
  value1: [3367, 5562, 8456, 6209, 6810, 5732],
  value2: [5478, 3432, 6704, 7651, 8873, 5810],
  value3: [6542, 3347, 5523, 5478, 4431, 3067],
};

export const mapData = {
  beijing: [
    { name: "小区1", value: [116.424692, 39.927967, 530] },
    { name: "小区2", value: [116.290679, 39.857184, 245] },
    { name: "小区3", value: [116.177807, 40.062966, 145] },
    { name: "小区4", value: [115.905234, 40.010063, 355] },
    { name: "小区5", value: [115.941902, 39.708825, 234] },
    { name: "小区6", value: [116.747351, 39.814339, 425] },
    { name: "小区7", value: [116.737316, 40.187897, 145] },
    { name: "小区8", value: [116.226118, 40.225311, 245] },
    { name: "小区9", value: [116.621138, 40.432762, 235] },
    { name: "小区10", value: [117.117604, 40.192158, 145] },
  ],
  xinan: [
    { name: "小区3", value: [108.39972, 30.832314, 451] },
    { name: "小区4", value: [106.765487, 30.036573, 380] },
    { name: "小区5", value: [106.408787, 29.825103, 245] },
    { name: "小区7", value: [106.177807, 30.062966, 145] },
    { name: "小区9", value: [106.486401, 29.590959, 415] },
    { name: "小区10", value: [107.332677, 29.670323, 425] },
    { name: "小区11", value: [106.737316, 29.287897, 145] },
    { name: "小区17", value: [108.016705, 29.507607, 125] },
    { name: "大足", value: [105.7692868, 29.65392091, 140] },
    { name: "丰都", value: [107.7461781, 29.91492542, 140] },
    { name: "黔江", value: [108.7559876, 29.44290625, 333] },
    { name: "铜梁", value: [106.0616035, 29.81036286, 233] },
    { name: "潼南", value: [105.811692, 30.13795513, 243] },
    { name: "巫溪", value: [109.2970739, 31.48090521, 234] },
    { name: "秀山", value: [108.9997005, 28.49462861, 140] },
  ],
  guangzhou: [
    { name: "小区1", value: [113.134697, 23.927967, 350] },
    { name: "小区2", value: [113.355492, 22.541648, 575] },
    { name: "小区3", value: [112.737316, 22.187897, 145] },
    { name: "小区4", value: [112.226118, 22.225311, 45] },
    { name: "小区5", value: [112.621138, 23.432762, 235] },
    { name: "小区6", value: [114.117604, 23.192158, 345] },
    { name: "小区7", value: [114.125719, 22.600122, 145] },
    { name: "小区8", value: [114.636404, 23.72526, 225] },
    { name: "小区9", value: [113.624552, 24.993508, 25] },
    { name: "小区10", value: [110.929348, 21.689845, 25] },
  ],
  huazhong: [
    { name: "小区1", value: [111.240952, 30.674906, 330] },
    { name: "小区2", value: [112.317194, 31.119146, 150] },
    { name: "小区3", value: [114.359294, 29.828361, 251] },
    { name: "小区4", value: [113.465487, 30.336573, 380] },
    { name: "小区5", value: [113.301279, 30.857184, 245] },
    { name: "小区6", value: [112.096427, 32.017016, 275] },
    { name: "小区7", value: [114.414486, 30.452008, 445] },
    { name: "小区8", value: [112.88751, 30.030697, 155] },
    { name: "小区9", value: [111.941902, 30.708825, 415] },
    { name: "小区10", value: [113.747351, 30.81433, 325] },
  ],
};

export const centerTopTotal = {
  beijing: {
    registerNum: 48775,
    activeNum: 112874,
  },
  xinan: {
    registerNum: 36435,
    activeNum: 88484,
  },
  guangzhou: {
    registerNum: 35789,
    activeNum: 101267,
  },
  huazhong: {
    registerNum: 38581,
    activeNum: 103897,
  },
};

export const centerBottom = {
  time: ["0", "3", "6", "9", "12", "15", "18", "21", "24"],
  label: ["开门", "乘梯", "车辆出入", "充电", "监控"],
  beijing: {
    value0: [135, 179, 221, 295, 336, 216, 346, 315, 135],
    value1: [142, 126, 160, 348, 364, 213, 350, 300, 142],
    value2: [182, 123, 164, 333, 315, 255, 314, 380, 182],
    value3: [130, 114, 172, 326, 386, 225, 342, 343, 130],
    value4: [184, 184, 252, 398, 466, 387, 420, 478, 184],
  },
  xinan: {
    value0: [146, 188, 218, 271, 350, 248, 361, 361, 146],
    value1: [102, 109, 163, 336, 400, 334, 350, 334, 102],
    value2: [191, 125, 150, 333, 341, 335, 386, 308, 191],
    value3: [124, 118, 174, 315, 395, 213, 378, 347, 124],
    value4: [203, 198, 279, 394, 478, 373, 429, 407, 203],
  },
  guangzhou: {
    value0: [144, 200, 208, 282, 352, 279, 347, 351, 144],
    value1: [123, 109, 157, 350, 323, 234, 392, 331, 123],
    value2: [174, 105, 162, 332, 341, 250, 334, 313, 174],
    value3: [136, 129, 164, 345, 334, 265, 321, 312, 136],
    value4: [215, 198, 257, 356, 524, 376, 492, 484, 215],
  },
  huazhong: {
    value0: [106, 168, 250, 282, 310, 343, 371, 304, 106],
    value1: [184, 118, 175, 308, 395, 278, 385, 389, 184],
    value2: [168, 124, 166, 346, 341, 290, 400, 352, 168],
    value3: [110, 106, 176, 320, 382, 217, 310, 352, 110],
    value4: [186, 187, 267, 350, 565, 398, 467, 417, 186],
  },
};

export const leftBottom = {
  beijing: [
    {
      text: "全网PV",
      value: 165010,
    },
    {
      text: "全网UV",
      value: 203852,
    },
    {
      text: "全网IP",
      value: 665031,
    },
    {
      text: "移动UV",
      value: 770008,
    },
    {
      text: "居民UV",
      value: 62663,
    },
    {
      text: "商家UV",
      value: 79198,
    },
  ],
  xinan: [
    {
      text: "全网PV",
      value: 196088,
    },
    {
      text: "全网UV",
      value: 238295,
    },
    {
      text: "全网IP",
      value: 551369,
    },
    {
      text: "移动UV",
      value: 828197,
    },
    {
      text: "居民UV",
      value: 62787,
    },
    {
      text: "商家UV",
      value: 66767,
    },
  ],
  guangzhou: [
    {
      text: "全网PV",
      value: 154357,
    },
    {
      text: "全网UV",
      value: 265115,
    },
    {
      text: "全网IP",
      value: 508388,
    },
    {
      text: "移动UV",
      value: 709877,
    },
    {
      text: "居民UV",
      value: 75283,
    },
    {
      text: "商家UV",
      value: 64064,
    },
  ],
  huazhong: [
    {
      text: "全网PV",
      value: 158332,
    },
    {
      text: "全网UV",
      value: 251822,
    },
    {
      text: "全网IP",
      value: 591481,
    },
    {
      text: "移动UV",
      value: 986462,
    },
    {
      text: "居民UV",
      value: 75724,
    },
    {
      text: "商家UV",
      value: 70618,
    },
  ],
};

export const rightBottom = {
  beijing: [
    {
      icon: "wsry",
      text: "尾随人员",
      number: LimitRandom(20, 30),
    },
    {
      icon: "ycqg",
      text: "异常起杆",
      number: LimitRandom(30, 50),
    },
    {
      icon: "lxsb",
      text: "离线设备",
      number: LimitRandom(10, 100),
    },
    {
      icon: "qfyj",
      text: "欠费预警",
      number: LimitRandom(300, 700),
    },
    {
      icon: "xlyc",
      text: "巡逻异常",
      number: LimitRandom(10, 30),
    },
    {
      icon: "ycdl",
      text: "异常登陆",
      number: LimitRandom(40, 80),
    },
    {
      icon: "csgd",
      text: "超时工单",
      number: LimitRandom(10, 30),
    },
    {
      icon: "tsjb",
      text: "投诉举报",
      number: LimitRandom(5, 15),
    },
    {
      icon: "rzsh",
      text: "认证审核",
      number: LimitRandom(400, 600),
    },
    {
      icon: "ycdd",
      text: "异常订单",
      number: LimitRandom(5, 20),
    },
    {
      icon: "spsh",
      text: "商品售后",
      number: LimitRandom(200, 500),
    },
    {
      icon: "spcp",
      text: "商品差评",
      number: LimitRandom(0, 10),
    },
  ],
  xinan: [
    {
      icon: "wsry",
      text: "尾随人员",
      number: LimitRandom(20, 30),
    },
    {
      icon: "ycqg",
      text: "异常起杆",
      number: LimitRandom(30, 50),
    },
    {
      icon: "lxsb",
      text: "离线设备",
      number: LimitRandom(10, 100),
    },
    {
      icon: "qfyj",
      text: "欠费预警",
      number: LimitRandom(300, 700),
    },
    {
      icon: "xlyc",
      text: "巡逻异常",
      number: LimitRandom(10, 30),
    },
    {
      icon: "ycdl",
      text: "异常登陆",
      number: LimitRandom(40, 80),
    },
    {
      icon: "csgd",
      text: "超时工单",
      number: LimitRandom(10, 30),
    },
    {
      icon: "tsjb",
      text: "投诉举报",
      number: LimitRandom(5, 15),
    },
    {
      icon: "rzsh",
      text: "认证审核",
      number: LimitRandom(400, 600),
    },
    {
      icon: "ycdd",
      text: "异常订单",
      number: LimitRandom(5, 20),
    },
    {
      icon: "spsh",
      text: "商品售后",
      number: LimitRandom(200, 500),
    },
    {
      icon: "spcp",
      text: "商品差评",
      number: LimitRandom(0, 10),
    },
  ],
  guangzhou: [
    {
      icon: "wsry",
      text: "尾随人员",
      number: LimitRandom(20, 30),
    },
    {
      icon: "ycqg",
      text: "异常起杆",
      number: LimitRandom(30, 50),
    },
    {
      icon: "lxsb",
      text: "离线设备",
      number: LimitRandom(10, 100),
    },
    {
      icon: "qfyj",
      text: "欠费预警",
      number: LimitRandom(300, 700),
    },
    {
      icon: "xlyc",
      text: "巡逻异常",
      number: LimitRandom(10, 30),
    },
    {
      icon: "ycdl",
      text: "异常登陆",
      number: LimitRandom(40, 80),
    },
    {
      icon: "csgd",
      text: "超时工单",
      number: LimitRandom(10, 30),
    },
    {
      icon: "tsjb",
      text: "投诉举报",
      number: LimitRandom(5, 15),
    },
    {
      icon: "rzsh",
      text: "认证审核",
      number: LimitRandom(400, 600),
    },
    {
      icon: "ycdd",
      text: "异常订单",
      number: LimitRandom(5, 20),
    },
    {
      icon: "spsh",
      text: "商品售后",
      number: LimitRandom(200, 500),
    },
    {
      icon: "spcp",
      text: "商品差评",
      number: LimitRandom(0, 10),
    },
  ],

  huazhong: [
    {
      icon: "wsry",
      text: "尾随人员",
      number: LimitRandom(20, 30),
    },
    {
      icon: "ycqg",
      text: "异常起杆",
      number: LimitRandom(30, 50),
    },
    {
      icon: "lxsb",
      text: "离线设备",
      number: LimitRandom(10, 100),
    },
    {
      icon: "qfyj",
      text: "欠费预警",
      number: LimitRandom(300, 700),
    },
    {
      icon: "xlyc",
      text: "巡逻异常",
      number: LimitRandom(10, 30),
    },
    {
      icon: "ycdl",
      text: "异常登陆",
      number: LimitRandom(40, 80),
    },
    {
      icon: "csgd",
      text: "超时工单",
      number: LimitRandom(10, 30),
    },
    {
      icon: "tsjb",
      text: "投诉举报",
      number: LimitRandom(5, 15),
    },
    {
      icon: "rzsh",
      text: "认证审核",
      number: LimitRandom(400, 600),
    },
    {
      icon: "ycdd",
      text: "异常订单",
      number: LimitRandom(5, 20),
    },
    {
      icon: "spsh",
      text: "商品售后",
      number: LimitRandom(200, 500),
    },
    {
      icon: "spcp",
      text: "商品差评",
      number: LimitRandom(0, 10),
    },
  ],
};

export const HQYcenterTopTotal = {
  beijing: [
    {
      value: 20,
      name: "住宅",
      itemStyle: { normal: { color: "#31FBFB" } },
    },
    {
      value: 29,
      name: "商业",
      itemStyle: { normal: { color: "#AAFFF3" } },
    },
    {
      value: 28,
      name: "写字楼",
      itemStyle: { normal: { color: "#7D00FB" } },
    },
    {
      value: 22,
      name: "别墅",
      itemStyle: { normal: { color: "#9E6FEF" } },
    },
    {
      value: 30,
      name: "公寓",
      itemStyle: { normal: { color: "#84D480" } },
    },
  ],
  xinan: [
    {
      value: 20,
      name: "住宅",
      itemStyle: { normal: { color: "#31FBFB" } },
    },
    {
      value: 39,
      name: "商业",
      itemStyle: { normal: { color: "#AAFFF3" } },
    },

    {
      value: 22,
      name: "别墅",
      itemStyle: { normal: { color: "#9E6FEF" } },
    },
    {
      value: 10,
      name: "公寓",
      itemStyle: { normal: { color: "#84D480" } },
    },
    {
      value: 28,
      name: "写字楼",
      itemStyle: { normal: { color: "#7D00FB" } },
    },
  ],
  guangzhou: [
    {
      value: 40,
      name: "住宅",
      itemStyle: { normal: { color: "#31FBFB" } },
    },
    {
      value: 23,
      name: "商业",
      itemStyle: { normal: { color: "#AAFFF3" } },
    },
    {
      value: 28,
      name: "写字楼",
      itemStyle: { normal: { color: "#7D00FB" } },
    },
    {
      value: 22,
      name: "别墅",
      itemStyle: { normal: { color: "#9E6FEF" } },
    },
    {
      value: 20,
      name: "公寓",
      itemStyle: { normal: { color: "#84D480" } },
    },
  ],
  huazhong: [
    {
      value: 70,
      name: "住宅",
      itemStyle: { normal: { color: "#31FBFB" } },
    },
    {
      value: 63,
      name: "商业",
      itemStyle: { normal: { color: "#AAFFF3" } },
    },
    {
      value: 28,
      name: "写字楼",
      itemStyle: { normal: { color: "#7D00FB" } },
    },
    {
      value: 42,
      name: "别墅",
      itemStyle: { normal: { color: "#9E6FEF" } },
    },
    {
      value: 20,
      name: "公寓",
      itemStyle: { normal: { color: "#84D480" } },
    },
  ],
};

export const LYLcenterTopTotal = {
  beijing: {
    data: [
      {
        name: "支付宝",
        value: 55,
      },
      {
        name: "云闪付",
        value: 120,
      },
      {
        name: "微信",
        value: 78,
      },
      {
        name: "其他",
        value: 66,
      },
    ],
    digitalFlopStyle: {
      fontSize: 12,
      fill: "#fff",
    },
    lineWidth: 10,
    radius: "66%",
    activeRadius: "60%",
    color: ["#2D99FF", "#003EB3", "#3C23BC", "#4DD1FF"],
  },

  xinan: {
    data: [
      {
        name: "支付宝",
        value: 15,
      },
      {
        name: "云闪付",
        value: 20,
      },
      {
        name: "微信",
        value: 28,
      },
      {
        name: "其他",
        value: 46,
      },
    ],
    digitalFlopStyle: {
      fontSize: 12,
      fill: "#fff",
    },
    lineWidth: 10,
    radius: "66%",
    activeRadius: "60%",
    color: ["#2D99FF", "#003EB3", "#3C23BC", "#4DD1FF"],
  },
  guangzhou: {
    data: [
      {
        name: "支付宝",
        value: 55,
      },
      {
        name: "云闪付",
        value: 10,
      },
      {
        name: "微信",
        value: 128,
      },
      {
        name: "其他",
        value: 66,
      },
    ],
    digitalFlopStyle: {
      fontSize: 12,
      fill: "#fff",
    },
    lineWidth: 10,
    radius: "66%",
    activeRadius: "60%",
    color: ["#2D99FF", "#003EB3", "#3C23BC", "#4DD1FF"],
  },
  huazhong: {
    data: [
      {
        name: "支付宝",
        value: 43,
      },
      {
        name: "云闪付",
        value: 100,
      },
      {
        name: "微信",
        value: 73,
      },
      {
        name: "其他",
        value: 6,
      },
    ],
    digitalFlopStyle: {
      fontSize: 12,
      fill: "#fff",
    },
    lineWidth: 10,
    radius: "66%",
    activeRadius: "60%",
    color: ["#2D99FF", "#003EB3", "#3C23BC", "#4DD1FF"],
  },
};

export const YQYcenterTopTotal = {
  beijing: [15, 33, 46, 50, 70, 65],
  xinan: [15, 33, 76, 50, 80, 35],
  guangzhou: [45, 36, 67, 50, 50, 35],
  huazhong: [65, 36, 66, 70, 30, 45],
};
