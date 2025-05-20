<template>
  <BaseEcharts :options="pieOptions" />
</template>

<script>
import BaseEcharts from '@/components/BaseEcharts.vue';
import { situationMap } from '@/constant/situation';
import { createAgePieOption } from '@/utils/echarts';

export default {
  name: 'AgePieChart',
  components: { BaseEcharts },
  data() {
    return {
      situationMap,
      pieOptions: createAgePieOption(),
    }
  }
}
</script>
