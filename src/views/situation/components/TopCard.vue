<template>
  <div class="top-card">
    <div class="stat-card-list">
      <StatCard
        v-for="item in cards"
        :key="item.desc"
        v-bind="item"
      />
    </div>
  </div>
</template>

<script>
import StatCard from '@/components/StatCard.vue'
import { cardBgMap } from '@/constant/situation'

export default {
  name: 'TopCard',
  components: { StatCard },
  data() {
    return {
      cards: [
        {
          bgImg: cardBgMap.bg1,
          value: '126,560',
          unit: '/台',
          desc: '可用的检测设备数',
        },
        {
          bgImg: cardBgMap.bg2,
          value: '65.6',
          unit: '%',
          desc: '设备检测通过率',
        },
        {
          bgImg: cardBgMap.bg3,
          value: '66',
          unit: '/台',
          desc: '昨日新增设备数',
        },
        {
          bgImg: cardBgMap.bg4,  
          value: '21,520',
          unit: '/次',
          desc: '昨日检测人次',
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.top-card {
  width: 100%;
  .stat-card-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
}
</style> 