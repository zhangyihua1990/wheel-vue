<template>
  <svg v-if="name" class="icon">
    <use :xlink:href="`#i-${name}`"/>
  </svg>
</template>

<script>
  export default {
    props: {
      name:{},
    },
  };
</script>

<style lang="scss">
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
