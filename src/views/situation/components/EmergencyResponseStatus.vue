<template>
  <CustomerCardPanel v-bind="situationMap.emergencyResponse">
    <div class="emergency-response-status-content">
      <CustomerCardPanel class="emergency-resource-usage" v-bind="situationMap.emergencyResourceUsage"
        :showTitleOperate="false">
        <div class="charts-container">
          <div class="pie-charts">
            <BaseEcharts :options="pieOptions" />
          </div>
          <div class="bar-charts">
            <BaseEcharts :options="emergencyResourceUsageBarOptions" />
          </div>
        </div>
      </CustomerCardPanel>

      <CustomerCardPanel class="emergency-response-analysis" v-bind="situationMap.emergencyResponseAnalysis"
        :showTitleOperate="false">
        <BaseEcharts :options="emergencyResponseAnalysisBarOptions" />
      </CustomerCardPanel>

    </div>
  </CustomerCardPanel>
</template>

<script>
import CustomerCardPanel from '@/components/CustomerCardPanel.vue';
import BaseEcharts from '@/components/BaseEcharts.vue';
import { situationMap } from '@/constant/situation';
import { createEmergencyResponsePieOption, createEmergencyResponseBarOption, createEmergencyResourceUsageBarOption, createEmergencyResponseRadarOption } from '@/utils/echarts';

export default {
  name: 'EmergencyResponseStatus',
  components: { CustomerCardPanel, BaseEcharts },
  data() {
    return {
      situationMap,
      pieOptions: createEmergencyResponsePieOption(),
      barOptions: createEmergencyResponseBarOption(),
      emergencyResourceUsageBarOptions: createEmergencyResourceUsageBarOption(),
      emergencyResponseAnalysisBarOptions: createEmergencyResponseRadarOption()
    }
  }
}
</script>

<style lang="scss" scoped>
.emergency-response-status {
  // width: 100%;
  // min-height: 160px;
  // background: rgba(255,255,255,0.08);
  // border-radius: 8px;
  // color: #222;
  // padding: 16px;
  // box-sizing: border-box;
}

.emergency-response-status-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  padding: 8px;
  gap: 8px;

  .emergency-resource-usage,
  .emergency-response-analysis {
    height: 50%;
    min-height: 0;
  }

  .emergency-resource-usage {

    .charts-container {
      height: 100%;
      display: flex;
       gap: 8px;  

    .pie-charts {
      width: 40%;
      height: 100%;
    }

    .bar-charts {
      flex: 1;
        height: 100%;
      }
    }
  }
}
</style>