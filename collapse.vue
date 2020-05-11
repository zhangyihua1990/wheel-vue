<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'wheel-collapse',
    data() {
      return {
        eventBus: new Vue(),
        selectedCopy: this.selected
      };
    },
    props: {
      single: {
        type: Boolean,
        default: false,
      },
      selected: {
        type: Array,
        default: []
      },
    },
    provide() {
      return {
        eventBus: this.eventBus,
      };
    },
    mounted() {
      this.eventBus.$emit('update:selected', this.selectedCopy)
      this.eventBus.$on('update:addSelected', (name) => {
        if (this.single) {
          this.selectedCopy = [name]
        } else {
          this.selectedCopy.push(name)
        }
        this.eventBus.$emit('update:selected', this.selectedCopy)
        this.$emit('update:selected', this.selectedCopy)
      })
      this.eventBus.$on('update:removeSelected', (name) => {
        let index = this.selectedCopy.indexOf(name)
        this.selectedCopy.splice(index, 1)
        this.eventBus.$emit('update:selected', this.selectedCopy)
        this.$emit('update:selected', this.selectedCopy)
      })

    },
  };
</script>

<style scoped lang="scss">
  $grey: #ddd;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
  }
</style>
