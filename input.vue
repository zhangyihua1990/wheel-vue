<template>
  <div class="wrapper">
    <label>
      <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
             @change="$emit('change',$event.target.value)"
             @input="$emit('input',$event.target.value)"
             @focus="$emit('focus',$event.target.value)"
             @blur="$emit('blur',$event.target.value)"
      >
      <template v-if="error">
        <g-icon name="error" class="icon-error"></g-icon>
        <span class="errorMessage">{{error}}</span>
      </template>
    </label>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      error: {
        type: String,
        default: '',
      },
    },
  };
</script>

<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $red: #f1253d;
  .wrapper {
    font-size: $font-size;
    label {
      display: inline-flex;
      align-items: center;
      > :not(:last-child) {margin-right: .5em;}
      input {
        height: 32px;
        border: 1px solid $border-color;
        border-radius: 4px;
        padding: 0 8px;
        &:hover {border-color: $border-color-hover;}
        &:focus {box-shadow: inset 0 1px 3px $box-shadow-color;outline: none;}
        &[disabled], &[readonly] {border-color: #bbb;color: #bbb;cursor: not-allowed;}
      }
      .icon-error {fill: $red;}
      .errorMessage {color: $red;}
    }
  }
</style>
