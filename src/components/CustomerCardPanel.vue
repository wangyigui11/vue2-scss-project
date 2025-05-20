<template>
  <div class="customer-card-panel">
    <div class="customer-card-panel-item">
      <CustomTitle :title="title" :bgImg="bgImg">
        <template #TitleOperate>
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
    }
  }
}
</script>

<style lang="scss" scoped>
.customer-card-panel {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 24px 0 rgba(0, 42, 255, 0.08);

  &-item {
    // background: #fff;
  }
} 
</style>


