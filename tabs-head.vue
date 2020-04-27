<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'wheel-head',
    inject: ['eventBus'],
    mounted() {
      this.eventBus.$on('update:selected',(item,vm)=>{
        let {width,height,top,left} = vm.$el.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left}px`
      })
    },
    created() {
      // this.$emit('update:selected',()=>{})
      this.eventBus.$on('update:selected', (item, vm) => {
        console.log(item);
        console.log(vm);
        // console.log(vm.$el.getBoundingClientRect());
      });
    },
  };
</script>

<style scoped lang="scss">
  $blue: blue;
  .tabs-head {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border: 1px solid red;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 1px solid $blue;
      transition: all 250ms;
    }
    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style>
