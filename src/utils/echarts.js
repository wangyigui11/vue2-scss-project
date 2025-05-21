import * as echarts from "echarts";

// 注册所有图表组件
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/scatter";
import "echarts/lib/chart/radar";

// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/grid";
import "echarts/lib/component/markPoint";
import "echarts/lib/component/markLine";

// 引入主题
import "echarts/theme/dark";

// 注册主题
export const registerTheme = (themeName, theme) => {
  echarts.registerTheme(themeName, theme);
};

// 默认配置
export const defaultOptions = {
  color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272"],
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
};

// 创建图表实例
export const createChart = (el, theme) => {
  return echarts.init(el, theme);
};

// 设置图表配置
export const setChartOption = (chart, options) => {
  if (chart) {
    chart.setOption(options);
  }
};

// 监听窗口大小变化
export const addResizeListener = (chart) => {
  if (chart) {
    window.addEventListener("resize", () => {
      chart.resize();
    });
  }
};

// 移除窗口大小变化监听
export const removeResizeListener = (chart) => {
  if (chart) {
    window.removeEventListener("resize", () => {
      chart.resize();
    });
  }
};

// 生成患者接收饼图配置
export const createPatientReceptionPieOption = (data) => {
  const defaultData = [
    { value: 134, name: "确诊", itemStyle: { color: "#3D7EFF" } },
    { value: 60, name: "排除", itemStyle: { color: "#F6C659" } },
    { value: 60, name: "疑似", itemStyle: { color: "#3DD681" } },
  ];
  const total = (data || defaultData).reduce(
    (sum, item) => sum + item.value,
    0
  );

  return {
    backgroundColor: "transparent",
    tooltip: { trigger: "item", formatter: "{b} : {c} ({d}%)" },
    series: [
      {
        type: "pie",
        radius: ["45%", "65%"],
        avoidLabelOverlap: false,
        label: { show: false },
        padAngle: 5,
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        data: data || defaultData,
        labelLine: { show: false },
        // roseType: 'area',
        // itemStyle: {
        //   borderRadius: 8
        // },
      },
    ],
    graphic: [
      {
        type: "text",
        left: "center",
        top: "center",
        style: {
          text: `总计\n${total}`,
          textAlign: "center",
          // fontSize: 18,
          // fontWeight: 'bold',
          // fill: '#222'
        },
      },
    ],
  };
};

// 生成患者接收趋势图配置
export const createPatientReceptionLineOption = (data) => {
  const defaultData = {
    xAxis: ["3月", "4月", "5月", "6月", "7月", "8月"],
    series: [
      {
        name: "疑似",
        data: [20, 50, 75, 80, 70, 30],
        color: "#3D7EFF",
      },
      {
        name: "确诊",
        data: [10, 30, 45, 60, 55, 20],
        color: "#3DD681",
      },
    ],
  };
  const chartData = data || defaultData;

  return {
    backgroundColor: "transparent",
    tooltip: { trigger: "axis" },
    legend: {
      data: chartData.series.map((s) => s.name),
      top: 8,
      right: 16,
      icon: "circle",
      textStyle: { color: "#222" },
    },
    grid: { left: 16, right: 16, bottom: 16, top: 40, containLabel: true },
    xAxis: {
      type: "category",
      data: chartData.xAxis,
      boundaryGap: false,
      axisLine: { lineStyle: { color: "#D8E0F3" } },
      axisLabel: { color: "#222" },
    },
    yAxis: {
      type: "value",
      axisLine: { show: false },
      splitLine: { lineStyle: { color: "#F0F3FA" } },
      axisLabel: { color: "#222" },
    },
    series: chartData.series.map((s) => ({
      name: s.name,
      type: "line",
      data: s.data,
      smooth: true,
      symbol: "circle",
      symbolSize: 8,
      lineStyle: { width: 3, color: s.color },
      itemStyle: { color: s.color },
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: s.color + "33" },
            { offset: 1, color: s.color + "00" },
          ],
        },
      },
    })),
  };
};

