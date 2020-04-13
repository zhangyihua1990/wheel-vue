<template>
  <div class="col" :class="colClass"
       :style="colStyle"
  >
    <div style="border: 1px solid green; height: 100px">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      span: {
        type: [Number, String],
      },
      offset: {
        type: [Number, String],
      },
    },
    computed: {
      colStyle() {
        return {paddingLeft: this.gutter / 2 + 'px', paddingRight: this.gutter / 2 + 'px'};
      },
      colClass() {
        return [this.span && `col-${this.span}`, this.offset && `offset-${this.offset}`]
      }
    },
    data() {
      return {
        gutter: 0,
      };
    },
  };
</script>

<style scoped lang="scss">
  .col {
    flex-wrap: nowrap;
    height: 100px;
    background: grey;
    width: 50%;
    border: 1px solid red;
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
</style>
