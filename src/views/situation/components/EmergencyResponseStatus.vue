<template>
  <CustomerCardPanel v-bind="situationMap.emergencyResponse">
    <div class="emergency-response-status-content">
      <div class="pie-charts">
        <BaseEcharts :options="pieOptions" />
      </div>
      <div class="bar-charts">
        <BaseEcharts :options="barOptions" />
      </div>
    </div>
  </CustomerCardPanel>
</template>

<script>
import CustomerCardPanel from '@/components/CustomerCardPanel.vue';
import BaseEcharts from '@/components/BaseEcharts.vue';
import { situationMap } from '@/constant/situation';
import { createEmergencyResponsePieOption, createEmergencyResponseBarOption } from '@/utils/echarts';

export default {
  name: 'EmergencyResponseStatus',
  components: { CustomerCardPanel, BaseEcharts },
  data() {
    return {
      situationMap,
      pieOptions: createEmergencyResponsePieOption(),
      barOptions: createEmergencyResponseBarOption()
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
  flex: 1;
  min-height: 0;
  padding: 8px;
  // background-color: #fff;
  .pie-charts {
    width: 40%;
    height: 100%;
    margin-right: 8px;
    border-radius: 4px;
  }
  .bar-charts {
    flex: 1;
    height: 100%;
    border-radius: 4px;
  }
}
</style> 