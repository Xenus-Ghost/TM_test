<template>
  <component :is="tag" :class="classList">
    <div class="sidebar__header">
      <slot name="header"></slot>
    </div>
    <SidebarProfile />
    <div class="sidebar__content">
      <slot></slot>
    </div>
    <div class="sidebar__footer">
      <span @click="collapsed = !collapsed">toggle</span>
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
