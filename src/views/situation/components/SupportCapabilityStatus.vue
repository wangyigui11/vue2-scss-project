<template>
  <CustomerCardPanel v-bind="situationMap.supportCapability">
    <div class="support-capability-status-content">
      <div
        class="gauge-item"
        v-for="(item, idx) in gaugeList"
        :key="item.name"
      >
        <BaseEcharts :key="idx" :options="item.option" />
      </div>
    </div>
  </CustomerCardPanel>
</template>

<script>
import { situationMap } from '@/constant/situation'
import CustomerCardPanel from '@/components/CustomerCardPanel.vue'
import BaseEcharts from '@/components/BaseEcharts.vue'
import { createSupportCapabilityGaugeOption } from '@/utils/echarts'

export default {
  name: 'SupportCapabilityStatus',
  components: {
    CustomerCardPanel,
    BaseEcharts
  },
  data() {
    return {
      situationMap,
      gaugeList: [
        { value: 78.24, name: '物资储备', color: '#3D7EFF' },
        { value: 60.14, name: '设备储备', color: '#F6C659' },
        { value: 78.24, name: '药品储备', color: '#3DD681' },
        { value: 60.14, name: '床位储备', color: '#3DD681' },
        { value: 60.14, name: '人员储备', color: '#3D7EFF' },
        { value: 60.14, name: '氧气储备', color: '#F6C659' }
      ].map(item => ({
        ...item,
        option: createSupportCapabilityGaugeOption(item.value, item.name, item.color)
      }))
    }
  }
}
</script>

<style lang="scss" scoped>
.support-capability-status-content {
  // background-color: #fff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 12px;
  height: 100%;
  padding: 8px;
  .gauge-item {
    // background: #fff;
    border-radius: 8px;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style> 