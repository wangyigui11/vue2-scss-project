<template>
  <CustomerCardPanel v-bind="situationMap.emergencyResponse">
    <!-- 其他内容 -->
    <div class="emergency-response-status-content">
      123123
    </div>
  </CustomerCardPanel>
</template>

<script>
import CustomerCardPanel from '@/components/CustomerCardPanel.vue';   
import { situationMap } from '@/constant/situation';

export default {
  name: 'EmergencyResponseStatus',
  components: { CustomerCardPanel },
  data() {
    return {
      situationMap
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
</style> 