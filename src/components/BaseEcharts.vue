<template>
  <div ref="chartRef" class="base-echarts"></div>
</template>

<script>
import echarts from '@/utils/echarts'

export default {
  name: 'BaseEcharts',
  props: {
    // 图表配置项
    options: {
      type: Object,
      required: true
    },
    // 图表主题
    theme: {
      type: String,
      default: 'dark'
    },
    // 是否自动调整大小
    autoResize: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    options: {
      handler(val) {
        this.setOptions(val)
      },
      deep: true
    }
  },
  mounted() {
    this.initChart()
    if (this.autoResize) {
      window.addEventListener('resize', this.resize)
    }
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    if (this.autoResize) {
      window.removeEventListener('resize', this.resize)
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.chartRef, this.theme)
      this.setOptions(this.options)
    },
    setOptions(options) {
      if (this.chart) {
        this.chart.setOption(options)
      }
    },
    resize() {
      if (this.chart) {
        this.chart.resize()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-echarts {
  width: 100%;
  height: 100%;
}
</style> 