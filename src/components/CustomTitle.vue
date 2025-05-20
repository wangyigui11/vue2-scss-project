<template>
  <div class="custom-title" :style="bgImageStyle">
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
    }
  },
  computed: {
    bgImageStyle() {
      // 如果传入的是相对路径，自动 require
      return getBgImageStyle(this.bgImg);
    }
  }
}
</script>

<style scoped>
.custom-title {
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding-left: 52px;
  padding-right: 16px;
  font-size: 20px;
  font-weight: bold;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left center;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-sizing: border-box;
}

.custom-title-slot {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.panel-title {
  /* font-style: italic; */
}
</style>