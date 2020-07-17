<template>
  <div class="layout-wrapper">
    <Sidebar :tag="'aside'" />
    <div class="content-wrapper">
      <Header />
      <Nuxt />
    </div>
  </div>
</template>
<script>
import Sidebar from '~/components/Sidebar'
import Header from '~/components/Header'
export default {
  components: {
    Sidebar,
    Header,
  },
}
</script>
<style lang="scss">
.layout-wrapper {
  display: flex;
}
.content-wrapper {
  flex-basis: 100%;
  width: 100%;
}
</style>
