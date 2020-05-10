<template>
  <v-dialog
    v-model="dialog"
    eager
    max-width="450"
  >
    <v-card>
      <v-container>
        <slot/>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'Modal',
    data() {
      return {
        dialog: false
      }
    },
    methods: {
      show() {
        this.dialog = true;
      },
      hide() {
        this.dialog = false;
      }
    }
  }
</script>

<style scoped>

</style>
