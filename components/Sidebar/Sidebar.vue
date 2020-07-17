<template>
  <component :is="tag" :class="classList">
    <div class="sidebar__header">
      <slot name="header"></slot>
    </div>
    <sidebar-profile />
    <div class="sidebar__content">
      <slot></slot>
    </div>
    <div class="sidebar__footer">
      <x-button
        class="sidebar__button_toggle"
        variant="tertiary"
        @click="collapsed = !collapsed"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :class="[
            'sidebar__icon_toggle',
            { sidebar__icon_toggle_collapsed: collapsed },
          ]"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 0C0.895431 0 0 0.89543 0 2V12C0 13.1046 0.89543 14 2 14H12C13.1046 14 14 13.1046 14 12V2C14 0.895431 13.1046 0 12 0H2ZM5 2C4.44772 2 4 2.44772 4 3V11C4 11.5523 4.44772 12 5 12C5.55228 12 6 11.5523 6 11V3C6 2.44772 5.55228 2 5 2Z"
            fill="#C2CFE0"
          />
        </svg>
        <span v-show="!collapsed" class="sidebar__span_toggle"
          >Toggle sidebar</span
        >
      </x-button>
    </div>
  </component>
</template>

<script>
import SidebarProfile from './SidebarProfile/SidebarProfile'
export default {
  name: 'Sidebar',
  components: {
    SidebarProfile,
  },
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
  data() {
    return {
      collapsed: false,
    }
  },
  computed: {
    classList() {
      const obj = ['sidebar']
      if (this.collapsed) obj.push('sidebar_collapsed')
      return obj
    },
  },
  mounted() {
    this.collapsed = !!(window && window.innerWidth < 1400)
    window.addEventListener('resize', (e) => {
      this.collapsed = !!(window && window.innerWidth < 1400)
    })
  },
}
</script>

<style lang="scss">
@import 'Sidebar';
</style>
