<template>
  <BaseEcharts :options="options" />
</template>

<script>
import BaseEcharts from '@/components/BaseEcharts.vue';
import { createLevelBarOption } from '@/utils/echarts';

export default {
  name: 'LevelBarChart',
  components: { BaseEcharts },
  data() {
    return {
      options: createLevelBarOption()
    }
  }
}
</script> 