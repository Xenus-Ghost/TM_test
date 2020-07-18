<template>
  <div class="sidebar__profile sidebar-profile">
    <x-avatar
      class="sidebar-profile__avatar"
      :img="profileData.avatar"
    ></x-avatar>
    <div class="sidebar-profile__info">
      <div class="text-medium_14 sidebar-profile__name">
        {{ profileData.name }}
      </div>
      <div class="text-medium_11 sidebar-profile__email">
        {{ profileData.email }}
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
  data() {
    return {
      profileData: {
        avatar: 'img/avatar.jpg',
        name: 'Sierra Ferguson',
        email: 's.ferguson@gmail.com',
      },
    }
  },
}
</script>

<style lang="scss">
@import 'SidebarProfile';
</style>
