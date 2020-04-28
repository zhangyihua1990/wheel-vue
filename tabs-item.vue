<template>
  <div class="tabs-item" @click="onClick" :class="classes">
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
        return {
          active: this.active,
          disabled: this.disabled,
        };
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
      onClick() {
        if (this.disabled) {return;}
        this.eventBus.$emit('update:selected', this.name, this);
      },
    },
  };
</script>

<style scoped lang="scss">
  $tab-height: 40px;
  $fontColor: blue;
  $disabled-text-color: grey;
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
    &.disabled {
      color: $disabled-text-color;
      cursor: not-allowed;
    }
  }
</style>
