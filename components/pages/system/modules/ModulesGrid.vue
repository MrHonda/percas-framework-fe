<template>
  <v-data-table
    :headers="headers"
    :items="rows"
  >
    <template v-slot:item.actions="{ item }">
      <v-menu
        v-if="item.actions && item.actions.length"
        offset-y
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            icon
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="action in item.actions"
            :key="action.key"
            link
            @click="onRowAction(action.key, item.id)"
          >
            <v-list-item-icon>
              <v-icon v-text="action.icon" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="action.name" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'ModulesGrid',
  data() {
    return {
      headers: [],
      rows: []
    };
  },
  created() {
    this.headers = [
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
    ];
    this.rows = [
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
    ];
  },
  methods: {
    onRowAction(action, id) {
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

<style scoped>

</style>
