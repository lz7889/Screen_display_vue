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

export const getData11 = [
  { value: 17441, name: "老年" },
  { value: 31146, name: "中年" },
  { value: 49834, name: "青年" },
  { value: 22425, name: "少年" },
  { value: 16196, name: "儿童" },
];

export const getData12 = [
  {
    number: {
      number: [110],
      content: "{nt}",
      style: {
        fontSize: 34,
        fill: "#02fdfd",
      },
    },
    text: "社区数量",
    img: "community-num",
  },
  {
    number: {
      number: [110023],
      content: "{nt}",
      style: {
        fontSize: 34,
        fill: "#02fdfd",
      },
      formatter,
    },
    text: "APP用户",
    img: "app-user",
  },
  {
    number: {
      number: [461],
      content: "{nt}",
      style: {
        fontSize: 34,
        fill: "#02fdfd",
      },
    },
    text: "智能设备数",
    img: "smart-device",
  },
  {
    number: {
      number: [623],
      content: "{nt}",
      style: {
        fontSize: 34,
        fill: "#02fdfd",
      },
    },
    text: "社区电商数量",
    img: "e-commerce",
  },
  {
    number: {
      number: [245900],
      content: "{nt}",
      formatter,
      style: {
        fontSize: 34,
        fill: "#02fdfd",
      },
    },
    text: "服务金额",
    img: "service-money",
  },
  {
    number: {
      number: [124],
      content: "{nt}",
      style: {
        fontSize: 34,
        fill: "#02fdfd",
      },
    },
    text: "党委支点",
    img: "party-branch",
  },
];
export const getData13 = {
  category: ["0:00-6:00", "6:00-12:00", "12:00-18:00", "18:00-24:00"],
  value: [5533, 8923, 12634, 8408],
};

export const getData21 = {
  Time: ["00-6:00", "6:00-12:00", "12:00-18:00", "18:00-24:00"],
  datas1: [80, 180, 300, 234],
  datas2: [20, 280, 30, 334],
};

export const getData31 = {
  totalhousehold: 5468,
  occupied: 2541,
  percentTotal: 10000,
};

export const getData32 = {
  category: ["门禁", "网络", "会议", "识别"],
  value: [182, 140, 210, 260],
};
export const getData33 = {
  category: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  value: [312, 189, 266, 135, 467, 342, 232, 387, 199, 356, 412, 489],
};

export const getData34 = [
  { value: 17441, name: "大修基金动用" },
  { value: 31146, name: "意见征集投票" },
  { value: 49834, name: "合同决议投票" },
  { value: 22425, name: "服务商选择投票" },
  { value: 22425, name: "其他投票" },
  { value: 22425, name: "活动投票" },
  { value: 16196, name: "业务委员会换届选举" },
];
