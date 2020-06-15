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
  name: 'ModulesGrid',
  components: {ActionsColumn, TextColumn},
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
    }
  },
  created() {
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
