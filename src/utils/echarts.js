import * as echarts from 'echarts'

// 注册所有图表组件
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/radar'

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/markPoint'
import 'echarts/lib/component/markLine'

// 引入主题
import 'echarts/theme/dark'

// 注册主题
export const registerTheme = (themeName, theme) => {
  echarts.registerTheme(themeName, theme)
}

// 默认配置
export const defaultOptions = {
  color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  }
}

// 创建图表实例
export const createChart = (el, theme) => {
  return echarts.init(el, theme)
}

// 设置图表配置
export const setChartOption = (chart, options) => {
  if (chart) {
    chart.setOption(options)
  }
}

// 监听窗口大小变化
export const addResizeListener = (chart) => {
  if (chart) {
    window.addEventListener('resize', () => {
      chart.resize()
    })
  }
}

// 移除窗口大小变化监听
export const removeResizeListener = (chart) => {
  if (chart) {
    window.removeEventListener('resize', () => {
      chart.resize()
    })
  }
}

// 生成患者接收饼图配置
export const createPatientReceptionPieOption = (data) => {
  const defaultData = [
    { value: 134, name: '确诊', itemStyle: { color: '#3D7EFF' } },
    { value: 60, name: '排除', itemStyle: { color: '#F6C659' } },
    { value: 60, name: '疑似', itemStyle: { color: '#3DD681' } }
  ];
  const total = (data || defaultData).reduce((sum, item) => sum + item.value, 0);

  return {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'item', formatter: "{b} : {c} ({d}%)", },
    series: [
      {
        type: 'pie',
        radius: ['45%', '65%'],
        avoidLabelOverlap: false,
        label: { show: false },
        padAngle: 5,
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        data: data || defaultData,
        labelLine: { show: false },
        // roseType: 'area',
        // itemStyle: {
        //   borderRadius: 8
        // },
      }
    ],
    graphic: [
      {
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
          text: `总计\n${total}`,
          textAlign: 'center',
          // fontSize: 18,
          // fontWeight: 'bold',
          // fill: '#222'
        }
      }
    ]
  };
}

// 生成患者接收趋势图配置
export const createPatientReceptionLineOption = (data) => {
  const defaultData = {
    xAxis: ['3月', '4月', '5月', '6月', '7月', '8月'],
    series: [
      {
        name: '疑似',
        data: [20, 50, 75, 80, 70, 30],
        color: '#3D7EFF'
      },
      {
        name: '确诊',
        data: [10, 30, 45, 60, 55, 20],
        color: '#3DD681'
      }
    ]
  };
  const chartData = data || defaultData;

  return {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis' },
    legend: {
      data: chartData.series.map(s => s.name),
      top: 8,
      right: 16,
      icon: 'circle',
      textStyle: { color: '#222' }
    },
    grid: { left: 16, right: 16, bottom: 16, top: 40, containLabel: true },
    xAxis: {
      type: 'category',
      data: chartData.xAxis,
      boundaryGap: false,
      axisLine: { lineStyle: { color: '#D8E0F3' } },
      axisLabel: { color: '#222' }
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      splitLine: { lineStyle: { color: '#F0F3FA' } },
      axisLabel: { color: '#222' }
    },
    series: chartData.series.map(s => ({
      name: s.name,
      type: 'line',
      data: s.data,
      smooth: true,
      symbol: 'circle',
      symbolSize: 8,
      lineStyle: { width: 3, color: s.color },
      itemStyle: { color: s.color },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: s.color + '33' },
            { offset: 1, color: s.color + '00' }
          ]
        }
      }
    }))
  };
}

