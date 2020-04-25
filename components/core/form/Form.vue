<template>
  <v-form>
    <div class="headline py-2 px-1" v-html="title"></div>
    <v-container v-for="(part, partName) in parts" :key="partName">
      <v-row v-for="(row, rowIndex) in part" :key="rowIndex">
        <v-col v-for="field in row" :key="field.name" :cols="12" :md="field.col">
          <v-text-field outlined :label="field.text" :prepend-inner-icon="field.icon" dense :value="field.value" v-model="field.value">
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row justify="end">
        <v-btn
          v-for="action in actions"
          :key="action.name"
          :color="action.color"
          :outlined="action.style.outlined"
          :text="action.style.text"
          class="mr-2"
          @click="emitAction(action.name)"
        >
          <v-icon left>{{action.icon}}</v-icon>
          {{action.text}}
        </v-btn>
      </v-row>
    </v-container>
<!--    <v-tabs>-->
<!--      <v-tab v-for="i in 3" :key="i" :href="`#tab-${i}`">-->
<!--        Tab {{i}}-->
<!--      </v-tab>-->
<!--      <v-tab-item v-for="i in 3" :key="i" :value="`tab-${i}`" :transition="false" :reverse-transition="false">-->
<!--        <v-container>-->
<!--          Tab {{i}}-->
<!--          <v-row v-for="i in 4" :key="i">-->
<!--            <v-col>-->
<!--              <v-text-field outlined label="Label" prepend-inner-icon="mdi-tag-text-outline" clearable dense>-->
<!--              </v-text-field>-->
<!--            </v-col>-->
<!--            <v-col>-->
<!--              <v-text-field outlined label="Label" prepend-inner-icon="mdi-tag-text-outline" clearable dense>-->
<!--              </v-text-field>-->
<!--            </v-col>-->
<!--          </v-row>-->
<!--          <v-row justify="end">-->
<!--            <v-btn-->
<!--              color="success"-->
<!--              class="mr-2"-->
<!--            >-->
<!--              <v-icon left>mdi-content-save</v-icon>-->
<!--              Save-->
<!--            </v-btn>-->
<!--            <v-btn text>-->
<!--              <v-icon left>mdi-close</v-icon>-->
<!--              Cancel-->
<!--            </v-btn>-->
<!--          </v-row>-->
<!--        </v-container>-->
<!--      </v-tab-item>-->
<!--    </v-tabs>-->
  </v-form>
</template>

<script>
  export default {
    name: 'Form',
    props: {
      title: {
        type: String,
        required: true
      },
      parts: {
        type: Object,
        required: true
      },
      actions: {
        type: Array,
        required: true
      }
    },
    methods: {
      emitAction(action) {
        this.$emit('action', {action, values: this.getValues()});
      },
      getValues() {
        const values = {};
        for (const part in this.parts) {
          for (const row of this.parts[part]) {
            for (const field of row) {
              values[field.name] = field.value;
            }
          }
        }
        return values;
      }
    }
  }
</script>

<style scoped>

</style>
