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
        this.eventBus.$emit('update:selected', this.name,this);
      },
    },
  };
</script>

<style scoped lang="scss">
  $tab-height: 40px;
  $fontColor: blue;
  .tabs-item {
    display: flex;
    align-items: center;
    height: $tab-height;
    padding: 0 1em;
    flex-shrink: 0;
    cursor: pointer;
    &.active {
      color: $fontColor;
      font-weight: bold;
    }
  }
</style>