// 生成应急响应饼图配置
export const createEmergencyResponsePieOption = (data) => {
  const defaultData = [
    { value: 36, name: "国家承接", itemStyle: { color: "#3D7EFF" } },
    { value: 30, name: "市级承接", itemStyle: { color: "#3DD681" } },
    { value: 24, name: "区级承接", itemStyle: { color: "#F6C659" } },
    { value: 30, name: "八院承接", itemStyle: { color: "#FF8C6B" } },
  ];
  const total = (data || defaultData).reduce(
    (sum, item) => sum + item.value,
    0
  );

  return {
    backgroundColor: "transparent",
    tooltip: { trigger: "item" },
    series: [
      {
        type: "pie",
        radius: ["65%", "85%"],
        center: ["50%", "50%"],
        avoidLabelOverlap: false,
        label: { show: false },
        emphasis: { scale: false },
        data: data || defaultData,
        labelLine: { show: false },
        padAngle: 5,
        itemStyle: {
          borderRadius: 4,
        },
      },
    ],
    graphic: [
      {
        type: "text",
        left: "center",
        top: "center",
        style: {
          text: `${total}\n总计`,
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold",
          fill: "#222",
          rich: {
            value: {
              fontSize: 24,
              fontWeight: "bold",
              color: "#222",
              marginBottom: 8,
            },
            label: {
              fontSize: 14,
              color: "#222",
            },
          },
          formatter: function () {
            return ["{value|" + total + "}", "{label|总计}"].join("\n");
          },
        },
      },
    ],
  };
};

// 生成应急响应横向柱状图配置
export const createEmergencyResponseBarOption = (data) => {
  const defaultData = [
    { name: "国家承接", value: 30, color: "#3D7EFF" },
    { name: "市级承接", value: 25, color: "#3DD681" },
    { name: "区级承接", value: 20, color: "#F6C659" },
    { name: "八院承接", value: 20, color: "#FF8C6B" },
  ];
  const chartData = data || defaultData;

  return {
    backgroundColor: "transparent",
    grid: { left: 0, right: 0, top: 0, bottom: 0, containLabel: true },
    xAxis: {
      type: "value",
      max: 100,
      splitLine: { show: false },
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
    },
    yAxis: {
      type: "category",
      data: chartData.map((item) => item.name),
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: "#222",
        fontWeight: "bold",
        fontSize: 14,
        margin: 16,
      },
    },
    series: [
      {
        type: "bar",
        data: chartData.map((item) => ({
          value: item.value,
          itemStyle: { color: item.color },
          label: {
            show: true,
            position: "right",
            formatter: "{c}%",
            color: "#222",
            fontWeight: "bold",
            fontSize: 14,
            padding: [0, 8, 0, 0],
          },
        })),
        barWidth: 12,
        backgroundStyle: {
          color: "#F0F3FA",
          borderRadius: 6,
        },
        itemStyle: {
          borderRadius: 6,
        },
        label: { show: true },
      },
    ],
  };
};

