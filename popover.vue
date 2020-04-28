<template>
  <div class="popover" @click="xxx">
    <div class="content-wrapper" v-if="visable" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'wheel-popover',
    data() {
      return {
        visable: false,
      };
    },
    methods: {
      xxx() {
        if (this.visable === false) {
          this.visable = true;
          setTimeout(() => {
            let eventHandler = () => {
              console.log(1);
              this.visable = false;
              document.removeEventListener('click', eventHandler);
            };
            document.addEventListener('click', eventHandler);
          }, 0);
        }
      },
    },
  };
</script>

<style lang="scss">
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
    > .content-wrapper {
      position: absolute;
      bottom: 100%;
      left: 0;
      border: 1px solid red;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.5)
    }
  }
</style>
