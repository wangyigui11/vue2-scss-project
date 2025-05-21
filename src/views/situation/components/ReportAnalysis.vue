<template>
  <div class="report-analysis-content">
    <BaseEcharts :options="options" />  
  </div>
</template>

<script>
import BaseEcharts from '@/components/BaseEcharts.vue';
import { createReportAnalysisBarOption } from '@/utils/echarts';
export default {
  name: 'ReportAnalysis',
  components: { BaseEcharts },
  data() {
    return {
      options: createReportAnalysisBarOption()
    }
  }
}
</script>

<style lang="scss" scoped>
.report-analysis-content {
  height: 100%;
}
</style>  