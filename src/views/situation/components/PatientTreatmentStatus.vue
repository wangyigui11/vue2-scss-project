<template>
  <CustomerCardPanel v-bind="situationMap.patientTreatment">
    <div class="patient-treatment-status-content">
      <div class="stat-card-list">
        <StatCard class="stat-card-item" v-for="item in cards" :key="item.desc" v-bind="item" size="small" />
      </div>

      <div class="patient-treatment-status-chart">
        <div class="chart-block gender-age">
          <div class="gender-chart">
            <CustomerCardPanel v-bind="situationMap.genderAnalysis" :height="36" :showTitleOperate="false"
              :boxShadow="null">
              <GenderChart />
            </CustomerCardPanel>
          </div>
          <div class="age-chart">
            <CustomerCardPanel v-bind="situationMap.ageAnalysis" :height="36" :showTitleOperate="false"
              :boxShadow="null">
              <AgePieChart />
            </CustomerCardPanel>
          </div>
        </div>
        <div class="chart-block region">
          <CustomerCardPanel v-bind="situationMap.patientRegion" :height="36" :showTitleOperate="false"
            :boxShadow="null">
            <div class="region-map-bg">
            </div>
          </CustomerCardPanel>
        </div>
        <div class="chart-block classify-grade">
          <div class="classify-chart">
            <CustomerCardPanel v-bind="situationMap.classifyAnalysis" :height="36" :showTitleOperate="false"
              :boxShadow="null">
              <ClassifyBarChart />
            </CustomerCardPanel>
          </div>
          <div class="grade-chart">
            <CustomerCardPanel v-bind="situationMap.gradeAnalysis" :height="36" :showTitleOperate="false"
              :boxShadow="null">
              <LevelBarChart />
            </CustomerCardPanel>
          </div>
        </div>
      </div>
    </div>
  </CustomerCardPanel>
</template>

<script>
import CustomerCardPanel from '@/components/CustomerCardPanel.vue';
import { situationMap, cardBgMap } from '@/constant/situation';
import StatCard from '@/components/StatCard.vue';
import GenderChart from './GenderChart.vue';
import AgePieChart from './AgePieChart.vue';
import ClassifyBarChart from './ClassifyBarChart.vue';  
import LevelBarChart from './LevelBarChart.vue';
export default {
  name: 'PatientTreatmentStatus',
  components: { CustomerCardPanel, StatCard, GenderChart, AgePieChart, ClassifyBarChart, LevelBarChart },
  data() {
    return {
      situationMap,
      cards: [
        {
          bgImg: cardBgMap.bg2,
          value: 21520,
          unit: '人',
          desc: '病人总数'
        },
        {
          bgImg: cardBgMap.bg2,
          value: 21520,
          unit: '人',
          desc: '治愈数'
        },
        {
          bgImg: cardBgMap.bg2,
          value: 20,
          unit: '类',
          desc: '疾病数'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.patient-treatment-status-content {
  width: 100%;
  height: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  background-color: null;

  .stat-card-list {
    width: 100%;
    margin-top: 8px;
    margin-bottom: 8px;
    display: flex;
    gap: 0;
    height: 86px;
    flex-shrink: 0;
    align-items: center;

    .stat-card-item {
      width: 33.33%;
    }

    // justify-content: space-around;
  }

  .patient-treatment-status-chart {
    display: flex;
    height: 100%;
    gap: 16px;

    .chart-block {
      height: 100%;

      // border-radius: 8px;
      // box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      // display: flex;
      // align-items: center;
      // justify-content: center;
      // border: 1px solid #000;
      // 你可以根据需要添加padding等
    }

    .gender-age {
      width: 30%;
      min-width: 220px;
      // background: #fff;
      display: flex;
      flex-direction: column;
      height: 100%;

      .gender-chart {
        flex: 1;
        min-height: 0;
        // margin-bottom: 8px;
      }

      .age-chart {
        flex: 1;
        min-height: 0;
      }
    }

    .region {
      width: 30%;
      min-width: 220px;
    }

    .classify {
      flex: 1;
      min-width: 0;
      // background: #fff;

    }
  }
}

.region-map-bg {
  width: 100%;
  height: 100%;
  background: url('@/assets/map.png') center center / cover no-repeat;
  background-color: transparent;
}

.classify-grade {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;

  .classify-chart,
  .grade-chart {
    flex: 1;
    min-height: 0;
  }
  .classify-chart {
    margin-bottom: 8px;
  }
}
</style>
