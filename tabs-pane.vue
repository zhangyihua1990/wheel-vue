<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'wheel-pane',
    data() {
      return {
        active: false,
      };
    },
    props: {
      name: {
        type: String | Number,
        required: true,
      },
    },
    computed: {
      classes() {
        return {active: this.active};
      },
    },
    inject: ['eventBus'],
    created() {
      // console.log(this.eventBus);
      this.eventBus.$on('update:selected', (name) => {
        // console.log(name);
        this.active = name === this.name;
      });
    },
  };
</script>

<style scoped lang="scss">
  .tabs-pane {
    &.active {
      background: red;
    }
  }
</style>
