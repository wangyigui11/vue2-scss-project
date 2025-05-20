<template>
  <BaseEcharts :options="options" />
</template>

<script>
import BaseEcharts from '@/components/BaseEcharts.vue';
import { createClassifyBarOption } from '@/utils/echarts';

export default {
  name: 'ClassifyBarChart',
  components: { BaseEcharts },
  data() {
    return {
      options: createClassifyBarOption()
    }
  }
}
</script> 