<template>
  <TextField
    :field="field"
  />
</template>

<script>
import TextField from '@/components/core/form/fields/TextField';

export default {
  name: 'Field',
  components: {TextField},
  props: {
    field: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