// 生成应急响应饼图配置
export const createEmergencyResponsePieOption = (data) => {
  const defaultData = [
    { value: 36, name: '国家承接', itemStyle: { color: '#3D7EFF' } },
    { value: 30, name: '市级承接', itemStyle: { color: '#3DD681' } },
    { value: 24, name: '区级承接', itemStyle: { color: '#F6C659' } },
    { value: 30, name: '八院承接', itemStyle: { color: '#FF8C6B' } }
  ];
  const total = (data || defaultData).reduce((sum, item) => sum + item.value, 0);

  return {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'item' },
    series: [
      {
        type: 'pie',
        radius: ['65%', '85%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        label: { show: false },
        emphasis: { scale: false },
        data: data || defaultData,
        labelLine: { show: false }
      }
    ],
    graphic: [
      {
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
          text: `${total}\n总计`,
          textAlign: 'center',
          fontSize: 18,
          fontWeight: 'bold',
          fill: '#222',
          rich: {
            value: {
              fontSize: 24,
              fontWeight: 'bold',
              color: '#222',
              marginBottom: 8
            },
            label: {
              fontSize: 14,
              color: '#222'
            }
          },
          formatter: function() {
            return [
              '{value|' + total + '}',
              '{label|总计}'
            ].join('\n');
          }
        }
      }
    ]
  };
}

// 生成应急响应横向柱状图配置
export const createEmergencyResponseBarOption = (data) => {
  const defaultData = [
    { name: '国家承接', value: 30, color: '#3D7EFF' },
    { name: '市级承接', value: 25, color: '#3DD681' },
    { name: '区级承接', value: 20, color: '#F6C659' },
    { name: '八院承接', value: 20, color: '#FF8C6B' }
  ];
  const chartData = data || defaultData;

  return {
    backgroundColor: 'transparent',
    grid: { left: 0, right: 0, top: 0, bottom: 0, containLabel: true },
    xAxis: {
      type: 'value',
      max: 100,
      splitLine: { show: false },
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false }
    },
    yAxis: {
      type: 'category',
      data: chartData.map(item => item.name),
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: '#222', fontWeight: 'bold' }
    },
    series: [
      {
        type: 'bar',
        data: chartData.map(item => ({
          value: item.value,
          itemStyle: { color: item.color },
          label: {
            show: true,
            position: 'right',
            formatter: '{c}%',
            color: '#222',
            fontWeight: 'bold'
          }
        })),
        barWidth: 12,
        label: { show: true }
      }
    ]
  };
}

// 生成患者流转综合态势柱状图配置
export const createPatientFlowBarOption = (data) => {
  const defaultData = {
    xAxis: ['治愈', '转出', '转入ICU/CCU', '转出ICU/CCU'],
    series: [60, 90, 50, 60]
  };
  const chartData = data || defaultData;

  return {
    backgroundColor: 'transparent',
    grid: { left: 16, right: 16, bottom: 16, top: 40, containLabel: true },
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: chartData.xAxis,
      axisLine: { lineStyle: { color: '#D8E0F3' } },
      axisLabel: { color: '#222' }
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      splitLine: { lineStyle: { color: '#F0F3FA' } },
      axisLabel: { color: '#222' }
    },
    series: [
      {
        type: 'bar',
        data: chartData.series,
        barWidth: 24,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: '#3D7EFF' },
              { offset: 1, color: '#A0C6FF' }
            ]
          }
        },
        label: {
          show: true,
          position: 'top',
          color: '#3D7EFF',
          fontWeight: 'bold'
        }
      }
    ]
  };
}

// 生成保障能力综合态势仪表盘配置
export const createSupportCapabilityGaugeOption = (value = 60, name = '设备储备', color = '#3D7EFF') => {
  return {
    backgroundColor: 'transparent',
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        radius: '100%',
        center: ['50%', '75%'],
        splitNumber: 4,
        axisLine: {
          lineStyle: {
            width: 12,
            color: [
              [value / 100, color],
              [1, '#EDEDED']
            ]
          }
        },
        pointer: { show: false },
        progress: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        detail: {
          valueAnimation: true,
          fontSize: 18,
          fontWeight: 'bold',
          color: color,
          offsetCenter: [0, '-20%'],
          formatter: '{value}'
        },
        title: {
          offsetCenter: [0, '30%'],
          fontSize: 14,
          color: '#222'
        },
        data: [{ value, name }]
      }
    ]
  };
}

