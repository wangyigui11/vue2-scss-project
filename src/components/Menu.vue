<template>
  <div class="menu">
    <div
      v-for="route in menuRoutes"
      :key="route.path"
      :class="['menu-item', { active: currentPath === '/' + route.path }]"
      @click="handleClick(route.path)"
    >
      {{ route.label }}
    </div>
  </div>
</template>

<script>
import { routes } from '@/router'

export default {
  name: 'MenuComponent',
  computed: {
    menuRoutes() {
      return routes[0].children
    },
    currentPath() {
      return this.$route.path
    }
  },
  methods: {
    handleClick(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  gap: 20px;
  height: 100%;
  align-items: center;

  .menu-item {
    height: 36px;
    min-width: 120px;
    font-size: 18px;
    padding: 0 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.3s ease;
    background-image: url('../assets/nav.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    color: #000;

    &:hover {
      background-image: url('../assets/isActive.png');
      color: #fff;
    }

    &.active {
      background-image: url('../assets/isActive.png');
      color: #fff;
    }
  }
}
</style> 