// 生成患者流转综合态势柱状图配置
export const createPatientFlowBarOption = (data) => {
  // 默认数据
  const defaultData = {
    xAxis: ["治愈", "死亡", "转出", "转入ICU/CCU", "转出ICU/CCU"],
    series: [
      {
        name: "艾滋病",
        data: [20, 10, 15, 18, 12],
        color: "#89c9e9",
      },
      {
        name: "梅毒",
        data: [10, 8, 7, 12, 8],
        color: "#6c96f3",
      },
      {
        name: "新冠",
        data: [30, 20, 16, 25, 15],
        color: "#2864ea",
      },
    ],
  };
  const chartData = data || defaultData;

  return {
    backgroundColor: "transparent",
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
    legend: {
      data: chartData.series.reverse().map((s) => s.name),
      top: 8,
      left: "center",
      icon: "square",
      itemWidth: 16,
      itemHeight: 8,
      textStyle: { color: "#222", fontSize: 14 },
    },
    grid: { left: 32, right: 16, bottom: 24, top: 56, containLabel: true },
    xAxis: {
      type: "category",
      data: chartData.xAxis,
      axisLine: { lineStyle: { color: "#D8E0F3" } },
      axisLabel: { color: "#222", fontSize: 14 },
    },
    yAxis: {
      type: "value",
      axisLine: { show: false },
      splitLine: { lineStyle: { color: "#F0F3FA" } },
      axisLabel: { color: "#222", fontSize: 14, formatter: "{value}人" },
    },
    series: chartData.series.map((s, idx) => {
      // 只在最顶部的堆叠部分显示总人数
      let showLabel = idx === chartData.series.length - 1;
      // 计算每组的总人数
      let totalArr = [];
      if (showLabel) {
        for (let i = 0; i < s.data.length; i++) {
          let sum = 0;
          for (let j = 0; j < chartData.series.length; j++) {
            sum += chartData.series[j].data[i];
          }
          totalArr.push(sum);
        }
      }
      return {
        name: s.name,
        type: "bar",
        stack: "total",
        barWidth: 24,
        itemStyle: { color: s.color },
        data: s.data,
        label: showLabel
          ? {
              show: true,
              position: "top",
              formatter: (params) => `${totalArr[params.dataIndex]}人`,
              color: "#222",
              fontWeight: "bold",
              fontSize: 14,
            }
          : { show: false },
      };
    }),
  };
};

// 生成保障能力综合态势仪表盘配置
export const createSupportCapabilityGaugeOption = (
  value = 60,
  name = "设备储备",
  color = "#3D7EFF"
) => {
  return {
    backgroundColor: "transparent",
    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        radius: "100%",
        center: ["50%", "75%"],
        splitNumber: 4,
        axisLine: {
          lineStyle: {
            width: 12,
            color: [
              [value / 100, color],
              [1, "#EDEDED"],
            ],
          },
        },
        pointer: { show: false },
        progress: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        detail: {
          valueAnimation: true,
          fontSize: 18,
          fontWeight: "bold",
          color: color,
          offsetCenter: [0, "-20%"],
          formatter: "{value}",
        },
        title: {
          offsetCenter: [0, "30%"],
          fontSize: 14,
          color: "#222",
        },
        data: [{ value, name }],
      },
    ],
  };
};

// 生成年龄分布饼图配置
export const createAgePieOption = (data) => {
  const defaultData = [
    { value: 7, name: "<18", itemStyle: { color: "#3D7EFF" } },
    { value: 8, name: "18-35", itemStyle: { color: "#3DD681" } },
    { value: 12, name: "36-60", itemStyle: { color: "#F6C659" } },
    { value: 16, name: ">60", itemStyle: { color: "#FF8C6B" } },
  ];
  const chartData = data || defaultData;

  return {
    backgroundColor: "transparent",
    legend: {
      orient: "vertical",
      right: 20,
      top: "22%",       // 垂直居中
      align: 'left',
      textStyle: { color: "#222", fontSize: 12 },
      formatter: (name) => name,
    },
    series: [
      {
        type: "pie",
        radius: '40%',
        center: ['40%', '50%'],  // 饼图中心左移，给legend让出空间
        label: { formatter: "{c}", color: "#222" },
        data: chartData,
      },
    ],
  };
};

// 生成性别分布饼图配置
export const createGenderPieOption = (data) => {
  const defaultData = [
    { value: 55, name: "男性", itemStyle: { color: "#6CA8FF" } },
    { value: 45, name: "女性", itemStyle: { color: "#FF8AC9" } },
  ];
  const chartData = data || defaultData;

  return {
    backgroundColor: "transparent",
    legend: {
      orient: "vertical",
      right: 0,
      top: "center",
      icon: "circle",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: { color: "#222", fontSize: 14 },
    },
    series: [
      {
        type: "pie",
        radius: ["50%", "70%"],
        center: ["30%", "50%"],
        label: {
          show: false,
        },
        data: chartData,
      },
    ],
  };
};

