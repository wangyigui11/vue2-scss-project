<template>
  <div class="more-text-btn">
    <span class="more-text-btn-text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'MoreTextBtn',
  props: {
    text: {
      type: String,
      default: '更多'
    }
  },
  data() {
    return {
      // text: this.text
    }
  }
}
</script>

<style lang="scss" scoped>
.more-text-btn {
  color: #3A7CFF;
  cursor: pointer;
  font-style: italic;

}
</style>


