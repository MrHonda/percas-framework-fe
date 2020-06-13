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
    <div class="navbar--module">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            text
          >
            <v-icon left>mdi-home</v-icon>
            Home
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list dense>
          <v-list-item-group color="primary">
            <v-list-item to="/home" router>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/home2">
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar'
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
