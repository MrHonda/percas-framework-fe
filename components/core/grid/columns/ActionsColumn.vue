<template>
  <div>
    <v-menu
      v-if="actions.length"
      offset-y
      left
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          icon
          :disabled="disabled"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="action in actions"
          :key="action.key"
          link
          @click="$emit('rowAction', {action: action.key, id: id})"
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
  </div>
</template>

<script>
export default {
  name: 'ActionsColumn',
  props: {
    id: {
      type: Number,
      required: true
    },
    actions: {
      type: Array,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
