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
      phone: {
        type: Object,
        validator(value) {
          let keys = Object.keys(value);
          let valid = true;
          keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
              valid = false;
            }
          });
          return valid;
        },
      },
      ipad: {
        type: Object,
        validator(value) {
          let keys = Object.keys(value);
          let valid = true;
          keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
              valid = false;
            }
          });
          return valid;
        },
      },
      narrowPc: {
        type: Object,
        validator(value) {
          let keys = Object.keys(value);
          let valid = true;
          keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
              valid = false;
            }
          });
          return valid;
        },
      },
      pc: {
        type: Object,
        validator(value) {
          let keys = Object.keys(value);
          let valid = true;
          keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
              valid = false;
            }
          });
          return valid;
        },
      },
      widePc: {
        type: Object,
        validator(value) {
          let keys = Object.keys(value);
          let valid = true;
          keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
              valid = false;
            }
          });
          return valid;
        },
      },
    },
    methods: {
      createClasses(obj, str = '') {
        if (!obj) {return [];}
        let arr = [];
        if (obj.span) {
          arr.push(`col-${str}${obj.span}`);
        }
        if (obj.offset) {
          arr.push(`offset-${str}${obj.offset}`);
        }
        return arr;
      },
    },
    computed: {
      colStyle() {
        return {paddingLeft: this.gutter / 2 + 'px', paddingRight: this.gutter / 2 + 'px'};
      },
      colClass() {
        let {span, offset, phone, ipad, narrowPc, pc, widePc} = this;
        let createClasses = this.createClasses;
        return [
          ...createClasses({span, offset}),
          ...createClasses(phone, 'phone-'),
          ...createClasses(ipad, 'ipad-'),
          ...createClasses(narrowPc, 'narrowPc-'),
          ...createClasses(pc, 'pc-'),
          ...createClasses(widePc, 'widePc-'),
        ];
      },
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
    @media (max-width: 576px) {
      $class-prefix: col-phone-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-phone-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 577px) {
      $class-prefix: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 769px) { // 770
      $class-prefix: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 993px) {
      $class-prefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1201px) {
      $class-prefix: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }
</style>
