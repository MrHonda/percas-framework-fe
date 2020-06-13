<template>
  <v-app>
    <Navbar
      :modules="modules"
      :currentModule="currentModule"
    />
    <Sidebar
      :applications="applications"
    />
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '../components/layouts/default/Navbar';
import Sidebar from '../components/layouts/default/Sidebar';
import { mapGetters } from 'vuex';

export default {
  components: {Sidebar, Navbar},
  computed: {
    modules() {
      return this.$store.state.modules;
    },
    currentModule() {
      return this.$store.state.currentModule;
    },
    ...mapGetters({
      applications: 'moduleApplications'
    })
  }
}
</script>