// 生成年龄分布饼图配置
export const createAgePieOption = (data) => {
  const defaultData = [
    { value: 7, name: '<18', itemStyle: { color: '#3D7EFF' } },
    { value: 8, name: '18-35', itemStyle: { color: '#3DD681' } },
    { value: 12, name: '36-60', itemStyle: { color: '#F6C659' } },
    { value: 16, name: '>60', itemStyle: { color: '#FF8C6B' } }
  ];
  const chartData = data || defaultData;

  return {
    backgroundColor: 'transparent',
    legend: {
      orient: 'vertical',
      right: 0,
      top: 20,
      textStyle: { color: '#222', fontSize: 12 }
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['40%', '60%'],
        label: { formatter: '{c}', color: '#222' },
        data: chartData
      }
    ]
  };
}

// 生成性别分布饼图配置
export const createGenderPieOption = (data) => {
  const defaultData = [
    { value: 55, name: '男性', itemStyle: { color: '#6CA8FF' } },
    { value: 45, name: '女性', itemStyle: { color: '#FF8AC9' } }
  ];
  const chartData = data || defaultData;

  return {
    backgroundColor: 'transparent',
    legend: {
      orient: 'vertical',
      right: 0,
      top: 'center',
      icon: 'circle',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: { color: '#222', fontSize: 14 }
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '70%'],
        center: ['30%', '50%'],
        label: {
          show: false
        },
        data: chartData
      }
    ]
  };
}

export const createLevelBarOption = (data) => {
  const defaultData = [
    { name: '社区', value: 2543, color: '#3DD681' },
    { name: '八院', value: 1060, color: '#A0C6FF' },
    { name: '疾控', value: 1876, color: '#6CA8FF' },
    { name: '卫健委', value: 2435, color: '#3D7EFF' }
  ];
  const chartData = data || defaultData;
  return {
    backgroundColor: 'transparent',
    grid: { left: 0, right: 0, top: 0, bottom: 0, containLabel: true },
    xAxis: {
      type: 'value',
      max: Math.max(...chartData.map(i => i.value)) * 1.1,
      splitLine: { show: false },
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false }
    },
    yAxis: {
      type: 'category',
      data: chartData.map(item => item.name),
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: '#222', fontWeight: 'bold' }
    },
    series: [
      {
        type: 'bar',
        data: chartData.map(item => ({
          value: item.value,
          itemStyle: { color: item.color },
          label: {
            show: true,
            position: 'right',
            color: '#222',
            fontWeight: 'bold'
          }
        })),
        barWidth: 12,
        label: { show: true }
      }
    ]
  };
};

// 生成分类诊治分析柱状图配置
export const createClassifyBarOption = (data) => {
  const defaultData = {
    xAxis: ['新冠', '肺结核', '乙肝'],
    series: [8, 7, 4]
  };
  const chartData = data || defaultData;
  return {
    backgroundColor: 'transparent',
    grid: { left: 24, right: 24, top: 24, bottom: 24, containLabel: true },
    xAxis: {
      type: 'category',
      data: chartData.xAxis,
      axisLine: { lineStyle: { color: '#D8E0F3' } },
      axisLabel: { color: '#222' }
    },
    yAxis: {
      type: 'value',
      minInterval: 1,
      axisLine: { show: false },
      splitLine: { lineStyle: { color: '#F0F3FA' } },
      axisLabel: { color: '#222' }
    },
    series: [
      {
        type: 'bar',
        data: chartData.series,
        barWidth: 24,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: '#3DD681' },
              { offset: 1, color: '#A0FFD6' }
            ]
          },
          borderRadius: [6, 6, 0, 0]
        }
      }
    ]
  };
};

export default echarts 