export const createLevelBarOption = (data) => {
  const defaultData = [
    { name: "社区", value: 2543, color: "#3DD681" },
    { name: "八院", value: 1060, color: "#A0C6FF" },
    { name: "疾控", value: 1876, color: "#6CA8FF" },
    { name: "卫健委", value: 2435, color: "#3D7EFF" },
  ];
  const chartData = data || defaultData;
  return {
    backgroundColor: "transparent",
    grid: { left: 0, right: 0, top: 0, bottom: 0, containLabel: true },
    xAxis: {
      type: "value",
      max: Math.max(...chartData.map((i) => i.value)) * 1.1,
      splitLine: { show: false },
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
    },
    yAxis: {
      type: "category",
      data: chartData.map((item) => item.name),
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: "#222", fontWeight: "bold" },
    },
    series: [
      {
        type: "bar",
        data: chartData.map((item) => ({
          value: item.value,
          itemStyle: { color: item.color },
          label: {
            show: true,
            position: "right",
            color: "#222",
            fontWeight: "bold",
          },
        })),
        barWidth: 12,
        label: { show: true },
      },
    ],
  };
};

// 生成分类诊治分析柱状图配置
export const createClassifyBarOption = (data) => {
  const defaultData = {
    xAxis: ["新冠", "肺结核", "乙肝"],
    series: [8, 7, 4],
  };
  const chartData = data || defaultData;
  return {
    backgroundColor: "transparent",
    grid: { left: 24, right: 24, top: 24, bottom: 24, containLabel: true },
    xAxis: {
      type: "category",
      data: chartData.xAxis,
      axisLine: { lineStyle: { color: "#D8E0F3" } },
      axisLabel: { color: "#222" },
    },
    yAxis: {
      type: "value",
      minInterval: 1,
      axisLine: { show: false },
      splitLine: { lineStyle: { color: "#F0F3FA" } },
      axisLabel: { color: "#222" },
    },
    series: [
      {
        type: "bar",
        data: chartData.series,
        barWidth: 24,
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: "#3DD681" },
              { offset: 1, color: "#A0FFD6" },
            ],
          },
          borderRadius: [6, 6, 0, 0],
        },
      },
    ],
  };
};

// 生成传染病报告情况分析柱状图配置
export const createReportAnalysisBarOption = (data) => {
  // 默认数据
  const defaultData = {
    xAxis: ["10月", "11月", "12月", "1月", "2月", "3月"],
    series: [
      {
        name: "新冠",
        data: [50, 55, 30, 35, 33, 32],
        color: "#6A8FFF",
      },
      {
        name: "艾滋病",
        data: [20, 22, 8, 10, 8, 7],
        color: "#6ED6B7",
      },
      {
        name: "梅毒",
        data: [2, 3, 1, 2, 1, 1],
        color: "#3B4A6B",
      },
    ],
  };
  const chartData = data || defaultData;

  return {
    backgroundColor: "transparent",
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
    },
    legend: {
      data: chartData.series.map((s) => s.name),
      top: 8,
      left: 24,
      icon: "rect",
      itemWidth: 16,
      itemHeight: 8,
      textStyle: { color: "#222", fontSize: 14 },
    },
    grid: { left: 32, right: 16, bottom: 24, top: 56, containLabel: true },
    xAxis: {
      type: "category",
      axisTick: { show: false },
      data: chartData.xAxis,
      axisLine: { lineStyle: { color: "#D8E0F3" } },
      axisLabel: { color: "#222", fontSize: 14 },
    },
    yAxis: {
      type: "value",
      axisLine: { show: false },
      splitLine: { lineStyle: { color: "#F0F3FA" } },
      axisLabel: { color: "#222", fontSize: 14, formatter: "{value}人" },
    },
    series: chartData.series.map((s) => ({
      name: s.name,
      type: "bar",
      barGap: 0,
      barWidth: 12,
      categoryGap: "40%",
      itemStyle: { color: s.color },
      data: s.data,
      label: {
        show: false,
      },
    })),
  };
};

