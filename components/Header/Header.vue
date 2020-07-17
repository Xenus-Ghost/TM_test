<template>
  <header class="header">
    <XSearchBar />
  </header>
</template>

<script>
import XSearchBar from '~/components/global/XSearchBar'
export default {
  name: 'Header',
  components: {
    XSearchBar,
  },
}
</script>

<style lang="scss">
@import 'Header';
</style>
