<template>
  <transition name="slide">
    <div class="g-sider" v-if="siderShow">
      <slot></slot>
      <button @click="siderShow=!siderShow">close</button>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'wheel-sider',
    data: function () {
      return {
        siderShow: true,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .g-sider {
    position: relative;
    > button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 5.0s;
  }
  .slide-enter, .slide-leave-to {
    margin-left: -200px;
  }
</style>
