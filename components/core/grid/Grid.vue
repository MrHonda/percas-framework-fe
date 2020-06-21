<template>
  <v-data-table
    v-if="grid"
    :headers="grid.headers"
    :items="grid.rows"
    :loading="loading"
    item-key="id.value"
  >
    <template v-slot:top>
      <v-container v-if="grid.filters">
        <v-row>
          <v-col
            v-for="(filter, key) in grid.filters"
            :key="key"
            :md="filter.col"
            sm="6"
            cols="12"
          >
            <v-text-field
              :label="filter.name"
              :type="filter.type"
              v-model="filter.value"
              :prepend-inner-icon="filter.icon"
              outlined
              dense
              hide-details
            />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="auto">
            <v-btn
              color="primary"
              class="ml-2"
              @click="applyFilters"
            >
              <v-icon left>mdi-magnify</v-icon>
              Filter
            </v-btn>
            <v-btn
              color="default"
              class="ml-2"
              outlined
              @click="clearFilters"
            >
              <v-icon left>mdi-close</v-icon>
              Clear
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <template
      v-for="slotName in colSlots"
      v-slot:[slotName]="{ item, value }"
    >
      <ActionsColumn
        v-if="value.type === 'actions'"
        :id="item.id.value"
        :actions="value.value"
        :disabled="loading"
        v-on:rowAction="onRowAction"
      />
      <TextColumn
        v-else-if="value.type !== 'hidden'"
        :value="value.value"
      />
    </template>
  </v-data-table>
</template>

<script>
import TextColumn from '@/components/core/grid/columns/TextColumn';
import ActionsColumn from '@/components/core/grid/columns/ActionsColumn';

export default {
  name: 'Grid',
  components: {ActionsColumn, TextColumn},
  props: {
    path: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      grid: null,
      loading: false,
    };
  },
  computed: {
    colSlots() {
      const slots = [];
      for (const header of this.grid.headers) {
        slots.push('item.' + header.value);
      }
      return slots;
    },
  },
  created() {
    this.reset();
    this.load();
  },
  methods: {
    load() {
      this.loading = true;
      this.$axios.$get('http://localhost:8000' + this.path).then(response => {
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
    getRowPath(id) {
      return `${_.trimEnd(this.path, '/')}/${id}`;
    },
    onRowAction({action, id}) {
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
      this.$router.push(this.getRowPath(id));
    },
    handleDeleteRowAction(id) {
      const confirm = window.confirm('Delete?');
      if (confirm) {
        this.loading = true;
        this.$axios.$delete('http://localhost:8000' + this.getRowPath(id)).then(() => {
          this.load();
        });
      }
    },
    applyFilters() {
      this.loading = true;
      this.$axios.$post('http://localhost:8000' + this.path, {filters: this.grid.filters}).then(response => {
        this.grid = response;
        this.loading = false;
      });
    },
    clearFilters() {
      this.loading = true;
      for (const filter of this.grid.filters) {
        filter.value = '';
      }
      this.applyFilters();
    }
  }
}
</script>

<style scoped>

</style>
