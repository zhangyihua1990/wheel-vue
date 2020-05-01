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
      onClickDocument(e) {
        if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
          return;
        }
        this.close();
      },
      positionContent() {
        document.body.appendChild(this.$refs.contentWrapper);
        let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
      },
      open() {
        this.visable = true;
        setTimeout(() => {
          this.positionContent();
          document.addEventListener('click', this.onClickDocument);
        }, 0);
      },
      close() {
        this.visible = false;
        document.body.removeChild(this.$refs.contentWrapper);
        document.removeEventListener('click', this.onClickDocument);
      },
      onClick(event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close();
          } else {
            this.open();
          }
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

