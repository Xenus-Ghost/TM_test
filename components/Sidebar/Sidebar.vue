<template>
  <component :is="tag" :class="classList">
    <div class="sidebar__header">
      <slot name="header"></slot>
    </div>
    <sidebar-profile />
    <div class="sidebar__content">
      <ul class="sidebar__menu sidebar-menu__list">
        <li class="sidebar-menu__item">
          <n-link class="sidebar-menu__link" to="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sidebar-menu__icon"
            >
              <path
                d="M4 12.3C3.83431 12.3 3.7 12.1657 3.7 12V4C3.7 3.83431 3.83431 3.7 4 3.7H10C10.1657 3.7 10.3 3.83431 10.3 4V12C10.3 12.1657 10.1657 12.3 10 12.3H4ZM4 20.3C3.83431 20.3 3.7 20.1657 3.7 20V16C3.7 15.8343 3.83432 15.7 4 15.7H10C10.1657 15.7 10.3 15.8343 10.3 16V20C10.3 20.1657 10.1657 20.3 10 20.3H4ZM14 20.3C13.8343 20.3 13.7 20.1657 13.7 20V12C13.7 11.8343 13.8343 11.7 14 11.7H20C20.1657 11.7 20.3 11.8343 20.3 12V20C20.3 20.1657 20.1657 20.3 20 20.3H14ZM13.7 4C13.7 3.83431 13.8343 3.7 14 3.7H20C20.1657 3.7 20.3 3.83431 20.3 4V8C20.3 8.16569 20.1657 8.3 20 8.3H14C13.8343 8.3 13.7 8.16569 13.7 8V4Z"
                stroke="#C2CFE0"
                stroke-width="1.4"
              />
            </svg>
            <span v-show="!collapsed">Dashboard</span>
          </n-link>
        </li>
        <li class="sidebar-menu__item">
          <n-link class="sidebar-menu__link" to="/tasks">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sidebar-menu__icon"
            >
              <path
                d="M3 3.7H20C20.1634 3.7 20.3 3.8366 20.3 4V10C20.3 10.1634 20.1634 10.3 20 10.3H3C2.8366 10.3 2.7 10.1634 2.7 10V4C2.7 3.8366 2.8366 3.7 3 3.7ZM3 13.7H20C20.1634 13.7 20.3 13.8366 20.3 14V20C20.3 20.1634 20.1634 20.3 20 20.3H3C2.8366 20.3 2.7 20.1634 2.7 20V14C2.7 13.8366 2.8366 13.7 3 13.7Z"
                stroke="#C2CFE0"
                stroke-width="1.4"
              />
            </svg>
            <span v-show="!collapsed">Tasks</span></n-link
          >
        </li>
        <li class="sidebar-menu__item">
          <n-link class="sidebar-menu__link" to="/email">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sidebar-menu__icon"
            >
              <path
                d="M2.71 6.00058V6C2.71 5.28202 3.29116 4.7 4 4.7H20C20.7134 4.7 21.3 5.2866 21.3 6V18C21.3 18.7134 20.7134 19.3 20 19.3H4C3.28669 19.3 2.70015 18.7135 2.7 18.0003C2.7 18.0002 2.7 18.0001 2.7 18L2.71 6.00058Z"
                stroke="#C2CFE0"
                stroke-width="1.4"
              />
              <path d="M3 6L12 12L21 6" stroke="#C2CFE0" stroke-width="1.4" />
            </svg>
            <span v-show="!collapsed">Email</span></n-link
          >
        </li>
        <li class="sidebar-menu__item">
          <n-link class="sidebar-menu__link" to="/contacts">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sidebar-menu__icon"
            >
              <path
                d="M8.03329 7.33317C8.03329 5.14144 9.80822 3.3665 12 3.3665C14.1917 3.3665 15.9666 5.14144 15.9666 7.33317C15.9666 9.52491 14.1917 11.2998 12 11.2998C9.80822 11.2998 8.03329 9.52491 8.03329 7.33317ZM3.36663 17.8332C3.36663 17.3144 3.62092 16.8083 4.16167 16.3092C4.70718 15.8057 5.49622 15.3581 6.42548 14.9859C8.28512 14.2409 10.53 13.8665 12 13.8665C13.47 13.8665 15.7148 14.2409 17.5744 14.9859C18.5037 15.3581 19.2927 15.8057 19.8382 16.3092C20.379 16.8083 20.6333 17.3144 20.6333 17.8332V20.6332H3.36663V17.8332Z"
                stroke="#C2CFE0"
                stroke-width="1.4"
              />
            </svg>
            <span v-show="!collapsed">Contacts</span></n-link
          >
        </li>
        <li class="sidebar-menu__item">
          <n-link class="sidebar-menu__link" to="/chat">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sidebar-menu__icon"
            >
              <path
                d="M6 17.3H5.71005L5.50503 17.505L2.7 20.3101V4C2.7 3.2866 3.2866 2.7 4 2.7H20C20.7134 2.7 21.3 3.2866 21.3 4V16C21.3 16.7134 20.7134 17.3 20 17.3H6Z"
                stroke="#C2CFE0"
                stroke-width="1.4"
              />
            </svg>
            <span v-show="!collapsed">Chat</span></n-link
          >
        </li>
        <li class="sidebar-menu__item">
          <n-link class="sidebar-menu__link" to="/deals">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sidebar-menu__icon"
            >
              <path
                d="M3 4.7H21C21.1634 4.7 21.3 4.8366 21.3 5V19C21.3 19.1634 21.1634 19.3 21 19.3H3C2.8366 19.3 2.7 19.1634 2.7 19V5C2.7 4.8366 2.8366 4.7 3 4.7Z"
                stroke="#C2CFE0"
                stroke-width="1.4"
              />
              <rect x="7.80005" y="4" width="1.4" height="16" fill="#C2CFE0" />
              <rect x="14.8" y="4" width="1.4" height="16" fill="#C2CFE0" />
            </svg>
            <span v-show="!collapsed">Deals</span></n-link
          >
        </li>
      </ul>
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
