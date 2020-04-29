<template>
  <div class="popover" @click="xxx">
    <div class="content-wrapper" ref="contentWrapper" v-if="visable" @click.stop>
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
     <slot></slot>
    </span>
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
    mounted() {
      // console.log(this.$refs.triggerWrapper);
      // console.log(this.$refs.contentWrapper);
    },
    methods: {
      xxx() {
        if (this.visable === false) {
          this.visable = true;
          let eventHandler = () => {
            this.visable = false;
            document.removeEventListener('click', eventHandler);
          };
          setTimeout(() => {
            let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
            document.body.appendChild(this.$refs.contentWrapper);
            this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
            this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
            document.addEventListener('click', eventHandler);
          }, 0);
        }
      },
    },
  };
</script>

<style scoped lang="scss">
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
    overflow: hidden;
  }
  .content-wrapper {
    position: absolute;
    /*bottom: 100%;*/
    /*left: 0;*/
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
  }
</style>
