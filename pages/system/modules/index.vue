<template>
  <div>
    <Grid
      v-bind="grid"
      v-on:rowAction="onRowAction"
      v-on:gridAction="onGridAction"
    />
  </div>
</template>

<script>
  import Grid from '~/components/core/grid/Grid';

  export default {
    components: {Grid},
    data() {
      return {
        grid: {
          title: 'Modules',
          headers: [
            {
              key: 'id', text: 'Id', width: '120px', sortable: true, filters: [
                {key: 'id', type: 'id', text: 'Id', value: ''},
              ]
            },
            {key: 'name', text: 'Name', width: 'auto', sortable: true, filters: [
                {key: 'name', type: 'text', text: 'Name', value: ''},
              ]
            },
            {key: 'link', text: 'Link', width: 'auto', sortable: true, filters: [
                {key: 'link', type: 'text', text: 'Link', value: ''},
              ]
            },
            {key: 'actions', text: '&nbsp;', width: '100px', sortable: false},
          ],
          rows: [
            {
              id: 1,
              columns: [
                {key: 'id', type: 'id', value: 1},
                {key: 'name', type: 'text', value: 'System'},
                {key: 'link', type: 'link', value: '/system'},
                {
                  key: 'actions', type: 'actions', align: 'center', value: [
                    {key: 'edit', icon: 'mdi-pencil', text: 'Edit'}
                  ]
                }
              ],
            },
            {
              id: 2,
              columns: [
                {key: 'id', type: 'id', value: 2},
                {key: 'name', type: 'text', value: 'Home'},
                {key: 'link', type: 'link', value: '/home'},
                {
                  key: 'actions', type: 'actions', align: 'center', value: [
                    {key: 'edit', icon: 'mdi-pencil', text: 'Edit'}
                  ]
                }
              ],
            }
          ],
          sort: {
            key: 'id',
            direction: 'asc'
          },
          pagination: {
            rowsPerPage: 10,
            currentPage: 1,
            rowsCount: 1
          },
          gridActions: [
            {key: 'add', icon: 'mdi-plus', text: 'Add', color: 'success'},
            {key: 'refresh', icon: 'mdi-refresh', text: 'Refresh', color: 'primary'},
          ],
          options: {
            selectable: true
          }
        },
      }
    },
    methods: {
      onRowAction({action, id}) {
        console.log('onRowAction: ' + action + ' - ' + id);
      },
      onGridAction({action}) {
        console.log('onGridAction: ' + action);
      }
    }
  }
</script>
