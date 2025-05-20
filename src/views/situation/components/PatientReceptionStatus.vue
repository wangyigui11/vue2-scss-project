<template>
  <CustomerCardPanel v-bind="situationMap.patientReception">
    <!-- 其他内容 -->
    <div class="patient-reception-status-content">
      123123
    </div>
  </CustomerCardPanel>
</template>

<script>
import CustomerCardPanel from '@/components/CustomerCardPanel.vue';
import { situationMap } from '@/constant/situation';

export default {
  name: 'PatientReceptionStatus',
  components: { CustomerCardPanel },
  data() {
    return {
      situationMap
    }
  }
}
</script>

<style lang="scss" scoped>
.patient-reception-status {
  // width: 100%;
  // min-height: 180px;
  // background: rgba(255, 255, 255, 0.08);
  // border-radius: 8px;
  // color: #222;
  // // padding: 16px;
  // box-sizing: border-box;
  // margin-top: 16px;
}
</style>