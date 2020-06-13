<template>
  <v-data-table
    :headers="grid.headers"
    :items="grid.items"
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
  name: 'Grid',
  props: {
    grid: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
