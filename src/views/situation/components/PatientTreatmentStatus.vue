<template>
  <CustomerCardPanel v-bind="situationMap.patientTreatment">
    <div class="patient-treatment-status-content">
      <div class="left-panel">
        <div class="stat-card-list">
          <StatCard
            class="stat-card-item"
            v-for="item in cards"
            :key="item.desc"
            v-bind="item"
            size="small"
          />
        </div>

        <div class="map-charts-container">
          <!-- 地图 -->
          <div class="map-item"></div>
          <div class="classify-grand-charts">
            <!-- 分类诊治分析 -->
            <div class="classify-chart">
              <CustomerCardPanel
                v-bind="situationMap.classifyAnalysis"
                :height="36"
                :showTitleOperate="false"
                :boxShadow="null"
              >
                <ClassifyBarChart />
              </CustomerCardPanel>
            </div>
            <div class="grade-chart">
              <CustomerCardPanel
                v-bind="situationMap.gradeAnalysis"
                :height="36"
                :showTitleOperate="false"
                :boxShadow="null"
              >
                <LevelBarChart />
              </CustomerCardPanel>
            </div>
          </div>
        </div>
      </div>
      <div class="right-panel">
        <div class="gender-chart">
          <CustomerCardPanel
            v-bind="situationMap.genderAnalysis"
            :height="36"
            :showTitleOperate="false"
            :boxShadow="null"
          >
            <GenderChart />
          </CustomerCardPanel>
        </div>
        <div class="age-chart">
          <CustomerCardPanel
            v-bind="situationMap.ageAnalysis"
            :height="36"
            :showTitleOperate="false"
            :boxShadow="null"
          >
            <AgePieChart />
          </CustomerCardPanel>
        </div>
        <div class="resource-usage-chart">
          <CustomerCardPanel
            v-bind="situationMap.medicalResourceUsage"
            :height="36"
            :showTitleOperate="false"
            :boxShadow="null"
          >
            <MedicalResourceUsage />
          </CustomerCardPanel>
        </div>
      </div>
    </div>
  </CustomerCardPanel>
</template>

<script>
import CustomerCardPanel from "@/components/CustomerCardPanel.vue";
import { situationMap, cardBgMap } from "@/constant/situation";
import StatCard from "@/components/StatCard.vue"; // Un-commented import
import GenderChart from "./GenderChart.vue";
import AgePieChart from "./AgePieChart.vue";
import ClassifyBarChart from "./ClassifyBarChart.vue";
import LevelBarChart from "./LevelBarChart.vue";
import MedicalResourceUsage from "./MedicalResourceUsage.vue"; // New import for medical resource usage
export default {
  name: "PatientTreatmentStatus",
  components: {
    CustomerCardPanel,
    StatCard,
    ClassifyBarChart,
    LevelBarChart,
    GenderChart,
    AgePieChart,
    MedicalResourceUsage,
  },
  data() {
    return {
      situationMap,
      cards: [
        {
          bgImg: cardBgMap.bg2,
          value: 21520,
          unit: "人",
          desc: "病人总数",
        },
        {
          bgImg: cardBgMap.bg2,
          value: 21520,
          unit: "人",
          desc: "治愈数",
        },
        {
          bgImg: cardBgMap.bg2,
          value: 20,
          unit: "类",
          desc: "疾病数",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.patient-treatment-status-content {
  width: 100%;
  height: 100%;
  padding: 8px;
  display: flex;
  gap: 8px;

  .left-panel {
    width: 70%;
    height: 100%;
    // background-color: #f0f0f0;
    // border: 1px solid blue;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .stat-card-list {
      width: 100%;
      margin-top: 8px;
      display: flex;
      height: 86px;
      flex-shrink: 0;
      align-items: center;

      .stat-card-item {
        width: 33.33%;
      }

      // justify-content: space-around;
    }

    .map-charts-container {
      flex: 1;
      height: 100%;

      display: flex;
      gap: 8px;

      .map-item {
        width: 50%;
        // width: 100%;
        height: 100%;
        // background: url('@/assets/map.png') center center / cover no-repeat;
        background: url("@/assets/map.png") center center / 100% auto no-repeat;
        background-color: transparent;
      }
      .classify-grand-charts {
        flex: 1;
        height: 100%;
        // border: 1px solid blue;

        .classify-chart {
          height: 50%;
        }
        .grade-chart {
          height: 50%;
        }
      }
    }
  }
  .right-panel {
    // width: 50%;
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;

    .gender-chart {
      width: 100%;
      flex: 1;
    }
    .age-chart {
      width: 100%;
      flex: 1;
    }
    .resource-usage-chart {
      flex: 1;
      width: 100%;
    }
  }
}
</style>
