<template>
  <div class="sidebar__profile">
    <XAvatar></XAvatar>
    <div class="sidebar-profile__info">
      <div class="sidebar-profile__name">
        Sierra Ferguson
      </div>
      <div class="sidebar-profile__contact">
        s.ferguson@gmail.com
      </div>
    </div>
  </div>
</template>

<script>
import XAvatar from '../../global/XAvatar/XAvatar'
export default {
  name: 'SidebarProfile',
  components: {
    XAvatar,
  },
}
</script>

<style lang="scss">
@import 'SidebarProfile';
</style>
