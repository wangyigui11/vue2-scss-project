<template>
  <div class="home">
    <div class="header">
      <Menu class="menu" />
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
  name: 'HomeView',
  components: {
    Menu
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: url('@/assets/bg.jpg') no-repeat center center;
  background-size: cover;
  overflow: hidden;

  .header {
    width: 100%;
    height: 102px;
    background: url('@/assets/title.png') no-repeat center center;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
    box-sizing: border-box;
  }

  .content {
    flex: 1;
    padding: 8px 16px;
    box-sizing: border-box;
  }

  .menu {
    width: auto;
    height: 100%;
  }
}
</style> 