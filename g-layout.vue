<template>
  <div class="g-layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Wheel-layout',
    data: function () {
      return {
        layoutClass: {
          hasSider: false,
        },
      };
    },
    mounted() {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'wheel-sider') {
          this.layoutClass.hasSider = true;
        }
      });
    },
  };
</script>

<style lang="scss" scoped>
  .g-layout {
    flex-grow:1;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
  }
  .hasSider {
    flex-direction: row;
  }
 
</style>
