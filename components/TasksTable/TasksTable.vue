<template>
  <table class="tasks-table">
    <colgroup>
      <col class="tasks-table__column_1" />
      <col
        :class="[
          'tasks-table__column_2',
          { 'tasks-table__column_hidden': !fields.name.visible },
        ]"
      />
      <col
        :class="[
          'tasks-table__column_3',
          { 'tasks-table__column_hidden': !fields.email.visible },
        ]"
      />
      <col
        :class="[
          'tasks-table__column_4',
          { 'tasks-table__column_hidden': !fields.companyName.visible },
        ]"
      />
      <col
        :class="[
          'tasks-table__column_5',
          { 'tasks-table__column_hidden': !fields.role.visible },
        ]"
      />
      <col
        :class="[
          'tasks-table__column_6',
          { 'tasks-table__column_hidden': !fields.forecast.visible },
        ]"
      />
      <col
        :class="[
          'tasks-table__column_7',
          { 'tasks-table__column_hidden': !fields.recentActivity.visible },
        ]"
      />
    </colgroup>
    <tbody>
      <tr class="tasks-table__header">
        <th>
          <x-checkbox
            :id="'table__select-all'"
            class="tasks-table__cell_title tasks-table__cell_checkbox"
          />
        </th>
        <th class="tasks-table__cell_title text-medium_13">
          <span
            class="tasks-table__icon_toggle"
            @click="fields.name.visible = !fields.name.visible"
            >{{ !!fields.name.visible ? '-' : '+' }}</span
          >
          Name
        </th>
        <th class="tasks-table__cell_title text-medium_13">
          <span
            class="tasks-table__icon_toggle"
            @click="fields.email.visible = !fields.email.visible"
            >{{ !!fields.email.visible ? '-' : '+' }}</span
          >Email
        </th>
        <th class="tasks-table__cell_title text-medium_13">
          <span
            class="tasks-table__icon_toggle"
            @click="fields.companyName.visible = !fields.companyName.visible"
            >{{ !!fields.companyName.visible ? '-' : '+' }}</span
          >Company name
        </th>
        <th class="tasks-table__cell_title text-medium_13">
          <span
            class="tasks-table__icon_toggle"
            @click="fields.role.visible = !fields.role.visible"
            >{{ !!fields.role.visible ? '-' : '+' }}</span
          >Role
        </th>
        <th class="tasks-table__cell_title text-medium_13">
          <span
            class="tasks-table__icon_toggle"
            @click="fields.forecast.visible = !fields.forecast.visible"
            >{{ !!fields.forecast.visible ? '-' : '+' }}</span
          >Forecast
        </th>
        <th class="tasks-table__cell_title text-medium_13">
          <span
            class="tasks-table__icon_toggle"
            @click="
              fields.recentActivity.visible = !fields.recentActivity.visible
            "
            >{{ !!fields.recentActivity.visible ? '-' : '+' }}</span
          >Recent activity
        </th>
      </tr>
      <tasks-table-row
        v-for="(item, i) in items"
        :key="i"
        :fields="fields"
        :row-data="item"
        @row-select="rowSelect(id)"
      />
    </tbody>
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
          visible: true,
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
