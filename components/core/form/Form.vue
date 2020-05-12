<template>
  <v-form>
    <template v-for="field in form.fields">
      <div>
        <div><label :for="field.name" v-text="field.text"></label></div>
        <input type="text" :key="field.name" v-model="field.value" :id="field.name">
      </div>
    </template>
    <br>
    <div
      v-for="action in form.actions"
      :key="action.name" v-text="action.text"
      @click="$emit('action', {action: action.name})"
    ></div>
  </v-form>
</template>

<script>
  import FormApi from '@/api/form.api';

  export default {
    name: 'Form',
    data() {
      return {
        id: 0,
        form: {
          fields: [],
          actions: [],
        },
        api: null,
      }
    },
    created() {
      this.api = new FormApi(this.$axios, this.$router.currentRoute.path);
    },
    methods: {
      load(id) {
        this.clear();
        this.id = id;

        this.api.load(id).then((result) => {
          this.form = result.data;
        });
      },
      clear() {
        this.id = 0;
        this.form = {
          fields: [],
          actions: [],
        };
      },
      save() {
        if (this.id > 0) {
          return this.api.update(this.id, this.getFieldNameValuePairs());
        }

        return this.api.create(this.getFieldNameValuePairs());
      },
      delete(id) {
        return this.api.delete(id);
      },
      getFieldNameValuePairs() {
        const result = {};

        for(const field of this.form.fields) {
          result[field.name] = field.value;
        }

        return result;
      }
    }
  }
</script>
<!--<template>-->
<!--  <v-form>-->
<!--    <div class="headline py-2 px-1" v-html="title"></div>-->
<!--    <v-container v-for="(part, partName) in parts" :key="partName">-->
<!--      <v-row v-for="(row, rowIndex) in part" :key="rowIndex">-->
<!--        <v-col v-for="field in row" :key="field.name" :cols="12" :md="field.col">-->
<!--          <v-text-field outlined :label="field.text" :prepend-inner-icon="field.icon" dense :value="field.value" v-model="field.value">-->
<!--          </v-text-field>-->
<!--        </v-col>-->
<!--      </v-row>-->
<!--    </v-container>-->
<!--    <v-container>-->
<!--      <v-row justify="end">-->
<!--        <v-btn-->
<!--          v-for="action in actions"-->
<!--          :key="action.name"-->
<!--          :color="action.color"-->
<!--          :outlined="action.style.outlined"-->
<!--          :text="action.style.text"-->
<!--          class="mr-2"-->
<!--          @click="emitAction(action.name)"-->
<!--        >-->
<!--          <v-icon left>{{action.icon}}</v-icon>-->
<!--          {{action.text}}-->
<!--        </v-btn>-->
<!--      </v-row>-->
<!--    </v-container>-->
<!--&lt;!&ndash;    <v-tabs>&ndash;&gt;-->
<!--&lt;!&ndash;      <v-tab v-for="i in 3" :key="i" :href="`#tab-${i}`">&ndash;&gt;-->
<!--&lt;!&ndash;        Tab {{i}}&ndash;&gt;-->
<!--&lt;!&ndash;      </v-tab>&ndash;&gt;-->
<!--&lt;!&ndash;      <v-tab-item v-for="i in 3" :key="i" :value="`tab-${i}`" :transition="false" :reverse-transition="false">&ndash;&gt;-->
<!--&lt;!&ndash;        <v-container>&ndash;&gt;-->
<!--&lt;!&ndash;          Tab {{i}}&ndash;&gt;-->
<!--&lt;!&ndash;          <v-row v-for="i in 4" :key="i">&ndash;&gt;-->
<!--&lt;!&ndash;            <v-col>&ndash;&gt;-->
<!--&lt;!&ndash;              <v-text-field outlined label="Label" prepend-inner-icon="mdi-tag-text-outline" clearable dense>&ndash;&gt;-->
<!--&lt;!&ndash;              </v-text-field>&ndash;&gt;-->
<!--&lt;!&ndash;            </v-col>&ndash;&gt;-->
<!--&lt;!&ndash;            <v-col>&ndash;&gt;-->
<!--&lt;!&ndash;              <v-text-field outlined label="Label" prepend-inner-icon="mdi-tag-text-outline" clearable dense>&ndash;&gt;-->
<!--&lt;!&ndash;              </v-text-field>&ndash;&gt;-->
<!--&lt;!&ndash;            </v-col>&ndash;&gt;-->
<!--&lt;!&ndash;          </v-row>&ndash;&gt;-->
<!--&lt;!&ndash;          <v-row justify="end">&ndash;&gt;-->
<!--&lt;!&ndash;            <v-btn&ndash;&gt;-->
<!--&lt;!&ndash;              color="success"&ndash;&gt;-->
<!--&lt;!&ndash;              class="mr-2"&ndash;&gt;-->
<!--&lt;!&ndash;            >&ndash;&gt;-->
<!--&lt;!&ndash;              <v-icon left>mdi-content-save</v-icon>&ndash;&gt;-->
<!--&lt;!&ndash;              Save&ndash;&gt;-->
<!--&lt;!&ndash;            </v-btn>&ndash;&gt;-->
<!--&lt;!&ndash;            <v-btn text>&ndash;&gt;-->
<!--&lt;!&ndash;              <v-icon left>mdi-close</v-icon>&ndash;&gt;-->
<!--&lt;!&ndash;              Cancel&ndash;&gt;-->
<!--&lt;!&ndash;            </v-btn>&ndash;&gt;-->
<!--&lt;!&ndash;          </v-row>&ndash;&gt;-->
<!--&lt;!&ndash;        </v-container>&ndash;&gt;-->
<!--&lt;!&ndash;      </v-tab-item>&ndash;&gt;-->
<!--&lt;!&ndash;    </v-tabs>&ndash;&gt;-->
<!--  </v-form>-->
<!--</template>-->

<!--<script>-->
<!--  export default {-->
<!--    name: 'Form',-->
<!--    props: {-->
<!--      title: {-->
<!--        type: String,-->
<!--        required: true-->
<!--      },-->
<!--      parts: {-->
<!--        type: Object,-->
<!--        required: true-->
<!--      },-->
<!--      actions: {-->
<!--        type: Array,-->
<!--        required: true-->
<!--      }-->
<!--    },-->
<!--    methods: {-->
<!--      emitAction(action) {-->
<!--        this.$emit('action', {action, values: this.getValues()});-->
<!--      },-->
<!--      getValues() {-->
<!--        const values = {};-->
<!--        for (const part in this.parts) {-->
<!--          for (const row of this.parts[part]) {-->
<!--            for (const field of row) {-->
<!--              values[field.name] = field.value;-->
<!--            }-->
<!--          }-->
<!--        }-->
<!--        return values;-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
