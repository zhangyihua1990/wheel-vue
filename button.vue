<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <g-icon :name="icon" class="icon" v-if="icon && !loading"></g-icon>
    <g-icon name="loading" :class="{loading:loading}" v-if="loading"></g-icon>
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
        type: String, default: 'left', validator(value) {
          return value === 'left' || value === 'right';
        }
      },
      loading: {type: Boolean, default: false},
    },
  };
</script>

<style lang="scss">
  @keyframes spin {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(360deg)
    }
  }
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg); /* 变为flex元素，使用order进行排序*/
    display: inline-flex;
    justify-content: center;
    align-items: center; /* 垂直居中vertical-align: middle;*/
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background-color: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }
    > .icon {
      order: 1;
      margin-right: 0.1rem;
    }
    > .content {
      order: 2;
    }
    &.icon-right {
      > .content {
        order: 1;
      }
      > .icon {
        order: 2;
      }
    }
    .loading {
      animation: spin 2s infinite linear
    }
  }
</style>
