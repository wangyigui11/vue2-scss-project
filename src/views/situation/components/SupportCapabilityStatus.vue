<template>
  <CustomerCardPanel v-bind="situationMap.supportCapability" >
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
// .support-capability-status {
//   height: 100%;
//   display: flex;
//   flex-direction: column;
  
//   .content {
//     flex: 1;
//     padding: 16px;
//     min-height: 0;
//   }
// }
</style> 