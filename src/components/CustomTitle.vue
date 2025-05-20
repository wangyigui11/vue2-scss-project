<template>
  <div
    class="custom-title"
    :class="customTitleClass"
    :style="[bgImageStyle, { height: typeof height === 'number' ? height + 'px' : height }]"
  >
    <div class="panel-title" v-if="title">{{ title }}</div>
    <div class="custom-title-slot">
      <slot name="TitleOperate"></slot>
    </div>
  </div>
</template>

<script>
import { cardCustomTitleMap } from '@/constant/situation';
import { getBgImageStyle } from '@/utils';

export default {
  name: 'CustomTitle',
  props: {
    title: {
      type: String,
      required: true
    },
    bgImg: {
      type: String,
      // required: true,
      default: () => cardCustomTitleMap.title1
    },
    height: {
      type: [String, Number],
      default: 48
    }
  },
  computed: {
    bgImageStyle() {
      // 如果传入的是相对路径，自动 require
      return getBgImageStyle(this.bgImg);
    },
    customTitleClass() {
      if (this.bgImg === cardCustomTitleMap.title1) {
        return 'custom-title1';
      }
      if (this.bgImg === cardCustomTitleMap.title2) {
        return 'custom-title2';
      }
      return '';
    }
  }
}
</script>

<style scoped>
.custom-title {
  display: flex;
  align-items: center;
  padding-right: 16px;
  
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left center;
  box-sizing: border-box;

  font-weight: bold;
}

.custom-title-slot {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.panel-title {
  /* font-style: italic; */
}

.custom-title1 {
  width: 100%;
  font-size: 20px;
  padding-left: 52px;
  padding-right: 16px;
  border-radius: 8px;
  
}

.custom-title2 {
  font-size: 14px;
  padding-left: 32px;
  border-radius: 0;
  background-size: 160px 36px;
  font-style: italic;
}
</style>