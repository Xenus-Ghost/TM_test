<template>
  <component
    :is="tag"
    :disabled="disabled"
    :class="[classList]"
    @click="$emit('click')"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'XButton',
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    variant: {
      type: String,
      default: 'accent',
    },
    disabled: {
      type: Boolean,
      default: null,
    },
  },
  computed: {
    classList() {
      const className = 'x-button'
      const obj = [className]
      if (this.variant) obj.push(`${className}_${this.variant}`)
      return obj
    },
  },
}
</script>

<style lang="scss">
@import 'XButton';
</style>
