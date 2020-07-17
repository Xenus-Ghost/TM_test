<template>
  <component :is="tag" class="x-container">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'XContainer',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
}
</script>

<style lang="scss">
@import 'XContainer';
</style>
