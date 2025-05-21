<template>
 <BaseEcharts :options="medicalResourceUsageOption" />
</template>

<script>

import BaseEcharts from '@/components/BaseEcharts.vue';
import { createMedicalResourceUsageRadarOption } from '@/utils/echarts';
export default {
  name: 'MedicalResourceUsage',
  components: {
    BaseEcharts,
  },
  data() {
    return {
      medicalResourceUsageOption: createMedicalResourceUsageRadarOption()
      // Define your data properties here
    };
  },
  methods: {
    // Define your methods here
  }
};
</script>

<style lang="scss" scoped></style>