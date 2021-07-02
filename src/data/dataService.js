// // 两数之间的随机数
function LimitRandom(min, max) {
  var fRound = Math.floor(Math.random() * (max - min + 1) + min);
  return fRound;
}
// 顶部公共展示栏
export const showBar = [
  {
    icon: "operation",
    text: "运行保障",
    num: "450天",
  },
  {
    icon: "equipment",
    text: "设备总数",
    num: "36",
  },
  {
    icon: "online",
    text: "在线数量",
    num: "36",
  },
  {
    icon: "monitoring-area",
    text: "监测区域",
    num: "5",
  },
];

// 首页
// 顶部展示栏
export const homeBar = [
  {
    text: "总设备",
    num: "693",
  },
  {
    text: "总人口",
    num: "9712",
  },
  {
    text: "小区数",
    num: "004",
  },
  {
    text: "党员数",
    num: "057",
  },
  {
    text: "总法人",
    num: "019",
  },
];

export const getLeft1 = [
  {
    icon: "area",
    text: "社区面积3569㎡",
  },
  {
    icon: "party-num",
    text: "党支部数156个",
  },
  {
    icon: "grid-members",
    text: "网格员数48人",
  },
  {
    icon: "service-places",
    text: "服务场所100个",
  },
  {
    icon: "community-workers",
    text: "社工人数224人",
  },
  {
    icon: "property-staffs",
    text: "物业员工37人",
  },
  {
    icon: "room-total",
    text: "总房间数5641间",
  },
  {
    icon: "car-total",
    text: "总车辆数5224辆",
  },
];

export const getLeft2 = {
  time: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  label: ["烟感", "气感", "电气火灾监测", "消防栓"],
  value0: [207, 245, 54, 215, 177, 94, 117, 204, 160, 239, 198, 100],
  value1: [154, 448, 490, 210, 499, 183, 324, 266, 383, 275, 339, 215],
  value2: [408, 210, 251, 380, 419, 369, 468, 282, 425, 457, 280, 274],
  value3: [311, 349, 106, 132, 109, 129, 246, 234, 236, 254, 167, 346],
};

export const getRight1 = {
  title: ["总报警数", "总事件数"],
  value: [235, 143],
  // 剩下没有进度部分数值
  restValue: 200,
};

export const getRight2 = {
  label: ["在逃", "涉恐", "国保重点", "扬言报复社会", "肇事精神病", "涉毒", "非正常上访", "经侦领域重点", "交通管理重点", "扒窃重点", "网上重点", "前科劣迹", "其他"],
  value: [8, 12, 9, 10, 19, 9, 26, 25, 53, 26, 58, 56, 45],
  // 横向条形图最大的值
  maxValue: 70,
  total: [
    {
      label: "总警力",
      value: "10人",
    },
    {
      label: "管控人员",
      value: "210人",
    },
    {
      label: "管控人员告警",
      value: "90",
    },
  ],
};

// 人口
export const populationLeft1 = [
  {
    icon: "jgqy",
    text: "监管区域",
    num: 10,
  },
  {
    icon: "djfw",
    text: "登记房屋",
    num: LimitRandom(1000, 2600),
  },
  {
    icon: "msr",
    text: "陌生人",
    num: LimitRandom(400, 500),
  },
  {
    icon: "drfks",
    text: "当日访客数",
    num: LimitRandom(1000, 2000),
  },
  {
    icon: "drrll",
    text: "当日人流量",
    num: LimitRandom(3000, 4500),
  },
  {
    icon: "drbjs",
    text: "当日报警数",
    num: LimitRandom(5, 10),
  },
];

export const populationLeft2 = {
  time: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  label: ["日均注册量", "日均人流量"],
  value0: [3811, 3939, 3314, 3425, 4271, 4508, 3689, 4770, 4185, 3032, 4758, 4815],
  value1: [7344, 7362, 5706, 7681, 6022, 7395, 7809, 6850, 5718, 6023, 5861, 7222],
};

export const populationLeft3 = [
  { value: 18, name: "客户投诉" },
  { value: 25, name: "异常告警" },
  { value: 32, name: "故障报修" },
];

export const populationCenter2 = {
  totalData: [3345, 2652], // 当前人流量/当前社区人数
  chartData: {
    time: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
    label: ["社区居民", "访客人流量"],
    value0: [224, 363, 443, 527, 467, 507, 328, 308],
    value1: [349, 402, 416, 391, 527, 572, 469, 367],
  },
};