// 生成应急资源使用情况分析堆叠条形图配置
export const createEmergencyResourceUsageBarOption = (data) => {
  // 默认数据
  const defaultData = {
    yAxis: [
      "物资(份)",
      "设备(台)",
      "药品(份)",
      "床位(个)",
      "人员(位)",
      "氧气(份)",
    ],
    series: [
      {
        name: "新增",
        data: [5, 3, 7, 12, 8, 6],
        color: "#6ED6B7",
      },
      {
        name: "使用",
        data: [8, 6, 5, 15, 12, 10],
        color: "#3D7EFF",
      },
    ],
  };
  const chartData = data || defaultData;

  return {
    backgroundColor: "transparent",
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
    legend: {
      data: chartData.series.map((s) => s.name),
      top: 8,
      left: 42,
      icon: "rect",
      itemWidth: 16,
      itemHeight: 8,
      textStyle: { color: "#222", fontSize: 14 },
    },
    grid: { left: 48, right: 16, bottom: 24, top: 40, containLabel: true },
    xAxis: {
      type: "value",
      min: 0,
      max: 30,
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: "#F0F3FA" } },
      axisLabel: { color: "#222", fontSize: 12 },
    },
    yAxis: {
      type: "category",
      data: chartData.yAxis,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: "#222", fontSize: 14 },
    },
    series: chartData.series.reverse().map((s, index) => ({
      name: s.name,
      type: "bar",
      stack: "total",
      barWidth: 12,
      itemStyle: {
        color: s.color,
        borderRadius: index === chartData.series.length - 1 ? [0, 6, 6, 0] : 0,
      },
      data: s.data,
      label: { show: false },
    })),
  };
};

// 生成应急响应情况分析雷达图配置
// 修改后的方法如下所示：
export const createEmergencyResponseRadarOption1 = () => {
  let option = {
    backgroundColor: 'transparent',
    title: {
      text: "",
      subtext: ""
    },
    tooltip: {},
    legend: {
      orient: "vertical",
      left: "left",
      top: "-2%",
      data: [
        "应急预案（个）",
        "应急演练（次）",
        "响应启动（次）",
        "应急处置（次）",
        "响应跟踪（次）"
      ]
    },
    radar: {
      shape: "circle",
      symbolSize: 12,
      indicator: [
        {
          name: "应急预案（个）",
          max: 50,
        },
        {
          name: "应急演练（次）",
          max: 40,
        },
        {
          name: "应急处置（次）",
          max: 30,
        },
        {
          name: "响应启动（次）",
          max: 60,
        },
        {
          name: "应急处置（次）",
          max: 30,
        }
      ],
      axisLabel: {}, // 移除了轴标签
      splitArea: {} // 关闭区域分割条形块展示模式
    },
    series: [{
      type: "radar",
      symbolSize: 8,
      areaStyle: {
          borderColor: "#d7eedf" // 线段内边界保持白色不变
      },
      lineStyle: {
        color: ['#6FC28A'], // 单一纯色填充外圈路径
      },
      labelLine: true,
      itemStyle: {
        normal: {
          borderColor: "#d7eedf" // 线段内边界保持白色不变
        }
      },
      emphasis: {
        focusIndex: ["all"], // 全部聚焦状态下的行为控制
        // shadowBlur: [false],
        // animationDurationUpdate: false,

        /* 这里是针对每一组数据点单独设定动画时间 */
        animationDelayUpdate: (params) => ({
          value: [
            Math.random(),
            Math.random(), // 数据源可自行替换为你所需数值列表
            Math.random()
          ],
          delayTime:
            params.index * 10 +
            params.value *
              ((Math.floor(Math.random() * 10)) % 1), // 自动化调节延时避免重复性影响美观度
        }),
      },
      data: [{ value: [40, 30, 20] }] // 注意此处简化了原始结构仅保留一组测试数据
    }]
  }

  return option;
};

