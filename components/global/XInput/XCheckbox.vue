<template>
  <div class="x-input_checkbox">
    <input :id="id" class="x-input_checkbox__input" type="checkbox" />
    <label class="x-input_checkbox__label" :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'XCheckbox',
  props: {
    id: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss">
@import 'XCheckbox';
</style>
