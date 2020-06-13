<template>
  <v-app-bar
    app
    color="primary"
    flat
    clipped-left
    dark
  >
    <v-toolbar-title class="navbar--title">
      PERCAS
    </v-toolbar-title>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          text
        >
          <v-icon left v-text="currentModule.icon" />
          {{currentModule.name}}
          <v-icon right>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="module in modules"
            :key="module.key"
            :to="module.link"
            router
          >
            <v-list-item-icon>
              <v-icon v-text="module.icon" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="module.name" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
    <v-spacer />
    <v-menu
      left
      bottom
      offset-y
    >
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>John Doe</v-list-item-title>
            <v-list-item-subtitle>Administrator</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Log out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    modules: {
      type: Object,
      required: true
    },
    currentModule: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.navbar--title {
  width: calc(#{$sidebar-width} - 16px);
  padding-right: 16px;
  font-size: 24px;
  font-weight: 500;
  cursor: default;
  text-align: center;
}
</style>
