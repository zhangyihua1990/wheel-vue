<template>
  <div class="popover" @click="onClick" ref="popover">
    <div class="content-wrapper" ref="contentWrapper" v-if="visable">
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
      positionContent() {
        let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
      },
      listenToDocument: function () {
        let eventHandler = (e) => {
          console.log(this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target)));
          if (!this.$refs.contentWrapper.contains(e.target)) {
            this.visable = false;
            document.removeEventListener('click', eventHandler);
          }
        };
        document.body.appendChild(this.$refs.contentWrapper);
        document.addEventListener('click', eventHandler);
      },
      onShow() {
        setTimeout(() => {
          this.positionContent();
          this.listenToDocument();
        }, 0);
      },
      onClick(event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          this.visable = true;
          this.onShow();
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
