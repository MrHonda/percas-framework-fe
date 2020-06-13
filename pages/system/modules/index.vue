<template>
  <v-container>
    <h1>Modules</h1>
    <Grid
      :grid="grid"
    />
  </v-container>
</template>

<script>

import Grid from '~/components/core/grid/Grid';

export default {
  components: {Grid},
  data() {
    return {
      grid: null
    }
  },
  created() {
    this.grid = {
      headers: [
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Link',
          value: 'link'
        },
        {
          text: '',
          value: 'actions',
          width: 100
        }
      ],
      items: [
        {
          name: 'Module 1',
          link: 'module-1',
          actions: [
            {
              'key': 'edit',
              'name': 'Edit',
              'icon': 'mdi-pencil'
            },
            {
              'key': 'delete',
              'name': 'Delete',
              'icon': 'mdi-delete'
            }
          ]
        },
        {
          name: 'Module 2',
          link: 'module-2',
          actions: [
            {
              'key': 'edit',
              'name': 'Edit',
              'icon': 'mdi-pencil'
            },
            {
              'key': 'delete',
              'name': 'Delete',
              'icon': 'mdi-delete'
            }
          ]
        }
      ]
    };
  }
}
</script>
