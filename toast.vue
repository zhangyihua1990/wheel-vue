<template>
  <div class="toast">
    <slot v-if="!enableHtml"></slot>
    <div v-else v-html="$slots.default[0]"></div>
    <div class="line">
      <span class="close" v-if="closeButton" @click="onClickClose">
        {{closeButton.text}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'wheel-toast',
    props: {
      autoClose: {
        type: Boolean,
        default: true,
      },
      autoCloseDelay: {
        type: Number,
        default: 5,
      },
      closeButton: {
        type: Object,
        default() {
          return {
            text: '关闭',
            callback: undefined,
          };
        },
      },
      enableHtml: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    methods: {
      close() {
        this.$el.remove();
        this.$destroy();
      },
      onClickClose() {
        this.close();
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback();
        }
      },
    },
  };
</script>

<style scoped lang="scss">
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  .toast {
    font-size: $font-size;
    line-height: 1.8;
    height: $toast-height;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    color: white;
    background: $toast-bg;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
    padding: 0 16px;
  }
  .close {
    padding-left: 16px;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
    display: flex;
    align-items: center;
  }
</style>
