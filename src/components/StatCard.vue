<template>
  <div class="stat-card" :style="{ backgroundImage: 'url(' + bgImg + ')' }">
    <div class="info">
      <div class="value">
        <span class="number">{{ value }}</span>
        <span class="unit">{{ unit }}</span>
      </div>
      <div class="desc">{{ desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatCard',
  props: {
    bgImg: String, // 直接传入图片路径
    value: [String, Number],
    unit: String,
    desc: String
  }
}
</script>

<style lang="scss" scoped>
.stat-card {
  width: calc(50% - 8px);
  flex: none;
  display: flex;
  align-items: center;
  // justify-content: flex-end;
  border-radius: 12px;
  padding: 12px 18px;
  min-height: 86px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  background-size: auto;
  background-repeat: no-repeat;
  background-position: left top;
  // color: #000;
  .info {
    margin-left: 80px;
    z-index: 1;
    .value {
      font-size: 20px;
      font-weight: bold;
      .number { font-size: 22px; }
      .unit { font-size: 14px; margin-left: 6px; }
    }
    .desc {
      font-size: 12px;
      color: #000;
      margin-top: 2px;
    }
  }
}
</style> 