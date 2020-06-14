<template>
  <v-data-table
    v-if="grid"
    :headers="grid.headers"
    :items="grid.rows"
    :loading="loading"
    item-key="id.value"
  >
    <template
      v-for="slotName in colSlots"
      v-slot:[slotName]="{ item, value }"
    >
      <template v-if="value.type === 'hidden'"></template>
      <template v-else-if="value.type === 'actions'">
        <v-menu
          v-if="value && value.value.length"
          offset-y
          left
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              icon
              :disabled="loading"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="action in value.value"
              :key="action.key"
              link
              @click="onRowAction(action.key, item.id.value)"
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
      <template v-else>
        {{value.value}}
      </template>

    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'ModulesGrid',
  data() {
    return {
      grid: null,
      loading: false,
      test: 'item.name',
      test2: {'name': 'Test'}
    };
  },
  computed: {
    colSlots() {
      const slots = [];
      for (const header of this.grid.headers) {
        slots.push('item.' + header.value);
      }
      return slots;
    }
  },
  created() {
    console.log(this.test2[this.test]);
    this.reset();
    this.load();
  },
  methods: {
    load() {
      this.loading = true;
      this.$axios.$get('http://localhost:8000' + this.$route.path).then(response => {
        this.grid = response;
        this.loading = false;
      });
    },
    reset() {
      this.grid = {
        headers: [],
        rows: []
      }
    },
    onRowAction(action, id) {
      switch (action) {
        case 'edit':
          this.handleEditRowAction(id);
          break;
        case 'delete':
          this.handleDeleteRowAction(id);
          break;
      }
    },
    handleEditRowAction(id) {
      const path = `${_.trimEnd(this.$route.path, '/')}/${id}`;
      this.$router.push(path);
    },
    handleDeleteRowAction(id) {
      const confirm = window.confirm('Delete?');
      if (confirm) {
        this.loading = true;
        const path = `${_.trimEnd(this.$route.path, '/')}/${id}`;
        this.$axios.$delete('http://localhost:8000' + path).then(() => {
          this.load();
        });
      }
    }
  }
}
</script>

<style scoped>

</style>
