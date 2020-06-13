<template>
  <v-app>
    <Navbar />
    <Sidebar />
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '../components/layouts/default/Navbar';
import Sidebar from '../components/layouts/default/Sidebar';

export default {
  components: {Sidebar, Navbar},
  data() {
    return {}
  }
}
</script>
