<template>
  <div class="collapseItem" @click="toggle">
    <div class="title">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'wheel-collapse-item',
    data() {
      return {
        open: false,
      };
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
    methods: {
      toggle() {
        if (this.open) {
          this.open = false;
        } else {
          this.eventBus && this.eventBus.$emit('update:selected', this.name);
        }
      },
      close() {
        this.open = false;
      },
      show() {
        this.open = true;
      },
    },
    mounted() {
      this.eventBus && this.eventBus.$on('update:selected', (name) => {
        if (name !== this.name) {
          this.close();
        } else {
          this.show();
        }
      });
    },
    inject: ['eventBus'],
  };
</script>

<style scoped lang="scss">
  $grey: #ddd;
  $border-radius: 4px;
  .collapseItem {
    > .title {
      display: flex;
      min-height: 32px;
      padding: 0 8px;
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
      align-items: center;
      border: 1px solid $grey;
    }
    > .content {
      padding: 8px;
    }
    &:first-child {
      > .title {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }
    &:last-child {
      > .title:last-child {
        border-bottom: none;
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
    }
  }
</style>
