<template>
  <CustomerCardPanel v-bind="situationMap.patientReception">
    <!-- 其他内容 -->
    <div class="patient-reception-status">
      <div class="first-row">
        <div class="pie-charts">
          <CustomerCardPanel v-bind="situationMap.patientSourceAnalysis" :showTitleOperate="false">
            <BaseEcharts :options="pieOptions" />
          </CustomerCardPanel>
        </div>
        <div class="trend-charts">
          <CustomerCardPanel v-bind="situationMap.patientQuantityAnalysis" :showTitleOperate="false">
            <BaseEcharts :options="lineOptions" />
          </CustomerCardPanel>
        </div>
      </div>
      <div class="second-row">
          <CustomerCardPanel v-bind="situationMap.reportAnalysis" :showTitleOperate="false">
            <ReportAnalysis />
          </CustomerCardPanel>
      </div>
    </div>
  </CustomerCardPanel>
</template>

<script>
import CustomerCardPanel from '@/components/CustomerCardPanel.vue';
import BaseEcharts from '@/components/BaseEcharts.vue';
import ReportAnalysis from './ReportAnalysis.vue';
import { situationMap } from '@/constant/situation';
import { createPatientReceptionPieOption, createPatientReceptionLineOption } from '@/utils/echarts';

export default {
  name: 'PatientReceptionStatus',
  components: { 
    CustomerCardPanel,
    BaseEcharts,
    ReportAnalysis
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
.patient-reception-status {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 8px;

  .first-row {
    display: flex;
    height: 50%;
    gap: 8px;
    padding: 8px;

    .pie-charts {
      width: 50%;
      // border-radius: 8px;
      // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .trend-charts {
      width: 50%;
      // border-radius: 8px;
      // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }

  .second-row {
    height: 50%;
    // background: #fff;
    // border-radius: 8px;
    // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    .report-analysis {
      // padding: 16px;
    }
  }
}
</style>