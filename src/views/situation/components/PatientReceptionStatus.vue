<template>
  <CustomerCardPanel v-bind="situationMap.patientReception">
    <!-- 其他内容 -->
    <div class="patient-reception-status-content">
      <div class="pie-charts">
        <BaseEcharts :options="pieOptions" />
      </div>
      <div class="trend-charts">
        <BaseEcharts :options="lineOptions" />
      </div>
    </div>
  </CustomerCardPanel>
</template>

<script>
import CustomerCardPanel from '@/components/CustomerCardPanel.vue';
import BaseEcharts from '@/components/BaseEcharts.vue';
import { situationMap } from '@/constant/situation';
import { createPatientReceptionPieOption, createPatientReceptionLineOption } from '@/utils/echarts';

export default {
  name: 'PatientReceptionStatus',
  components: { 
    CustomerCardPanel,
    BaseEcharts
  },
  data() {
    return {
      situationMap,
      pieOptions: createPatientReceptionPieOption(),
      lineOptions: createPatientReceptionLineOption()
    }
  }
}
</script>

<style lang="scss" scoped>
.patient-reception-status-content {
  display: flex;
  flex: 1;
  min-height: 0;
  padding: 8px;
  // background-color: #fff;
  
  .pie-charts {
    width: 40%;
    height: 100%;
    margin-right: 8px;
    // border: 1px solid #dcdfe6;
    border-radius: 4px;
  }
  
  .trend-charts {
    flex: 1;
    height: 100%;
    // border: 1px solid #dcdfe6;
    border-radius: 4px;
  }
}
</style>