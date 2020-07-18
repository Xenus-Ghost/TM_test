<template>
  <x-container>
    <x-button variant="accent"> Add contact </x-button>
    <tasks-table :items="tasks"></tasks-table>
  </x-container>
</template>

<script>
import TasksTable from '~/components/TasksTable/TasksTable'
export default {
  components: {
    TasksTable,
  },
  data() {
    return {
      tasks: [
        {
          name: 'Lindsey Stroud',
          email: 'lindsey.stroud@gmail.com',
          companyName: 'Hatchbuck',
          role: 'Manager',
          forecast: '50%',
          recentActivity: '5 Minutes ago',
        },
        {
          name: 'Lindsey Stroud',
          email: 'lindsey.stroud@gmail.com',
          companyName: 'Hatchbuck',
          role: 'Manager',
          forecast: '50%',
          recentActivity: '5 Minutes ago',
        },
        {
          name: 'Lindsey Stroud',
          email: 'lindsey.stroud@gmail.com',
          companyName: 'Hatchbuck',
          role: 'Manager',
          forecast: '50%',
          recentActivity: '5 Minutes ago',
        },
        {
          name: 'Lindsey Stroud',
          email: 'lindsey.stroud@gmail.com',
          companyName: 'Hatchbuck',
          role: 'Manager',
          forecast: '50%',
          recentActivity: '5 Minutes ago',
        },
      ],
    }
  },
}
</script>
