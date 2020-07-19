<template>
  <tr class="tasks-table__row">
    <td>
      <x-checkbox
        :id="`${rowData.id}`"
        class="tasks-table__cell tasks-table__cell_checkbox"
        @click="$emit('rowSelect', rowData.id)"
      />
    </td>
    <td
      :class="[
        'tasks-table__cell tasks-table__cell_name',
        { 'tasks-table__cell_collapse': !fields.name.visible },
      ]"
    >
      <x-avatar :img="rowData.avatar" class="tasks-table__cell__avatar" />
      {{ rowData.name }}
    </td>
    <td
      :class="[
        'tasks-table__cell tasks-table__cell_email',
        { 'tasks-table__cell_collapse': !fields.email.visible },
      ]"
    >
      {{ rowData.email }}
    </td>
    <td
      :class="[
        'tasks-table__cell tasks-table__cell_company-name',
        { 'tasks-table__cell_collapse': !fields.companyName.visible },
      ]"
    >
      {{ rowData.companyName }}
    </td>
    <td
      :class="[
        'tasks-table__cell tasks-table__cell_role',
        { 'tasks-table__cell_collapse': !fields.role.visible },
      ]"
    >
      {{ rowData.role }}
    </td>
    <td
      :class="[
        'tasks-table__cell tasks-table__cell_forecast',
        { 'tasks-table__cell_collapse': !fields.forecast.visible },
      ]"
    >
      {{ rowData.forecast }}
    </td>
    <td
      :class="[
        'tasks-table__cell tasks-table__cell_recent_activity',
        { 'tasks-table__cell_collapse': !fields.recentActivity.visible },
      ]"
    >
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
    fields: {
      type: Object,
      default: null,
    },
  },
}
</script>
<style lang="scss">
@import 'TasksTableRow';
</style>
