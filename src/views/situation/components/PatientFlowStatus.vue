<template>
  <CustomerCardPanel v-bind="situationMap.patientTransfer">
    <div class="patient-flow-status-content">
      <BaseEcharts :options="barOptions" />
    </div>
  </CustomerCardPanel>
</template>

<script>
import { situationMap } from '@/constant/situation'
import CustomerCardPanel from '@/components/CustomerCardPanel.vue'
import BaseEcharts from '@/components/BaseEcharts.vue'
import { createPatientFlowBarOption } from '@/utils/echarts'

export default {
  name: 'PatientFlowStatus',
  components: {
    CustomerCardPanel,
    BaseEcharts
  },
  data() {
    return {
      situationMap,
      barOptions: createPatientFlowBarOption()
    }
  }
}
</script>

<style lang="scss" scoped>
.patient-flow-status-content {
  height: 100%;
  padding: 8px;
  border-radius: 4px;
  // background-color: #fff;
}
</style> 