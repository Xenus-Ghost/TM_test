<template>
  <table class="tasks-table">
    <colgroup>
      <col class="tasks-table__column_1" />
      <col
        class="tasks-table__column_2"
        :class="[
          'tasks-table__column_2',
          { 'tasks-table__column_hidden': !fields.name.visible },
        ]"
      />
      <col
        class="tasks-table__column_3"
        :class="[
          'tasks-table__column_2',
          { 'tasks-table__column_hidden': !fields.email.visible },
        ]"
      />
      <col
        class="tasks-table__column_4"
        :class="[
          'tasks-table__column_2',
          { 'tasks-table__column_hidden': !fields.companyName.visible },
        ]"
      />
      <col
        class="tasks-table__column_5"
        :class="[
          'tasks-table__column_2',
          { 'tasks-table__column_hidden': !fields.role.visible },
        ]"
      />
      <col
        class="tasks-table__column_6"
        :class="[
          'tasks-table__column_2',
          { 'tasks-table__column_hidden': !fields.forecast.visible },
        ]"
      />
      <col
        class="tasks-table__column_7"
        :class="[
          'tasks-table__column_2',
          { 'tasks-table__column_hidden': !fields.recentActivity.visible },
        ]"
      />
    </colgroup>
    <tr class="tasks-table__header">
      <th>
        <x-checkbox
          :id="'table__select-all'"
          class="tasks-table__cell_title tasks-table__cell_checkbox"
        />
      </th>
      <th class="tasks-table__cell_title text-medium_13">Name</th>
      <th class="tasks-table__cell_title text-medium_13">Email</th>
      <th class="tasks-table__cell_title text-medium_13">Company name</th>
      <th class="tasks-table__cell_title text-medium_13">Role</th>
      <th class="tasks-table__cell_title text-medium_13">Forecast</th>
      <th class="tasks-table__cell_title text-medium_13">Recent activity</th>
    </tr>
    <tasks-table-row
      v-for="(item, i) in items"
      :key="i"
      :row-data="item"
      @row-select="rowSelect(id)"
    />
  </table>
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
      selected: [],
      fields: {
        name: {
          visible: true,
        },
        email: {
          visible: false,
        },
        companyName: {
          visible: true,
        },
        role: {
          visible: true,
        },
        forecast: {
          visible: true,
        },
        recentActivity: {
          visible: true,
        },
      },
    }
  },
  methods: {
    rowSelect(id) {
      this.selected.push(id)
    },
  },
}
</script>

<style lang="scss">
@import 'TasksTable';
</style>
