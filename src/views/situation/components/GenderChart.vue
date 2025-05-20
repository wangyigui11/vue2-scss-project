<template>
  <div class="gender-chart-custom">
    <div class="gender-icons">
      <img class="icon female" :src="femaleImg" alt="女" />
      <img class="icon male" :src="maleImg" alt="男" />
    </div>
    <div class="gender-legend">
      <div class="legend-item">
        <span class="dot male"></span> 男性:55%
      </div>
      <div class="legend-item">
        <span class="dot female"></span> 女性:45%
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GenderChart',
  data() {
    return {
      maleImg: require('@/assets/male.png'),
      femaleImg: require('@/assets/female.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.gender-chart-custom {
  display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 24px;
  .gender-icons {
    display: flex;
   
    align-items: center;
    margin-bottom: 8px;
    .icon {
      width: 60px;
      height: 100px;
      object-fit: contain;
    }
  }
  .gender-legend {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .legend-item {
      font-size: 14px;
      margin-bottom: 2px;
      .dot {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin-right: 6px;
        vertical-align: middle;
      }
      .male { background: #6CA8FF; }
      .female { background: #FF8AC9; }
    }
  }
}
</style> 