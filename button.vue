<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
    <g-icon :name="icon" class="icon" v-if="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    props: {
      icon: {},
      iconPosition: {
        // type: String,
        // default: 'left',
        // validator(value) {
        //   return value === 'left' || value === 'right';
        // },
      },
    },
  };
</script>

<style lang="scss">
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    // 变为flex元素，使用order进行排序
    display: inline-flex;justify-content: center;align-items: center;
    // 垂直居中vertical-align: middle;
    &:hover {border-color: var(--border-color-hover);}
    &:active {background-color: var(--button-active-bg);}
    &:focus {outline: none;}
    > .icon {order: 1;margin-right: 0.1rem;}
    > .content {order: 2;}
    &.icon-right {
      > .content {order: 1;}
      > .icon {order: 2;}
    }
  }
</style>
