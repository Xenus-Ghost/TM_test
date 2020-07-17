<template>
  <div class="tasks-table__row">
    <x-checkbox :id="`${_uid}`" />
    <div class="tasks-table__cell tasks-table__cell_name">
      {{ rowData.name }}
    </div>
    <div class="tasks-table__cell tasks-table__cell_email">
      {{ rowData.email }}
    </div>
    <div class="tasks-table__cell tasks-table__cell_company-name">
      {{ rowData.companyName }}
    </div>
    <div class="tasks-table__cell tasks-table__cell_role">
      {{ rowData.role }}
    </div>
    <div class="tasks-table__cell tasks-table__cell_forecast">
      {{ rowData.forecast }}
    </div>
    <div class="tasks-table__cell tasks-table__cell_recent_activity">
      {{ rowData.recentActivity }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TasksTableRow',
  props: {
    rowData: {
      type: Object,
      default: null,
    },
  },
}
</script>
<style lang="scss">
@import 'TasksTableRow';
</style>
