<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant="drawer"
      fixed
      app
      clipped
    >
      <v-list
        :shaped="!drawer"
      >
        <v-list-item-group color="primary">
          <v-subheader :class="{'justify-center': drawer}">
            <div v-if="!drawer">Modules</div>
            <div v-else class="font-weight-bold">M</div>
          </v-subheader>
          <v-list-item
            v-for="(module, i) in modules"
            :key="i"
            :to="module.link"
            router
          >
            <v-list-item-action>
              <v-icon>{{ module.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="module.title"/>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-divider></v-divider>
      <v-list
        :shaped="!drawer"
      >
        <v-list-item-group color="primary">
          <v-subheader :class="{'justify-center': drawer}">
            <div v-if="!drawer">Applications</div>
            <div v-else class="font-weight-bold">A</div>
          </v-subheader>
          <v-list-item
            v-for="(application, i) in applications"
            :key="i"
            :to="application.link"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ application.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="application.title"/>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
      color="primary"
      dark
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title v-text="title"/>
      <v-spacer/>
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
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        drawer: false,
        title: 'Percas'
      }
    },
    computed: {
      modules() {
        return this.$store.state.modules;
      },
      ...mapGetters({
        applications: 'moduleApplications'
      })
    }
  }
</script>
