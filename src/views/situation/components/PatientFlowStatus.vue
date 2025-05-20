<template>
  <CustomerCardPanel v-bind="situationMap.patientTransfer" >
  </CustomerCardPanel>
</template>

<script>
import { situationMap } from '@/constant/situation'
import CustomerCardPanel from '@/components/CustomerCardPanel.vue'

export default {
  name: 'SupportCapabilityStatus',
  components: {
    CustomerCardPanel
  },
  data() {
    return {
      situationMap
    }
  }
}
</script>

<style lang="scss" scoped>
</style> 