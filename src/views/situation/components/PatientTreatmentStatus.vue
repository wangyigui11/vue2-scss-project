

<template>
  <CustomerCardPanel v-bind="situationMap.patientTreatment">
    <div class="patient-treatment-status-content">
      123123
    </div>
  </CustomerCardPanel>
</template>

<script>
import CustomerCardPanel from '@/components/CustomerCardPanel.vue';   
import { situationMap } from '@/constant/situation';

export default {
  name: 'PatientTreatmentStatus',
  components: { CustomerCardPanel },
  data() {
    return {
      situationMap
    }
  }
}
</script>

<style lang="scss" scoped>
.patient-treatment-status-content {
  width: 100%;
  height: 100%;
  padding: 8px;
}
</style>

