<template>
  <v-text-field
    :label="field.name"
    :type="field.type"
    v-model="field.value"
    :prepend-inner-icon="field.icon"
    outlined
  />
</template>

<script>
export default {
  name: 'TextField',
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
