<template>
  <v-btn
    :color="button.color"
    :outlined="button.outlined"
    class="ml-2"
    @click="$emit('click', button.key)"
  >
    <v-icon left v-text="button.icon" />
    {{button.name}}
  </v-btn>
</template>

<script>
export default {
  name: 'FormButtton',
  props: {
    button: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