// 安防
export const securityLeft1 = [
  {
    icon: "dljk",
    text: "道路监控",
    num: 43,
  },
  {
    icon: "zjjk",
    text: "周界监控",
    num: 15,
  },
  {
    icon: "gkpw",
    text: "高空抛物",
    num: 9,
  },
];

export const securityCenter2 = {
  // 在线摄像头，告警摄像头
  totalData: [95, 4],
  chartData: {
    category: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
    value: [6, 10, 9, 11, 5, 7, 13, 12, 10, 11, 7, 10, 14, 7, 11, 4, 7, 5, 4, 8, 15, 15, 8, 11],
  },
};

// 消防
export const fireProtectionLeft1 = [
  {
    icon: "dqhz",
    text: "电气火灾",
    num: 231,
  },
  {
    icon: "ywtcq",
    text: "烟雾探测器",
    num: 189,
  },
  {
    icon: "jktt",
    text: "监控探头",
    num: 426,
  },
];

export const fireProtectionLeft3 = [
  { value: 18, name: "客户投诉" },
  { value: 25, name: "异常告警" },
  { value: 32, name: "故障报修" },
];

export const fireProtectionCenter2 = {
  // 在线摄像头，告警摄像头
  totalData: [125, 10],
  chartData: {
    category: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
    value: [9, 5, 13, 8, 12, 6, 14, 9, 8, 15, 4, 13, 7, 9, 3, 7, 15, 10, 6, 8, 12, 13, 6, 7],
  },
};

// 车辆
export const carLeft1 = [
  {
    icon: "tcw",
    text: "停车位",
    num: "2,600",
  },
  {
    icon: "zccl",
    text: "注册车辆",
    num: "1,800",
  },
  {
    icon: "rjlyl",
    text: "日均利用率",
    num: "95%",
  },
  {
    icon: "drcll",
    text: "当日车流量",
    num: "3,260",
  },
  {
    icon: "drdde",
    text: "当日订单额",
    num: "36,280",
  },
  {
    icon: "drbjs",
    text: "当日报警数",
    type: "warning",
    num: "10",
  },
];

export const carCenter2 = {
  // 当日订单数，车位利用率
  totalData: ["6,260", "87.6%"],
  chartData: {
    time: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
    label: ["订单金额", "平均停车时长"],
    value0: [3, 1, 3, 3, 9, 7, 9, 5, 7, 8, 4, 5, 4, 5, 4, 7, 8, 6, 9, 9, 4, 3, 7, 4],
    value1: [13, 11, 19, 12, 20, 10, 8, 5, 7, 11, 7, 11, 6, 13, 8, 19, 20, 20, 16, 13, 12, 6, 5, 11],
  },
};

export const carRight1 = {
  // 当日车流量，当日车辆数
  totalData: ["6,260", "3,124"],
  chartData: {
    label: ["长租车辆", "临时车辆"],
    value0: [
      [8.2, 136],
      [8.54, 245],
      [9.63, 185],
      [9.98, 215],
      [10.2, 145],
      [10.41, 125],
      [12.11, 225],
      [11.51, 285],
      [13.11, 335],
      [13.32, 355],
      [14.41, 361],
      [15.41, 422],
      [16.24, 451],
      [17.73, 591],
      [18.31, 622],
      [19.66, 584],
      [20.16, 522],
      [21.86, 495],
    ],
    value1: [
      [8.3, 96],
      [8.44, 105],
      [8.53, 135],
      [9.53, 195],
      [9.88, 203],
      [10.1, 135],
      [11.24, 172],
      [12.21, 231],
      [13.69, 285],
      [14.47, 321],
      [15.81, 372],
      [16.78, 382],
      [17.14, 424],
      [18.63, 522],
      [19.78, 531],
      [20.74, 563],
      [21.64, 462],
    ],
  },
};

// 环境
export const environmentLeft1 = [
  {
    icon: "zndb",
    // 总数
    totalnum: 1320,
    // 在线数
    online: 1320,
  },
  {
    icon: "znsb",
    totalnum: 1265,
    online: 1265,
  },
  {
    icon: "znqb",
    totalnum: 1226,
    online: 1226,
  },
  {
    icon: "rlb",
    totalnum: 921,
    online: 921,
  },
];

