<template>
  <div class="situation">
    <div class="left-panel">
      <TopCard />
      <PatientReceptionStatus />
      <EmergencyResponseStatus />
    </div>
    <div class="right-panel">
      <!-- 右侧内容后续扩展 -->
    </div>
  </div>
</template>

<script>
import TopCard from './components/TopCard.vue'
import PatientReceptionStatus from './components/PatientReceptionStatus.vue'
import EmergencyResponseStatus from './components/EmergencyResponseStatus.vue'

export default {
  name: 'SituationView',
  components: {
    TopCard,
    PatientReceptionStatus,
    EmergencyResponseStatus
  }
}
</script>

<style lang="scss" scoped>
.situation {
  display: flex;
  width: 100%;
  height: 100%;
  .left-panel {
    width: 620px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .right-panel {
    flex: 1;
    margin-left: 16px;
  }
}
</style> 