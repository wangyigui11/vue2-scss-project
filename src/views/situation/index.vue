<template>
  <div class="situation">
    <div class="top-panel">
      <div class="left">
        <TopCard />
        <PatientReceptionStatus class="patient-reception-status" />
      </div>
      <div class="right">
        <PatientTreatmentStatus class="patient-treatment-status" />
      </div>
    </div>
    <div class="bottom-panel">
      <div class="left">
        <EmergencyResponseStatus class="emergency-response-status"/>
      </div>
      <div class="right">
        <SupportCapabilityStatus class="support-capability-status" />
        <PatientFlowStatus class="patient-flow-status" />
      </div>
    </div>
  </div>
</template>

<script>
import TopCard from './components/TopCard.vue'
import PatientReceptionStatus from './components/PatientReceptionStatus.vue'
import EmergencyResponseStatus from './components/EmergencyResponseStatus.vue'
import PatientTreatmentStatus from './components/PatientTreatmentStatus.vue'
import SupportCapabilityStatus from './components/SupportCapabilityStatus.vue'
import PatientFlowStatus from './components/PatientFlowStatus.vue'

export default {
  name: 'SituationView',
  components: {
    TopCard,
    PatientReceptionStatus,
    EmergencyResponseStatus,
    PatientTreatmentStatus,
    SupportCapabilityStatus,
    PatientFlowStatus
  }
}
</script>

<style lang="scss" scoped>
.situation {
  display: flex;
  flex-direction: column;
  height: 100%;
  
  .top-panel {
    height: 580px;
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
    
    .left, .right {
      border: 1px solid #dcdfe6;
      border-radius: 4px;
    }

    .left {
      width: 600px;
      display: flex;
      flex-direction: column;
      
      .patient-reception-status {
        flex: 1;
        min-height: 0;
        margin-top: 16px;
      }
    }

    .right {
      flex: 1;
      display: flex;
      flex-direction: column;

      .patient-treatment-status {
        flex: 1;
        min-height: 0;
      }
    }
  }
  
  .bottom-panel {
    flex: 1;
    display: flex;
    gap: 16px;
    min-height: 0;
    
    .left, .right {
      border: 1px solid #dcdfe6;
      border-radius: 4px;
    }

    .left {
      width: 600px;
      display: flex;
      flex-direction: column;

      .emergency-response-status {
        flex: 1;
        min-height: 0;
      }
    }

    .right {
      flex: 1;
      display: flex;
      flex-direction: row;
      gap: 16px;

      .support-capability-status,
      .patient-flow-status {
        flex: 1;
        min-height: 0;
      }
    }
  }

  .top-panel, .bottom-panel {
    .left {
      width: 600px;
    }

    .right {
      flex: 1;
    }
  }
}
</style>
