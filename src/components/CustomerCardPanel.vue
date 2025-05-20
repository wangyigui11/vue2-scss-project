<template>
  <div
    class="customer-card-panel"
    :style="{ boxShadow: boxShadow }"
  >
    <div class="customer-card-panel-item">
      <CustomTitle :title="title" :bgImg="bgImg" :height="height">
        <template #TitleOperate v-if="showTitleOperate">
          <slot name="TitleOperate">
            <MoreTextBtn />
          </slot>
        </template>
      </CustomTitle>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import CustomTitle from '@/components/CustomTitle.vue';
import MoreTextBtn from '@/components/MoreTextBtn.vue';

export default {
  components: {
    CustomTitle,
    MoreTextBtn
  },
  props: {
    title: {
      type: String,
      required: true
    },
    bgImg: {
      type: String,
      required: true
    },
    height: {
      type: [String, Number],
      default: 48
    },
    showTitleOperate: {
      type: Boolean,
      default: true
    },
    boxShadow: {
      type: String,
      default: '0 4px 24px 0 rgba(0, 42, 255, 0.08)'
    }
  }
}
</script>

<style lang="scss" scoped>
.customer-card-panel {
  border-radius: 12px;
  box-shadow: 0 4px 24px 0 rgba(0, 42, 255, 0.08);
  height: 100%;
  display: flex;
  flex-direction: column;

  &-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
} 
</style>


