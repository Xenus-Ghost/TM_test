<template>
  <div class="tasks-table">
    <div class="tasks-table__header">
      <x-checkbox :id="'table__select-all'" />
      <div class="tasks-table__cell_title text-medium_13">Email</div>
      <div class="tasks-table__cell_title text-medium_13">Company name</div>
      <div class="tasks-table__cell_title text-medium_13">Role</div>
      <div class="tasks-table__cell_title text-medium_13">Forecast</div>
      <div class="tasks-table__cell_title text-medium_13">Recent activity</div>
    </div>
    <tasks-table-row v-for="(item, i) in items" :key="i" :row-data="item" />
  </div>
</template>

<script>
import TasksTableRow from './TasksTableRow'
export default {
  name: 'TasksTable',
  components: {
    TasksTableRow,
  },
  props: {
    items: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      selected: {},
    }
  },
}
</script>

<style lang="scss">
@import 'TasksTable';
</style>