// 生成应急响应情况分析雷达图配置
// 修改后的方法如下所示：
export const createEmergencyResponseRadarOption = () => {
  let option = {
    backgroundColor: "transparent",
    title: {
      text: "",
      subtext: "",
    },
    tooltip: {},
    legend: {
      orient: "vertical",
      left: "left",
      top: "-2%",
      data: [
        "应急预案（个）",
        "应急演练（次）",
        "响应启动（次）",
        "应急处置（次）",
        "响应跟踪（次）",
      ],
    },
    color: ["#6FC28A", "#FF8C6B", "#3D7EFF", "#F6C659", "#3DD681"],
    // color: ["#FF8C6B", "#3D7EFF", "#F6C659", "#3DD681"],
    // color: ["#FF8C6B", "#3D7EFF", "#F6C659", "#3DD681"], 
    // color: ["#37A2DA"],
    radar: {
      shape: "circle",
      name: {
        textStyle: {
          color: "#999999",
        },
      },
      splitArea: {
        areaStyle: {
          color: ["#fff", "#fff", "#fff", "#fff"],
          shadowColor: '#6FC28A',
        },
      },
      indicator: [
        {
          name: "应急预案（个）",
          max: 5000,
        },
        {
          name: "应急演练（次）",
          max: 4000,
        },
        {
          name: "响应启动（次）",
          max: 30000,
        },
        {
          name: "应急处置（次）",
          max: 38000,
        },
        {
          name: "响应跟踪（次）",
          max: 52000,
        },
      ],
    },
    series: [
      {
        type: "radar",
        data: [
          {
            value: [5000, 4000, 28000, 31000, 42000],
            name: "数据",
            itemStyle: {
              normal: {
                color: "#bae1c7",
              },
            },
            areaStyle: {
              normal: {
                color: "#d7eedf",
              },
            },
          },
        ],
      },
    ],
  };

  return option;
};

// 生成应急响应情况分析雷达图配置
// 修改后的方法如下所示：
export const createMedicalResourceUsageRadarOption = () => {
  let option = {
    backgroundColor: "transparent",
    title: {
      text: "",
      subtext: "",
    },
    tooltip: {},
    legend: {
      orient: "vertical",
      left: "left",
      top: "-2%",
      data: [
        "物资（份）",
        "设备（台）",
        "药品（份）",
        "床位（个）",
        "人员（位）",
        "氧气（份）",
      ],
    },
    color: ["#6FC28A", "#FF8C6B", "#3D7EFF", "#F6C659", "#3DD681"],
    // color: ["#FF8C6B", "#3D7EFF", "#F6C659", "#3DD681"],
    // color: ["#FF8C6B", "#3D7EFF", "#F6C659", "#3DD681"], 
    // color: ["#37A2DA"],
    radar: {
      shape: "circle",
      name: {
        textStyle: {
          color: "#999999",
        },
      },
      splitArea: {
        areaStyle: {
          // color: ["#fff", "#fff", "#fff", "#fff"],
          shadowColor: '#6CA8FF',
        },
      },
      indicator: [
        {
          name: "物资（份）",
          max: 20,
        },
        {
          name: "设备（台）",
          max: 40,
        },
        {
          name: "药品（份）",
          max: 12,
        },
        {
          name: "床位（个）",
          max: 30 ,
        },
        {
          name: "氧气（份）",
          max: 12,
        },
      ],
      center: ['50%', '50%'], // 移动雷达图中心点，向右偏移，避免和左侧legend遮挡
      radius: '55%', // 缩小点半径，避免占用过多空间
    },
    series: [
      {
        type: "radar",
        data: [
          {
            value: [12, 40, 12, 30, 12, 33],
            name: "数据",
            itemStyle: {
              normal: {
                color: "#3d7eff",
              },
            },
            areaStyle: {
              normal: {
                color: "#a0c6ff",
              },
            },
          },
        ],
      },
    ],
  };

  return option;
};
export default echarts;
