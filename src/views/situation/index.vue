<template>
  <div class="situation">
    <div class="left-panel">
      <div class="patient-reception-status">
        <!-- 患者接收综合态势 -->
        <PatientReceptionStatus />
      </div>
      <div class="patient-flow-status">
        <!-- 患者流转综合态势 -->
        <PatientFlowStatus />
      </div>
    </div>
    <div class="center-panel">
      <div class="patient-treatment-status">
        <!-- 患者诊治综合态势 -->
        <PatientTreatmentStatus />
      </div>
      <div class="support-capability-status">
        <!-- 保障能力综合态势 -->
        <SupportCapabilityStatus />
      </div>
    </div>

    <div class="right-panel">
        <!-- 应急响应综合态势 -->
      <EmergencyResponseStatus class="emergency-response-status" />
      <TopCard />
    </div>
  </div>
</template>

<script>
// import TopCard from './components/TopCard.vue'
import PatientReceptionStatus from './components/PatientReceptionStatus.vue'
// import EmergencyResponseStatus from './components/EmergencyResponseStatus.vue'
import PatientTreatmentStatus from './components/PatientTreatmentStatus.vue'
import SupportCapabilityStatus from './components/SupportCapabilityStatus.vue'
import PatientFlowStatus from './components/PatientFlowStatus.vue'
import EmergencyResponseStatus from './components/EmergencyResponseStatus.vue'
import TopCard from './components/TopCard.vue'

export default {
  name: 'SituationView',
  components: {
    // TopCard,
    PatientReceptionStatus,
    // EmergencyResponseStatus,
    PatientTreatmentStatus,
    SupportCapabilityStatus,
    PatientFlowStatus,
    EmergencyResponseStatus,
    TopCard
  }
}
</script>

<style lang="scss" scoped>
.situation {
  display: flex;
  height: 100%;
  gap: 16px;

  .left-panel {
    width: 20%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .patient-reception-status {
      height: 60%;
      border-radius: 8px;
      // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .patient-flow-status {
      height: 40%;
      // border-radius: 8px;
      // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }

  .center-panel {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .patient-treatment-status {
      height: 80%;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .support-capability-status {
      height: 20%;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }

  .right-panel {
    width: 25%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .emergency-response-status {
      flex: 1;
      overflow: hidden;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .top-card-container {
      flex-shrink: 0;
    }
  }
}
</style>