export const environmentLeft2 = {
  leftChartData: {
    text: "当日总能耗",
    // 100是总额，用来算仪表盘百分比的分母
    totalPercent: 100,
    value: 81.23,
  },
  rightTotalData: [
    {
      text: "公区动力",
      value: "32,650",
    },
    {
      text: "公区照明",
      value: "12,680",
    },
    {
      text: "企业用能",
      value: "72,220",
    },
    {
      text: "运营设备",
      value: "225",
    },
  ],
};

export const environmentLeft3 = {
  time: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  label: ["用电量", "用水量"],
  value0: [12, 19, 28, 29, 30, 31, 35, 38, 34, 30, 24, 13],
  value1: [106, 130, 145, 166, 179, 184, 192, 236, 182, 128, 126, 118],
};

export const environmentCenter2 = {
  time: ["0:00", "2:00", "4:00", "6:00", "8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "24:00"],
  label: ["用电量", "用水量"],
  value0: [2103, 3190, 3280, 5290, 6300, 5710, 7605, 6380, 5340, 5030, 4204, 3291, 2103],
  value1: [26, 20, 18, 26, 29, 34, 52, 36, 32, 48, 28, 27, 26],
};

// 党建

export const partyConstructionLeft2 = {
  category: ["重点青少年", "重点上访人员", "其他重点人员"],
  value: [20341, 1547, 8471],
  // 用来算百分比，比如分别展示20341/30000，等等
  totalPercent: [30000, 3000, 20000],
};

export const partyConstructionLeft4 = {
  category: ["宗教堂", "金融网点", "社会组织", "非公有制\n经济组织"],
  value: [10341, 9385, 8471, 6336],
};

export const partyConstructionRight3 = {
  category: ["A区", "B区", "C区", "E区", "F区", "G区", "H区"],
  value: [1686, 1832, 2639, 1947, 1307, 2142, 1607],
};

export const partyConstructionRight2 = {
  topData: {
    done: 57851,
    todo: 16316,
  },
  bottomData: {
    indicator: [
      { name: "社会治安", max: 10000 },
      { name: "综合执法", max: 10000 },
      { name: "综合管理", max: 10000 },
      { name: "民生服务", max: 10000 },
      { name: "环境保护", max: 10000 },
      { name: "城市管理", max: 10000 },
      { name: "公共安全", max: 10000 },
    ],
    todo: [2200, 1500, 1045, 500, 1340, 570, 1243],
    done: [8200, 7500, 7045, 6500, 5340, 5500, 7634],
  },
};

// 存证
export const depositCertificateTop = [
  {
    text: "合同存证总数",
    value: "1,235个",
  },
  {
    text: "投票结果存证数量",
    value: "9,243个",
  },
  {
    text: "本月电子签章使用次数",
    value: "143次",
    compareResult: "decrease",
    compareNum: "下降10%",
  },
  {
    text: "投票结果存证数量",
    value: "24,354",
    compareResult: "increase",
    compareNum: "上升10%",
  },
];

export const depositCertificateBottom1 = {
  chartData: {
    time: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    value: [21.2, 36.34, 27.23, 28.45, 34.23, 20.5, 26.4, 18.74, 31.23, 33.66, 32.34, 22.66],
  },
  totalData: {
    average: 54,
    max: 4412,
    min: 134,
  },
};

export const depositCertificateBottom2 = {
  time: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  label: ["合同存证", "投票决议存证"],
  value0: [15.06, 26.16, 22.32, 31.28, 23.96, 16.42, 17.6, 31.13, 31.52, 18.86, 24.98, 19.95],
  value1: [23.79, 34.47, 32.42, 34.5, 27.73, 22.01, 25.97, 34.46, 23.61, 32.73, 29.27, 33.96],
};

export const depositCertificateMiddle1 = {
  time: ["1月", "2月", "3月", "4月", "5月", "6月"],
  label: ["e店宝注册用户", "B端用户(物业公司,入驻商家等)", "外部系统使用"],
  value0: [4811, 3939, 3314, 4425, 4271, 4508],
  value1: [7344, 7362, 5706, 5681, 6022, 5395],
  value2: [5689, 4770, 4185, 3032, 4758, 5815],
};

export const depositCertificateMiddle2 = {
  category: ["租房/售房", "生活服务", "车位租赁", "劳动合同", "物业合同", "其他"],
  value: [10341, 9385, 8471, 6336, 4846, 2303],
};
