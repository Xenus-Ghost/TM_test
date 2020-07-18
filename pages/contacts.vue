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
          id: 1,
          avatar: 'img/avatar_1.jpg',
          name: 'Lindsey Stroud',
          email: 'lindsey.stroud@gmail.com',
          companyName: 'Hatchbuck',
          role: 'Manager',
          forecast: '50%',
          recentActivity: '5 Minutes ago',
        },
        {
          id: 2,
          avatar: 'img/avatar_2.jpg',
          name: 'Lindsey Stroud',
          email: 'lindsey.stroud@gmail.com',
          companyName: 'Hatchbuck',
          role: 'Manager',
          forecast: '50%',
          recentActivity: '5 Minutes ago',
        },
        {
          id: 3,
          avatar: 'img/avatar_1.jpg',
          name: 'Lindsey Stroud',
          email: 'lindsey.stroud@gmail.com',
          companyName: 'Hatchbuck',
          role: 'Manager',
          forecast: '50%',
          recentActivity: '5 Minutes ago',
        },
        {
          id: 4,
          avatar: 'img/avatar_2.jpg',
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
