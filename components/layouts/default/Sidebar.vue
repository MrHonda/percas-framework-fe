<template>
  <v-navigation-drawer
    app
    clipped
  >
    <v-list>
      <template
        v-for="group in applications"
      >
        <v-subheader v-text="group.name" />
        <v-list-item-group
          :key="group.key"
          color="primary"
        >
          <v-list-item
            v-for="app in group.apps"
            :key="app.key"
            :to="app.link"
            router
          >
            <v-list-item-icon>
              <v-icon v-text="app.icon" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="app.name" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    applications: {
      type: Object,
      required: true
    },
  }
}
</script>

<style scoped lang="scss">
.v-subheader {
  text-transform: uppercase;
}
</style>
