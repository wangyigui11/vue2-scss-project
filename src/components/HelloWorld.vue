<template>
  <div class="hello-world">
    <h1 class="title">{{ msg }}</h1>
    <div class="content">
      <p class="description">Welcome to your Vue.js + SCSS project</p>
      <button class="btn" @click="count++">Count is: {{ count }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'Welcome to Your Vue.js App'
    }
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style lang="scss">
.hello-world {
  padding: 2rem;
  text-align: center;

  .title {
    color: #42b983;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .content {
    .description {
      color: #666;
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }

    .btn {
      background-color: #42b983;
      border: none;
      border-radius: 4px;
      color: white;
      cursor: pointer;
      font-size: 1rem;
      padding: 0.5rem 1rem;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: darken(#42b983, 10%);
      }
    }
  }
}
</style>
