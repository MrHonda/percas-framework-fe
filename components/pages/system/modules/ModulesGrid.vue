<template>
  <Grid :path="path" />
</template>

<script>

import Grid from '@/components/core/grid/Grid';

export default {
  name: 'ModulesGrid',
  components: {Grid},
  data() {
    return {
      path: '/system/modules'
    };
  }
}
</script>

<style scoped>

</style>
