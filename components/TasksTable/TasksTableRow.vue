<template>
  <tr class="tasks-table__row">
    <td>
      <x-checkbox
        :id="`${_uid}`"
        class="tasks-table__cell tasks-table__cell_checkbox"
      />
    </td>
    <td class="tasks-table__cell tasks-table__cell_name">
      <x-avatar :img="rowData.avatar" class="tasks-table__cell__avatar" />
      {{ rowData.name }}
    </td>
    <td class="tasks-table__cell tasks-table__cell_email">
      {{ rowData.email }}
    </td>
    <td class="tasks-table__cell tasks-table__cell_company-name">
      {{ rowData.companyName }}
    </td>
    <td class="tasks-table__cell tasks-table__cell_role">
      {{ rowData.role }}
    </td>
    <td class="tasks-table__cell tasks-table__cell_forecast">
      {{ rowData.forecast }}
    </td>
    <td class="tasks-table__cell tasks-table__cell_recent_activity">
      {{ rowData.recentActivity }}
    </td>
  </tr>
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
