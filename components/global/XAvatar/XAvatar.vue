<template>
  <div class="x-avatar">
    <img :src="img" class="x-avatar__image" />
  </div>
</template>

<script>
export default {
  name: 'XAvatar',
  props: {
    img: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss">
@import 'XAvatar';
</style>
