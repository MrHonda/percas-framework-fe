<template>
  <v-container>
    <h1>Modules</h1>
    <Grid
      :grid="grid"
      v-on:row-action="onRowAction"
    />
  </v-container>
</template>

<script>

import Grid from '@/components/core/grid/Grid';

export default {
  components: {Grid},
  data() {
    return {
      grid: {}
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
          id: 1,
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
          id: 2,
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
  },
  methods: {
    onRowAction({action, id}) {
      switch (action) {
        case 'edit':
          const path = `${_.trimEnd(this.$route.path, '/')}/${id}`;
          this.$router.push(path);
          break;
        case 'delete':
          break;
      }
      console.log(action, id);
    }
  }
}
</script>
