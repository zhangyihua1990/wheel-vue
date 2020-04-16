<template>
  <div class="g-layout">
    <slot></slot>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .g-layout {
    height: 100vh;
    border: 1px solid red;
    display: flex;
    flex-direction:column;
  }
</style>
