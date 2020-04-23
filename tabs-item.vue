<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'wheel-item',
    data() {
      return {
        active: false,
      };
    },
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
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
    created: function () {
      // console.log(this.eventBus);
      this.eventBus.$on('update:selected', (name) => {
        // console.log(name);
        this.active = name === this.name;
      });
    },
    methods: {
      xxx() {
        this.eventBus.$emit('update:selected', this.name);
      },
    },
  };
</script>

<style scoped lang="scss">
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    &.active {
      background: red;
    }
  }
</style>
