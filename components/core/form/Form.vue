<template>
  <v-form>
    <v-tabs>
      <v-tab v-for="i in 3" :key="i" :href="`#tab-${i}`">
        Tab {{i}}
      </v-tab>
      <v-tab-item v-for="i in 3" :key="i" :value="`tab-${i}`" :transition="false" :reverse-transition="false">
        <v-container>
          Tab {{i}}
          <v-row v-for="i in 4" :key="i">
            <v-col>
              <v-text-field outlined label="Label" prepend-inner-icon="mdi-tag-text-outline" clearable dense>
              </v-text-field>
            </v-col>
            <v-col>
              <v-text-field outlined label="Label" prepend-inner-icon="mdi-tag-text-outline" clearable dense>
              </v-text-field>
            </v-col>
          </v-row>
          <v-row justify="end">
            <v-btn
              color="success"
              class="mr-2"
            >
              <v-icon left>mdi-content-save</v-icon>
              Save
            </v-btn>
            <v-btn text>
              <v-icon left>mdi-close</v-icon>
              Cancel
            </v-btn>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-form>
</template>

<script>
  export default {
    name: 'Form'
  }
</script>

<style scoped>

</style>
