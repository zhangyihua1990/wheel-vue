<template>
  <div class="tabs">
    {{selected}}
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'wheel-tabs',
    props: {
      selected: {
        type: String,
        required: true,
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0;
        },
      },
    },
    data() {
      return {
        eventBus: new Vue(),
      };
    },
    provide() {
      return {
        eventBus: this.eventBus,
      };
    },
    mounted() {
      this.$emit('update:selected', "finance");
      console.log('this.selected的值');
      console.log(this.selected);
      // console.log(this.children);
      // this.$children.forEach((vm) => {
      //   if (vm.$options.name === 'wheel-head') {
      //     vm.$children.forEach((childVm) => {
      //       if (childVm.$options.name === 'wheel-item' && childVm.name === this.selected) {
      //         console.log(childVm);
      //         // this.eventBus.$emit('update:selected', this.selected,childVm);
      //       }
      //     });
      //   }
      // });
    },
  };
</script>

<style scoped>
  .tabs {
  }
</style>
