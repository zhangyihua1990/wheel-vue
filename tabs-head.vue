<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'wheel-head',
  };
</script>

<style scoped lang="scss">
  .tabs-head {
    border: 1px solid red;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .actions-wrapper {
      margin-left: auto;
    }
  }
</style>
